/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import { VellumApi } from "@fern-api/vellum";
import * as core from "../../core";

export const GenerateResultData: core.serialization.ObjectSchema<
    serializers.GenerateResultData.Raw,
    VellumApi.GenerateResultData
> = core.serialization.object({
    completions: core.serialization.list(
        core.serialization.lazyObject(async () => (await import("..")).EnrichedNormalizedCompletion)
    ),
});

export declare namespace GenerateResultData {
    interface Raw {
        completions: serializers.EnrichedNormalizedCompletion.Raw[];
    }
}
