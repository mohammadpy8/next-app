"use client";

class NetworkAdaptor {
  static #API_CONFIG = {
    base_url: process.env.BASE_URL,
  };
  static #Api_Url = NetworkAdaptor.#API_CONFIG.base_url;
  async getApi(endPoint: string, params = {}) {
    const endPointUrl = new URL(endPoint, NetworkAdaptor.#Api_Url);
    try {
      const url = new URL(endPointUrl, window.location.origin);
      Object.entries(params).forEach(([key, value]) => {
        url.searchParams.append(key, value as string);
      });
      const response = await fetch(url.toString(), { credentials: "include" });
      return await response.json();
    } catch (error: any) {
      return {
        data: {},
        errors: [error.message],
      };
    }
  }

  async postApi(endPoint: string, data = {}) {
    try {
      const endPointUrl = new URL(endPoint, NetworkAdaptor.#Api_Url);
      const url = new URL(endPointUrl, window.location.origin);
      const resposne = await fetch(url.toString(), {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
        credentials: "include",
      });
      return await resposne.json();
    } catch (error: any) {
      return {
        data: {},
        errors: [error.message],
      };
    }
  }

  async putApi(endPoint: string, data = {}) {
    try {
      const endPointUrl = new URL(endPoint, NetworkAdaptor.#Api_Url);
      const url = new URL(endPointUrl, window.location.origin);
      const resposne = await fetch(url.toString(), {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
        credentials: "include",
      });
      return await resposne.json();
    } catch (error: any) {
      return {
        data: {},
        errors: [error.message],
      };
    }
  }
}

export const networkAdaptor = new NetworkAdaptor();
