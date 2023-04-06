/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface GenerateRequestRequest {
    /** Key/value pairs for each template variable defined in the deployment's prompt. */
    inputValues: Record<string, unknown>;
    /** Optionally include a unique identifier for each generation, as represented outside of Vellum. Note that this should generally be a list of length one. */
    externalIds?: string[];
}
