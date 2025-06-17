export default defineEventHandler((event) => {
  const name = event.context.params?.name || "Guest";
  return { message: `Hello, ${name}!` };
});
