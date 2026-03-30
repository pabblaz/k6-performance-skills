import crypto from "k6/crypto";
import encoding from "k6/encoding";

function canonicalBody(body) {
  if (!body) {
    return "";
  }
  return typeof body === "string" ? body : JSON.stringify(body);
}

export function buildHmacSignature({ method, uri, body, timestamp, appId, secret }) {
  const normalizedUri = encodeURIComponent(uri).toLowerCase();
  const normalizedMethod = method.toUpperCase();
  const payload = `${appId}${normalizedMethod}${normalizedUri}${canonicalBody(body)}${timestamp}`;
  const digest = crypto.hmac("sha256", secret, payload, "binary");
  return encoding.b64encode(digest, "std");
}

export function buildHmacAuthHeader({ method, uri, body, appIdEnv, secretEnv }) {
  const appId = __ENV[appIdEnv];
  const secret = __ENV[secretEnv];
  if (!appId || !secret) {
    throw new Error(`Missing env vars: ${appIdEnv} or ${secretEnv}`);
  }
  const timestamp = Math.floor(Date.now() / 1000);
  const signature = buildHmacSignature({ method, uri, body, timestamp, appId, secret });
  return `hmac ${appId}:${signature}:${timestamp}`;
}
