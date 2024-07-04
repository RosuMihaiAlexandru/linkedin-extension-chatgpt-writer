// import * as React from 'react';
// import cssText from "data-text:~style.css"
// import type { PlasmoCSConfig } from "plasmo"

// import { CountButton } from "~features/CountButton"

// export const config: PlasmoCSConfig = {
//   matches: ["https://*.linkedin.com/*"]
// }

// export const getStyle = () => {
//   const style = document.createElement("style")
//   style.textContent = cssText
//   return style
// }

// const PlasmoOverlay = () => {
//   return (
//     <div className="z-50 flex fixed top-32 right-8">
//       <CountButton />
//     </div>
//   )
// }

// export default PlasmoOverlay


// import { useState, useEffect } from "react";
// import AIIcon from "~features/AIIcon"; // Adjust path as necessary
// import type { PlasmoCSConfig } from "plasmo";
// import cssText from "data-text:~style.css";

// export const config: PlasmoCSConfig = {
//   matches: ["https://*.linkedin.com/*"]
// };

// export const getStyle = () => {
//   const style = document.createElement("style");
//   style.textContent = cssText;
//   return style;
// };

// const ContentScript = () => {
//   const [showAIIcon, setShowAIIcon] = useState(false);
//   const [iconPosition, setIconPosition] = useState({ top: 0, left: 0 });

//   useEffect(() => {
//     const handleFocus = (event: FocusEvent) => {
//       const target = event.target as HTMLElement;
//       if (target.tagName.toLowerCase() === "input" || target.tagName.toLowerCase() === "textarea") {
//         const rect = target.getBoundingClientRect();
//         setIconPosition({ top: rect.top, left: rect.right });
//         setShowAIIcon(true);
//       }
//     };

//     const handleBlur = () => {
//       setShowAIIcon(false);
//     };

//     document.addEventListener("focusin", handleFocus);
//     document.addEventListener("focusout", handleBlur);

//     return () => {
//       document.removeEventListener("focusin", handleFocus);
//       document.removeEventListener("focusout", handleBlur);
//     };
//   }, []);

//   return showAIIcon ? <AIIcon position={iconPosition} /> : null;
// };

// export default ContentScript;




// import cssText from "data-text:~style.css"
// import type { PlasmoCSConfig, PlasmoGetOverlayAnchor } from "plasmo"
// import { useState } from "react"
// import { MdOutlineModeEdit } from "react-icons/md"

// import Modal from "./features/modal"

// export const config: PlasmoCSConfig = {
//   matches: ["https://*.linkedin.com/*"]
// }
// export const getStyle = () => {
//   const style = document.createElement("style")
//   style.textContent = cssText
//   return style
// }

// export const getOverlayAnchor: PlasmoGetOverlayAnchor = async () =>
//   document.querySelector(".msg-form__contenteditable")

// export const getShadowHostId = () => "plasmo-inline-example-unique-id"

// const PlasmoOverlay = () => {
//   const [isFocused, setIsFocused] = useState(false)
//   const [isOpen, setIsOpen] = useState(false)

//   const textarea = document.querySelector(
//     ".msg-form__contenteditable"
//   ) as HTMLTextAreaElement

//   // Event listener to detect when textarea gains focus
//   textarea.addEventListener("focus", () => {
//     setIsFocused(true)
//   })

//   return isFocused ? (
//     <div className="absolute top-[7rem] left-[38rem] bg-white rounded-full p-2 cursor-pointer">
//       <MdOutlineModeEdit
//         onClick={() => setIsOpen(true)}
//         className="text-xl text-blue-600 shadow-sm"
//       />
//       <Modal isOpen={isOpen} setIsOpen={setIsOpen} />
//     </div>
//   ) : null
// }

// export default PlasmoOverlay



import cssText from "data-text:~style.css"
import type { PlasmoCSConfig, PlasmoGetOverlayAnchor } from "plasmo"
import { useState } from "react"
import { MdOutlineModeEdit } from "react-icons/md"

import Modal from "./features/modal"

export const config: PlasmoCSConfig = {
  matches: ["https://*.linkedin.com/*"]
}
export const getStyle = () => {
  const style = document.createElement("style")
  style.textContent = cssText
  return style
}

export const getOverlayAnchor: PlasmoGetOverlayAnchor = async () =>
  document.querySelector(".msg-form__contenteditable")

export const getShadowHostId = () => "plasmo-inline-example-unique-id"

const PlasmoOverlay = () => {
  const [isFocused, setIsFocused] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const textarea = document.querySelector(
    ".msg-form__contenteditable"
  ) as HTMLTextAreaElement

  // Event listener to detect when textarea gains focus
  textarea.addEventListener("focus", () => {
    setIsFocused(true)
  })

  return isFocused ? (
    <div className="absolute top-[7rem] left-[38rem] bg-white rounded-full p-2 cursor-pointer">
      <MdOutlineModeEdit
        onClick={() => setIsOpen(true)}
        className="text-xl text-blue-600 shadow-sm"
      />
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  ) : null
}

export default PlasmoOverlay