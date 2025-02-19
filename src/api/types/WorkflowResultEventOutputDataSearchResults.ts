/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vellum from "..";

export interface WorkflowResultEventOutputDataSearchResults {
    id?: string;
    name: string;
    state: Vellum.WorkflowNodeResultEventState;
    nodeId: string;
    /** The newly output string value. Only relevant for string outputs with a state of STREAMING. */
    delta?: string;
    value?: Vellum.SearchResult[];
}
