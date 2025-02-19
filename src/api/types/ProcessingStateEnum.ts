/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * * `QUEUED` - Queued
 * * `PROCESSING` - Processing
 * * `PROCESSED` - Processed
 * * `FAILED` - Failed
 */
export type ProcessingStateEnum = "QUEUED" | "PROCESSING" | "PROCESSED" | "FAILED";

export const ProcessingStateEnum = {
    Queued: "QUEUED",
    Processing: "PROCESSING",
    Processed: "PROCESSED",
    Failed: "FAILED",
} as const;
