/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as Models from "../models";
import * as Mappers from "../models/partnersMappers";
import * as Parameters from "../models/parameters";
import { ACEProvisioningManagementPartnerAPIContext } from "../aCEProvisioningManagementPartnerAPIContext";

/** Class representing a Partners. */
export class Partners {
  private readonly client: ACEProvisioningManagementPartnerAPIContext;

  /**
   * Create a Partners.
   * @param {ACEProvisioningManagementPartnerAPIContext} client Reference to the service client.
   */
  constructor(client: ACEProvisioningManagementPartnerAPIContext) {
    this.client = client;
  }

  /**
   * Get the management partner using the objectId and tenantId.
   * @summary Get a specific `Partner`.
   * @param [options] The optional parameters
   * @returns Promise<Models.PartnersGetResponse>
   */
  get(options?: msRest.RequestOptionsBase): Promise<Models.PartnersGetResponse>;
  /**
   * @param callback The callback
   */
  get(callback: msRest.ServiceCallback<Models.PartnerResponse>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  get(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.PartnerResponse>): void;
  get(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.PartnerResponse>, callback?: msRest.ServiceCallback<Models.PartnerResponse>): Promise<Models.PartnersGetResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      getOperationSpec,
      callback) as Promise<Models.PartnersGetResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "providers/Microsoft.ManagementPartner/partners",
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.PartnerResponse
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};