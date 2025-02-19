/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../..";
import * as Vellum from "../../../api";
import * as core from "../../../core";

export const ExecuteWorkflowStreamRequest: core.serialization.Schema<
    serializers.ExecuteWorkflowStreamRequest.Raw,
    Vellum.ExecuteWorkflowStreamRequest
> = core.serialization.object({
    workflowDeploymentId: core.serialization.property("workflow_deployment_id", core.serialization.string().optional()),
    workflowDeploymentName: core.serialization.property(
        "workflow_deployment_name",
        core.serialization.string().optional()
    ),
    releaseTag: core.serialization.property("release_tag", core.serialization.string().optional()),
    inputs: core.serialization.list(
        core.serialization.lazy(async () => (await import("../..")).WorkflowRequestInputRequest)
    ),
    externalId: core.serialization.property("external_id", core.serialization.string().optional()),
    eventTypes: core.serialization.property(
        "event_types",
        core.serialization
            .list(core.serialization.lazy(async () => (await import("../..")).WorkflowExecutionEventType))
            .optional()
    ),
});

export declare namespace ExecuteWorkflowStreamRequest {
    interface Raw {
        workflow_deployment_id?: string | null;
        workflow_deployment_name?: string | null;
        release_tag?: string | null;
        inputs: serializers.WorkflowRequestInputRequest.Raw[];
        external_id?: string | null;
        event_types?: serializers.WorkflowExecutionEventType.Raw[] | null;
    }
}
