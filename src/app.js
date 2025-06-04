import express from "express";
import cors from "cors";
//what is cors?
// ANS=CORS (Cross-Origin Resource Sharing) is a security mechanism built
// into web browsers that controls how resources (like data from an API) can be
// requested from a different origin (domain, protocol, or port) than the one your
// web page is served from.
// Why it is important?
// It is important because to this protects users from malicious
// websites stealing their private data (e.g., cookies, session tokens).

import cookieParser from "cookie-parser";
//cookieparse is used to access cookie of user and set the cookie of the user.
const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
    // refers to authentication-related information such as:
    // Cookies
    // HTTP authentication headers (e.g., Basic Auth or Bearer tokens)
    // Client-side SSL certificates
  })
);

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
//urlencoded is used to understand special character like @ # etc.
app.use(express.static("public"));
//to get access from public file like assets favicon etc.

app.use(cookieParser());
export { app };
