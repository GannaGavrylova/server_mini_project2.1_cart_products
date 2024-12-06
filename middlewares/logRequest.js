export default function logRequest(req, res, next) {
  console.log(`Recieved ${req.method} request for ${req.url}`);
  next();
}
