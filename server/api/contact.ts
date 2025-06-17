import { PrismaClient } from "@prisma/client";

const config = useRuntimeConfig();

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: config.databaseUrl,
    },
  },
});

export default defineEventHandler(async (event) => {
  await checkAuth(event); // 👈 Only runs here
  // Use config.databaseUrl to connect to Prisma or other services
  const method = getMethod(event);

  if (method === "GET") {
    // Return all messages
    const contacts = await prisma.contact.findMany({
      orderBy: { createdAt: "desc" },
    });
    return contacts;
  }

  if (method === "POST") {
    const body = await readBody(event);
    const name = body.name?.toString().trim();
    const message = body.message?.toString().trim();

    if (!name || !message) {
      return sendError(
        event,
        createError({
          statusCode: 400,
          statusMessage: "Missing name or message",
        })
      );
    }

    const saved = await prisma.contact.create({
      data: { name, message },
    });

    return saved;
  }

  return sendError(
    event,
    createError({
      statusCode: 405,
      statusMessage: "Method Not Allowed",
    })
  );
});
