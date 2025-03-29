import OpenAI from 'openai';
import { MessagesPage } from './types/index.cjs';
import * as openai_resources_shared from 'openai/resources/shared';

type Args$1 = {
    client: OpenAI;
    threadId: string;
    pageParam?: string;
};
declare const messagesResponse: ({ client, threadId, pageParam, }: Args$1) => Promise<MessagesPage>;

type CallbackArgs = {
    controller: ReadableStreamDefaultController<Uint8Array>;
};
declare const createMessageResponse: ({ client, createRunStream, handleToolCall, onStart, onError, onClose, onEvent, }: {
    client: any;
    createRunStream: any;
    handleToolCall: any;
    onStart?: (args: CallbackArgs) => void;
    onError?: (args: CallbackArgs & {
        error: any;
    }) => void;
    onClose?: (args: CallbackArgs) => void;
    onEvent?: (args: CallbackArgs & {
        event: string;
        data: any;
    }) => void;
}) => ReadableStream<any>;

type Args = {
    message: OpenAI.Beta.Threads.Messages.Message;
    client: OpenAI;
};
declare const extendMessage: ({ message, client, }: Args) => Promise<{
    runSteps: OpenAI.Beta.Threads.Runs.Steps.RunStep[];
    id: string;
    assistant_id: string | null;
    attachments: Array<OpenAI.Beta.Threads.Messages.Message.Attachment> | null;
    completed_at: number | null;
    content: Array<OpenAI.Beta.Threads.Messages.MessageContent>;
    created_at: number;
    incomplete_at: number | null;
    incomplete_details: OpenAI.Beta.Threads.Messages.Message.IncompleteDetails | null;
    metadata: openai_resources_shared.Metadata | null;
    object: "thread.message";
    role: "user" | "assistant";
    run_id: string | null;
    status: "in_progress" | "incomplete" | "completed";
    thread_id: string;
}>;

export { createMessageResponse, extendMessage, messagesResponse };
