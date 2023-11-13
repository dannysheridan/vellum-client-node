/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vellum from "../../api";
import * as core from "../../core";

export const RegisterPromptPromptInfoRequest: core.serialization.ObjectSchema<
    serializers.RegisterPromptPromptInfoRequest.Raw,
    Vellum.RegisterPromptPromptInfoRequest
> = core.serialization.object({
    promptBlockData: core.serialization.property(
        "prompt_block_data",
        core.serialization.lazyObject(async () => (await import("..")).PromptTemplateBlockDataRequest)
    ),
    inputVariables: core.serialization.property(
        "input_variables",
        core.serialization.list(
            core.serialization.lazyObject(async () => (await import("..")).RegisteredPromptInputVariableRequest)
        )
    ),
});

export declare namespace RegisterPromptPromptInfoRequest {
    interface Raw {
        prompt_block_data: serializers.PromptTemplateBlockDataRequest.Raw;
        input_variables: serializers.RegisteredPromptInputVariableRequest.Raw[];
    }
}
