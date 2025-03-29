import OpenAI from 'openai';

declare enum IconAvatarName {
    BACKPACK = "BACKPACK",
    ROCKET = "ROCKET",
    MAGIC_WAND = "MAGIC_WAND",
    CUBE = "CUBE",
    TARGET = "TARGET",
    DISC = "DISC",
    GLOBE = "GLOBE",
    STAR = "STAR",
    LIGHTNING_BOLT = "LIGHTNING_BOLT",
    FACE = "FACE",
    PERSON = "PERSON",
    HEART = "HEART"
}
declare enum AvatarType {
    ICON = "ICON",
    IMAGE = "IMAGE"
}

type SerializedRunStep = Pick<OpenAI.Beta.Threads.Runs.RunStep, 'id' | 'run_id' | 'step_details' | 'completed_at' | 'cancelled_at' | 'failed_at' | 'status'>;
type SerializedMessage = Pick<OpenAI.Beta.Threads.Messages.Message, 'id' | 'role' | 'created_at' | 'content' | 'run_id' | 'assistant_id' | 'thread_id' | 'attachments' | 'metadata' | 'status'> & {
    runSteps: SerializedRunStep[];
};
type ToolCall = OpenAI.Beta.Threads.Runs.CodeInterpreterToolCall | OpenAI.Beta.Threads.Runs.FileSearchToolCall | OpenAI.Beta.Threads.Runs.FunctionToolCall;
type MessagesPage = {
    data: SerializedMessage[];
    hasNextPage: boolean;
    lastId: string;
};
type MessageGroup = {
    id: string;
    role: "user" | "assistant";
    messages: SerializedMessage[];
    createdAt: number;
};
type AudioEngine = {
    source: MediaStreamAudioSourceNode | GainNode;
    audioContext: AudioContext;
};
type Toast = {
    type: 'success' | 'error';
    message: string;
};
type ThreadMessageCreatedEvent = OpenAI.Beta.Assistants.AssistantStreamEvent.ThreadMessageCreated & {
    data: SerializedMessage;
};
type ThreadMessageCompletedEvent = OpenAI.Beta.Assistants.AssistantStreamEvent.ThreadMessageCompleted & {
    data: SerializedMessage;
};
type ThreadRunStepDeltaEvent = OpenAI.Beta.Assistants.AssistantStreamEvent.ThreadRunStepDelta & {
    data: {
        run_id: string;
    };
};
type MessagesQueryKey = (string | Record<string, any>)[];
type IconAvatar = {
    name: IconAvatarName;
};
type ImageAvatar = {
    url: string;
};
type Avatar = {
    type: AvatarType;
    iconAvatar: IconAvatar | null;
    imageAvatar: ImageAvatar | null;
};
type Size = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9';
type StyleProps = {
    style?: React.CSSProperties;
    className?: string;
};
type ThreadStorageOptions = {
    get: (args: {
        assistantId: string;
    }) => string | null;
    set: (args: {
        assistantId: string;
        threadId: string;
    }) => void;
    remove: (args: {
        assistantId: string;
    }) => void;
};
type UseCreateMessageTextVariables = {
    content: string;
};
type UseCreateMessageAudioVariables = {
    audioContent: unknown;
};
type UseCreateMessageVariables = (UseCreateMessageTextVariables | UseCreateMessageAudioVariables) & {
    [key: string]: any;
};
type PlayArgs = {
    input: string;
    onPlay: () => void;
    onStop: () => void;
    onEnd: () => void;
};
type UserAudioControls = {
    start: () => Promise<void>;
    stop: () => Promise<void>;
    pause: () => Promise<void>;
    resume: () => Promise<void>;
    visualizationAnalyser: AnalyserNode | null;
    isPending: boolean;
    rawStatus?: string;
};
type AssistantAudioControls = {
    play: () => void;
    pause: () => void;
    stop: () => void;
    visualizationAnalyser: AnalyserNode | null;
    playing: boolean;
    paused: boolean;
    isPending: boolean;
    isReady: boolean;
    isAudioPlayed: boolean;
    rawStatus?: string;
};
type AudioRuntime = {
    user: UserAudioControls;
    assistant: AssistantAudioControls;
};

export type { AssistantAudioControls, AudioEngine, AudioRuntime, Avatar, IconAvatar, ImageAvatar, MessageGroup, MessagesPage, MessagesQueryKey, PlayArgs, SerializedMessage, SerializedRunStep, Size, StyleProps, ThreadMessageCompletedEvent, ThreadMessageCreatedEvent, ThreadRunStepDeltaEvent, ThreadStorageOptions, Toast, ToolCall, UseCreateMessageVariables, UserAudioControls };
