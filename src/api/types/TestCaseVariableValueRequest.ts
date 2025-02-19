/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vellum from "..";

export type TestCaseVariableValueRequest =
    | Vellum.TestCaseVariableValueRequest.String
    | Vellum.TestCaseVariableValueRequest.Number
    | Vellum.TestCaseVariableValueRequest.Json
    | Vellum.TestCaseVariableValueRequest.ChatHistory
    | Vellum.TestCaseVariableValueRequest.SearchResults
    | Vellum.TestCaseVariableValueRequest.Error_;

export declare namespace TestCaseVariableValueRequest {
    interface String extends Vellum.TestCaseStringVariableValueRequest {
        type: "STRING";
    }

    interface Number extends Vellum.TestCaseNumberVariableValueRequest {
        type: "NUMBER";
    }

    interface Json extends Vellum.TestCaseJsonVariableValueRequest {
        type: "JSON";
    }

    interface ChatHistory extends Vellum.TestCaseChatHistoryVariableValueRequest {
        type: "CHAT_HISTORY";
    }

    interface SearchResults extends Vellum.TestCaseSearchResultsVariableValueRequest {
        type: "SEARCH_RESULTS";
    }

    interface Error_ extends Vellum.TestCaseErrorVariableValueRequest {
        type: "ERROR";
    }
}
