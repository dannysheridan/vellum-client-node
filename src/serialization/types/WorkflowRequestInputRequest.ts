/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vellum from "../../api";
import * as core from "../../core";

export const WorkflowRequestInputRequest: core.serialization.Schema<
    serializers.WorkflowRequestInputRequest.Raw,
    Vellum.WorkflowRequestInputRequest
> = core.serialization
    .union("type", {
        STRING: core.serialization.lazyObject(async () => (await import("..")).WorkflowRequestStringInputRequest),
        JSON: core.serialization.lazyObject(async () => (await import("..")).WorkflowRequestJsonInputRequest),
        CHAT_HISTORY: core.serialization.lazyObject(
            async () => (await import("..")).WorkflowRequestChatHistoryInputRequest
        ),
    })
    .transform<Vellum.WorkflowRequestInputRequest>({
        transform: (value) => value,
        untransform: (value) => value,
    });

export declare namespace WorkflowRequestInputRequest {
    type Raw =
        | WorkflowRequestInputRequest.String
        | WorkflowRequestInputRequest.Json
        | WorkflowRequestInputRequest.ChatHistory;

    interface String extends serializers.WorkflowRequestStringInputRequest.Raw {
        type: "STRING";
    }

    interface Json extends serializers.WorkflowRequestJsonInputRequest.Raw {
        type: "JSON";
    }

    interface ChatHistory extends serializers.WorkflowRequestChatHistoryInputRequest.Raw {
        type: "CHAT_HISTORY";
    }
}
