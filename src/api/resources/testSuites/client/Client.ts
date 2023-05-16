/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as Vellum from "../../..";
import urlJoin from "url-join";
import * as serializers from "../../../../serialization";
import * as errors from "../../../../errors";

export declare namespace TestSuites {
    interface Options {
        environment?: environments.VellumEnvironment | environments.VellumEnvironmentUrls;
        apiKey: core.Supplier<string>;
    }
}

export class TestSuites {
    constructor(protected readonly options: TestSuites.Options) {}

    public async upsertTestSuiteTestCase(
        id: string,
        request: Vellum.TestSuiteTestCaseRequest
    ): Promise<Vellum.TestSuiteTestCase> {
        const _response = await core.fetcher({
            url: urlJoin(
                (this.options.environment ?? environments.VellumEnvironment.Production).default,
                `v1/test-suites/${id}/test-cases`
            ),
            method: "POST",
            headers: {
                X_API_KEY: await core.Supplier.get(this.options.apiKey),
            },
            contentType: "application/json",
            body: await serializers.TestSuiteTestCaseRequest.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
        });
        if (_response.ok) {
            return await serializers.TestSuiteTestCase.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
            });
        }

        if (_response.error.reason === "status-code") {
            throw new errors.VellumError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.VellumError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.VellumTimeoutError();
            case "unknown":
                throw new errors.VellumError({
                    message: _response.error.errorMessage,
                });
        }
    }
}
