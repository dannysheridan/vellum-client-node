/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vellum from "../../../..";

export interface RegisterPromptRequestRequest {
    /** A human-friendly label for corresponding entities created in Vellum. <span style="white-space: nowrap">`non-empty`</span> */
    label: string;
    /** A uniquely-identifying name for corresponding entities created in Vellum. <span style="white-space: nowrap">`non-empty`</span> */
    name: string;
    /** Information about how to execute the prompt template. */
    prompt: Vellum.RegisterPromptPromptInfoRequest;
    /**
     * The initial LLM provider to use for this prompt
     *
     * * `ANTHROPIC` - Anthropic
     * * `COHERE` - Cohere
     * * `GOOGLE` - Google
     * * `HOSTED` - Hosted
     * * `MOSAICML` - MosaicML
     * * `MYSTIC` - Mystic
     * * `OPENAI` - OpenAI
     * * `PYQ` - Pyq
     */
    provider: Vellum.ProviderEnum;
    /** The initial model to use for this prompt <span style="white-space: nowrap">`non-empty`</span> */
    model: string;
    /** The initial model parameters to use for  this prompt */
    parameters: Vellum.RegisterPromptModelParametersRequest;
    /** Optionally include additional metadata to store along with the prompt. */
    meta?: Record<string, unknown>;
}
