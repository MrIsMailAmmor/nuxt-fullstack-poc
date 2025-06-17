// check Console for middleware logs
export default defineEventHandler((event) => {
  const method = event.req.method;
  const url = event.req.url;
  const time = new Date().toISOString();

  console.log(`[${time}] ${method} ${url}`);
});
