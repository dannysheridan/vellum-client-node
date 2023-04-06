/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { VellumApi } from "@fern-api/vellum";

export interface ModelVersionExecConfigRead {
    /** The template used to generate prompts for this model version. */
    promptTemplate: string;
    parameters: VellumApi.ModelVersionExecConfigParameters;
    /** Names of the template variables specified in the prompt template. */
    inputVariables: string[];
}
