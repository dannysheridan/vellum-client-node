/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vellum from "../../api";
import * as core from "../../core";

export const ProviderEnum: core.serialization.Schema<serializers.ProviderEnum.Raw, Vellum.ProviderEnum> =
    core.serialization.enum_([
        "ANTHROPIC",
        "AWS_BEDROCK",
        "AZURE_OPENAI",
        "COHERE",
        "GOOGLE",
        "HOSTED",
        "MOSAICML",
        "OPENAI",
        "HUGGINGFACE",
        "MYSTIC",
        "PYQ",
        "REPLICATE",
    ]);

export declare namespace ProviderEnum {
    type Raw =
        | "ANTHROPIC"
        | "AWS_BEDROCK"
        | "AZURE_OPENAI"
        | "COHERE"
        | "GOOGLE"
        | "HOSTED"
        | "MOSAICML"
        | "OPENAI"
        | "HUGGINGFACE"
        | "MYSTIC"
        | "PYQ"
        | "REPLICATE";
}
