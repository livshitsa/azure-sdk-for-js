/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "ms-rest-js";
import * as Models from "../models";
import * as Mappers from "../models/integrationAccountsMappers";
import * as Parameters from "../models/parameters";
import { LogicManagementClientContext } from "../logicManagementClientContext";

/** Class representing a IntegrationAccounts. */
export class IntegrationAccounts {
  private readonly client: LogicManagementClientContext;

  /**
   * Create a IntegrationAccounts.
   * @param {LogicManagementClientContext} client Reference to the service client.
   */
  constructor(client: LogicManagementClientContext) {
    this.client = client;
  }

  /**
   * Gets a list of integration accounts by subscription.
   * @param [options] The optional parameters
   * @returns Promise<Models.IntegrationAccountsListBySubscriptionResponse>
   */
  listBySubscription(options?: Models.IntegrationAccountsListBySubscriptionOptionalParams): Promise<Models.IntegrationAccountsListBySubscriptionResponse>;
  /**
   * @param callback The callback
   */
  listBySubscription(callback: msRest.ServiceCallback<Models.IntegrationAccountListResult>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  listBySubscription(options: Models.IntegrationAccountsListBySubscriptionOptionalParams, callback: msRest.ServiceCallback<Models.IntegrationAccountListResult>): void;
  listBySubscription(options?: Models.IntegrationAccountsListBySubscriptionOptionalParams, callback?: msRest.ServiceCallback<Models.IntegrationAccountListResult>): Promise<Models.IntegrationAccountsListBySubscriptionResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      listBySubscriptionOperationSpec,
      callback) as Promise<Models.IntegrationAccountsListBySubscriptionResponse>;
  }

  /**
   * Gets a list of integration accounts by resource group.
   * @param resourceGroupName The resource group name.
   * @param [options] The optional parameters
   * @returns Promise<Models.IntegrationAccountsListByResourceGroupResponse>
   */
  listByResourceGroup(resourceGroupName: string, options?: Models.IntegrationAccountsListByResourceGroupOptionalParams): Promise<Models.IntegrationAccountsListByResourceGroupResponse>;
  /**
   * @param resourceGroupName The resource group name.
   * @param callback The callback
   */
  listByResourceGroup(resourceGroupName: string, callback: msRest.ServiceCallback<Models.IntegrationAccountListResult>): void;
  /**
   * @param resourceGroupName The resource group name.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByResourceGroup(resourceGroupName: string, options: Models.IntegrationAccountsListByResourceGroupOptionalParams, callback: msRest.ServiceCallback<Models.IntegrationAccountListResult>): void;
  listByResourceGroup(resourceGroupName: string, options?: Models.IntegrationAccountsListByResourceGroupOptionalParams, callback?: msRest.ServiceCallback<Models.IntegrationAccountListResult>): Promise<Models.IntegrationAccountsListByResourceGroupResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        options
      },
      listByResourceGroupOperationSpec,
      callback) as Promise<Models.IntegrationAccountsListByResourceGroupResponse>;
  }

  /**
   * Gets an integration account.
   * @param resourceGroupName The resource group name.
   * @param integrationAccountName The integration account name.
   * @param [options] The optional parameters
   * @returns Promise<Models.IntegrationAccountsGetResponse>
   */
  get(resourceGroupName: string, integrationAccountName: string, options?: msRest.RequestOptionsBase): Promise<Models.IntegrationAccountsGetResponse>;
  /**
   * @param resourceGroupName The resource group name.
   * @param integrationAccountName The integration account name.
   * @param callback The callback
   */
  get(resourceGroupName: string, integrationAccountName: string, callback: msRest.ServiceCallback<Models.IntegrationAccount>): void;
  /**
   * @param resourceGroupName The resource group name.
   * @param integrationAccountName The integration account name.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, integrationAccountName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.IntegrationAccount>): void;
  get(resourceGroupName: string, integrationAccountName: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.IntegrationAccount>): Promise<Models.IntegrationAccountsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        integrationAccountName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.IntegrationAccountsGetResponse>;
  }

  /**
   * Creates or updates an integration account.
   * @param resourceGroupName The resource group name.
   * @param integrationAccountName The integration account name.
   * @param integrationAccount The integration account.
   * @param [options] The optional parameters
   * @returns Promise<Models.IntegrationAccountsCreateOrUpdateResponse>
   */
  createOrUpdate(resourceGroupName: string, integrationAccountName: string, integrationAccount: Models.IntegrationAccount, options?: msRest.RequestOptionsBase): Promise<Models.IntegrationAccountsCreateOrUpdateResponse>;
  /**
   * @param resourceGroupName The resource group name.
   * @param integrationAccountName The integration account name.
   * @param integrationAccount The integration account.
   * @param callback The callback
   */
  createOrUpdate(resourceGroupName: string, integrationAccountName: string, integrationAccount: Models.IntegrationAccount, callback: msRest.ServiceCallback<Models.IntegrationAccount>): void;
  /**
   * @param resourceGroupName The resource group name.
   * @param integrationAccountName The integration account name.
   * @param integrationAccount The integration account.
   * @param options The optional parameters
   * @param callback The callback
   */
  createOrUpdate(resourceGroupName: string, integrationAccountName: string, integrationAccount: Models.IntegrationAccount, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.IntegrationAccount>): void;
  createOrUpdate(resourceGroupName: string, integrationAccountName: string, integrationAccount: Models.IntegrationAccount, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.IntegrationAccount>): Promise<Models.IntegrationAccountsCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        integrationAccountName,
        integrationAccount,
        options
      },
      createOrUpdateOperationSpec,
      callback) as Promise<Models.IntegrationAccountsCreateOrUpdateResponse>;
  }

  /**
   * Updates an integration account.
   * @param resourceGroupName The resource group name.
   * @param integrationAccountName The integration account name.
   * @param integrationAccount The integration account.
   * @param [options] The optional parameters
   * @returns Promise<Models.IntegrationAccountsUpdateResponse>
   */
  update(resourceGroupName: string, integrationAccountName: string, integrationAccount: Models.IntegrationAccount, options?: msRest.RequestOptionsBase): Promise<Models.IntegrationAccountsUpdateResponse>;
  /**
   * @param resourceGroupName The resource group name.
   * @param integrationAccountName The integration account name.
   * @param integrationAccount The integration account.
   * @param callback The callback
   */
  update(resourceGroupName: string, integrationAccountName: string, integrationAccount: Models.IntegrationAccount, callback: msRest.ServiceCallback<Models.IntegrationAccount>): void;
  /**
   * @param resourceGroupName The resource group name.
   * @param integrationAccountName The integration account name.
   * @param integrationAccount The integration account.
   * @param options The optional parameters
   * @param callback The callback
   */
  update(resourceGroupName: string, integrationAccountName: string, integrationAccount: Models.IntegrationAccount, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.IntegrationAccount>): void;
  update(resourceGroupName: string, integrationAccountName: string, integrationAccount: Models.IntegrationAccount, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.IntegrationAccount>): Promise<Models.IntegrationAccountsUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        integrationAccountName,
        integrationAccount,
        options
      },
      updateOperationSpec,
      callback) as Promise<Models.IntegrationAccountsUpdateResponse>;
  }

  /**
   * Deletes an integration account.
   * @param resourceGroupName The resource group name.
   * @param integrationAccountName The integration account name.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, integrationAccountName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param resourceGroupName The resource group name.
   * @param integrationAccountName The integration account name.
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, integrationAccountName: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param resourceGroupName The resource group name.
   * @param integrationAccountName The integration account name.
   * @param options The optional parameters
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, integrationAccountName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  deleteMethod(resourceGroupName: string, integrationAccountName: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        integrationAccountName,
        options
      },
      deleteMethodOperationSpec,
      callback);
  }

  /**
   * Gets the integration account callback URL.
   * @param resourceGroupName The resource group name.
   * @param integrationAccountName The integration account name.
   * @param parameters The callback URL parameters.
   * @param [options] The optional parameters
   * @returns Promise<Models.IntegrationAccountsListCallbackUrlResponse>
   */
  listCallbackUrl(resourceGroupName: string, integrationAccountName: string, parameters: Models.GetCallbackUrlParameters, options?: msRest.RequestOptionsBase): Promise<Models.IntegrationAccountsListCallbackUrlResponse>;
  /**
   * @param resourceGroupName The resource group name.
   * @param integrationAccountName The integration account name.
   * @param parameters The callback URL parameters.
   * @param callback The callback
   */
  listCallbackUrl(resourceGroupName: string, integrationAccountName: string, parameters: Models.GetCallbackUrlParameters, callback: msRest.ServiceCallback<Models.CallbackUrl>): void;
  /**
   * @param resourceGroupName The resource group name.
   * @param integrationAccountName The integration account name.
   * @param parameters The callback URL parameters.
   * @param options The optional parameters
   * @param callback The callback
   */
  listCallbackUrl(resourceGroupName: string, integrationAccountName: string, parameters: Models.GetCallbackUrlParameters, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.CallbackUrl>): void;
  listCallbackUrl(resourceGroupName: string, integrationAccountName: string, parameters: Models.GetCallbackUrlParameters, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.CallbackUrl>): Promise<Models.IntegrationAccountsListCallbackUrlResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        integrationAccountName,
        parameters,
        options
      },
      listCallbackUrlOperationSpec,
      callback) as Promise<Models.IntegrationAccountsListCallbackUrlResponse>;
  }

  /**
   * Gets the integration account's Key Vault keys.
   * @param resourceGroupName The resource group name.
   * @param integrationAccountName The integration account name.
   * @param listKeyVaultKeysParameter The key vault parameters.
   * @param [options] The optional parameters
   * @returns Promise<Models.IntegrationAccountsListKeyVaultKeysResponse>
   */
  listKeyVaultKeys(resourceGroupName: string, integrationAccountName: string, listKeyVaultKeysParameter: Models.ListKeyVaultKeysDefinition, options?: msRest.RequestOptionsBase): Promise<Models.IntegrationAccountsListKeyVaultKeysResponse>;
  /**
   * @param resourceGroupName The resource group name.
   * @param integrationAccountName The integration account name.
   * @param listKeyVaultKeysParameter The key vault parameters.
   * @param callback The callback
   */
  listKeyVaultKeys(resourceGroupName: string, integrationAccountName: string, listKeyVaultKeysParameter: Models.ListKeyVaultKeysDefinition, callback: msRest.ServiceCallback<Models.KeyVaultKeyCollection>): void;
  /**
   * @param resourceGroupName The resource group name.
   * @param integrationAccountName The integration account name.
   * @param listKeyVaultKeysParameter The key vault parameters.
   * @param options The optional parameters
   * @param callback The callback
   */
  listKeyVaultKeys(resourceGroupName: string, integrationAccountName: string, listKeyVaultKeysParameter: Models.ListKeyVaultKeysDefinition, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.KeyVaultKeyCollection>): void;
  listKeyVaultKeys(resourceGroupName: string, integrationAccountName: string, listKeyVaultKeysParameter: Models.ListKeyVaultKeysDefinition, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.KeyVaultKeyCollection>): Promise<Models.IntegrationAccountsListKeyVaultKeysResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        integrationAccountName,
        listKeyVaultKeysParameter,
        options
      },
      listKeyVaultKeysOperationSpec,
      callback) as Promise<Models.IntegrationAccountsListKeyVaultKeysResponse>;
  }

  /**
   * Logs the integration account's tracking events.
   * @param resourceGroupName The resource group name.
   * @param integrationAccountName The integration account name.
   * @param logTrackingEventsParameter The callback URL parameters.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  logTrackingEvents(resourceGroupName: string, integrationAccountName: string, logTrackingEventsParameter: Models.TrackingEventsDefinition, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param resourceGroupName The resource group name.
   * @param integrationAccountName The integration account name.
   * @param logTrackingEventsParameter The callback URL parameters.
   * @param callback The callback
   */
  logTrackingEvents(resourceGroupName: string, integrationAccountName: string, logTrackingEventsParameter: Models.TrackingEventsDefinition, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param resourceGroupName The resource group name.
   * @param integrationAccountName The integration account name.
   * @param logTrackingEventsParameter The callback URL parameters.
   * @param options The optional parameters
   * @param callback The callback
   */
  logTrackingEvents(resourceGroupName: string, integrationAccountName: string, logTrackingEventsParameter: Models.TrackingEventsDefinition, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  logTrackingEvents(resourceGroupName: string, integrationAccountName: string, logTrackingEventsParameter: Models.TrackingEventsDefinition, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        integrationAccountName,
        logTrackingEventsParameter,
        options
      },
      logTrackingEventsOperationSpec,
      callback);
  }

  /**
   * Regenerates the integration account access key.
   * @param resourceGroupName The resource group name.
   * @param integrationAccountName The integration account name.
   * @param regenerateAccessKeyParameter The access key type.
   * @param [options] The optional parameters
   * @returns Promise<Models.IntegrationAccountsRegenerateAccessKeyResponse>
   */
  regenerateAccessKey(resourceGroupName: string, integrationAccountName: string, regenerateAccessKeyParameter: Models.RegenerateActionParameter, options?: msRest.RequestOptionsBase): Promise<Models.IntegrationAccountsRegenerateAccessKeyResponse>;
  /**
   * @param resourceGroupName The resource group name.
   * @param integrationAccountName The integration account name.
   * @param regenerateAccessKeyParameter The access key type.
   * @param callback The callback
   */
  regenerateAccessKey(resourceGroupName: string, integrationAccountName: string, regenerateAccessKeyParameter: Models.RegenerateActionParameter, callback: msRest.ServiceCallback<Models.IntegrationAccount>): void;
  /**
   * @param resourceGroupName The resource group name.
   * @param integrationAccountName The integration account name.
   * @param regenerateAccessKeyParameter The access key type.
   * @param options The optional parameters
   * @param callback The callback
   */
  regenerateAccessKey(resourceGroupName: string, integrationAccountName: string, regenerateAccessKeyParameter: Models.RegenerateActionParameter, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.IntegrationAccount>): void;
  regenerateAccessKey(resourceGroupName: string, integrationAccountName: string, regenerateAccessKeyParameter: Models.RegenerateActionParameter, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.IntegrationAccount>): Promise<Models.IntegrationAccountsRegenerateAccessKeyResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        integrationAccountName,
        regenerateAccessKeyParameter,
        options
      },
      regenerateAccessKeyOperationSpec,
      callback) as Promise<Models.IntegrationAccountsRegenerateAccessKeyResponse>;
  }

  /**
   * Gets a list of integration accounts by subscription.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.IntegrationAccountsListBySubscriptionNextResponse>
   */
  listBySubscriptionNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.IntegrationAccountsListBySubscriptionNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listBySubscriptionNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.IntegrationAccountListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listBySubscriptionNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.IntegrationAccountListResult>): void;
  listBySubscriptionNext(nextPageLink: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.IntegrationAccountListResult>): Promise<Models.IntegrationAccountsListBySubscriptionNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listBySubscriptionNextOperationSpec,
      callback) as Promise<Models.IntegrationAccountsListBySubscriptionNextResponse>;
  }

  /**
   * Gets a list of integration accounts by resource group.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.IntegrationAccountsListByResourceGroupNextResponse>
   */
  listByResourceGroupNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.IntegrationAccountsListByResourceGroupNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByResourceGroupNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.IntegrationAccountListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByResourceGroupNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.IntegrationAccountListResult>): void;
  listByResourceGroupNext(nextPageLink: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.IntegrationAccountListResult>): Promise<Models.IntegrationAccountsListByResourceGroupNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByResourceGroupNextOperationSpec,
      callback) as Promise<Models.IntegrationAccountsListByResourceGroupNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listBySubscriptionOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Logic/integrationAccounts",
  urlParameters: [
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion,
    Parameters.top
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.IntegrationAccountListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listByResourceGroupOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/integrationAccounts",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName
  ],
  queryParameters: [
    Parameters.apiVersion,
    Parameters.top
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.IntegrationAccountListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/integrationAccounts/{integrationAccountName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.integrationAccountName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.IntegrationAccount
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const createOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/integrationAccounts/{integrationAccountName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.integrationAccountName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "integrationAccount",
    mapper: {
      ...Mappers.IntegrationAccount,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.IntegrationAccount
    },
    201: {
      bodyMapper: Mappers.IntegrationAccount
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const updateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/integrationAccounts/{integrationAccountName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.integrationAccountName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "integrationAccount",
    mapper: {
      ...Mappers.IntegrationAccount,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.IntegrationAccount
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const deleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/integrationAccounts/{integrationAccountName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.integrationAccountName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listCallbackUrlOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/integrationAccounts/{integrationAccountName}/listCallbackUrl",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.integrationAccountName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.GetCallbackUrlParameters,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.CallbackUrl
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listKeyVaultKeysOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/integrationAccounts/{integrationAccountName}/listKeyVaultKeys",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.integrationAccountName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "listKeyVaultKeysParameter",
    mapper: {
      ...Mappers.ListKeyVaultKeysDefinition,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.KeyVaultKeyCollection
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const logTrackingEventsOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/integrationAccounts/{integrationAccountName}/logTrackingEvents",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.integrationAccountName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "logTrackingEventsParameter",
    mapper: {
      ...Mappers.TrackingEventsDefinition,
      required: true
    }
  },
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const regenerateAccessKeyOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/integrationAccounts/{integrationAccountName}/regenerateAccessKey",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.integrationAccountName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "regenerateAccessKeyParameter",
    mapper: {
      ...Mappers.RegenerateActionParameter,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.IntegrationAccount
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listBySubscriptionNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.IntegrationAccountListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listByResourceGroupNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.IntegrationAccountListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};