"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  rootElement: () => rootElement
});
module.exports = __toCommonJS(index_exports);

// src/lib/rootElement/scriptTagId.ts
var scriptTagId = ({
  currentScript
}) => {
  const url = new URL(currentScript.src);
  const scriptTagIdMatch = url.pathname.match(/^\/script-tags\/(.+)$/);
  if (!scriptTagIdMatch) {
    return null;
  }
  return scriptTagIdMatch[1] ?? null;
};

// src/lib/rootElement/manualElement.ts
var manualElement = ({
  currentScript
}) => {
  const scriptTagId2 = scriptTagId({ currentScript });
  if (!scriptTagId2) {
    return null;
  }
  return document.querySelector(`.superinterface-root[data-script-tag-id="${scriptTagId2}"]`);
};

// src/lib/rootElement/index.ts
var appendWithStyles = ({
  appendElement,
  currentScript
}) => {
  const style = document.createElement("style");
  style.innerHTML = `.superinterface-root .radix-themes {
   display: flex;
   flex-grow: 1;
   min-height: inherit;
   z-index: auto;
 }

 .superinterface-root {
   display: flex;
   flex-grow: 1;
   max-height: 100dvh;
 }`;
  document.head.appendChild(style);
  const element = document.createElement("div");
  element.classList.add("superinterface-root");
  if (currentScript) {
    const scriptTagId2 = scriptTagId({ currentScript });
    if (scriptTagId2) {
      element.dataset.scriptTagId = scriptTagId2;
    }
  }
  appendElement({ element });
  return element;
};
var appendToBody = ({
  currentScript
} = {}) => appendWithStyles({
  appendElement: ({ element }) => document.body.appendChild(element),
  currentScript: currentScript ?? null
});
var rootElement = ({
  currentScript
}) => {
  if (currentScript instanceof HTMLScriptElement) {
    const manualElement2 = manualElement({ currentScript });
    if (manualElement2) {
      return manualElement2;
    }
    const isInBody = document.body.contains(currentScript);
    if (!isInBody) {
      return appendToBody({ currentScript });
    }
    const parentNode = currentScript.parentNode;
    if (!parentNode) {
      return appendToBody({ currentScript });
    }
    return appendWithStyles({
      appendElement: ({ element }) => parentNode.insertBefore(element, currentScript.nextSibling),
      currentScript
    });
  }
  return appendToBody();
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  rootElement
});
//# sourceMappingURL=index.js.map