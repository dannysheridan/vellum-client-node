/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vellum from "../../api";
import * as core from "../../core";

export const TestSuiteTestCase: core.serialization.ObjectSchema<
    serializers.TestSuiteTestCase.Raw,
    Vellum.TestSuiteTestCase
> = core.serialization.object({
    testCaseId: core.serialization.property("test_case_id", core.serialization.string().optional()),
    label: core.serialization.string().optional(),
    inputValues: core.serialization.property(
        "input_values",
        core.serialization.record(core.serialization.string(), core.serialization.unknown())
    ),
    evaluationParams: core.serialization.property(
        "evaluation_params",
        core.serialization.lazyObject(async () => (await import("..")).EvaluationParams)
    ),
});

export declare namespace TestSuiteTestCase {
    interface Raw {
        test_case_id?: string | null;
        label?: string | null;
        input_values: Record<string, unknown>;
        evaluation_params: serializers.EvaluationParams.Raw;
    }
}
