/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vellum from "../../api";
import * as core from "../../core";

export const TerminalNodeResultOutput: core.serialization.Schema<
    serializers.TerminalNodeResultOutput.Raw,
    Vellum.TerminalNodeResultOutput
> = core.serialization
    .union("type", {
        STRING: core.serialization.lazyObject(async () => (await import("..")).TerminalNodeStringResult),
        NUMBER: core.serialization.lazyObject(async () => (await import("..")).TerminalNodeNumberResult),
        JSON: core.serialization.lazyObject(async () => (await import("..")).TerminalNodeJsonResult),
        CHAT_HISTORY: core.serialization.lazyObject(async () => (await import("..")).TerminalNodeChatHistoryResult),
        SEARCH_RESULTS: core.serialization.lazyObject(async () => (await import("..")).TerminalNodeSearchResultsResult),
        ERROR: core.serialization.lazyObject(async () => (await import("..")).TerminalNodeErrorResult),
    })
    .transform<Vellum.TerminalNodeResultOutput>({
        transform: (value) => value,
        untransform: (value) => value,
    });

export declare namespace TerminalNodeResultOutput {
    type Raw =
        | TerminalNodeResultOutput.String
        | TerminalNodeResultOutput.Number
        | TerminalNodeResultOutput.Json
        | TerminalNodeResultOutput.ChatHistory
        | TerminalNodeResultOutput.SearchResults
        | TerminalNodeResultOutput.Error;

    interface String extends serializers.TerminalNodeStringResult.Raw {
        type: "STRING";
    }

    interface Number extends serializers.TerminalNodeNumberResult.Raw {
        type: "NUMBER";
    }

    interface Json extends serializers.TerminalNodeJsonResult.Raw {
        type: "JSON";
    }

    interface ChatHistory extends serializers.TerminalNodeChatHistoryResult.Raw {
        type: "CHAT_HISTORY";
    }

    interface SearchResults extends serializers.TerminalNodeSearchResultsResult.Raw {
        type: "SEARCH_RESULTS";
    }

    interface Error extends serializers.TerminalNodeErrorResult.Raw {
        type: "ERROR";
    }
}
