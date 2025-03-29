import * as openai_resources_shared from 'openai/resources/shared';
import OpenAI from 'openai';

declare const optimisticId: () => string;

type Args = {
    id: string;
};
declare const isOptimistic: ({ id, }: Args) => boolean;

declare const serializeMessage: ({ message, }: {
    message: OpenAI.Beta.Threads.Messages.Message & {
        runSteps?: OpenAI.Beta.Threads.Runs.RunStep[];
    };
}) => {
    id: string;
    role: "user" | "assistant";
    created_at: number;
    content: OpenAI.Beta.Threads.Messages.MessageContent[];
    run_id: string | null;
    assistant_id: string | null;
    thread_id: string;
    attachments: OpenAI.Beta.Threads.Messages.Message.Attachment[] | null;
    metadata: openai_resources_shared.Metadata | null;
    runSteps: Pick<OpenAI.Beta.Threads.Runs.Steps.RunStep, "id" | "run_id" | "step_details" | "completed_at" | "cancelled_at" | "failed_at" | "status">[];
    status: "in_progress" | "incomplete" | "completed";
};

declare const key: ({ assistantId, }: {
    assistantId: string;
}) => string;

declare const enqueueJson: ({ controller, value, }: {
    controller: ReadableStreamDefaultController;
    value: any;
}) => void;

export { enqueueJson, isOptimistic, optimisticId, serializeMessage, key as threadIdStorageKey };
