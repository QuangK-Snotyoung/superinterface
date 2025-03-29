// src/lib/optimistic/optimisticId.ts
import { uid } from "radash";
var optimisticId = () => "-".concat(uid(24));

// src/lib/optimistic/isOptimistic.ts
import _ from "lodash";
var isOptimistic = (_ref) => {
  var {
    id
  } = _ref;
  return _.startsWith(id, "-");
};

// src/lib/runSteps/serializeRunStep.ts
import { pick } from "radash";
var serializeRunStep = (_ref) => {
  var {
    runStep
  } = _ref;
  return pick(runStep, ["id", "run_id", "step_details", "completed_at", "cancelled_at", "failed_at", "status"]);
};

// src/lib/messages/serializeMessage.ts
var serializeMessage = (_ref) => {
  var _message$runSteps;
  var {
    message
  } = _ref;
  return {
    id: message.id,
    role: message.role,
    created_at: message.created_at,
    content: message.content,
    run_id: message.run_id,
    assistant_id: message.assistant_id,
    thread_id: message.thread_id,
    attachments: message.attachments,
    metadata: message.metadata,
    runSteps: ((_message$runSteps = message.runSteps) !== null && _message$runSteps !== void 0 ? _message$runSteps : []).map((runStep) => serializeRunStep({
      runStep
    })),
    status: message.status
  };
};

// src/lib/threadIdStorage/key.ts
var key = (_ref) => {
  var {
    assistantId
  } = _ref;
  return "superinterface-".concat(assistantId, "-threadId");
};

// src/lib/streams/enqueueJson.ts
var enqueueJson = (_ref) => {
  var {
    controller,
    value
  } = _ref;
  return controller.enqueue(new TextEncoder().encode(JSON.stringify(value)));
};
export {
  enqueueJson,
  isOptimistic,
  optimisticId,
  serializeMessage,
  key as threadIdStorageKey
};
//# sourceMappingURL=utils.js.map