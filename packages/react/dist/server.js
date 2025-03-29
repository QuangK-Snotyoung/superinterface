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

// src/lib/messages/messagesResponse/data/messages/index.ts
import pMap from "p-map";

// src/lib/runSteps/getRunSteps/index.ts
function asyncGeneratorStep(n, t, e, r, o, a, c) {
  try {
    var i = n[a](c), u = i.value;
  } catch (n2) {
    return void e(n2);
  }
  i.done ? t(u) : Promise.resolve(u).then(r, o);
}
function _asyncToGenerator(n) {
  return function() {
    var t = this, e = arguments;
    return new Promise(function(r, o) {
      var a = n.apply(t, e);
      function _next(n2) {
        asyncGeneratorStep(a, r, o, _next, _throw, "next", n2);
      }
      function _throw(n2) {
        asyncGeneratorStep(a, r, o, _next, _throw, "throw", n2);
      }
      _next(void 0);
    });
  };
}
var getRunSteps = /* @__PURE__ */ function() {
  var _ref2 = _asyncToGenerator(function* (_ref) {
    var {
      threadId,
      runId,
      client
    } = _ref;
    var runStepsResponse = yield client.beta.threads.runs.steps.list(threadId, runId);
    return runStepsResponse.data;
  });
  return function getRunSteps2(_x) {
    return _ref2.apply(this, arguments);
  };
}();

// src/lib/messages/extendMessage.ts
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), true).forEach(function(r2) {
      _defineProperty(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _defineProperty(e, r, t) {
  return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: true, configurable: true, writable: true }) : e[r] = t, e;
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function asyncGeneratorStep2(n, t, e, r, o, a, c) {
  try {
    var i = n[a](c), u = i.value;
  } catch (n2) {
    return void e(n2);
  }
  i.done ? t(u) : Promise.resolve(u).then(r, o);
}
function _asyncToGenerator2(n) {
  return function() {
    var t = this, e = arguments;
    return new Promise(function(r, o) {
      var a = n.apply(t, e);
      function _next(n2) {
        asyncGeneratorStep2(a, r, o, _next, _throw, "next", n2);
      }
      function _throw(n2) {
        asyncGeneratorStep2(a, r, o, _next, _throw, "throw", n2);
      }
      _next(void 0);
    });
  };
}
var extendMessage = /* @__PURE__ */ function() {
  var _ref2 = _asyncToGenerator2(function* (_ref) {
    var {
      message,
      client
    } = _ref;
    if (!message.run_id) {
      return _objectSpread(_objectSpread({}, message), {}, {
        runSteps: []
      });
    }
    return _objectSpread(_objectSpread({}, message), {}, {
      runSteps: yield getRunSteps({
        threadId: message.thread_id,
        runId: message.run_id,
        client
      })
    });
  });
  return function extendMessage2(_x) {
    return _ref2.apply(this, arguments);
  };
}();

// src/lib/messages/messagesResponse/data/messages/runMessages/index.ts
import dayjs from "dayjs";

// src/lib/messages/messagesResponse/data/messages/runMessages/getLatestRun.ts
function asyncGeneratorStep3(n, t, e, r, o, a, c) {
  try {
    var i = n[a](c), u = i.value;
  } catch (n2) {
    return void e(n2);
  }
  i.done ? t(u) : Promise.resolve(u).then(r, o);
}
function _asyncToGenerator3(n) {
  return function() {
    var t = this, e = arguments;
    return new Promise(function(r, o) {
      var a = n.apply(t, e);
      function _next(n2) {
        asyncGeneratorStep3(a, r, o, _next, _throw, "next", n2);
      }
      function _throw(n2) {
        asyncGeneratorStep3(a, r, o, _next, _throw, "throw", n2);
      }
      _next(void 0);
    });
  };
}
var getLatestRun = /* @__PURE__ */ function() {
  var _ref2 = _asyncToGenerator3(function* (_ref) {
    var {
      threadId,
      client
    } = _ref;
    var runsResponse = yield client.beta.threads.runs.list(threadId, {
      limit: 1
    });
    return runsResponse.data[0];
  });
  return function getLatestRun2(_x) {
    return _ref2.apply(this, arguments);
  };
}();

// src/lib/optimistic/optimisticId.ts
import { uid } from "radash";
var optimisticId = () => "-".concat(uid(24));

// src/lib/messages/messagesResponse/data/messages/runMessages/index.ts
function asyncGeneratorStep4(n, t, e, r, o, a, c) {
  try {
    var i = n[a](c), u = i.value;
  } catch (n2) {
    return void e(n2);
  }
  i.done ? t(u) : Promise.resolve(u).then(r, o);
}
function _asyncToGenerator4(n) {
  return function() {
    var t = this, e = arguments;
    return new Promise(function(r, o) {
      var a = n.apply(t, e);
      function _next(n2) {
        asyncGeneratorStep4(a, r, o, _next, _throw, "next", n2);
      }
      function _throw(n2) {
        asyncGeneratorStep4(a, r, o, _next, _throw, "throw", n2);
      }
      _next(void 0);
    });
  };
}
var progressStatuses = ["queued", "in_progress", "requires_action", "cancelling"];
var runMessages = /* @__PURE__ */ function() {
  var _ref2 = _asyncToGenerator4(function* (_ref) {
    var {
      result,
      threadId,
      client
    } = _ref;
    var latestRun = yield getLatestRun({
      threadId,
      client
    });
    if (!latestRun) {
      return [];
    }
    var messageFromLatestRun = result.find((m) => m.run_id === latestRun.id);
    if (messageFromLatestRun) {
      return [];
    }
    if (!progressStatuses.includes(latestRun.status)) {
      return [];
    }
    return [yield extendMessage({
      message: {
        id: optimisticId(),
        role: "assistant",
        created_at: dayjs().unix(),
        object: "thread.message",
        incomplete_details: null,
        completed_at: dayjs().unix(),
        incomplete_at: null,
        status: "completed",
        content: [],
        run_id: latestRun.id,
        assistant_id: latestRun.assistant_id,
        thread_id: latestRun.thread_id,
        attachments: [],
        metadata: {}
      },
      client
    })];
  });
  return function runMessages2(_x) {
    return _ref2.apply(this, arguments);
  };
}();

// src/lib/messages/messagesResponse/data/messages/index.ts
function asyncGeneratorStep5(n, t, e, r, o, a, c) {
  try {
    var i = n[a](c), u = i.value;
  } catch (n2) {
    return void e(n2);
  }
  i.done ? t(u) : Promise.resolve(u).then(r, o);
}
function _asyncToGenerator5(n) {
  return function() {
    var t = this, e = arguments;
    return new Promise(function(r, o) {
      var a = n.apply(t, e);
      function _next(n2) {
        asyncGeneratorStep5(a, r, o, _next, _throw, "next", n2);
      }
      function _throw(n2) {
        asyncGeneratorStep5(a, r, o, _next, _throw, "throw", n2);
      }
      _next(void 0);
    });
  };
}
var messages = /* @__PURE__ */ function() {
  var _ref2 = _asyncToGenerator5(function* (_ref) {
    var {
      messagesResponse: messagesResponse2,
      pageParam,
      threadId,
      client
    } = _ref;
    var result = yield pMap(messagesResponse2.data, (message) => extendMessage({
      client,
      message
    }));
    if (pageParam) {
      return result;
    }
    return [...yield runMessages({
      result,
      threadId,
      client
    }), ...result];
  });
  return function messages2(_x) {
    return _ref2.apply(this, arguments);
  };
}();

// src/lib/messages/messagesResponse/data/index.ts
function asyncGeneratorStep6(n, t, e, r, o, a, c) {
  try {
    var i = n[a](c), u = i.value;
  } catch (n2) {
    return void e(n2);
  }
  i.done ? t(u) : Promise.resolve(u).then(r, o);
}
function _asyncToGenerator6(n) {
  return function() {
    var t = this, e = arguments;
    return new Promise(function(r, o) {
      var a = n.apply(t, e);
      function _next(n2) {
        asyncGeneratorStep6(a, r, o, _next, _throw, "next", n2);
      }
      function _throw(n2) {
        asyncGeneratorStep6(a, r, o, _next, _throw, "throw", n2);
      }
      _next(void 0);
    });
  };
}
var data = /* @__PURE__ */ function() {
  var _ref2 = _asyncToGenerator6(function* (_ref) {
    var {
      messagesResponse: messagesResponse2,
      pageParam,
      threadId,
      client
    } = _ref;
    return (yield messages({
      messagesResponse: messagesResponse2,
      pageParam,
      threadId,
      client
    })).map((message) => serializeMessage({
      message
    }));
  });
  return function data2(_x) {
    return _ref2.apply(this, arguments);
  };
}();

// src/lib/messages/messagesResponse/limit.ts
var limit = 10;

// src/lib/messages/messagesResponse/hasNextPage.ts
var hasNextPage = (_ref) => {
  var {
    messagesResponse: messagesResponse2
  } = _ref;
  if (messagesResponse2.data.length < limit) return false;
  return messagesResponse2.hasNextPage();
};

// src/lib/messages/messagesResponse/index.ts
function ownKeys2(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread2(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys2(Object(t), true).forEach(function(r2) {
      _defineProperty2(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys2(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _defineProperty2(e, r, t) {
  return (r = _toPropertyKey2(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: true, configurable: true, writable: true }) : e[r] = t, e;
}
function _toPropertyKey2(t) {
  var i = _toPrimitive2(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive2(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function asyncGeneratorStep7(n, t, e, r, o, a, c) {
  try {
    var i = n[a](c), u = i.value;
  } catch (n2) {
    return void e(n2);
  }
  i.done ? t(u) : Promise.resolve(u).then(r, o);
}
function _asyncToGenerator7(n) {
  return function() {
    var t = this, e = arguments;
    return new Promise(function(r, o) {
      var a = n.apply(t, e);
      function _next(n2) {
        asyncGeneratorStep7(a, r, o, _next, _throw, "next", n2);
      }
      function _throw(n2) {
        asyncGeneratorStep7(a, r, o, _next, _throw, "throw", n2);
      }
      _next(void 0);
    });
  };
}
var messagesResponse = /* @__PURE__ */ function() {
  var _ref2 = _asyncToGenerator7(function* (_ref) {
    var {
      client,
      threadId,
      pageParam
    } = _ref;
    var messagesResponse2 = yield client.beta.threads.messages.list(threadId, _objectSpread2(_objectSpread2({}, pageParam ? {
      after: pageParam
    } : {}), {}, {
      limit
    }));
    return {
      data: yield data({
        client,
        messagesResponse: messagesResponse2,
        pageParam,
        threadId
      }),
      hasNextPage: hasNextPage({
        messagesResponse: messagesResponse2
      }),
      // @ts-ignore-next-line
      lastId: messagesResponse2.body.last_id
    };
  });
  return function messagesResponse2(_x) {
    return _ref2.apply(this, arguments);
  };
}();

// src/lib/runs/serializeRun.ts
import { pick as pick2 } from "radash";
var serializeRun = (_ref) => {
  var {
    run
  } = _ref;
  return pick2(run, ["id", "thread_id", "assistant_id", "created_at"]);
};

// src/lib/streams/enqueueJson.ts
var enqueueJson = (_ref) => {
  var {
    controller,
    value
  } = _ref;
  return controller.enqueue(new TextEncoder().encode(JSON.stringify(value)));
};

// src/lib/messages/createMessageResponse/actionsStream.ts
import pMap2 from "p-map";
function asyncGeneratorStep8(n, t, e, r, o, a, c) {
  try {
    var i = n[a](c), u = i.value;
  } catch (n2) {
    return void e(n2);
  }
  i.done ? t(u) : Promise.resolve(u).then(r, o);
}
function _asyncToGenerator8(n) {
  return function() {
    var t = this, e = arguments;
    return new Promise(function(r, o) {
      var a = n.apply(t, e);
      function _next(n2) {
        asyncGeneratorStep8(a, r, o, _next, _throw, "next", n2);
      }
      function _throw(n2) {
        asyncGeneratorStep8(a, r, o, _next, _throw, "throw", n2);
      }
      _next(void 0);
    });
  };
}
var actionsStream = /* @__PURE__ */ function() {
  var _ref2 = _asyncToGenerator8(function* (_ref) {
    var {
      client,
      run,
      handleToolCall,
      controller
    } = _ref;
    if (!run.required_action) {
      throw new Error("Run does not have a required action");
    }
    var toolCalls = run.required_action.submit_tool_outputs.tool_calls;
    return client.beta.threads.runs.submitToolOutputsStream(run.thread_id, run.id, {
      tool_outputs: yield pMap2(toolCalls, (toolCall) => handleToolCall({
        toolCall,
        run,
        controller
      }))
    });
  });
  return function actionsStream2(_x) {
    return _ref2.apply(this, arguments);
  };
}();

// src/lib/messages/createMessageResponse/handleStream.ts
function asyncGeneratorStep9(n, t, e, r, o, a, c) {
  try {
    var i = n[a](c), u = i.value;
  } catch (n2) {
    return void e(n2);
  }
  i.done ? t(u) : Promise.resolve(u).then(r, o);
}
function _asyncToGenerator9(n) {
  return function() {
    var t = this, e = arguments;
    return new Promise(function(r, o) {
      var a = n.apply(t, e);
      function _next(n2) {
        asyncGeneratorStep9(a, r, o, _next, _throw, "next", n2);
      }
      function _throw(n2) {
        asyncGeneratorStep9(a, r, o, _next, _throw, "throw", n2);
      }
      _next(void 0);
    });
  };
}
function _asyncIterator(r) {
  var n, t, o, e = 2;
  for ("undefined" != typeof Symbol && (t = Symbol.asyncIterator, o = Symbol.iterator); e--; ) {
    if (t && null != (n = r[t])) return n.call(r);
    if (o && null != (n = r[o])) return new AsyncFromSyncIterator(n.call(r));
    t = "@@asyncIterator", o = "@@iterator";
  }
  throw new TypeError("Object is not async iterable");
}
function AsyncFromSyncIterator(r) {
  function AsyncFromSyncIteratorContinuation(r2) {
    if (Object(r2) !== r2) return Promise.reject(new TypeError(r2 + " is not an object."));
    var n = r2.done;
    return Promise.resolve(r2.value).then(function(r3) {
      return { value: r3, done: n };
    });
  }
  return AsyncFromSyncIterator = function AsyncFromSyncIterator2(r2) {
    this.s = r2, this.n = r2.next;
  }, AsyncFromSyncIterator.prototype = { s: null, n: null, next: function next() {
    return AsyncFromSyncIteratorContinuation(this.n.apply(this.s, arguments));
  }, return: function _return(r2) {
    var n = this.s.return;
    return void 0 === n ? Promise.resolve({ value: r2, done: true }) : AsyncFromSyncIteratorContinuation(n.apply(this.s, arguments));
  }, throw: function _throw(r2) {
    var n = this.s.return;
    return void 0 === n ? Promise.reject(r2) : AsyncFromSyncIteratorContinuation(n.apply(this.s, arguments));
  } }, new AsyncFromSyncIterator(r);
}
var _handleStream = /* @__PURE__ */ function() {
  var _ref2 = _asyncToGenerator9(function* (_ref) {
    var {
      client,
      stream,
      controller,
      handleToolCall,
      onEvent
    } = _ref;
    var _iteratorAbruptCompletion = false;
    var _didIteratorError = false;
    var _iteratorError;
    try {
      for (var _iterator = _asyncIterator(stream), _step; _iteratorAbruptCompletion = !(_step = yield _iterator.next()).done; _iteratorAbruptCompletion = false) {
        var value = _step.value;
        {
          onEvent({
            controller,
            event: value.event,
            data: value.data
          });
          if (["thread.message.created", "thread.message.completed"].includes(value.event)) {
            enqueueJson({
              controller,
              value: {
                event: value.event,
                data: serializeMessage({
                  message: value.data
                })
              }
            });
          } else if (["thread.message.delta", "thread.run.step.delta"].includes(value.event)) {
            enqueueJson({
              controller,
              value
            });
          } else if (value.event === "thread.run.created") {
            enqueueJson({
              controller,
              value: {
                event: value.event,
                data: serializeRun({
                  run: value.data
                })
              }
            });
          } else if (value.event === "thread.run.failed") {
            enqueueJson({
              controller,
              value: {
                event: value.event,
                data: serializeRun({
                  run: value.data
                })
              }
            });
          } else if (["thread.run.step.created", "thread.run.step.completed"].includes(value.event)) {
            enqueueJson({
              controller,
              value: {
                event: value.event,
                data: serializeRunStep({
                  runStep: value.data
                })
              }
            });
          } else if (value.event === "thread.run.requires_action") {
            enqueueJson({
              controller,
              value
            });
            yield _handleStream({
              client,
              stream: yield actionsStream({
                client,
                run: value.data,
                handleToolCall,
                controller
              }),
              controller,
              handleToolCall,
              onEvent
            });
          } else {
            console.dir({
              value
            }, {
              depth: null
            });
          }
        }
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (_iteratorAbruptCompletion && _iterator.return != null) {
          yield _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  });
  return function handleStream(_x) {
    return _ref2.apply(this, arguments);
  };
}();

// src/lib/messages/createMessageResponse/index.ts
function asyncGeneratorStep10(n, t, e, r, o, a, c) {
  try {
    var i = n[a](c), u = i.value;
  } catch (n2) {
    return void e(n2);
  }
  i.done ? t(u) : Promise.resolve(u).then(r, o);
}
function _asyncToGenerator10(n) {
  return function() {
    var t = this, e = arguments;
    return new Promise(function(r, o) {
      var a = n.apply(t, e);
      function _next(n2) {
        asyncGeneratorStep10(a, r, o, _next, _throw, "next", n2);
      }
      function _throw(n2) {
        asyncGeneratorStep10(a, r, o, _next, _throw, "throw", n2);
      }
      _next(void 0);
    });
  };
}
var createMessageResponse = (_ref) => {
  var {
    client,
    createRunStream,
    handleToolCall,
    onStart = () => {
    },
    onError = () => {
    },
    onClose = () => {
    },
    onEvent = () => {
    }
  } = _ref;
  return new ReadableStream({
    start(controller) {
      return _asyncToGenerator10(function* () {
        onStart({
          controller
        });
        try {
          yield _handleStream({
            client,
            stream: createRunStream,
            controller,
            handleToolCall,
            onEvent
          });
        } catch (error) {
          onError({
            error,
            controller
          });
          controller.error(error);
        }
        onClose({
          controller
        });
        controller.close();
      })();
    }
  });
};
export {
  createMessageResponse,
  extendMessage,
  messagesResponse
};
//# sourceMappingURL=server.js.map