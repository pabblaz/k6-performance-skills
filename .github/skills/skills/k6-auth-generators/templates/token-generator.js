import crypto from "k6/crypto";
import encoding from "k6/encoding";

const ALG_TO_HASH = {
  HS256: "sha256",
  HS384: "sha384",
  HS512: "sha512",
};

function signJwtPart(data, secret, algorithm) {
  const hash = ALG_TO_HASH[algorithm] || ALG_TO_HASH.HS256;
  const digest = crypto.hmac(hash, secret, data, "binary");
  return encoding.b64encode(digest, "rawurl");
}

export function generateJwtToken(payload, secret, algorithm = "HS256") {
  const header = { typ: "JWT", alg: algorithm };
  const encodedHeader = encoding.b64encode(JSON.stringify(header), "rawurl");
  const encodedPayload = encoding.b64encode(JSON.stringify(payload), "rawurl");
  const signingInput = `${encodedHeader}.${encodedPayload}`;
  const signature = signJwtPart(signingInput, secret, algorithm);
  return `${signingInput}.${signature}`;
}

export function buildBearerAuthFromEnv(payload, secretEnv = "K6_JWT_SECRET") {
  const secret = __ENV[secretEnv];
  if (!secret) {
    throw new Error(`Missing required env var: ${secretEnv}`);
  }
  return `Bearer ${generateJwtToken(payload, secret)}`;
}
