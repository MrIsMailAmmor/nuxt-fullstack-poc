// server/utils/auth.ts

import { H3Event } from "h3";

export async function checkAuth(event: H3Event) {
  const authHeader = getHeader(event, "authorization");

  if (!authHeader || authHeader !== "Bearer super-secret-key") {
    throw createError({
      statusCode: 401,
      statusMessage: "Unauthorized",
    });
  }
}
