/* tslint:disable */
/* eslint-disable */
/**
 * chomestatus API
 * The API for chromestatus.com. chromestatus.com is the official tool used for tracking feature launches in Blink (the browser engine that powers Chrome and many other web browsers). This tool guides feature owners through our launch process and serves as a primary source for developer information that then ripples throughout the web developer ecosystem. More details at: https://github.com/GoogleChrome/chromium-dashboard
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  ComponentUsersRequest,
  ComponentsUsersResponse,
} from '../models/index';
import {
    ComponentUsersRequestFromJSON,
    ComponentUsersRequestToJSON,
    ComponentsUsersResponseFromJSON,
    ComponentsUsersResponseToJSON,
} from '../models/index';

export interface AddUserToComponentRequest {
    componentId: number;
    userId: number;
    componentUsersRequest?: ComponentUsersRequest;
}

export interface RemoveUserFromComponentRequest {
    componentId: number;
    userId: number;
    componentUsersRequest?: ComponentUsersRequest;
}

/**
 * DefaultApi - interface
 * 
 * @export
 * @interface DefaultApiInterface
 */
export interface DefaultApiInterface {
    /**
     * 
     * @summary Add a user to a component
     * @param {number} componentId Component ID
     * @param {number} userId User ID
     * @param {ComponentUsersRequest} [componentUsersRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApiInterface
     */
    addUserToComponentRaw(requestParameters: AddUserToComponentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;

    /**
     * Add a user to a component
     */
    addUserToComponent(requestParameters: AddUserToComponentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;

    /**
     * 
     * @summary List all components and possible users
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApiInterface
     */
    listComponentUsersRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ComponentsUsersResponse>>;

    /**
     * List all components and possible users
     */
    listComponentUsers(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ComponentsUsersResponse>;

    /**
     * 
     * @summary Remove a user from a component
     * @param {number} componentId Component ID
     * @param {number} userId User ID
     * @param {ComponentUsersRequest} [componentUsersRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApiInterface
     */
    removeUserFromComponentRaw(requestParameters: RemoveUserFromComponentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;

    /**
     * Remove a user from a component
     */
    removeUserFromComponent(requestParameters: RemoveUserFromComponentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;

}

/**
 * 
 */
export class DefaultApi extends runtime.BaseAPI implements DefaultApiInterface {

    /**
     * Add a user to a component
     */
    async addUserToComponentRaw(requestParameters: AddUserToComponentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.componentId === null || requestParameters.componentId === undefined) {
            throw new runtime.RequiredError('componentId','Required parameter requestParameters.componentId was null or undefined when calling addUserToComponent.');
        }

        if (requestParameters.userId === null || requestParameters.userId === undefined) {
            throw new runtime.RequiredError('userId','Required parameter requestParameters.userId was null or undefined when calling addUserToComponent.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Xsrf-Token"] = this.configuration.apiKey("X-Xsrf-Token"); // XsrfToken authentication
        }

        const response = await this.request({
            path: `/components/{componentId}/users/{userId}`.replace(`{${"componentId"}}`, encodeURIComponent(String(requestParameters.componentId))).replace(`{${"userId"}}`, encodeURIComponent(String(requestParameters.userId))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: ComponentUsersRequestToJSON(requestParameters.componentUsersRequest),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Add a user to a component
     */
    async addUserToComponent(requestParameters: AddUserToComponentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.addUserToComponentRaw(requestParameters, initOverrides);
    }

    /**
     * List all components and possible users
     */
    async listComponentUsersRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ComponentsUsersResponse>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Xsrf-Token"] = this.configuration.apiKey("X-Xsrf-Token"); // XsrfToken authentication
        }

        const response = await this.request({
            path: `/componentsusers`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ComponentsUsersResponseFromJSON(jsonValue));
    }

    /**
     * List all components and possible users
     */
    async listComponentUsers(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ComponentsUsersResponse> {
        const response = await this.listComponentUsersRaw(initOverrides);
        return await response.value();
    }

    /**
     * Remove a user from a component
     */
    async removeUserFromComponentRaw(requestParameters: RemoveUserFromComponentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.componentId === null || requestParameters.componentId === undefined) {
            throw new runtime.RequiredError('componentId','Required parameter requestParameters.componentId was null or undefined when calling removeUserFromComponent.');
        }

        if (requestParameters.userId === null || requestParameters.userId === undefined) {
            throw new runtime.RequiredError('userId','Required parameter requestParameters.userId was null or undefined when calling removeUserFromComponent.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Xsrf-Token"] = this.configuration.apiKey("X-Xsrf-Token"); // XsrfToken authentication
        }

        const response = await this.request({
            path: `/components/{componentId}/users/{userId}`.replace(`{${"componentId"}}`, encodeURIComponent(String(requestParameters.componentId))).replace(`{${"userId"}}`, encodeURIComponent(String(requestParameters.userId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
            body: ComponentUsersRequestToJSON(requestParameters.componentUsersRequest),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Remove a user from a component
     */
    async removeUserFromComponent(requestParameters: RemoveUserFromComponentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.removeUserFromComponentRaw(requestParameters, initOverrides);
    }

}
