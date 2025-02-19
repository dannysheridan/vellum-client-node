/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vellum from "..";

export interface SlimDocument {
    /** Vellum-generated ID that uniquely identifies this document. */
    id: string;
    /** The external ID that was originally provided when uploading the document. */
    externalId?: string;
    /** A timestamp representing when this document was most recently uploaded. */
    lastUploadedAt: Date;
    /** Human-friendly name for this document. */
    label: string;
    /**
     * An enum value representing where this document is along its processing lifecycle. Note that this is different than its indexing lifecycle.
     *
     * * `QUEUED` - Queued
     * * `PROCESSING` - Processing
     * * `PROCESSED` - Processed
     * * `FAILED` - Failed
     */
    processingState?: Vellum.ProcessingStateEnum;
    /**
     * An enum value representing why the document could not be processed. Is null unless processing_state is FAILED.
     *
     * * `EXCEEDED_CHARACTER_LIMIT` - Exceeded Character Limit
     * * `INVALID_FILE` - Invalid File
     */
    processingFailureReason?: Vellum.ProcessingFailureReasonEnum;
    /**
     * The document's current status.
     *
     * * `ACTIVE` - Active
     */
    status?: Vellum.DocumentStatus;
    /** A list of keywords associated with this document. Originally provided when uploading the document. */
    keywords?: string[];
    /** A previously supplied JSON object containing metadata that can be filtered on when searching. */
    metadata?: Record<string, unknown>;
    documentToDocumentIndexes: Vellum.DocumentDocumentToDocumentIndex[];
}
