// Libraries
import { serialize } from "cookie";

// Utils
import { createJwtToken } from "@/utils/jwtToken";

export const serializeCookie = (
  name: string,
  token: string,
  maxAge: number
): string =>
  serialize(name, token, {
    httpOnly: true,
    maxAge: maxAge,
    sameSite: "strict",
    path: "/"
  });

export const serializeJwtCookie = (
  name: string,
  data: {},
  maxAge: number
): string => {
  const token = createJwtToken(data, maxAge);

  return serialize(name, token, {
    httpOnly: true,
    maxAge: maxAge,
    sameSite: "strict",
    path: "/"
  });
};
