import * as HttpStatus from "http-status-codes";
import { ConfigGlobal, ConfigGlobalLoader } from "../config";

import { Event } from "../../types/Event";

export interface Context {
  headers: any;
}

const configGlobal: ConfigGlobal = ConfigGlobalLoader.config;
const API_BASE_URL = configGlobal.apiServicesUrlBase;

class ApiService {
  private static context: Context | undefined = undefined;

  // Private helpers
  private static _requestSucceeded(responseStatus: number) {
    let requestSucceeded: boolean = true;
    switch (responseStatus) {
      case HttpStatus.OK:
      case HttpStatus.CREATED:
        break;
      default:
        requestSucceeded = false;
    }
    return requestSucceeded;
  }

  private static async Get(
    baseUrl: string,
    resource: string,
    queryString?: any,
    headers?: any
  ) {
    if (headers === undefined) {
      headers = this.context && this.context.headers;
    }

    let response = await fetch(`${baseUrl}/${resource}`, {
      method: "GET",
      headers: headers ? headers : undefined
    });

    let requestSucceeded = this._requestSucceeded(response.status);
    if (!requestSucceeded) {
      return undefined;
    }

    return response;
  }

  private static async Post(
    baseUrl: string,
    resource: string,
    body?: any,
    headers?: any
  ) {
    if (headers === undefined) {
      headers = this.context && this.context.headers;
    }

    let response = await fetch(`${baseUrl}/${resource}/`, {
      method: "POST",
      headers: headers ? headers : undefined,
      body: JSON.stringify(body)
    });

    let requestSucceeded = this._requestSucceeded(response.status);
    if (!requestSucceeded) {
      return undefined;
    }

    return response;
  }

  public static setContext(context: Context) {
    this.context = context;
  }

  public static async GetPhrase() {
    let response = await this.Get(
      API_BASE_URL,
      `phrases/random/`,
      undefined
    );

    let responseJSON = undefined;
    if (response !== undefined) {
      responseJSON = await response.json();
    }

    return responseJSON;
  }
}

export default ApiService;
