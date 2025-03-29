import * as react_jsx_runtime from 'react/jsx-runtime';
import { MessagesPage, ThreadStorageOptions, StyleProps, SerializedMessage, UseCreateMessageVariables, PlayArgs, AudioRuntime, Avatar as Avatar$1, SerializedRunStep, ToolCall } from './types/index.cjs';
import * as _tanstack_react_query from '@tanstack/react-query';
import { UseInfiniteQueryOptions, InfiniteData, UseMutationOptions } from '@tanstack/react-query';
import * as react_hook_form from 'react-hook-form';
import * as openai_resources_beta_threads_messages from 'openai/resources/beta/threads/messages';
import * as _tanstack_query_core from '@tanstack/query-core';
import * as react from 'react';
import { Dispatch, SetStateAction } from 'react';
import * as openai_resources_files from 'openai/resources/files';
import * as unified from 'unified';
import OpenAI from 'openai';
import remarkGfm from 'remark-gfm';
import * as openai_resources_beta_threads_runs_steps from 'openai/resources/beta/threads/runs/steps';

type Args$9 = {
    children: React.ReactNode;
    baseUrl?: string;
    variables?: {
        [key: string]: any;
    };
    defaultOptions?: {
        queries?: UseInfiniteQueryOptions<InfiniteData<MessagesPage>>;
        mutations?: UseMutationOptions;
    };
    threadIdStorageOptions?: ThreadStorageOptions | null;
};
declare const SuperinterfaceProvider: ({ children, baseUrl, variables, defaultOptions, threadIdStorageOptions, }: Args$9) => react_jsx_runtime.JSX.Element;

declare const useSuperinterfaceContext: () => {
    baseUrl: string | null;
    variables: Record<string, any>;
    defaultOptions: {
        queries: Record<string, any>;
        mutations: Record<string, any>;
    };
    threadIdStorageOptions: ThreadStorageOptions | null;
    createMessageAbortControllerRef: React.MutableRefObject<AbortController | null>;
};

type Args$8 = Args$9;

type Args$7 = Args$8 & StyleProps;

type Args$6 = Omit<Args$7, 'children'>;
declare const Thread: {
    (props: Args$6): react_jsx_runtime.JSX.Element;
    Root: ({ children, style, className, ...rest }: Args$7) => react_jsx_runtime.JSX.Element;
    Messages: {
        ({ children, className, style, }: {
            children?: React.ReactNode;
        } & StyleProps): react_jsx_runtime.JSX.Element;
        Root: ({ children, style, className, }: {
            children: React.ReactNode;
        } & StyleProps) => react_jsx_runtime.JSX.Element;
        Message: ({ message, className, style, }: {
            message: SerializedMessage;
        } & StyleProps) => react_jsx_runtime.JSX.Element;
        NextPageSkeleton: () => react_jsx_runtime.JSX.Element | null;
    };
    MessageForm: {
        (props: StyleProps): react_jsx_runtime.JSX.Element;
        Root: ({ children, onSubmit: onSubmitArg, isDisabled: isDisabledArg, style, className, }: {
            children: React.ReactNode;
            onSubmit?: react_hook_form.SubmitHandler<{
                content: string;
                attachments?: openai_resources_beta_threads_messages.Message.Attachment[];
            } & {
                reset: any;
                createMessage: any;
            }>;
            isDisabled?: boolean;
        } & StyleProps) => react_jsx_runtime.JSX.Element;
        Field: {
            Root: ({ children, className, style, }: {
                children: React.ReactNode;
            } & StyleProps) => react_jsx_runtime.JSX.Element;
            Control: {
                (props: StyleProps): react_jsx_runtime.JSX.Element;
                Root: ({ children, style, className, }: {
                    children: React.ReactNode;
                } & StyleProps) => react_jsx_runtime.JSX.Element;
                Input: (props: Omit<StyleProps, "style"> & {
                    style?: Omit<React.CSSProperties, "minHeight" | "maxHeight" | "height">;
                    placeholder?: string;
                }) => react_jsx_runtime.JSX.Element;
            };
            Files: {
                Preview: (props: StyleProps) => react_jsx_runtime.JSX.Element | null;
                Control: (props: StyleProps) => react_jsx_runtime.JSX.Element;
            };
        };
        Submit: {
            (props: StyleProps): react_jsx_runtime.JSX.Element;
            Root: ({ children, style, className, }: {
                children: React.ReactNode;
            } & StyleProps) => react_jsx_runtime.JSX.Element;
            Button: (props: StyleProps) => react_jsx_runtime.JSX.Element;
        };
    };
};

declare const useMessages: () => {
    messages: SerializedMessage[];
    data: InfiniteData<TQueryFnData, unknown>;
    error: Error;
    isError: true;
    isPending: false;
    isLoading: false;
    isLoadingError: false;
    isRefetchError: true;
    isSuccess: false;
    isPlaceholderData: false;
    status: "error";
    fetchNextPage: (options?: _tanstack_react_query.FetchNextPageOptions) => Promise<_tanstack_react_query.InfiniteQueryObserverResult<InfiniteData<TQueryFnData, unknown>, Error>>;
    fetchPreviousPage: (options?: _tanstack_react_query.FetchPreviousPageOptions) => Promise<_tanstack_react_query.InfiniteQueryObserverResult<InfiniteData<TQueryFnData, unknown>, Error>>;
    hasNextPage: boolean;
    hasPreviousPage: boolean;
    isFetchNextPageError: boolean;
    isFetchingNextPage: boolean;
    isFetchPreviousPageError: boolean;
    isFetchingPreviousPage: boolean;
    dataUpdatedAt: number;
    errorUpdatedAt: number;
    failureCount: number;
    failureReason: Error | null;
    errorUpdateCount: number;
    isFetched: boolean;
    isFetchedAfterMount: boolean;
    isFetching: boolean;
    isInitialLoading: boolean;
    isPaused: boolean;
    isRefetching: boolean;
    isStale: boolean;
    refetch: (options?: _tanstack_react_query.RefetchOptions) => Promise<_tanstack_react_query.QueryObserverResult<InfiniteData<TQueryFnData, unknown>, Error>>;
    fetchStatus: _tanstack_react_query.FetchStatus;
    promise: Promise<InfiniteData<TQueryFnData, unknown>>;
} | {
    messages: SerializedMessage[];
    data: InfiniteData<TQueryFnData, unknown>;
    error: null;
    isError: false;
    isPending: false;
    isLoading: false;
    isLoadingError: false;
    isRefetchError: false;
    isFetchNextPageError: false;
    isFetchPreviousPageError: false;
    isSuccess: true;
    isPlaceholderData: false;
    status: "success";
    fetchNextPage: (options?: _tanstack_react_query.FetchNextPageOptions) => Promise<_tanstack_react_query.InfiniteQueryObserverResult<InfiniteData<TQueryFnData, unknown>, Error>>;
    fetchPreviousPage: (options?: _tanstack_react_query.FetchPreviousPageOptions) => Promise<_tanstack_react_query.InfiniteQueryObserverResult<InfiniteData<TQueryFnData, unknown>, Error>>;
    hasNextPage: boolean;
    hasPreviousPage: boolean;
    isFetchingNextPage: boolean;
    isFetchingPreviousPage: boolean;
    dataUpdatedAt: number;
    errorUpdatedAt: number;
    failureCount: number;
    failureReason: Error | null;
    errorUpdateCount: number;
    isFetched: boolean;
    isFetchedAfterMount: boolean;
    isFetching: boolean;
    isInitialLoading: boolean;
    isPaused: boolean;
    isRefetching: boolean;
    isStale: boolean;
    refetch: (options?: _tanstack_react_query.RefetchOptions) => Promise<_tanstack_react_query.QueryObserverResult<InfiniteData<TQueryFnData, unknown>, Error>>;
    fetchStatus: _tanstack_react_query.FetchStatus;
    promise: Promise<InfiniteData<TQueryFnData, unknown>>;
};

declare const useMessageContext: () => {
    message: SerializedMessage | null;
};

declare const useLatestMessage: () => {
    latestMessage: SerializedMessage;
    messages: SerializedMessage[];
    data: _tanstack_query_core.InfiniteData<TQueryFnData, unknown>;
    error: Error;
    isError: true;
    isPending: false;
    isLoading: false;
    isLoadingError: false;
    isRefetchError: true;
    isSuccess: false;
    isPlaceholderData: false;
    status: "error";
    fetchNextPage: (options?: _tanstack_query_core.FetchNextPageOptions) => Promise<_tanstack_query_core.InfiniteQueryObserverResult<_tanstack_query_core.InfiniteData<TQueryFnData, unknown>, Error>>;
    fetchPreviousPage: (options?: _tanstack_query_core.FetchPreviousPageOptions) => Promise<_tanstack_query_core.InfiniteQueryObserverResult<_tanstack_query_core.InfiniteData<TQueryFnData, unknown>, Error>>;
    hasNextPage: boolean;
    hasPreviousPage: boolean;
    isFetchNextPageError: boolean;
    isFetchingNextPage: boolean;
    isFetchPreviousPageError: boolean;
    isFetchingPreviousPage: boolean;
    dataUpdatedAt: number;
    errorUpdatedAt: number;
    failureCount: number;
    failureReason: Error | null;
    errorUpdateCount: number;
    isFetched: boolean;
    isFetchedAfterMount: boolean;
    isFetching: boolean;
    isInitialLoading: boolean;
    isPaused: boolean;
    isRefetching: boolean;
    isStale: boolean;
    refetch: (options?: _tanstack_query_core.RefetchOptions) => Promise<_tanstack_query_core.QueryObserverResult<_tanstack_query_core.InfiniteData<TQueryFnData, unknown>, Error>>;
    fetchStatus: _tanstack_query_core.FetchStatus;
    promise: Promise<_tanstack_query_core.InfiniteData<TQueryFnData, unknown>>;
} | {
    latestMessage: SerializedMessage;
    messages: SerializedMessage[];
    data: _tanstack_query_core.InfiniteData<TQueryFnData, unknown>;
    error: null;
    isError: false;
    isPending: false;
    isLoading: false;
    isLoadingError: false;
    isRefetchError: false;
    isFetchNextPageError: false;
    isFetchPreviousPageError: false;
    isSuccess: true;
    isPlaceholderData: false;
    status: "success";
    fetchNextPage: (options?: _tanstack_query_core.FetchNextPageOptions) => Promise<_tanstack_query_core.InfiniteQueryObserverResult<_tanstack_query_core.InfiniteData<TQueryFnData, unknown>, Error>>;
    fetchPreviousPage: (options?: _tanstack_query_core.FetchPreviousPageOptions) => Promise<_tanstack_query_core.InfiniteQueryObserverResult<_tanstack_query_core.InfiniteData<TQueryFnData, unknown>, Error>>;
    hasNextPage: boolean;
    hasPreviousPage: boolean;
    isFetchingNextPage: boolean;
    isFetchingPreviousPage: boolean;
    dataUpdatedAt: number;
    errorUpdatedAt: number;
    failureCount: number;
    failureReason: Error | null;
    errorUpdateCount: number;
    isFetched: boolean;
    isFetchedAfterMount: boolean;
    isFetching: boolean;
    isInitialLoading: boolean;
    isPaused: boolean;
    isRefetching: boolean;
    isStale: boolean;
    refetch: (options?: _tanstack_query_core.RefetchOptions) => Promise<_tanstack_query_core.QueryObserverResult<_tanstack_query_core.InfiniteData<TQueryFnData, unknown>, Error>>;
    fetchStatus: _tanstack_query_core.FetchStatus;
    promise: Promise<_tanstack_query_core.InfiniteData<TQueryFnData, unknown>>;
};

declare const useCreateMessage: ({ onError, }?: {
    onError?: (error: unknown) => void;
}) => {
    createMessage: (variables: UseCreateMessageVariables) => Promise<any>;
    data: undefined;
    variables: undefined;
    error: null;
    isError: false;
    isIdle: true;
    isPending: false;
    isSuccess: false;
    status: "idle";
    mutate: _tanstack_react_query.UseMutateFunction<any, any, any, any>;
    reset: () => void;
    context: any;
    failureCount: number;
    failureReason: any;
    isPaused: boolean;
    submittedAt: number;
    mutateAsync: _tanstack_react_query.UseMutateAsyncFunction<any, any, any, any>;
} | {
    createMessage: (variables: UseCreateMessageVariables) => Promise<any>;
    data: undefined;
    variables: any;
    error: null;
    isError: false;
    isIdle: false;
    isPending: true;
    isSuccess: false;
    status: "pending";
    mutate: _tanstack_react_query.UseMutateFunction<any, any, any, any>;
    reset: () => void;
    context: any;
    failureCount: number;
    failureReason: any;
    isPaused: boolean;
    submittedAt: number;
    mutateAsync: _tanstack_react_query.UseMutateAsyncFunction<any, any, any, any>;
} | {
    createMessage: (variables: UseCreateMessageVariables) => Promise<any>;
    data: undefined;
    error: any;
    variables: any;
    isError: true;
    isIdle: false;
    isPending: false;
    isSuccess: false;
    status: "error";
    mutate: _tanstack_react_query.UseMutateFunction<any, any, any, any>;
    reset: () => void;
    context: any;
    failureCount: number;
    failureReason: any;
    isPaused: boolean;
    submittedAt: number;
    mutateAsync: _tanstack_react_query.UseMutateAsyncFunction<any, any, any, any>;
} | {
    createMessage: (variables: UseCreateMessageVariables) => Promise<any>;
    data: any;
    error: null;
    variables: any;
    isError: false;
    isIdle: false;
    isPending: false;
    isSuccess: true;
    status: "success";
    mutate: _tanstack_react_query.UseMutateFunction<any, any, any, any>;
    reset: () => void;
    context: any;
    failureCount: number;
    failureReason: any;
    isPaused: boolean;
    submittedAt: number;
    mutateAsync: _tanstack_react_query.UseMutateAsyncFunction<any, any, any, any>;
};

declare const useMessageFormContext: () => {
    content: string;
    isDisabled: boolean;
    isLoading: boolean;
    files: openai_resources_files.FileObject[];
    setFiles: react.Dispatch<react.SetStateAction<openai_resources_files.FileObject[]>>;
    isFileLoading: boolean;
};

declare const useIsMutatingMessage: () => boolean;

type Args$5 = {
    assistantId: string;
};
declare const useAssistant: ({ assistantId, }: Args$5) => {
    assistant: any;
    data: any;
    error: Error;
    isError: true;
    isPending: false;
    isLoading: false;
    isLoadingError: false;
    isRefetchError: true;
    isSuccess: false;
    isPlaceholderData: false;
    status: "error";
    dataUpdatedAt: number;
    errorUpdatedAt: number;
    failureCount: number;
    failureReason: Error | null;
    errorUpdateCount: number;
    isFetched: boolean;
    isFetchedAfterMount: boolean;
    isFetching: boolean;
    isInitialLoading: boolean;
    isPaused: boolean;
    isRefetching: boolean;
    isStale: boolean;
    refetch: (options?: _tanstack_react_query.RefetchOptions) => Promise<_tanstack_react_query.QueryObserverResult<any, Error>>;
    fetchStatus: _tanstack_react_query.FetchStatus;
    promise: Promise<any>;
} | {
    assistant: any;
    data: any;
    error: null;
    isError: false;
    isPending: false;
    isLoading: false;
    isLoadingError: false;
    isRefetchError: false;
    isSuccess: true;
    isPlaceholderData: false;
    status: "success";
    dataUpdatedAt: number;
    errorUpdatedAt: number;
    failureCount: number;
    failureReason: Error | null;
    errorUpdateCount: number;
    isFetched: boolean;
    isFetchedAfterMount: boolean;
    isFetching: boolean;
    isInitialLoading: boolean;
    isPaused: boolean;
    isRefetching: boolean;
    isStale: boolean;
    refetch: (options?: _tanstack_react_query.RefetchOptions) => Promise<_tanstack_react_query.QueryObserverResult<any, Error>>;
    fetchStatus: _tanstack_react_query.FetchStatus;
    promise: Promise<any>;
} | {
    assistant: any;
    data: undefined;
    error: Error;
    isError: true;
    isPending: false;
    isLoading: false;
    isLoadingError: true;
    isRefetchError: false;
    isSuccess: false;
    isPlaceholderData: false;
    status: "error";
    dataUpdatedAt: number;
    errorUpdatedAt: number;
    failureCount: number;
    failureReason: Error | null;
    errorUpdateCount: number;
    isFetched: boolean;
    isFetchedAfterMount: boolean;
    isFetching: boolean;
    isInitialLoading: boolean;
    isPaused: boolean;
    isRefetching: boolean;
    isStale: boolean;
    refetch: (options?: _tanstack_react_query.RefetchOptions) => Promise<_tanstack_react_query.QueryObserverResult<any, Error>>;
    fetchStatus: _tanstack_react_query.FetchStatus;
    promise: Promise<any>;
} | {
    assistant: any;
    data: undefined;
    error: null;
    isError: false;
    isPending: true;
    isLoading: true;
    isLoadingError: false;
    isRefetchError: false;
    isSuccess: false;
    isPlaceholderData: false;
    status: "pending";
    dataUpdatedAt: number;
    errorUpdatedAt: number;
    failureCount: number;
    failureReason: Error | null;
    errorUpdateCount: number;
    isFetched: boolean;
    isFetchedAfterMount: boolean;
    isFetching: boolean;
    isInitialLoading: boolean;
    isPaused: boolean;
    isRefetching: boolean;
    isStale: boolean;
    refetch: (options?: _tanstack_react_query.RefetchOptions) => Promise<_tanstack_react_query.QueryObserverResult<any, Error>>;
    fetchStatus: _tanstack_react_query.FetchStatus;
    promise: Promise<any>;
} | {
    assistant: any;
    data: undefined;
    error: null;
    isError: false;
    isPending: true;
    isLoadingError: false;
    isRefetchError: false;
    isSuccess: false;
    isPlaceholderData: false;
    status: "pending";
    dataUpdatedAt: number;
    errorUpdatedAt: number;
    failureCount: number;
    failureReason: Error | null;
    errorUpdateCount: number;
    isFetched: boolean;
    isFetchedAfterMount: boolean;
    isFetching: boolean;
    isLoading: boolean;
    isInitialLoading: boolean;
    isPaused: boolean;
    isRefetching: boolean;
    isStale: boolean;
    refetch: (options?: _tanstack_react_query.RefetchOptions) => Promise<_tanstack_react_query.QueryObserverResult<any, Error>>;
    fetchStatus: _tanstack_react_query.FetchStatus;
    promise: Promise<any>;
} | {
    assistant: any;
    data: any;
    isError: false;
    error: null;
    isPending: false;
    isLoading: false;
    isLoadingError: false;
    isRefetchError: false;
    isSuccess: true;
    isPlaceholderData: true;
    status: "success";
    dataUpdatedAt: number;
    errorUpdatedAt: number;
    failureCount: number;
    failureReason: Error | null;
    errorUpdateCount: number;
    isFetched: boolean;
    isFetchedAfterMount: boolean;
    isFetching: boolean;
    isInitialLoading: boolean;
    isPaused: boolean;
    isRefetching: boolean;
    isStale: boolean;
    refetch: (options?: _tanstack_react_query.RefetchOptions) => Promise<_tanstack_react_query.QueryObserverResult<any, Error>>;
    fetchStatus: _tanstack_react_query.FetchStatus;
    promise: Promise<any>;
};

declare const ThreadDialog: {
    (): react_jsx_runtime.JSX.Element;
    Root: ({ children, }: {
        children: React.ReactNode;
    }) => react_jsx_runtime.JSX.Element;
    Trigger: {
        (args: Omit<{
            children: React.ReactNode;
        } & StyleProps, "children">): react_jsx_runtime.JSX.Element;
        Root: ({ children, style, className, }: {
            children: React.ReactNode;
        } & StyleProps) => react_jsx_runtime.JSX.Element;
        Button: (props: StyleProps) => react_jsx_runtime.JSX.Element;
    };
    Content: {
        (props: StyleProps): react_jsx_runtime.JSX.Element;
        Root: ({ children, className, style, }: {
            children: React.ReactNode;
        } & StyleProps) => react_jsx_runtime.JSX.Element | null;
        Messages: ({ className, style, }: StyleProps) => react_jsx_runtime.JSX.Element;
        FormContainer: ({ children, className, style, }: {
            children: React.ReactNode;
        } & StyleProps) => react_jsx_runtime.JSX.Element;
    };
};

declare const ThreadDialogContext: react.Context<{
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
}>;

declare const useThreadDialogContext: () => {
    isOpen: boolean;
    setIsOpen: react.Dispatch<react.SetStateAction<boolean>>;
};

declare const AudioThreadDialog: {
    (props: StyleProps): react_jsx_runtime.JSX.Element;
    Root: ({ children, }: {
        children: React.ReactNode;
    }) => react_jsx_runtime.JSX.Element;
    Trigger: {
        (args: Omit<{
            children: React.ReactNode;
        } & StyleProps, "children">): react_jsx_runtime.JSX.Element;
        Root: ({ children, style, className, }: {
            children: React.ReactNode;
        } & StyleProps) => react_jsx_runtime.JSX.Element;
        Button: (props: StyleProps) => react_jsx_runtime.JSX.Element;
    };
    Content: {
        (props: StyleProps): react_jsx_runtime.JSX.Element;
        Root: ({ children, className, style, }: {
            children: React.ReactNode;
        } & StyleProps) => react_jsx_runtime.JSX.Element | null;
        Messages: ({ className, style, }: StyleProps) => react_jsx_runtime.JSX.Element;
        FormContainer: ({ children, className, style, }: {
            children: React.ReactNode;
        } & StyleProps) => react_jsx_runtime.JSX.Element;
    };
};

type Args$4 = {
    children: React.ReactNode;
    play?: (args: PlayArgs) => void;
    audioRuntime?: AudioRuntime;
} & StyleProps;

type Args$3 = Omit<Args$4, 'children'>;
declare const AudioThread: {
    (props: Args$3): react_jsx_runtime.JSX.Element;
    Root: ({ children, play, className, style, ...rest }: Args$4) => react_jsx_runtime.JSX.Element;
    Visualization: (props: StyleProps) => react_jsx_runtime.JSX.Element;
    Status: (props: StyleProps) => react_jsx_runtime.JSX.Element;
    Form: (props: StyleProps) => react_jsx_runtime.JSX.Element;
};

declare const useAudioThreadContext: () => {
    audioRuntime: AudioRuntime | null;
};

declare const useTtsAudioRuntime: ({ play, }: {
    play?: (args: PlayArgs) => void;
}) => {
    ttsAudioRuntime: AudioRuntime;
};

declare const TtsAudioRuntimeProvider: ({ children, play, }: {
    children: React.ReactNode;
    play?: (args: PlayArgs) => void;
}) => react_jsx_runtime.JSX.Element;

declare const useWebrtcAudioRuntime: () => {
    webrtcAudioRuntime: {
        user: {
            start: () => Promise<void>;
            pause: () => Promise<void>;
            resume: () => Promise<void>;
            stop: () => Promise<void>;
            isPending: boolean;
            visualizationAnalyser: AnalyserNode | null;
            rawStatus: "paused" | "idle" | "recording" | "stopped";
        };
        assistant: {
            play: () => Promise<void>;
            pause: () => Promise<void>;
            stop: () => Promise<void>;
            visualizationAnalyser: AnalyserNode | null;
            playing: boolean;
            paused: boolean;
            isPending: boolean;
            isReady: boolean;
            isAudioPlayed: boolean;
            rawStatus: undefined;
        };
    };
};

declare const WebrtcAudioRuntimeProvider: ({ children, }: {
    children: React.ReactNode;
}) => react_jsx_runtime.JSX.Element;

declare const Suggestions: {
    ({ children, className, style, }: {
        children: React.ReactNode;
    } & StyleProps): react_jsx_runtime.JSX.Element | null;
    Item: {
        ({ suggestion, isDisabled, className, style, }: {
            suggestion: string;
            isDisabled: boolean;
        } & StyleProps): react_jsx_runtime.JSX.Element;
        Content: ({ onClick, isDisabled, isPending, children, className, style, }: {
            onClick: () => void;
            isDisabled: boolean;
            isPending: boolean;
            children: React.ReactNode;
        } & StyleProps) => react_jsx_runtime.JSX.Element;
    };
};

declare const components: Record<string, any>;

declare const getRemarkPlugins: ({ content, }: {
    content: OpenAI.Beta.Threads.Messages.TextContentBlock;
}) => (unified.Plugin | typeof remarkGfm)[];

type MarkdownContextType = {
    components: typeof components;
    getRemarkPlugins: typeof getRemarkPlugins;
};
declare const MarkdownContext: react.Context<MarkdownContextType>;

declare const MarkdownProvider: ({ children, ...rest }: {
    children: React.ReactNode;
} & Partial<MarkdownContextType>) => react_jsx_runtime.JSX.Element;

declare const useMarkdownContext: () => MarkdownContextType;

declare const SourceAnnotation: ({ children, ...rest }: {
    children: React.ReactNode;
    ["data-annotation"]: string;
}) => react_jsx_runtime.JSX.Element | null;

declare const AssistantAvatarContext: react.Context<react_jsx_runtime.JSX.Element>;

declare const AssistantNameContext: react.Context<string>;

declare const UserAvatarContext: react.Context<react_jsx_runtime.JSX.Element>;

declare const Avatar: ({ avatar, size, className, style, }: {
    avatar: Avatar$1;
    size?: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9";
} & StyleProps) => react_jsx_runtime.JSX.Element;

type FunctionComponents = {
    [key: string]: React.ReactNode;
};
declare const FunctionComponentsContext: react.Context<FunctionComponents>;

type Args$2 = {
    fn: OpenAI.Beta.Threads.Runs.FunctionToolCall.Function;
    runStep: OpenAI.Beta.Threads.Runs.RunStep;
    title: string;
};
declare const FunctionBase: ({ fn, runStep, title, }: Args$2) => react_jsx_runtime.JSX.Element;

declare const ComponentsProvider: ({ children, ...rest }: {
    children: React.ReactNode;
}) => react_jsx_runtime.JSX.Element;

declare const useComponents: () => {
    components: {
        RunStep: {
            ({ runStep, className, style, }: {
                runStep: SerializedRunStep;
            } & StyleProps): react_jsx_runtime.JSX.Element | null;
            ToolCalls: {
                ({ stepDetails, runStep, className, style, }: {
                    stepDetails: openai_resources_beta_threads_runs_steps.ToolCallsStepDetails;
                    runStep: SerializedRunStep;
                } & StyleProps): react_jsx_runtime.JSX.Element;
                Root: ({ children, className, style, }: {
                    children: React.ReactNode;
                } & StyleProps) => react_jsx_runtime.JSX.Element;
                StartingToolCalls: () => react_jsx_runtime.JSX.Element;
                ToolCall: ({ toolCall, runStep, }: {
                    toolCall: ToolCall;
                    runStep: SerializedRunStep;
                }) => react_jsx_runtime.JSX.Element;
            };
        };
        Function: ({ fn, runStep, }: {
            fn: openai_resources_beta_threads_runs_steps.FunctionToolCall.Function;
            runStep: openai_resources_beta_threads_runs_steps.RunStep;
        }) => react_jsx_runtime.JSX.Element;
        StartingToolCalls: () => react_jsx_runtime.JSX.Element;
    };
};

type Args$1 = {
    runStep: SerializedRunStep;
} & StyleProps;
declare const RunStep: {
    ({ runStep, className, style, }: Args$1): react_jsx_runtime.JSX.Element | null;
    ToolCalls: {
        ({ stepDetails, runStep, className, style, }: {
            stepDetails: openai_resources_beta_threads_runs_steps.ToolCallsStepDetails;
            runStep: SerializedRunStep;
        } & StyleProps): react_jsx_runtime.JSX.Element;
        Root: ({ children, className, style, }: {
            children: React.ReactNode;
        } & StyleProps) => react_jsx_runtime.JSX.Element;
        StartingToolCalls: () => react_jsx_runtime.JSX.Element;
        ToolCall: ({ toolCall, runStep, }: {
            toolCall: ToolCall;
            runStep: SerializedRunStep;
        }) => react_jsx_runtime.JSX.Element;
    };
};

type Args = {
    children: React.ReactNode;
};
declare const AssistantProvider: ({ children, }: Args) => react_jsx_runtime.JSX.Element;

declare const MessageContent: ({ message, }: {
    message: SerializedMessage;
}) => react_jsx_runtime.JSX.Element;

declare const useCreateFile: ({ onError, }?: {
    onError?: (error: unknown) => void;
}) => {
    createFile: (...args: any[]) => Promise<any>;
    data: undefined;
    variables: undefined;
    error: null;
    isError: false;
    isIdle: true;
    isPending: false;
    isSuccess: false;
    status: "idle";
    mutate: _tanstack_react_query.UseMutateFunction<any, any, {
        [key: string]: any;
        content: string;
    }, any>;
    reset: () => void;
    context: any;
    failureCount: number;
    failureReason: any;
    isPaused: boolean;
    submittedAt: number;
    mutateAsync: _tanstack_react_query.UseMutateAsyncFunction<any, any, {
        [key: string]: any;
        content: string;
    }, any>;
} | {
    createFile: (...args: any[]) => Promise<any>;
    data: undefined;
    variables: {
        [key: string]: any;
        content: string;
    };
    error: null;
    isError: false;
    isIdle: false;
    isPending: true;
    isSuccess: false;
    status: "pending";
    mutate: _tanstack_react_query.UseMutateFunction<any, any, {
        [key: string]: any;
        content: string;
    }, any>;
    reset: () => void;
    context: any;
    failureCount: number;
    failureReason: any;
    isPaused: boolean;
    submittedAt: number;
    mutateAsync: _tanstack_react_query.UseMutateAsyncFunction<any, any, {
        [key: string]: any;
        content: string;
    }, any>;
} | {
    createFile: (...args: any[]) => Promise<any>;
    data: undefined;
    error: any;
    variables: {
        [key: string]: any;
        content: string;
    };
    isError: true;
    isIdle: false;
    isPending: false;
    isSuccess: false;
    status: "error";
    mutate: _tanstack_react_query.UseMutateFunction<any, any, {
        [key: string]: any;
        content: string;
    }, any>;
    reset: () => void;
    context: any;
    failureCount: number;
    failureReason: any;
    isPaused: boolean;
    submittedAt: number;
    mutateAsync: _tanstack_react_query.UseMutateAsyncFunction<any, any, {
        [key: string]: any;
        content: string;
    }, any>;
} | {
    createFile: (...args: any[]) => Promise<any>;
    data: any;
    error: null;
    variables: {
        [key: string]: any;
        content: string;
    };
    isError: false;
    isIdle: false;
    isPending: false;
    isSuccess: true;
    status: "success";
    mutate: _tanstack_react_query.UseMutateFunction<any, any, {
        [key: string]: any;
        content: string;
    }, any>;
    reset: () => void;
    context: any;
    failureCount: number;
    failureReason: any;
    isPaused: boolean;
    submittedAt: number;
    mutateAsync: _tanstack_react_query.UseMutateAsyncFunction<any, any, {
        [key: string]: any;
        content: string;
    }, any>;
};

export { AssistantAvatarContext, AssistantNameContext, AssistantProvider, AudioThread, AudioThreadDialog, Avatar, ComponentsProvider, FunctionBase, FunctionComponentsContext, MarkdownContext, MarkdownProvider, MessageContent, RunStep, SourceAnnotation, Suggestions, SuperinterfaceProvider, Thread, ThreadDialog, ThreadDialogContext, TtsAudioRuntimeProvider, UserAvatarContext, WebrtcAudioRuntimeProvider, useAssistant, useAudioThreadContext, useComponents, useCreateFile, useCreateMessage, useIsMutatingMessage, useLatestMessage, useMarkdownContext, useMessageContext, useMessageFormContext, useMessages, useSuperinterfaceContext, useSuperinterfaceContext as useThreadContext, useThreadDialogContext, useTtsAudioRuntime, useWebrtcAudioRuntime };
