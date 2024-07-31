// app/api/set-cookies/route.ts
"use server";

import { cookies } from "next/headers";

export async function POST(request: Request) {
  const { accessToken, refreshToken } = await request.json();
  console.log("resssssss------------>", accessToken, refreshToken);

  cookies().set("access-token", accessToken, {
    httpOnly: true,
    sameSite: "strict",
    secure: true,
  });

  cookies().set("refresh-token", refreshToken, {
    httpOnly: true,
    sameSite: "strict",
    secure: true,
  });

  return new Response(JSON.stringify({ message: "Cookies set successfully" }), { status: 200 });
}
