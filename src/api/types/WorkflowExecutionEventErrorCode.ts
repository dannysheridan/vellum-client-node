/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * * `WORKFLOW_INITIALIZATION` - WORKFLOW_INITIALIZATION
 * * `NODE_EXECUTION` - NODE_EXECUTION
 * * `NODE_EXECUTION_COUNT_LIMIT_REACHED` - NODE_EXECUTION_COUNT_LIMIT_REACHED
 */
export type WorkflowExecutionEventErrorCode =
    | "WORKFLOW_INITIALIZATION"
    | "NODE_EXECUTION"
    | "NODE_EXECUTION_COUNT_LIMIT_REACHED";

export const WorkflowExecutionEventErrorCode = {
    WorkflowInitialization: "WORKFLOW_INITIALIZATION",
    NodeExecution: "NODE_EXECUTION",
    NodeExecutionCountLimitReached: "NODE_EXECUTION_COUNT_LIMIT_REACHED",
} as const;
