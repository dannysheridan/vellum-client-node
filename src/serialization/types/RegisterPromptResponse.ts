/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vellum from "../../api";
import * as core from "../../core";

export const RegisterPromptResponse: core.serialization.ObjectSchema<
    serializers.RegisterPromptResponse.Raw,
    Vellum.RegisterPromptResponse
> = core.serialization.object({
    prompt: core.serialization.lazyObject(async () => (await import("..")).RegisterPromptPrompt),
    sandboxSnapshot: core.serialization.property(
        "sandbox_snapshot",
        core.serialization.lazyObject(async () => (await import("..")).RegisteredPromptSandboxSnapshot)
    ),
    sandbox: core.serialization.lazyObject(async () => (await import("..")).RegisteredPromptSandbox),
    modelVersion: core.serialization.property(
        "model_version",
        core.serialization.lazyObject(async () => (await import("..")).RegisteredPromptModelVersion)
    ),
    promptVersionId: core.serialization.property("prompt_version_id", core.serialization.string()),
    deployment: core.serialization.lazyObject(async () => (await import("..")).RegisteredPromptDeployment),
});

export declare namespace RegisterPromptResponse {
    interface Raw {
        prompt: serializers.RegisterPromptPrompt.Raw;
        sandbox_snapshot: serializers.RegisteredPromptSandboxSnapshot.Raw;
        sandbox: serializers.RegisteredPromptSandbox.Raw;
        model_version: serializers.RegisteredPromptModelVersion.Raw;
        prompt_version_id: string;
        deployment: serializers.RegisteredPromptDeployment.Raw;
    }
}
