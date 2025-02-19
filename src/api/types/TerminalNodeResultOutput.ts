/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vellum from "..";

export type TerminalNodeResultOutput =
    | Vellum.TerminalNodeResultOutput.String
    | Vellum.TerminalNodeResultOutput.Number
    | Vellum.TerminalNodeResultOutput.Json
    | Vellum.TerminalNodeResultOutput.ChatHistory
    | Vellum.TerminalNodeResultOutput.SearchResults
    | Vellum.TerminalNodeResultOutput.Error_;

export declare namespace TerminalNodeResultOutput {
    interface String extends Vellum.TerminalNodeStringResult {
        type: "STRING";
    }

    interface Number extends Vellum.TerminalNodeNumberResult {
        type: "NUMBER";
    }

    interface Json extends Vellum.TerminalNodeJsonResult {
        type: "JSON";
    }

    interface ChatHistory extends Vellum.TerminalNodeChatHistoryResult {
        type: "CHAT_HISTORY";
    }

    interface SearchResults extends Vellum.TerminalNodeSearchResultsResult {
        type: "SEARCH_RESULTS";
    }

    interface Error_ extends Vellum.TerminalNodeErrorResult {
        type: "ERROR";
    }
}
