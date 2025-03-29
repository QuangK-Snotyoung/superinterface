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
export {
  rootElement
};
//# sourceMappingURL=index.mjs.map