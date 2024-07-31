"use server";
import { signIn } from "next-auth/react";

import { authOptions } from "@/services/authBP/ssoConfiguration";
import { getServerSession } from "next-auth";

export async function requestAPi(
  method: "Get" | "Post" | "Put" | "Patch" | "Delete" = "Get",
  url: string,
  params: any,
  hasToken: boolean,
  dataApi: object | null,
  hasClient: boolean,
  options: object
  // options: RequestInit = {},
): Promise<any> {
  try {
    let baseURL;
    if (hasClient) {
      baseURL = process.env.NEXT_PUBLIC_BASE_URL;
    } else {
      baseURL = process.env.BASE_URL;
    }
    // let headers: { [key: string]: string } = {
    //     "Content-Type": "application/json",
    // }

    // const session = await getServerSession(authOptions);
    // console.log("ssssssssssssss44",session);

    // if (hasToken) {
    //     headers['Authorization'] = `Bearer ${session?.access_token}`
    // }
    // console.log("toekn", session)

    const urlWithParams = new URL(`${baseURL}${url}`);
    if (params) {
      Object.keys(params).forEach((key) =>
        urlWithParams.searchParams.append(key, params[key])
      );
    }
    const request = new Request(urlWithParams.toString(), {
      ...options,
      method: method.toUpperCase(), // Ensure method is uppercase
    });

    console.log("<<<==============request-------------------------", request);
    console.log("<<<==============request-------------------------");

    const response = await fetch(request);

    console.log("<<<==============res-------------------------", response);
    if (!response.ok) {
      console.log(
        "<<<==============res-------------------------nokay",
        response
      );
      const { status } = response;
      const errorText = await response.text(); // Extract error text from the response
      console.log(
        "<<<==============res-------------------------errorText",
        errorText
      );

      let errorMessage = `API request error: ${status}`;
      if (status === 401) {
        await signIn("authorize");
        errorMessage = "Authentication error occurred";
      } else if (status === 403) {
        errorMessage = "Authorization error occurred";
      } else if (status === 400) {
        errorMessage = "Bad Request";
      }
      throw new Error(`${errorText}`);
    }
    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

export async function ApiRequest(
  method: "Get" | "Post" | "Put" | "Patch" | "Delete" | undefined,
  params: object,
  data: object,
  url: string,
  hasToken: boolean,
  hasClient: boolean = false
): Promise<any> {
  const session = await getServerSession(authOptions);

  let headers: { [key: string]: string } = {
    "Content-Type": "application/json",
  };

  if (hasToken) {
    headers["Authorization"] = `Bearer ${session?.access_token}`;
  }
  const options: RequestInit = {
    // method: method,
    headers,
  };

  if (method !== "Get" && Object.keys(data).length > 0) {
    options.body = JSON.stringify(data);
  }
  const response = await requestAPi(
    method,
    url,
    params,
    hasToken,
    data,
    hasClient,
    options
  );
  console.log("response ===>", response);

  return response;
}
