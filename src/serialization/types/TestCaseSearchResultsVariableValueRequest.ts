/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vellum from "../../api";
import * as core from "../../core";

export const TestCaseSearchResultsVariableValueRequest: core.serialization.ObjectSchema<
    serializers.TestCaseSearchResultsVariableValueRequest.Raw,
    Vellum.TestCaseSearchResultsVariableValueRequest
> = core.serialization.object({
    variableId: core.serialization.property("variable_id", core.serialization.string()),
    value: core.serialization
        .list(core.serialization.lazyObject(async () => (await import("..")).SearchResultRequest))
        .optional(),
});

export declare namespace TestCaseSearchResultsVariableValueRequest {
    interface Raw {
        variable_id: string;
        value?: serializers.SearchResultRequest.Raw[] | null;
    }
}
