/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { VellumApi } from "@fern-api/vellum";

export interface ModelVersionRead {
    /** Vellum-generated ID that uniquely identifies this model version. */
    id: string;
    /** Timestamp of when this model version was created. */
    created: string;
    /** Human-friendly name for this model version. */
    label: string;
    modelType: VellumApi.ModelTypeEnum;
    provider: VellumApi.ProviderEnum;
    /** The unique id of this model version as it exists in the above provider's system. */
    externalId: string;
    buildConfig: VellumApi.ModelVersionBuildConfig;
    execConfig: VellumApi.ModelVersionExecConfigRead;
}
