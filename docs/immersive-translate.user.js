// ==UserScript==
// @name         Immersive Translate
// @description  Web bilingual translation, completely free to use, supports Deepl/Google/Bing/Tencent/Youdao, etc. it also works on iOS Safari.
// @version      0.1.0
// @namespace    https://immersive-translate.owenyoung.com/
// @author       Owen Young
// @homepageURL    https://immersive-translate.owenyoung.com/
// @supportURL    https://github.com/immersive-translate/next-immersive-translate/
// @match      *://*/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=userscript.net
// @downloadURL https://immersive-translate.owenyoung.com/immersive-translate.user.js
// @updateURL https://immersive-translate.owenyoung.com/immersive-translate.user.js
// @inject-into    content
// @license     AGPL-3.0-or-later 
// @grant       GM.getValue
// @grant       GM.setValue
// @grant       GM.xmlHttpRequest
// @grant       GM.registerMenuCommand
// @grant       GM_getValue
// @grant       GM_setValue
// @grant       GM_listValues
// @grant       GM_deleteValue
// @grant       GM.listValues
// @grant       GM.deleteValue
// @grant       GM_xmlhttpRequest
// @grant       GM_registerMenuCommand
// @connect    translate.googleapis.com
// @connect    transmart.qq.com
// @connect    tmt.tencentcloudapi.com
// @connect    www2.deepl.com
// @connect    immersive-translate.owenyoung.com
// @connect    bing.com
// @connect    www.bing.com
// @connect    open.volcengineapi.com
// @connect    fanyi.baidu.com
// @connect    api.fanyi.baidu.com
// @connect    api.interpreter.caiyunai.com
// @connect    api-free.deepl.com
// @connect    api.deepl.com
// @connect    api.openl.club
// @connect    openapi.youdao.com
// @connect    translate.volcengine.com
// @noframes
// @run-at       document-end
// @name:zh-TW     沉浸式翻譯
// @description:zh-TW     沉浸式網頁雙語翻譯擴展，完全免費使用，支持 Deepl/Google/騰訊/火山翻譯等多個翻譯服務，支持 Firefox/Chrome/油猴腳本，亦可在 iOS Safari 上使用。
// @name:zh-CN     沉浸式翻译
// @description:zh-CN     沉浸式网页双语翻译扩展，完全免费使用，支持 Deepl/Google/腾讯/火山翻译等多个翻译服务，支持 Firefox/Chrome/油猴脚本，亦可在 iOS Safari 上使用。
// ==/UserScript==
(()=>{var D4=Object.defineProperty;var C4=(u,e)=>{for(var t in e)D4(u,t,{get:e[t],enumerable:!0})};var h={BUILD_TIME:"2023-01-16T20:33:55.339Z",VERSION:"0.1.0",PROD:"1",IMMERSIVE_TRANSLATE_INJECTED_CSS:`.immersive-translate-target-translation-pre-whitespace {
  white-space: pre-wrap !important;
}

.immersive-translate-pdf-target-container {
  position: absolute;
  background-color: #fff;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    sans-serif;
  top: 0;
  width: 600px;
  height: 100%;
  z-index: 2;
  line-height: 1.3;
  font-size: 16px;
}
.immersive-translate-pdf-target-container
  span.immersive-translate-target-wrapper {
  color: rgb(0, 0, 0);
  white-space: normal;
  position: absolute;
}

.immersive-translate-pdf-target-container
  span.immersive-translate-target-wrapper
  span {
  color: inherit;
  white-space: inherit;
  position: unset;
}

.immersive-translate-target-translation-block-wrapper {
  margin: 8px 0 !important;
  display: block;
}

.immersive-translate-target-translation-inline-wrapper {
}
.immersive-translate-target-translation-theme-underline-inner {
  border-bottom: 1px solid #72ece9 !important;
}

.immersive-translate-target-translation-block-wrapper-theme-dashedBorder {
  border: 1px dashed rgb(148 163 184) !important;
  padding: 6px;
  margin-top: 2px;
  display: block;
}

.immersive-translate-target-translation-inline-wrapper-theme-dashedBorder {
  border: 1px dashed rgb(148 163 184) !important;
  padding: 2px;
}

.immersive-translate-target-translation-theme-thinDashed-inner {
  border-bottom: 1px dashed #ff374f !important;
}

.immersive-translate-target-translation-theme-dotted-inner {
  background-repeat: repeat-x;
  background-image: linear-gradient(
    to right,
    currentColor 10%,
    rgba(255, 255, 255, 0) 0%
  );
  background-position: bottom;
  background-size: 5px 1px;
  background-repeat: repeat-x;
  padding-bottom: 3px;
}

.immersive-translate-target-translation-theme-dashed-inner {
  background-repeat: repeat-x !important;
  background: linear-gradient(
      to right,
      #59c1bd 0%,
      #59c1bd 50%,
      transparent 50%,
      transparent 100%
    )
    repeat-x left bottom;
  background-size: 8px 2px;
  padding-bottom: 2px;
}
.immersive-translate-target-translation-theme-highlight-inner {
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='480' height='42' preserveAspectRatio='none' viewBox='0 0 480 42'%3E%3Cpath fill='%23FFE200' fill-opacity='.75' d='m.7884025 41.3449275c15.8171024-1.6206809 71.8777185-.9529412 87.8950374-1.5331327 16.0173191-.5801915 83.3901661-.745318 100.1082431-.667414 16.718076.0779039 83.089842-.0805484 99.607702.4720956s171.593663-4.1777204 188.411848-.5026041c3.203464.64141 4.604979-37.03709852 1.301407-37.67784118-16.217535-3.4897587-170.292256 1.04456951-186.710008.30189599s-84.391249-.1001373-101.509758.0139905c-17.11851.1141278-84.191033.7506573-101.2094341 1.7162471-17.0184014.9655898-47.6903594-.51449033-88.09525389.58732435-.90097419.38473091-.7007577 37.29511244.20021649 37.28943844z'/%3E%3C/svg%3E")
      bottom center/97% 78% no-repeat,
    url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='479' height='47' preserveAspectRatio='none' viewBox='0 0 479 47'%3E%3Cpath fill='%23FFE200' fill-opacity='.3' d='m478.156709 8.7824162c-15.838938 1.2871448-71.877674-.56274795-87.900678-.3203145-16.023003.24243345-83.384536-1.01313476-100.097964-1.44357365-16.713429-.43043889-83.073982-1.67157136-99.579885-2.57252834-16.505903-.90095697-171.7612979-2.11020331-188.38083741-3.47061103-1.44382456 9.18867382-1.72962966 27.64863472-1.88448384 37.65056312 49.37498245 2.5658616 109.46343725.852584 186.67624025 3.6352676s84.372323 1.8796999 101.489075 2.126551 84.185321 1.0246833 101.215168.4179614 47.672574 1.5201394 88.086209 1.2703448c.906745-.365732 1.278032-37.28033554.377156-37.2936604z'/%3E%3C/svg%3E")
      top left/96% 100% no-repeat;
  box-decoration-break: clone;
  -webkit-box-decoration-break: clone;
}
.immersive-translate-target-translation-theme-weakening {
  opacity: 0.4 !important;
}
.immersive-translate-target-translation-theme-italic {
  font-style: italic !important;
}

.immersive-translate-target-translation-theme-bold {
  font-weight: bold !important;
}

.immersive-translate-target-translation-block-wrapper-theme-paper {
  margin: 8px 0;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  padding: 16px 32px;
  display: block;
}

.immersive-translate-target-translation-block-wrapper-theme-blockquote {
  border-left: 4px solid #cc3355 !important;
  padding-left: 12px !important;
  margin-top: 4px;
  margin-bottom: 4px;
  padding-top: 4px;
  padding-bottom: 4px;
  display: block;
}

.immersive-translate-target-translation-theme-mask-inner {
  filter: blur(5px) !important;
  transition: filter 0.3s ease !important;
  border-radius: 10px;
}
.immersive-translate-target-translation-theme-mask-inner:hover {
  filter: none !important;
}
.immersive-translate-text {
  font-size: 15px !important;
}

.immersive-translate-error {
  color: red;
}
.immersive-translate-clickable-button {
  align-items: normal;
  background-color: rgba(0, 0, 0, 0);
  border-color: rgb(0, 0, 238);
  border-style: none;
  box-sizing: content-box;
  color: rgb(0, 0, 238);
  cursor: pointer;
  display: inline;
  font: inherit;
  height: auto;
  padding: 0;
  perspective-origin: 0 0;
  text-align: start;
  transform-origin: 0 0;
  width: auto;
  -moz-appearance: none;
  appearance: none;
  -webkit-logical-height: 1em; /* Chrome ignores auto, so we have to use this hack to set the correct height  */
  -webkit-logical-width: auto; /* Chrome ignores auto, but here for completeness */
}

.immersive-translate-loading {
  vertical-align: middle !important;
  width: 10px !important;
  height: 10px !important;
  display: inline-block !important;
  margin: 0 4px !important;
  border: 2px rgba(0, 0, 0, 0.25) solid !important;
  border-top: 2px rgba(0, 0, 0, 1) solid !important;
  border-radius: 50% !important;
  padding: 0 !important;
  -webkit-animation: immersive-translate-loading-animation 0.6s infinite linear !important;
  animation: immersive-translate-loading-animation 0.6s infinite linear !important;
}
.immersive-translate-tooltip {
  position: relative;
  display: inline-block;
  border-bottom: 1px dashed #000; /* little indicater to indicate it's hoverable */
}
.immersive-translate-tooltip:before {
  content: attr(data-immersive-translate-tooltip-text); /* here's the magic */
  position: absolute;
  z-index: 100000000000;

  /* vertically center */
  top: 50%;
  transform: translateY(-50%);

  /* move to right */
  left: 100%;
  margin-left: 15px; /* and add a small left margin */

  /* basic styles */
  width: max-content;
  max-width: 250px;
  word-wrap: break-word;
  white-space: pre-line;
  padding: 10px;
  border-radius: 10px;
  background: #000;
  color: #fff;
  text-align: center;

  display: none; /* hide by default */
}
.immersive-translate-tooltip:hover:before {
  display: block;
}

@-webkit-keyframes immersive-translate-loading-animation {
  from {
    -webkit-transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(359deg);
  }
}
@keyframes immersive-translate-loading-animation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
}
`,IMMERSIVE_TRANSLATE_PICO_CSS:`@charset "UTF-8";
/*!
 * Pico.css v1.5.6 (https://picocss.com)
 * Copyright 2019-2022 - Licensed under MIT
 */
/**
 * Theme: default
 */
#mount {
  --font-family: system-ui, -apple-system, "Segoe UI", "Roboto", "Ubuntu",
    "Cantarell", "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Noto Color Emoji";
  --line-height: 1.5;
  --font-weight: 400;
  --font-size: 16px;
  --border-radius: 0.25rem;
  --border-width: 1px;
  --outline-width: 3px;
  --spacing: 1rem;
  --typography-spacing-vertical: 1.5rem;
  --block-spacing-vertical: calc(var(--spacing) * 2);
  --block-spacing-horizontal: var(--spacing);
  --grid-spacing-vertical: 0;
  --grid-spacing-horizontal: var(--spacing);
  --form-element-spacing-vertical: 0.75rem;
  --form-element-spacing-horizontal: 1rem;
  --nav-element-spacing-vertical: 1rem;
  --nav-element-spacing-horizontal: 0.5rem;
  --nav-link-spacing-vertical: 0.5rem;
  --nav-link-spacing-horizontal: 0.5rem;
  --form-label-font-weight: var(--font-weight);
  --transition: 0.2s ease-in-out;
  --modal-overlay-backdrop-filter: blur(0.25rem);
}
@media (min-width: 576px) {
  #mount {
    --font-size: 17px;
  }
}
@media (min-width: 768px) {
  #mount {
    --font-size: 18px;
  }
}
@media (min-width: 992px) {
  #mount {
    --font-size: 19px;
  }
}
@media (min-width: 1200px) {
  #mount {
    --font-size: 20px;
  }
}

@media (min-width: 576px) {
  #mount > header,
  #mount > main,
  #mount > footer,
  section {
    --block-spacing-vertical: calc(var(--spacing) * 2.5);
  }
}
@media (min-width: 768px) {
  #mount > header,
  #mount > main,
  #mount > footer,
  section {
    --block-spacing-vertical: calc(var(--spacing) * 3);
  }
}
@media (min-width: 992px) {
  #mount > header,
  #mount > main,
  #mount > footer,
  section {
    --block-spacing-vertical: calc(var(--spacing) * 3.5);
  }
}
@media (min-width: 1200px) {
  #mount > header,
  #mount > main,
  #mount > footer,
  section {
    --block-spacing-vertical: calc(var(--spacing) * 4);
  }
}

@media (min-width: 576px) {
  article {
    --block-spacing-horizontal: calc(var(--spacing) * 1.25);
  }
}
@media (min-width: 768px) {
  article {
    --block-spacing-horizontal: calc(var(--spacing) * 1.5);
  }
}
@media (min-width: 992px) {
  article {
    --block-spacing-horizontal: calc(var(--spacing) * 1.75);
  }
}
@media (min-width: 1200px) {
  article {
    --block-spacing-horizontal: calc(var(--spacing) * 2);
  }
}

dialog > article {
  --block-spacing-vertical: calc(var(--spacing) * 2);
  --block-spacing-horizontal: var(--spacing);
}
@media (min-width: 576px) {
  dialog > article {
    --block-spacing-vertical: calc(var(--spacing) * 2.5);
    --block-spacing-horizontal: calc(var(--spacing) * 1.25);
  }
}
@media (min-width: 768px) {
  dialog > article {
    --block-spacing-vertical: calc(var(--spacing) * 3);
    --block-spacing-horizontal: calc(var(--spacing) * 1.5);
  }
}

a {
  --text-decoration: none;
}
a.secondary,
a.contrast {
  --text-decoration: underline;
}

small {
  --font-size: 0.875em;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  --font-weight: 700;
}

h1 {
  --font-size: 2rem;
  --typography-spacing-vertical: 3rem;
}

h2 {
  --font-size: 1.75rem;
  --typography-spacing-vertical: 2.625rem;
}

h3 {
  --font-size: 1.5rem;
  --typography-spacing-vertical: 2.25rem;
}

h4 {
  --font-size: 1.25rem;
  --typography-spacing-vertical: 1.874rem;
}

h5 {
  --font-size: 1.125rem;
  --typography-spacing-vertical: 1.6875rem;
}

[type="checkbox"],
[type="radio"] {
  --border-width: 2px;
}

[type="checkbox"][role="switch"] {
  --border-width: 3px;
}

thead th,
thead td,
tfoot th,
tfoot td {
  --border-width: 3px;
}

:not(thead, tfoot) > * > td {
  --font-size: 0.875em;
}

pre,
code,
kbd,
samp {
  --font-family: "Menlo", "Consolas", "Roboto Mono", "Ubuntu Monospace",
    "Noto Mono", "Oxygen Mono", "Liberation Mono", monospace,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
}

kbd {
  --font-weight: bolder;
}

[data-theme="light"],
#mount:not([data-theme="dark"]) {
  --background-color: #fff;
  --color: hsl(205deg, 20%, 32%);
  --h1-color: hsl(205deg, 30%, 15%);
  --h2-color: #24333e;
  --h3-color: hsl(205deg, 25%, 23%);
  --h4-color: #374956;
  --h5-color: hsl(205deg, 20%, 32%);
  --h6-color: #4d606d;
  --muted-color: hsl(205deg, 10%, 50%);
  --muted-border-color: hsl(205deg, 20%, 94%);
  --primary: hsl(195deg, 85%, 41%);
  --primary-hover: hsl(195deg, 90%, 32%);
  --primary-focus: rgba(16, 149, 193, 0.125);
  --primary-inverse: #fff;
  --secondary: hsl(205deg, 15%, 41%);
  --secondary-hover: hsl(205deg, 20%, 32%);
  --secondary-focus: rgba(89, 107, 120, 0.125);
  --secondary-inverse: #fff;
  --contrast: hsl(205deg, 30%, 15%);
  --contrast-hover: #000;
  --contrast-focus: rgba(89, 107, 120, 0.125);
  --contrast-inverse: #fff;
  --mark-background-color: #fff2ca;
  --mark-color: #543a26;
  --ins-color: #388e3c;
  --del-color: #c62828;
  --blockquote-border-color: var(--muted-border-color);
  --blockquote-footer-color: var(--muted-color);
  --button-box-shadow: 0 0 0 rgba(0, 0, 0, 0);
  --button-hover-box-shadow: 0 0 0 rgba(0, 0, 0, 0);
  --form-element-background-color: transparent;
  --form-element-border-color: hsl(205deg, 14%, 68%);
  --form-element-color: var(--color);
  --form-element-placeholder-color: var(--muted-color);
  --form-element-active-background-color: transparent;
  --form-element-active-border-color: var(--primary);
  --form-element-focus-color: var(--primary-focus);
  --form-element-disabled-background-color: hsl(205deg, 18%, 86%);
  --form-element-disabled-border-color: hsl(205deg, 14%, 68%);
  --form-element-disabled-opacity: 0.5;
  --form-element-invalid-border-color: #c62828;
  --form-element-invalid-active-border-color: #d32f2f;
  --form-element-invalid-focus-color: rgba(211, 47, 47, 0.125);
  --form-element-valid-border-color: #388e3c;
  --form-element-valid-active-border-color: #43a047;
  --form-element-valid-focus-color: rgba(67, 160, 71, 0.125);
  --switch-background-color: hsl(205deg, 16%, 77%);
  --switch-color: var(--primary-inverse);
  --switch-checked-background-color: var(--primary);
  --range-border-color: hsl(205deg, 18%, 86%);
  --range-active-border-color: hsl(205deg, 16%, 77%);
  --range-thumb-border-color: var(--background-color);
  --range-thumb-color: var(--secondary);
  --range-thumb-hover-color: var(--secondary-hover);
  --range-thumb-active-color: var(--primary);
  --table-border-color: var(--muted-border-color);
  --table-row-stripped-background-color: #f6f8f9;
  --code-background-color: hsl(205deg, 20%, 94%);
  --code-color: var(--muted-color);
  --code-kbd-background-color: var(--contrast);
  --code-kbd-color: var(--contrast-inverse);
  --code-tag-color: hsl(330deg, 40%, 50%);
  --code-property-color: hsl(185deg, 40%, 40%);
  --code-value-color: hsl(40deg, 20%, 50%);
  --code-comment-color: hsl(205deg, 14%, 68%);
  --accordion-border-color: var(--muted-border-color);
  --accordion-close-summary-color: var(--color);
  --accordion-open-summary-color: var(--muted-color);
  --card-background-color: var(--background-color);
  --card-border-color: var(--muted-border-color);
  --card-box-shadow: 0.0145rem 0.029rem 0.174rem rgba(27, 40, 50, 0.01698),
    0.0335rem 0.067rem 0.402rem rgba(27, 40, 50, 0.024),
    0.0625rem 0.125rem 0.75rem rgba(27, 40, 50, 0.03),
    0.1125rem 0.225rem 1.35rem rgba(27, 40, 50, 0.036),
    0.2085rem 0.417rem 2.502rem rgba(27, 40, 50, 0.04302),
    0.5rem 1rem 6rem rgba(27, 40, 50, 0.06),
    0 0 0 0.0625rem rgba(27, 40, 50, 0.015);
  --card-sectionning-background-color: #fbfbfc;
  --dropdown-background-color: #fbfbfc;
  --dropdown-border-color: #e1e6eb;
  --dropdown-box-shadow: var(--card-box-shadow);
  --dropdown-color: var(--color);
  --dropdown-hover-background-color: hsl(205deg, 20%, 94%);
  --modal-overlay-background-color: rgba(213, 220, 226, 0.7);
  --progress-background-color: hsl(205deg, 18%, 86%);
  --progress-color: var(--primary);
  --loading-spinner-opacity: 0.5;
  --tooltip-background-color: var(--contrast);
  --tooltip-color: var(--contrast-inverse);
  --icon-checkbox: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(255, 255, 255)' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='20 6 9 17 4 12'%3E%3C/polyline%3E%3C/svg%3E");
  --icon-chevron: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(65, 84, 98)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
  --icon-chevron-button: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(255, 255, 255)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
  --icon-chevron-button-inverse: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(255, 255, 255)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
  --icon-close: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(115, 130, 140)' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'%3E%3Cline x1='18' y1='6' x2='6' y2='18'%3E%3C/line%3E%3Cline x1='6' y1='6' x2='18' y2='18'%3E%3C/line%3E%3C/svg%3E");
  --icon-date: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(65, 84, 98)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect x='3' y='4' width='18' height='18' rx='2' ry='2'%3E%3C/rect%3E%3Cline x1='16' y1='2' x2='16' y2='6'%3E%3C/line%3E%3Cline x1='8' y1='2' x2='8' y2='6'%3E%3C/line%3E%3Cline x1='3' y1='10' x2='21' y2='10'%3E%3C/line%3E%3C/svg%3E");
  --icon-invalid: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(198, 40, 40)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'%3E%3C/circle%3E%3Cline x1='12' y1='8' x2='12' y2='12'%3E%3C/line%3E%3Cline x1='12' y1='16' x2='12.01' y2='16'%3E%3C/line%3E%3C/svg%3E");
  --icon-minus: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(255, 255, 255)' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'%3E%3Cline x1='5' y1='12' x2='19' y2='12'%3E%3C/line%3E%3C/svg%3E");
  --icon-search: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(65, 84, 98)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='11' cy='11' r='8'%3E%3C/circle%3E%3Cline x1='21' y1='21' x2='16.65' y2='16.65'%3E%3C/line%3E%3C/svg%3E");
  --icon-time: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(65, 84, 98)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'%3E%3C/circle%3E%3Cpolyline points='12 6 12 12 16 14'%3E%3C/polyline%3E%3C/svg%3E");
  --icon-valid: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(56, 142, 60)' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='20 6 9 17 4 12'%3E%3C/polyline%3E%3C/svg%3E");
  color-scheme: light;
}

@media only screen and (prefers-color-scheme: dark) {
  #mount:not([data-theme="light"]) {
    --background-color: #11191f;
    --color: hsl(205deg, 16%, 77%);
    --h1-color: hsl(205deg, 20%, 94%);
    --h2-color: #e1e6eb;
    --h3-color: hsl(205deg, 18%, 86%);
    --h4-color: #c8d1d8;
    --h5-color: hsl(205deg, 16%, 77%);
    --h6-color: #afbbc4;
    --muted-color: hsl(205deg, 10%, 50%);
    --muted-border-color: #1f2d38;
    --primary: hsl(195deg, 85%, 41%);
    --primary-hover: hsl(195deg, 80%, 50%);
    --primary-focus: rgba(16, 149, 193, 0.25);
    --primary-inverse: #fff;
    --secondary: hsl(205deg, 15%, 41%);
    --secondary-hover: hsl(205deg, 10%, 50%);
    --secondary-focus: rgba(115, 130, 140, 0.25);
    --secondary-inverse: #fff;
    --contrast: hsl(205deg, 20%, 94%);
    --contrast-hover: #fff;
    --contrast-focus: rgba(115, 130, 140, 0.25);
    --contrast-inverse: #000;
    --mark-background-color: #d1c284;
    --mark-color: #11191f;
    --ins-color: #388e3c;
    --del-color: #c62828;
    --blockquote-border-color: var(--muted-border-color);
    --blockquote-footer-color: var(--muted-color);
    --button-box-shadow: 0 0 0 rgba(0, 0, 0, 0);
    --button-hover-box-shadow: 0 0 0 rgba(0, 0, 0, 0);
    --form-element-background-color: #11191f;
    --form-element-border-color: #374956;
    --form-element-color: var(--color);
    --form-element-placeholder-color: var(--muted-color);
    --form-element-active-background-color: var(
      --form-element-background-color
    );
    --form-element-active-border-color: var(--primary);
    --form-element-focus-color: var(--primary-focus);
    --form-element-disabled-background-color: hsl(205deg, 25%, 23%);
    --form-element-disabled-border-color: hsl(205deg, 20%, 32%);
    --form-element-disabled-opacity: 0.5;
    --form-element-invalid-border-color: #b71c1c;
    --form-element-invalid-active-border-color: #c62828;
    --form-element-invalid-focus-color: rgba(198, 40, 40, 0.25);
    --form-element-valid-border-color: #2e7d32;
    --form-element-valid-active-border-color: #388e3c;
    --form-element-valid-focus-color: rgba(56, 142, 60, 0.25);
    --switch-background-color: #374956;
    --switch-color: var(--primary-inverse);
    --switch-checked-background-color: var(--primary);
    --range-border-color: #24333e;
    --range-active-border-color: hsl(205deg, 25%, 23%);
    --range-thumb-border-color: var(--background-color);
    --range-thumb-color: var(--secondary);
    --range-thumb-hover-color: var(--secondary-hover);
    --range-thumb-active-color: var(--primary);
    --table-border-color: var(--muted-border-color);
    --table-row-stripped-background-color: rgba(115, 130, 140, 0.05);
    --code-background-color: #18232c;
    --code-color: var(--muted-color);
    --code-kbd-background-color: var(--contrast);
    --code-kbd-color: var(--contrast-inverse);
    --code-tag-color: hsl(330deg, 30%, 50%);
    --code-property-color: hsl(185deg, 30%, 50%);
    --code-value-color: hsl(40deg, 10%, 50%);
    --code-comment-color: #4d606d;
    --accordion-border-color: var(--muted-border-color);
    --accordion-active-summary-color: var(--primary);
    --accordion-close-summary-color: var(--color);
    --accordion-open-summary-color: var(--muted-color);
    --card-background-color: #141e26;
    --card-border-color: var(--card-background-color);
    --card-box-shadow: 0.0145rem 0.029rem 0.174rem rgba(0, 0, 0, 0.01698),
      0.0335rem 0.067rem 0.402rem rgba(0, 0, 0, 0.024),
      0.0625rem 0.125rem 0.75rem rgba(0, 0, 0, 0.03),
      0.1125rem 0.225rem 1.35rem rgba(0, 0, 0, 0.036),
      0.2085rem 0.417rem 2.502rem rgba(0, 0, 0, 0.04302),
      0.5rem 1rem 6rem rgba(0, 0, 0, 0.06), 0 0 0 0.0625rem rgba(0, 0, 0, 0.015);
    --card-sectionning-background-color: #18232c;
    --dropdown-background-color: hsl(205deg, 30%, 15%);
    --dropdown-border-color: #24333e;
    --dropdown-box-shadow: var(--card-box-shadow);
    --dropdown-color: var(--color);
    --dropdown-hover-background-color: rgba(36, 51, 62, 0.75);
    --modal-overlay-background-color: rgba(36, 51, 62, 0.8);
    --progress-background-color: #24333e;
    --progress-color: var(--primary);
    --loading-spinner-opacity: 0.5;
    --tooltip-background-color: var(--contrast);
    --tooltip-color: var(--contrast-inverse);
    --icon-checkbox: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(255, 255, 255)' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='20 6 9 17 4 12'%3E%3C/polyline%3E%3C/svg%3E");
    --icon-chevron: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(162, 175, 185)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
    --icon-chevron-button: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(255, 255, 255)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
    --icon-chevron-button-inverse: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(0, 0, 0)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
    --icon-close: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(115, 130, 140)' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'%3E%3Cline x1='18' y1='6' x2='6' y2='18'%3E%3C/line%3E%3Cline x1='6' y1='6' x2='18' y2='18'%3E%3C/line%3E%3C/svg%3E");
    --icon-date: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(162, 175, 185)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect x='3' y='4' width='18' height='18' rx='2' ry='2'%3E%3C/rect%3E%3Cline x1='16' y1='2' x2='16' y2='6'%3E%3C/line%3E%3Cline x1='8' y1='2' x2='8' y2='6'%3E%3C/line%3E%3Cline x1='3' y1='10' x2='21' y2='10'%3E%3C/line%3E%3C/svg%3E");
    --icon-invalid: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(183, 28, 28)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'%3E%3C/circle%3E%3Cline x1='12' y1='8' x2='12' y2='12'%3E%3C/line%3E%3Cline x1='12' y1='16' x2='12.01' y2='16'%3E%3C/line%3E%3C/svg%3E");
    --icon-minus: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(255, 255, 255)' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'%3E%3Cline x1='5' y1='12' x2='19' y2='12'%3E%3C/line%3E%3C/svg%3E");
    --icon-search: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(162, 175, 185)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='11' cy='11' r='8'%3E%3C/circle%3E%3Cline x1='21' y1='21' x2='16.65' y2='16.65'%3E%3C/line%3E%3C/svg%3E");
    --icon-time: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(162, 175, 185)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'%3E%3C/circle%3E%3Cpolyline points='12 6 12 12 16 14'%3E%3C/polyline%3E%3C/svg%3E");
    --icon-valid: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(46, 125, 50)' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='20 6 9 17 4 12'%3E%3C/polyline%3E%3C/svg%3E");
    color-scheme: dark;
  }
}
[data-theme="dark"] {
  --background-color: #11191f;
  --color: hsl(205deg, 16%, 77%);
  --h1-color: hsl(205deg, 20%, 94%);
  --h2-color: #e1e6eb;
  --h3-color: hsl(205deg, 18%, 86%);
  --h4-color: #c8d1d8;
  --h5-color: hsl(205deg, 16%, 77%);
  --h6-color: #afbbc4;
  --muted-color: hsl(205deg, 10%, 50%);
  --muted-border-color: #1f2d38;
  --primary: hsl(195deg, 85%, 41%);
  --primary-hover: hsl(195deg, 80%, 50%);
  --primary-focus: rgba(16, 149, 193, 0.25);
  --primary-inverse: #fff;
  --secondary: hsl(205deg, 15%, 41%);
  --secondary-hover: hsl(205deg, 10%, 50%);
  --secondary-focus: rgba(115, 130, 140, 0.25);
  --secondary-inverse: #fff;
  --contrast: hsl(205deg, 20%, 94%);
  --contrast-hover: #fff;
  --contrast-focus: rgba(115, 130, 140, 0.25);
  --contrast-inverse: #000;
  --mark-background-color: #d1c284;
  --mark-color: #11191f;
  --ins-color: #388e3c;
  --del-color: #c62828;
  --blockquote-border-color: var(--muted-border-color);
  --blockquote-footer-color: var(--muted-color);
  --button-box-shadow: 0 0 0 rgba(0, 0, 0, 0);
  --button-hover-box-shadow: 0 0 0 rgba(0, 0, 0, 0);
  --form-element-background-color: #11191f;
  --form-element-border-color: #374956;
  --form-element-color: var(--color);
  --form-element-placeholder-color: var(--muted-color);
  --form-element-active-background-color: var(--form-element-background-color);
  --form-element-active-border-color: var(--primary);
  --form-element-focus-color: var(--primary-focus);
  --form-element-disabled-background-color: hsl(205deg, 25%, 23%);
  --form-element-disabled-border-color: hsl(205deg, 20%, 32%);
  --form-element-disabled-opacity: 0.5;
  --form-element-invalid-border-color: #b71c1c;
  --form-element-invalid-active-border-color: #c62828;
  --form-element-invalid-focus-color: rgba(198, 40, 40, 0.25);
  --form-element-valid-border-color: #2e7d32;
  --form-element-valid-active-border-color: #388e3c;
  --form-element-valid-focus-color: rgba(56, 142, 60, 0.25);
  --switch-background-color: #374956;
  --switch-color: var(--primary-inverse);
  --switch-checked-background-color: var(--primary);
  --range-border-color: #24333e;
  --range-active-border-color: hsl(205deg, 25%, 23%);
  --range-thumb-border-color: var(--background-color);
  --range-thumb-color: var(--secondary);
  --range-thumb-hover-color: var(--secondary-hover);
  --range-thumb-active-color: var(--primary);
  --table-border-color: var(--muted-border-color);
  --table-row-stripped-background-color: rgba(115, 130, 140, 0.05);
  --code-background-color: #18232c;
  --code-color: var(--muted-color);
  --code-kbd-background-color: var(--contrast);
  --code-kbd-color: var(--contrast-inverse);
  --code-tag-color: hsl(330deg, 30%, 50%);
  --code-property-color: hsl(185deg, 30%, 50%);
  --code-value-color: hsl(40deg, 10%, 50%);
  --code-comment-color: #4d606d;
  --accordion-border-color: var(--muted-border-color);
  --accordion-active-summary-color: var(--primary);
  --accordion-close-summary-color: var(--color);
  --accordion-open-summary-color: var(--muted-color);
  --card-background-color: #141e26;
  --card-border-color: var(--card-background-color);
  --card-box-shadow: 0.0145rem 0.029rem 0.174rem rgba(0, 0, 0, 0.01698),
    0.0335rem 0.067rem 0.402rem rgba(0, 0, 0, 0.024),
    0.0625rem 0.125rem 0.75rem rgba(0, 0, 0, 0.03),
    0.1125rem 0.225rem 1.35rem rgba(0, 0, 0, 0.036),
    0.2085rem 0.417rem 2.502rem rgba(0, 0, 0, 0.04302),
    0.5rem 1rem 6rem rgba(0, 0, 0, 0.06), 0 0 0 0.0625rem rgba(0, 0, 0, 0.015);
  --card-sectionning-background-color: #18232c;
  --dropdown-background-color: hsl(205deg, 30%, 15%);
  --dropdown-border-color: #24333e;
  --dropdown-box-shadow: var(--card-box-shadow);
  --dropdown-color: var(--color);
  --dropdown-hover-background-color: rgba(36, 51, 62, 0.75);
  --modal-overlay-background-color: rgba(36, 51, 62, 0.8);
  --progress-background-color: #24333e;
  --progress-color: var(--primary);
  --loading-spinner-opacity: 0.5;
  --tooltip-background-color: var(--contrast);
  --tooltip-color: var(--contrast-inverse);
  --icon-checkbox: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(255, 255, 255)' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='20 6 9 17 4 12'%3E%3C/polyline%3E%3C/svg%3E");
  --icon-chevron: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(162, 175, 185)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
  --icon-chevron-button: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(255, 255, 255)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
  --icon-chevron-button-inverse: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(0, 0, 0)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
  --icon-close: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(115, 130, 140)' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'%3E%3Cline x1='18' y1='6' x2='6' y2='18'%3E%3C/line%3E%3Cline x1='6' y1='6' x2='18' y2='18'%3E%3C/line%3E%3C/svg%3E");
  --icon-date: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(162, 175, 185)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect x='3' y='4' width='18' height='18' rx='2' ry='2'%3E%3C/rect%3E%3Cline x1='16' y1='2' x2='16' y2='6'%3E%3C/line%3E%3Cline x1='8' y1='2' x2='8' y2='6'%3E%3C/line%3E%3Cline x1='3' y1='10' x2='21' y2='10'%3E%3C/line%3E%3C/svg%3E");
  --icon-invalid: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(183, 28, 28)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'%3E%3C/circle%3E%3Cline x1='12' y1='8' x2='12' y2='12'%3E%3C/line%3E%3Cline x1='12' y1='16' x2='12.01' y2='16'%3E%3C/line%3E%3C/svg%3E");
  --icon-minus: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(255, 255, 255)' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'%3E%3Cline x1='5' y1='12' x2='19' y2='12'%3E%3C/line%3E%3C/svg%3E");
  --icon-search: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(162, 175, 185)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='11' cy='11' r='8'%3E%3C/circle%3E%3Cline x1='21' y1='21' x2='16.65' y2='16.65'%3E%3C/line%3E%3C/svg%3E");
  --icon-time: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(162, 175, 185)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'%3E%3C/circle%3E%3Cpolyline points='12 6 12 12 16 14'%3E%3C/polyline%3E%3C/svg%3E");
  --icon-valid: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(46, 125, 50)' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='20 6 9 17 4 12'%3E%3C/polyline%3E%3C/svg%3E");
  color-scheme: dark;
}

progress,
[type="checkbox"],
[type="radio"],
[type="range"] {
  accent-color: var(--primary);
}

/**
 * Document
 * Content-box & Responsive typography
 */
*,
*::before,
*::after {
  box-sizing: border-box;
  background-repeat: no-repeat;
}

::before,
::after {
  text-decoration: inherit;
  vertical-align: inherit;
}

:where(#mount) {
  -webkit-tap-highlight-color: transparent;
  -webkit-text-size-adjust: 100%;
  -moz-text-size-adjust: 100%;
  text-size-adjust: 100%;
  background-color: var(--background-color);
  color: var(--color);
  font-weight: var(--font-weight);
  font-size: var(--font-size);
  line-height: var(--line-height);
  font-family: var(--font-family);
  text-rendering: optimizeLegibility;
  overflow-wrap: break-word;
  cursor: default;
  -moz-tab-size: 4;
  -o-tab-size: 4;
  tab-size: 4;
}

/**
 * Sectioning
 * Container and responsive spacings for header, main, footer
 */
main {
  display: block;
}

#mount {
  width: 100%;
  margin: 0;
}
#mount > header,
#mount > main,
#mount > footer {
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding: var(--block-spacing-vertical) var(--block-spacing-horizontal);
}
@media (min-width: 576px) {
  #mount > header,
  #mount > main,
  #mount > footer {
    max-width: 510px;
    padding-right: 0;
    padding-left: 0;
  }
}
@media (min-width: 768px) {
  #mount > header,
  #mount > main,
  #mount > footer {
    max-width: 700px;
  }
}
@media (min-width: 992px) {
  #mount > header,
  #mount > main,
  #mount > footer {
    max-width: 920px;
  }
}
@media (min-width: 1200px) {
  #mount > header,
  #mount > main,
  #mount > footer {
    max-width: 1130px;
  }
}

/**
* Container
*/
.container,
.container-fluid {
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding-right: var(--spacing);
  padding-left: var(--spacing);
}

@media (min-width: 576px) {
  .container {
    max-width: 510px;
    padding-right: 0;
    padding-left: 0;
  }
}
@media (min-width: 768px) {
  .container {
    max-width: 700px;
  }
}
@media (min-width: 992px) {
  .container {
    max-width: 920px;
  }
}
@media (min-width: 1200px) {
  .container {
    max-width: 1130px;
  }
}

/**
 * Section
 * Responsive spacings for section
 */
section {
  margin-bottom: var(--block-spacing-vertical);
}

/**
* Grid
* Minimal grid system with auto-layout columns
*/
.grid {
  grid-column-gap: var(--grid-spacing-horizontal);
  grid-row-gap: var(--grid-spacing-vertical);
  display: grid;
  grid-template-columns: 1fr;
  margin: 0;
}
@media (min-width: 992px) {
  .grid {
    grid-template-columns: repeat(auto-fit, minmax(0%, 1fr));
  }
}
.grid > * {
  min-width: 0;
}

/**
 * Horizontal scroller (<figure>)
 */
figure {
  display: block;
  margin: 0;
  padding: 0;
  overflow-x: auto;
}
figure figcaption {
  padding: calc(var(--spacing) * 0.5) 0;
  color: var(--muted-color);
}

/**
 * Typography
 */
b,
strong {
  font-weight: bolder;
}

sub,
sup {
  position: relative;
  font-size: 0.75em;
  line-height: 0;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

address,
blockquote,
dl,
figure,
form,
ol,
p,
pre,
table,
ul {
  margin-top: 0;
  margin-bottom: var(--typography-spacing-vertical);
  color: var(--color);
  font-style: normal;
  font-weight: var(--font-weight);
  font-size: var(--font-size);
}

a,
[role="link"] {
  --color: var(--primary);
  --background-color: transparent;
  outline: none;
  background-color: var(--background-color);
  color: var(--color);
  -webkit-text-decoration: var(--text-decoration);
  text-decoration: var(--text-decoration);
  transition: background-color var(--transition), color var(--transition),
    box-shadow var(--transition), -webkit-text-decoration var(--transition);
  transition: background-color var(--transition), color var(--transition),
    text-decoration var(--transition), box-shadow var(--transition);
  transition: background-color var(--transition), color var(--transition),
    text-decoration var(--transition), box-shadow var(--transition),
    -webkit-text-decoration var(--transition);
}
a:is([aria-current], :hover, :active, :focus),
[role="link"]:is([aria-current], :hover, :active, :focus) {
  --color: var(--primary-hover);
  --text-decoration: underline;
}
a:focus,
[role="link"]:focus {
  --background-color: var(--primary-focus);
}
a.secondary,
[role="link"].secondary {
  --color: var(--secondary);
}
a.secondary:is([aria-current], :hover, :active, :focus),
[role="link"].secondary:is([aria-current], :hover, :active, :focus) {
  --color: var(--secondary-hover);
}
a.secondary:focus,
[role="link"].secondary:focus {
  --background-color: var(--secondary-focus);
}
a.contrast,
[role="link"].contrast {
  --color: var(--contrast);
}
a.contrast:is([aria-current], :hover, :active, :focus),
[role="link"].contrast:is([aria-current], :hover, :active, :focus) {
  --color: var(--contrast-hover);
}
a.contrast:focus,
[role="link"].contrast:focus {
  --background-color: var(--contrast-focus);
}

h1,
h2,
h3,
h4,
h5,
h6 {
  margin-top: 0;
  margin-bottom: var(--typography-spacing-vertical);
  color: var(--color);
  font-weight: var(--font-weight);
  font-size: var(--font-size);
  font-family: var(--font-family);
}

h1 {
  --color: var(--h1-color);
}

h2 {
  --color: var(--h2-color);
}

h3 {
  --color: var(--h3-color);
}

h4 {
  --color: var(--h4-color);
}

h5 {
  --color: var(--h5-color);
}

h6 {
  --color: var(--h6-color);
}

:where(address, blockquote, dl, figure, form, ol, p, pre, table, ul)
  ~ :is(h1, h2, h3, h4, h5, h6) {
  margin-top: var(--typography-spacing-vertical);
}

hgroup,
.headings {
  margin-bottom: var(--typography-spacing-vertical);
}
hgroup > *,
.headings > * {
  margin-bottom: 0;
}
hgroup > *:last-child,
.headings > *:last-child {
  --color: var(--muted-color);
  --font-weight: unset;
  font-size: 1rem;
  font-family: unset;
}

p {
  margin-bottom: var(--typography-spacing-vertical);
}

small {
  font-size: var(--font-size);
}

:where(dl, ol, ul) {
  padding-right: 0;
  padding-left: var(--spacing);
  -webkit-padding-start: var(--spacing);
  padding-inline-start: var(--spacing);
  -webkit-padding-end: 0;
  padding-inline-end: 0;
}
:where(dl, ol, ul) li {
  margin-bottom: calc(var(--typography-spacing-vertical) * 0.25);
}

:where(dl, ol, ul) :is(dl, ol, ul) {
  margin: 0;
  margin-top: calc(var(--typography-spacing-vertical) * 0.25);
}

ul li {
  list-style: square;
}

mark {
  padding: 0.125rem 0.25rem;
  background-color: var(--mark-background-color);
  color: var(--mark-color);
  vertical-align: baseline;
}

blockquote {
  display: block;
  margin: var(--typography-spacing-vertical) 0;
  padding: var(--spacing);
  border-right: none;
  border-left: 0.25rem solid var(--blockquote-border-color);
  -webkit-border-start: 0.25rem solid var(--blockquote-border-color);
  border-inline-start: 0.25rem solid var(--blockquote-border-color);
  -webkit-border-end: none;
  border-inline-end: none;
}
blockquote footer {
  margin-top: calc(var(--typography-spacing-vertical) * 0.5);
  color: var(--blockquote-footer-color);
}

abbr[title] {
  border-bottom: 1px dotted;
  text-decoration: none;
  cursor: help;
}

ins {
  color: var(--ins-color);
  text-decoration: none;
}

del {
  color: var(--del-color);
}

::-moz-selection {
  background-color: var(--primary-focus);
}

::selection {
  background-color: var(--primary-focus);
}

/**
 * Embedded content
 */
:where(audio, canvas, iframe, img, svg, video) {
  vertical-align: middle;
}

audio,
video {
  display: inline-block;
}

audio:not([controls]) {
  display: none;
  height: 0;
}

:where(iframe) {
  border-style: none;
}

img {
  max-width: 100%;
  height: auto;
  border-style: none;
}

:where(svg:not([fill])) {
  fill: currentColor;
}

svg:not(#mount) {
  overflow: hidden;
}

/**
 * Button
 */
button {
  margin: 0;
  overflow: visible;
  font-family: inherit;
  text-transform: none;
}

button,
[type="button"],
[type="reset"],
[type="submit"] {
  -webkit-appearance: button;
}

button {
  display: block;
  width: 100%;
  margin-bottom: var(--spacing);
}

[role="button"] {
  display: inline-block;
  text-decoration: none;
}

button,
input[type="submit"],
input[type="button"],
input[type="reset"],
[role="button"] {
  --background-color: var(--primary);
  --border-color: var(--primary);
  --color: var(--primary-inverse);
  --box-shadow: var(--button-box-shadow, 0 0 0 rgba(0, 0, 0, 0));
  padding: var(--form-element-spacing-vertical)
    var(--form-element-spacing-horizontal);
  border: var(--border-width) solid var(--border-color);
  border-radius: var(--border-radius);
  outline: none;
  background-color: var(--background-color);
  box-shadow: var(--box-shadow);
  color: var(--color);
  font-weight: var(--font-weight);
  font-size: 1rem;
  line-height: var(--line-height);
  text-align: center;
  cursor: pointer;
  transition: background-color var(--transition), border-color var(--transition),
    color var(--transition), box-shadow var(--transition);
}
button:is([aria-current], :hover, :active, :focus),
input[type="submit"]:is([aria-current], :hover, :active, :focus),
input[type="button"]:is([aria-current], :hover, :active, :focus),
input[type="reset"]:is([aria-current], :hover, :active, :focus),
[role="button"]:is([aria-current], :hover, :active, :focus) {
  --background-color: var(--primary-hover);
  --border-color: var(--primary-hover);
  --box-shadow: var(--button-hover-box-shadow, 0 0 0 rgba(0, 0, 0, 0));
  --color: var(--primary-inverse);
}
button:focus,
input[type="submit"]:focus,
input[type="button"]:focus,
input[type="reset"]:focus,
[role="button"]:focus {
  --box-shadow: var(--button-hover-box-shadow, 0 0 0 rgba(0, 0, 0, 0)),
    0 0 0 var(--outline-width) var(--primary-focus);
}

:is(
    button,
    input[type="submit"],
    input[type="button"],
    [role="button"]
  ).secondary,
input[type="reset"] {
  --background-color: var(--secondary);
  --border-color: var(--secondary);
  --color: var(--secondary-inverse);
  cursor: pointer;
}
:is(
    button,
    input[type="submit"],
    input[type="button"],
    [role="button"]
  ).secondary:is([aria-current], :hover, :active, :focus),
input[type="reset"]:is([aria-current], :hover, :active, :focus) {
  --background-color: var(--secondary-hover);
  --border-color: var(--secondary-hover);
  --color: var(--secondary-inverse);
}
:is(
    button,
    input[type="submit"],
    input[type="button"],
    [role="button"]
  ).secondary:focus,
input[type="reset"]:focus {
  --box-shadow: var(--button-hover-box-shadow, 0 0 0 rgba(0, 0, 0, 0)),
    0 0 0 var(--outline-width) var(--secondary-focus);
}

:is(
    button,
    input[type="submit"],
    input[type="button"],
    [role="button"]
  ).contrast {
  --background-color: var(--contrast);
  --border-color: var(--contrast);
  --color: var(--contrast-inverse);
}
:is(
    button,
    input[type="submit"],
    input[type="button"],
    [role="button"]
  ).contrast:is([aria-current], :hover, :active, :focus) {
  --background-color: var(--contrast-hover);
  --border-color: var(--contrast-hover);
  --color: var(--contrast-inverse);
}
:is(
    button,
    input[type="submit"],
    input[type="button"],
    [role="button"]
  ).contrast:focus {
  --box-shadow: var(--button-hover-box-shadow, 0 0 0 rgba(0, 0, 0, 0)),
    0 0 0 var(--outline-width) var(--contrast-focus);
}

:is(
    button,
    input[type="submit"],
    input[type="button"],
    [role="button"]
  ).outline,
input[type="reset"].outline {
  --background-color: transparent;
  --color: var(--primary);
}
:is(
    button,
    input[type="submit"],
    input[type="button"],
    [role="button"]
  ).outline:is([aria-current], :hover, :active, :focus),
input[type="reset"].outline:is([aria-current], :hover, :active, :focus) {
  --background-color: transparent;
  --color: var(--primary-hover);
}

:is(
    button,
    input[type="submit"],
    input[type="button"],
    [role="button"]
  ).outline.secondary,
input[type="reset"].outline {
  --color: var(--secondary);
}
:is(
    button,
    input[type="submit"],
    input[type="button"],
    [role="button"]
  ).outline.secondary:is([aria-current], :hover, :active, :focus),
input[type="reset"].outline:is([aria-current], :hover, :active, :focus) {
  --color: var(--secondary-hover);
}

:is(
    button,
    input[type="submit"],
    input[type="button"],
    [role="button"]
  ).outline.contrast {
  --color: var(--contrast);
}
:is(
    button,
    input[type="submit"],
    input[type="button"],
    [role="button"]
  ).outline.contrast:is([aria-current], :hover, :active, :focus) {
  --color: var(--contrast-hover);
}

:where(
    button,
    [type="submit"],
    [type="button"],
    [type="reset"],
    [role="button"]
  )[disabled],
:where(fieldset[disabled])
  :is(
    button,
    [type="submit"],
    [type="button"],
    [type="reset"],
    [role="button"]
  ),
a[role="button"]:not([href]) {
  opacity: 0.5;
  pointer-events: none;
}

/**
 * Form elements
 */
input,
optgroup,
select,
textarea {
  margin: 0;
  font-size: 1rem;
  line-height: var(--line-height);
  font-family: inherit;
  letter-spacing: inherit;
}

input {
  overflow: visible;
}

select {
  text-transform: none;
}

legend {
  max-width: 100%;
  padding: 0;
  color: inherit;
  white-space: normal;
}

textarea {
  overflow: auto;
}

[type="checkbox"],
[type="radio"] {
  padding: 0;
}

::-webkit-inner-spin-button,
::-webkit-outer-spin-button {
  height: auto;
}

[type="search"] {
  -webkit-appearance: textfield;
  outline-offset: -2px;
}

[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}

::-webkit-file-upload-button {
  -webkit-appearance: button;
  font: inherit;
}

::-moz-focus-inner {
  padding: 0;
  border-style: none;
}

:-moz-focusring {
  outline: none;
}

:-moz-ui-invalid {
  box-shadow: none;
}

::-ms-expand {
  display: none;
}

[type="file"],
[type="range"] {
  padding: 0;
  border-width: 0;
}

input:not([type="checkbox"], [type="radio"], [type="range"]) {
  height: calc(
    1rem * var(--line-height) + var(--form-element-spacing-vertical) * 2 +
      var(--border-width) * 2
  );
}

fieldset {
  margin: 0;
  margin-bottom: var(--spacing);
  padding: 0;
  border: 0;
}

label,
fieldset legend {
  display: block;
  margin-bottom: calc(var(--spacing) * 0.25);
  font-weight: var(--form-label-font-weight, var(--font-weight));
}

input:not([type="checkbox"], [type="radio"]),
select,
textarea {
  width: 100%;
}

input:not([type="checkbox"], [type="radio"], [type="range"], [type="file"]),
select,
textarea {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  padding: var(--form-element-spacing-vertical)
    var(--form-element-spacing-horizontal);
}

input,
select,
textarea {
  --background-color: var(--form-element-background-color);
  --border-color: var(--form-element-border-color);
  --color: var(--form-element-color);
  --box-shadow: none;
  border: var(--border-width) solid var(--border-color);
  border-radius: var(--border-radius);
  outline: none;
  background-color: var(--background-color);
  box-shadow: var(--box-shadow);
  color: var(--color);
  font-weight: var(--font-weight);
  transition: background-color var(--transition), border-color var(--transition),
    color var(--transition), box-shadow var(--transition);
}

input:not(
    [type="submit"],
    [type="button"],
    [type="reset"],
    [type="checkbox"],
    [type="radio"],
    [readonly]
  ):is(:active, :focus),
:where(select, textarea):is(:active, :focus) {
  --background-color: var(--form-element-active-background-color);
}

input:not(
    [type="submit"],
    [type="button"],
    [type="reset"],
    [role="switch"],
    [readonly]
  ):is(:active, :focus),
:where(select, textarea):is(:active, :focus) {
  --border-color: var(--form-element-active-border-color);
}

input:not(
    [type="submit"],
    [type="button"],
    [type="reset"],
    [type="range"],
    [type="file"],
    [readonly]
  ):focus,
select:focus,
textarea:focus {
  --box-shadow: 0 0 0 var(--outline-width) var(--form-element-focus-color);
}

input:not([type="submit"], [type="button"], [type="reset"])[disabled],
select[disabled],
textarea[disabled],
:where(fieldset[disabled])
  :is(
    input:not([type="submit"], [type="button"], [type="reset"]),
    select,
    textarea
  ) {
  --background-color: var(--form-element-disabled-background-color);
  --border-color: var(--form-element-disabled-border-color);
  opacity: var(--form-element-disabled-opacity);
  pointer-events: none;
}

:where(input, select, textarea):not(
    [type="checkbox"],
    [type="radio"],
    [type="date"],
    [type="datetime-local"],
    [type="month"],
    [type="time"],
    [type="week"]
  )[aria-invalid] {
  padding-right: calc(
    var(--form-element-spacing-horizontal) + 1.5rem
  ) !important;
  padding-left: var(--form-element-spacing-horizontal);
  -webkit-padding-start: var(--form-element-spacing-horizontal) !important;
  padding-inline-start: var(--form-element-spacing-horizontal) !important;
  -webkit-padding-end: calc(
    var(--form-element-spacing-horizontal) + 1.5rem
  ) !important;
  padding-inline-end: calc(
    var(--form-element-spacing-horizontal) + 1.5rem
  ) !important;
  background-position: center right 0.75rem;
  background-size: 1rem auto;
  background-repeat: no-repeat;
}
:where(input, select, textarea):not(
    [type="checkbox"],
    [type="radio"],
    [type="date"],
    [type="datetime-local"],
    [type="month"],
    [type="time"],
    [type="week"]
  )[aria-invalid="false"] {
  background-image: var(--icon-valid);
}
:where(input, select, textarea):not(
    [type="checkbox"],
    [type="radio"],
    [type="date"],
    [type="datetime-local"],
    [type="month"],
    [type="time"],
    [type="week"]
  )[aria-invalid="true"] {
  background-image: var(--icon-invalid);
}
:where(input, select, textarea)[aria-invalid="false"] {
  --border-color: var(--form-element-valid-border-color);
}
:where(input, select, textarea)[aria-invalid="false"]:is(:active, :focus) {
  --border-color: var(--form-element-valid-active-border-color) !important;
  --box-shadow: 0 0 0 var(--outline-width) var(--form-element-valid-focus-color) !important;
}
:where(input, select, textarea)[aria-invalid="true"] {
  --border-color: var(--form-element-invalid-border-color);
}
:where(input, select, textarea)[aria-invalid="true"]:is(:active, :focus) {
  --border-color: var(--form-element-invalid-active-border-color) !important;
  --box-shadow: 0 0 0 var(--outline-width)
    var(--form-element-invalid-focus-color) !important;
}

[dir="rtl"]
  :where(input, select, textarea):not([type="checkbox"], [type="radio"]):is(
    [aria-invalid],
    [aria-invalid="true"],
    [aria-invalid="false"]
  ) {
  background-position: center left 0.75rem;
}

input::placeholder,
input::-webkit-input-placeholder,
textarea::placeholder,
textarea::-webkit-input-placeholder,
select:invalid {
  color: var(--form-element-placeholder-color);
  opacity: 1;
}

input:not([type="checkbox"], [type="radio"]),
select,
textarea {
  margin-bottom: var(--spacing);
}

select::-ms-expand {
  border: 0;
  background-color: transparent;
}
select:not([multiple], [size]) {
  padding-right: calc(var(--form-element-spacing-horizontal) + 1.5rem);
  padding-left: var(--form-element-spacing-horizontal);
  -webkit-padding-start: var(--form-element-spacing-horizontal);
  padding-inline-start: var(--form-element-spacing-horizontal);
  -webkit-padding-end: calc(var(--form-element-spacing-horizontal) + 1.5rem);
  padding-inline-end: calc(var(--form-element-spacing-horizontal) + 1.5rem);
  background-image: var(--icon-chevron);
  background-position: center right 0.75rem;
  background-size: 1rem auto;
  background-repeat: no-repeat;
}

[dir="rtl"] select:not([multiple], [size]) {
  background-position: center left 0.75rem;
}

:where(input, select, textarea) + small {
  display: block;
  width: 100%;
  margin-top: calc(var(--spacing) * -0.75);
  margin-bottom: var(--spacing);
  color: var(--muted-color);
}

label > :where(input, select, textarea) {
  margin-top: calc(var(--spacing) * 0.25);
}

/**
 * Form elements
 * Checkboxes & Radios
 */
[type="checkbox"],
[type="radio"] {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width: 1.25em;
  height: 1.25em;
  margin-top: -0.125em;
  margin-right: 0.375em;
  margin-left: 0;
  -webkit-margin-start: 0;
  margin-inline-start: 0;
  -webkit-margin-end: 0.375em;
  margin-inline-end: 0.375em;
  border-width: var(--border-width);
  font-size: inherit;
  vertical-align: middle;
  cursor: pointer;
}
[type="checkbox"]::-ms-check,
[type="radio"]::-ms-check {
  display: none;
}
[type="checkbox"]:checked,
[type="checkbox"]:checked:active,
[type="checkbox"]:checked:focus,
[type="radio"]:checked,
[type="radio"]:checked:active,
[type="radio"]:checked:focus {
  --background-color: var(--primary);
  --border-color: var(--primary);
  background-image: var(--icon-checkbox);
  background-position: center;
  background-size: 0.75em auto;
  background-repeat: no-repeat;
}
[type="checkbox"] ~ label,
[type="radio"] ~ label {
  display: inline-block;
  margin-right: 0.375em;
  margin-bottom: 0;
  cursor: pointer;
}

[type="checkbox"]:indeterminate {
  --background-color: var(--primary);
  --border-color: var(--primary);
  background-image: var(--icon-minus);
  background-position: center;
  background-size: 0.75em auto;
  background-repeat: no-repeat;
}

[type="radio"] {
  border-radius: 50%;
}
[type="radio"]:checked,
[type="radio"]:checked:active,
[type="radio"]:checked:focus {
  --background-color: var(--primary-inverse);
  border-width: 0.35em;
  background-image: none;
}

[type="checkbox"][role="switch"] {
  --background-color: var(--switch-background-color);
  --border-color: var(--switch-background-color);
  --color: var(--switch-color);
  width: 2.25em;
  height: 1.25em;
  border: var(--border-width) solid var(--border-color);
  border-radius: 1.25em;
  background-color: var(--background-color);
  line-height: 1.25em;
}
[type="checkbox"][role="switch"]:focus {
  --background-color: var(--switch-background-color);
  --border-color: var(--switch-background-color);
}
[type="checkbox"][role="switch"]:checked {
  --background-color: var(--switch-checked-background-color);
  --border-color: var(--switch-checked-background-color);
}
[type="checkbox"][role="switch"]:before {
  display: block;
  width: calc(1.25em - (var(--border-width) * 2));
  height: 100%;
  border-radius: 50%;
  background-color: var(--color);
  content: "";
  transition: margin 0.1s ease-in-out;
}
[type="checkbox"][role="switch"]:checked {
  background-image: none;
}
[type="checkbox"][role="switch"]:checked::before {
  margin-left: calc(1.125em - var(--border-width));
  -webkit-margin-start: calc(1.125em - var(--border-width));
  margin-inline-start: calc(1.125em - var(--border-width));
}

[type="checkbox"][aria-invalid="false"],
[type="checkbox"]:checked[aria-invalid="false"],
[type="radio"][aria-invalid="false"],
[type="radio"]:checked[aria-invalid="false"],
[type="checkbox"][role="switch"][aria-invalid="false"],
[type="checkbox"][role="switch"]:checked[aria-invalid="false"] {
  --border-color: var(--form-element-valid-border-color);
}
[type="checkbox"][aria-invalid="true"],
[type="checkbox"]:checked[aria-invalid="true"],
[type="radio"][aria-invalid="true"],
[type="radio"]:checked[aria-invalid="true"],
[type="checkbox"][role="switch"][aria-invalid="true"],
[type="checkbox"][role="switch"]:checked[aria-invalid="true"] {
  --border-color: var(--form-element-invalid-border-color);
}

/**
 * Form elements
 * Alternatives input types (Not Checkboxes & Radios)
 */
[type="color"]::-webkit-color-swatch-wrapper {
  padding: 0;
}
[type="color"]::-moz-focus-inner {
  padding: 0;
}
[type="color"]::-webkit-color-swatch {
  border: 0;
  border-radius: calc(var(--border-radius) * 0.5);
}
[type="color"]::-moz-color-swatch {
  border: 0;
  border-radius: calc(var(--border-radius) * 0.5);
}

input:not([type="checkbox"], [type="radio"], [type="range"], [type="file"]):is(
    [type="date"],
    [type="datetime-local"],
    [type="month"],
    [type="time"],
    [type="week"]
  ) {
  --icon-position: 0.75rem;
  --icon-width: 1rem;
  padding-right: calc(var(--icon-width) + var(--icon-position));
  background-image: var(--icon-date);
  background-position: center right var(--icon-position);
  background-size: var(--icon-width) auto;
  background-repeat: no-repeat;
}
input:not(
    [type="checkbox"],
    [type="radio"],
    [type="range"],
    [type="file"]
  )[type="time"] {
  background-image: var(--icon-time);
}

[type="date"]::-webkit-calendar-picker-indicator,
[type="datetime-local"]::-webkit-calendar-picker-indicator,
[type="month"]::-webkit-calendar-picker-indicator,
[type="time"]::-webkit-calendar-picker-indicator,
[type="week"]::-webkit-calendar-picker-indicator {
  width: var(--icon-width);
  margin-right: calc(var(--icon-width) * -1);
  margin-left: var(--icon-position);
  opacity: 0;
}

[dir="rtl"]
  :is(
    [type="date"],
    [type="datetime-local"],
    [type="month"],
    [type="time"],
    [type="week"]
  ) {
  text-align: right;
}

[type="file"] {
  --color: var(--muted-color);
  padding: calc(var(--form-element-spacing-vertical) * 0.5) 0;
  border: 0;
  border-radius: 0;
  background: none;
}
[type="file"]::file-selector-button {
  --background-color: var(--secondary);
  --border-color: var(--secondary);
  --color: var(--secondary-inverse);
  margin-right: calc(var(--spacing) / 2);
  margin-left: 0;
  -webkit-margin-start: 0;
  margin-inline-start: 0;
  -webkit-margin-end: calc(var(--spacing) / 2);
  margin-inline-end: calc(var(--spacing) / 2);
  padding: calc(var(--form-element-spacing-vertical) * 0.5)
    calc(var(--form-element-spacing-horizontal) * 0.5);
  border: var(--border-width) solid var(--border-color);
  border-radius: var(--border-radius);
  outline: none;
  background-color: var(--background-color);
  box-shadow: var(--box-shadow);
  color: var(--color);
  font-weight: var(--font-weight);
  font-size: 1rem;
  line-height: var(--line-height);
  text-align: center;
  cursor: pointer;
  transition: background-color var(--transition), border-color var(--transition),
    color var(--transition), box-shadow var(--transition);
}
[type="file"]::file-selector-button:is(:hover, :active, :focus) {
  --background-color: var(--secondary-hover);
  --border-color: var(--secondary-hover);
}
[type="file"]::-webkit-file-upload-button {
  --background-color: var(--secondary);
  --border-color: var(--secondary);
  --color: var(--secondary-inverse);
  margin-right: calc(var(--spacing) / 2);
  margin-left: 0;
  -webkit-margin-start: 0;
  margin-inline-start: 0;
  -webkit-margin-end: calc(var(--spacing) / 2);
  margin-inline-end: calc(var(--spacing) / 2);
  padding: calc(var(--form-element-spacing-vertical) * 0.5)
    calc(var(--form-element-spacing-horizontal) * 0.5);
  border: var(--border-width) solid var(--border-color);
  border-radius: var(--border-radius);
  outline: none;
  background-color: var(--background-color);
  box-shadow: var(--box-shadow);
  color: var(--color);
  font-weight: var(--font-weight);
  font-size: 1rem;
  line-height: var(--line-height);
  text-align: center;
  cursor: pointer;
  -webkit-transition: background-color var(--transition),
    border-color var(--transition), color var(--transition),
    box-shadow var(--transition);
  transition: background-color var(--transition), border-color var(--transition),
    color var(--transition), box-shadow var(--transition);
}
[type="file"]::-webkit-file-upload-button:is(:hover, :active, :focus) {
  --background-color: var(--secondary-hover);
  --border-color: var(--secondary-hover);
}
[type="file"]::-ms-browse {
  --background-color: var(--secondary);
  --border-color: var(--secondary);
  --color: var(--secondary-inverse);
  margin-right: calc(var(--spacing) / 2);
  margin-left: 0;
  margin-inline-start: 0;
  margin-inline-end: calc(var(--spacing) / 2);
  padding: calc(var(--form-element-spacing-vertical) * 0.5)
    calc(var(--form-element-spacing-horizontal) * 0.5);
  border: var(--border-width) solid var(--border-color);
  border-radius: var(--border-radius);
  outline: none;
  background-color: var(--background-color);
  box-shadow: var(--box-shadow);
  color: var(--color);
  font-weight: var(--font-weight);
  font-size: 1rem;
  line-height: var(--line-height);
  text-align: center;
  cursor: pointer;
  -ms-transition: background-color var(--transition),
    border-color var(--transition), color var(--transition),
    box-shadow var(--transition);
  transition: background-color var(--transition), border-color var(--transition),
    color var(--transition), box-shadow var(--transition);
}
[type="file"]::-ms-browse:is(:hover, :active, :focus) {
  --background-color: var(--secondary-hover);
  --border-color: var(--secondary-hover);
}

[type="range"] {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width: 100%;
  height: 1.25rem;
  background: none;
}
[type="range"]::-webkit-slider-runnable-track {
  width: 100%;
  height: 0.25rem;
  border-radius: var(--border-radius);
  background-color: var(--range-border-color);
  -webkit-transition: background-color var(--transition),
    box-shadow var(--transition);
  transition: background-color var(--transition), box-shadow var(--transition);
}
[type="range"]::-moz-range-track {
  width: 100%;
  height: 0.25rem;
  border-radius: var(--border-radius);
  background-color: var(--range-border-color);
  -moz-transition: background-color var(--transition),
    box-shadow var(--transition);
  transition: background-color var(--transition), box-shadow var(--transition);
}
[type="range"]::-ms-track {
  width: 100%;
  height: 0.25rem;
  border-radius: var(--border-radius);
  background-color: var(--range-border-color);
  -ms-transition: background-color var(--transition),
    box-shadow var(--transition);
  transition: background-color var(--transition), box-shadow var(--transition);
}
[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 1.25rem;
  height: 1.25rem;
  margin-top: -0.5rem;
  border: 2px solid var(--range-thumb-border-color);
  border-radius: 50%;
  background-color: var(--range-thumb-color);
  cursor: pointer;
  -webkit-transition: background-color var(--transition),
    transform var(--transition);
  transition: background-color var(--transition), transform var(--transition);
}
[type="range"]::-moz-range-thumb {
  -webkit-appearance: none;
  width: 1.25rem;
  height: 1.25rem;
  margin-top: -0.5rem;
  border: 2px solid var(--range-thumb-border-color);
  border-radius: 50%;
  background-color: var(--range-thumb-color);
  cursor: pointer;
  -moz-transition: background-color var(--transition),
    transform var(--transition);
  transition: background-color var(--transition), transform var(--transition);
}
[type="range"]::-ms-thumb {
  -webkit-appearance: none;
  width: 1.25rem;
  height: 1.25rem;
  margin-top: -0.5rem;
  border: 2px solid var(--range-thumb-border-color);
  border-radius: 50%;
  background-color: var(--range-thumb-color);
  cursor: pointer;
  -ms-transition: background-color var(--transition),
    transform var(--transition);
  transition: background-color var(--transition), transform var(--transition);
}
[type="range"]:hover,
[type="range"]:focus {
  --range-border-color: var(--range-active-border-color);
  --range-thumb-color: var(--range-thumb-hover-color);
}
[type="range"]:active {
  --range-thumb-color: var(--range-thumb-active-color);
}
[type="range"]:active::-webkit-slider-thumb {
  transform: scale(1.25);
}
[type="range"]:active::-moz-range-thumb {
  transform: scale(1.25);
}
[type="range"]:active::-ms-thumb {
  transform: scale(1.25);
}

input:not(
    [type="checkbox"],
    [type="radio"],
    [type="range"],
    [type="file"]
  )[type="search"] {
  -webkit-padding-start: calc(var(--form-element-spacing-horizontal) + 1.75rem);
  padding-inline-start: calc(var(--form-element-spacing-horizontal) + 1.75rem);
  border-radius: 5rem;
  background-image: var(--icon-search);
  background-position: center left 1.125rem;
  background-size: 1rem auto;
  background-repeat: no-repeat;
}
input:not(
    [type="checkbox"],
    [type="radio"],
    [type="range"],
    [type="file"]
  )[type="search"][aria-invalid] {
  -webkit-padding-start: calc(
    var(--form-element-spacing-horizontal) + 1.75rem
  ) !important;
  padding-inline-start: calc(
    var(--form-element-spacing-horizontal) + 1.75rem
  ) !important;
  background-position: center left 1.125rem, center right 0.75rem;
}
input:not(
    [type="checkbox"],
    [type="radio"],
    [type="range"],
    [type="file"]
  )[type="search"][aria-invalid="false"] {
  background-image: var(--icon-search), var(--icon-valid);
}
input:not(
    [type="checkbox"],
    [type="radio"],
    [type="range"],
    [type="file"]
  )[type="search"][aria-invalid="true"] {
  background-image: var(--icon-search), var(--icon-invalid);
}

[type="search"]::-webkit-search-cancel-button {
  -webkit-appearance: none;
  display: none;
}

[dir="rtl"]
  :where(input):not(
    [type="checkbox"],
    [type="radio"],
    [type="range"],
    [type="file"]
  )[type="search"] {
  background-position: center right 1.125rem;
}
[dir="rtl"]
  :where(input):not(
    [type="checkbox"],
    [type="radio"],
    [type="range"],
    [type="file"]
  )[type="search"][aria-invalid] {
  background-position: center right 1.125rem, center left 0.75rem;
}

/**
 * Table
 */
:where(table) {
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  text-indent: 0;
}

th,
td {
  padding: calc(var(--spacing) / 2) var(--spacing);
  border-bottom: var(--border-width) solid var(--table-border-color);
  color: var(--color);
  font-weight: var(--font-weight);
  font-size: var(--font-size);
  text-align: left;
  text-align: start;
}

tfoot th,
tfoot td {
  border-top: var(--border-width) solid var(--table-border-color);
  border-bottom: 0;
}

table[role="grid"] tbody tr:nth-child(odd) {
  background-color: var(--table-row-stripped-background-color);
}

/**
 * Code
 */
pre,
code,
kbd,
samp {
  font-size: 0.875em;
  font-family: var(--font-family);
}

pre {
  -ms-overflow-style: scrollbar;
  overflow: auto;
}

pre,
code,
kbd {
  border-radius: var(--border-radius);
  background: var(--code-background-color);
  color: var(--code-color);
  font-weight: var(--font-weight);
  line-height: initial;
}

code,
kbd {
  display: inline-block;
  padding: 0.375rem 0.5rem;
}

pre {
  display: block;
  margin-bottom: var(--spacing);
  overflow-x: auto;
}
pre > code {
  display: block;
  padding: var(--spacing);
  background: none;
  font-size: 14px;
  line-height: var(--line-height);
}

code b {
  color: var(--code-tag-color);
  font-weight: var(--font-weight);
}
code i {
  color: var(--code-property-color);
  font-style: normal;
}
code u {
  color: var(--code-value-color);
  text-decoration: none;
}
code em {
  color: var(--code-comment-color);
  font-style: normal;
}

kbd {
  background-color: var(--code-kbd-background-color);
  color: var(--code-kbd-color);
  vertical-align: baseline;
}

/**
 * Miscs
 */
hr {
  height: 0;
  border: 0;
  border-top: 1px solid var(--muted-border-color);
  color: inherit;
}

[hidden],
template {
  display: none !important;
}

canvas {
  display: inline-block;
}

/**
 * Accordion (<details>)
 */
details {
  display: block;
  margin-bottom: var(--spacing);
  padding-bottom: var(--spacing);
  border-bottom: var(--border-width) solid var(--accordion-border-color);
}
details summary {
  line-height: 1rem;
  list-style-type: none;
  cursor: pointer;
  transition: color var(--transition);
}
details summary:not([role]) {
  color: var(--accordion-close-summary-color);
}
details summary::-webkit-details-marker {
  display: none;
}
details summary::marker {
  display: none;
}
details summary::-moz-list-bullet {
  list-style-type: none;
}
details summary::after {
  display: block;
  width: 1rem;
  height: 1rem;
  -webkit-margin-start: calc(var(--spacing, 1rem) * 0.5);
  margin-inline-start: calc(var(--spacing, 1rem) * 0.5);
  float: right;
  transform: rotate(-90deg);
  background-image: var(--icon-chevron);
  background-position: right center;
  background-size: 1rem auto;
  background-repeat: no-repeat;
  content: "";
  transition: transform var(--transition);
}
details summary:focus {
  outline: none;
}
details summary:focus:not([role="button"]) {
  color: var(--accordion-active-summary-color);
}
details summary[role="button"] {
  width: 100%;
  text-align: left;
}
details summary[role="button"]::after {
  height: calc(1rem * var(--line-height, 1.5));
  background-image: var(--icon-chevron-button);
}
details summary[role="button"]:not(.outline).contrast::after {
  background-image: var(--icon-chevron-button-inverse);
}
details[open] > summary {
  margin-bottom: calc(var(--spacing));
}
details[open] > summary:not([role]):not(:focus) {
  color: var(--accordion-open-summary-color);
}
details[open] > summary::after {
  transform: rotate(0);
}

[dir="rtl"] details summary {
  text-align: right;
}
[dir="rtl"] details summary::after {
  float: left;
  background-position: left center;
}

/**
 * Card (<article>)
 */
article {
  margin: var(--block-spacing-vertical) 0;
  padding: var(--block-spacing-vertical) var(--block-spacing-horizontal);
  border-radius: var(--border-radius);
  background: var(--card-background-color);
  box-shadow: var(--card-box-shadow);
}
article > header,
article > footer {
  margin-right: calc(var(--block-spacing-horizontal) * -1);
  margin-left: calc(var(--block-spacing-horizontal) * -1);
  padding: calc(var(--block-spacing-vertical) * 0.66)
    var(--block-spacing-horizontal);
  background-color: var(--card-sectionning-background-color);
}
article > header {
  margin-top: calc(var(--block-spacing-vertical) * -1);
  margin-bottom: var(--block-spacing-vertical);
  border-bottom: var(--border-width) solid var(--card-border-color);
  border-top-right-radius: var(--border-radius);
  border-top-left-radius: var(--border-radius);
}
article > footer {
  margin-top: var(--block-spacing-vertical);
  margin-bottom: calc(var(--block-spacing-vertical) * -1);
  border-top: var(--border-width) solid var(--card-border-color);
  border-bottom-right-radius: var(--border-radius);
  border-bottom-left-radius: var(--border-radius);
}

/**
 * Modal (<dialog>)
 */
#mount {
  --scrollbar-width: 0px;
}

dialog {
  display: flex;
  z-index: 999;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  align-items: center;
  justify-content: center;
  width: inherit;
  min-width: 100%;
  height: inherit;
  min-height: 100%;
  padding: var(--spacing);
  border: 0;
  -webkit-backdrop-filter: var(--modal-overlay-backdrop-filter);
  backdrop-filter: var(--modal-overlay-backdrop-filter);
  background-color: var(--modal-overlay-background-color);
  color: var(--color);
}
dialog article {
  max-height: calc(100vh - var(--spacing) * 2);
  overflow: auto;
}
@media (min-width: 576px) {
  dialog article {
    max-width: 510px;
  }
}
@media (min-width: 768px) {
  dialog article {
    max-width: 700px;
  }
}
dialog article > header,
dialog article > footer {
  padding: calc(var(--block-spacing-vertical) * 0.5)
    var(--block-spacing-horizontal);
}
dialog article > header .close {
  margin: 0;
  margin-left: var(--spacing);
  float: right;
}
dialog article > footer {
  text-align: right;
}
dialog article > footer [role="button"] {
  margin-bottom: 0;
}
dialog article > footer [role="button"]:not(:first-of-type) {
  margin-left: calc(var(--spacing) * 0.5);
}
dialog article p:last-of-type {
  margin: 0;
}
dialog article .close {
  display: block;
  width: 1rem;
  height: 1rem;
  margin-top: calc(var(--block-spacing-vertical) * -0.5);
  margin-bottom: var(--typography-spacing-vertical);
  margin-left: auto;
  background-image: var(--icon-close);
  background-position: center;
  background-size: auto 1rem;
  background-repeat: no-repeat;
  opacity: 0.5;
  transition: opacity var(--transition);
}
dialog article .close:is([aria-current], :hover, :active, :focus) {
  opacity: 1;
}
dialog:not([open]),
dialog[open="false"] {
  display: none;
}

.modal-is-open {
  padding-right: var(--scrollbar-width, 0px);
  overflow: hidden;
  pointer-events: none;
}
.modal-is-open dialog {
  pointer-events: auto;
}

:where(.modal-is-opening, .modal-is-closing) dialog,
:where(.modal-is-opening, .modal-is-closing) dialog > article {
  animation-duration: 0.2s;
  animation-timing-function: ease-in-out;
  animation-fill-mode: both;
}
:where(.modal-is-opening, .modal-is-closing) dialog {
  animation-duration: 0.8s;
  animation-name: modal-overlay;
}
:where(.modal-is-opening, .modal-is-closing) dialog > article {
  animation-delay: 0.2s;
  animation-name: modal;
}

.modal-is-closing dialog,
.modal-is-closing dialog > article {
  animation-delay: 0s;
  animation-direction: reverse;
}

@keyframes modal-overlay {
  from {
    -webkit-backdrop-filter: none;
    backdrop-filter: none;
    background-color: transparent;
  }
}
@keyframes modal {
  from {
    transform: translateY(-100%);
    opacity: 0;
  }
}
/**
 * Nav
 */
:where(nav li)::before {
  float: left;
  content: "\u200B";
}

nav,
nav ul {
  display: flex;
}

nav {
  justify-content: space-between;
}
nav ol,
nav ul {
  align-items: center;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
}
nav ol:first-of-type,
nav ul:first-of-type {
  margin-left: calc(var(--nav-element-spacing-horizontal) * -1);
}
nav ol:last-of-type,
nav ul:last-of-type {
  margin-right: calc(var(--nav-element-spacing-horizontal) * -1);
}
nav li {
  display: inline-block;
  margin: 0;
  padding: var(--nav-element-spacing-vertical)
    var(--nav-element-spacing-horizontal);
}
nav li > * {
  --spacing: 0;
}
nav :where(a, [role="link"]) {
  display: inline-block;
  margin: calc(var(--nav-link-spacing-vertical) * -1)
    calc(var(--nav-link-spacing-horizontal) * -1);
  padding: var(--nav-link-spacing-vertical) var(--nav-link-spacing-horizontal);
  border-radius: var(--border-radius);
  text-decoration: none;
}
nav :where(a, [role="link"]):is([aria-current], :hover, :active, :focus) {
  text-decoration: none;
}
nav[aria-label="breadcrumb"] {
  align-items: center;
  justify-content: start;
}
nav[aria-label="breadcrumb"] ul li:not(:first-child) {
  -webkit-margin-start: var(--nav-link-spacing-horizontal);
  margin-inline-start: var(--nav-link-spacing-horizontal);
}
nav[aria-label="breadcrumb"] ul li:not(:last-child) ::after {
  position: absolute;
  width: calc(var(--nav-link-spacing-horizontal) * 2);
  -webkit-margin-start: calc(var(--nav-link-spacing-horizontal) / 2);
  margin-inline-start: calc(var(--nav-link-spacing-horizontal) / 2);
  content: "/";
  color: var(--muted-color);
  text-align: center;
}
nav[aria-label="breadcrumb"] a[aria-current] {
  background-color: transparent;
  color: inherit;
  text-decoration: none;
  pointer-events: none;
}
nav [role="button"] {
  margin-right: inherit;
  margin-left: inherit;
  padding: var(--nav-link-spacing-vertical) var(--nav-link-spacing-horizontal);
}

aside nav,
aside ol,
aside ul,
aside li {
  display: block;
}
aside li {
  padding: calc(var(--nav-element-spacing-vertical) * 0.5)
    var(--nav-element-spacing-horizontal);
}
aside li a {
  display: block;
}
aside li [role="button"] {
  margin: inherit;
}

[dir="rtl"] nav[aria-label="breadcrumb"] ul li:not(:last-child) ::after {
  content: "\\\\";
}

/**
 * Progress
 */
progress {
  display: inline-block;
  vertical-align: baseline;
}

progress {
  -webkit-appearance: none;
  -moz-appearance: none;
  display: inline-block;
  appearance: none;
  width: 100%;
  height: 0.5rem;
  margin-bottom: calc(var(--spacing) * 0.5);
  overflow: hidden;
  border: 0;
  border-radius: var(--border-radius);
  background-color: var(--progress-background-color);
  color: var(--progress-color);
}
progress::-webkit-progress-bar {
  border-radius: var(--border-radius);
  background: none;
}
progress[value]::-webkit-progress-value {
  background-color: var(--progress-color);
}
progress::-moz-progress-bar {
  background-color: var(--progress-color);
}
@media (prefers-reduced-motion: no-preference) {
  progress:indeterminate {
    background: var(--progress-background-color)
      linear-gradient(
        to right,
        var(--progress-color) 30%,
        var(--progress-background-color) 30%
      )
      top left/150% 150% no-repeat;
    animation: progress-indeterminate 1s linear infinite;
  }
  progress:indeterminate[value]::-webkit-progress-value {
    background-color: transparent;
  }
  progress:indeterminate::-moz-progress-bar {
    background-color: transparent;
  }
}

@media (prefers-reduced-motion: no-preference) {
  [dir="rtl"] progress:indeterminate {
    animation-direction: reverse;
  }
}

@keyframes progress-indeterminate {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}
/**
 * Dropdown ([role="list"])
 */
details[role="list"],
li[role="list"] {
  position: relative;
}

details[role="list"] summary + ul,
li[role="list"] > ul {
  display: flex;
  z-index: 99;
  position: absolute;
  top: auto;
  right: 0;
  left: 0;
  flex-direction: column;
  margin: 0;
  padding: 0;
  border: var(--border-width) solid var(--dropdown-border-color);
  border-radius: var(--border-radius);
  border-top-right-radius: 0;
  border-top-left-radius: 0;
  background-color: var(--dropdown-background-color);
  box-shadow: var(--card-box-shadow);
  color: var(--dropdown-color);
  white-space: nowrap;
}
details[role="list"] summary + ul li,
li[role="list"] > ul li {
  width: 100%;
  margin-bottom: 0;
  padding: calc(var(--form-element-spacing-vertical) * 0.5)
    var(--form-element-spacing-horizontal);
  list-style: none;
}
details[role="list"] summary + ul li:first-of-type,
li[role="list"] > ul li:first-of-type {
  margin-top: calc(var(--form-element-spacing-vertical) * 0.5);
}
details[role="list"] summary + ul li:last-of-type,
li[role="list"] > ul li:last-of-type {
  margin-bottom: calc(var(--form-element-spacing-vertical) * 0.5);
}
details[role="list"] summary + ul li a,
li[role="list"] > ul li a {
  display: block;
  margin: calc(var(--form-element-spacing-vertical) * -0.5)
    calc(var(--form-element-spacing-horizontal) * -1);
  padding: calc(var(--form-element-spacing-vertical) * 0.5)
    var(--form-element-spacing-horizontal);
  overflow: hidden;
  color: var(--dropdown-color);
  text-decoration: none;
  text-overflow: ellipsis;
}
details[role="list"] summary + ul li a:hover,
li[role="list"] > ul li a:hover {
  background-color: var(--dropdown-hover-background-color);
}

details[role="list"] summary::after,
li[role="list"] > a::after {
  display: block;
  width: 1rem;
  height: calc(1rem * var(--line-height, 1.5));
  -webkit-margin-start: 0.5rem;
  margin-inline-start: 0.5rem;
  float: right;
  transform: rotate(0deg);
  background-position: right center;
  background-size: 1rem auto;
  background-repeat: no-repeat;
  content: "";
}

details[role="list"] {
  padding: 0;
  border-bottom: none;
}
details[role="list"] summary {
  margin-bottom: 0;
}
details[role="list"] summary:not([role]) {
  height: calc(
    1rem * var(--line-height) + var(--form-element-spacing-vertical) * 2 +
      var(--border-width) * 2
  );
  padding: var(--form-element-spacing-vertical)
    var(--form-element-spacing-horizontal);
  border: var(--border-width) solid var(--form-element-border-color);
  border-radius: var(--border-radius);
  background-color: var(--form-element-background-color);
  color: var(--form-element-placeholder-color);
  line-height: inherit;
  cursor: pointer;
  transition: background-color var(--transition), border-color var(--transition),
    color var(--transition), box-shadow var(--transition);
}
details[role="list"] summary:not([role]):active,
details[role="list"] summary:not([role]):focus {
  border-color: var(--form-element-active-border-color);
  background-color: var(--form-element-active-background-color);
}
details[role="list"] summary:not([role]):focus {
  box-shadow: 0 0 0 var(--outline-width) var(--form-element-focus-color);
}
details[role="list"][open] summary {
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
details[role="list"][open] summary::before {
  display: block;
  z-index: 1;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: none;
  content: "";
  cursor: default;
}

nav details[role="list"] summary,
nav li[role="list"] a {
  display: flex;
  direction: ltr;
}

nav details[role="list"] summary + ul,
nav li[role="list"] > ul {
  min-width: -moz-fit-content;
  min-width: fit-content;
  border-radius: var(--border-radius);
}
nav details[role="list"] summary + ul li a,
nav li[role="list"] > ul li a {
  border-radius: 0;
}

nav details[role="list"] summary,
nav details[role="list"] summary:not([role]) {
  height: auto;
  padding: var(--nav-link-spacing-vertical) var(--nav-link-spacing-horizontal);
}
nav details[role="list"][open] summary {
  border-radius: var(--border-radius);
}
nav details[role="list"] summary + ul {
  margin-top: var(--outline-width);
  -webkit-margin-start: 0;
  margin-inline-start: 0;
}
nav details[role="list"] summary[role="link"] {
  margin-bottom: calc(var(--nav-link-spacing-vertical) * -1);
  line-height: var(--line-height);
}
nav details[role="list"] summary[role="link"] + ul {
  margin-top: calc(var(--nav-link-spacing-vertical) + var(--outline-width));
  -webkit-margin-start: calc(var(--nav-link-spacing-horizontal) * -1);
  margin-inline-start: calc(var(--nav-link-spacing-horizontal) * -1);
}

li[role="list"]:hover > ul,
li[role="list"] a:active ~ ul,
li[role="list"] a:focus ~ ul {
  display: flex;
}
li[role="list"] > ul {
  display: none;
  margin-top: calc(var(--nav-link-spacing-vertical) + var(--outline-width));
  -webkit-margin-start: calc(
    var(--nav-element-spacing-horizontal) - var(--nav-link-spacing-horizontal)
  );
  margin-inline-start: calc(
    var(--nav-element-spacing-horizontal) - var(--nav-link-spacing-horizontal)
  );
}
li[role="list"] > a::after {
  background-image: var(--icon-chevron);
}

/**
 * Loading ([aria-busy=true])
 */
[aria-busy="true"] {
  cursor: progress;
}

[aria-busy="true"]:not(input, select, textarea)::before {
  display: inline-block;
  width: 1em;
  height: 1em;
  border: 0.1875em solid currentColor;
  border-radius: 1em;
  border-right-color: transparent;
  content: "";
  vertical-align: text-bottom;
  vertical-align: -0.125em;
  animation: spinner 0.75s linear infinite;
  opacity: var(--loading-spinner-opacity);
}
[aria-busy="true"]:not(input, select, textarea):not(:empty)::before {
  margin-right: calc(var(--spacing) * 0.5);
  margin-left: 0;
  -webkit-margin-start: 0;
  margin-inline-start: 0;
  -webkit-margin-end: calc(var(--spacing) * 0.5);
  margin-inline-end: calc(var(--spacing) * 0.5);
}
[aria-busy="true"]:not(input, select, textarea):empty {
  text-align: center;
}

button[aria-busy="true"],
input[type="submit"][aria-busy="true"],
input[type="button"][aria-busy="true"],
input[type="reset"][aria-busy="true"],
a[aria-busy="true"] {
  pointer-events: none;
}

@keyframes spinner {
  to {
    transform: rotate(360deg);
  }
}
/**
 * Tooltip ([data-tooltip])
 */
[data-tooltip] {
  position: relative;
}
[data-tooltip]:not(a, button, input) {
  border-bottom: 1px dotted;
  text-decoration: none;
  cursor: help;
}
[data-tooltip][data-placement="top"]::before,
[data-tooltip][data-placement="top"]::after,
[data-tooltip]::before,
[data-tooltip]::after {
  display: block;
  z-index: 99;
  position: absolute;
  bottom: 100%;
  left: 50%;
  padding: 0.25rem 0.5rem;
  overflow: hidden;
  transform: translate(-50%, -0.25rem);
  border-radius: var(--border-radius);
  background: var(--tooltip-background-color);
  content: attr(data-tooltip);
  color: var(--tooltip-color);
  font-style: normal;
  font-weight: var(--font-weight);
  font-size: 0.875rem;
  text-decoration: none;
  text-overflow: ellipsis;
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
}
[data-tooltip][data-placement="top"]::after,
[data-tooltip]::after {
  padding: 0;
  transform: translate(-50%, 0rem);
  border-top: 0.3rem solid;
  border-right: 0.3rem solid transparent;
  border-left: 0.3rem solid transparent;
  border-radius: 0;
  background-color: transparent;
  content: "";
  color: var(--tooltip-background-color);
}
[data-tooltip][data-placement="bottom"]::before,
[data-tooltip][data-placement="bottom"]::after {
  top: 100%;
  bottom: auto;
  transform: translate(-50%, 0.25rem);
}
[data-tooltip][data-placement="bottom"]:after {
  transform: translate(-50%, -0.3rem);
  border: 0.3rem solid transparent;
  border-bottom: 0.3rem solid;
}
[data-tooltip][data-placement="left"]::before,
[data-tooltip][data-placement="left"]::after {
  top: 50%;
  right: 100%;
  bottom: auto;
  left: auto;
  transform: translate(-0.25rem, -50%);
}
[data-tooltip][data-placement="left"]:after {
  transform: translate(0.3rem, -50%);
  border: 0.3rem solid transparent;
  border-left: 0.3rem solid;
}
[data-tooltip][data-placement="right"]::before,
[data-tooltip][data-placement="right"]::after {
  top: 50%;
  right: auto;
  bottom: auto;
  left: 100%;
  transform: translate(0.25rem, -50%);
}
[data-tooltip][data-placement="right"]:after {
  transform: translate(-0.3rem, -50%);
  border: 0.3rem solid transparent;
  border-right: 0.3rem solid;
}
[data-tooltip]:focus::before,
[data-tooltip]:focus::after,
[data-tooltip]:hover::before,
[data-tooltip]:hover::after {
  opacity: 1;
}
@media (hover: hover) and (pointer: fine) {
  [data-tooltip][data-placement="bottom"]:focus::before,
  [data-tooltip][data-placement="bottom"]:focus::after,
  [data-tooltip][data-placement="bottom"]:hover [data-tooltip]:focus::before,
  [data-tooltip][data-placement="bottom"]:hover [data-tooltip]:focus::after,
  [data-tooltip]:hover::before,
  [data-tooltip]:hover::after {
    animation-duration: 0.2s;
    animation-name: tooltip-slide-top;
  }
  [data-tooltip][data-placement="bottom"]:focus::after,
  [data-tooltip][data-placement="bottom"]:hover [data-tooltip]:focus::after,
  [data-tooltip]:hover::after {
    animation-name: tooltip-caret-slide-top;
  }
  [data-tooltip][data-placement="bottom"]:focus::before,
  [data-tooltip][data-placement="bottom"]:focus::after,
  [data-tooltip][data-placement="bottom"]:hover::before,
  [data-tooltip][data-placement="bottom"]:hover::after {
    animation-duration: 0.2s;
    animation-name: tooltip-slide-bottom;
  }
  [data-tooltip][data-placement="bottom"]:focus::after,
  [data-tooltip][data-placement="bottom"]:hover::after {
    animation-name: tooltip-caret-slide-bottom;
  }
  [data-tooltip][data-placement="left"]:focus::before,
  [data-tooltip][data-placement="left"]:focus::after,
  [data-tooltip][data-placement="left"]:hover::before,
  [data-tooltip][data-placement="left"]:hover::after {
    animation-duration: 0.2s;
    animation-name: tooltip-slide-left;
  }
  [data-tooltip][data-placement="left"]:focus::after,
  [data-tooltip][data-placement="left"]:hover::after {
    animation-name: tooltip-caret-slide-left;
  }
  [data-tooltip][data-placement="right"]:focus::before,
  [data-tooltip][data-placement="right"]:focus::after,
  [data-tooltip][data-placement="right"]:hover::before,
  [data-tooltip][data-placement="right"]:hover::after {
    animation-duration: 0.2s;
    animation-name: tooltip-slide-right;
  }
  [data-tooltip][data-placement="right"]:focus::after,
  [data-tooltip][data-placement="right"]:hover::after {
    animation-name: tooltip-caret-slide-right;
  }
}
@keyframes tooltip-slide-top {
  from {
    transform: translate(-50%, 0.75rem);
    opacity: 0;
  }
  to {
    transform: translate(-50%, -0.25rem);
    opacity: 1;
  }
}
@keyframes tooltip-caret-slide-top {
  from {
    opacity: 0;
  }
  50% {
    transform: translate(-50%, -0.25rem);
    opacity: 0;
  }
  to {
    transform: translate(-50%, 0rem);
    opacity: 1;
  }
}
@keyframes tooltip-slide-bottom {
  from {
    transform: translate(-50%, -0.75rem);
    opacity: 0;
  }
  to {
    transform: translate(-50%, 0.25rem);
    opacity: 1;
  }
}
@keyframes tooltip-caret-slide-bottom {
  from {
    opacity: 0;
  }
  50% {
    transform: translate(-50%, -0.5rem);
    opacity: 0;
  }
  to {
    transform: translate(-50%, -0.3rem);
    opacity: 1;
  }
}
@keyframes tooltip-slide-left {
  from {
    transform: translate(0.75rem, -50%);
    opacity: 0;
  }
  to {
    transform: translate(-0.25rem, -50%);
    opacity: 1;
  }
}
@keyframes tooltip-caret-slide-left {
  from {
    opacity: 0;
  }
  50% {
    transform: translate(0.05rem, -50%);
    opacity: 0;
  }
  to {
    transform: translate(0.3rem, -50%);
    opacity: 1;
  }
}
@keyframes tooltip-slide-right {
  from {
    transform: translate(-0.75rem, -50%);
    opacity: 0;
  }
  to {
    transform: translate(0.25rem, -50%);
    opacity: 1;
  }
}
@keyframes tooltip-caret-slide-right {
  from {
    opacity: 0;
  }
  50% {
    transform: translate(-0.05rem, -50%);
    opacity: 0;
  }
  to {
    transform: translate(-0.3rem, -50%);
    opacity: 1;
  }
}

/**
 * Accessibility & User interaction
 */
[aria-controls] {
  cursor: pointer;
}

[aria-disabled="true"],
[disabled] {
  cursor: not-allowed;
}

[aria-hidden="false"][hidden] {
  display: initial;
}

[aria-hidden="false"][hidden]:not(:focus) {
  clip: rect(0, 0, 0, 0);
  position: absolute;
}

a,
area,
button,
input,
label,
select,
summary,
textarea,
[tabindex] {
  -ms-touch-action: manipulation;
}

[dir="rtl"] {
  direction: rtl;
}

/**
* Reduce Motion Features
*/
@media (prefers-reduced-motion: reduce) {
  *:not([aria-busy="true"]),
  :not([aria-busy="true"])::before,
  :not([aria-busy="true"])::after {
    background-attachment: initial !important;
    animation-duration: 1ms !important;
    animation-delay: -1ms !important;
    animation-iteration-count: 1 !important;
    scroll-behavior: auto !important;
    transition-delay: 0s !important;
    transition-duration: 0s !important;
  }
}

/*# sourceMappingURL=custom.css.map */
`,IMMERSIVE_TRANSLATE_COMMON_CSS:`#mount#mount {
  /* --primary: rgb(227, 59, 126); */
  --primary: #ea4c89;
  --primary-hover: #f082ac;
}

li.select-link.select-link:hover > ul {
  display: none;
}
li.select-link.select-link > ul {
  display: none;
}
li.select-link.select-link a:focus ~ ul {
  display: none;
}

li.select-link.select-link a:active ~ ul {
  display: none;
}
li.select-link-active.select-link-active > ul {
  display: flex;
}
li.select-link-active.select-link-active:hover > ul {
  display: flex;
}

li.select-link-active.select-link-active a:focus ~ ul {
  display: flex;
}

li.select-link-active.select-link-active a:active ~ ul {
  display: flex;
}
ul.select-link-ul.select-link-ul {
  right: 0px;
  left: auto;
}

a.select-link-selected {
  background-color: var(--primary-focus);
}
.immersive-translate-no-select {
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none;
}

/* li[role="list"].no-arrow > a::after { */
/*   background-image: none; */
/*   width: 0; */
/*   color: var(--color); */
/* } */
li[role="list"].no-arrow {
  margin-left: 8px;
  padding-right: 0;
}
li[role="list"] > a::after {
  -webkit-margin-start: 0.2rem;
  margin-inline-start: 0.2rem;
}

li[role="list"].no-arrow > a,
li[role="list"].no-arrow > a:link,
li[role="list"].no-arrow > a:visited {
  color: var(--secondary);
}

select.min-select {
  --form-element-spacing-horizontal: 0;
  margin-bottom: 0;
  max-width: 128px;
  color: var(--primary);
  font-size: 14px;
  border: none;
  padding: 0;
  padding-right: 20px;
  background-position: center right 0;
  background-size: 16px auto;
  text-overflow: ellipsis;
  text-align: right;
  color: var(--color);
}
select.min-select-secondary {
  color: var(--color);
}
select.min-select:focus {
  outline: none;
  border: none;
  --box-shadow: none;
}
select.min-select-no-arrow {
  background-image: none;
  padding-right: 0;
}

select.min-select-left {
  padding-right: 0px;
  /* padding-left: 24px; */
  /* background-position: center left 0; */
  text-overflow: ellipsis;
  text-align: left;
}

.muted {
  color: var(--muted-color);
}

.select.button-select {
  --background-color: var(--secondary-hover);
  --border-color: var(--secondary-hover);
  --color: var(--secondary-inverse);
  cursor: pointer;
  --box-shadow: var(--button-box-shadow, 0 0 0 rgba(0, 0, 0, 0));
  padding: var(--form-element-spacing-vertical)
    var(--form-element-spacing-horizontal);
  border: var(--border-width) solid var(--border-color);
  border-radius: var(--border-radius);
  outline: none;
  background-color: var(--background-color);
  box-shadow: var(--box-shadow);
  color: var(--color);
  font-weight: var(--font-weight);
  font-size: 16px;
  line-height: var(--line-height);
  text-align: center;
  cursor: pointer;
  transition: background-color var(--transition), border-color var(--transition),
    color var(--transition), box-shadow var(--transition);
  -webkit-appearance: button;
  margin: 0;
  margin-bottom: 0px;
  overflow: visible;
  font-family: inherit;
  text-transform: none;
}
`,IMMERSIVE_TRANSLATE_POPUP_CSS:`html {
  font-size: 17px;
  --font-size: 17px;
}

body {
  padding: 0;
  margin: 0;
  min-width: 250px;
  border-radius: 10px;
}

#mount#mount {
  --font-family: system-ui, -apple-system, "Segoe UI", "Roboto", "Ubuntu",
    "Cantarell", "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Noto Color Emoji";
  --line-height: 1.5;
  --font-weight: 400;
  --font-size: 16px;
  --border-radius: 4px;
  --border-width: 1px;
  --outline-width: 3px;
  --spacing: 16px;
  --typography-spacing-vertical: 24px;
  --block-spacing-vertical: calc(var(--spacing) * 2);
  --block-spacing-horizontal: var(--spacing);
  --grid-spacing-vertical: 0;
  --grid-spacing-horizontal: var(--spacing);
  --form-element-spacing-vertical: 12px;
  --form-element-spacing-horizontal: 16px;
  --nav-element-spacing-vertical: 16px;
  --nav-element-spacing-horizontal: 8px;
  --nav-link-spacing-vertical: 8px;
  --nav-link-spacing-horizontal: 8px;
  --form-label-font-weight: var(--font-weight);
  --transition: 0.2s ease-in-out;
  --modal-overlay-backdrop-filter: blur(4px);
}
#mount {
  min-width: 250px;
}
.main-button {
  font-size: 14px;
  vertical-align: middle;
}

.pt-4 {
  padding-top: 24px;
}
.p-2 {
  padding: 8px;
}
.pl-5 {
  padding-left: 48px;
}
.p-0 {
  padding: 0;
}
.pl-2 {
  padding-left: 8px;
}
.pl-4 {
  padding-left: 24px;
}
.pt-2 {
  padding-top: 8px;
}

.pb-2 {
  padding-bottom: 8px;
}

.pr-5 {
  padding-right: 48px;
}
.text-sm {
  font-size: 14px;
}

.flex {
  display: flex;
}
.justify-between {
  justify-content: space-between;
}

.mb-2 {
  margin-bottom: 8px;
}
.inline-block {
  display: inline-block;
}

.py-2 {
  padding-top: 8px;
  padding-bottom: 8px;
}

.mt-2 {
  margin-top: 8px;
}
.mt-0 {
  margin-top: 0;
}

.mb-1 {
  margin-bottom: 4px;
}
.ml-4 {
  margin-left: 24px;
}
.ml-3 {
  margin-left: 16px;
}
.ml-2 {
  margin-left: 8px;
}
.mr-1 {
  margin-right: 4px;
}
.pl-3 {
  padding-left: 12px;
}
.pr-3 {
  padding-right: 12px;
}
.p-3 {
  padding: 12px;
}
.mt-4 {
  margin-top: 24px;
}
.py-0 {
  padding-top: 0;
  padding-bottom: 0;
}

.left-auto {
  left: auto !important;
}

.max-h-28 {
  max-height: 112px;
}
.max-h-30 {
  max-height: 120px;
}
.overflow-y-scroll {
  overflow-y: scroll;
}
.text-xs {
  font-size: 12px;
}

.flex-1 {
  flex: 1;
}
.flex-3 {
  flex: 3;
}
.flex-4 {
  flex: 4;
}
.flex-2 {
  flex: 2;
}
.mt-3 {
  margin-top: 16px;
}
.items-center {
  align-items: center;
}
.items-end {
  align-items: flex-end;
}
.items-baseline {
  align-items: baseline;
}

.my-5 {
  margin-top: 48px;
  margin-bottom: 48px;
}
.my-4 {
  margin-top: 24px;
  margin-bottom: 24px;
}
.my-3 {
  margin-top: 16px;
  margin-bottom: 16px;
}
.pt-3 {
  padding-top: 12px;
}
.px-3 {
  padding-left: 12px;
  padding-right: 12px;
}
.pt-2 {
  padding-top: 8px;
}
.px-2 {
  padding-left: 8px;
  padding-right: 8px;
}
.pt-1 {
  padding-top: 4px;
}
.px-1 {
  padding-left: 4px;
  padding-right: 4px;
}
.pb-2 {
  padding-bottom: 8px;
}
.justify-end {
  justify-content: flex-end;
}
.w-auto {
  width: auto;
}
`,IMMERSIVE_TRANSLATE_POPUP_HTML:`<style>
  html {
    font-size: 17px;
  }
  .immersive-translate-popup-container {
    position: fixed;
    top: 100px;
    right: 8px;
    padding: 0;
    z-index: 999999;
  }
  .immersive-translate-popup-btn {
    background-color: #ea4c89;
    font-size: 18px;
    width: 36px;
    height: 36px;
    border-radius: 9999999px;
    border: 1px solid #ccc;
  }
  .immersive-translate-popup-btn > svg {
    background-color: #ea4c89;
  }
  #mount#mount {
    display: none;
    min-width: 250px;
    height: auto;
    border: 1px solid #ccc;
    border-radius: 5px;
    --font-size: 17px;
    font-size: 17px;
  }
</style>

<div
  id="immersive-translate-popup-container"
  class="immersive-translate-popup-container"
>
  <button
    id="immersive-translate-popup-btn"
    class="immersive-translate-popup-btn"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
    >
      <path fill="none" d="M0 0h24v24H0z" />
      <path
        d="M5 15v2a2 2 0 0 0 1.85 1.995L7 19h3v2H7a4 4 0 0 1-4-4v-2h2zm13-5l4.4 11h-2.155l-1.201-3h-4.09l-1.199 3h-2.154L16 10h2zm-1 2.885L15.753 16h2.492L17 12.885zM8 2v2h4v7H8v3H6v-3H2V4h4V2h2zm9 1a4 4 0 0 1 4 4v2h-2V7a2 2 0 0 0-2-2h-3V3h3zM6 6H4v3h2V6zm4 0H8v3h2V6z"
        fill="rgba(255,255,255,1)"
      />
    </svg>
  </button>
  <div class="immersive-translate-popup-mount" id="mount"></div>
</div>
`,IMMERSIVE_TRANSLATE_POPUP_JS:`const immersivePopupRoot = document.getElementById("immersive-translate-popup");
const shadowRoot = immersivePopupRoot.shadowRoot;

const root = shadowRoot.getElementById("immersive-translate-popup-container");

const btn = root.querySelector("#immersive-translate-popup-btn");

// btn.addEventListener("click", handleButtonClick);

const mountContainer = root.querySelector("#mount");

function showButton() {
  // hidden mount container, and show btn
  mountContainer.style.display = "none";
  btn.style.display = "block";
}

document.addEventListener("click", (e) => {
  if (e.target.id !== "immersive-translate-popup") {
    showButton();
  }
});
`,OPTIONS_URL:"https://immersive-translate.owenyoung.com/options/",MOCK:"0",DEBUG:"0",IMMERSIVE_TRANSLATE_USERSCRIPT:"1"};var Og=ar(2),tr=ar(3);function ar(u){if(typeof u!="number"||Number.isNaN(u)||u<1||u===Number.POSITIVE_INFINITY)throw new Error("`"+u+"` is not a valid argument for `n-gram`");return e;function e(t){let a=[];if(t==null)return a;let n=typeof t.slice=="function"?t:String(t),r=n.length-u+1;if(r<1)return a;for(;r--;)a[r]=n.slice(r,r+u);return a}}var A4=/\s+/g,w4=/[\t\n\v\f\r ]+/g;function nr(u,e){e?typeof e=="string"&&(e={style:e}):e={};let t=e.preserveLineEndings?T4:v4;return String(u).replace(e.style==="html"?w4:A4,e.trim?F4(t):t)}function T4(u){let e=/\r?\n|\r/.exec(u);return e?e[0]:" "}function v4(){return" "}function F4(u){return e;function e(t,a,n){return a===0||a+t.length===n.length?"":u(t)}}var rr={}.hasOwnProperty;function S4(u){return u==null?"":nr(String(u).replace(/[\u0021-\u0040]+/g," ")).trim().toLowerCase()}function B4(u){return tr(" "+S4(u)+" ")}function L4(u){let e=B4(u),t={},a=-1;for(;++a<e.length;)rr.call(t,e[a])?t[e[a]]++:t[e[a]]=1;return t}function or(u){let e=L4(u),t=[],a;for(a in e)rr.call(e,a)&&t.push([a,e[a]]);return t.sort(_4),t}function _4(u,e){return u[1]-e[1]}var M4={cmn:/[\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u3005\u3007\u3021-\u3029\u3038-\u303B\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFA6D\uFA70-\uFAD9]|\uD81B[\uDFE2\uDFE3\uDFF0\uDFF1]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883\uD885-\uD887][\uDC00-\uDFFF]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF39\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A\uDF50-\uDFFF]|\uD888[\uDC00-\uDFAF]/g,Latin:/[A-Za-z\u00AA\u00BA\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02B8\u02E0-\u02E4\u1D00-\u1D25\u1D2C-\u1D5C\u1D62-\u1D65\u1D6B-\u1D77\u1D79-\u1DBE\u1E00-\u1EFF\u2071\u207F\u2090-\u209C\u212A\u212B\u2132\u214E\u2160-\u2188\u2C60-\u2C7F\uA722-\uA787\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA7FF\uAB30-\uAB5A\uAB5C-\uAB64\uAB66-\uAB69\uFB00-\uFB06\uFF21-\uFF3A\uFF41-\uFF5A]|\uD801[\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD837[\uDF00-\uDF1E\uDF25-\uDF2A]/g,Cyrillic:/[\u0400-\u0484\u0487-\u052F\u1C80-\u1C88\u1D2B\u1D78\u2DE0-\u2DFF\uA640-\uA69F\uFE2E\uFE2F]|\uD838[\uDC30-\uDC6D\uDC8F]/g,Arabic:/[\u0600-\u0604\u0606-\u060B\u060D-\u061A\u061C-\u061E\u0620-\u063F\u0641-\u064A\u0656-\u066F\u0671-\u06DC\u06DE-\u06FF\u0750-\u077F\u0870-\u088E\u0890\u0891\u0898-\u08E1\u08E3-\u08FF\uFB50-\uFBC2\uFBD3-\uFD3D\uFD40-\uFD8F\uFD92-\uFDC7\uFDCF\uFDF0-\uFDFF\uFE70-\uFE74\uFE76-\uFEFC]|\uD803[\uDE60-\uDE7E\uDEFD-\uDEFF]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB\uDEF0\uDEF1]/g,ben:/[\u0980-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09FE]/g,Devanagari:/[\u0900-\u0950\u0955-\u0963\u0966-\u097F\uA8E0-\uA8FF]|\uD806[\uDF00-\uDF09]/g,jpn:/[\u3041-\u3096\u309D-\u309F]|\uD82C[\uDC01-\uDD1F\uDD32\uDD50-\uDD52]|\uD83C\uDE00|[\u30A1-\u30FA\u30FD-\u30FF\u31F0-\u31FF\u32D0-\u32FE\u3300-\u3357\uFF66-\uFF6F\uFF71-\uFF9D]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00\uDD20-\uDD22\uDD55\uDD64-\uDD67]|[㐀-䶵一-龯]/g,jav:/[\uA980-\uA9CD\uA9D0-\uA9D9\uA9DE\uA9DF]/g,kor:/[\u1100-\u11FF\u302E\u302F\u3131-\u318E\u3200-\u321E\u3260-\u327E\uA960-\uA97C\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uFFA0-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/g,tel:/[\u0C00-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3C-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C5D\u0C60-\u0C63\u0C66-\u0C6F\u0C77-\u0C7F]/g,tam:/[\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BFA]|\uD807[\uDFC0-\uDFF1\uDFFF]/g,guj:/[\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AF1\u0AF9-\u0AFF]/g,kan:/[\u0C80-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDD\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1-\u0CF3]/g,mal:/[\u0D00-\u0D0C\u0D0E-\u0D10\u0D12-\u0D44\u0D46-\u0D48\u0D4A-\u0D4F\u0D54-\u0D63\u0D66-\u0D7F]/g,mya:/[\u1000-\u109F\uA9E0-\uA9FE\uAA60-\uAA7F]/g,pan:/[\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A76]/g,amh:/[\u1200-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u137C\u1380-\u1399\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E]|\uD839[\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]/g,tha:/[\u0E01-\u0E3A\u0E40-\u0E5B]/g,sin:/[\u0D81-\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2-\u0DF4]|\uD804[\uDDE1-\uDDF4]/g,ell:/[\u0370-\u0373\u0375-\u0377\u037A-\u037D\u037F\u0384\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03E1\u03F0-\u03FF\u1D26-\u1D2A\u1D5D-\u1D61\u1D66-\u1D6A\u1DBF\u1F00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FC4\u1FC6-\u1FD3\u1FD6-\u1FDB\u1FDD-\u1FEF\u1FF2-\u1FF4\u1FF6-\u1FFE\u2126\uAB65]|\uD800[\uDD40-\uDD8E\uDDA0]|\uD834[\uDE00-\uDE45]/g},aa={Latin:{spa:" de|de |os | la| a |la | y |\xF3n |i\xF3n|es |ere|rec|ien|o a|der|ci\xF3|a p|cho|ech|en |ent|a l|aci|e d|el |ona|na | co|as |al |da | to|ene|e l| en| el| pe|nte|tod|ho | su|per|ad | ti|a t|ers|tie| se|rso| pr|son|e s|te |oda|cia|n d|o d|dad|ida| in|ne | es|ion|cio|s d|con|est|a e| po|men| li|res|nci|su |to |tra| re|n e| lo|tad| na|los|a s| o |ia |que| pa|r\xE1 |pro| un|s y|ual|s e|lib|nac|do |ra |er |nal|ue | qu|e e|a d|ar |nes|ica|a c|sta|ser|or |ter|se |por|cci|io |des|ado|les|one|a a|del|l d|ndi| so| cu|s p|ale|s n|ame|par|ici|oci|una|ber|s t|rta|com| di|e a|imi|o s|e c|ert|o e|dos|las|o p|ant|dic|nto| al|ara|ibe|enc|cas| as|e p|ten|ali|o t|soc|y l|n c|s l|l t|pre|nta|so |tos|y a|ria|n t|die|a u| fu|no |l p|ial|qui|dis|s o|hos|gua|igu| ig| ca|sar| ma|l e| ac|tiv|s a|re |nad|vid|era| tr|ier|cua|n p|cla|ade|bre|s s|esa|ntr|ecc|a i| le|lid|das|d d|ido|ari|ind|ada|nda|fun|mie|ca |tic|eli|ta |y d|nid|e i|n l|ios|o y|esp|iva|y e|mat|bli|r a|dr\xE1|tri|cti|tal|rim|ont|er\xE1|us |sus|end|pen|tor|ito|ond|ori|uie|lig|n a|ist|rac|lar|rse|tar|mo |omo|ibr|odo|edi|med| me|nio|a y|eda|isf|lo |aso|l m|ias|ico|lic|ple|ste|act|tec|ote|rot|ele|ura| ni|ie |adi|u p|seg|s i|un |und|a n|lqu|alq|o i|inc|sti| si|n s|ern",eng:"the| th| an|he |nd |ion|and| to|to |tio| of|on |of | in|al |ati|or |ght|igh|rig| ri|ne |ent|one|ll |is |as |ver|ed | be|e r|in |t t|all|eve|ht | or|ery|s t|ty | ev|e h|yon| ha|ryo|e a|be |his| fr|ng |d t|has| sh|ing| hi|sha| pr| co| re|hal|nal|y a|s a|n t|ce |men|ree|fre|e s|l b|nat|for|ts |nt |n a|ity|ry |her|nce|ect|d i| pe|pro|n o|cti| fo|e e|ly |es | no|ona|ny |any|er |re |f t|e o| de|s o| wi|ter|nte|e i|ons| en| ar|res|ers|y t|per|d f| a | on|ith|l a|e t|oci|soc|lit| as| se|dom|edo|eed|nti|s e|t o|oth|wit| di|equ|t a|ted|st |y o|int|e p| ma| so| na|l o|e c|ch |d a|enc|th |are|ns |ic | un| fu|tat|ial|cia| ac|hts|nit|qua| eq| al|om |e w|d o|f h|ali|ote|n e| wh|r t|sta|ge |thi|o a|tit|ual|an |te |ess| ch|le |ary|e f|by | by|y i|tec|uni|o t|o o| li|no | la|s r| su|inc|led|rot|con| pu| he|ere|imi|r a|ntr| st| ot|eli|age|dis|s d|tle|itl|hou|son|duc|edu| wo|ate|ble|ces|at | at| fa|com|ive|o s|eme|o e|aw |law|tra|und|pen|nde|unt|oun|n s|s f|f a|tho|ms | is|act|cie|cat|uca| ed|anc|wor|ral|t i| me|o f|ily|pri|ren|ose|s c|en |d n|l c|ful|rar|nta|nst| ag|l p|min|din|sec|y e| tr|rso|ich|hic|whi|cou|ern|uri|r o|tic|iti|igi|lig|rat|rth|t f|oms|rit|d r|ee |e b|era|rou|se |ay |rs | ho|abl|e u",por:"de | de| se|\xE3o |os |to |em | e |do |o d| di|er |ito|eit|ser|ent|\xE7\xE3o| a |dir|ire|rei|o s|ade|dad|uma|as |no |e d| to|nte| co|o t|tod| ou|men|que|s e|man| pr| in| qu|es | te|hum|odo|e a|da | hu|ano|te |al |tem|o e|s d|ida|m d| pe| re|o a|ou |r h|e s|cia|a e| li|o p| es|res| do| da| \xE0 |ual| em| su|a\xE7\xE3|dos|a p|tra|est|ia |con|pro|ar |e p|is | na|r\xE1 |qua|a d| pa|com|ais|o c|ame|er\xE1| po|uer|sta|ber|ter| o |ess|ra |e e|das|o \xE0|nto|nal|o o|a c|ido|rda|erd| as|nci|sua|ona|des|ibe|lib|e t|ado|s n|ua |s t|ue | so|ica|ma |lqu|alq|tos|m s|a l|per|ada|oci|soc|cio|a n|par|aci|s a|pre|ont|m o|ura|a s| um|ion|e o|or |e r|pel|nta|ntr|a i|io |nac|\xEAnc|str|ali|ria|nst| tr|a q|int|o n|a o|ca |ela|u\xE7\xE3|lid|e l| at|sen|ese|r d|s p|egu|seg|vid|pri|sso|\xE9m |ime|tic|dis|ra\xE7|eci|ara| ca|nid|tru|\xF5es|ass|seu|por|a a|m p| ex|so |r i|e\xE7\xE3|te\xE7|ote|rot| le| ma|ing|a t|ran|era|rio|l d|eli|\xE7a |sti| ne|cid|ern|utr|out|r e|e c|tad|gua|igu| ig| os|s o|ru\xE7|ins|\xE7\xF5e|ios| fa|e n|sse| no|re |art|r p|rar|u p|inc|lei|cas|ico|u\xE9m|gu\xE9|ngu|nin| ni|gur|la |pen|n\xE7a|na |i\xE7\xE3|i\xE3o|cie|ist|sem|ta |ele|e f|om |tro| ao|rel|m a|s s|tar|eda|ied|uni|e m|s i|a f|ias| cu| ac|r a|\xE1 a|rem|ei |omo|rec|for|s f|esc|ant|\xE0 s| vi|o q|ver|a u|nda|und|fun",ind:"an |ang|ng | da|ak | pe|ata| se| ke| me|dan| di| be|ber|kan|ran|hak|per|yan| ya|nga|nya|gan| at|ara| ha|eng|asa|ora|men|n p|n k|erh|rha|n d|ya |ap |at |as |tan|n b|ala|a d| or|a s|san|tas|eti|uk |pen|g b|set|ntu|n y|tia|iap|k m|eba|aan| un|n s|tuk|k a|p o|am |lam| ma|unt| de|ter|bas|beb|dak|end|i d|pun|mem|tau|dal|ama|keb|aka|ika|n m| ba|di |ma | sa|den|au |nda|n h|eri| ti|ela|k d|un |n a|ebe|ana|ah |ra |ida|uka| te|al |ada|ri |ole|tid|ngg|lak|leh|dap|a p|dil|g d|ena|eh |gar|na |ert|apa|um |tu |atu|a m|sam|ila|har|n t|asi|ban|erl|t d|bat|uat|ta |lan|adi|h d|neg| ne|kum|mas|nan|pat|aha| in|l d|emp|sem|rus|sua|ser|uan|era|ari|erb|kat|man|a b|g s|rta|ai |nny|n u|ung|ndi|han|uku|huk| hu|sa |ers|in | la|ka | su|ann|car|kes|aku|dip|i s|a a|erk|n i|lai|rga|aru|k h|i m|rka|a u|us |nak|emb|gga|nta|iba| pu|ind|s p|ent|mel|ina|min|ian|dar|ni |rma|lua|rik|ndu|lin|sia|rbu|g p|k s|da |aya|ese|u d|ega|nas|ar |ipe|yar|sya|ik |aga| ta|ain|ua |arg|uar|iny|pem|ut |si |dun|eor|seo|rak|ngs|ami|kel|ini|g t|dik|mer|emu|aks|rat|uru|ewa|il |enu|any|kep|pel|asu|rli|ia |dir|jam|mba|mat|pan|g m|ses|sar|das|kuk|bol|ili|u k|gsa|u p|a k|ern|ant|raa|t p|ema|mua|idi|did|t s|i k|rin|erm|esu|ger|elu|nja|enj|ga |dit",fra:" de|es |de |ion|nt |tio|et |ne |on | et|ent|le |oit|e d| la|e p|la |it | \xE0 |t d|roi|dro| dr| le|t\xE9 |e s|ati|te |re | to|s d|men|tou|e l|ns | pe| co|son|que| au| so|e a|onn|out| un| qu| sa| pr|ute|eme| l\u2019|t \xE0| a |e e|con|des| pa|ue |ers|e c| li|a d|per|ont|s e|t l|les|ts |tre|s l|ant| ou|cti|rso|ou |ce |ux |\xE0 l|nne|ons|it\xE9|en |un | en|er |une|n d|sa |lle| in|nte|e t| se|lib|res|a l|ire| d\u2019| re|\xE9 d|nat|iqu|ur |r l|t a|s s|aux|par|nal|a p|ans|dan|qui|t p| d\xE9|pro|s p|air| ne| fo|ert|s a|nce|au |ui |ect|du |ond|ale|lit| po|san| ch|\xE9s | na|us |com|our|ali|tra| ce|al |e o|e n|rt\xE9|ber|ibe|tes|r d|e r|its| di|\xEAtr|pou|\xE9t\xE9|s c|\xE0 u|ell|int|fon|oci|soc|ut |ter| da|aut|ien|rai| do|iss|s n| ma|bli|ge |est|s o| du|ona|n p|pri|rs |\xE9ga| \xEAt|ous|ens|ar |age|s t| su|cia|u d|cun|rat| es|ir |n c|e m| \xE9t|t \xEA|a c| ac|ote|n t|ein| tr|a s|ndi|e q|sur|\xE9e |ser|l n| pl|anc|lig|t s|n e|s i|t e| \xE9g|ain|omm|act|ntr|tec|gal|ul | nu| vi|me |nda|ind|soi|st | te|pay|tat|era|il |rel|n a|dis|n s|pr\xE9|peu|rit|\xE9 e|t \xE9|bre|sen|ill|l\u2019a|d\u2019a| mo|ass|lic|art| pu|abl|nta|t c|rot| on| lo|ure|l\u2019e|ava|ten|nul|ivi|t i|ess|ys |ays| fa|ine|eur|r\xE9s|cla|t\xE9s|oir|eut|e f|utr|doi|ibr|ais|ins|\xE9ra|\u2019en|i\xE9t|l e|s \xE9|nt\xE9| r\xE9|ssi| as|nse|ces|\xE9 a",deu:"en |er |der|ein| un|nd |und|ung|cht|ich| de|sch|ng | ge|ine|ech|gen|rec|che|ie | re|eit| au|ht |die| di| ha|ch | da|ver| zu|lic|t d|in |auf| ei| in| be|hen|nde|n d|uf |ede| ve|it |ten|n s|sei|at |jed| je| se|and|rei|s r|den|ter|ne |hat|t a|r h|zu |das|ode| od|as |es | an|fre|nge| we|n u|run| fr|ere|e u|lle|ner|nte|hei|ese| so|rde|wer|ige| al|ers|n g|hte|d d| st|n j|lei|all|n a|nen|ege|ent|bei|g d|erd|t u|ren|nsc|chu| gr|kei|ens|le |ben|aft|haf|cha|tli|ges|e s| si|men| vo|lun|em |r s|ion|te |len|gru|gun|tig|unt|uch|spr|n e|ft |ei |e f| wi| sc|r d|n n|geh|r g|dar|sta|erk| er|r e|sen|eic|gle| gl|lie|e e|tz |fen|n i|nie|f g|t w|des|chl|ite|ihe|eih|ies|ruc|st |ist|n w|h a|n z|e a| ni|ang|rf |arf|gem|ale|ati|on |he |t s|ach| na|end|n o|pru|ans|sse|ern|aat|taa|ehe|e d|hli|hre|int|tio|her|nsp|de |mei| ar|r a|ffe|e b|wie|erf|abe|hab|ndl|n v|sic|t i|han|ema|nat|ber|ied|geg|d s|nun|d f|ind| me|gke|igk|ie\xDF| fa|igu|hul|r v|dig|rch|urc|dur| du|utz|hut|tra|aus|alt|bes|str|ell|ste|ger|r o|esc|e g|rbe|arb|ohn|r b|mit|d g|r w|ntl|sow|n h|nne|etz|raf|dlu| ih|lte|man|iem|erh|eru| is|dem|lan|rt |son|isc|eli|rel|n r|e i|rli|r i| mi|e m|ild|bil| bi|eme| en|ins|f\xFCr| f\xFC|gel|\xF6ff| \xF6f|owi|ill|wil|e v|ric|f e",jav:"ng |an | ka|ang|ing|kan| sa|ak |lan| la|hak| pa| ha|ara|ne |abe| in|n k|ngg|ong|ane|nga|ant|won|uwo| an| uw|nin|ata|n u|en |ra |tan| da|ran|ana| ma|nth|ake|ben|beb|hi |ke |sab|nda| ng|adi|thi|nan|a k| ba|san|asa|ni |e h|e k|g k| ut|pan|awa| be|eba|gan|g p|dan| wa|bas|aka|dha|yan|sa |arb|man| di|wa |g d| na|g n|ban| tu|n s|ung|wen|g s|rbe|dar|dak|di |g u|ora|aya|be |ah |a s|eni| or|han|as | pr|a n|na |iya|a a|kar|at |a l|mar|uwe|duw|uta|und|n p|asi|pa | si|ala|n n| un|kab|oni|ya |i h|gar|g b|yat|tum|ta |n m|i k|apa|taw| li|ani| ke|al |ka |kal|ngk|ega| ne|nal|n i|g a|ggo|ina|we |ena|dad|iba|awi|aga|a p| ta|sar|adh|awe|and|uju|ind|min|sin|ndu|uwa|gge|n l|ggu|ngs|n b|a b|pra|iji|n a|ha | bi|kat|go | ku|e p|ron|kak|ngu|a u|gsa|war|nya|g t|pad|bis|k b|i w|ae |wae| nd|ali|a m|er |sak|e s|ku |liy|ama|i l|eh |isa|arg|n t|a d|kap|i s|ayo|gay| pe|ndh|bad|pri|neg|tow|uto|eda|bed|il |ih | ik|ur |k k|rta|art|i p|rga|lak|ami|ro |aro|yom|r k|e d|a w|kon|rib|eng|ger|g l|ras|dil| ti|k l|rap|mra|uma| pi|k h|n d|gaw|wat|ga |k n|ar |per| we|oma|k p|jro|ajr|saj|ase|ini|ken|saw|ona|nas|kas|h k|i t| um|tin|wo | me|aba|rak|pag|yar|sya|t k| te| mu|ngl| ni|i b|men|ate|a i|aku|ebu|a t| du|g m|owo|mat| lu|amp",vie:"ng |\u0323c |\u0301c | qu|a\u0300 | th|nh | ng|\u0323i |\u0300n |va\u0300| va| nh|uy\xEA| ph|quy| ca|\xEA\u0300n|y\xEA\u0300|\u0300nh|\u0300i |\u0323t | ch|o\u0301 | tr|ng\u01B0|i n| gi|g\u01B0\u01A1|\u01A1\u0300i|\u01B0\u01A1\u0300|\u0301t | co|\u01B0\u01A1\u0323| cu|a\u0301c|\u01B0\u0323 |\u01A1\u0323c| kh| \u0111\u01B0|\u0111\u01B0\u01A1| t\u01B0|co\u0301| ha|\xF4ng|c t| \u0111\xEA|n t|i \u0111|i\u0300n|\u0300u |ca\u0301|gia|\u0301i |o\u0323i|mo\u0323| mo|\xEA\u0300u|i\xEA\u0323|\u0111\xEA\u0300|u c|nh\u01B0|pha| ba| bi|\xE2\u0301t|\u0309a |u\u0309a|cu\u0309|h\xF4n| \u0111\xF4|g t|\u0301 q|\u0303ng| ti|t\u01B0\u0323|t c|\u0323n | la|n \u0111|n c|n n|hi\xEA|ch |ay |hay| vi|\xE2n | \u0111i| na|ba\u0309| ho|do | do| t\xF4| hi|\xF4\u0323i|ha\u0301|i\u0323 |na\u0300|\u0300 t|\u01A1\u0301i|h\xE2n| m\xF4|\u0301p |a\u0300n|\u0323 d|\u0301ch|\u0323p |\u0300o |a\u0300o|kh\xF4|\u0301n |\xF4\u0323t|m\xF4\u0323| h\xF4|ia |\xF4\u0301c|c h|h\u01B0\u0303|i v|g n|\u0301ng|u\xF4\u0301|qu\xF4|h t|\xF4n |\xEAn |n v|nh\xE2|\u0323 t| b\xE2|i c|g v|\u0309ng|i\xEA\u0301|c c|\xE2\u0323t|th\u01B0|h\u01B0 |\u01B0\u01A1\u0301|\u0309n | v\u01A1| c\xF4|c \u0111| \u0111o| s\u01B0|t t|\xF4\u0323c|\u01B0\u0303n|v\u01A1\u0301| v\xEA|a\u0309 |\u0323ng|g \u0111|\u0309o |a\u0309o|u\xE2\u0323| \u0111a|bi\u0323|la\u0300|s\u01B0\u0323|b\xE2\u0301|ha\u0300|h\xF4\u0323|i t|a\u0309n|h\u01B0\u01A1|\u0300ng|tro|\u0309m |o v| mi|\xEA\u0309 |u\u0323c|i h|\u01B0\u0301c|a\u0301p|g c|\u0303 h|ia\u0301|n b|\u0309i |a m|h c|c\xF4n|\xEA\u0323n|\u01A1\u0301c|ha\u0323|\u0111\xF4\u0323| du| c\u01B0|a c|n h|tha|a\u0303 | xa|\u0301o |a\u0301o|i\u0301n|\u0300y |g b| h\u01B0|g h|ong|ron|\u0300 c|cho|\u0300 n|mi\u0300|\u01B0\u0323c|h v|c b| lu|i b|\xEA\u0323 |ai |\xEA\u0301 |\u0323 c|xa\u0303|kha|c q|i\xEA\u0309|t\xF4\u0323|\xF4\u0301i|\u0111\xF4\u0301|a\u0301 |hoa|o h|h \u0111|ca\u0309|n l|ho\u0323|ti\xEA|y t|\u0309 c|a\u0323i|a\u0301n|\u0300 \u0111|oa\u0300|y \u0111|chi|\u0309 n|ph\xE2|\xEA\u0300 |thu|i\xEAn|du\u0323|o c|i m|lu\xE2|c p|\xF4\u0301n|c l|\u0301 c|u\u0303n|cu\u0303|c g|c n|qua|n g|c m|o n|a\u0309i|ha\u0309|\u0301 t|ho |v\xEA\u0300| t\xE2| h\u01A1|o t|\u01A1\u0309 |h\u01B0\u0301|hi\u0300|vi\xEA|\u0300m |\u0309 t|\u0111o\u0301|th\xF4|\u01B0\u0301 |c\u01B0\u0301|hi\u0301|\u0301nh|a\u0300y|\u01A1\u0309n|\u01B0\u01A1\u0309| b\u0103|tri| ta|m v|c v|\u01A1\u0323p|h\u01A1\u0323|h m| n\u01B0|\xEA\u0301t|thi|\u0103\u0323c|ngh|uy ",ita:" di|to | in|ion|la | de|di |re |e d|ne | e |zio|rit|a d|one|o d|ni |le |lla|itt|ess| al|iri|dir|tto|ent|ell|i i|del|ndi|ere|ind|o a| co|te |t\xE0 |ti |a s|uo |e e|gni|azi| pr|idu|ivi|duo|vid|div|ogn| og| es|i e| ha|all|ale|nte|e a|men|ser| su| ne|e l|za |i d|per|a p|ha | pe| un|con|no |sse|li |e i| o | so| li| la|pro|ia |o i|e p|o s|i s|in |ato|o h|na |e s|a l|e o|nza|ali|tti|o p|ta |so |ber|ibe|lib|o e|un | a | ri|ua |il | il|nto|pri|el | po|una|are|ame| qu|a c|ro |oni|nel|e n| ad|ual|gli|sua|ond| re|a a|i c|ri |o o|sta|ita|i o| le|ad |i a|ers|enz|ssi|\xE0 e|it\xE0|gua|i p|e c|io | pa|ter|soc|nal|ona|naz|ist|cia|rso|ver|a e|i r|tat|lle|sia| si|rio|tra|che| se|rt\xE0|ert|anz|eri|tut|\xE0 d|he | da|al |ant|qua|on |ari|o c| st|oci|er |dis|tri|si |ed | ed|ono| tu|ei |dei|uzi|com|att|a n|opr|rop|par|nes|i l|zza|ese|res|ien|son| eg|n c|ont|nti|pos|int|ico|r\xE0 |sun|ial|lit|sen|pre|tta|dev|nit|era|eve|ll |l i| l |nda|ina|non| no|o n|ria|str|d a|art|se |ssu|ica|raz|ett|sci|gio|ati|egu| na|i u|utt|ve | ma|do |e r|ssa|sa |a f|n p|fon| ch|d u|rim| fo|a t| sc|tr\xE0|otr|pot|n i| cu|l p|ra |ezz|a o|ini|sso|dic|ltr|uni|cie| ra|i n|ruz|tru|ste| is|der|l m|a r|pie|lia|est|dal|nta| at|tal|ntr| pu|nno|ann|ten|vit|a v",tur:" ve| ha|ve |ir |ler|hak| he|her|in |lar|r h|bir|ya |er |ak |kk\u0131|akk|eti| ka| bi|eya|an |eri|iye|yet|ara|ek | ol|de |vey|\u0131n |\u0131r |nda|ar\u0131|esi|\u0131n\u0131|d\u0131r| ta|tle|e h|as\u0131|etl|e k| va|\u0131 v|s\u0131n|ile|ne |rke|erk|ard|ine| sa|\u0131nd|ini|k h|k\u0131n|ama|le |tin|rd\u0131|var|a v| me|e m|na |sin|ere|k v| \u015Fa| bu|lan|kes|dir|rin|dan| ma|k\u0131 |mak|\u015Fah|da | te|mek| ge|n\u0131 | hi|nin|en |n h| se|lik|rle|ana|lma|e a|\u0131 h|r \u015F|ill|si | de|aya|zdi|izd|aiz|hai|ret|hi\xE7|\u0131na| i\u015F|e b| ba|kla|et | h\xFC|r\u0131n|n k|ola|nma|e t| ya|eme|riy|n v|e i|a h|li |mil|eli|ket|ik |kar|irl|h\xFCr|im |evl|mes|e d|ahs|ma |rak|ala|let|lle|un | ed|rri|\xFCrr|bu | mi|i v|dil| il| e\u015F|n i|la |el |mal| m\xFC| ko|e g|se | ki|mas|lek|mle|mem|n b|ili|e e|ser| i\xE7|n s|din| di|es |mel|eke|tir|\u015Fit|e\u015Fi|r b|akl|yla|n m|len| ke|edi|oru|nde|re |ele|ni |t\xFCr|a k|eye|\u0131k |ken|u\u011Fu| uy|eml|erd|ede|ame| g\xF6|e s|i m|tim|i b|rde|r\u015F\u0131|ar\u015F|a s|it |t v|siy|ar |rme|est|bes|rbe|erb|te |al\u0131| an|ndi|end|hs\u0131|unm|r\u0131 |kor|n\u0131n| ce|maz|mse|ims|kim|i\xE7 | ay|a m|lam|ri |s\u0131z|a b|ade|n t|nam|lme|ilm|k g|il |tme|etm|r v|e v|n e|\u011Fre|\xF6\u011Fr| \xF6\u011F|al |\u0131yl|olm|vle|\u015Fma|i s|ger|me | da|ind|lem|i o|may|cak|\xE7in|i\xE7i|nun|kan|ye |e y|r t|az |\xE7 k|ece|s\u0131 |eni| mu|ulu|und|den|lun| fa|\u015F\u0131 |ahi|l v|r a|san|kat| so|enm| ev|i\u015F ",pol:" pr|nie|pra| i |nia|ie |go |ani|raw|ia | po|ego| do|wie|iek|awo| ni|owi|ch |ek |do | ma|wo |a p|\u015Bci|ci |ej | cz| za| w |ych|o\u015Bc|rze|prz| ka|wa |eni| na| je|a\u017Cd|ka\u017C|ma |z\u0142o|cz\u0142|no\u015B|o d|\u0142ow|y c|dy |\u017Cdy|i p|wol| lu|ny |oln| wy|stw| wo|ub |lub|lno|rod|k m|twa|dzi|na | sw|rzy|aj\u0105|ecz|czn|sta| sp|owa|o p|spo|i w|kie|a w|zys|obo|est|neg|a\u0107 |mi |cze|e w|nyc|nic|jak| ja|wsz| z |jeg|wan|\u0144st|o s|a i|awa|e p|yst|pos|pow| r\xF3|o o|j\u0105c|ony|nej|owo|dow|\xF3w | ko|kol|aki|bez|rac|sze|iej| in|zen|pod|i i|ni | ro|cy |o w|zan|e\u0144s|no |zne|a s|lwi|olw|ez |odn|r\xF3w|odz|o u|ne |i n|i k|czy| be|acj|wob|inn| ob|\xF3wn|zie| ws|aln|orz|nik|o n|icz|zyn|\u0142ec|o\u0142e|po\u0142|aro|nar|a j|i z|t\u0119p|st\u0119|ien|cza|o z|ym |zec|ron|i l|ami| os|kra| kr|owe| od|ji |cji|mie|a z|bod|swo|dni|zes|e\u0142n|pe\u0142|iu |edn|iko|a n|raj| st|odo|zna|wyc|em |lni|szy|wia|nym|\u0105 p|j\u0105 |ze\u0144|iec|pie|st |jes| to|sob|kt\xF3|ale|y w|ieg|och|du |ini|war|zaw|nny|roz|i o|wej|i\u0119 |si\u0119| si|nau| or|o r|kor|e s|pop|zas|niu|z p|owy|w k|ywa| ta|ymi|hro|chr| oc|jed|ki |o t|ogo|oby|ran|any|oso|a o|t\xF3r| kt|w z|dne|to |tan|h i|nan|ejs|ada|a k|iem|aw |h p|wni|ucz|ora|a d| w\u0142|ian| dz| mo|e m|awi|\u0107 s|gan|zez|mu |taw|dst|wi\u0105|w c|y p|kow|o j|i m|y s|bow|kog|by |j o|ier|mow|sza|b o|ju |yna",swh:"a k| ya|na |wa |ya | ku|a m| na| ha|i y| wa|a h|a n|ana|aki|ki |la |hak| ka|kwa|tu | kw| ma|li |a a|ila|i k| ki|ni |a w|ali|a u| an| mt|ke |mtu|a y|ake|ati|kil|ka |ika|kat|ili|te |ote|we |a s|e k|ia |zi |u a|za |azi|ifa|ma |yak|yo |i n|ama| yo|au | au|e a|kut|amb|o y|ha |asi|fa |u w|hal|ara|sha|ish|ata|ayo| as|tik|u k| za|i z|ina|u n|mba|uhu|hi |hur|cha|yot|ru |uru|wat| ch|eri|ngi|e y|u y|i a|aif|tai| sh|nay|chi|ra |ani| bi| uh|sa | hi|i h|awa|iwa|a j|ti |mu |o k|ja |kan|uli|iwe|any|i w| am|e n|end|atu|kaz|o h|ria|her|she|shi|nch| nc|uta|ye |wak|ii |ele|ami|adh|eza| wo|iki|oja|moj|jam| ja|aka|bu |kam|kul|mat|fan|a l|agu|ind|ne |iri|lim|wen|da |kup|uto|i m|a b|ini|wan|bil| ta|sta|dha| sa| ni|ao | hu|e w|wot| zi|rik|kuf|aji|ta |wez|nya|har| ye|e m|si |lin| ut|ine|gin|ing| la|a t|zim|imu|ima|tak|e b|uni|ibu|azo|kos|yan|nye|uba|ari|ahi|nde|asa|ri |ham|dhi|eli|hir|ush|pat| nd|kus|maa|di |nda|oa |bar|bo |mbo|oka|tok|ndw|ala|wal| si|uzi|hii|tah|i s|o n|liw| el|upa|zin|hag|a c|ndi|ais|mai|eny|mwe|aa |ewe| al|ndo|e h|lo |umi|kuh|jib|osa|mam|a z|ufu|dwa|u i| in|iyo|nyi| ny|u m|sil|ang|o w|guz|zwa|uwa|kuw|hil|saw|uch|ufa|laz|und|aha|ua | mw|bal| lo|o l|a i|del|nun|anu|nji| ba|lik|le |uku|i i",sun:"an |na |eun|ng | ka|ana| sa| di|ang|ung|un |nga|ak | ha|keu| ba|a b| an|nu |hak| bo|anu|ata|nan|a h|ina| je|aha|ga |ah |awa|jeu| na|ara|ing|oga|bog|gan| ng|asa|kan|a s|ha |ae |bae|n k|a k| pa|a p|sah|g s|sar| si|sin|a n|din|n s|ma | at|aga|a a|tan| ku| ma|n a|san|man|wa |lah|pan|taw|u d|ra |ari|eu | pi|gar| pe|kat| te|n p|sa |per|a d|a m|e b|aan|ban|ran|ala|ike|n n|kum| ti|ama|a j|pik|ima|n d|al |at | ja|ila|ta |nda|bas|rim|teu|n b|eba|beb|udu|aya|ika|ngg|nag|kab|rta|art| me|ola|k n|uma|atu|aba|g k|adi|aca| po|ngt|nar|una|ate|oh |boh|awe|di |tin|asi|uku|n h|dan|aka|iba|car|sac|gaw|are|ent|um |jen|abe|u s|dil|pol|ar |ku |kud|u m|upa|han| hu|ake|bar|ur |hna|aru|h s|a t|sak|wat|kaw| so|n t|pa |mpa|du |ngk|g d|ena|huk| mi|mas|ngs|ti |n j|ka |aku|ren|n m| ta|law|isa| tu|und|a u|h a|tay|ula|aja|ali|nte|gsa|en |gam| wa|ieu|ere|k h|jal|h b|il |dit|ngu|lan|asu|yun|ayu|gta|k d|a r|g n|mah|uda|dip|kas|rup|geu| be|ter|sej|min|ri |ern|u p|k k|amp|ura|kal|e a|k a|ut |g b|nak|bis| bi|k p|tes|end|we |h k|tun|uan| un| de|u n|h t|ksa|u k|ian|wil|u b|ona|nas|uka|rak|eje| se|ami| ke|war| ra| ie|k j|eh |ya |lma|alm|pen|tur|wan|lak|h j|g a|ean|up |rga|arg|r k|u t| ne|deu|gal|gke|e t|h p| ge|g t| da|i n",ron:" de|re | \xEEn|\u0219i |are|de | \u0219i|te |ul | sa|rep|e d|ea |ept|dre|tul|e a| dr|ie |\xEEn |ptu|le |ate|la |e p| la| pe|ori| pr|ce |e s| or|au |tat| ar|ice|ii |or |a s| fi| a |ric|ale|per| co|n\u0103 |\u0103 a|rea|ers|i s| li|sau| ca|rso|ent|lor|a\u021Bi|al |a d|e o|men|l l|ei |e c|pri|an\u0103| ac| re|uri|ber|ibe|lib|a p|oan|soa| in|i l|ter| al| s\u0103|tea|l\u0103 |car|t\u0103\u021B|s\u0103 |tur|i a|i d|nal| ni|ri |ita|e \xEE|e \u0219|se |ilo|in |ia |\u021Bie|pre|fie|\u021Bii|\u0103\u021Bi|con|ere|e f|a o|eni|nte| nu| se|ace|ire|ici| cu|i \xEE|a c|i n|a l|pen|ui |nu |\u0103ri|al\u0103|ona|l d|r\u0103 |ert|ril| su|ntr|n c|rin| as|ni |i o|eri|t\u0103 |c\u0103 |ile|\u0103 d|i c|e n|ele|sa | mo|i p|fi |sal|tor|va |oci|soc|nic|pro| un| tr|est|in\u021B|a \xEE|uni|n m|a a| di|ecu|lui|sta|lit| po|tre|gal|ega|oat|ra |act|\u0103 \xEE|leg|u d|e l|nde|int|a f|n a| so|na\u021B|ara|i f|uie|iun| to|tar|ste|ces|rar|at | ce|eme|i \u0219|rec|dep| c\u0103| o | \xEEm|bui|ebu|reb| eg| na|m\xE2n|ntu|ili|v\u0103\u021B|\xE2nd|iei|r \u0219|bil|pli|od |mod|res|din|e e|c\u021Bi| au|ali|\u0103 p|\u0103 f|\xEEmp|ial|cia|ion|\u0103 c|dec|nta| om|it\u0103| fa|\u021B\u0103 |cu |tra|\u0103\u021B\u0103|nv\u0103|\xEEnv|\xE2t |ite|i i|lic| pu| ex|riv|tri|rot|\u021Ba |\u021Bi |l c|rta|imi|ulu|\u021Bio|ic\u0103|lig|rel|ta |cla|t \xEE|nt |nit|e m|\xE2nt|\u0103m\xE2|\u021B\u0103m|ger|n\u021Ba|ru |tru|gur|u c|bli|abi|at\u0103|art|par|ar |rim|iva|l \u0219| sc|ime|nim|era|sup|ind|u a|dic|ic | st| va|ini|igi|e r",hau:"da | da|in |a k|ya |a d| ya|an |a a| ko| wa|na | a |sa | ha|kin|wan|ta | ba|a s| ta|a y|a h|wa |ko | na|n d|a t|ba |ma |n a| ma|iya|hak|asa| sa|ar |ata|yan| za|akk|a w|ama| ka|i d|iki|a m|owa|a b| ci| mu| sh|anc|nci|kow|a z|ai |nsa|a c|shi| \u0199a|cik|ne |ana|i k|ci |kki|e d|a \u0199| ku|su |n y|uma|ka |uwa|kum|hi |a n|utu| yi|ani| ga| ra|aka|ali|mut|\u2018ya|tar| do|\u0257an|ars| \u2018y|sam|\u0199as|nda|ane|man|tum|i a|yi |ni | du|ada| su|and|a g|cin| ad|a i|ke | \u0257a|n k|yin|um |e m| ab|ins|nan|ki |mi |ami|yar|min|oka|re |i b|kam|mas|i y|mat|za |ann|en |a\u0257a| ja|m n|li |duk|dai|e s|n s|ra |n w|n h|aik| ai|ida|ga |san|rsa|aba|sar|ce |nin| la|o n|ban|nna|kan|abi|una|dam|me |ara|i m|hal|a r|add|are|n j|abu| ne|zai|a \u0257|wat|ari| \u0199u|on |ans|wa\u0257|ame|ake|kar|din|zam| fa|a l|\u0199un|buw|r d| hu|oki|kok|a \u2018|u d|n t|abb|aur| id|rin|yak|dok|kiy|ray|jam|n b|ubu|bub|n m|i s| an|am |ili|bba|omi|dan|gam|ayu|ash|nce|tsa|ayi|har|yya|ika|bin|han|kko|rsu|aif|imi|fa | am|i i|dom| ki|yuw|dun|o a|fan|n \u0199|aya|fi |n r|she|uni|bay|riy|n \u2018|sab| iy|bat|tab|aga| ir|mar|o w|i w|sha|awa| ak|uns|unc|tun|u k| il|\u0257in|mfa|amf|aci|ewa|kas|lin|n n|don|n i|ure|ifi|lai|dda| ts|iri|aye|un |tan|wad|gwa|afi| ay|ace|mba|amb|aid|nta|ant|war|lim|kya| al|a\u0257i",fuv:"de | e |e n| ha|nde|la | wa|ina| ka|akk| nd|\u0257o |na | in|e e|hak|al |di |i h|kke|ii |um |ko |ala|ndi| mu| ne|lla| jo|wal|e\u0257\u0257|ne\u0257|all|mum| fo|kal|jog|ke |aaw|taa| ko|eed|\u0257\u0257o|aa | le|ji |ade|aad|laa|o k| ng|e h| ta|re |ogi|a j|e w|e m|nnd|gii|e l|ley|awa|aag|ede|waa|e k|gu |e d| go|gal|\u0253e |ti |fot|aan|eyd|ydi|\u0257e |ee | re|ol |oto|i e|oti|m e|taw|nga|a i|kee|to |ann|eji|am |ni | wo|een|goo|eej|e f| he|enn|gol|agu|pot| po|dee|ay | fa|ka |a k|ond|oot| de|a f|o f|a n|wa |maa|ota|le |hay|i k|o n|ngo|e j|o t| ja|\xF1aa|hee|nka|i w|awi|a w|ngu|der| to|e t|dim|i n|fof|i f|e g|tee|naa|aak| do|too|a e|ndo|ren|dii|oor|er |o e|i m|of | sa| so|gaa|ani|kam| ma| \xF1a|o w|i l|u m|kaa|ima|dir| ba|igg|lig| li|aar| \u0253e|o i|e s| o |e r|so |ooj| nj| la|won|awo|dow|woo|faw|and|e i|ore|nge|nan|are|a t|tin|aam| mo|\u0257ee|ita|ira|aa\u0257|e p|nng|ma |ank|yan|nda|oo |e \u0253|njo|ude|nee|e y|e a|je | ya|en |ine|iin| di|ral| na|\u0257i |und| hu|inn|\u014Bde|a\u014Bd|ja\u014B|a d|den| fe| te|go | su|a h|haa|tal|e\u0257e|e b|y g|baa|tde| yi|\u0257\u0257a|o h|ii\u0257|ow | da|do |l n|alt| ho|l e|aga|mii| aa|a a|ama|nna|m t| ke|edd|oga|m w|l m|o j|a\u0257e|ree|oje|yee| no|ele|ne |ago| pa| al|guu|wi |ge |aa\u0253|daa|ind|dew|i j|jey| je|ent|tan|o \u0257|ge\u0257| ge|\xF1ee|a l| \u0257u|kko|mak|a s| ga",bos:" pr| i |je |rav|na |ma |pra| na|ima| sv|a s|da |a p|vo |nje|ko |ako|anj|o i| po|avo|ja |e s|a i|ti | im| da| u |sva|no |ju | za|o n|va |i p|ili|vak|li | ko|ne | il|koj| ne|nja| dr|ost| sl|van|im |i s|u s|i i|a n|ava|ije|a u| bi|stv|se |a d|om |jed|bod|obo|lob|slo| se| ra|ih |sti| ob| je|pri|enj|dru|u i|o d|iti|voj|raz|ova|dje| os|e i|lo |e p| nj|uje|i d|bra|tre| tr| su|jeg|i n|u z|a k|og |u p|oje|cij|reb|a o|a b|lju|i u|ran|mij|ni |nos|jen|ba |edn|svo| iz|jel|pro|e d|\u017Eav|bit| ni|i o|sta|a z|avn|vje| ka|bil|ovo|a j|aju|ist|nih|tu |red|gov| od|e o|oji| sm|lje|o k|ilo|ji |aci|e u|e n|pre|o p|eba|u o|su |vim|i\u010Dn| sa|u n| dj|a t|ija|\u010Dno|jem|r\u017Ea|dr\u017E|elj|stu|dna|odn|eni|za |iva|olj|\u0161ti|nom|em |du |vno|smi|jer|e b|de |pos|m i| do|u d|nak|a r|obr| mo|lja|nim|ego| kr|tit|kri|ve |nju|an |iko|nik|nu |i m|nog|eno|sno| st|e k|tup|rug|ka |oda|riv|vol|aln|m s|itu|a\u0161t|za\u0161|ani|sam|akv|ovi|osn|rod|aro| mi|tva|dno|nst|jan|ak |ite|vi\u010D|rad|u m| ta|dst|tiv|nac|rim|kon|ku |odu|\u017Eiv|amo|tvo|tel|pod|g p|nov|ina|nar| vj|o s|i b|oj | ov|ave|vu |ans|oja|zov|azo|ude|bud| bu|e t|i v|din|edi|nic|tan|nap|mje| is|jal|slu|pun|eds|o o|zak|jav|i k|m p|tno|ivo|ere|ni\u010D|m n|jim|kak|ada|vni|ugi| ro|mov|ven|pol|to |te | vr",hrv:" pr| i |ma |rav|ima|pra|je |na | sv|ti | na|a p|vo |vat|ko |a s|nje| po|anj|avo|o i|tko| im|a i|sva|no |i p|e s|ja |o n| za|ju |ili| u |va |li | bi|ne |i s|atk| il|iti|da | ne| ko| dr| sl|van|nja|koj|ije| ra|ova| os|u s|i i|ost|bod|obo|lob|slo|pri|a n|om |jed|ati|ih |im |voj|ava| ob|stv|se | mo|i u|bit|dru| je| se|dje|i o|enj| ka|i n|sti|lo |u i|svo|mij|ni |e i|raz|a o|e n|bra|o p| su|a b|u p|ran|a k|og |i d|bil|ako|e p|a d|edn|aju|mor|eni| nj|iva|jel|\u017Eav| ni|a z|avn|ovi|eno|ra |oje|a j| da|a u|ora|jeg| iz|nih|r\u017Ea|dr\u017E|oji|sno|nit|jen|vje|ilo|cij|oda|nim| dj|pro|tit|u z|e d|red|nom|jem| od|nos|sta|nov|osn| sm|lje|o s|ji |ovo|stu|pos|vim| do|odn|rad|ist| sa|e o|tu |nju|em |gov|o d|rod|i m|jer|aci|oj |pre|m i|nak|dna|a r|lju|uje|e m|obr|za |olj|ve |o o|m s|an |nu |du |aro|vno|smi|aln|e k|o k|i b|e u|tva|u u|tup|rug|dno|u o|su |u d|ka |vol| ta|ija|itu|\u0161ti|a\u0161t|za\u0161|itk|\u017Eiv|ani|sam|elj| st|sob|oso|nar|akv|ada| mi|te |ona|nst|jan|lja|i v|ite|ego|elo|rim|ku |odu|amo|tvo|tel|jim|pod|nog|vi |ina| vj|to |e b|ans|zov|azo|ak | sk|edi|tan|oju|pun|pot|oti|kon|zak|i k|m p|tno|ivo|ere|ni\u010D|kak|vni|ugi| ro|mov|ven|\u0161tv| be|ara|kla|ave|u b|avi|oja|jal|u m|dni|mje|rak|din|\u0107i |ju\u010D|klj|nic|u k|nap|obi|atn",nld:"en |an |de | de| he|ing|cht| en|der|van| va|ng |een|et |ech| ge| ee|n e|rec| re|n v|n d|nde|ver| be|er |ede|den| op|het|n i| te|lij|gen|zij| zi|ht |ijk|eli| in|t o| ve|op |and|ten|ke |ijn|e v|jn |ied| on|eft| ie|sch|n z|n o|aan|ft |eid|te |oor| we|ond|eef|ere|hee|id |in |rde|n w|t r|aar|rij|ord|wor|ens|of | of|hei|n g| vr| vo| aa|r h|hte| wo|n h|al |nd |vri|e o|ren|le |or |n a|jke|lle|eni|n b|ij |e e|g v| st|ige|die|e g|men|nge|t h|e b| za|e s|om |t e|ati|wel|erk|sta|ers| al| om|n t|zal|dig| me|ste|voo|ter|gin|re |ege|ge |g e|bes|nat| na|eke|che|ig |gel|nie|nst|e a|nig|est|e w|erw|r d|end|ona|d v|jhe|ijh|d e|ele| di|ie | do|del|n n|at |it | da|tie|e r|elk|ich|jk |vol|ijd|tel|min|len|str|lin|n s|per|t d|han| zo|hap|cha|wet| to|ven| ni|aat|ion|tio|taa|lke|eze|met|ard|waa|uit|sti|e n|doo|pen|eve|el |toe|ale|ien|ach|st |ns | wa|eme|nin|e d|bij| gr|n m|p v|esc|t w|ont|ite|man|ema| ma|nal|g o|rin|hed|t a|t v|beg|all|ijs|wij|rwi|e h| bi|gro|p d|rmi|erm|her|oon| pe|eit|kin|t z|iet|iem|e i|gem|igi| an|d o|r e|ete|e m|js | hu|oep|g z|edi|arb|zen|tin|ron|daa|teg|g t|raf|tra|eri|soo|nsc|t b| er|lan| la|ern|ar |lit|zon|d z|ze |dez|eho|d m|tig|loo|mee|ger|ali|gev|ije|ezi|gez|nli|l v|tij|eer| ar",srp:" pr| i |rav|na |pra| na|ma | sv|ima|da |ja |a p|vo |je |ko |ti |avo| po|a i|ako|a s| za| u |ju |o i| im|nje|i p|va |sva|anj|vak| da|o n|nja|e s|ost| ko|a n|li |ili|ne |om | ne|i s| sl| il| dr|no |koj|u s|ava| ra|og |slo|im |enj|sti|bod|obo|lob|iti|a o|stv|i u|a d|ni |jed|u p|pri|edn| bi|i i|a k|o d|sta|ih |dru|a u| je| os| ni|nos|pro|aju|i o|ran| de| su|u i|se |van|ova|i d|cij| ob|uje|red|\u017Eav|e i|i n|voj|e p|a j|dna| se| od|ve | ka|eni|r\u017Ea|dr\u017E|a z|avn|aci|ovo|u u|m i|oja| iz|lja| nj|ija|u z|e o|rod|jen|lje|e b|raz|jan|lju|svo|za |gov|i\u010Dn| st|nov|sno|osn|du |ji |pre| tr|su |vu |odn|a b|jeg|nim|nih|tu |tit|\u0161ti|ku |nom|bit|e d|me |iko|\u010Dno|oji|lo |vno|nik|e n|\u0111en|ika|bez|ara|de |u o|vim|nak| sa|u n|riv|ave|an |olj|vol| kr|o p|sme|e k|nog| ov|e u|tva|bra|rug|reb|tre|u d|oda| mo| vr|vlj|avl|ego|jav|del|m s|kri|o k|a\u0161t|za\u0161|nju| sm|ani| li|dno|e\u0111u|aln|la |akv|oj |\u0161en|kom|stu|ugi|avi|a r|ka |rad|oju|tan|odi|vi\u010D|tav|itu|ude|bud| bu|pot|odu|\u017Eiv|ere|m n|tvo|ilo|bil|aro|ovi|por|eno|\u0161tv|nac|ove|m p|tup|pos|rem|dni|ba |nst|a t|ast|iva|e m|vre|nu |be\u0111|ist|pun|en |te |dst|rot|zak|ao |kao|i k|ju\u0107|o s|st |sam|ter|nar| me|i m|kol|e r|u\u0161t|ru\u0161|ver|kak| be|i b|kla|ada|eba|ena|ona| on|tvu|ans| do|rak|slu",ckb:" he| \xFB |\xEAn | bi| ma|na |in |maf| di|an |xwe| xw|ku | ku|kes| de| ji|her|kir|iya|ya |rin|iri|ji |bi |es | ne|ye |y\xEAn|e b|er |af\xEA|tin|ke | an|iy\xEA|eye|rke|erk|we | be|e h|de | we|hey|f\xEA |i b|y\xEA |ina| b\xEA| li|diy|ber|li |re |\xEE \xFB|n\xEA |\xEA d| se| ci|eke|di |w\xEE | na|\xEE y|af |ete|hem| w\xEE|sti| ki|r\xEE |k\xEE |\xEE a|yek|n d|kar| te|ne |y\xEE |i h|e k|t\xEE |t\xEA |a w|e d|\xEE b|s m|ast|n b|be |yan|ser|tew|net| tu| ew|hev|aza|ara|\xFB b|n k|adi|ev |zad| az|ras|est|an\xEA| ya|n h|n \xFB|wed| t\xEA|wek|bat|bo | bo| y\xEA|st |n n|\xEA k|dan|\xEA h|ema|\xEA b|iye|\xEE h|din|b\xFBn|r k|ek\xEE| me|par|\xFBna|ta |wle|ewl|\xEE m| ke|nav|ewe|man|\xEA t|d\xEE |\xFB m|m\xFB |em\xFB|a m|ika|e \xFB|n w|a x|\xEA m|e n| ta|ela|n j|ey\xEA|n x|civ|wey|ana| re|khe|ekh|bik|k\xEA |j\xEE |f h|er\xEE| pa|\xEEna|bin|erb|vak|iva|a s| ni|cih|v\xEA |e j|ari| p\xEA|\xEE d|n\xEAn|ike|e t|a k|\xEA x| ye|n a|ey\xEE|n e|ama|b\xEA |ar |ewa|at\xEA|bes|rbe|av |ibe|ist|m\xEE |tem|awa|are|h\xEE |geh|nge|ing|nek|n\xFBn|an\xFB|qan| qa|v\xEE |rti|uke|tuk| \u015Fe|eza| da|u d|\xFB a|f \xFB|edi| ra|tu |tiy|t\xEAn| mi|xeb| ge|h\xEEn| h\xEE|et\xEA|\xEE j|st\xEE|mal|bib|ra |i d|e m|mam|i a|nik|i m|\xEE k| wi|\xFBn | ko|a \u015F|\xEA j|riy|lat|wel|e e|ine|ane|\xFB h|\xEEn |a d|siy|end|aye| za|ija|a n|\xEE n|ek |tek|yet|mbe|emb|\xFB d|rov|iro|mir|eba| xe|m\xEAn| \xEAn| hu|n\xEEn|an\xEE|t \xFB|ten|n m|dem|\xEA \xFB|en\xEA|te |art|i r| j\xEE|u j|ek\xEA|dew",yor:" n\xED|ti |\u1ECD\u0301 |n\xED | l\xE1| \u1EB9\u0300|\xE0n |\u1EB9\u0301 |kan|t\xED | t\xED|an |\u1EB9\u0300 |t\u1ECD\u0301|\u1ECD\u0300 | \u1EB9n|\u1ECDn |w\u1ECDn|\xED \u1EB9|b\xED |\xE1ti|l\xE1t|\u0300t\u1ECD|\u1EB9\u0300t| gb| \xE0t| \xE0w|n l|\xE0ti| a |l\u1EB9\u0300|\u1EB9n\xEC| \xF3 |k\u1ECD\u0300| l\xF3|\xEC k|s\xED |\u1ECD\u0300k| k\u1ECD|ra |ni |\xE0b\xED|t\xE0b| t\xE0|n\xEC | s\xED|\u0300ka|\u1ECD\u0300\u1ECD|n \u1EB9|\xE0w\u1ECD|n t|\xF3 n|\u0300\u1ECD\u0300|\xEDl\u1EB9|or\xED|l\xF3 | w\u1ECD|t\xF3 |d\xE8 |\xECy\xE0|\xFAn | t\xF3| or|\xED \xEC|\xE8d\xE8|k\xF2 |\u2010\xE8d|\u0300\u2010\xE8|\u1EB9\u0300\u2010|r\xEDl|\xED \xF3|r\u1EB9\u0300|\xED \xE0| s\xEC|y\xE0n|gbo|\u1E63e | k\xF2|\xED a| r\u1EB9| j\u1EB9|s\xEC | b\xE1|r\xE0n| \u1E63e|w\u1ECD\u0301|n\xECy|f\xFAn| f\xFA|n \xE0|ba |n n|gb\xE0|gb\u1ECD|j\u1EB9\u0301|un |\xEC\xED | k\xED|gba|\xE8n\xEC| \xE8n|b\xE1 |\u0301 l|a k| ka|d\u1ECD\u0300|k\xED | \xF2m|in | fi|b\xF2 |fi |b\u1EB9\u0301|\u1ECDd\u1ECD|b\u1ECDd|\u0301 s|hun|n\xFA |n\xEDn|w\xE0 |ira|nir|\xF2m\xEC|\xECgb| \xECg|\u0301 t|\u1EB9ni|\xEDn\xFA|i l|\xECni|m\xECn|b\xE0 |\xE1\xE0 |i \xEC|ohu| oh|\xED i|ara| ti|bo |\xF2 l| p\xE9|r\xFA |\xEDr\xE0| \u1ECD\u0300|\xED \xF2|ogb|k\u1ECD\u0301|p\u1ECD\u0300|\xF3 b|\xE0 t|i n|l\u1ECD\u0301|\u1EB9\u0301n| \xECb|y\xEC\xED|gb\xE9|g\u1EB9\u0301|bog|\xF3\xF2 |y\xF3\xF2| y\xF3|n k|p\xE9 |d\xE1 |\u0301w\u1ECD|\u1ECD\u0301w|\xE0 l|\xED k| w\xE0|n o|j\u1ECD | ir|\u1ECD\u0300r|\xFA \xEC|\u0301 \xE0|\xF3 s|i t|\u1E63\u1EB9\u0301|\u0300k\u1ECD|\xED t|y\xE9 |l\xE8 | l\xE8|fin|\xE0b\xF2| l\u1ECD|\xE0 n|\xF9j\u1ECD|w\xF9j|ir\xFA|\xF3 j| ar|\xED w|a w| \xECm|\xFA \xE0|\u0300 t|\xF2fi| \xF2f| \xE0\xE0|f\u1EB9\u0301|\xE0w\xF9|\u0301ni|w\xF9 |\xEC\xEDr|m\xEC\xED| m\xEC|l\xE1\xEC| y\xEC|\xED g|\u1ECD\u0301n|n s|i \u1EB9|\u1EB9\u0300k|\xE0gb|\xEDgb|n\xEDg|a n| k\xFA|l\xE1\xE0|\xED o|n\xE1\xE0| n\xE1|k\u1EB9\u0301|\xEDpa|n\xEDp|\xECn | \xECk|b\xE9 |i g|\u1ECDm\u1ECD| \u1ECDm|i \xE0|i\u1E63\u1EB9|\u0300 \xE0|\xECm\u1ECD|n a|n f|j\u1EB9 |y\xED |\u0301 \u1ECD|\xF3 d|\u0301 \xF2| d\xE1| m\xFA|\xE0\xE0b|\xE1b\u1EB9|l\xE1b|\xECb\xE1|\xF2 g|j\xFA |i o|l\xFA | \xE8t|\u0300 \u1EB9|t\u1ECD\u0300|de |\u0300 n|i \xF2| \xECy|k\xE0n|\u0301n | b\xED| i\u1E63|m\u1ECD\u0300|e \u1EB9|\u0300 l| f\xE0|\xE8y\xED| \xE8y| \xECd|m\u1ECD\u0301|d\xE9 |\u0300 k|\u0301 p|\xF2 t|m\xFA | f\u1EB9| \xECj|r\xED |\xECk\u1EB9|n\xECk|\xECn\xED|n \xEC|n \xE8|s\xECn|\xE8 \u1EB9| i |r\u1ECD\u0300| \xE0n|\u0301 b|\xF9n |\u0301gb|\u1ECD\u0301g|d\u1ECD\u0301| d\u1ECD|\xED n|rin|\u0300 j",uzn:"ish|an |lar|ga |ir | bi|ar | va|da |iga| hu|va |bir|sh |uqu|quq|huq| ha|shi| bo|r b|gan|a e|ida| ta|ini|lis|adi|ng |dir|lik|iy |ili|o\u02BBl|har|ari| o\u02BB|uqi|ins|lan|hi |ing|dan|nin|kin| yo|son|nso| in| mu|on |qig| ma|ega|r i|bo\u02BB| eg|o\u02BBz|ni |gad|ash|i b|ki |oki|ila|yok|a b|n b|osh|ala|at |in |r h|erk| er|lga| qa|rki|h h| sh|i h|ara|n m| ba|nis|ik |igi|lig|bos|ri |qil|a t|bil|las|eti| et|n o|ani|nli|kla|i v|a q|a h|a o|yat| qo|im |a s|i m|iya|atl|oli|osi|siy|qla|cha|til| ol|ati|a y|mas|qar|inl|lat| qi|ta\u02BC|ham|gi |ib |\u02BBli|mla|h v|\u02BBz |hun|n e|mum| da| bu| to|un |mki|umk|sha|tla|ris|iro|ha |rch|bar|iri|oya|ali| be|i o|asi|aro| ke|i t|rla| te|arc|hda|shu|tis|n h|tga| sa| xa|rak|lin|ada|ola|imo|hqa|shq|li | tu|aml|lla|sid| as|nid|a i| ki|ch |n t|nda|k b|era|siz|or |hla|a m|r v|eng|ten|mat|mda|amd|lim|miy|y t|ayo|i a|ino|ilg|tni| is|ana|as |ema| em|ech|a a|tar|kat|aka|ak |rat| de|aza|ill| si| so|g\u02BBi|uql|n q|oda|\u02BCli|a\u02BCl|nik| ni|tda|uch|gin|a u|him|uni|sit|ay |qon| ja|atn|kim|h k|hec| he|\u02BBzi|lak|ker|ikl| ch|liy|lli|chi|ur |zar|shl|rig|irl|dam|koh|iko|a d|am |n v|rti|tib|yot|tal|chu| uc|sla|rin|sos|aso| un|na | ka|muh|dig|asl|lma|ra |bu |ush|xal|\u02BBlg|i k|ekl|r d|qat|aga|i q|oiy|mil| mi|qa |i s|jin",zlm:"an |ang| ke|ng | se| da|ada|ara|dan| pe|ran| be|ak |ber|hak|ata|ala|a s|ah |nya| me|da |per|n s|ya | di|kan|lah|n k|aan|gan|dal|pad|kep|a p|n d|erh|eba|nga|yan|rha| ya|nda|ora|tia|asa| ha|ama|epa| or|iap|ap |a b| at| ma|eti|ra |tau|n a|set|au | ba|pa | ad|n p|tan|p o|eng|a d|men|apa|h b|h d|dak|man|a a|ter| te|k k| sa|n b|ana|g a|end|leh|ole|a k|am |n y|aka|eh |lam|bas|beb|n m| un|pen|sa |keb|sam|n t| ti|ela|san|car|uan|ma |di |han|ega|ban|eri|at |sia|a m|ika|kes|ian|gar|seb|ta |mas|und|neg|nan|ngs|i d|erl|na |epe|emb|bar| la|atu|kla|pem|mem|emu|eca|sec|ngg|nny|any|bol|al |aha|gsa|ebe|ind|akl|n h|erk|ung|ena| bo|a t| ap|ers| de|in |tu |pun|as |agi|ann|g b|bag| ne|ain|hen| he|era|rat|sem| su|adi|lan|g s|dia|mat|ses|iad| ta|iha|g t|tin|k m|k h|i k|gi |i s|ing|uka|enu|den|lai|k d|ert|ti |rka|aja|rga|lua|ker|mel|dun|ndu|lin|rli|nak|ntu|esi|aya|un |uat|jua| in|rma|erm|ai |emp|kem|ri |dil|ua |uk |h m|l d|g m|mba|kat|ese|tik|ni |ini| an|mpu|ka |dar|mar|rja|erj|arg|u k|sua| ol|esa|dap|ar |g u|si |ent|g d| pu|awa|iri|dir|sal|gam|mbe|n i|har|a h|raa|ema|tar|i a|saa|ira|ari|pel|jar|laj|uju|tuj|rak|ura|uar|elu|t d|unt|il |wen|asi|gga|ipa|ksa|tuk|ula|sek|sas|ibu|rta|sep|rsa|nta|ati|ila|mua|yar",ibo:"a n|e n|ke | na| \u1ECD |na | b\u1EE5|\u1ECD b|nwe|nye|ere|re | n |ya |la | nk|ye | nw| ma|e \u1ECD| ya| ik|a o|a \u1ECD|ma |\u1EE5la|b\u1EE5l|ike| on|nke|e i|a m|ony|\u1EE5 n|kik|iki|b\u1EE5 | a |ka |wer|ta |i n|do |di | nd| ga|a a|e a|a i|he |kwa| ok| ob|e o|hi |any|ga\u2010|ha |d\u1EE5 | mm|ndi|\u1ECD n|wa |r\u1EE5 |e m|che|a e|oke|wu |aka|ite|o n|a g|odo|bod|obo| d\u1ECB| ez|ara|we | ih|a\u2010e|h\u1ECB |ri |n o|zi |mma|chi|d\u1ECB |ghi|\u1EE5ta|iri|ihe| an| oh|a y|gba|\u1EE5 \u1ECD| \u1ECDz| ak| iw|nya|te |iwu| nt|ro |oro|e \u1ECB|z\u1ECD |ezi|me |e e|u n|her|ohe| si|a\u2010a|i m|ala|\u1EE5 i| ka|akw| in|gh\u1ECB|kpe|n e|p\u1EE5t| e |i i|i o|ide|inw|\u1EE5 o|h\u1EE5 |ah\u1EE5|weg|ra |o i|kpa|ad\u1EE5|mad|si |sit|a s| me|sor|i \u1ECD|gid|edo|u o|e y|n a| en|tar|ozu|toz|bi |be |\u1EE5 m|\u1EE5r\u1EE5|\u1ECDr\u1EE5| \u1ECDr|mak|uso|ama|de |\u1ECB o| \u1ECDn|\u1ECDz\u1ECD|ch\u1ECB|egh|enw|ap\u1EE5|ru | to|i a|a \u1EE5|osi|r\u1ECB |wet|hed|nch| nc| eb| al|n\u1ECDd|\u1ECDn\u1ECD|uru|sir| kw|yer|ji |eny| mk|\u1ECBr\u1ECB|eta| us|tu |\u1ECD d|u \u1ECD| o |ba | mb|\u1ECDd\u1EE5|\u1ECBch| ch|a d|pa | ag|kwe| ha|a u|e s|mkp|n u|nta|ebe|n \u1ECD|o m|kwu|nkw|nwa|obi| \u1ECBk|esi|i e|nha| nh|le |ile|nil| ni|eme| og|e k|n i|ch\u1ECD|o y|as\u1ECB|otu| ot|ram|u m|\u1ECBgh|d\u1ECBg|zu |n\u1ECD |mba| gb|e g|\u1ECB m|\u1ECDch|ich|pe |agb|i \u1ECB|uch|z\u1EE5z|uny|wun|\u1ECDr\u1ECD| nn|na\u2010| di|ge |oge|iji| ij|\u1ECDha| \u1ECDh|ikp|egi|meg|o o|\u1EE5h\u1EE5|h\u1EE5h|mah|n \u1EE5|\u1ECD g|\u1ECDta|ek\u1ECD|\u1ECB n|kw\u1EE5|agh|\u1EE5m\u1EE5|ban|kpu|okp| ah|\u1ECBkp|a k|ime| im|z\u1EE5 |\u1EE5z\u1EE5|\u1ECDz\u1EE5| \u1EE5z|lit|ali|nat",ceb:"sa | sa|ng |ang| ka| pa|an |ga |nga| ma|pag| ng|on |a p|od |kat|ay | an|g m|a k|ug |ana| ug|ung|ata|ngo|atu|n s|ala|san|d s|tun|ag |a m|god|g s|a a|a s|g k|g p|yon|n u|ong|tag|usa|pan|ing|una|mat|g u|mga| mg|y k| us|ali|syo| o |aga|tan|iya|kin|dun|nay|man|nan|a i| na|ina|nsa|isa|bis|a b|adu| ad|n n| bi|asy|asa|lay|awa|lan|non|a n|nas|o s|al |agp|lin|nal|wal| wa|ili|was|gaw|han| iy| ki|nah|ban|nag|yan|ahi|n k|gan| gi|him| di|a u| ba| un|ini|ama|ya |kas|asu|n a|g a|gka|agk|kan|ags|agt|l n|a g|kag| ta|imo|uns|sam| su|g n|n o|gal|kal|og |taw|aho|uka|gpa|ipo|ika|o p|a t| og| si|gsa|g t|aba|ano|gla|y s|o a|aki|hat|kau|sud|gpi|a w|g i|aha|ot |ran|i s|n m|bal|lip|gon|ud | ga|li |uba|ig |ara|g d|na |kab|aka|gba|ngl|ayo| la| hu|a h|ati|d a|d n| pu| in|uga|ok |ihi|d u|ma |may|awo|agb|ami|say|apa|pod|uha|t n|agh|buh|ins|ad | ub| bu|at |iin|a d|ip |uta|sal|hon|wo |ho |tra|lak|iko|as |aod|bah|mo |aug|ona|dil|gik|sos|lih|pin| pi|k s|nin|oon|abu|la |rab|hun| ti|mah|tar|t s|ngb|uma|hin|bat|lao|mak|it | at|s s|sno|asn|ni |aan|ahu| hi|agi|n p|inu|ulo|y p| ni|iha|mag|o n|duk|edu| ed|a e|til|ura|tin|kip|agl|gay|g h|g b|ato|ghi|nab|kon|in |ter|o u|o o|yal|sya|osy| so|tik| re| tr|hig|a o|ha |but|pak|aya",tgl:"ng |ang| pa|an |sa | ka| sa|at | ma| ng|apa|ala|ata|g p|pan|pag|ay | an| na|ara| at|tan|a p|pat|n a| ba|ga |awa|rap|kar|g k|aya|lan|g m|n n|g b|nga|mga| mg|a k|na |ama|n s|a a|gan|yan|gka| ta|may|tao|agk|asa|man|aka|ao |y m|ana|g a|nan|aha|kan|y k|baw|kal|a m|g n|ing|wat| y |t t|pam|a n|o y|ban| la|ali|san|wal|mag| o |g i|aga|lay|any|g s|in |nya|yon|kas|a s|isa|una|ong|aan|kat|t p| wa|ina|tay|ya |on |o m|ila|ag |nta|t n|aba|ili| ay|o a| ga|no |a i|gal|ant|han|t s|kap|kak|lah|ari|agt|agp|ran|g l|lin|as |lal|gaw|ans|to |ito| it|hay|wa |t m| is|pap|mam|nsa|ahi|nag|bat|lip|gta| di|gay|gpa|pin| si|ngk|ung|aki|y n|iti|tat|ano|yaa|y s|mal|hat|kai|sal|hin|uma|mak|di |agi|pun|ihi|a l|i a|ira|gga|nah|s n|ap | ha|usa|nin|o p|gin|ipu|ika|ngi|i n|lag|la |y p|ini|g t|uka|nap| tu|a g|tas|aru|ipa| ip|li |al |n o|a o|t k|alo| pi|sin|syo|asy|ita|aho|nar|par|o s|pak|t a|uha|sas|gsa|ags|kin|a h|iba|lit|ula|o n|nak|a t| bu|duk|kab|sam|g e|ain|ami|mas|lab|ani|kil|it | al|agb|buh|a b|g g|ba | ib|iyo|ri |yag|ad | da|edu| ed|anl|ma |ais|iga|mba|tun|ipi| ki|od |ayu| li|lih|sar|gi |g w|pah|wir|oob|loo|agg|nli|bay|map|git|mil|ok |hon|ngg|sah|iya|pas|g h|agl|tar|ngu|amb|uku|ayo|s a|p n|n m|rus|i m|l a|abu| aa",hun:"en | sz| va| a |\xE9s |min|ek | \xE9s| mi|jog| jo|an |ind|nek|sze|s\xE1g|nde|a v|den|oga|sza|val|ga |m\xE9l|ala|em\xE9|gy |n a|van|zem|ele| me|egy|\xE9ly| eg|zab|t\xE1s| az|n s|bad|aba|ni |az |gye| el|ak | se|meg|sen|\xE9ny|s\xE9g|k j|yne|lyn| ne|ben|lam|tt |t a|et |agy|oz |hoz|vag|zet| te|n m|ez |nak|int|re |et\xE9|tet|mel|tel|s a|em |ely|let|hez| al|s s| ki|ete|at\xE1|z a| le|yen|es |ra |t\xE9s|ell|nt |sem|t s|len|nem|a s|ese|nki|enk|a m|\xE1s\xE1|i m|ban|kin|k m|szt| \xE1l|ame|k\xF6z|k a|ds\xE1|ads|l\xF3 | k\xF6|\xE1s |ly |on |\xE9be|tat|a t|n v|\xE1ll|m\xE9n| v\xE9|nye|k\xFCl|l\u0151 |a n| cs|i \xE9|ok |\xE9sz|\xE9rt|lla|lap|\xE1go|gok|nyi|tek| ke|nd |\xE9te|ami|z\xE9s|yes|szo|t m|a a|het|fel|lat|lem|lle|el |z e|s e|k \xE9|mbe|emb|el\xE9|ot |lis|vet|kor|\xE1g |olg| am|sz\xE1|ehe|leh|ogo|ott|\xFCl |nte|\xE9le|i v|ogy|hog| ho|kel|n k|tes|nl\u0151|enl|ss\xE1|\xE1za|h\xE1z|\xE9g |vel|\xE1ba|lek|\xE9ge| ha|a h|r\xE9s| fe|\xE1ny|del|el\u0151|\xE1t |al\xE1|art|tar|zto|z\xE1s|t\u0151 |yil|koz|tko|al\xF3|s k|i e|\xE1rs|t\xE1r|mze|emz| ny|m\xE1s|ett|ny |fej|ass|zas| h\xE1|d a|t \xE9|is |\xE9s\xE9|ez\xE9|t\xE9b| mu|\xE1so|s\xEDt|lye|elm|\xE9de|v\xE9d|ine|t k|os |it |izt|biz| bi|y a|m l|tot|a j|atk|n\xE9l|t n|ti | m\xE1|ai |l\xE1s|eve|nev|zte| b\xE1|sel|ll |al |ere|n e|unk|mun|t e| ak|ife|kif|ako|s \xE9| \xE9r|\xE1na| es|s t|got|s\xFCl| be|v\xE1l|csa|se |\xE9se|ad |ges|tos|ja | gy|asz|ten|lm\xE9| t\xE1|eze|\xE1rm|b\xE1r|ess|l s|\xFCle",azj:" v\u0259|v\u0259 |\u0259r |ir | h\u0259| bi| h\xFC| ol|\xFCqu|h\xFCq|quq|na |in |lar|h\u0259r|d\u0259 | \u015F\u0259|bir|l\u0259r|lik|mal|r b|lma|r h| t\u0259|\u0259xs|\u015F\u0259x|\u0259n |dir|uqu|una|an |ali|a m| ma|ikd|ini|r \u015F|d\u0259n|ar |il\u0259|qun|aq |as\u0131| ya|m\u0259k|y\u0259t| m\u0259| m\xFC|kdi|\u0259si|\u0259k |ilm|nin|nd\u0259|olm|\u0259ti|\u0259 y|sin|xs |nda|lm\u0259|yy\u0259|i v| qa| az|olu|iyy|ya |ind|zad|qla|\xFCn |ni |l\u0259 |tin|n m|aza|ar\u0131|\u0259t |n t|maq|lun|l\u0131q|\u0259 b|un |nun|q v|n h|dan|\u0131n | et|tm\u0259|\u0259r\u0259| \xF6z|da |\u0259 v| on|\u0259 a|\u0131na|\u0131n\u0131|bil|a b|s\u0131 |il |\u0259mi|ara|si | di|\u0259 m|\u0259ri|rl\u0259| va|\u0259 h|etm|\u0131\u011F\u0131|ama|dl\u0131|adl|rin|b\u0259r|r\u0131n|n i|m\xFCd|n\u0131n| he|mas|ik |n a|dil|al\u0131|irl|\u0259l\u0259|\xFCda|s\u0131n|\u0131nd|xsi|li |\u0259 d|n\u0259 | b\u0259|\u0259ya| in|\u0259 i|l\u0259t| s\u0259|n\u0131 | i\u015F|an\u0131|e\xE7 |he\xE7|q h|eyn|\u0259 e|d\u0131r| da|asi|r\u0131 |i\u015F |ifa|l\u0131\u011F|i s|fi\u0259|afi|daf| ed|m\u0259z|u v|kil| ha|ola|n v|\u0259ni|\u0131r |uq |unm| bu| as|sia|osi|sos|ili|\u0131d\u0131|l\u0131d|nma|\u0131q |in\u0259|\u0259ra|sil|xil|axi|dax|ad\u0259|man|a h|\u0259 o|onu|a q|\u0259z | ki|se\xE7| se|\u0131 h|min|lan|\u0259d\u0259|bu |raq|l\u0131 |\u0131l\u0131|al |\u0259 q|r v|nla|hsi|\u0259hs|t\u0259h|\xF6z |ist| is|m\u0259s| \u0259s|ina|\u0259 t|\u0259tl|a v|i\u0259 |n b|t\u0259r| ta| c\u0259|edi|ala|kim|qu |i t|ulm|m\u0259h|n o|aya|\u0131 o|ial| so|ill|siy| d\u0259|var|ins|mi |\u011F\u0131 |nik|r i|aql|k h|t\u0259m|tam|\xE7\xFCn|\xFC\xE7\xFC| \xFC\xE7|\u011F\u0131n|sas|\u0259sa|z h|\u0259m\u0259|zam| za|sti|r\u0259f|n e|r a|ild|h\u0259m|\u0131ql|yan|may|n \u0259|m\u0259n|mil| mi|\u0259qi|din|n d|t\xFCn| d\xF6|miy|kah|ika| ni|fad|tif|l o|s\u0259r|yni| ey|ana|l\u0259n|am |ril|ay\u0259|a\u015F\u0131",ces:" pr|n\xED | a | ne|pr\xE1|r\xE1v|na |ost| po|ho | sv|o n| na|vo |neb|\xE1vo|bo |ebo|nos|m\xE1 | m\xE1|a\u017Ed|ka\u017E| ka| ro|ch |d\xFD |\u017Ed\xFD|ti |ou |a s| p\u0159| za|\xE1n\xED|\xE1 p| je| v |svo|\xE9ho| st|\xFD m|sti|n\u011B | by|obo|vob|ter|pro|en\xED|bod| z\xE1| sp|\xED a|rod|kte|by |mu |u p|o p| n\xE1|v\xE1n|jak| ja|a p|o v|\xED n|ov\xE1|oli|v\xED |spo|roz| kt|mi |\xED p|ny | ma|\xEDm |i a|do | so|odn|\xE1ro|n\xE1r|li |n\xE9 |tv\xED|at |\xFDch|a z| vy|byl|vol|en |\xFDt |b\xFDt| b\xFD|t s|tn\xED|stn|o s|\xED b|to | do|sv\xE9|v\xE9 |ran|ejn|z\xE1k|eho|jeh|nes|p\u0159\xED|m\xED |\u010Din|kol|aj\xED|sou| v\u0161|\xEDch|it |n\xFDm|\xFDm |nu |hra|nou|u s|\xE9mu| k |du |\u017Een|pod| ze|kla|a v|stv|pol|dn\xED|er\xE9|m p|st\xE1|je |ci |e\u010Dn| ni|n\xE9h|a n|ak\xE9|\xE1va|maj|em |rov|\xED m|k\xE9 |ole|n\xFDc|ova| ve|ako| ta|i k|chr|och| oc|kon|i p|\xED v|sm\xED|esm|kdo|st |i n|o z|ave|odu|bez| to|sta|ech|j\xED |o d|sob|se | se|\xED s|\xFDmi|i s| i |i v| vz|n\xEDm|pra|ln\u011B|p\u0159i|t\xE1t|ste|a j|aby| ab| s |oln|a o|m n|\u010Den|slu|\u0159\xEDs| os|zem|mez| \u010Di|ln\xED|\xE1ln|oci|jin| ji|y b|\xED z|y s|va |v\u0161e|t v|ovn|chn|d\u011Bl|n\xEDc|le\u010D| pl|vat| vo|vin|rav|vou|lad|inn|\xE9 v|anu|tej|u k|stu|est| tr|ky |ikd|nik|ivo|nit|zen|u o|n\xE9m|nez|i\xE1l|\xEDho|len|ens|o\u017Ee|oko|k\xE9h|rac|ven|\xED k|e s|l\xE1n|\u011Bl\xE1|zd\u011B|vzd|t k|din|odi|t\xED | od|r\xE9 |tup|pov|pln|\u0161t\u011B|\xE1kl|nno|tak|er\xE1|\u0159ed|o a|a t|res|j\xEDc| mu|u z|rok| ob|\u010Dno|u a|y k|i j|\xE9 n|lu\u0161|\xEDsl|oso|ci\xE1|soc|n\xEDh|o j|ck\xE9",run:"ra |we |wa |e a| mu|a k|se | n | um| ku|ira|ash|tu |ntu|a i|mu |umu|mun|unt|ere|zwa|ege|ye |ora|teg|a n|a a|ing|ko | bi|sho|iri| ar| we|shi|aba|e n|ese|go |a m|o a|gu |uba|ngo|nga|hir| ca|ugu|obo|hob|za |ndi|ish|gih| at|ara|wes| kw|ger|ate|a b| ba| gu|e k|can|ama|ung|bor|u w|mwe|di | ab|nke|ke |kwi|ka |ank|yo |ezw|n u|na |iwe|e m|rez|ri |a g|gir| am|igi|e i|ro |a u|ngi|e b|ban| ak| in|ari|n i|hug|ihu|e u|riz|ang|nta| vy|ata| ub|and|aka|rwa| nt|kur|ta |iki|kan|iza|u b|ran|sha|o n|i n| ig|ivy| iv|ahi|bah|u n|ana| bu| as|aku|ga |uko|o u|ho | ka|ose|ubu|ako|guk|ite|o y|ba |i b|any|kir|o k|aho|iye|kub|amw|nye|aha| ng|o m|nya| it|re | im|o b|izw|kun|hin|e c|vyo|o i|vyi|ngu|uri|imi|imw|gin|ene|u m|zi |ha |kug|bur|uru|jwe| zi|u g|era|aga|ron|abi| y |e y| uk|gek|ani| gi|eye|ind|wo |u a|i a| ib|i i|ras|bat|gan|amb|n a|onk|rik|ne |ihe|agi|kor| ic|ze |tun|ibi|wub|nge|o z|tse|nka|he |rek|twa|gen|eko|mat|ber| ah|ni |ush|umw| bw|mak|bik|ury|yiw|bwo| nk|ma |no |kiz|uro|gis|aro|ika| ya|gus|y i|wir|ugi|uki| ki|a c|ryo|bir| ma| yi|iro|bwa|mur|eng|ukw|hat|tan|utu|wit|w i| mw|y a|mbe| ha|uza|ham|rah| is|irw|o v|umv|ura|eny|him|eka|bak|bun| ny|bo |yig|kuv|wab|key|eke|yer|vye|i y|ita|ya |a r| ko|kwa|o c",plt:"ny |na |ana| ny|a n|sy |y f|a a|aha|ra | ma|nan|n n|any|y n|a m|y m|y a| fi|an |tra|han|ara| fa| am|ka | ts| na|in |ami| mi|a t|olo|min|man|iza|lon| iz|fan| ol| ha| sy|aka|a i|reh|ay |ian|tsy|ina| ar|on |o a|etr|het|ona|y o|o h|zan|y t|a h|ala| hi|a f|y h|ehe|ira|a s|zo |y i|ndr|jo | jo|n j| an| az|ran|dia| dr|y s|fah|ena|ire|tan|dre| zo|mba| ka|m p|afa| di|n d|and|azo|zy |amp|ia |ren|iny|rah|y z|ry |ika|oan|ao |amb|lal|ho | ho|isy|ony|tsa|asa|a d|ha |fia|mis|ava|ray| pi|am |dra| to|rin| ta|ant|eo |zay|rai|tsi|itr|sa | fo| ra|van|ova|nen|azy| vo|mpi|ari|o f|tok|a k| ir|kan|oto|mah|ly |sia| la|n i|voa|haf|a r|ito|y k|oka|y r|y l|ano|ita|ene|its|ial|zon|aza|ain| re| as|fot|aro|fit|nat|nin|aly|har| ko|ham| no|fa |ary|atr|ila|ata|iha|nam|kon|oko| sa|elo|nja|anj|ive|isa|oa |dy |y d|o m|nto|ank|o n|otr|pan|fir|air|sir|ty |a v|sam|o s|tov|mit|rak|reo|o t|pia|tao| ao|no |y v|iar|a e|a z|hit|hoa| it|to |za |ton|eha|end|vy |idi|tin|ati|adi|lna|aln|rov|ban| za|nga|hah|oni|osi|sos|vah|ino|ity| at|hia|pir|ifa|omb|ame|era|vel|kar|va |tso|jak|fid|ifi|ais|o i|idy|la |ama|ba | pa|tot|ani|rar|mpa|haz|kam| eo| il|iva|aho|nao|n k|ato|lah|ovy| te|dro|lan|ela| mo| si|fin|miv|san|koa| he|aso| mb|sak|kav",qug:"ta | ka|ka |na |una|cha|ash|ari|a k|ana|pak|ish|ach|hka|shk|mi |kta|hay|man| ch|apa|ak |rin|ata|kun|har|akt|ita| ha|ami|lla| pa|ama|pas|shp| ma|tak|ay\xF1|y\xF1i|in |sh |ina|uku|nka|chi|aka|a c|yta|kuy|all|tap|a h|kan| tu|\xF1it|tuk| ru|run|chu|an |pay|ayt|ris| ki|aku|hpa|ank|a p|kam| sh|nam|a s|uy |i k|ayp|nak|pi |nta|a m| li|ay |lia|hin|kaw|nap|ant|tam|a t|iri|nat| wa|y r|kay|aws| ya|n t|ypa|wsa|pa |lak|shi|a a|lli|iku|hu |n k|iak|yay|kis| al|shu|a w|ipa| sa| il|api|kas|yku|yac|kat|a r|huk|i c|wan|hik|a i|ill|ush| ti|ayk|hpi| ku|kac|say|hun|uya|ila|ika|yuy|pir|ich|mac|ima|a y|yll|ayl|i p|kin|a l| wi|kus| yu|lan|tan|llu|kpi| ta| pi|aya|la |yan|awa| ni|kak|lat|rik|war|ull|kll|li |ink|nch|un |akp|n s|may| ay|uch|i s|nac|sha|iki|kik|h m|ukt|pip|tin|n p|iya|nal|aki| ri|ura|tik|mak|ypi|i m|i w|n m|his|k i|riy|iwa|y h| hu|han|akl|k t|mas|pik|kap| \xF1a|u t|nmi|nis|k a|i y|k l|kar| im|i i|wil|yma|aym|ksi|iks|uma| su|h k|has| ak|unk|huc|kir|anc|k m|pal|k k|ik |i\xF1i| i\xF1|ma |n y|mun| mu|mam|tac|a n|i t|k r|sam|ian|asi|k h|was|ywa|iyt|llp|san|sum|ray|si |pan|nki|tar| ii|u k|\xF1ik|uk |i\xF1a|kuk|wpa|awp|akk|a u|wat|uri| mi|yar|uyk|ayw|h c|ha |tay|rmi|arm|uta|las|yka|llk|kul|wi\xF1|ati|ska| ll|kit|n h|uti|kic|mat",mad:"an |eng|ng |ban| sa| ka|dha|ren| se| ba|ak | ha|adh|hak| dh|ang|se | pa|aba|a s|na |aga|ha | or|n s|ore|ara| ag|gad|are|ana|n o|ngg|ale|gan|a k|ala|dhu|tab|sar|ota|asa|eba| ot| ke|sab|ba |wi |uwi|abb|i h|huw|aan|n k|a b|bba| ta| ma|pan|hal|bas|ako|dhi|ra |kab|em |beb|ka |lak|gi |lem|g a|eka|n b|ama|nga|san|at |ong|ran|nge|a o|ggu|sa |a d|ane|n p|ken|par|aja|man|gar|ata|nek|apa| na|agi|abe| ga|e e|sal|a a|tan|g s|al |kal|gen|ta |i s|aka|e a|a p|a e| la| pe|nan| an|era|e d| e | be|n a| al|ena|uy |guy|n n|ate| bi|mas|e k|kat|uan|oan|kon|k k|a m|i d|g e|n t|g k|ada|koa|lan|ela| da|bad|ma |ne |as |lab|ega| mo|ar |car|one|i p|bi |kaa|bat|ri |on |pon| so|e b|le |ah |abi|ase|adi|epa| ep|k h|and|pam|te |ok |ste|aon|om |oko|aha|ari|ona|asi|ter| di|di |pad|e s|sad|yar|neg|ton|set|rga|ost|mos|gap|nda|a l|har|i k|ina| a | ng|kom|isa|si |a t|a h| kl|jan|daj|iga|hig|idh|hid|ndh|n m|ngs|tto|ett|arg|la |k b|ler|k d|nna| to|nao|n d|mat| ca|tad|bis|aya|epo|aen| po|bin|nya|kas|k s|n h|sya|nta|gsa|en |ant|n g|kar|i e|das|e t|e p|iba| pr|g p| ho| el|i a|hi |os |sao|uwa|tes| ja|nag|nas|lae|sia|t s|k o|nto|int|yat|arn|m p|duw|adu|eta| ko|i b|ni |g n|kla|rak|ame|mpo|jua|sok|aso|ggi|eja|pel|jam|ele| et|dil",nya:"ali|ndi|a m|a k| nd|wa |na | al|yen| ku|nth|ra |di |se |nse| mu|a n|thu|hu |nga| wa|la |mun|u a|unt|iye| ka|ce |ace| lo|a l|ang|e a| la| pa|liy|a u|ens| ma|idw|ons|dwa|e m|i n|ala|kha|lo |li |ira|era|ene|ga |ana|za |o m| mo|yo |o w| ci|we |dzi|ko |o l|and|dan|hal|zik|chi|oyo|pa |ner|ulu|ena|moy| um|a p| da|ape|kap|ka |iko| an|pen|a c|to |ito|hit|nch| nc|iri|lir|wac|umo|e k|lu |a a|aye| dz|kuk|a z|dwe|tha|mal| za|ing|ufu|mu |ro |ful| uf|o c|i d|lin|e l|zo |edw| zo|o a|mwa|u w|iro|o n|lan|amu|ere| mw|nzi|dza|alo|ri | li|fun|lid|gan|so | ca|kul|ofu|nso|o z|ulo|unz|o k|mul|lam|i c|san|a b|kwa| na|a d| a |una|u k|i l|nkh|ant|aku|ca |cit|oli|ipo|dip|ama|lac|wir|han|yan|osa|uli|tsa|i m|pon|kup|u d|ti |gwi|ukh|ung|hun|lon|ank|nda|iki|ina| ko|ao |diz|phu|ati|oma|i a|tsi|pat|iya|siy|kut| ya|zid|eze|ma |i k|mer|ome|mol|u n|u o|aph|ogw|izo|mba|sid|ku |sam|awi|adz| ad|izi|ula|say|e n|khu| kh|rez|vom|bvo|okh|lok|win|akh|o o| am| on|zir|map| zi|eza|ja |go |ngo|ika|its|ats|osi|gwe| co|isa|ya |haw|ani|o p|zi |ndu|kho|ezo|kir|uni|i u| ay|lal|gal|sa |bom| bo|ola|amb|wak|ha |ba |nja|anj|ban| ba|iza| bu|udz|ngw|bun|oye|o d|nal|kus|i p|i o|i y|wi | nt|e p| si|aka|ne |men|jir|nji|sed|ets|end|eka|uma|du ",zyb:"bou|iz |aeu|enz|eng|uz | bo|ih |oux|nz | di|ing|z g|ux |uq |dih|ngh| ca|ng |gen|ung|z c| mi|miz|ij |cae|z d| gi| de| ge|euq|you| ci|ngz|ouj|aen|uj | yi|ien|gya| gu|ngj|mbo| mb|zli|dae|gij|cin|ang|j d|nae| se| ba|z y|euz| cu|de |x m|oz |j g|ouz|x b|li |z b|h g| da| yo|nj |xna|oxn|rox| ro|h c|nzl|vei|yau|wz |z m|ix | si|i c|iq |gh |j b| cw|nda|yin| hi| nd|dan|vun|inh| ga|can|ei |cun|yie|q g|hoz|bau| li| gy|wyo|cwy|z h|gue|gz |gun|faz|unz|yen|uh |den|ciz| go|q c|gj | bi|ej |aej| fa|hin|zci| wn|j n|goz|gai|au |z s|q d| vu|h m|gva|hu |auj|ouq|az |h d|ya |uek|ci |nh |u d|ou |sou|jso|gjs|din|awz|enj| do|h s|eve|sev|z r|nq |sin|nhy|g g|g b|liz|kgy|ekg|sen|eix|wng|lij|ngq|bin|i d|ghc| ha|bae|hix|h y|j c|ghg|i b|ouh|en |n d|h f|j s|z v|j y|law|hci|anh|inz|q y|nei|anj|ozc|ez |enh|q s|aiq|uen|zsi|zda|hye|ujc|e c|siz|eiz|anz|g y|i g|q n|bie| ne| ae|giz|u c|hgy|g d|gda|ngd|cou| la|z l|auy|ai |in |iuz|zdi|jhu|ujh|yuz| du|j m| fu|cuz|eiq|g c|gzd| co|uyu|coz|zbi|biu| dw|i s|i n|aw |dun|yun|izy|daw| he|nho| ho|enq|x l|cie|q b|cij|uzl|x d|iuj|awj| ya|eij|dei|nde|sae|izc|wnq|wnh|sei|h b|aih|gzs|bwn|a d|u g|ngg|jca|e b|ran| ra|hcu| me|iet|van| bu|guh|hen|si |wnj| ve|u b|azl|inj|gak|gan|ozg|siu|yaw|i m",kin:"ra | ku|se | mu|a k|ntu|tu |nga|umu|ye | um|unt|mun|e n| gu|we |ira|a n| n |wa |ere|mu |ko |gom|a b|e a| ab|li |e k|mba|a a|e b|aba|ga |e u|ba |omb|o k| ba|a u|ose|u b|o a| cy|ash|eng| ag|kwi| bu|za |gih|ren|ndi| ub|ang|yo |aka|gu |igi| ib|a g|a m| nt|uli|o b|ama|ihu|e i|nta| ak|ago|ro |ora| ka|ugu|hug|di |iye|ban| am|cya|ku |ta | bw|and|sha|re | ig|gan|ubu|na | kw|obo| by| bi|a i|yan|ka |sho|kub|era|ese| we|kan|aga|hob|bor|ana|byo|ura|uru|ibi|rwa|wes|u w|no |uko|i m|mo |u a|ure|ili|uba|o n|uha|uga|n a| im|ish|bwa|bwo|wiy|ali|ber|ze |ne |ush|are|o i|u m|ger|bur|ran| ki| no|ane|bye| y |ege|teg|guh| uk|n i|rag|i a|ya |u g|e m|anz|bo |abo|gar|wo |y i|ho |age|ind|o m|eke|a s|ara|zir|ite|kug|kim|aci| as|u n|ani|kir|mbe| gi|yos|kur|ugo|gir|e c|iza|aho|i b|tur|ata|o u| se|u u|zo |i i|aha|nge|mwe|iro|akw|any|eza|uki|imi|o y|ate|u k|iki|atu|bat| in|go |tan|n u|bos| bo| na|hak|iby| at|ihe|ung|ha |bul|kar|eye|eko|gek|nya|o g|shy|e y|awe|ngo|bit|mul|nzi|rer|bag|ge |imw|bah|cir|gac|bak|je |gez|imu|eze|tse|ets|mat| ru|irw|he | ni| ur| yi|ako|ngi| ng|i n|rez|ubi|gus|fit|afi|ugi|uka|amb|o c|utu|ufa|ruk|mug|bas|bis|uku|hin|e g|ige|amo|ing| af|yem|ni | ry|a r|gaz|te |erw|bwe|ubw|hwa|iko| al|ant|zi ",zul:"nge|oku| ng|a n|lo |ung|nga|la |le | no|elo|lun| um|e n|wa |we |gel|e u|ele|nel|thi|ke |nom|ezi|ma |ntu|oma|hi |o n|ngo|tu |nke|onk|o l|uth|ni |a u|lek|unt| wo|o e| lo|mun|umu|pha| ku|ang|ho |kwe|ulu| ne|won|une|lul|elu| un|a i|gok|kul|ath|hla|lok|khe|eni|tho|ela|zwe|akh|kel|a k|enz|ana|ban|aka|u u|ing|ule|elw|kho|uku|ala|lwa|gen| uk|wen|ama|na |e k|ko |gan|a e|he |zin|enk|o y| ez|kat| kw|lan|eth|het|o o| ok|okw|i n|nzi|aba|e a|hak|lel|lwe|eko|ane|ka |so |yo |ayo|o a|uhl|nku|nye| na|thu|mph|do |ben|ise|kut|ike|kun| is| im|hol|obu|fan|i k|e w|nhl|nok|ini|and|kuh|ukh|kuk| ak|e i|isi|aph|zi |ile|eki|ekh| ba|eka|the|a a| le| ye|kwa|e e|fut| fu|za |mal| ab|ebe|isa| em|o w|kub|mth|i w|ndl|emp|any|olo|ga | ko|nen|nis|alu|ith|eli|ndo|seb|nda| ya|i i|eke|vik|ake|uba|abe|ezw|yok|ba |ale|zo |olu|ume|ye |esi|kil|khu|yen|emi|nez|hlo|a l|ase|ula|kek|a o|iph|o u|no |azw|kan|mel|uny|ne |ufa|ahl|lin|hul|ant|und|sa |enh|kus|kuv|lak| in|o i|din|kom|amb|zis|ind|ola|uph|wez|eng|yez|phe|phi|mba|nya|han|kuf|nem|isw|ani|iyo| iy|fun| yo|uvi|i a|ene|izi| el|cal|i e|eze|ano|nay|hwe|kup|lal|uyo|ubu|kol|oko|ulo| la|e l|tha|nan|mfu|hon|nza|hin| ey|omp|da |bo |ilu|wak|lon|iso|kug|nka|ink|i l|sek|eku| ek|thw|gez",swe:"ar |er |tt |ch |och| oc|ing|\xE4tt|ill|r\xE4t|en | ti|til|f\xF6r|ll | r\xE4|nde| f\xF6|var|et |and| en|ell| ha|om |het|lle|lig|de |nin| de|ng | in| fr|as |ler| el|gen|nva|und|att|env|r h| i |r r|ska|fri| so|har|der| at|\xF6r |ter|all|t t| ut|den|ka |lla|som|av |sam|ghe|ga | sk| vi| av|ete|la |ens|t a| si|r s|iga|igh|tig| va|ig |a s| st|ion|ra |tti|a o| \xE4r|ten|ns |t e|na | be|han| un| an| sa|a f| la| gr| m\xE5|nge|n s|vis|lan|m\xE5 |ati|nat| \xE5t|an |nna| li| al|t f|ans|nsk|sni|gru|\xE4ll|tio|ad | me|isk|kli|s f|t i|st\xE4|t s|ri |med|sta|h r|lik|da |dig|ta |r o|run|on | re|lag|tta|\xE4r |kap|a i|a r|\xE4nd|erv|n e|kte|n f|rvi|nom|itt|id | mo|sky|r e|ver|\xE4ns|vil|gt |igt| na|tan|uta|dra|t o|ro |isn| fa|kal|ihe|rih|erk|r u|e s|per|l v|vid|one|rel|ber|ran|ot |mot|ndl|d f|ed |ika|m\xE4n|l s|bet|t b|dd |ydd|kyd|n o|s s|str|n m|tet|sin|r f| om|rna|int|r i|end|nad|l a|ap |ers|nda|t v|ent|rbe|arb| h\xE4|ets|h\xE4l|amh|ckl|gar|nga|r m|je |rje|arj|n i|s e|lin|r t|i s|r\xE4n| pe|ilk|t l|ern|p\xE5 | p\xE5|t\xE4l|d e|dom|ege|g e|tni|r a|lit|ras| s\xE5|lln|kil|ski|enn|i o|a d|er\xE4|n a|ara| ge|\xE4ro|a m| ar|t d|ilj|els|yck| ve|g o|fr\xE5|nas|tra|ess|del|m s|liv|l l|in |v s|g a|ast|e e|val|son|rso|e t|age|nd | eg|ial|cia|oci|soc|upp|igi|eli|g s|rkl|gad|ndr|nte|\xF6ra",lin:"na | na| ya|ya |a m| mo|to | ko|li |a b| li|o n| bo|i n|a y|a n|ki |a l|kok|la | ma|zal|i y|oki| pe|ngo|ali|pe |so |nso|oto|ons| ba|ala|mot|a k|eng|nyo|eko|o e|nge|yon| ny|kol|lik|iko|a e|o y|ang|ye | ye|oko|ma |o a|go | ek|ko |e m|aza|te |olo|sal|ama|si | az|mak|e b|lo | te|ta |isa|ako|amb|sen|ong|e n|ela|oyo|i k|ani| es|o m|ni |osa| to|ban|bat|a t|mba|ing|yo | oy|eli|a p|mbo|o p|mi | mi| nd|ba |i m|bok|i p|isi|mok|lis|nga|ge |nde|koz|bo |gel|ato|o t|mos|aka|oba|ese|lam|kop| ez|lon|den|omb|o b|ota|sa |ga |e a|e y|eza|kos|lin|esa|e e|kob|e k|sam|kot|kan|bot|ika|ngi|kam|ka | po|gom|oli|ope|yan|elo| lo|ata| el|bon|oka|po |bik|ate| bi|a s|i t|i b|omi|pes|wa | se|oza|lok|bom|oke|som|zwa|mis|i e|bek|iki| at|ola|ti |ozw|lib|o l|osu|oso|e t|nda|ase|ele|kel|omo|bos|su |usu|sus|bal|i l|ami|o o|bak| nz|pon|tel|mob|mu | ep|nza|asi|mbi|ati|kat|le |gi |ana|oti|ndi|tan|a o|wan|obe|kum|nya|mab|bis|nis|opo|tal|mat| ka|bol|and|aye|baz|u y|eta| ta|ne |ene|emb|sem|e l|gis|ben| ak| en|mal|obo|gob|ike|se |ibo|\u2019te| \u2019t|umb| so|mik|oku|be |mbe|bi |i a|eni|i o| mb|tey|san| et|abo|ebe|geb|eba|yeb|bu | as|ote|sik|ema|eya|ibe|mib|ai |pai|mwa|kes|da |may|boz|amu|a a|kom|mel|ona|ebi|ia |ina|tin| ti|bwa|sol|son",som:" ka|ka |ay |uu |an |yo |oo |aan|aha| wa|da | qo| in| u |sha| xa|a i|ada|iyo| iy|ma |ama| ah| la|qof|aa |hay|ga |a a|a w|ah | dh|a s| da|in |xaq| oo|a d|aad|yah|eey| le|isa|lee|u l|q u|aq | si|taa|eya|ast|la |of |iya|sa |y i|u x|sta|kas|xuu|uxu|wux| wu|iis|nuu|inu|ro | am| ma|a q|wax|dha|ala|kal|nay|f k|a k|le |ku | ku| sh|o i|a l|ta |maa|a u|dii|loo| lo|o a|ale|ara|ana|iga|o d| uu|ha |lo |o m|o x|doo|aro|kar|yaa|gu |si |ima|na | xo| fa|adk|do |a x|ad |aas| qa| so|a o| ba|lag| aa| he|dka|adi|soo|o k|aqa| is|ash|u d|had| ga|eed|san|u k|a m|iin|i k| ca|u s|n l|yad|rka|axa|elo|hel|aga|hii|o h|o q| ha|id |n k| mi|baa| xu|har|xor|aar|ax |mad|add|nta|mid|aal|waa|haa|ina|qaa|daa|agu|ark|o w|nka|u h|dad|ihi| bu| ho|naa|n a|ays|haq|a h|o l| gu|o s|aya|saa|lka| ee| sa|dda|ab |nim|quu|gga|ank|kii|rci|arc|n s|a g| ji|gel| ge|eli|ysa|a f|siy|int|laa|uuq|uqu|xuq| mu|i a|uur|mar|ra |iri|o u| ci|riy|ya |ado|alk|dal|ee |al |rri|ayn|asa| di|ooc|aam|ofk|oon|to |ayo|dar| xi|dhi|jee|a c| ay|yih|a j|ban|caa|lad|sho|d k|ida|uqd|agg|sag|ras|bar|ar | ko| ra|o f|gaa|gal|fal|u a| de| ya|o c|ii |xay|eel|aab|sig|aba|orr|hoo|u q|y d|ed |ho |sad|qda|h q|fka|n i|xag|n x|qay|lsh|uls|bul|u w|jin| do|raa| ug|ido|ood",hms:"ang|gd |ngd|ib | na|nan|ex | ji|eb |id |d n|b n|ud | li|nl |ad | le|jid|leb|l l| ga|ot | me|x n|anl|aot|mex|d g|b l|d d|ob |gs |ngs|jan| ne|ul | ni|nja| nj|lib|ong|nd | zh|jex| je|b j| sh|ngb| gh|gb | gu|gao|l n|han| ad|gan| da|t n| wu|il |x g|nb |b m| nh|she|is |l j|d l|nha|l g|d j|b g|el |end|wud|nex|gho|d s|d z|oul|hob|ub |nis| ch| ya|it |b y|eib| gi|s g|lie| yo| zi|oud|s j|d b|nx | de|es |d y| hu|uel|gue|ies|aob|you| ba|d m|chu|gia|dao|b d|s n|zib| go|zha|eit|hei|al |hud| do|nt |ol | fa|t g|hen|ut |gx |ngx|ab |fal|x j|b z|ian|d h|don|b w|t j|iad|nen| xi|gou|d c|b h|hao|x z|nib|anx|ant|gua| mi|s z|dan|ox |inl|hib|lil|uan|and| xa|b x| se|x m|uib|hui|d x|anb|enl| we|od |enb| du|at |ix |s m|bao| ho|hub| ng|zhi|jil|l s|yad|t m|t l|yan| ze| ju|heb|had|os |aos|t h|l d|nga| he|b a|xan|b s|sen|xin|dud|jul|d a|lou| lo|dei|d w| bi|b c| di|zhe|gt |ngt|x l|bad|x b| ja|hon|zho|blo| bl|d k| ma|deb|l z|wei| yi| qi|b b|x d|d p|eud| ge|x a|can| ca|t w|lol| si|hol|s w|aod|pao| pa|ren| re|x s|eut|pud| pu|aox|mis|gl |ngl|x w|zei|gon|enx|gha|s a|b f|l y|oub|eab|hea| to|did| ko|unb|ghu|t p|x c|geu|t s|x x|jao|ed |t c|l m|l h|jib|ax |l c|d f|nia| pi|eul|d r| no|min|l t|heu|ux |tou|ns |s y|iel|s l|hun",hnj:"it | zh| ni|ab |at |ang| sh|nit| do|uat|os |ax |ox |ol |nx |ob | nd|t d|zhi|nf |x n|if |uax| mu|d n|tab| ta| cu|mua|cua|as |ad |ef |uf |id |dos|gd |ngd|hit|ib |us |enx|f n|she|s d|t l|nb |ux |x z|ed |inf|b n|l n|t n|aob|b z| lo|ong|ix |dol| go|zhe|f g| ho| yi|t z|d z|b d| le|euf|d s|ut |yao| yo| zi|gb |ngb|ndo|enb|len| dr|zha|uab|dro|hox| ge|nen| ne|han| ja|das|x d|x c|x j|f z|shi|f h|il | da|oux|nda|s n|nd |s z|b g| ny|heu| de|gf |ngf| du|od |gox| na|uad| gu|inx|b c| ya|uef| xa| ji|ous| ua| hu|xan|hen|zhu|nil|jai|rou|t g|f d| la|enf|ged|ik | bu|nya|you|f y|lob|af |bua|uk |is |yin|out|of |l m|ud |hua| qi|ot |t s| ba|ait| kh|s s|nad| di|aib|x l|lol| id|dou|ex |aod|bao| re| ga|d d|b y|las|hed|b h|b s|f b|t y|jua| ju| dl|x s|hue|b l| xi|zif|dus|b b|x g|hif|x y|hai| nz|sha| li|x t| be|d j|und|hun|ren|d y|hef|xin| ib|b t|l d|aos|s l| ha|gai|nzh|gx |ngx| ao|s b|s x|el |gt |ngt|hik|aid|s t|x m|f l|f t| pi|aof|t r|eb | gh|s y|d l|gua| bi| za| fu|t h| zu|hou|deu|lb | lb|d g| mo|b k| bo|iao|ros|gon|eut|x h|al |uaf|hab|t t|k n|f x|hix|pin|yua| no|t b|ak | zo|s m| nb| we|d b|gha|f s|mol|euk|dax|l b|nof| ko|lou|guk|end|uas|t k|dis|dan|yol|uan|d t|x b|lan|t m| ch|jix|x x| hl|aox|zis|x i|et | ro",ilo:"ti |iti|an |nga|ga | ng| it| pa|en | ma| ka| a | ke| ti|ana|pan|ken|ang|a n|agi|a k|n a|gan|a m|a a|lin|ali|aya|man|int|teg|n t|i p|nte| na|awa|a p|na |kal|ng |dag|git|ega|sa |da |add|way|n i|n n|no |ysa|al |dda|n k|ada|aba|nag|nna|ngg|eys| me|a i|i a|mey|ann|pag|wen|i k|gal|gga| tu|enn| da| sa|nno| we|ung| ad|tun|mai| ba|l m| ag|ya |i s|i n|yan|nan|ata|nak| si|aka|kad|aan|kas|asa|wan|ami|aki|ay |li |i m|apa|yaw|a t|mak| an|i t|g k|a s|ina|eng|ala|ika|ama|ong|ara|ili|dad| aw|gpa|nai|et |yon|ani|aik|on |at |oma|sin|bal|ipa|n d|uma|g i|ket|ag |in |aen|n p|ram|sab|aga|nom|ino|lya|ily|syo|i b| ki|nia|agp|gim|kab|asi|kin|iam|ags|bab|oy |toy|n m|agt| ta|bag|sia|g a|gil|mil| um|o p|ngi|n w|i i|pad|pap|daa|iwa|naa|eg |ias|ed |nat|bae|o k|saa|san|pam|gsa|ta |kit|ma |dum|yto|tan|i e|t n|uka|t k|apu|lan|sta|sal| li|a b|ari|g n|den|mid|ad |o i|y a|ida|ar |aar|y n|dey| de| wa|a d|ak |bia|ao |tao|min|asy|mon|imo| gi|maa|sap|abi|i u|aib|kni|i l|gin|ged|o a| ar|kap|pul|eyt|abs|ibi| am|akn|i g|kip|isu|g t|bas|nay|ing|i d|kar|ban|iba|nib|t i|as |d n|y i|ura|a w|nal|aad|i w|lak|adu|kai|bsa|duk|edu| ed|may|agb|agk|tra|gge|sol|aso|agr|ngs|ian|ila|dde|edd|tal|aip|kua|umi|pay|sas|ita|pak|g d|ulo|inn|aw "},Cyrillic:{rus:" \u043F\u0440| \u0438 |\u0440\u0430\u0432| \u043D\u0430|\u043F\u0440\u0430|\u0441\u0442\u0432|\u0433\u043E |\u0435\u043D\u0438|\u0432\u043E |\u043E\u0432\u0435| \u043A\u0430|\u043D\u0430 |\u0442\u044C | \u043F\u043E|\u0438\u044F |\u043E \u043D| \u043E\u0431|\u0435\u0442 | \u0432 |\u0441\u0432\u043E| \u0441\u0432|\u0430\u0432\u043E|\u0430\u043D\u0438|\u043E\u0441\u0442|\u043E\u0433\u043E|\u044B\u0439 |\u0430\u0436\u0434|\u043B\u043E\u0432|\u0442 \u043F| \u0438\u043C|\u043D\u0438\u044F| \u0447\u0435| \u0441\u043E|\u0435\u043B\u043E|\u0438\u043C\u0435| \u043D\u0435|\u043B\u044C\u043D|\u043B\u0438 |\u0447\u0435\u043B|\u043A\u0430\u0436|\u0435\u0441\u0442|\u0432\u0435\u043A|\u0430\u0442\u044C|\u043E\u0432\u0430|\u0438\u043B\u0438| \u0440\u0430|\u0435\u043A |\u0439 \u0447|\u0434\u044B\u0439|\u0436\u0434\u044B| \u0434\u043E|\u0438\u0435 |\u0435\u0435\u0442|\u043C\u0435\u0435|\u043D\u043E | \u0438\u043B|\u0438\u0438 |\u0441\u044F |\u0435\u0433\u043E|\u043E\u0431\u043E|\u0438 \u043F|\u043D\u0438\u0435|\u043A \u0438| \u0431\u044B|\u0438 \u0441|\u0438 \u0438|\u043C\u0438 |\u0431\u043E\u0434|\u0432\u043E\u0431|\u0432\u0430\u043D| \u0437\u0430|\u043E\u0439 |\u044B\u0445 |\u043E\u043C |\u043B\u0435\u043D|\u0430\u0446\u0438|\u0435\u043D\u043D|\u043E \u0441|\u043E \u043F|\u044C\u043D\u043E|\u0442\u0432\u0430|\u0442\u0432\u043E|\u043F\u0440\u0438|\u043D\u043E\u0433|\u0430\u043B\u044C|\u0430\u043A\u043E|\u0432\u0430 |\u0438 \u043D|\u0441\u0442\u0438|\u043D\u044B\u0445|\u0442\u043E |\u0431\u0440\u0430|\u043E\u043B\u0436|\u0434\u043E\u043B|\u0441\u0442\u043E|\u0438 \u0432|\u043D\u044B\u043C|\u043E\u0435 | \u0435\u0433|\u043D\u043E\u0432|\u0438\u0445 |\u0435\u043B\u044C|\u0442\u0435\u043B|\u0442\u0438 |\u043D\u043E\u0441|\u043D\u0435 |\u043F\u043E\u043B|\u0440\u0430\u0437| \u0432\u0441|\u0438 \u043E| \u043B\u0438|\u0438 \u0440|\u044B\u0442\u044C|\u0431\u044B\u0442|\u0432\u043B\u0435|\u0440\u0435\u0434|\u0438\u044E |\u0442\u043E\u0440| \u043E\u0441|\u044C\u0441\u044F|\u0442\u044C\u0441|\u043E\u0434\u0438|\u0449\u0435\u0441|\u044F \u0438|\u043A\u0430\u043A|\u043F\u0440\u043E|\u0436\u0435\u043D|\u044B\u043C |\u043F\u0440\u0435|\u0430 \u0441|\u0441\u043D\u043E|\u0435 \u0434|\u043D\u043D\u043E|\u043E \u0438|\u0438\u0439 | \u043A\u043E|\u043E \u0432| \u043D\u0438| \u0434\u0435|\u0441\u0442\u0443|\u043B\u0436\u043D|\u0441\u043E\u0432|\u0435 \u0432|\u043D\u043E\u043C|\u043E\u043B\u044C|\u0440\u0430\u043D|\u043E\u0436\u0435|\u0438\u0447\u0435|\u0435\u0439 |\u0430\u0441\u0442|\u043D\u043D\u044B| \u043E\u0442|\u0442\u0443\u043F|\u043C \u0438|\u043E\u0434\u043D|\u0437\u043E\u0432|\u0440\u0435\u0441| \u043C\u043E|\u043E\u0441\u0443|\u043B\u044F |\u043E\u0441\u043D|\u0430 \u043E|\u0432\u0435\u043D| \u0442\u043E|\u043E \u0431|\u0448\u0435\u043D|\u0442\u0432\u0435|\u043E\u0431\u0449|\u0430 \u0438|\u0435 \u043C|\u044C\u043D\u044B|\u043E\u0431\u0440|\u0432\u0435\u0440|\u0447\u0435\u043D|\u044F \u043D|\u0436\u043D\u043E|\u0447\u0435\u0441|\u0430\u043A |\u043B\u0438\u0447|\u043D\u0438\u0438|\u0435 \u0438|\u0432\u0441\u0435|\u0431\u0449\u0435|\u0432\u0430\u0442|\u0435\u0441\u043F|\u043C\u043E\u0436|\u0439 \u0438|\u043D\u043E\u0435|\u043E \u0434|\u0431\u0435\u0441| \u0432\u043E|\u044F \u0432|\u0434\u0443 | \u0441\u0442|\u0434\u043D\u043E|\u043E\u043D\u0430|\u043D\u0430\u0446|\u0434\u0435\u043D|\u0435\u0436\u0434|\u0445 \u0438| \u0431\u0435|\u0438 \u0434|\u043D\u044B |\u0434\u043E\u0441|\u0434\u043B\u044F| \u0434\u043B| \u0442\u0430|\u043B\u044C\u0441|\u0430\u0442\u0435|\u0446\u0438\u0438|\u044F \u043F|\u0443\u044E |\u0438\u0442\u0435|\u0435 \u043E|\u043D\u043E\u0439|\u043F\u043E\u0434|\u043E\u0442\u043E|\u0441\u0442\u0440|\u0441\u0442\u0430| \u043C\u0435|\u0435\u043B\u0438| \u0440\u0435|\u044F \u043A|\u0442\u043E\u044F|\u0430\u043C\u0438|\u0435\u043D |\u044C \u0432|\u044E \u0438|\u0430\u0437\u043E|\u0433\u043E\u0441|\u043C \u043F|\u044C \u043F|\u0442 \u0431|\u0436\u0435\u0442|\u0443\u0447\u0430|\u0441\u0443\u0434|\u044C\u0441\u0442|\u0434\u0441\u0442|\u0449\u0438\u0442|\u0430\u0449\u0438|\u0437\u0430\u0449|\u043A\u043E\u043D|\u043D\u0438\u044E|\u0430\u043C |\u043E\u0434\u0443|\u0435\u0440\u0435|\u0433\u0440\u0430|\u043F\u0435\u0447|\u043E \u043E|\u043E\u0440\u043E|\u043A\u043E\u0442|\u0438 \u043A|\u0442\u0440\u0430|\u043D\u0438\u043A|\u0443\u0449\u0435|\u0446\u0438\u0430|\u043E\u0446\u0438|\u0441\u043E\u0446|\u043D\u0430\u043B|\u0435\u0441\u043A|\u043E \u0440|\u043A\u043E\u0433|\u0434\u0440\u0443| \u0434\u0440|\u043D\u0438 |\u0430\u0432\u0430|\u043D\u0441\u0442|\u0435\u043C |\u0430\u0432\u043D|\u044B\u043C\u0438|\u0435\u0434\u0441|\u0434\u0438\u043D|\u0434\u043E\u0432| \u0433\u043E| \u0432\u044B|\u0432 \u043A|\u044B\u0435 |\u043E\u0431\u0435|\u043C\u0443 |\u044F \u0435|\u0441\u043B\u0443|\u0443\u0434\u0430|\u0442\u0430\u043A|\u043A\u043E\u0439|\u0442\u0443 |\u0438\u0442\u0443|\u0437\u0430\u043A|\u0445\u043E\u0434|\u0432\u043E\u043B|\u0440\u0430\u0431|\u043A\u0442\u043E|\u0438\u043A\u0442|\u0438\u0447\u043D|\u043D\u0438\u0447|\u043E\u0442 |\u0438\u043D\u0430| \u043A |\u0442\u0435\u0440|\u0440\u043E\u0434|\u043D\u0430\u0440",ukr:"\u043D\u0430 | \u043F\u0440|\u043F\u0440\u0430| \u0456 |\u0440\u0430\u0432| \u043D\u0430| \u043F\u043E|\u043D\u044F |\u043D\u043D\u044F| \u0437\u0430|\u043E\u0433\u043E|\u0442\u0438 |\u0432\u043E |\u0433\u043E | \u043A\u043E|\u0430\u0432\u043E| \u043C\u0430|\u043B\u044E\u0434|\u043E \u043D| \u043D\u0435| \u043B\u044E|\u044E\u0434\u0438|\u043E\u0436\u043D|\u043A\u043E\u0436|\u043B\u044C\u043D|\u0436\u043D\u0430|\u0434\u0438\u043D|\u0430\u0442\u0438|\u0430\u0454 |\u0438\u0445 |\u0438\u043D\u0430|\u043F\u043E\u0432|\u0441\u0432\u043E| \u0441\u0432|\u0430\u043D\u043D|\u0454 \u043F|\u043C\u0430\u0454|\u0430\u0431\u043E|\u0430 \u043B| \u0431\u0443|\u043D\u0435 |\u0435\u043D\u043D|\u0431\u043E | \u0430\u0431|\u0430 \u043C|\u043E\u0432\u0438|\u043D\u0456 | \u0432\u0438| \u043E\u0441|\u0430\u0446\u0456|\u0432\u0438\u043D| \u0442\u0430|\u0431\u0435\u0437|\u043E\u0431\u043E| \u0432\u0456| \u044F\u043A|\u0435\u0440\u0435| \u0434\u043E|\u0456 \u043F|\u0443\u0432\u0430|\u043E \u043F|\u0430\u043B\u044C|\u043D\u0438\u0445|\u043E\u043C |\u043C\u0438 |\u0456\u043B\u044C|\u043D\u043E\u0433|\u0442\u0430 |\u0438\u0439 |\u043F\u0440\u0438|\u043E\u044E |\u0442\u044C |\u0441\u0442\u0430| \u043E\u0431|\u0432\u0430\u043D|\u0438\u043D\u043D|\u0442\u0456 |\u043E\u0441\u0442| \u0443 |\u0441\u044F |\u0432\u0430\u0442|\u0431\u0443\u0442|\u0438\u0441\u0442| \u043C\u043E|\u0435\u0437\u043F|\u0443\u0442\u0438|\u043D\u043E\u0432|\u043F\u0435\u0440|\u0456\u0457 |\u0438 \u043F|\u0431\u043E\u0434|\u0432\u043E\u0431|\u0441\u0442\u0432| \u0432 |\u043E \u0432|\u0432\u0456\u0434| \u0431\u0435|\u0430\u043A\u043E|\u043F\u0456\u0434|\u0442\u0438\u0441|\u043A\u043E\u043D|\u043D\u043E |\u0432\u0430 |\u043D\u043D\u0456|\u0456 \u0441|\u0430 \u043F|\u0441\u0442\u0456| \u0441\u043F|\u043D\u0438\u0439|\u0434\u0443 |\u044C\u043D\u043E|\u043E\u043D\u0430| \u0456\u043D|\u0434\u043D\u043E|\u043D\u0438\u043C|\u0456\u0439 |\u0430 \u0437|\u043D\u0443 |\u043C\u043E\u0436|\u0457\u0457 | \u0457\u0457|\u043B\u044F |\u0441\u043E\u0431|\u043C\u0443 |\u043E\u0457 |\u044F\u043A\u043E| \u043F\u0435| \u0440\u0430|\u0456\u0434 | \u0434\u0435|\u0456 \u0432|\u0438 \u0456|\u0447\u0438\u043D|\u0432\u043D\u043E|\u043E\u043C\u0443|\u043D\u043E\u043C|\u0443 \u043F|\u0456 \u043D|\u0430 \u0441| \u0441\u0443|\u0430 \u043E|\u043D\u0435\u043D|\u0438\u0441\u044F|\u043E\u0432\u043E|\u043D\u0430\u043D|\u043E\u0434\u043D|\u0443 \u0432|\u0456 \u0434|\u0430\u0432\u0430|\u0456\u0434\u043D|\u0440\u0456\u0432| \u0440\u0456|\u0456 \u0440|\u0438\u043C\u0438|\u0432\u0456\u043B|\u0438\u043C |\u0446\u0456\u0457|\u043E \u0434|\u0430 \u0432|\u0441\u0442\u0443|\u043E\u0434\u0443|\u0431\u0443\u0434|\u043E\u0432\u0430| \u043F\u0456| \u043D\u0456|\u044F \u043D|\u0435 \u043F|\u043D\u0430\u0446|\u0438 \u0441|\u043D\u043D\u0430| \u043E\u0434| \u0440\u043E|\u043D\u043E\u0441|\u044C\u043D\u0438|\u044E\u0442\u044C|\u0438 \u0437|\u043A\u0438 |\u0456 \u0437|\u0430 \u0431|\u0441\u043F\u0440|\u0447\u0435\u043D|\u0436\u0435 |\u043E\u0436\u0435|\u0435 \u043C|\u043E\u0432\u043D|\u0440\u0438\u043C|\u0435 \u0431|\u0442\u043E |\u043D\u0456\u0445|\u043E\u0441\u043E|\u0443\u0434\u044C|\u0432\u0456 | \u0440\u0435| \u0441\u0442|\u0440\u0430\u0446|\u0434\u043E | \u0441\u043E|\u0440\u043E\u0437|\u043B\u0435\u043D|\u0432\u043D\u0438|\u0456\u0432\u043D|\u0440\u043E\u0434| \u0432\u0441|\u0441\u043F\u0456|\u043A\u043E\u0432|\u0437\u043F\u0435|\u0456\u0432 |\u0434\u043B\u044F| \u0434\u043B|\u0457 \u043E|\u0445\u0438\u0441|\u0430\u0445\u0438|\u0437\u0430\u0445|\u2010\u044F\u043A|\u044C\u2010\u044F|\u0434\u044C\u2010|\u044F \u0456|\u0442\u0430\u043A|\u0437\u043D\u0430|\u0437\u0430\u0431|\u0441\u0442\u044C|\u0442\u0443 |\u043D\u043E\u044E|\u0430 \u043D|\u0442\u043E\u0440|\u0441\u043D\u043E|\u043E \u0441|\u0436\u0435\u043D|\u0446\u0456\u0430|\u043E\u0446\u0456|\u0441\u043E\u0446|\u0456\u043D\u0448|\u0456 \u043C|\u043A\u043B\u0430|\u0438 \u0432|\u0442\u0435\u0440| \u0434\u0456|\u0456\u0441\u0442|\u043E\u0432\u0456|\u0443 \u0441|\u044F \u0432|\u0430\u0440\u043E|\u0441\u0456 |\u0432\u0456\u0442|\u0441\u0432\u0456|\u043E\u0441\u0432|\u0440\u043E\u0431|\u043F\u0456\u043B|\u0440\u0435\u0441|\u0437\u0430 |\u043F\u0435\u0447|\u0430\u0431\u0435|\u043A\u0443 |\u043B\u0438\u0432|\u0435\u0440\u0436|\u0434\u0435\u0440|\u0432 \u0456|\u0430\u0432\u043D|\u0442\u0430\u0432|\u0430\u0432 |\u0430\u043C\u0438|\u043A\u043E\u043C|\u0432\u043B\u0435|\u043E \u0431|\u044C \u043F| \u0449\u043E|\u0457\u0445 |\u0442\u0432\u043E|\u0445\u0442\u043E|\u0456\u0445\u0442|\u043A\u043E\u0433| \u043A\u0440|\u0430\u043D\u043E|\u0442\u0430\u043D|\u0456\u0430\u043B|\u043D\u0430\u043B|\u043D\u044C |\u0445 \u043F|\u0436\u043D\u043E|\u043B\u0435\u0436|\u0430\u043B\u0435|\u043F\u0440\u043E|\u0442\u0432\u0430|\u0440\u0430\u0442|\u043E \u043E|\u0445 \u0432|\u043D\u0430\u0440|\u043B\u044C\u0441|\u0446\u0456\u0439|\u043A\u043E\u0440|\u0447\u0430\u0441|\u0440\u0436\u0430|\u0457 \u0441|\u0438\u043D\u0443|\u0434\u0441\u0442|\u043E \u0437|\u0440\u0430\u0437|\u043C\u0456\u043D|\u0430 \u0440|\u0437\u0430\u043A",bos:" \u043F\u0440| \u0438 |\u0440\u0430\u0432|\u043D\u0430 |\u043C\u0430 |\u043F\u0440\u0430| \u043D\u0430|\u0438\u043C\u0430| \u0441\u0432|\u0430 \u0441|\u0434\u0430 |\u0430 \u043F|\u0432\u043E |\u0458\u0435 |\u043A\u043E |\u0430\u043A\u043E|\u043E \u0438| \u043F\u043E|\u0430\u0432\u043E|\u0435 \u0441|\u0430 \u0438|\u0442\u0438 | \u0438\u043C| \u0434\u0430| \u0443 |\u0441\u0432\u0430|\u043D\u043E | \u0437\u0430|\u043E \u043D|\u0432\u0430 |\u0438 \u043F|\u0438\u043B\u0438|\u0432\u0430\u043A|\u043B\u0438 | \u043A\u043E|\u043D\u0435 | \u0438\u043B|\u043A\u043E\u0458| \u043D\u0435| \u0434\u0440|\u043E\u0441\u0442| \u0441\u043B|\u045A\u0430 |\u0438\u043C |\u0438 \u0441|\u0443 \u0441|\u0438 \u0438|\u0430\u0432\u0430|\u0438\u0458\u0435|\u0430 \u0443| \u0431\u0438|\u0441\u0442\u0432|\u0441\u0435 |\u0432\u0430\u045A|\u0430 \u0434|\u043E\u043C |\u0458\u0435\u0434|\u0431\u043E\u0434|\u043E\u0431\u043E|\u043B\u043E\u0431|\u0441\u043B\u043E| \u0441\u0435| \u0440\u0430|\u0438\u0445 |\u0441\u0442\u0438|\u0430 \u043D|\u045A\u0435 | \u043E\u0431| \u0458\u0435|\u043F\u0440\u0438|\u0434\u0440\u0443|\u0443 \u0438|\u0458\u0443 |\u043E \u0434|\u0438\u0442\u0438|\u0432\u043E\u0458|\u0440\u0430\u0437|\u0430\u045A\u0435|\u043E\u0432\u0430|\u0434\u0458\u0435| \u043E\u0441|\u0435 \u0438|\u043B\u043E |\u0435 \u043F|\u0430\u045A\u0430|\u0443\u0458\u0435|\u0438 \u0434|\u0431\u0440\u0430|\u0442\u0440\u0435| \u0442\u0440| \u0441\u0443|\u0443 \u0437|\u0430 \u043A|\u043E\u0433 |\u0443 \u043F|\u043E\u0458\u0435|\u0446\u0438\u0458|\u0440\u0435\u0431|\u0430 \u043E|\u0430 \u0431| \u045A\u0435|\u0438 \u0443|\u043C\u0438\u0458|\u043D\u0438 |\u043D\u043E\u0441|\u0431\u0430 |\u0435\u0434\u043D|\u0441\u0432\u043E|\u045A\u0435\u0433| \u0438\u0437|\u043F\u0440\u043E|\u0435 \u0434|\u0436\u0430\u0432|\u0431\u0438\u0442| \u043D\u0438|\u0438 \u043E|\u0441\u0442\u0430|\u0430 \u0437|\u0430\u0432\u043D|\u0432\u0458\u0435| \u043A\u0430|\u0431\u0438\u043B|\u043E\u0432\u043E|\u0430 \u0458|\u0430\u0458\u0443|\u0438\u0441\u0442|\u0438 \u043D|\u043D\u0438\u0445|\u0458\u0435\u043B|\u0442\u0443 |\u0440\u0435\u0434|\u0433\u043E\u0432| \u043E\u0434|\u0435 \u043E|\u043E\u0458\u0438| \u0441\u043C|\u0458\u0430 |\u043E \u043A|\u0438\u043B\u043E|\u0430\u0446\u0438|\u0435 \u0443|\u043F\u0440\u0435|\u043E \u043F|\u0435\u0431\u0430|\u0443 \u043E|\u0441\u0443 |\u0432\u0438\u043C|\u0438\u0447\u043D| \u0441\u0430| \u0434\u0458|\u0430 \u0442|\u0438\u0458\u0430|\u0448\u0442\u0438|\u0447\u043D\u043E|\u0440\u0436\u0430|\u0434\u0440\u0436|\u0441\u0442\u0443|\u0434\u043D\u0430|\u043E\u0434\u043D|\u0435\u043D\u0438|\u0437\u0430 |\u0438\u0432\u0430|\u043D\u043E\u043C|\u0435\u043C |\u0434\u0443 |\u0440\u0430\u043D|\u0432\u043D\u043E|\u0441\u043C\u0438|\u0458\u0435\u0440|\u0435 \u0431|\u0435 \u043D|\u0434\u0435 |\u043F\u043E\u0441|\u043C \u0438| \u0434\u043E|\u0443 \u0434|\u043D\u0430\u043A|\u0430 \u0440|\u043E\u0431\u0440| \u043C\u043E|\u043D\u0438\u043C|\u0435\u0433\u043E| \u043A\u0440|\u0442\u0438\u0442|\u043A\u0440\u0438|\u0432\u0435 |\u0430\u043D |\u0438\u043A\u043E|\u043D\u0438\u043A|\u043D\u0443 |\u0438 \u043C|\u043D\u043E\u0433|\u0435\u043D\u043E|\u0441\u043D\u043E|\u0435 \u043A|\u0442\u0443\u043F|\u0440\u0443\u0433|\u043A\u0430 |\u043E\u0434\u0430|\u0440\u0438\u0432|\u0432\u043E\u0459|\u0430\u043B\u043D|\u043C \u0441|\u0438\u0442\u0443|\u0430\u0448\u0442|\u0437\u0430\u0448|\u0430\u043D\u0438|\u0441\u0430\u043C| \u0441\u0442|\u0430\u043A\u0432|\u043E\u0432\u0438|\u043E\u0441\u043D|\u0440\u043E\u0434|\u0430\u0440\u043E| \u043C\u0438|\u0458\u0438 |\u0442\u0432\u0430|\u0434\u043D\u043E|\u043D\u0441\u0442|\u0430\u043A |\u0438\u0442\u0435|\u0459\u0443 |\u0432\u0438\u0447|\u0440\u0430\u0434|\u0443 \u043D|\u0443 \u043C| \u0442\u0430|\u0434\u0441\u0442|\u0442\u0438\u0432|\u043D\u0430\u0446|\u0440\u0438\u043C|\u043A\u043E\u043D|\u043A\u0443 |\u045A\u0443 |\u043E\u0434\u0443|\u0436\u0438\u0432|\u0430\u043C\u043E|\u0442\u0432\u043E|\u0442\u0435\u0459|\u043F\u043E\u0434|\u0435\u0452\u0443|\u0433 \u043F|\u043D\u043E\u0432|\u0438\u043D\u0430|\u043D\u0430\u0440| \u0432\u0458|\u0438 \u0431|\u043E\u0458 | \u043E\u0432|\u0430\u0432\u0435|\u0432\u0443 |\u0430\u043D\u0441|\u043E\u0458\u0430|\u0437\u043E\u0432|\u0430\u0437\u043E|\u0443\u0434\u0435|\u0431\u0443\u0434| \u0431\u0443|\u0435 \u0442|\u0438 \u0432|\u0435\u045A\u0430|\u0435\u0434\u0438|\u043D\u0438\u0446|\u043D\u0430\u043F|\u043C\u0458\u0435| \u0438\u0441|\u0441\u043B\u0443|\u0435\u0434\u0441|\u043E \u043E|\u0437\u0430\u043A|\u0438 \u043A|\u043C \u043F|\u0442\u043D\u043E|\u0438\u0432\u043E|\u0435\u0440\u0435|\u043D\u0438\u0447|\u043A\u0430\u043A|\u0430\u0434\u0430|\u0432\u043D\u0438|\u0443\u0433\u0438| \u0440\u043E|\u043C\u043E\u0432|\u0432\u0435\u043D|\u043E \u0441|\u0442\u043E |\u0442\u0435 | \u0432\u0440| \u0431\u0435|\u0430\u0440\u0430|\u043A\u043B\u0430| \u0431\u0440|\u0443 \u0431|\u0443 \u0443|\u0438 \u0442|\u043E\u043D\u0430| \u043E\u043D|\u0430\u0432\u0438|\u0458\u0430\u043B|\u0434\u043D\u0438| \u0441\u043A",srp:" \u043F\u0440| \u0438 |\u0440\u0430\u0432|\u043D\u0430 |\u043F\u0440\u0430| \u043D\u0430|\u043C\u0430 | \u0441\u0432|\u0438\u043C\u0430|\u0434\u0430 |\u0430 \u043F|\u0432\u043E |\u043A\u043E |\u0442\u0438 |\u0430\u0432\u043E| \u043F\u043E|\u0430 \u0438|\u0430\u043A\u043E|\u0430 \u0441| \u0437\u0430| \u0443 |\u043E \u0438| \u0438\u043C|\u0438 \u043F|\u0432\u0430 |\u0441\u0432\u0430|\u0432\u0430\u043A| \u0434\u0430|\u043E \u043D|\u0435 \u0441|\u043E\u0441\u0442| \u043A\u043E|\u045A\u0430 |\u043B\u0438 |\u0438\u043B\u0438|\u043D\u0435 |\u043E\u043C | \u043D\u0435|\u0430 \u043D| \u0441\u043B| \u0438\u043B|\u0458\u0435 | \u0434\u0440|\u0438 \u0441|\u043D\u043E |\u043A\u043E\u0458|\u0443 \u0441|\u0430\u0432\u0430| \u0440\u0430|\u043E\u0433 |\u0441\u043B\u043E|\u0458\u0443 |\u0438\u043C |\u0441\u0442\u0438|\u0431\u043E\u0434|\u043E\u0431\u043E|\u043B\u043E\u0431|\u0438\u0442\u0438|\u0430 \u043E|\u0441\u0442\u0432|\u0438 \u0443|\u0430 \u0434|\u043D\u0438 |\u0458\u0435\u0434|\u0443 \u043F|\u043F\u0440\u0438|\u0435\u0434\u043D| \u0431\u0438|\u0438 \u0438|\u0430 \u043A|\u043E \u0434|\u0441\u0442\u0430|\u0438\u0445 |\u0434\u0440\u0443|\u0430 \u0443| \u0458\u0435|\u0430\u045A\u0430| \u043E\u0441| \u043D\u0438|\u043D\u043E\u0441|\u043F\u0440\u043E|\u0430\u0458\u0443|\u0438 \u043E| \u0434\u0435| \u0441\u0443|\u0443 \u0438|\u0441\u0435 |\u045A\u0435 |\u0458\u0430 |\u043E\u0432\u0430|\u0438 \u0434|\u0446\u0438\u0458| \u043E\u0431|\u0443\u0458\u0435|\u0440\u0435\u0434|\u0436\u0430\u0432|\u0435 \u0438|\u0435 \u043F|\u0430 \u0458|\u0434\u043D\u0430| \u0441\u0435| \u043E\u0434|\u0432\u0435 | \u043A\u0430|\u0435\u043D\u0438|\u0440\u0436\u0430|\u0434\u0440\u0436|\u0430 \u0437|\u0430\u0432\u043D|\u0435\u045A\u0430|\u0430\u0446\u0438|\u0432\u043E\u0458|\u043E\u0432\u043E|\u0443 \u0443|\u043C \u0438|\u043E\u0458\u0430|\u0432\u0430\u045A| \u0438\u0437|\u0438\u0458\u0430|\u0443 \u0437|\u0430\u045A\u0435|\u0440\u0430\u043D|\u0435 \u043E|\u0440\u043E\u0434|\u0438 \u043D|\u0435 \u0431|\u0440\u0430\u0437|\u0437\u0430 | \u045A\u0435|\u0433\u043E\u0432|\u0438\u0447\u043D| \u0441\u0442|\u043D\u043E\u0432|\u0441\u043D\u043E|\u043E\u0441\u043D|\u0434\u0443 |\u043F\u0440\u0435| \u0442\u0440|\u0441\u0443 |\u0432\u0443 |\u043E\u0434\u043D|\u0430 \u0431|\u0441\u0432\u043E|\u045A\u0435\u0433|\u043D\u0438\u043C|\u043D\u0438\u0445|\u0442\u0443 |\u0442\u0438\u0442|\u0448\u0442\u0438|\u043A\u0443 |\u043D\u043E\u043C|\u0431\u0438\u0442|\u0435 \u0434|\u043C\u0435 |\u0438\u043A\u043E|\u0447\u043D\u043E|\u043E\u0458\u0438|\u043B\u043E |\u0432\u043D\u043E|\u043D\u0438\u043A|\u0438\u043A\u0430|\u0431\u0435\u0437|\u0430\u0440\u0430|\u0434\u0435 |\u0443 \u043E|\u0432\u0438\u043C|\u043D\u0430\u043A| \u0441\u0430|\u0440\u0438\u0432|\u0430\u0432\u0435|\u0430\u043D |\u0432\u043E\u0459| \u043A\u0440|\u043E \u043F|\u0441\u043C\u0435|\u0435 \u043A|\u043D\u043E\u0433|\u0458\u0438 | \u043E\u0432|\u0435 \u0443|\u0442\u0432\u0430|\u0431\u0440\u0430|\u0440\u0443\u0433|\u0440\u0435\u0431|\u0442\u0440\u0435|\u0443 \u0434|\u043E\u0434\u0430| \u043C\u043E| \u0432\u0440|\u0430\u0432\u0459|\u0443 \u043D|\u0435\u0433\u043E|\u0434\u0435\u043B|\u043C \u0441|\u043A\u0440\u0438|\u043E \u043A|\u0430\u0448\u0442|\u0437\u0430\u0448|\u045A\u0443 | \u0441\u043C|\u0430\u043D\u0438| \u043B\u0438|\u0434\u043D\u043E|\u0435\u0452\u0443|\u0430\u043B\u043D|\u043B\u0430 |\u0430\u043A\u0432|\u043E\u0458 |\u043A\u043E\u043C|\u0441\u0442\u0443|\u0443\u0433\u0438|\u0430\u0432\u0438|\u0430 \u0440|\u043A\u0430 |\u0440\u0430\u0434|\u043E\u0434\u0438|\u0432\u0438\u0447|\u0442\u0430\u0432|\u0438\u0442\u0443|\u0443\u0434\u0435|\u0431\u0443\u0434| \u0431\u0443|\u043F\u043E\u0442|\u043E\u0434\u0443|\u0436\u0438\u0432|\u0435\u0440\u0435|\u0442\u0432\u043E|\u0438\u043B\u043E|\u0431\u0438\u043B|\u0430\u0440\u043E|\u0435 \u043D|\u043E\u0432\u0438|\u043F\u043E\u0440|\u0435\u043D\u043E|\u0448\u0442\u0432|\u043D\u0430\u0446|\u043E\u0432\u0435|\u043C \u043F|\u0442\u0443\u043F|\u043F\u043E\u0441|\u0440\u0435\u043C|\u0434\u043D\u0438|\u0431\u0430 |\u043D\u0441\u0442|\u0430 \u0442|\u043E\u0458\u0443|\u0430\u0441\u0442|\u0438\u0432\u0430|\u0435 \u043C|\u0432\u0440\u0435|\u0432\u0459\u0430|\u043D\u0443 |\u0431\u0435\u0452|\u0438\u0441\u0442|\u0435\u043D |\u0442\u0435 |\u0434\u0441\u0442|\u0440\u043E\u0442|\u0437\u0430\u043A|\u0430\u043E |\u043A\u0430\u043E|\u0438 \u043A|\u0458\u0443\u045B|\u043E \u0441|\u0441\u0442 |\u0441\u0430\u043C|\u043C \u043D|\u0442\u0435\u0440|\u043D\u0430\u0440| \u043C\u0435|\u0438 \u043C|\u043A\u043E\u043B|\u0435 \u0440|\u0443\u0448\u0442|\u0440\u0443\u0448|\u0432\u0435\u0440|\u043A\u0430\u043A| \u0431\u0435|\u0438 \u0431|\u043A\u043B\u0430|\u0430\u0434\u0430|\u0435\u0431\u0430|\u0435\u043D\u0430|\u043E\u043D\u0430| \u043E\u043D|\u0442\u0432\u0443|\u0430\u043D\u0441| \u0434\u043E|\u0440\u0430\u043A|\u0441\u043B\u0443|\u0438 \u0432|\u043D\u0438\u0446|\u0443 \u043A|\u043C\u0435\u043D|\u0432\u0440\u0448|\u0435\u043C\u0435|\u0435\u0434\u0441|\u0438\u0432\u0438|\u043E \u043E|\u0458\u0430\u0432",uzn:"\u0430\u043D |\u043B\u0430\u0440|\u0433\u0430 |\u0438\u0440 | \u0431\u0438|\u0430\u0440 | \u0432\u0430|\u0434\u0430 |\u0438\u0433\u0430| \u04B3\u0443|\u0432\u0430 |\u0431\u0438\u0440|\u0443\u049B\u0443|\u049B\u0443\u049B|\u04B3\u0443\u049B| \u04B3\u0430|\u0440 \u0431|\u0433\u0430\u043D|\u0438\u0448 |\u0438\u0434\u0430| \u0442\u0430|\u0430 \u044D|\u0438\u043D\u0438|\u0430\u0434\u0438|\u043D\u0433 |\u0434\u0438\u0440|\u0438\u0448\u0438|\u043B\u0438\u043A|\u043B\u0438\u0448|\u0438\u0439 |\u0438\u043B\u0438|\u0430\u0440\u0438|\u0443\u049B\u0438|\u04B3\u0430\u0440|\u043B\u0430\u043D|\u0438\u043D\u0433|\u0448\u0438 |\u0434\u0430\u043D|\u043D\u0438\u043D|\u0438\u043D\u0441|\u043A\u0438\u043D|\u0441\u043E\u043D|\u043D\u0441\u043E| \u0438\u043D| \u043C\u0443|\u049B\u0438\u0433| \u043C\u0430|\u043E\u043D |\u0440 \u0438| \u0431\u045E|\u044D\u0433\u0430| \u044D\u0433| \u045E\u0437|\u043D\u0438 |\u0431\u045E\u043B|\u0433\u0430\u0434|\u0438 \u0431|\u043A\u0438 |\u0438\u043B\u0430|\u0451\u043A\u0438| \u0451\u043A|\u0430 \u0431|\u043D \u0431|\u0438\u043D |\u0440 \u04B3|\u0430\u043B\u0430|\u044D\u0440\u043A| \u044D\u0440|\u043B\u0433\u0430| \u049B\u0430|\u0440\u043A\u0438|\u0448 \u04B3|\u0438 \u04B3|\u043D \u043C| \u0431\u043E| \u0431\u0430|\u0438\u043A |\u0430\u0440\u0430|\u0438\u0433\u0438|\u043B\u0438\u0433|\u0440\u0438 |\u049B\u0438\u043B|\u0430 \u0442|\u0431\u0438\u043B| \u044D\u0442|\u043D\u0438\u0448|\u043D\u043B\u0438|\u043A\u043B\u0430|\u0438 \u0432|\u0431\u043E\u0448|\u044D\u0442\u0438|\u0430\u043D\u0438|\u0438\u043C |\u0438 \u043C|\u043E\u043B\u0438|\u049B\u043B\u0430|\u0430 \u04B3|\u043B\u0430\u0448|\u0430\u0442\u043B|\u0442\u0438\u043B|\u0430 \u049B| \u043E\u043B|\u043E\u0441\u0438|\u043C\u0430\u0441|\u049B\u0430\u0440|\u0438\u043D\u043B|\u043B\u0430\u0442| \u049B\u0438|\u0442\u0430\u044A|\u04B3\u0430\u043C|\u0433\u0438 |\u0438\u0431 |\u043C\u043B\u0430|\u045E\u0437 |\u043D \u044D|\u043C\u0443\u043C| \u0434\u0430| \u0431\u0443|\u0430\u0442 |\u0448 \u0432|\u0443\u043D |\u0430\u0442\u0438|\u043C\u043A\u0438|\u0443\u043C\u043A|\u0442\u043B\u0430|\u0438\u0440\u043E|\u045E\u043B\u0438|\u0431\u0430\u0440|\u0438\u0440\u0438|\u0440\u0438\u0448|\u0438\u044F\u0442|\u0430\u043B\u0438| \u0431\u0435| \u049B\u043E|\u0430 \u0448|\u0430\u0440\u043E| \u043A\u0435|\u0438 \u0442|\u0440\u043B\u0430| \u0442\u0435|\u0447\u0430 |\u0440\u0447\u0430|\u0430\u0440\u0447|\u0430 \u045E| \u0448\u0443|\u0442\u0438\u0448|\u043D \u04B3|\u0442\u0433\u0430| \u0441\u0430|\u0430\u0441\u0438| \u0445\u0430|\u0440\u0430\u043A|\u043B\u0438\u043D|\u043E\u043B\u0430|\u0438\u043C\u043E|\u0448\u049B\u0430|\u043B\u0438 | \u0442\u0443|\u0430\u043C\u043B|\u043B\u043B\u0430|\u0441\u0438\u0434|\u043D \u045E| \u0430\u0441|\u043D\u0438\u0434|\u0430 \u0438| \u043A\u0438|\u043D \u0442|\u043D\u0434\u0430|\u043A \u0431|\u0435\u0440\u0430|\u043E\u0448\u049B|\u0441\u0438\u0437|\u043E\u0440 |\u0430 \u043C|\u0440 \u0432|\u0435\u043D\u0433|\u0442\u0435\u043D|\u043C\u0430\u0442|\u043C\u0434\u0430|\u0430\u043C\u0434|\u043B\u0438\u043C|\u0439 \u0442|\u044F\u0442 |\u0438 \u0430|\u0438\u043D\u043E|\u0438\u043B\u0433| \u0442\u043E|\u0442\u043D\u0438|\u0430\u043D\u0430|\u0430\u0441 |\u044D\u043C\u0430| \u044D\u043C|\u0430 \u0451| \u0448\u0430|\u0430\u0448 |\u0430 \u0430|\u0442\u0430\u0440|\u043A\u0430\u0442|\u0430\u043A\u0430|\u0430\u043A | \u0434\u0435|\u0430\u0437\u0430|\u0438\u043B\u043B|\u0441\u0438\u0439| \u0441\u0438| \u0441\u043E|\u0443\u049B\u043B|\u043D \u049B|\u043E\u0434\u0430|\u044A\u043B\u0438|\u0430\u044A\u043B|\u043D\u0438\u043A|\u0430\u0434\u0430| \u043D\u0438|\u0442\u0434\u0430|\u0433\u0438\u043D|\u0443\u043D\u0438|\u0441\u0438\u0442|\u0430\u0439 |\u049B\u043E\u043D|\u043D \u043E| \u0436\u0430|\u043A\u0438\u043C|\u0435\u0447 |\u04B3\u0435\u0447| \u04B3\u0435|\u045E\u0437\u0438|\u043B\u0430\u043A|\u043A\u0435\u0440|\u0438\u043A\u043B|\u043B\u043B\u0438|\u0443\u0440 |\u0437\u0430\u0440|\u0448\u043B\u0430|\u0440\u0438\u0433|\u0438\u0440\u043B|\u0434\u0430\u043C|\u043A\u043E\u04B3|\u0438\u043A\u043E|\u0430 \u0434|\u0430\u043C |\u043D \u0432|\u0440\u0442\u0438|\u0442\u0438\u0431|\u0442\u0430\u043B| \u0438\u0448|\u0447\u0443\u043D|\u0443\u0447\u0443| \u0443\u0447|\u0441\u043B\u0430|\u0430 \u0443|\u0440\u0438\u043D|\u0441\u043E\u0441|\u0430\u0441\u043E| \u0443\u043D|\u043D\u0430 | \u043A\u0430|\u043C\u0443\u04B3|\u0434\u0438\u0433|\u0447 \u043A|\u0430\u0441\u043B|\u043B\u043C\u0430|\u0440\u0430 |\u0431\u0443 |\u0445\u0430\u043B|\u045E\u043B\u0433|\u0438 \u043A|\u0435\u043A\u043B|\u0440 \u0434|\u049B\u0430\u0442|\u0430\u0433\u0430|\u0438 \u049B|\u043E\u0438\u0439|\u043C\u0438\u043B| \u043C\u0438|\u049B\u0430 |\u0438 \u0441|\u0436\u0438\u043D| \u0436\u0438|\u0441\u0438\u043D|\u0440\u043E\u0440|\u0430 \u0432|\u043B\u0430\u0434|\u0430 \u043E|\u0442\u043B\u0438|\u043C\u0438\u044F|\u043D \u0438|\u0430\u0431 |\u0442\u0438\u0440|\u0437 \u043C|\u0434\u0430\u0432|\u0440\u0433\u0430|\u0430\u0433\u0438|\u0430 \u043A|\u043D\u043B\u0430|\u0430\u049B\u0442|\u0432\u0430\u049B|\u0430\u0440\u0442|\u0430\u0451\u0442|\u043B\u0430\u0431",azj:" \u0432\u04D9|\u0432\u04D9 |\u04D9\u0440 |\u0438\u0440 | \u04BB\u04D9| \u0431\u0438| \u04BB\u04AF| \u043E\u043B|\u04AF\u0433\u0443|\u04BB\u04AF\u0433|\u0433\u0443\u0433|\u043D\u0430 |\u0438\u043D |\u043B\u0430\u0440|\u04BB\u04D9\u0440|\u0434\u04D9 | \u0448\u04D9|\u0431\u0438\u0440|\u043B\u04D9\u0440|\u043B\u0438\u043A|\u043C\u0430\u043B|\u0440 \u0431|\u043B\u043C\u0430|\u0440 \u04BB| \u0442\u04D9|\u04D9\u0445\u0441|\u0448\u04D9\u0445|\u04D9\u043D |\u0434\u0438\u0440|\u0443\u0433\u0443|\u0443\u043D\u0430|\u0430\u043D |\u0430\u043B\u0438|\u0430 \u043C| \u043C\u0430|\u0438\u043A\u0434|\u0438\u043D\u0438|\u0440 \u0448|\u0434\u04D9\u043D|\u0430\u0440 |\u0438\u043B\u04D9|\u0433\u0443\u043D|\u0430\u0433 |\u0430\u0441\u044B| \u0458\u0430|\u043C\u04D9\u043A|\u0458\u04D9\u0442| \u043C\u04D9| \u043C\u04AF|\u043A\u0434\u0438|\u04D9\u0441\u0438|\u04D9\u043A |\u0438\u043B\u043C|\u043D\u0438\u043D|\u043D\u0434\u04D9|\u043E\u043B\u043C|\u04D9\u0442\u0438|\u04D9 \u0458|\u0441\u0438\u043D|\u0445\u0441 |\u043D\u0434\u0430|\u043B\u043C\u04D9|\u0458\u0458\u04D9|\u0438 \u0432| \u0433\u0430| \u0430\u0437|\u043E\u043B\u0443|\u0438\u0458\u0458|\u0458\u0430 |\u0438\u043D\u0434|\u0437\u0430\u0434|\u0433\u043B\u0430|\u04AF\u043D |\u043D\u0438 |\u043B\u04D9 |\u0442\u0438\u043D|\u043D \u043C|\u0430\u0437\u0430|\u0430\u0440\u044B|\u04D9\u0442 |\u043D \u0442|\u043C\u0430\u0433|\u043B\u0443\u043D|\u043B\u044B\u0433|\u04D9 \u0431|\u0443\u043D |\u043D\u0443\u043D|\u0433 \u0432|\u043D \u04BB|\u0434\u0430\u043D|\u044B\u043D | \u0435\u0442|\u0442\u043C\u04D9|\u04D9\u0440\u04D9| \u04E9\u0437|\u0434\u0430 |\u04D9 \u0432| \u043E\u043D|\u04D9 \u0430|\u044B\u043D\u0430|\u044B\u043D\u044B|\u0431\u0438\u043B|\u0430 \u0431|\u0441\u044B |\u0438\u043B |\u04D9\u043C\u0438|\u0430\u0440\u0430|\u0441\u0438 | \u0434\u0438|\u04D9 \u043C|\u04D9\u0440\u0438|\u0440\u043B\u04D9| \u0432\u0430|\u04D9 \u04BB|\u0435\u0442\u043C|\u044B\u0493\u044B|\u0430\u043C\u0430|\u0434\u043B\u044B|\u0430\u0434\u043B|\u0440\u0438\u043D|\u0431\u04D9\u0440|\u0440\u044B\u043D|\u043D \u0438|\u043C\u04AF\u0434|\u043D\u044B\u043D| \u04BB\u0435|\u043C\u0430\u0441|\u0438\u043A |\u043D \u0430|\u0434\u0438\u043B|\u0430\u043B\u044B|\u0438\u0440\u043B|\u04D9\u043B\u04D9|\u04AF\u0434\u0430|\u0441\u044B\u043D|\u044B\u043D\u0434|\u0445\u0441\u0438|\u043B\u0438 |\u04D9 \u0434|\u043D\u04D9 | \u0431\u04D9|\u04D9\u0458\u0430| \u0438\u043D|\u04D9 \u0438|\u043B\u04D9\u0442| \u0441\u04D9|\u043D\u044B | \u0438\u0448|\u0430\u043D\u044B|\u0435\u0447 |\u04BB\u0435\u0447|\u0433 \u04BB|\u0435\u0458\u043D|\u04D9 \u0435|\u0434\u044B\u0440| \u0434\u0430|\u0430\u0441\u0438|\u0440\u044B |\u0438\u0448 |\u0438\u0444\u0430|\u043B\u044B\u0493|\u0438 \u0441|\u0444\u0438\u04D9|\u0430\u0444\u0438|\u0434\u0430\u0444| \u0435\u0434|\u043C\u04D9\u0437|\u0443 \u0432|\u043A\u0438\u043B| \u04BB\u0430|\u043E\u043B\u0430|\u043D \u0432|\u04D9\u043D\u0438|\u044B\u0440 |\u0443\u0433 |\u0443\u043D\u043C| \u0431\u0443| \u0430\u0441|\u0441\u0438\u0430|\u043E\u0441\u0438|\u0441\u043E\u0441|\u0438\u043B\u0438|\u044B\u0434\u044B|\u043B\u044B\u0434|\u043D\u043C\u0430|\u044B\u0433 |\u0438\u043D\u04D9|\u04D9\u0440\u0430|\u0441\u0438\u043B|\u0445\u0438\u043B|\u0430\u0445\u0438|\u0434\u0430\u0445|\u0430\u0434\u04D9|\u043C\u0430\u043D|\u0430 \u04BB|\u04D9 \u043E|\u043E\u043D\u0443|\u0430 \u0433|\u04D9\u0437 | \u043A\u0438|\u0441\u0435\u0447| \u0441\u0435|\u044B \u04BB|\u043C\u0438\u043D|\u043B\u0430\u043D|\u04D9\u0434\u04D9|\u0431\u0443 |\u0440\u0430\u0433|\u043B\u044B |\u044B\u043B\u044B|\u0430\u043B |\u04D9 \u0433|\u0440 \u0432|\u043D\u043B\u0430|\u04BB\u0441\u0438|\u04D9\u04BB\u0441|\u0442\u04D9\u04BB|\u04E9\u0437 |\u0438\u0441\u0442| \u0438\u0441|\u043C\u04D9\u0441| \u04D9\u0441|\u0438\u043D\u0430|\u04D9 \u0442|\u04D9\u0442\u043B|\u0430 \u0432|\u0438\u04D9 |\u043D \u0431|\u0442\u04D9\u0440| \u0442\u0430| \u04B9\u04D9|\u0435\u0434\u0438|\u0430\u043B\u0430|\u043A\u0438\u043C|\u0433\u0443 |\u0438 \u0442|\u0443\u043B\u043C|\u043C\u04D9\u04BB|\u043D \u043E|\u0430\u0458\u0430|\u044B \u043E|\u0438\u0430\u043B| \u0441\u043E|\u0438\u043B\u043B|\u0441\u0438\u0458| \u0434\u04D9|\u0432\u0430\u0440|\u0438\u043D\u0441|\u043C\u0438 |\u0493\u044B |\u043D\u0438\u043A|\u0440 \u0438|\u0430\u0433\u043B|\u043A \u04BB|\u0442\u04D9\u043C|\u0442\u0430\u043C|\u0447\u04AF\u043D|\u04AF\u0447\u04AF| \u04AF\u0447|\u0493\u044B\u043D|\u0441\u0430\u0441|\u04D9\u0441\u0430|\u0437 \u04BB|\u04D9\u043C\u04D9|\u0437\u0430\u043C| \u0437\u0430|\u0441\u0442\u0438|\u0440\u04D9\u0444|\u043D \u0435|\u0440 \u0430|\u0438\u043B\u0434|\u04BB\u04D9\u043C|\u044B\u0433\u043B|\u0458\u0430\u043D|\u043C\u0430\u0458|\u043D \u04D9|\u043C\u04D9\u043D|\u043C\u0438\u043B| \u043C\u0438|\u04D9\u0433\u0438|\u0434\u0438\u043D|\u043D \u0434|\u0442\u04AF\u043D| \u0434\u04E9|\u043C\u0438\u0458|\u043A\u0430\u04BB|\u0438\u043A\u0430| \u043D\u0438|\u0444\u0430\u0434|\u0442\u0438\u0444|\u043B \u043E|\u0441\u04D9\u0440|\u0458\u043D\u0438| \u0435\u0458|\u0430\u043D\u0430|\u043B\u04D9\u043D|\u0430\u043C |\u0440\u0438\u043B|\u0430\u0458\u04D9|\u0430\u0448\u044B",koi:"\u043D\u044B |\u04E7\u043D | \u0431\u044B|\u0434\u0430 | \u043F\u0440|\u043B\u04E7\u043D|\u0440\u0430\u0432| \u043C\u043E|\u043F\u0440\u0430| \u0434\u0430|\u0431\u044B\u0434| \u0432\u0435|\u043E\u0440\u0442|\u043B\u04E7 |\u04E7\u0439 |\u043C\u043E\u0440|\u04E7\u043C |\u0430\u0432\u043E| \u043D\u0435|\u0432\u043E |\u044B\u0434 |\u044B\u0441 |\u043D\u04E7\u0439|\u044B\u043D |\u043C \u043F|\u0434 \u043C|\u044B\u043D\u044B|\u0442\u043D\u044B| \u0430\u0441|\u0442\u04E7\u043C|\u043B\u044C\u043D| \u044D\u043C|\u0432\u0435\u0440|\u0441\u044C |\u044C\u043D\u04E7|\u044D\u043C |\u043D \u044D|\u0442\u043B\u04E7| \u043A\u044B|\u0441\u04E7 | \u043F\u043E|\u0435\u0440\u043C|\u0441\u044C\u04E7|\u0440\u0442\u043B|\u0430\u043B\u044C| \u043A\u04E7|\u044D\u0437 | \u04E7\u0442|\u04E7 \u0432|\u0442\u043E |\u0435\u0442\u043E|\u043D\u0435\u0442|\u044B\u043B\u04E7| \u043A\u043E|\u0442\u0448\u04E7| \u043E\u0442| \u0438 |\u044B \u0441|\u0431\u044B |\u04E7 \u0431|\u0441\u0442\u0432|\u043A\u04E7\u0440| \u0432\u04E7|\u0448\u04E7\u043C|\u043A\u044B\u0442|\u0442\u0430 |\u043D\u0430 |\u0437 \u0432| \u0441\u0435| \u0434\u043E|\u0432\u043E\u043B|\u04E7\u0441 | \u0441\u044B|\u044B \u0430|\u043E\u043B\u0430|\u0440\u043C\u04E7|\u0430\u0441 |\u043E\u0437 | \u043E\u0437| \u0441\u0456|\u0430 \u0441|\u0442\u0432\u043E|\u0441 \u043E| \u0432\u044B|\u043B\u0456\u0441|\u04E7 \u043A|\u044B\u0442\u0448|\u04E7 \u0434|\u0438\u0441 |\u0456\u0441\u044C|\u04E7\u0442\u043D|\u0430\u0441\u044C| \u043E\u043B| \u043D\u0430|\u0430\u0446\u0438| \u044D\u0442|\u0430 \u0432|\u0437\u043B\u04E7|\u0441\u0435\u0442| \u0432\u043E| \u0447\u0443|\u043B\u0430\u0441|\u043B\u0430\u043D|\u043C\u04E7 |\u0442\u044B\u0441|\u0440\u0442\u044B|\u04E7\u0440\u0442|\u044B \u043F|\u04E7\u0442\u043B|\u043E \u0441|\u044D\u0442\u0430|\u0434\u0437 |\u043A\u04E7\u0442|\u04E7\u0434\u043D|\u0432\u043D\u044B| \u043C\u044B|\u043D \u043D|\u0443\u0434\u0436| \u0443\u0434|\u0432\u044B\u043B|\u04E7 \u043C|\u0440\u0442\u0456|\u043E\u0440\u0439|\u0438\u0441\u044C| \u0441\u043E|\u0432\u043E\u044D|\u044B\u0434\u04E7|\u0439 \u043E|\u043A\u043E\u043B| \u0433\u043E|\u0441 \u0441|\u0441\u0441\u0438|\u0441\u044B\u043B|\u044B\u0441\u043B|\u0439\u044B\u043D|\u043A\u0438\u043D|\u043E\u043B\u04E7|\u0442\u04E7\u043D| \u0441\u044C|\u0430\u043D\u0430|\u04E7\u0440 |\u0446\u0438\u044F|\u0430 \u0434|\u04E7\u043C\u04E7| \u0432\u0438|\u0437 \u043A| \u044D\u0437|\u044B \u0431|\u0442\u04E7\u0433|\u04E7\u0442 |\u043C\u04E7\u0434|\u0435\u0441\u0442|\u043E\u0441\u0442|\u04E7\u043D\u044B|\u0442\u0438\u0440|\u043E\u0442\u0438|\u0443\u043A\u04E7|\u0447\u0443\u043A|\u043D \u043F|\u043E\u043D\u0434|\u043F\u043E\u043D|\u0441\u043B\u04E7|\u043A\u0435\u0440| \u043A\u0435| \u043E\u0431|\u0441\u0438\u0441|\u0441\u0443\u0434|\u0430 \u043D|\u0434\u043E\u0440|\u043A\u043E\u043D|\u043D\u0435\u043A|\u043D \u0431|\u043B\u04E7\u0442|\u0441 \u0432|\u0442\u0456 |\u044C\u04E7\u0440|\u0442\u0440\u0430| \u0441\u0442|\u043D\u0430\u043B|\u043E\u043D\u0430|\u043D\u0430\u0446|\u043D \u043A|\u043A\u04E7\u0434|\u04E7\u0433 |\u0441\u043A\u04E7|\u0442\u044C |\u0435\u0442\u04E7|\u0434\u04E7\u0441|\u0431\u044B\u0442|\u0440\u043D\u044B|\u04E7 \u043D|\u0442\u0441\u04E7|\u0440\u0440\u0435|\u0430 \u0431|\u043D\u0434\u0430|\u0441 \u0434|\u0430\u0441\u0441|\u044B \u043A|\u0430\u0441\u043B| \u043B\u043E|\u044C\u043D\u044B|\u0441\u044C\u043D|\u044B \u043C|\u0435\u043A\u0438|\u044B \u0434| \u043C\u04E7|\u044C \u043C|\u044B \u043D|\u044B\u0442\u04E7| \u043C\u0435|\u0440\u0439\u04E7|\u0438\u0430\u043B|\u0439 \u0434|\u0438\u0442\u04E7|\u0430 \u043A|\u04E7\u0441\u044C|\u043C\u04E7\u0441|\u043E\u0432\u043D|\u0437\u044B\u043D|\u0430 \u043F|\u043E\u0442\u0441| \u043B\u0438|\u043E\u043B\u044F|\u04E7 \u0430|\u043E\u0441\u0443|\u04E7\u044F |\u043D\u04E7\u044F|\u0435\u0437\u043B|\u0440\u0435\u0437|\u043C\u0435\u0434|\u0441 \u043C| \u0441\u044D|\u044C \u043A|\u0440\u0439\u044B|\u0430\u043A\u043E|\u0437\u0430\u043A| \u0437\u0430|\u044C\u044B\u043D|\u043D\u043D\u0451|\u043C\u04E7\u043B|\u0443\u043C\u04E7| \u0443\u043C|\u044B \u0443|\u043D \u0432|\u043C \u0434|\u043D \u0441| \u0434\u0437|\u043D \u043E|\u0440\u0430\u043D|\u0441\u0442\u0440|\u043E\u0437\u044C|\u043F\u043E\u0437|\u0437 \u043F|\u043E \u0434|\u0446\u0438\u0430|\u043E\u0446\u0438|\u0441\u043E\u0446|\u0438\u043E\u043D|\u0430 \u043C|\u0435\u0441\u043A|\u0447\u0435\u0441|\u043D\u04E7 |\u0437 \u0434|\u0442\u0441\u044C|\u0431\u04E7\u0440| \u0431\u04E7| \u043E\u0432|\u0432\u0435\u0441|\u043A\u044B\u0434|\u04E7 \u0441|\u0432\u043E\u044B|\u043A\u043E\u0434|\u0442\u043A\u043E|\u04E7\u0442\u043A|\u043E\u043B\u044C|\u0434\u0431\u044B|\u0435\u0434\u0431|\u0441\u044C\u044B|\u0447\u044B\u043D|\u0442\u0447\u044B|\u04E7\u0442\u0447|\u0442\u043B\u0430|\u043C\u04E7\u043D|\u0441\u043B\u0430|\u0439\u04E7\u0437| \u0439\u04E7|\u0442 \u0432|\u044B \u0438|\u0435\u0437 |\u043E \u0432|\u043E\u043D\u044B|\u0439\u04E7 |\u0430\u043D\u043D|\u04E7\u043B\u044C| \u043F\u044B|\u0430\u043D |\u043D\u04E7\u0441|\u043D\u0438\u0442| \u0441\u0443|\u043C \u0441",bel:" \u043F\u0440|\u043F\u0440\u0430| \u0456 |\u0430\u0432\u0430|\u043D\u0430 |\u0440\u0430\u0432| \u043D\u0430| \u043F\u0430|\u043D\u044B |\u0432\u0430 |\u0430\u0431\u043E|\u0446\u044C | \u0430\u0431|\u0430\u0435 | \u043C\u0430|\u0430\u0432\u0435|\u0430\u043D\u043D|\u0430\u0446\u044B|\u0441\u0432\u0430| \u0441\u0432|\u0435 \u043F|\u043B\u044C\u043D| \u0447\u0430|\u043D\u0435 |\u043D\u043D\u044F|\u0430\u043B\u0430|\u0430 \u043D|\u0430\u0439 |\u043B\u0430\u0432|\u0447\u0430\u043B| \u043A\u043E| \u0430\u0434| \u043D\u0435|\u0433\u0430 |\u043E\u0436\u043D|\u043A\u043E\u0436|\u0432\u0435\u043A|\u043D\u044F | \u044F\u043A|\u0436\u043D\u044B|\u044B \u0447|\u043C\u0430\u0435|\u0430 \u043F|\u0430\u0433\u0430|\u0431\u043E |\u0435\u043A |\u0430 \u0430|\u0446\u0430 |\u0446\u0446\u0430| \u045E | \u0437\u0430|\u044B\u0445 |\u043F\u0430\u0432|\u0430 \u0441|\u0433\u043E |\u0432\u0456\u043D|\u0434\u043D\u0430|\u0431\u043E\u0434|\u043C\u0456 |\u0432\u0430\u0431|\u0432\u0430\u043D|\u0430\u043C | \u0432\u044B| \u0441\u0430| \u0434\u0430|\u0441\u0442\u0430|\u0430\u0432\u0456|\u043D\u043D\u0435|\u0430\u0441\u0446|\u043D\u0430\u0439|\u0446\u044B\u044F|\u043D\u0430\u0433|\u0430\u0440\u0430|\u0456 \u043D|\u043A \u043C|\u044F\u0433\u043E| \u044F\u0433|\u044C\u043D\u0430|\u043F\u0440\u044B|\u0430\u0446\u044C|\u0456 \u043F|\u043E\u0434\u043D|\u0441\u0442\u0432|\u0430\u043C\u0430|\u043D\u044B\u0445| \u0431\u044B|\u0442\u0432\u0430|\u0434\u0437\u0435|\u0430\u043B\u044C| \u0440\u0430|\u043D\u0456 |\u0456 \u0441|\u0456 \u0430|\u044B\u0446\u044C|\u0430 \u0431|\u0435\u043D\u043D|\u043B\u0435\u043D|\u0446\u0456 |\u043E\u045E\u043D|\u044B\u043C |\u0440\u0430\u0446|\u0456\u043D\u043D|\u0456\u0445 | \u0430\u0441| \u0442\u0430|\u0442\u043E |\u043D\u0430\u0441|\u044F\u043A\u0456| \u0434\u0437|\u0447\u044B\u043D|\u043E\u043B\u044C|\u0456 \u0434|\u0430\u0432\u043E|\u0430\u0434 | \u043D\u0456|\u0441\u0446\u0456|\u044B\u043C\u0456|\u043D\u044B\u043C|\u0431\u044B\u0446|\u044F \u043F|\u044C\u043D\u044B|\u044B\u044F |\u0430\u0440\u043E|\u0430\u043D\u0430|\u0456\u043D\u0430|\u0456 \u0456|\u0440\u0430\u0434| \u0433\u0440|\u043B\u044F |\u045E\u043B\u0435|\u043E \u043F|\u0430 \u045E|\u0440\u044B\u043C|\u043F\u0430\u0434|\u044B\u0456 | \u0456\u043D|\u0430\u043C\u0456|\u0434\u0437\u044F|\u0440\u0430\u043C|\u0446\u044B\u0456|\u0430\u0431\u0430|\u0430 \u0456|\u0434\u0443 |\u0436\u043D\u0430|\u045E\u043D\u0430|\u043D\u0430\u043B|\u043D\u0430\u0446|\u0440\u044B |\u044D\u0442\u0430|\u0433\u044D\u0442| \u0433\u044D|\u043D\u0435\u043D|\u0434\u0430 |\u0430\u0445 |\u0433\u0440\u0430|\u043A\u0430\u0446|\u0443\u043A\u0430|\u0430 \u0437|\u043A\u0456 |\u0430\u0434\u0441|\u045E \u0456|\u043D\u0441\u0442|\u044D\u043D\u043D|\u044F \u0430|\u043D\u043D\u0456|\u043E\u0434\u0443|\u0430 \u0440|\u043D\u043D\u0430|\u0445\u043E\u0434|\u043D\u0430\u043D|\u043F\u0435\u0440|\u0445 \u043F| \u0443 |\u0430\u0434\u0437|\u0456 \u0440|\u043C\u0430\u0434|\u043C \u043F|\u0435 \u043C|\u0430\u0434\u0443|\u0434\u0441\u0442|\u0434\u043B\u044F| \u0434\u043B|\u043E\u045E |\u043D\u0430\u0435|\u0456 \u043C|\u0430\u043A\u043E| \u043A\u0430|\u044B \u045E|\u0431\u0430\u0440|\u0435 \u0430|\u0430\u0446\u0446|\u0443\u044E |\u044B\u0446\u0446|\u0441\u0430\u043C|\u044F\u045E\u043B|\u0430\u043B\u0435|\u0440\u043E\u0434|\u0440\u0430\u0431| \u043F\u0435|\u0448\u0442\u043E| \u045E\u0441|\u0430\u0434\u043D| \u0441\u0443|\u0440\u043E\u045E| \u0440\u043E|\u0434\u0443\u043A|\u043B\u044E\u0431|\u044C \u0441| \u0448\u043B|\u0440\u0430\u0437|\u043D\u0430\u0432|\u0437\u043D\u0430|\u0432\u043E\u043B|\u0443\u0434\u0437|\u0430\u0434\u0430|\u0436\u044B\u0446|\u0447\u043D\u0430|\u0432\u0435 |\u0430 \u0442|\u0430\u0441\u043D|\u0441\u0430\u0446|\u0435\u0440\u0430| \u0440\u044D|\u044F\u043A\u043E|\u043A\u043B\u0430|\u0430\u043D\u044B| \u0448\u0442|\u044C \u0443|\u0430\u044E\u0446|\u043D\u0430\u0440| \u0443\u0441|\u0441\u043E\u0431|\u0430\u0441\u043E|\u043F\u0430\u043C|\u044F \u045E|\u0430\u0432\u044F|\u0447\u044D\u043D|\u0432\u043E\u045E|\u0442\u0430\u043A|\u043D\u0443 |\u044E \u0430|\u044C \u043F|\u0437\u0430\u043A|\u043A\u0430\u0440|\u0435 \u0456|\u044C \u0430|\u0431\u0435\u0441|\u0456\u044F |\u043A\u0456\u044F|\u0445 \u0456|\u0437\u0430\u0431|\u0430\u0441\u0430|\u0456\u043C |\u0436\u0430\u0432|\u0456 \u0437|\u043B\u0435\u0436|\u0442\u0430\u043D|\u0430\u0445\u043E|\u044F\u043B\u044C|\u044B\u044F\u043B|\u043E \u0441|\u044F\u043D\u0430|\u043A\u0430\u043D|\u0430\u043A\u0430|\u0456\u043D\u0448|\u0430\u043B\u0456|\u0432\u044B | \u043C\u043E|\u043D\u0430\u0445|\u044F \u044F|\u043C \u043D|\u043E\u0433\u0430| \u0431\u0435|\u0439 \u0434|\u043E \u0430| \u0441\u0442|\u0435\u043D\u044B|\u0456 \u045E|\u0430 \u0434|\u0435\u0441\u043F|\u0448\u043B\u044E|\u0446\u0446\u044F|\u044B \u0456|\u044B\u0441\u0442|\u0440\u044B\u0441|\u043B\u044E\u0447|\u043A\u043B\u044E|\u0442\u0430\u0446|\u0443\u043B\u044C|\u044B\u043D\u0441|\u0430\u0447\u044B|\u0441\u043F\u0440| \u0441\u043F|\u0430\u045E |\u044B\u043C\u0430|\u0430\u0440\u044B|\u043A\u0430\u043C|\u0435 \u045E|\u0456 \u043A|\u043A\u043E\u043D",bul:" \u043D\u0430|\u043D\u0430 | \u043F\u0440|\u0442\u043E | \u0438 |\u0440\u0430\u0432|\u0434\u0430 | \u0434\u0430|\u043F\u0440\u0430|\u0441\u0442\u0432|\u0432\u0430 |\u0430 \u0441|\u0430 \u043F|\u0432\u043E |\u043D\u043E |\u0438\u0442\u0435|\u0442\u0430 |\u043E \u0438|\u0435\u043D\u0438| \u0437\u0430|\u043D\u0435 | \u043D\u0435| \u0432\u0441|\u0432\u0430\u043D|\u0430\u0432\u043E|\u0430 \u043D|\u043E\u0442\u043E|\u0435 \u043D|\u043E \u043D|\u0430 \u0438|\u043A\u0438 |\u0438\u0435 |\u0442\u0435 |\u043D\u0438 |\u0438\u043C\u0430| \u0438\u043C|\u043B\u0438 |\u0438\u043B\u0438|\u0438\u044F | \u043F\u043E|\u043E\u0432\u0435|\u0430\u043D\u0435|\u0447\u043E\u0432|\u043C\u0430 | \u0447\u043E|\u0438 \u0447|\u0430 \u0434|\u043D\u0438\u0435|\u0430\u043D\u0438|\u0438 \u0434|\u0435\u0441\u0442| \u0438\u043B|\u0432\u0435\u043A|\u0432\u0441\u0435| \u043E\u0431|\u0435\u043A |\u0435\u043A\u0438|\u0441\u0435\u043A|\u0430\u0432\u0430|\u0442\u0432\u043E|\u0441\u0432\u043E| \u0441\u0432|\u0432\u043E\u0442|\u0430 \u0432|\u0438 \u0441|\u043E\u0441\u0442| \u0440\u0430|\u043E\u0432\u0430|\u0430 \u043E|\u0435 \u0438|\u0432\u0430\u0442|\u0438 \u043D|\u0435 \u043F|\u043A \u0438|\u0430 \u0431| \u0432 |\u0438 \u043F|\u043B\u043D\u043E|\u043E \u0434| \u0441\u0435| \u0431\u044A|\u043F\u0440\u0438|\u0440\u0430\u0437|\u0435\u0442\u043E|\u044A\u0434\u0435|\u0431\u044A\u0434|\u0430\u0442\u0430| \u043A\u043E| \u0442\u0440| \u043E\u0441|\u0430\u0446\u0438| \u0441\u044A|\u0431\u043E\u0434|\u043E\u0431\u043E|\u0432\u043E\u0431|\u0430\u0442 |\u0437\u0430 |\u0442\u0435\u043B| \u0435 |\u043E \u0441|\u0434\u0435 |\u043E \u043F|\u0435\u043D |\u0438 \u0432| \u043E\u0442|\u0441\u0435 |\u043D\u0438\u044F|\u0440\u0430\u043D|\u0430\u043B\u043D| \u0434\u0435|\u0431\u0440\u0430|\u0435\u0433\u043E|\u043D\u0435\u0433| \u0438\u0437|\u043E\u0442 |\u044F\u0442\u0430|\u043A\u0430\u043A|\u043E\u0434\u0438|\u0435 \u0441|\u0438 \u0438|\u0434\u0435\u043D|\u043F\u0440\u0435|\u0431\u0432\u0430|\u044F\u0431\u0432|\u0440\u044F\u0431|\u0442\u0440\u044F|\u043D\u0438\u0442| \u043A\u0430|\u044F\u0432\u0430|\u043F\u0440\u043E|\u0441\u0442 |\u0430 \u0437|\u0433\u043E\u0432|\u0432\u0435\u043D|\u0442\u0432\u0435|\u043E \u043E|\u0430 \u0440|\u0430\u043A\u0432|\u043E \u0432|\u0438 \u0437|\u0440\u0435\u0434|\u043D\u043E\u0441|\u0438\u044F\u0442|\u0435 \u0434|\u0449\u0435\u0441|\u043D\u043E\u0432| \u043D\u0438|\u0446\u0438\u044F| \u0434\u043E|\u0439\u0441\u0442|\u043E \u0442|\u0435 \u0442|\u0440\u0436\u0430|\u044A\u0440\u0436|\u0434\u044A\u0440|\u0435\u043D\u043E|\u043F\u043E\u043B| \u0441 |\u043E\u0431\u0440|\u0442\u0432\u0430|\u043D\u043E\u0442|\u0440\u0435\u0441|\u0435\u0439\u0441|\u0438 \u043E|\u0435 \u0432|\u043A\u043E\u0439|\u043E\u0431\u0449|\u043B\u0435\u043D|\u043E\u043D\u0430|\u043D\u0430\u0446|\u0438\u0447\u0435|\u0435\u0437 |\u0431\u0435\u0437| \u0431\u0435|\u0435\u0436\u0434|\u0443\u0432\u0430|\u0432\u0438\u0442|\u0440\u0438 |\u0437\u0430\u043A|\u0438 \u043A| \u043B\u0438|\u0430 \u0435|\u043F\u043E\u0434|\u0435\u043B\u0438|\u043D\u0438\u043A|\u0441\u0438 |\u0435 \u043E|\u0430 \u0442|\u0438 \u0440|\u0442 \u0441|\u043A\u0430 |\u043E\u0435\u0442|\u0435\u043B\u043D|\u043D\u0435\u043D|\u043E\u0439 |\u0433\u0440\u0430|\u0436\u0435\u043D|\u0434\u0440\u0443| \u0440\u0435|\u0430 \u043A|\u0441\u043D\u043E|\u043E\u0441\u043D|\u043B\u0438\u0447|\u0437\u0438 | \u0442\u0430|\u0441\u0430 |\u043D\u0441\u0442|\u0430\u0432\u043D|\u0447\u043A\u0438|\u0438\u0447\u043A|\u0441\u0438\u0447|\u0432\u0441\u0438|\u043B\u044E\u0447|\u043A\u043B\u044E|\u0434\u043D\u043E| \u043C\u043E|\u0435\u043C\u0435|\u0442\u044A\u043F|\u0430 \u0443|\u0438\u0437\u0432|\u0442\u0432\u0438|\u0434\u0435\u0439|\u044F \u043D|\u043A\u0440\u0438|\u0430\u0442\u043E|\u043E \u0440|\u0439 \u043D|\u0438\u043A\u043E|\u0438\u0447\u043D|\u0436\u0430\u0432| \u0434\u044A| \u0442\u043E|\u0431\u0449\u0435| \u0441\u043E|\u043B\u0438\u0442|\u0442 \u043D| \u0441\u0438|\u0442 \u0438|\u0432\u043D\u0438|\u043E\u0434\u043D|\u0436\u0434\u0430|\u0437\u043E\u0432|\u0430\u0437\u043E|\u0443\u0447\u0430| \u0433\u0440|\u043A\u043E\u0435|\u0441\u0442\u044A|\u0432\u043E\u043B|\u043B\u043D\u0438|\u0441\u0440\u0435| \u0441\u0440|\u043A\u0432\u0430|\u043A\u043E\u043D|\u0442\u043D\u043E|\u0430\u043A\u0430|\u0438 \u0443|\u043A\u043E |\u0433\u0430\u043D|\u043E\u0434\u0430|\u0447\u0435\u043D|\u043B\u0441\u0442|\u0435\u043B\u0441|\u0441\u0442\u0440| \u043A\u044A|\u0441\u0442\u0430|\u0440\u043E\u0434|\u043D\u0430\u0440|\u0438 \u043C|\u0438\u0430\u043B|\u043D\u0430\u043B|\u0440\u0443\u0433| \u0434\u0440|\u0447\u0435\u0441|\u0434\u0438 | \u0441\u0430| \u0442\u0435|\u0441\u0442\u043E|\u0434\u043E\u0441|\u0440\u0430\u0436|\u0440\u0435\u0437|\u0447\u0440\u0435|\u0433\u0430\u0442|\u0435\u043E\u0431|\u0430 \u043C|\u043E \u0435|\u0438\u043D\u0435|\u0430\u0441\u0442|\u043E\u0432\u043E|\u0447\u043D\u043E|\u0430\u0432\u0435|\u043C\u0443 | \u043C\u0443|\u0430\u043D\u043E|\u0438\u0442\u0430|\u0438\u043C\u0438|\u0430\u043A\u043E|\u043D\u0430\u043A|\u043B\u0430\u0433|\u043E\u0432\u0438|\u0430\u043D ",kaz:"\u043D\u0435 | \u049B\u04B1|\u0435\u043D |\u04B1\u049B\u044B| \u0431\u0430| \u049B\u0430|\u049B\u04B1\u049B|\u044B\u049B |\u0493\u0430 | \u0436\u04D9|\u04D9\u043D\u0435|\u0436\u04D9\u043D| \u043D\u0435| \u0431\u043E|\u0434\u0435 |\u0434\u0430\u043C|\u0430\u0434\u0430|\u0430 \u049B|\u0442\u0430\u0440|\u044B\u043D\u0430| \u0430\u0434|\u044B\u043B\u044B| \u04D9\u0440|\u044B\u04A3 |\u0430\u043D |\u0456\u043D |\u049B\u044B\u043B|\u0430\u0440 |\u0435\u043C\u0435|\u043D\u0430 |\u0440 \u0430|\u043B\u044B\u049B|\u0443\u0493\u0430|\u0430\u043B\u0430|\u044B\u049B\u0442| \u04E9\u0437|\u043C\u0435\u0441|\u04D9\u0440 | \u0436\u0430|\u043C\u0435\u043D|\u044B\u0493\u044B|\u043B\u044B | \u0434\u0435|\u049B\u0442\u0430|\u043D\u044B\u04A3|\u043D \u049B|\u0493\u0430\u043D|\u0456\u043D\u0435|\u0431\u0430\u0441|\u0430\u0440\u044B| \u043C\u0435| \u049B\u043E|\u0435\u043A\u0435|\u044B\u043D |\u0434\u0430 |\u0435 \u049B|\u0434\u044B |\u0430\u0441\u044B|\u0441\u0435 |\u0435\u0441\u0435|\u0430\u043C |\u0431\u043E\u043B|\u0430\u043D\u0434|\u043D\u0435\u043C| \u0431\u0456|\u0430\u0440\u0430|\u044B \u0431|\u0441\u0442\u0430|\u0442\u0430\u043D|\u043D\u0434\u044B|\u043D \u0431|\u0456\u04A3 |\u0435 \u0431|\u0456\u043B\u0456|\u0442\u0438\u0456| \u0442\u0438|\u0431\u0430\u0440|\u0493\u044B |\u043D\u0434\u0435|\u0435\u0442\u0442|\u0438\u0456\u0441|\u049B\u044B\u0493|\u0456\u0441 |\u043B\u0430\u0440|\u0433\u0435 |\u044B \u0442|\u0456\u043D\u0434|\u0456\u043A |\u0431\u0456\u0440| \u0431\u0435| \u043A\u0435|\u0430\u043B\u0443|\u0435 \u0430|\u0430\u043B\u044B|\u043B\u0443\u044B|\u0430 \u0436|\u0435\u0440\u0456|\u043E\u043B\u044B| \u0442\u0435|\u049B\u044B\u049B|\u043D \u043A| \u0442\u0430|\u043D \u0436|\u0493\u044B\u043D|\u0442\u0442\u0456|\u0456\u043D\u0456|\u0442\u044B\u043D| \u0435\u0440|\u043D\u0434\u0430|\u0456\u043C | \u0441\u0430|\u0435 \u0436|\u0430\u0442\u044B| \u0430\u0440|\u0440\u0493\u0430|\u0435\u0442\u0456|\u0430\u043D\u0430|\u044B \u04D9|\u0443\u044B\u043D|\u043B\u0493\u0430|\u04E9\u0437\u0456|\u043E\u0441\u0442|\u0435\u0433\u0456|\u0442\u0456\u043A|\u049B\u0430 |\u0441\u049B\u0430|\u0440\u044B\u043D|\u043A\u0456\u043D|\u043B\u0443\u0493|\u04A3 \u049B|\u043D\u0456\u04A3|\u0443\u044B |\u0431\u043E\u0441|\u0430\u0441\u049B|\u049B\u0430\u0440|\u0434\u044B\u049B|\u043D\u0430\u043D|\u043C\u044B\u0441|\u043C\u043D\u044B|\u0430\u043C\u043D|\u044B \u043C|\u0430\u0439\u0434|\u043A\u0435 | \u0436\u0435|\u0437\u0456\u043D|\u0440\u0434\u0435|\u0440\u0456\u043D|\u0435 \u0442|\u0433\u0435\u043D|\u044B\u043F |\u0440\u044B |\u0442\u0456 |\u0441\u044B\u043D|\u049B\u0430\u043C|\u0434\u0435\u043D|\u0456 \u0431|\u0433\u0456\u0437|\u0440\u0430\u043B|\u0435 \u04E9|\u043B\u0430\u043D|\u0441\u044B |\u0430\u043C\u0430|\u0442\u0442\u0430|\u0442\u044B\u049B|\u0431\u0435\u0440|\u0434\u0456 |\u0431\u0456\u043B|\u0440\u043A\u0456|\u04E9\u0437 |\u0437\u0434\u0435|\u043A\u0435\u0442|\u049B\u043E\u0440|\u0434\u0430\u0439|\u0443\u0433\u0435|\u044B \u0435|\u044B\u043D\u0434|\u043D\u0435\u0433|\u043E\u043D\u044B|\u0435\u0439 |\u043C\u0435\u0442|\u0430\u043D\u044B|\u0430 \u0442|\u0436\u0430\u0441|\u0430\u0443\u044B|\u043B\u0433\u0435|\u0430\u0441\u0430|\u0435\u0433\u0435|\u0434\u0430\u0440|\u0440\u0443 |\u0430\u0443 |\u0435\u0440\u043A|\u044B \u0436|\u0440\u044B\u043B| \u0442\u043E|\u043D \u043D|\u0435 \u043D|\u0442\u0456\u043D|\u0456\u0440 |\u0441\u0456\u0437|\u0442\u0435\u0440|\u043B\u043C\u0430|\u0456 \u0442|\u043A\u0456\u043C| \u0430\u043B|\u0440 \u043C|\u043B\u0456\u043A| \u043C\u04AF|\u0435 \u043C|\u0442\u04AF\u0440| \u0442\u04AF|\u043A\u0435\u043B|\u043B\u044B\u043F|\u0435\u04A3 |\u0442\u0435\u04A3|\u0440\u043B\u044B|\u043B\u0456\u043C|\u0440\u0434\u044B|\u0430\u0440\u0434|\u0430\u0442\u0442|\u0441 \u0431|\u044B\u0440\u044B|\u0441\u044B\u0437|\u044B\u0441 |\u0435\u043B\u0433|\u0434\u0430\u043B|\u0439\u0434\u0430|\u043E\u0440\u0493|\u0440\u049B\u044B|\u0430\u0440\u049B| \u0436\u04AF|\u0442\u0430\u043B|\u044B\u043B\u043C|\u0430 \u0431|\u0456\u0433\u0456|\u043B\u0434\u0435|\u0456\u0437 |\u049B\u0442\u044B| \u0435\u0448|\u0434\u0435\u0439|\u0430\u0439 |\u0436\u0430\u0493|\u043A\u0442\u0456|\u0456\u043A\u0442|\u0433\u0456\u043D| \u04D9\u043B|\u0442\u0442\u044B|\u04B1\u043B\u0442| \u04B1\u043B|\u0435 \u0434|\u044B\u043D\u044B|\u043B\u0456\u043D|\u0440 \u0431|\u0435\u043B\u0435|\u043A\u04B1\u049B| \u043A\u04B1|\u0430\u043C\u0434|\u043C \u0431| \u0435\u0442|\u043E\u0493\u0430|\u049B\u04B1\u0440| \u043A\u04E9|\u0430\u0493\u0430|\u0442\u043E\u043B|\u0448\u0456\u043D|\u0430\u0439\u044B| \u049B\u044B|\u049B\u0430\u043B|\u0436\u0435\u043A|\u0456 \u043D|\u0435\u0441 |\u0430\u0493\u044B|\u0435 \u043E|\u0435\u043B\u0456| \u0435\u043B|\u043D \u0435|\u0437\u0456 |\u0448\u043A\u0456|\u0435\u0448\u043A|\u043E\u043B\u0443|\u0446\u0438\u044F|\u043C\u0430\u0441|\u0493\u0434\u0430|\u0430\u0493\u0434|\u043B\u0442\u0442|\u0456\u043C\u0434|\u043D\u044B\u043C| \u0434\u0430|\u0430 \u0434|\u04D9\u0441\u0456|\u0441 \u04D9|\u049B\u0430\u0442|\u0456\u0440\u0456| \u0441\u043E|\u04A3 \u0431|\u0430\u0437\u0430|\u043C\u0434\u0430|\u0430\u0439\u043B| \u0430\u0441|\u0493\u0430\u043C|\u049B\u043E\u0493"},Arabic:{arb:" \u0627\u0644|\u064A\u0629 |\u0641\u064A | \u0641\u064A|\u0627\u0644\u062D| \u0623\u0648|\u0623\u0648 | \u0648\u0627|\u0648\u0627\u0644|\u062D\u0642 |\u0629 \u0627|\u0644\u062D\u0642|\u0627\u0644\u062A|\u0643\u0644 |\u0627\u0644\u0645|\u0644\u0643\u0644| \u0644\u0643|\u0644\u0649 |\u0642 \u0641|\u062A\u0647 |\u0648 \u0627|\u0629 \u0648|\u0634\u062E\u0635|\u0629 \u0644|\u0627\u062A |\u0627\u0644\u0623|\u064A \u0623|\u0648\u0646 | \u0634\u062E|\u0645 \u0627|\u0623\u064A | \u0623\u064A|\u0627\u0646 |\u0623\u0646 |\u0645\u0629 |\u064A \u0627|\u0627\u0644\u0627|\u0644\u0627 |\u0647\u0627 |\u0627\u0621 | \u0623\u0646| \u0639\u0644|\u062E\u0635 |\u0646 \u0627| \u0644\u0644|\u062F \u0627|\u0645\u0646 |\u0641\u0631\u062F|\u0645\u0627 |\u0627\u0644\u0639|\u062A \u0627|\u062D\u0631\u064A|\u0639\u0644\u0649|\u0644 \u0641|\u0631\u062F |\u0644 \u0634| \u0644\u0627|\u0631\u064A\u0629| \u0625\u0644|\u0629 \u0623|\u0627 \u0627|\u0646 \u064A| \u0648\u0644|\u0627 \u0644|\u0627 \u064A| \u0641\u0631| \u0645\u0646|\u0629 \u0645|\u0627\u0644\u0642|\u062C\u062A\u0645|\u0646 \u0623|\u0642 \u0627|\u0627\u0644\u0625| \u062D\u0631|\u0644\u0647 |\u0647 \u0644|\u0627\u064A\u0629|\u0644\u0643 |\u0647 \u0627| \u062F\u0648|\u062F\u0629 |\u0627\u064B |\u064A\u0646 |\u0647 \u0648|\u0644\u0629 |\u064A \u062D| \u0639\u0646|\u0645\u0627\u0639|\u064A \u062A|\u0630\u0627 | \u062D\u0642|\u0642\u0648\u0642|\u062D\u0642\u0648|\u060C \u0648|\u0646 \u062A|\u0645\u0639 |\u0635 \u0627|\u0627\u0645 |\u062F \u0623| \u0643\u0627|\u0647\u0630\u0627|\u0627\u0644\u0648| \u0625\u0646|\u0645\u0644 |\u0627\u0645\u0629|\u0639 \u0627|\u0625\u0644\u0649|\u0629 \u0639|\u0645\u0627\u064A|\u062D\u0645\u0627|\u0646 \u0648|\u0644\u062A\u0639| \u0648\u064A|\u064A\u0631 |\u0646\u0648\u0646|\u064A \u0648|\u0627\u0633\u064A|\u0627\u0644\u062C| \u0647\u0630|\u0646\u0633\u0627|\u0648\u0642 |\u062A\u0631\u0627|\u0639\u064A\u0629|\u0647 \u0623| \u0644\u0647|\u0633\u064A\u0629| \u064A\u062C| \u0628\u0627|\u062F\u0648\u0644|\u0627\u0646\u0648|\u0642\u0627\u0646|\u0644\u0642\u0627|\u0629 \u0628|\u0629 \u062A|\u062A\u0645\u0627|\u0627\u0644\u062F|\u064A\u0627\u062A|\u0639 \u0628|\u0633\u0627\u0646|\u0625\u0646\u0633|\u0647\u0645 |\u0639\u0644\u064A| \u0645\u062A|\u0644\u0645\u062C|\u0630\u0644\u0643|\u0639\u0645\u0644|\u0644\u0623\u0633|\u0648\u0632 |\u062C\u0648\u0632|\u064A\u062C\u0648|\u0628\u0627\u0644|\u063A\u064A\u0631|\u0643 \u0627|\u0643\u0627\u0646|\u0633\u0627\u0633|\u0623\u0633\u0627|\u062F\u0645 |\u0644\u0627\u062F|\u0627\u0639\u064A|\u0627\u0644\u0631|\u062A\u0645\u064A|\u062F\u0648\u0646|\u062A\u0645\u062A|\u0644\u062A\u0645| \u064A\u0639|\u0644\u064A\u0647|\u0633\u0627\u0648|\u0627\u062C\u062A|\u064A \u0645|\u0644\u0639\u0627|\u0644\u062C\u0645|\u062A\u0639\u0644|\u0631 \u0648|\u062A\u0645\u0639|\u0645\u062C\u062A| \u0645\u0639|\u064A\u0647 |\u0649 \u0623|\u0641\u064A\u0647|\u0649 \u0627| \u0643\u0644|\u0644\u0627\u062A|\u0645\u0644\u0627|\u0648\u062F |\u0627\u0646\u062A|\u0627\u0644\u0641|\u064A\u0647\u0627|\u064A \u0625|\u062A\u064A |\u0627\u0644\u0628|\u0644\u064A |\u0642\u062F\u0645|\u0627\u0644 |\u0627\u062F |\u0644 \u0627|\u064A\u0632 |\u064A\u064A\u0632|\u0645\u064A\u064A| \u062A\u0645|\u0644\u062D\u0631|\u062A\u0639 |\u0645\u062A\u0639|\u0627 \u0628|\u0639\u0627\u0645|\u0627 \u0648|\u0642 \u0648|\u0631\u0627\u0645|\u0644 \u0644|\u0644\u0627\u062C|\u0631\u0627 |\u0627\u0644\u0634| \u0648\u0625|\u064A\u0645 |\u0644\u064A\u0645|\u0634\u062A\u0631|\u0627 \u062D|\u0648\u0627\u062C|\u0644\u0632\u0648|\u0648\u0644 |\u0627 \u0641|\u0648\u0644\u0629|\u0644\u062D\u0645|\u0623\u0633\u0631| \u0630\u0644|\u0647 \u0641|\u0627\u062A\u0647|\u0645\u0633\u0627|\u0644\u0645\u0633| \u062A\u0639|\u0639\u0646 |\u0647 \u0639|\u0648\u0644\u0647|\u064A\u062A\u0647|\u0646 \u0644|\u0631\u0629 | \u0648\u0633|\u0627\u0629 |\u064A\u062F | \u062A\u062D| \u0645\u0633|\u064A \u064A|\u0644\u062A\u064A|\u0639\u0629 |\u0648\u0644\u064A|\u0644\u062F\u0648| \u0623\u0633| \u0648\u0641|\u0644 \u0648|\u0623\u064A\u0629|\u0646\u064A |\u0627\u0644\u0633|\u0644\u0627\u0646|\u0644\u0625\u0639|\u0629 \u0641|\u0631\u064A\u0627|\u0644 \u0625|\u0645 \u0628|\u0627\u0645\u0644|\u0643\u0631\u0627|\u062A\u0633\u0627|\u0645\u064A\u0639|\u062C\u0645\u064A| \u062C\u0645|\u0623\u0648\u0644|\u0628\u064A\u0629|\u0639\u064A\u0634|\u062A\u062D\u0642|\u0627\u062F\u0629|\u0633 \u0627| \u0645\u0645|\u0645\u0639\u064A|\u062C\u0645\u0627|\u0639\u0627\u062A|\u0627\u0639\u0627|\u0627\u0631\u0633|\u0645\u0627\u0631|\u0645\u0645\u0627|\u0645 \u0648|\u0631\u0627\u0643|\u0627\u0634\u062A|\u0627\u0644\u0637|\u0627\u062C |\u0632\u0648\u0627|\u0627\u0644\u0632| \u0648\u0645|\u062D\u062F\u0629|\u062A\u062D\u062F|\u0644\u0645\u062A|\u0645\u0645 |\u0644\u0623\u0645|\u062F\u0647 |\u0628\u0644\u0627| \u0628\u0644|\u0627\u0631 |\u064A\u0627\u0631|\u062A\u064A\u0627|\u062E\u062A\u064A|\u0627\u062E\u062A|\u0646 \u0645| \u0645\u0631",urd:"\u0648\u0631 | \u0627\u0648|\u0627\u0648\u0631|\u06A9\u06D2 | \u06A9\u06D2| \u06A9\u06CC| \u06A9\u0627|\u06CC\u06BA | \u062D\u0642|\u06A9\u06CC |\u06A9\u0627 | \u06A9\u0648|\u0626\u06D2 |\u06D2 \u06A9|\u06CC\u0627 |\u0633\u06D2 |\u06A9\u0648 |\u0634\u062E\u0635| \u0634\u062E|\u0646\u06D2 | \u0627\u0633| \u06C1\u06D2|\u0645\u06CC\u06BA|\u062D\u0642 | \u06C1\u0648| \u0645\u06CC|\u062E\u0635 |\u06D2 \u0627| \u062C\u0627|\u0627\u0633 | \u0633\u06D2| \u06CC\u0627|\u06C1\u0631 |\u06CC \u0627| \u06A9\u0631| \u06C1\u0631|\u06D2\u06D4 |\u0633\u06CC |\u06C1\u06CC\u06BA|\u0627 \u062D|\u0635 \u06A9|\u0648\u06BA |\u06D2 \u0645| \u0627\u0646|\u0631 \u0634|\u06D4 \u06C1|\u0627\u0626\u06D2|\u0632\u0627\u062F|\u0622\u0632\u0627| \u0622\u0632|\u0627\u0645 |\u0631 \u0627|\u0642 \u06C1|\u0627\u062F\u06CC|\u062C\u0627\u0626|\u06BA \u06A9|\u06C1\u06D2\u06D4|\u0645 \u06A9| \u06A9\u0633|\u0627 \u062C|\u06CC \u06A9|\u0633 \u06A9|\u06A9\u0633\u06CC| \u067E\u0631|\u06D2 \u06AF|\u06C1\u06D2 |\u0627\u0631 |\u062A \u06A9|\u062F\u06CC |\u067E\u0631 |\u0648 \u0627| \u062D\u0627| \u062C\u0648| \u06C1\u06CC|\u0627\u0646 |\u06CC \u062C|\u0631\u06CC | \u0646\u06C1| \u0645\u0639|\u062C\u0648 |\u0644 \u06A9|\u06CC \u062A|\u0646 \u06A9|\u06A9\u0631\u0646|\u0626\u06CC |\u0644 \u06C1|\u062A\u06CC |\u06C1\u0648 |\u06C1 \u0627| \u0627\u06CC|\u0635\u0644 |\u0627\u0635\u0644|\u062D\u0627\u0635|\u0631\u0646\u06D2|\u06CC \u0634|\u0646\u06C1 |\u06D4 \u0627|\u06BA\u06D4 |\u06CC\u06BA\u06D4|\u0631 \u06A9|\u0631 \u0645| \u0645\u0644|\u0648\u06C1 |\u0645\u0639\u0627|\u0631\u06D2 |\u06BA \u0627|\u0646\u06C1\u06CC|\u06D2 \u06C1|\u06D2 \u0628|\u0627\u06CC\u0633|\u06D2 \u0644| \u062A\u0639| \u06AF\u0627|\u06CC\u062A |\u06CC \u062D|\u0627 \u0627|\u06CC \u0645|\u0627\u067E\u0646| \u0627\u067E|\u06A9\u06CC\u0627|\u0645\u06CC |\u06CC \u0633| \u062C\u0633|\u06C1 \u06A9|\u0646\u06CC |\u0627\u0634\u0631|\u0639\u0627\u0634| \u062F\u0648|\u0644\u0626\u06D2| \u0644\u0626|\u0627\u0646\u06C1|\u0648\u0642 |\u0642\u0648\u0642|\u062D\u0642\u0648|\u0645\u0644 | \u0642\u0627|\u06A9\u06C1 | \u06AF\u06CC|\u0631 \u0628|\u06C1 \u0645| \u0648\u06C1| \u0628\u0646|\u06CC \u0628|\u0645\u0644\u06A9|\u062C\u0633 |\u0627\u06D4 |\u0631\u06CC\u0642|\u0631 \u0646|\u06D2 \u062C|\u0627\u062F |\u0627\u062A |\u06AF\u06CC |\u062F \u06A9|\u06D2 \u062D|\u062F\u0627\u0631|\u0631 \u06C1|\u06AF\u0627\u06D4|\u0642\u0648\u0645| \u0642\u0648|\u06D2\u060C |\u0627 \u0633|\u062F\u0648\u0633|\u0631 \u067E| \u0648 | \u0634\u0627|\u06CC \u0622|\u06BA \u0645|\u0642 \u062D| \u067E\u0648| \u0628\u0627|\u062E\u0644\u0627|\u0627\u0646\u06D2|\u06CC\u0645 |\u0644\u06CC\u0645|\u0648 \u062A|\u0648\u0646 | \u06A9\u06C1|\u06CC\u060C |\u06D4 \u06A9|\u0627 \u067E|\u0646 \u0627|\u0644\u06A9 |\u0639\u0644\u0627|\u0627 \u0645|\u0642 \u06A9|\u0627\u0626\u06CC|\u0648\u0633\u0631|\u06CC \u06C1|\u0648\u0626\u06CC|\u06CC\u0631 |\u0627 \u06C1|\u0639\u0644\u06CC|\u0648 \u06AF|\u0648\u0631\u06CC|\u062F\u06AF\u06CC|\u0646\u062F\u06AF|\u0648 \u06A9|\u06CC\u0633\u06D2| \u0645\u0646|\u0627\u0626\u062F|\u0631\u0627\u0626| \u0645\u0631|\u067E\u0648\u0631| \u0637\u0631|\u0648\u0645\u06CC|\u06D2 \u062E|\u0633\u0628 |\u0646\u0648\u0646|\u0627\u0646\u0648|\u0642\u0627\u0646| \u0633\u06A9|\u0648\u0627\u0645|\u06CC\u0646 | \u0631\u06A9|\u062A\u0639\u0644|\u0644\u0627\u0642|\u063A\u06CC\u0631|\u062F\u0627\u0646|\u060C \u0627| \u0628\u06CC| \u0645\u0633|\u06CC\u0648\u06BA|\u0646\u0627 | \u0628\u06BE| \u0628\u0631|\u0631\u062A\u06CC|\u0627\u062F\u0627|\u0627\u0645\u0644|\u06CC\u06C1 | \u06CC\u06C1|\u06C1 \u0648| \u0639\u0627|\u06CC \u067E| \u0628\u0686|\u0627\u0641 |\u0644\u0627\u0641| \u062E\u0644|\u06CC\u06D4 |\u06AF\u06CC\u06D4| \u062F\u06CC|\u06BE\u06CC |\u0628\u06BE\u06CC|\u062F\u06C1 |\u062C\u0627 |\u067E\u0646\u06CC|\u0642\u0648\u0627|\u0627\u0642\u0648|\u0631\u06A9\u06BE|\u06D2 \u06CC| \u0639\u0644|\u06A9\u0648\u0626|\u060C \u0645| \u0686\u0627|\u06D2 \u0633|\u0631 \u0639| \u067E\u06CC|\u0628\u0631\u0627|\u0631 \u0633|\u0631 \u062D|\u0633\u0627\u0646|\u0645 \u0627|\u06A9\u0627\u0645|\u0634\u0631\u062A| \u0631\u0627|\u0634\u0627\u0645|\u0645\u0646 |\u0632\u0646\u062F| \u0632\u0646|\u0628 \u06A9|\u062A \u0645|\u0627\u06C1 |\u0627\u0631\u06CC|\u0633 \u0645|\u0631 \u062C| \u0645\u062D|\u0648\u0631\u0627|\u06D2 \u067E|\u0637\u0631\u06CC|\u06C1\u0648\u06BA|\u0627\u0644 |\u06BA \u0633|\u06CC \u0646|\u06A9\u0631\u06D2| \u0645\u0642|\u062A \u0633|\u062A\u062D\u0641| \u062A\u062D|\u0648\u06D4 |\u06C1\u0648\u06D4|\u0628\u0646\u062F| \u0627\u0642|\u062F \u06C1| \u0627\u0645|\u0627\u0645\u06CC|\u0627\u0644\u0627|\u0644\u062A |\u0634\u0631\u06D2|\u06D2 \u0639|\u0627 \u06A9|\u0641\u0631\u06CC",pes:" \u0648 | \u062D\u0642| \u0628\u0627|\u0646\u062F |\u0631\u062F |\u062F\u0627\u0631| \u062F\u0627|\u06A9\u0647 |\u0647\u0631 | \u062F\u0631| \u06A9\u0647|\u062F\u0631 | \u0647\u0631|\u0631 \u06A9|\u062D\u0642 |\u062F \u0647|\u0627\u0632 |\u06CC\u062A | \u0627\u0632|\u06CC\u0627 |\u06A9\u0633 |\u0648\u062F |\u0627\u0631\u062F| \u06CC\u0627| \u06A9\u0633|\u0627\u06CC |\u062F \u0648| \u0628\u0631| \u062E\u0648|\u0642 \u062F|\u0628\u0627\u0634|\u0634\u062F |\u062F \u06A9|\u0627\u0631 |\u062F \u0628| \u0631\u0627|\u0647 \u0628|\u0627\u0646 |\u0622\u0632\u0627| \u0622\u0632|\u0631\u0627 |\u0627\u0634\u062F|\u06CC \u0648|\u0647 \u0627|\u06CC\u0646 |\u06CC\u062F |\u0632\u0627\u062F|\u0633 \u062D|\u062E\u0648\u062F|\u06CC \u0628| \u0627\u0633|\u062F\u0647 |\u062F\u06CC |\u0648\u0631 |\u0627\u06CC\u062F|\u0647 \u062F|\u0631\u06CC |\u0648 \u0627|\u062A\u0645\u0627|\u0627\u062A | \u0646\u0645|\u06CC \u06A9|\u0627\u062F\u06CC|\u0646\u0647 |\u0631\u0627\u06CC|\u062F \u0627| \u0622\u0646|\u0627\u0633\u062A|\u0631 \u0627|\u0631 \u0645| \u0627\u062C|\u0645\u0627\u06CC|\u0648\u0646 |\u0642\u0648\u0642|\u062D\u0642\u0648|\u0648 \u0645| \u0627\u0646|\u0627\u0646\u0647| \u0647\u0645|\u0648\u0642 |\u0627\u06CC\u062A| \u0634\u0648|\u06CC \u0627| \u0645\u0648| \u0628\u06CC|\u0628\u0627 | \u062A\u0627|\u0648\u0631\u062F|\u0627\u0646\u0648|\u0633\u062A |\u0648\u0627\u0646|\u0628\u0631\u0627|\u0627\u0645 |\u0634\u0648\u062F|\u0622\u0646 |\u062C\u062A\u0645|\u06CC \u06CC| \u06A9\u0646|\u0631 \u0628|\u06A9\u0646\u062F| \u0645\u0631|\u062A \u0645|\u0647\u0627\u06CC|\u062A \u0627| \u0645\u0633|\u06CC\u060C |\u0645\u0627\u0639|\u0627\u062C\u062A|\u062A\u0648\u0627|\u06CC\u06AF\u0631|\u0648 \u0628|\u062F\u0627\u0646|\u062A \u0648|\u0627 \u0645| \u0628\u062F|\u0639\u06CC |\u06A9\u0627\u0631| \u0645\u0646|\u0645\u0648\u0631| \u0645\u0642|\u06CC \u062F| \u0632\u0646|\u06CC \u0645|\u0646 \u0628|\u0631 \u062E|\u0627\u0647 |\u0627 \u0628|\u0627\u0631\u06CC|\u062F \u0622|\u0645\u0644 | \u0628\u0647|\u0627\u0639\u06CC|\u062F\u060C |\u062F\u06CC\u06AF|\u062A \u0628|\u0628\u0627\u06CC|\u0627\u06CC\u0646| \u0645\u06CC|\u0646 \u0648|\u0642 \u0645| \u0639\u0645| \u06A9\u0627|\u0646 \u0627|\u0648 \u0622| \u062D\u0645|\u0646\u0648\u0646|\u0647 \u0648|\u0648 \u062F|\u062F \u0634| \u0627\u06CC|\u0634\u0648\u0631|\u06A9\u0634\u0648| \u06A9\u0634|\u0644\u06CC |\u0646\u06CC |\u0647 \u0645|\u0628\u0639\u06CC|\u0631 \u0634|\u06CC\u0647 | \u0645\u0644|\u0645\u06CC\u062A|\u06CC \u0631|\u0631\u0646\u062F| \u0634\u0631|\u0645\u06CC |\u0648\u06CC |\u0633\u0627\u0648|\u0642\u0627\u0646| \u0642\u0627|\u0645\u0642\u0627|\u0627\u0648 | \u0627\u0648|\u062F \u0645|\u06AF\u06CC |\u0646\u0645\u06CC| \u0627\u062D| \u0645\u062D|\u0645\u06CC\u0646|\u0626\u06CC |\u0627\u062F\u0627| \u0622\u0645|\u062E\u0648\u0627|\u06AF\u0631\u062F| \u06AF\u0631|\u0645\u0646\u062F| \u0634\u062F|\u0627\u0626\u06CC| \u062F\u06CC|\u0632 \u062D|\u0647\u06CC\u0686| \u0647\u06CC|\u0627\u062F\u0647| \u0645\u062A|\u0646\u0645\u0627|\u062A \u06A9|\u0631\u0627\u0646| \u0628\u0645|\u0646 \u062D|\u0631 \u062A|\u062D\u0645\u0627|\u0627\u0631\u0646|\u0645\u0633\u0627|\u062F\u06AF\u06CC|\u0648\u0645\u06CC|\u0646 \u062A|\u0645\u0644\u0644|\u0628\u0631 |\u0647\u062F |\u0648\u0627\u0647|\u0628\u0647\u0631| \u0627\u0639|\u200C\u0647\u0627|\u0642 \u0648|\u060C \u0627|\u0639\u06CC\u062A|\u06CC\u062A\u0648|\u0627 \u0631|\u0646 \u0645| \u0639\u0642|\u0647\u0645\u0647|\u0627 \u0647|\u0632\u0634 |\u0648\u0632\u0634|\u0645\u0648\u0632|\u0622\u0645\u0648|\u0627\u0646\u062A|\u062A\u06CC |\u062C\u0627\u0645|\u0645\u0648\u0645|\u0639\u0645\u0648|\u062A\u062E\u0627| \u0641\u0631|\u0637\u0648\u0631|\u062F \u062F|\u0647 \u062D|\u0631\u062F\u0627|\u0627\u0648\u06CC|\u0646\u0648\u0627|\u0627\u0646\u06CC|\u0631\u0627\u0631| \u0645\u062C|\u06CC \u0646|\u062D\u062F\u06CC|\u0627\u062D\u062F|\u0646\u062F\u06AF|\u0632\u0646\u062F|\u0634\u062E\u0635| \u0634\u062E|\u200C\u0645\u0646|\u0647\u200C\u0645|\u0631\u0647\u200C|\u0647\u0631\u0647|\u0634\u062F\u0647|\u0639 \u0627|\u0648 \u0647|\u0627\u0633\u06CC|\u0647\u0654 |\u06CC\u062F\u0647|\u0639\u0642\u06CC|\u0627 \u0627|\u0645\u0647 | \u0628\u0634|\u0627\u062F |\u062F\u06CC\u0647|\u0627 \u062F|\u062F\u0648\u0627|\u06CC \u062D|\u0627\u0628\u0639|\u06CC \u062A|\u062E\u0627\u0628|\u0646\u062A\u062E|\u0631\u0648\u0631|\u0648 \u0631|\u0634\u0631\u0627| \u062E\u0627|\u0654\u0645\u06CC|\u0627\u0654\u0645|\u062A\u0627\u0654|\u0627\u064B |\u0627\u0645\u0644|\u0644\u0647 |\u062F \u0631|\u0627\u0633\u0627|\u062E\u0648\u0631|\u0628\u0644 |\u0627\u0628\u0644|\u0642\u0627\u0628|\u06CC\u06A9 |\u0633\u0627\u0646|\u0642\u0631\u0627|\u0627 \u0646|\u062E\u0635\u06CC| \u0627\u0645| \u0628\u0648|\u06CC\u0631 |\u0627\u0644\u0645|\u0628\u06CC\u0646|\u0627\u0647\u062F|\u062A\u0628\u0639| \u062A\u0628",zlm:" \u062F\u0627|\u0627\u0646 |\u062F\u0627\u0646| \u0628\u0631| \u0627\u0648|\u0646 \u0633|\u0631\u06A0 |\u062F\u0627\u0644| \u06A4\u0631|\u0644\u0647 |\u0643\u0646 | \u0643\u06A4|\u0646 \u0627|\u0646 \u0643|\u0646 \u062F|\u064A\u06A0 | \u064A\u06A0|\u06A4\u062F |\u062D\u0642 |\u0648\u0631\u06A0|\u062A\u064A\u0627|\u064A\u0627\u06A4|\u0627\u0631\u0627|\u0643\u06A4\u062F|\u0627\u0648\u0631|\u0631\u062D\u0642|\u0628\u0631\u062D|\u0627\u0644\u0647|\u0623\u0646 |\u0648\u0644\u064A| \u0627\u062A|\u0627\u062A\u0627|\u06A0\u0646 |\u062A\u0627\u0648|\u0627\u06A4 |\u0633\u062A\u064A|\u0644\u064A\u0647|\u0627\u0648 | \u0633\u062A|\u06A4 \u0627|\u064A\u0647 |\u0631\u0627 |\u0647 \u0628|\u0647 \u062F|\u0639\u062F\u0627| \u0639\u062F|\u0646 \u06A4|\u0646 \u0628|\u064A\u0646 | \u062A\u0631|\u0642 \u0643|\u0646 \u064A|\u064A\u0628\u0633|\u0628\u064A\u0628| \u062A\u064A| \u0633\u0648| \u0643\u0628| \u0633\u0627|\u0646 \u0645|\u0646 \u062A|\u0644\u0645 |\u0627\u0644\u0645|\u062F \u0633|\u06A0 \u0639| \u0645\u0646|\u0686\u0627\u0631|\u062F \u06A4|\u0631\u0646 |\u0633\u0627\u0645| \u0645\u0627|\u06BD \u0633|\u0646\u060C | \u0628\u0648| \u0627\u064A|\u0646\u062F\u0642| \u062D\u0642|\u06AC\u0627\u0631|\u0646\u06AC\u0627|\u0628\u0648\u0644|\u0633\u0628\u0627| \u0633\u0628|\u0627\u062A\u0648|\u0627 \u0633|\u0642\u0644\u0647| \u06A4\u0645| \u0645\u0645|\u0648\u0627\u0646|\u0633\u0686\u0627| \u0633\u0686| \u0643\u0633|\u0627 \u0628|\u0633\u0646 | \u0633\u0645|\u06A4\u0631\u0644|\u0627\u0648\u0646|\u0646\u06BD |\u062A\u0646 | \u0628\u0627|\u0647\u0646 |\u0633\u064A\u0627|\u0627 \u06A4|\u0627\u0631\u06A0|\u0628\u0627\u0631|\u06A4\u0627 |\u0628\u0633\u0646|\u0643\u0628\u064A|\u0627\u0645 |\u064A\u0646\u062F|\u064A \u062F|\u0627\u06AC\u064A|\u06A0 \u0628|\u0628\u0627\u06AC|\u064A \u0627|\u0645\u0627\u0646| \u0644\u0627| \u062F |\u062F\u0642\u0644|\u0647\u0646\u062F| \u0647\u0646|\u062A \u062F|\u0627\u062F\u064A|\u0648\u064A\u0646|\u064A\u0643\u0646| \u0646\u06AC|\u060C \u0643|\u0646\u0662 | \u06A4\u0648|\u0628\u06A0\u0633|\u0642\u0662 |\u0627\u062A |\u0627\u0648\u0644|\u0627\u0643\u0646|\u0627\u06BD | \u0633\u0633|\u0648\u0646 |\u0627\u062F | \u0643\u0648|\u0627\u064A\u0646|\u062F\u06A0\u0646| \u062F\u06A0|\u0627\u0626\u0646|\u062A\u0648 |\u062A\u064A |\u0646 \u0647|\u06AC\u064A |\u0633\u064A |\u0642 \u0645|\u0648\u06A0\u0646|\u062F\u0648\u06A0|\u0646\u062F\u0648|\u0644\u064A\u0646|\u0631\u0644\u064A|\u0646\u062A\u0648|\u06A4\u0648\u0646|\u0648\u0627\u062A|\u064A\u0627\u062F|\u062A\u064A\u0643|\u06A0\u0633\u0627|\u06A4\u0645\u0628|\u062A\u0631\u0645|\u0662 \u062F|\u062D\u0642\u0662|\u0648\u0627 |\u0644\u0648\u0627|\u0645\u0627\u0633|\u0648\u0642 |\u0647 \u0645|\u0644 \u062F| \u0645\u0644|\u0648\u0646\u062F| \u06A4\u06A0|\u0627\u060C |\u060C \u062A|\u0644\u0627\u0626|\u0627\u064A |\u0645\u06A4\u0648|\u064A\u0643 |\u064A \u0643|\u0631\u0627\u062A|\u0645\u0631\u0627| \u0628\u064A|\u0633\u0645\u0648|\u0648 \u0643|\u060C \u062F|\u0633\u0648\u0627|\u06A0 \u0645|\u06A0 \u0633|\u06A0\u0662 |\u06A4\u0631\u064A|\u064A\u0631\u064A|\u062F\u064A\u0631|\u0627 \u0627|\u0627\u0633\u0627|\u06A4\u0662 |\u062A\u0627 |\u0633\u0648\u0633|\u060C \u0633|\u062C\u0648\u0627|\u06A0 \u062A|\u0631\u0623\u0646| \u0627\u0646|\u0633\u0623\u0646|\u0631\u064A\u0643|\u064A\u0623\u0646|\u0631\u064A | \u062F\u0631|\u0627\u0645\u0631|\u0643\u0631\u062C| \u06A4\u0644|\u0627 \u062F|\u062C\u0631\u0646|\u0627\u062C\u0631|\u0627\u0631\u0643|\u0644\u0627\u062C|\u062F \u0643|\u0648\u0627\u0631|\u0628\u0631\u0633|\u0648\u0646\u062A|\u0645\u0646\u0648|\u0633\u0627\u0644|\u064A\u0646\u06A0|\u062F\u06A0\u0662|\u0646\u062F\u06A0| \u0645\u06A0|\u0627\u06A4\u0627|\u0633\u0633\u064A|\u0633\u0627\u0633|\u0646\u0646 |\u06A4\u0648\u0644|\u0627\u06AC\u0627| \u0628\u06A0| \u0633\u06A4|\u0645\u0628\u064A| \u0627\u06A4|\u06A0 \u0627|\u0627\u0631\u0623|\u06A4\u0631\u0627|\u064A \u0633|\u0628\u0633 | \u062F\u0644|\u0627 \u0645|\u0645\u0648\u0627|\u06A4\u0644\u0627|\u0645\u0644\u0627|\u06A4\u0631\u0643|\u0643\u0648\u0631|\u0648\u0628\u0648| \u0643\u0623|\u0648\u0643\u0646|\u0623\u0646\u06BD|\u0643\u0633\u0627|\u06A0\u06AC\u0648|\u0627\u062F\u06A4|\u0647\u0627\u062F|\u0631\u0647\u0627|\u062A\u0631\u0647|\u0643\u0648\u0645|\u062A\u0648\u0642|\u0645 \u0633|\u06A0 \u062F|\u062F\u064A | \u062F\u064A|\u0662 \u0633|\u0646\u062F\u064A|\u0627\u0633 |\u0627\u062F\u0627|\u0628\u0648\u0627| \u062F\u0628|\u06A0 \u06A4|\u06BD\u060C |\u0627\u06A4\u0662|\u0631\u062A\u0627|\u0627\u0644 |\u064A\u0627\u0644|\u0648\u0633\u064A| \u0643\u062A|\u0623\u0646\u060C|\u0646\u06A4\u0627|\u062A\u0646\u06A4| \u062A\u0646|\u0645 \u06A4|\u0631\u0633\u0627|\u0645\u0645\u06A4| \u0645\u0631|\u0646 \u062D| \u0643\u0645|\u0646\u0633\u064A|\u062C\u0623\u0646|\u0624\u064A |\u0644\u0624\u064A|\u0627\u0644\u0624|\u0644\u0627\u0644|\u0643\u06A4\u0631|\u0643\u062A |\u0631\u0643\u062A|\u0634\u0627\u0631|\u0645\u0634\u0627| \u0645\u0634|\u062C\u0627\u062F|\u0631\u06AC\u0627",skr:"\u062A\u06D2 |\u0627\u06BA |\u062F\u06CC |\u062F\u06D2 | \u06D4 |\u0648\u06BA | \u062A\u06D2| \u062F\u0627| \u06A9\u0648|\u06A9\u0648\u06BA| \u062D\u0642|\u062F\u0627 | \u062F\u06CC|\u06CC\u0627\u06BA| \u062F\u06D2|\u06CC\u06BA |\u06D2 \u0627|\u0634\u062E\u0635| \u0634\u062E|\u06C1\u0631 |\u06D2 \u06D4|\u0627\u0635\u0644| \u062D\u0627|\u062D\u0642 |\u062E\u0635 | \u06C1\u0631|\u0635\u0644 |\u062D\u0627\u0635|\u06C1\u06D2 | \u06C1\u06D2|\u0627\u0644 |\u0642 \u062D|\u0644 \u06C1| \u0646\u0627| \u06A9\u06CC| \u0648\u0686|\u06D4 \u06C1|\u06CC\u0627 |\u0633\u06CC |\u06D2 \u0645| \u0627\u0648|\u0648\u0686 |\u0627\u062A\u06D2|\u06A9\u06CC\u062A|\u0627 \u062D|\u0627\u062F\u06CC|\u0646\u0627\u0644|\u0635 \u06A9| \u0627\u062A|\u0631 \u0634|\u06C1\u06CC\u06BA| \u06CC\u0627|\u06BA \u062F| \u0627\u06CC|\u06CC\u0633\u06CC| \u0645\u0644|\u0648\u0646\u062F|\u06A9\u06C1\u06CC| \u06A9\u06C1|\u06CC \u062A|\u0632\u0627\u062F|\u0627\u0632\u0627| \u0627\u0632|\u0646\u062F\u06D2|\u06BA \u06A9|\u0627\u0631 | \u0648\u06CC|\u06D2 \u06A9|\u0626\u06D2 | \u0627\u0646|\u06BB \u062F|\u0646\u06C1 | \u06A9\u0631|\u0627\u0648\u0646|\u06D2 \u0648|\u062F\u06CC\u0627|\u06CC \u062F|\u06BA \u0627|\u06D2 \u0628|\u0648\u06CC\u0633|\u0648\u06BB |\u06CC \u0646| \u06C1\u0648|\u062A\u06CC |\u06CC \u06D4| \u0646\u06C1|\u06CC \u0627|\u06CC\u0646\u062F|\u0648 \u0684|\u0622\u067E\u06BB| \u0622\u067E|\u0627 \u0648|\u06D2 \u062C| \u06A9\u0646|\u06D2 \u0646|\u0646\u062F\u06CC|\u062A \u062F|\u06D2 \u062D|\u06CC \u06A9|\u0626\u06CC |\u0645\u0644\u06A9|\u06CC\u062A\u06D2|\u0646 \u06D4|\u062A\u06BE\u06CC| \u062A\u06BE|\u0648\u0646 |\u06BA \u0645| \u0628\u0686|\u06D4 \u0627|\u0646\u0648\u06BA|\u06A9\u0646\u0648|\u06BB\u06D2 |\u0627\u0631\u06CC|\u0627 \u0627|\u06D2 \u06C1|\u0644 \u062A| \u0684\u0626|\u0648\u0642 |\u0642\u0648\u0642|\u062D\u0642\u0648|\u0644 \u06A9|\u062E\u0644\u0627| \u062C\u06CC|\u0644\u06A9 |\u062F\u0627\u0631|\u06CC\u062A |\u06A9\u0631\u06BB|\u0627\u0646\u06C1|\u06A9\u0648 |\u06C1\u06A9\u0648| \u06C1\u06A9|\u0646 \u0627|\u0645\u0644 | \u0648\u0633|\u06BA \u0648|\u067E\u06BB\u06D2| \u062A\u0639|\u06CC \u0645|\u0627\u0641 |\u06D2 \u062E|\u0646\u0648\u0646|\u0642\u0646\u0648| \u0642\u0646| \u0644\u0648|\u06D4 \u06A9|\u0631\u06CC |\u0644\u06D2 |\u062A\u0627 |\u06CC\u062A\u0627| \u0642\u0648| \u0686\u0627|\u06C1\u0627\u06BA|\u0684\u0626\u06D2|\u0642 \u062A|\u0627\u06CC\u06C1|\u0631\u06BB |\u06D2 \u062F|\u0631 \u06A9| \u0648 |\u0644\u0627\u0641| \u062E\u0644| \u062C\u0648|\u06CC \u0648|\u0627\u0648 |\u06C1\u0648 |\u0626\u0648 |\u0686\u0626\u0648|\u0628\u0686\u0626|\u06CC\u0631 |\u06C1\u0648\u0648|\u0627 \u0645|\u06CC \u062C|\u0627\u0644\u0627|\u06CC\u0646 | \u062C\u0627|\u0645\u06CC |\u0646\u06C1\u0627|\u0627\u0646 |\u0627\u062A |\u0633\u06B1\u062F| \u0633\u06B1|\u06CC\u0628 |\u0633\u06CC\u0628|\u0648\u0633\u06CC| \u0634\u0627|\u0628 \u062F|\u06CC\u0648\u06BB|\u0627\u0645 |\u0627\u0648\u06BB|\u06D2 \u062A|\u06BB \u06A9| \u0645\u0637|\u06BA \u062A| \u0648\u0646| \u06A9\u0645|\u0646 \u062F|\u0631\u06A9\u06BE| \u0631\u06A9|\u06BB\u06CC |\u06BA \u0622|\u0631\u06CC\u0627|\u06CC \u06C1|\u0627\u062F |\u06CC\u0627\u062F|\u0639\u0644\u0627|\u0631 \u06C1|\u06BA \u0633|\u06CC \u062D|\u062C\u06BE\u06CC|\u0627\u0626\u062F|\u06C1\u06CC |\u0644\u0648\u06A9| \u068B\u0648| \u0633\u0645| \u0633\u0627| \u0645\u0646| \u0645\u0639|\u0628\u0642 |\u0627\u0628\u0642|\u0637\u0627\u0628|\u0645\u0637\u0627|\u06BE\u06CC\u0648|\u06BA \u0641|\u06C1\u0646 | \u06C1\u0646|\u062C\u0648 |\u0648 \u06A9|\u06BA \u0634|\u0631 \u062A|\u06A9\u0627\u0631|\u0645 \u062F|\u06BE\u06CC\u0627| \u067B\u0627|\u063A\u06CC\u0631|\u0648 \u0644|\u0648\u0626\u06CC|\u062C\u06CC\u0627|\u0648\u0627\u0645|\u0642\u0648\u0627|\u06CC \u0633| \u062C\u06BE|\u0644 \u0627|\u0642\u0648\u0645| \u0633\u06CC|\u0630\u06C1\u0628|\u0645\u0630\u06C1| \u0645\u0630|\u0627\u06D2 | \u0627\u06D2|\u062F\u0646 |\u0627 \u062A|\u0633\u0627\u0646|\u0646\u0633\u0627|\u0627\u0646\u0633|\u0631\u06D2 |\u0644\u06CC\u0645|\u0639\u0644\u06CC|\u062A\u0639\u0644|\u0627\u0645\u0644|\u06C1 \u062F|\u06D2 \u0631|\u062F \u0627|\u06A9\u0645 |\u06CC\u06C1\u0648|\u0641\u0627\u0626|\u0686 \u0627| \u06A9\u06BE|\u0645 \u062A|\u0631\u0627 |\u0648\u0631\u0627|\u067E\u0648\u0631|\u06BA \u0628|\u0642 \u062F|\u06D2 \u0642|\u0648\u06A9\u0648|\u06A9\u06BE\u06CC|\u0627 \u06A9|\u0648 \u062F|\u06D2 \u0630|\u067E\u06BB\u06CC|\u0628\u0646\u062F| \u0641\u0631|\u06A9\u0648\u0626|\u0627\u0645\u06CC|\u06CC \u06CC|\u0627\u0626\u06CC|\u0644\u0627\u0642|\u0627\u06CC\u06BA|\u06C1 \u0627| \u0646\u0638|\u0633\u0645\u0627|\u0648\u0645\u06CC|\u06CC\u060C |\u06D2 \u0633|\u062A \u0648|\u06BE\u06CC\u0646|\u06D2 \u0639|\u06CC\u0645 |\u0633\u06C1\u0648| \u0633\u06C1",pbu:" \u062F | \u0627\u0648|\u0627\u0648 |\u067E\u0647 | \u067E\u0647|\u064A\u06D4 | \u062D\u0642|\u0686\u06D0 | \u0686\u06D0|\u0631\u0647 |\u064A \u0627|\u06D0 \u062F| \u0647\u0631|\u0646\u0647 |\u0647\u0631 |\u062D\u0642 | \u0685\u0648|\u0648\u06A9 |\u0685\u0648\u06A9|\u0648 \u0627|\u0647 \u062F|\u0647 \u0627|\u06D4 \u0647|\u0647 \u0648| \u0634\u064A| \u0644\u0631|\u064A \u0686|\u0648 \u062F|\u0631\u064A |\u0644\u0631\u064A|\u0642 \u0644| \u06A9\u069A|\u0648\u064A |\u069A\u06D0 |\u06A9\u069A\u06D0|\u0647 \u06A9|\u063A\u0647 |\u0644\u0648 |\u0631 \u0685|\u0633\u0631\u0647| \u0633\u0631|\u0647 \u067E| \u067C\u0648|\u0648 \u067E|\u0644\u0647 |\u064A\u062A |\u067C\u0648\u0644|\u064A\u0627 |\u06A9\u0693\u064A| \u06A9\u0648|\u062E\u0647 |\u064A\u060C |\u062F\u064A | \u0644\u0647| \u0627\u0632|\u062F \u0645| \u0647\u064A| \u0648\u0627| \u064A\u0627| \u0685\u062E|\u0627\u0632\u0627|\u062F \u0627|\u0648\u0644\u0648|\u0647 \u062A|\u0685\u062E\u0647| \u06A9\u0693|\u0648\u0644 |\u0647\u063A\u0647|\u0647 \u0634|\u064A \u062F| \u0647\u063A|\u06A9\u0648\u0644|\u0632\u0627\u062F|\u0646\u0648 | \u0648\u064A|\u0648 \u064A|\u0647 \u0628|\u0634\u064A\u06D4|\u062F\u06D0 |\u064A\u0648 | \u062F\u064A|\u062A\u0647 |\u062E\u067E\u0644| \u067E\u0631|\u0627\u062F |\u062F \u062F|\u06A9 \u062D| \u062A\u0648|\u0647 \u0645|\u06AB\u0647 |\u0647 \u0647|\u0642\u0648\u0642|\u062D\u0642\u0648|\u0648 \u0645|\u0647 \u062D|\u062F \u0647| \u062A\u0631| \u0645\u0633|\u0634\u064A | \u0646\u0647|\u0693\u064A\u06D4|\u0646\u064A |\u062F \u067E|\u0648\u0627\u062F|\u06D0 \u067E|\u0627\u062F\u064A|\u0648\u0644\u0646| \u064A\u0648|\u062F \u062A|\u0648\u0646\u0648|\u0648\u06AB\u0647|\u064A \u0648|\u0644\u064A | \u062F\u0627|\u064A\u062F | \u0628\u0627|\u062A\u0648\u0646| \u062E\u067E|\u064A \u067E|\u062A\u0648\u06AB|\u0627\u0631 |\u0627\u0646\u062F|\u064A\u0648\u0627|\u06D0 \u0648|\u062F\u0627\u0646| \u0628\u0631|\u0693\u064A | \u0639\u0645|\u0627\u0646\u0647| \u062F\u0647|\u064A\u0685 |\u0647\u064A\u0685|\u0627\u0645\u064A|\u0644\u0646\u064A|\u0628\u0639\u064A|\u0689\u0648\u0644| \u0689\u0648|\u0647 \u0644|\u0627\u064A\u062F|\u0628\u0627\u064A|\u0627\u062A\u0648|\u0647 \u06AB| \u062A\u0627|\u067E\u0644 | \u0645\u0644|\u0627\u064A\u062A|\u0648\u0645 |\u0648\u0646 | \u0644\u0627|\u0647\u064A\u0648| \u0634\u0648| \u062F\u063A|\u0645 \u062F|\u062F\u0647 |\u06D0 \u0627|\u0627\u0646 | \u062A\u0647|\u06A9\u0627\u0631|\u062A\u0648 |\u0645\u064A |\u0627\u0631\u0647|\u0627\u0648\u064A|\u0633\u0627\u0648|\u0645\u0633\u0627|\u0646\u0648\u0646|\u062F\u0647\u063A|\u0648 \u062A|\u064A \u0634|\u0627\u0646\u0648| \u0645\u062D|\u064A\u0646 |\u0627\u062E\u0644| \u06AB\u067C|\u0634\u0648\u064A|\u062F\u063A\u0647|\u0648 \u062D|\u0648\u064A\u060C|\u0646\u064A\u0632|\u0633\u064A |\u0627\u0633\u064A|\u0648\u0646\u062F|\u0642\u0648 |\u0648\u0642\u0648|\u0648 \u06A9|\u0648\u0646\u0647|\u0648\u0645\u064A| \u0648\u06A9|\u064A \u062A| \u0627\u0646|\u0642\u0627\u0646|\u0646\u062F\u06D0|\u0648 \u0631|\u06A9 \u062F|\u0647 \u064A|\u0645\u064A\u0646|\u067E\u0631 |\u067C\u0647 |\u0644\u0627\u0645|\u063A\u0648 |\u0647\u063A\u0648|\u062F \u067C|\u0648 \u0647|\u0644 \u062A|\u0644\u06D2 |\u0648\u0644\u06D2|\u0648\u0648\u0646|\u06A9\u064A |\u0631\u0648 |\u0646 \u06A9|\u0645\u0648\u0645|\u0648\u06A9\u0693|\u067E\u0627\u0631|\u0646 \u0634|\u0645\u0646 | \u0646\u0648| \u0648\u0693| \u0642\u0627|\u06D0 \u0686| \u0648\u0633|\u0685 \u0685|\u0634\u062E\u0635| \u0634\u062E|\u0698\u0648\u0646| \u0698\u0648|\u062A\u0631 |\u06AB\u067C\u0647|\u0648 \u0685|\u0647\u0645 |\u0639\u0642\u064A|\u0631\u062A\u0647| \u0648\u0631|\u0628\u0644 | \u0628\u0644|\u0648 \u0628|\u0647 \u0633|\u069A\u0648\u0648| \u069A\u0648| \u06A9\u0627|\u06D0 \u06A9|\u0648 \u0633|\u0627\u062F\u0647|\u0648\u0646\u06A9| \u063A\u0648|\u062F\u0648 |\u0648 \u0646|\u062A \u06A9|\u0645\u0644 |\u0639\u0645\u0648|\u0644 \u0647| \u067E\u064A|\u0648\u0633\u064A|\u0693\u0627\u0646|\u0648\u0693\u0627|\u064A\u0632 |\u062E\u0635\u064A|\u064A \u0645|\u0627 \u0628|\u0627\u062F\u0627|\u0647 \u0646|\u062E\u0644\u064A|\u0648\u0627\u062E|\u062F\u064A\u0648|\u060C \u062F|\u062F \u0642| \u0647\u0645|\u0627 \u062F| \u0628\u064A|\u062A\u0628\u0639| \u062A\u0628|\u0647 \u0686| \u0639\u0642|\u067E\u0644\u0648|\u0648 \u0644| \u0631\u0627|\u062F \u0628|\u0631\u0627\u064A| \u062F\u062E|\u0646\u06D0 |\u0646\u06A9\u064A|\u062A \u062F|\u0627\u0628\u0639| \u0645\u0642|\u062F \u062E|\u0648\u0631\u0647|\u0634\u0631\u0627| \u0634\u0631|\u0631 \u0645|\u0631\u0633\u0631|\u062A\u0627\u0645|\u0647 \u067C| \u0645\u0646|\u0637\u0647 |\u0633\u0637\u0647|\u0627\u0633\u0637|\u0648\u0627\u0633|\u0644\u06D0 | \u0627\u0633|\u06D4 \u062F|\u0628\u0631\u062E|\u06D0 \u0646"},Devanagari:{hin:"\u0915\u0947 |\u092A\u094D\u0930| \u092A\u094D| \u0915\u093E| \u0915\u0947| \u0964 |\u0914\u0930 | \u0914\u0930|\u0915\u093E | \u0915\u094B|\u0915\u093E\u0930|\u093E\u0930 |\u0924\u093F |\u092F\u093E |\u0915\u094B |\u0928\u0947 |\u094B\u0902 |\u093F\u0915\u093E|\u094D\u0930\u0924| \u0939\u0948| \u0915\u093F|\u0902 \u0915|\u0939\u0948 |\u0927\u093F\u0915|\u0935\u094D\u092F|\u0905\u0927\u093F| \u0905\u0927|\u094D\u0924\u093F| \u0938\u092E|\u094D\u092F\u0915|\u093F \u0915|\u0915\u094D\u0924|\u093E \u0905|\u0915\u0940 |\u093E \u0915| \u0935\u094D|\u0947\u0902 | \u0939\u094B|\u092F\u0915\u094D|\u0938\u0940 |\u0938\u0947 |\u0947 \u0915| \u092F\u093E| \u0915\u0940|\u092E\u0947\u0902|\u0928\u094D\u0924| \u092E\u0947|\u0924\u094D\u092F|\u0948 \u0964|\u0924\u093E |\u0930\u0924\u094D|\u0915\u094D\u0937|\u0947\u0915 |\u092F\u0947\u0915|\u094D\u092F\u0947|\u093F\u0915 |\u0930 \u0939|\u092D\u0940 |\u0915\u093F\u0938| \u091C\u093E| \u0938\u094D|\u0915 \u0935|\u093E \u091C|\u093F\u0938\u0940|\u092E\u093E\u0928| \u0935\u093F|\u0930 \u0938|\u0924\u094D\u0930|\u0940 \u0938|\u0964 \u092A| \u0915\u0930|\u094D\u0930\u093E|\u0917\u093E |\u093F\u0924 | \u0905\u092A| \u092A\u0930|\u0938\u094D\u0935|\u0940 \u0915| \u0938\u0947|\u093E \u0938|\u094D\u092F | \u0905\u0928|\u094D\u0924\u094D|\u093F\u092F\u093E|\u093E \u0939| \u0938\u093E|\u0928\u093E |\u094D\u0924 |\u092A\u094D\u0924|\u0938\u092E\u093E|\u093E\u0928 |\u0930 \u0915|\u093E\u092A\u094D|\u0924\u0928\u094D| \u092D\u0940| \u0909\u0938|\u0930\u093E\u092A|\u0935\u0924\u0928|\u094D\u0935\u0924|\u0930\u094B\u0902|\u0935\u093E\u0930|\u0947 \u0938|\u0925\u093E |\u0939\u094B |\u0947 \u0905|\u093E \u0964|\u0928 \u0915| \u0928 |\u0926\u0947\u0936| \u0930\u093E|\u0937\u093E |\u0905\u0928\u094D|\u0924 \u0939|\u094D\u0937\u093E|\u094D\u0935\u093E|\u091C\u093E\u090F|\u0940 \u092A|\u0915\u0930\u0928|\u093E \u092A|\u0905\u092A\u0928|\u0937\u094D\u091F| \u0938\u0902|\u0947 \u0935|\u0939\u094B\u0917|\u093F\u0935\u093E|\u091F\u094D\u0930|\u094D\u091F\u094D|\u093E\u0937\u094D|\u0930\u093E\u0937|\u0938\u0915\u0947| \u092E\u093E|\u0913\u0902 |\u093E\u0913\u0902|\u0930\u0940 |\u0915 \u0938|\u0947 \u092A| \u0928\u093F|\u0940\u092F |\u0930\u0915\u094D|\u094B \u0938|\u093E\u090F\u0917|\u0930\u0928\u0947| \u0907\u0938|\u0935 \u0915|\u092A\u0930 |\u0930\u0924\u093E|\u0930 \u0905| \u0938\u092D|\u0924\u0925\u093E| \u0924\u0925| \u0910\u0938|\u0930\u093E |\u092A\u0928\u0947|\u094D\u0930\u0940|\u093F\u0915\u094D|\u0915\u093F\u092F|\u093E \u0935|\u092E\u093E\u091C|\u0902 \u0914|\u0930 \u0909|\u0926\u094D\u0927|\u0938\u092D\u0940|\u0936\u094D\u092F| \u091C\u093F|\u093E\u0928\u0947|\u093E\u0930\u094D|\u093E\u0930\u093E|\u0926\u094D\u0935| \u0926\u094D|\u090F\u0917\u093E|\u0938\u092E\u094D|\u0947\u0936 |\u093F\u090F |\u093E\u0935 |\u0930 \u092A| \u0926\u0947|\u094D\u0924\u0930|\u093E \u0914|\u093E\u0930\u094B|\u092F\u094B\u0902|\u092A\u0930\u093E|\u092A\u0942\u0930|\u091A\u093F\u0924|\u094D\u0927 |\u0930\u0942\u092A| \u0930\u0942| \u0938\u0941| \u0932\u093F|\u0924 \u0915|\u094B \u092A|\u0902 \u0938|\u0947 \u0932|\u0936\u093F\u0915| \u0936\u093F|\u0935\u093E\u0939|\u0947 \u0914|\u091C\u094B |\u0930\u093E\u0927|\u091C\u093F\u0938|\u0942\u0930\u094D|\u0940 \u092D|\u0942\u092A |\u094B\u0917\u093E|\u0938\u094D\u0925|\u0930\u0940\u092F|\u0924\u093F\u0915|\u094D\u0930 |\u0964 \u0907|\u0907\u0938 | \u0909\u0928|\u0932\u0947 |\u0947 \u092E|\u0932\u093F\u090F|\u092E \u0915|\u0915\u0924\u093E|\u0947 \u092F| \u091C\u094B|\u0928 \u092E|\u0905\u092A\u0930| \u092A\u0942|\u094B \u0915|\u093E \u0909|\u093E\u0939 |\u0928\u0942\u0928|\u093E\u0928\u0942|\u0917\u0940 |\u0926\u0940 |\u093E\u0930\u0940|\u0902 \u092E|\u0964 \u0915|\u0924\u0930\u094D|\u0940 \u0930|\u0936 \u0915|\u092A\u0930\u093F|\u0938\u094D\u0924|\u094B\u0908 |\u0915\u094B\u0908|\u0930\u094D\u092F|\u0940 \u0905|\u0939\u093F\u0924|\u092D\u093E\u0935| \u092D\u093E|\u0924\u093E\u0913|\u093E\u0938 |\u0938\u093E\u092E|\u0935\u093F\u0915|\u0935\u093F\u0935|\u092E\u094D\u092E| \u0938\u0915|\u0915\u0930 |\u093E\u0928\u093E|\u0927 \u0915|\u0928\u093F\u0915|\u092F \u0915|\u0909\u0938\u0915|\u0915\u0943\u0924| \u0958\u093E|\u0928 \u0938|\u091C\u0940\u0935|\u094D\u092F\u093E|\u0930\u0915\u093E|\u094D\u0930\u0915|\u093E\u091C |\u0928\u094D\u092F|\u094D\u092E |\u0930\u094D\u0923|\u0958 \u0939|\u0939\u0958 | \u0939\u0958|\u0940 \u092E|\u091C\u093F\u0915|\u093E\u091C\u093F|\u093E\u092E\u093E|\u0915 \u0914|\u092E\u093F\u0932|\u0947\u0928\u0947|\u0932\u0947\u0928| \u0932\u0947|\u092F\u0947 |\u094B \u0905|\u0947 \u091C|\u0930\u093F\u0935|\u092E\u092F |\u0938\u092E\u092F|\u0935\u0936\u094D|\u0906\u0935\u0936| \u0906\u0935|\u0910\u0938\u0940|\u093E\u0927 |\u0930 \u0926|\u0930\u094D\u0935|\u0938\u093E\u0930|\u092A \u0938|\u092C\u0928\u094D| \u0938\u0939|\u093F\u0927\u093E|\u0935\u093F\u0927|\u0940 \u0928|\u0942\u0928 |\u0958\u093E\u0928",mar:"\u094D\u092F\u093E|\u092F\u093E |\u0924\u094D\u092F|\u092F\u093E\u091A|\u091A\u093E |\u0923\u094D\u092F|\u093E\u091A\u093E| \u0935 |\u0915\u093E\u0930|\u092A\u094D\u0930| \u092A\u094D|\u093F\u0915\u093E|\u0927\u093F\u0915|\u093E\u0930 | \u0905\u0927|\u0905\u0927\u093F|\u091A\u094D\u092F|\u0906\u0939\u0947| \u0906\u0939|\u093E \u0905|\u0939\u0947 |\u093E \u0915|\u093E\u0938 |\u0935\u093E |\u094D\u092F\u0947|\u094D\u0930\u0924| \u0938\u094D|\u0924\u093E |\u093E \u0938| \u0905\u0938| \u0915\u0930|\u0938\u094D\u0935| \u0915\u093E|\u0932\u094D\u092F|\u0930\u0924\u094D|\u093E\u0939\u093F|\u0915\u094B\u0923| \u0915\u094B|\u093F\u0915 |\u092F\u0947\u0915|\u094D\u0935\u093E|\u093E \u0935| \u0924\u094D|\u0930 \u0906|\u094D\u092F |\u0924\u094D\u0930|\u0947\u0915\u093E|\u0915\u094D\u0937|\u093E \u0928| \u0938\u0902|\u093E\u092E\u093E|\u093E\u091A\u094D|\u0902\u0935\u093E|\u093F\u0902\u0935|\u0915\u093F\u0902| \u0915\u093F|\u093E\u0924 |\u0937\u094D\u091F|\u0915\u093E\u0938| \u092F\u093E|\u092F\u093E\u0902|\u093E\u0902\u091A|\u0930\u094D\u092F|\u092E\u093F\u0933| \u092E\u093F| \u0938\u093E|\u0935\u094D\u092F|\u094B\u0923\u0924|\u0928\u0947 |\u0947 \u092A|\u0915\u093E\u092E| \u0938\u092E|\u0902\u0924\u094D|\u092F\u0947 | \u0930\u093E|\u0938\u092E\u093E|\u0924\u0902\u0924|\u0915\u0930\u0923|\u093E \u0906|\u0947 \u0915|\u0939\u093F |\u0947 \u0938|\u0928\u093E |\u093F\u0933\u0923|\u0942\u0928 |\u093E \u092A|\u091F\u094D\u0930|\u094D\u091F\u094D|\u093E\u0937\u094D|\u0930\u093E\u0937|\u0940\u092F |\u0935 \u0938|\u0915\u094D\u0924|\u092E\u093E\u0928|\u0930\u094D\u0935| \u0906\u092A|\u0933\u0923\u094D|\u094D\u0930\u094D|\u093E\u0924\u0902|\u0935\u093E\u0924|\u091A\u0947 | \u0935\u093F|\u094D\u0937\u0923|\u0930\u0923\u094D| \u0926\u0947| \u0935\u094D|\u0906\u092A\u0932|\u0939\u0940 |\u093E\u0930\u094D|\u0928\u092F\u0947| \u0928\u092F|\u092E\u093E |\u092F\u093E\u0938| \u091C\u093E|\u0932\u0947\u0932| \u0928\u093F|\u0947 \u0905| \u092A\u093E|\u093E \u092E|\u0932\u0947 |\u093E\u0939\u0940|\u092C\u0902\u0927|\u0947 \u0935|\u094D\u092F\u0915| \u092E\u093E|\u0936\u093F\u0915| \u0936\u093F|\u0926\u0947\u0936|\u093E \u0926|\u092E\u093E\u091C|\u094D\u0930\u0940|\u0932\u0940 |\u093E\u0928 |\u093E\u0902\u0928|\u092A\u0932\u094D| \u0939\u094B|\u093E \u0939|\u0937\u0923 |\u091C\u0947 |\u093F\u091C\u0947|\u0939\u093F\u091C|\u092A\u093E\u0939|\u093E\u0930\u093E|\u092F\u093E\u0924|\u0938\u0930\u094D| \u0938\u0930|\u0930\u093E\u0902|\u0905\u0938\u0932|\u0902\u092C\u0902|\u0938\u0902\u092C|\u093F\u0915\u094D|\u0940 \u092A|\u0902\u091A\u094D|\u0930\u0915\u094D|\u0923\u0924\u094D| \u0906\u0923|\u0932\u093E |\u0938\u094D\u0925|\u0930\u0940\u092F|\u0940\u0924 |\u0902\u0928\u093E|\u0924 \u0935|\u094D\u0935 |\u0915 \u0935|\u0923\u0947 |\u093E\u091A\u0947|\u0928 \u0915|\u0924 \u0915|\u0930\u0924\u093E|\u094D\u0930\u093E|\u092F\u093E\u0939|\u094D\u0924 |\u091A\u0940 |\u092F \u0915|\u0926\u094D\u0927|\u094D\u0935\u0924|\u092F\u0915\u094D|\u0923\u093F |\u0906\u0923\u093F|\u0938 \u0938|\u0902\u0927\u093E|\u0915 \u0938|\u091A\u094D\u091B|\u092F \u0905|\u0924 \u0938|\u0940\u0928\u0947|\u094B\u0923\u093E|\u0915\u0930\u0924|\u0924\u094D\u0935|\u0940\u0932 |\u0940 \u0905|\u0938\u093E\u0930|\u0930 \u0935|\u092D\u093E\u0935|\u0935 \u0924|\u0925\u0935\u093E|\u0905\u0925\u0935| \u0905\u0925|\u0947 \u0924|\u0947 \u091C|\u092F\u093E\u092F|\u0902\u091A\u093E|\u0947\u0932\u094D|\u093E\u0928\u0947|\u0947\u0923\u094D|\u0915 \u0906|\u0915\u094D\u0915|\u0939\u0915\u094D| \u0939\u0915|\u0923 \u092E|\u0902\u0930\u0915|\u0938\u0902\u0930|\u0928\u094D\u092F|\u093E\u092F\u0926|\u093E \u0924|\u0924 \u0906| \u0909\u092A|\u0935\u0938\u094D|\u093F\u0935\u093E|\u0947\u0936\u093E|\u0938\u093E\u092E|\u0947 \u092F|\u0947 \u0906|\u0940 \u0935|\u0935 \u092E|\u0924\u0940\u0928|\u0935 \u0906|\u0927\u094D\u092F| \u0905\u0936|\u0927\u093E\u0924|\u0915\u0943\u0924|\u094D\u0915 |\u0926\u094D\u092F|\u093F\u0924 |\u0938\u0932\u0947|\u0947\u0936 |\u0924\u094B |\u0947\u0932 |\u0924\u0940 |\u094D\u0924\u0940|\u0905\u0938\u0947|\u0907\u0924\u0930| \u0907\u0924|\u0938\u094D\u0924|\u0930\u094D\u0923|\u093E \u092C|\u0947\u0932\u0947| \u0915\u0947|\u0939\u0940\u0930|\u091C\u093E\u0939|\u093E \u091C|\u0947\u0924 |\u0942\u0930\u094D|\u092A\u0942\u0930|\u0947\u091A | \u0935\u093E|\u093E\u091C\u093E|\u0940 \u0938|\u0936\u093E |\u092F \u0935| \u0928\u094D|\u092F\u093E\u0935|\u0926\u094D\u0926|\u094D\u0927 |\u0930\u0942\u0928|\u092F\u0926\u094D|\u0915\u093E\u092F|\u093E \u0936|\u0917\u0923\u094D|\u0915 \u0915|\u0930\u093E\u0927| \u0936\u093E|\u092F\u0924\u094D|\u0932 \u0905|\u094D\u092F\u0935|\u0940 \u0915|\u093E\u0935 |\u093E \u092F|\u0924\u094D\u0924|\u091C\u093F\u0915|\u093E\u091C\u093F|\u0930\u0923\u093E| \u0927\u0930|\u093E \u0927|\u092D\u0947\u0926| \u092C\u093E|\u0930\u0915\u093E|\u094D\u0930\u0915|\u0915\u0947\u0932|\u093F \u0935|\u093F\u0937\u094D|\u0924\u0940\u0932|\u092F\u094B\u0917|\u0938\u093E\u0927|\u093E\u0902\u0924|\u0935\u093F\u0935|\u0936\u094D\u0930| \u0927\u0947| \u092E\u0941|\u0935\u0924\u0903",mai:"\u093E\u0915 |\u092A\u094D\u0930|\u0915\u093E\u0930| \u092A\u094D|\u093E\u0930 |\u093F\u0915\u093E|\u094D\u092F\u0915|\u0927\u093F\u0915|\u0915 \u0905|\u094D\u0930\u0924|\u094D\u0924\u093F|\u0935\u094D\u092F| \u0905\u0927|\u0947\u0901 |\u0905\u0927\u093F|\u093F\u0915 | \u0935\u094D|\u0906\u02BC | \u0906\u02BC|\u0915\u094D\u0924|\u092F\u0915\u094D|\u0924\u093F\u0915|\u0915\u0947\u0901|\u0915 \u0935|\u092C\u093E\u0915|\u0915 \u0938|\u091B\u0948\u0915| \u091B\u0948|\u0924\u094D\u092F|\u092E\u0947 |\u0947\u0915 | \u0938\u092E|\u0915\u094D\u0937|\u0939\u093F |\u0930\u0924\u094D|\u0930 \u091B|\u092F\u0947\u0915|\u094D\u092F\u0947|\u0928\u094D\u0924|\u0935\u093E |\u093F\u0915\u0947|\u0915\u0964 |\u0948\u0915\u0964|\u0964 \u092A| \u0905\u092A| \u0938\u094D| \u0935\u093F| \u091C\u093E|\u093F\u0924 |\u0938\u0901 | \u0939\u094B|\u0915\u094B\u0928| \u0915\u094B|\u0924\u094D\u0930|\u0938\u094D\u0935| \u0935\u093E|\u0915 \u0906|\u0937\u094D\u091F| \u0915\u0930|\u0905\u092A\u0928|\u092E\u093E\u0928| \u0915\u093E| \u0905\u0928|\u0924\u093F |\u094D\u0924\u094D|\u0928\u094B |\u0928\u0939\u093F| \u092A\u0930|\u091F\u094D\u0930|\u094D\u092F | \u090F\u0939|\u093F \u0915|\u094D\u091F\u094D|\u093E\u0937\u094D|\u0930\u093E\u0937| \u0930\u093E|\u0938\u092E\u093E|\u094B\u0928\u094B|\u0932 \u091C| \u0928\u0939|\u0924\u093E\u0915|\u093E\u0930\u094D|\u092A\u0928 |\u0924\u0928\u094D|\u0935\u0924\u0928|\u094D\u0935\u0924|\u094D\u0937\u093E| \u0915\u090F| \u0938\u093E|\u094D\u0930\u0940| \u0928\u093F|\u093E \u0906|\u093F\u0935\u093E| \u0938\u0902| \u0926\u0947|\u091C\u093E\u090F|\u0940\u092F |\u0915\u0930\u092C|\u0925\u093E |\u090F\u092C\u093E|\u093E \u092A|\u0928\u093E |\u094D\u0935\u093E|\u0926\u0947\u0936|\u0924\u0964 |\u0930\u0915 |\u0915 \u0939|\u0901 \u0905| \u0938\u092D| \u0906 |\u0924 \u0915|\u091A\u093F\u0924|\u094D\u0924 |\u0935\u093E\u0930|\u0924\u093E |\u093E\u0930\u0915|\u092E\u093E\u091C|\u093E \u0938|\u0930\u0940\u092F|\u0928\u094D\u092F|\u0930\u0924\u093E|\u093E\u0928 |\u094D\u0930\u093E|\u094D\u092F\u093E|\u0930\u0915\u094D|\u093E\u0930\u0923|\u092A\u0930\u093F|\u090F\u0932 |\u0915\u090F\u0932|\u0905\u0928\u094D|\u0930\u092C\u093E|\u0915 \u092A|\u0913\u0930 |\u0906\u0913\u0930| \u0906\u0913|\u0905\u091B\u093F| \u0905\u091B|\u093F\u0930\u094D|\u093E\u0928\u094D|\u0928\u0915 |\u0939\u094B\u090F|\u0915\u0930 |\u0927\u093E\u0930|\u0938\u094D\u0925|\u093E \u0905|\u093F\u092E\u0947|\u0930 \u0906|\u090F\u0939\u093F| \u090F\u0915|\u0947 \u0938|\u0924\u0925\u093E| \u0924\u0925| \u092E\u093E|\u093F\u0915\u094D|\u0936\u093F\u0915| \u0936\u093F|\u092A\u094D\u0924|\u0930\u094D\u0935|\u0928\u093F\u0930|\u091A\u094D\u091B|\u0930\u094D\u092F|\u0901 \u0938|\u0915 \u0915|\u0939\u094B |\u093E\u0939\u093F|\u090F\u0924\u0964|\u0930 \u092A|\u093E\u092E\u093E|\u0938\u093E\u092E|\u0937\u093E |\u02BC \u0938|\u0901 \u090F|\u0948\u0915 |\u0926\u094D\u0927|\u0930 \u0905|\u0915 \u091C|\u0938\u094D\u0924|\u093E\u092A\u094D|\u0901 \u0915| \u0938\u0915|\u092F\u0915 |\u0915\u093E\u0928|\u0939\u0928 |\u090F\u0939\u0928|\u0947\u0932 |\u094B\u090F\u0924|\u0924 \u0906|\u093E \u0935|\u0964 \u0915|\u094D\u0924\u0930|\u093E\u090F\u0924|\u094D\u0930\u0915|\u0939\u0941 |\u0915 \u0909|\u092A\u0942\u0930|\u0935\u093F\u0935|\u02BC \u0905|\u091B\u093F | \u0932\u0947|\u0928 \u092A|\u093E\u0938 |\u0930\u093E\u092A|\u0927\u0915 |\u092A\u090F\u092C| \u092A\u090F|\u0930\u093E |\u092F\u0924\u093E|\u0930\u0942\u092A|\u0928 \u0935| \u0915\u0947|\u0937\u093E\u0915|\u092F \u092A|\u0924 \u0939|\u091C\u093E\u0939| \u0913 |\u092D\u093E\u0935|\u092A\u0930 |\u0925\u0935\u093E|\u0905\u0925\u0935| \u0905\u0925|\u0938\u092E\u094D|\u091C\u093F\u0915|\u093E\u091C\u093F|\u0942\u0930\u094D|\u0930\u0924\u093F| \u0926\u094B|\u0938\u092D\u0915|\u0964 \u0938| \u091C\u0928|\u0938\u092D |\u092C\u093E\u0927|\u0905\u0928\u0941|\u093F\u0938\u0901| \u0938\u0939|\u0901 \u0935|\u090F \u0938|\u0930\u093F\u0935|\u0924\u0941 |\u0947\u0924\u0941|\u0939\u0947\u0924| \u0939\u0947|\u093E\u0927 |\u0947\u092C\u093E|\u0928 \u0938|\u093F\u0937\u094D|\u0930\u093E\u0927| \u0905\u0935|\u093F\u0924\u094D|\u0935\u093E\u0938|\u091A\u093E\u0930| \u0909\u091A|\u093E\u0930\u093E|\u0928 \u0915|\u0935\u0915 |\u093E \u0915|\u0928\u0942\u0928|\u093E\u0928\u0942|\u090F\u0924 |\u0930\u0940 |\u0947\u0913 |\u0915\u0947\u0913|\u0930\u0923 |\u094D\u0930\u0938|\u093F \u0926|\u0913 \u0935| \u092D\u0947|\u0928\u0939\u0941|\u094B\u0928\u0939|\u094D\u0925\u093F|\u092A\u0924\u094D|\u092E\u094D\u092A|\u0930\u093E\u091C| \u092D\u093E|\u0939\u093F\u092E| \u0939\u0915|\u093E\u092E\u0947|\u094D\u0923 |\u0930\u094D\u0923|\u0939\u093E\u0930|\u093F \u0938|\u0915 \u0926|\u0928 \u0905|\u0924 \u0905|\u0932\u0947\u092C| \u0905\u092D|\u093F\u0936\u094D|\u091C\u0915 |\u093E\u091C\u0915|\u0928 \u0906|\u0935\u093E\u0939|\u0915\u093E\u091C|\u0936\u094D\u092F|\u0935\u0938\u094D|\u0913\u0939\u093F| \u0913\u0939|\u092F\u094B\u0917|\u0964 \u090F|\u0915\u090F |\u0947 \u0913|\u0905\u092A\u0930",bho:" \u0915\u0947|\u0915\u0947 |\u0947 \u0915|\u093E\u0930 |\u0915\u093E\u0930|\u093F\u0915\u093E|\u0927\u093F\u0915|\u0905\u0927\u093F| \u0905\u0927|\u0913\u0930 |\u0906\u0913\u0930| \u0906\u0913|\u0947 \u0905|\u0947 \u0938|\u093E \u0915| \u0938\u0902|\u093F\u0915 |\u0930 \u0939|\u093E \u0938| \u0939\u094B|\u0930 \u0938|\u0947\u0902 |\u092E\u0947\u0902| \u092E\u0947| \u0915\u0930| \u0938\u0947|\u0928\u094B |\u0915\u094D\u0937|\u0938\u0947 | \u0915\u093E|\u0964 \u0938|\u0916\u0947 |\u093E\u0964 |\u0930\u093E | \u0938\u092E| \u0938\u092C|\u094D\u0930\u093E| \u0938\u0915|\u0930 \u0915|\u0928 \u0915|\u0935\u0947 |\u094C\u0928\u094B|\u0915\u094C\u0928| \u0915\u094C|\u091A\u093E\u0939| \u091A\u093E| \u092C\u093E|\u092A\u094D\u0930| \u092A\u094D|\u0925\u093E |\u093F \u0915|\u0924\u093F | \u091C\u093E| \u0938\u093E|\u0947 \u0906|\u092A\u0928 |\u0915\u0930\u0947|\u0924\u093E |\u0939\u094B\u0916|\u0924 \u0915|\u0947\u0964 |\u0947 \u092C|\u0924\u0925\u093E| \u0924\u0925| \u0906\u092A|\u0915\u0947\u0932|\u0938\u0915\u0947| \u0938\u094D|\u0930\u0947 |\u0938\u092C\u0939|\u0915\u0930 |\u0906\u092A\u0928|\u0947 \u0913|\u091C\u093E | \u092A\u0930|\u0937\u094D\u091F| \u0930\u093E|\u0928\u093E |\u0939\u0935\u0947| \u0939\u0935|\u0932\u093E |\u0947\u0932\u093E|\u092C\u0939\u093F| \u0913\u0915|\u094B\u0916\u0947|\u0930 \u092C|\u0939\u0964 | \u0939\u0964|\u0928 \u0938|\u093E\u0937\u094D|\u0930\u093E\u0937|\u094D\u0924 | \u0914\u0930|\u0947 \u091A|\u0964 \u0915|\u0938\u0902\u0917|\u0930 \u0906|\u091F\u094D\u0930|\u094D\u091F\u094D|\u0937\u093E |\u092E\u093E\u0928|\u093E \u0906|\u0902 \u0915|\u093E \u092A|\u094D\u0937\u093E|\u0930\u0915\u094D|\u0939\u0947 |\u093E\u0939\u0947|\u093E\u0924\u093F|\u093E\u0935\u0947| \u091C\u0947|\u0939\u0940 |\u0913\u0915\u0930|\u092E\u093F\u0932|\u093F\u0924 |\u094B \u0938|\u0932 \u091C|\u0907\u0916\u0947|\u0928\u0907\u0916| \u0928\u0907|\u0924\u094D\u0930|\u092E\u093E\u091C| \u092C\u093F|\u0935\u0947\u0964|\u0947 \u091C|\u0915 \u0938|\u093F\u0902 |\u0939\u093F\u0902|\u0915\u0930\u093E|\u0914\u0930 |\u0947 \u092E|\u0938\u092E\u093E|\u0939\u0941 | \u0913 |\u092A\u0930 |\u0947 \u0928|\u0938\u094D\u0925|\u0930\u0940\u092F|\u094D\u0930\u0940|\u0932\u093E\u0964|\u093E\u091C |\u093E\u0928 |\u0915\u093E\u0928|\u0947 \u0924|\u093F\u0930 |\u0924\u093F\u0930|\u0916\u093E\u0924| \u0916\u093E|\u0947 \u0909|\u0928\u0942\u0928|\u093E\u0928\u0942|\u093E\u092E | \u0938\u0941| \u0926\u0947|\u0940 \u0915| \u092E\u093E|\u0930 \u092E|\u092A\u094D\u0924|\u093F\u092F\u093E|\u093E\u0939\u0940|\u092C\u093E\u0964|\u092F\u094B\u0917|\u0940 \u0938|\u0932 \u0939|\u0942\u0928 |\u0935\u094D\u092F|\u0941 \u0915|\u090F \u0915|\u0947 \u0935|\u0902\u0924\u094D|\u0938\u094D\u0935|\u0915\u0947\u0939|\u0940\u092F |\u0916\u0932 |\u0938\u093E\u092E|\u092F\u0924\u093E|\u0924\u093F\u0915|\u0947 \u0939|\u093E\u092A\u094D|\u0930\u093E\u092A|\u0930 \u092A|\u0930 \u0905| \u0932\u094B| \u0938\u0939|\u091C\u0947 |\u094B\u0917 |\u092E \u0915|\u0932\u0947 | \u0928\u093F|\u0947\u0915\u0930|\u093E \u0939|\u092A\u0942\u0930|\u0930 \u0928|\u0947\u0939\u0941|\u094D\u092F |\u092F\u093E | \u092F\u093E|\u0926\u0947\u0936|\u0926\u0940 |\u093E \u092E|\u093E\u0935 | \u0926\u094B|\u0947 \u0926| \u092A\u093E|\u0939\u093F |\u093F\u0915\u094D|\u0936\u093F\u0915| \u0936\u093F|\u092C\u093E |\u093F\u0932 | \u0909\u092A|\u094D\u0930\u0924| \u0935\u093F| \u0939\u0940| \u0932\u0947|\u0930\u094B |\u0947 \u0916|\u0920\u0928 |\u0917\u0920\u0928|\u0902\u0917\u0920| \u092E\u093F|\u0937\u0923 |\u094D\u0937\u0923|\u0902\u0930\u0915|\u0938\u0902\u0930| \u0906\u0926| \u090F\u0915|\u0928\u0947 | \u0905\u092A|\u0924\u0902\u0924|\u0935\u0924\u0902|\u094D\u0935\u0924|\u094D\u0924\u0930|\u094D\u092F\u093E|\u0947\u0936 |\u093E\u0926\u0940|\u094D\u0924\u093F|\u091C\u093F\u0915|\u093E\u091C\u093F|\u0915 \u0906|\u094D\u092E |\u091A\u093E\u0930| \u0909\u091A| \u0936\u093E|\u0930\u0940 |\u093E\u0939 |\u092F\u093E\u0939|\u092C\u093F\u092F|\u091A\u093F\u0924|\u0915\u094D\u0924|\u092A\u092F\u094B|\u0909\u092A\u092F|\u0930\u0924\u093E|\u0930 \u0935|\u0928 \u092E|\u0932\u094B\u0917|\u0939 \u0915|\u0928 \u092A|\u0915\u093E\u092E| \u092A\u0942| \u0907 |\u0906\u0926\u093F|\u0908\u0932 | \u0915\u0908| \u0935\u094D|\u092E\u0940 |\u0941\u0930\u0915|\u0938\u0941\u0930| \u091C\u0940|\u0927\u093E\u0930|\u092F \u0938|\u0924\u0930\u094D|\u092D\u0947 |\u0938\u092D\u0947| \u0938\u092D|\u092D\u093E\u0935|\u094D\u0925\u093F|\u093E\u092E\u093E|\u0938\u0930 |\u0930\u094D\u092E| \u0915\u094B| \u092C\u0947|\u094B\u0938\u0930|\u0926\u094B\u0938|\u0923 \u0915|\u093E\u0938 |\u0947 \u092A|\u091C\u093E\u0926|\u0906\u091C\u093E| \u0906\u091C|\u0909\u091A\u093F|\u0917 \u0915|\u093E\u0930\u0940| \u091C\u0930|\u0917\u0947 |\u091C \u0915|\u0940 \u092C|\u0938\u0928 |\u0939\u094B |\u093E \u0924",npi:"\u0915\u094B |\u0928\u0947 | \u0930 |\u093E\u0930 |\u0915\u094D\u0924|\u0915\u093E\u0930|\u092A\u094D\u0930| \u092A\u094D|\u094D\u092F\u0915|\u0935\u094D\u092F| \u0917\u0930|\u093F\u0915\u093E| \u0935\u094D|\u094D\u0930\u0924|\u0927\u093F\u0915|\u094D\u0924\u093F|\u092F\u0915\u094D|\u0905\u0927\u093F| \u0905\u0927|\u093E\u0908 |\u092E\u093E |\u0932\u093E\u0908|\u0924\u094D\u092F|\u093F\u0915 | \u0964 | \u0938\u092E|\u0935\u093E | \u0935\u093E|\u0915 \u0935|\u094D\u0928\u0947|\u0930\u094D\u0928|\u0917\u0930\u094D|\u0928\u094D\u0924|\u091B \u0964|\u0924\u093F\u0932|\u0930\u0924\u094D|\u0924\u094D\u0930|\u0947\u0915 |\u092F\u0947\u0915|\u094D\u092F\u0947|\u093F\u0932\u093E|\u0930 \u0938|\u094B \u0938| \u0938\u094D|\u092E\u093E\u0928|\u0915\u094D\u0937| \u0935\u093F|\u0939\u0941\u0928|\u093E \u0938| \u0939\u0941| \u091B |\u0930 \u091B|\u094D\u0924\u094D|\u0938\u092E\u093E|\u0938\u094D\u0935|\u0964 \u092A| \u0938\u0902|\u0928\u0947\u091B|\u0941\u0928\u0947|\u0939\u0930\u0941|\u0924\u0928\u094D|\u0935\u0924\u0928|\u0947 \u0905|\u093F\u0928\u0947|\u094B \u0905|\u094D\u0935\u0924| \u0915\u093E|\u0947 \u091B|\u0917\u0930\u093F| \u0930\u093E|\u094D\u0930 |\u0924\u093F |\u093E\u0915\u094B| \u0915\u0941|\u0937\u094D\u091F|\u0928\u093E |\u0938\u094D\u0924|\u0915 \u0938|\u0941\u0928\u0948|\u0915\u0941\u0928|\u091F\u094D\u0930|\u0932\u0947 | \u0928\u093F|\u093E\u0928 |\u091B\u0948\u0928| \u091B\u0948|\u094D\u091F\u094D|\u093E\u0937\u094D|\u0930\u093E\u0937|\u0924\u093F\u0915|\u091B\u0964 |\u093E\u0930\u094D|\u0924\u093E |\u093F\u0924 |\u0928\u0948 |\u093E \u0905| \u0938\u093E|\u093E \u0935|\u0930\u0941 | \u092E\u093E| \u0905\u0928|\u093E \u0930|\u0930\u0924\u093E|\u0930 \u0930|\u0939\u0930\u0942|\u0947\u091B |\u093E \u092A|\u0930\u0915\u094D|\u094D\u0924 | \u092A\u0930|\u0925\u093E | \u0932\u093E|\u092A\u0930\u093F|\u0926\u0947\u0936|\u0938\u0915\u094B| \u092F\u0938|\u092E\u093E\u091C|\u093E\u092E\u093E|\u094D\u0930\u093E|\u093F\u0935\u093E|\u093E\u0939\u0930|\u094B \u092A|\u094D\u092F |\u0935\u093E\u0930|\u0928 \u0938|\u0964 \u0915|\u0928\u093F |\u094D\u0937\u093E| \u0924\u094D|\u0926\u094D\u0927|\u0930 \u0939|\u0924\u0925\u093E| \u0924\u0925|\u092F\u0938\u094D|\u094D\u092F\u0938|\u0930\u0940 |\u0930 \u0935|\u092A\u0928\u093F|\u0930\u093F\u0928|\u0902\u0930\u0915|\u0938\u0902\u0930|\u092D\u093E\u0935|\u0948 \u0935|\u0938\u092C\u0948| \u0938\u092C| \u0936\u093F| \u0938\u0939|\u0924\u093E\u0915|\u0947 \u0930|\u0924 \u0930|\u0932\u093E\u0917| \u0938\u0941|\u094D\u0937\u0923|\u0926\u094D\u0926| \u0905\u092A|\u0948\u0928 |\u094B \u0935|\u093F\u0915\u094D|\u093E\u0935 |\u0927\u093E\u0930|\u094D\u092F\u093E|\u094D\u0930\u093F|\u093E \u092D|\u090F\u0915\u094B|\u0930 \u092E|\u0928 \u0905|\u094B \u0932| \u0909\u0938|\u0936\u093F\u0915|\u093E\u0924\u094D|\u0938\u094D\u0925|\u0935\u093E\u0939|\u0942\u0930\u094D|\u0936\u094D\u092F|\u093F\u0924\u094D|\u0930\u0915\u094B|\u093E\u0930\u0915|\u0941\u0926\u094D|\u0924\u094B |\u094D\u0924\u094B|\u093E\u0909\u0928|\u0915\u093E\u0928|\u093F\u090F\u0915|\u093E \u0928| \u092A\u0928|\u0928\u0964 |\u0948\u0928\u0964|\u0915\u093E |\u0947\u091B\u0964| \u092D\u0947|\u0930\u094D\u092F|\u0938\u092E\u094D|\u0924\u094D\u092A|\u0938\u093E\u092E|\u0930\u093F\u092F|\u091A\u093E\u0930|\u0928\u093F\u091C|\u0941\u0928 |\u0917\u093F |\u093E\u0917\u093F|\u0909\u0938\u0915| \u092E\u0924| \u0905\u092D|\u092A\u0942\u0930|\u0930 \u0924| \u0938\u0915|\u0938\u093E\u0930|\u0930\u093E\u0927|\u092A\u0930\u093E|\u0905\u092A\u0930|\u0941\u0915\u094D|\u091C\u0915\u094B| \u0909\u092A|\u0930\u093E |\u093E\u0930\u093E|\u094D\u0935\u093E|\u0935\u093F\u0927|\u094D\u0928 |\u093E \u0924|\u0928 \u0917|\u0923\u0915\u094B| \u092A\u093E| \u0926\u093F|\u0915 \u0930|\u0930 \u092A|\u0905\u0928\u094D|\u092D\u0947\u0926|\u093E\u0930\u092E|\u094B \u0906| \u0905\u0930|\u091C\u093F\u0915|\u093E\u091C\u093F|\u093F\u092F |\u0937\u093E |\u093E\u091F |\u092C\u093E\u091F| \u092C\u093E|\u093F \u0930| \u091B\u0964|\u0924\u094D\u0935|\u0924 \u0938|\u0930\u0942 |\u091B \u0930|\u0930\u0915\u093E|\u0935\u093F\u0915|\u0930 \u0909|\u094B\u0917 |\u094D\u0926\u0947|\u0930\u093F\u0935|\u0938\u0915\u093F|\u0948 \u092A|\u0930\u0924\u093F|\u0905\u0928\u0941| \u0906\u0935|\u092F\u0941\u0915|\u093E \u0917|\u0928\u092E\u093E|\u092F\u094B\u0917|\u0917 \u0917|\u0915 \u0905|\u0926\u094D\u0935|\u094D\u0927 |\u0930\u0941\u0926| \u092C\u093F|\u0964 \u0938|\u0909\u0928\u0947|\u093E\u0928\u094D|\u093E \u092E|\u093F\u0915\u094B|\u0930\u094D\u0926|\u093E\u0930\u0940|\u094D\u0924\u0930|\u094B \u0939|\u0939\u093F\u0924| \u0926\u0947|\u0930\u093F\u0915|\u093E \u0915| \u0906\u0927|\u0930\u093E\u091C|\u0930\u094D\u092E|\u094D\u0923 |\u0930\u094D\u0923|\u093F \u0935|\u094D\u092F\u0935|\u0935\u093F\u091A|\u092C\u0948 |\u0938\u0939\u093F|\u0930\u094B\u091C|\u0930\u094D\u0938|\u0908 \u0909|\u094D\u092A |\u0930\u093E\u0924|\u0928\u093F\u0915|\u092E\u093F\u0915|\u091A\u094D\u091B|\u094D\u0925\u093E|\u0935\u093F\u0935|\u0915\u0924\u093E|\u0905\u092D\u093F|\u094D\u0927\u093E",mag:" \u0915\u0947|\u0915\u0947 |\u093E\u0930 | \u0939\u0908|\u0915\u093E\u0930|\u0908\u0964 |\u0939\u0908\u0964|\u093F\u0915\u093E|\u0947 \u0905|\u0927\u093F\u0915|\u0905\u0927\u093F| \u0905\u0927|\u0930 \u0939|\u0947 \u0915|\u0914\u0930 | \u0914\u0930|\u093E \u0915|\u0947 \u0938|\u0938\u092C | \u0938\u092C| \u0915\u0930|\u0947\u0902 |\u0925\u093E |\u092E\u0947\u0902| \u092E\u0947|\u0924\u0925\u093E| \u0924\u0925|\u093F\u0915 | \u0939\u094B| \u0938\u092E|\u0915\u094D\u0937|\u0928\u093E |\u092C \u0915|\u0930 \u0938| \u0938\u0902|\u093E \u0938|\u0915\u0930 | \u092D\u0940|\u0964 \u0938| \u0938\u093E| \u0938\u0947| \u0915\u093E| \u0905\u092A|\u094D\u0930\u093E|\u092A\u094D\u0930| \u092A\u094D|\u0938\u0947 |\u092D\u0940 | \u0915\u094B|\u0924 \u0915| \u092A\u0930|\u0930\u093E |\u0915 \u0939|\u092A\u0928 |\u0905\u092A\u0928| \u0938\u0915|\u092F\u093E |\u0924\u093F |\u0930 \u0915|\u0940 \u0915| \u092F\u093E|\u0915\u0930\u0947| \u091C\u093E|\u0930\u0947 | \u0913\u0915|\u094D\u0924 |\u0938\u0915 |\u0928\u094B |\u093E\u0928 |\u092E\u093E\u0928|\u0913\u0915\u0930|\u093E \u092A|\u0928 \u0915|\u0947\u0932 | \u0928\u093E|\u0964 \u0915|\u0930\u0915\u094D| \u0938\u094D|\u0939\u0940 |\u0939\u094B\u090F| \u090F\u0915|\u092A\u0930 |\u0926\u0940 |\u091F\u094D\u0930|\u0924\u093E |\u0935\u094D\u092F|\u0939\u0908 | \u0936\u093E|\u0947 \u0909| \u0926\u0947|\u0924\u094D\u0930|\u093E\u0926\u0940| \u0930\u093E| \u0939\u0940|\u0915\u093E\u0928|\u093F\u0924 |\u092E \u0915|\u0932 \u091C|\u093E\u092E |\u0940 \u0938|\u0947 \u092D|\u0928 \u0938|\u092E\u093E\u091C|\u0937\u094D\u091F|\u0937\u093E | \u0932\u0947|\u0915 \u0938|\u092C\u0947 |\u0935\u0947 |\u093E\u0935\u0947|\u092E\u093F\u0932|\u0930 \u092E|\u094D\u092F |\u093E \u0939|\u0932\u093E |\u092A\u094D\u0924|\u0928\u0942\u0928|\u093E\u0928\u0942|\u091C\u093E |\u0947\u0915\u0930|\u094D\u0937\u093E|\u094D\u0930\u0924|\u0902\u0924\u094D|\u0930 \u0914|\u094B\u0908 |\u0915\u094B\u0908|\u094D\u091F\u094D|\u093E\u0937\u094D|\u0930\u093E\u0937| \u092E\u093E|\u0930\u094B | \u091C\u0947|\u0915\u0930\u093E|\u094B\u090F |\u093E\u092A\u094D|\u0930\u093E\u092A|\u0938\u092E\u093E|\u0942\u0928 |\u094B \u0938|\u0938\u094D\u0935|\u094D\u0924\u093F|\u0938\u093E\u092E|\u094B\u0928\u094B|\u0915\u094B\u0928| \u0935\u094D|\u0930 \u0905|\u094D\u092E | \u0935\u093F| \u0938\u0939|\u0947 \u092E|\u0915\u094D\u0924|\u092F\u094B\u0917|\u0930 \u0935|\u0915\u093E\u092E|\u0932 \u0939| \u0928\u093F|\u0926\u0947\u0936|\u092A\u0942\u0930|\u0935\u093E\u0930| \u0907 |\u0902\u0930\u0915|\u0938\u0902\u0930|\u090F \u0915|\u0930 \u092A| \u0938\u0941|\u0924\u0902\u0924|\u0935\u0924\u0902|\u094D\u0935\u0924|\u093E \u092E|\u0935 \u0915|\u0947 \u0935|\u093E\u0925 |\u0938\u093E\u0925| \u0926\u094B|\u0939\u094B\u092C| \u092A\u093E|\u094B \u0915|\u0947 \u092C|\u094B\u0917 | \u0909\u092A|\u0938\u094D\u0924|\u092A\u0930\u093F|\u0928 \u092A|\u0947 \u0924|\u094D\u0924\u0930|\u0932\u0947\u0932|\u0947 \u0913|\u091A\u093E\u0939| \u091A\u093E|\u092F \u0915|\u0935\u093E |\u0947\u0936 |\u092F \u0938|\u0928 \u0939|\u0937\u0923 |\u093E \u092C|\u0964 \u0924|\u090F\u0915 |\u090F\u0932 |\u0940\u092F |\u0915\u0947\u0915|\u0947 \u0939|\u0930 \u0906|\u093F \u0915|\u0938\u094D\u0925|\u091C\u093F\u0915|\u093E\u091C\u093F|\u093E\u092E\u093E|\u0930\u0940\u092F|\u094D\u0930\u0940|\u0924\u093F\u0915|\u093E\u0924\u093F| \u092C\u093F|\u091A\u093E\u0930|\u0947 \u0906|\u093E\u0938 | \u0909\u091A|\u093E \u0924|\u092F\u0915\u094D|\u094D\u092F\u0915|\u093F\u0932 |\u092E\u092F |\u0938\u092E\u092F|\u0936\u093E\u0926|\u092A\u092F\u094B|\u0909\u092A\u092F|\u0947 \u0916|\u0930\u093F\u0935| \u092A\u0942|\u0947 \u0932|\u0947 \u091A|\u094C\u0928\u094B|\u0915\u094C\u0928| \u0915\u094C|\u0902 \u0915|\u0938\u0902\u0917|\u0928 \u0926|\u0902 \u0938|\u0923 \u092A|\u094D\u0937\u0923|\u0930 \u0928|\u0947 \u0928|\u094B \u092D|\u0915\u0930\u094B|\u093E \u0914|\u0930\u0924\u093E|\u093E\u0935 |\u092D\u093E\u0935|\u0915 \u0914|\u0930\u094D\u092E|\u094B\u0938\u0930|\u0926\u094B\u0938|\u0923 \u0915|\u0947 \u092A|\u0928 \u0914|\u092C \u0939|\u093F\u0915\u094D|\u0936\u093F\u0915| \u0936\u093F|\u093E\u092C\u0947|\u0928\u093F\u092F|\u091A\u093F\u0924|\u0909\u091A\u093F|\u093F\u0924\u094D|\u0917 \u0915|\u0947\u0964 |\u0924 \u0938|\u0940 \u0936|\u0902 \u0936|\u090F\u0915\u0930|\u0964 \u090F|\u0924\u0928 | \u0913 |\u0930\u0940 |\u094D\u0930 |\u091C\u0947 |\u0915 \u0915| \u0938\u0940|\u0938\u0928 |\u093F\u0935\u093E| \u0905\u0928|\u0942\u0930\u093E| \u092C\u091A|\u090F\u0964 | \u092C\u0947|\u0924 \u0939| \u0924\u0915| \u092E\u093F|\u0927\u093E\u0930|\u0925\u0935\u093E|\u0905\u0925\u0935| \u0905\u0925|\u093F\u0932\u093E|\u094D\u0935\u093E|\u093F \u092E| \u0906\u0926|\u0928\u0947 |\u0915\u090F\u0932| \u0915\u090F|\u094D\u092F\u093E"}},P4=2048,R4=10,ir=300,Q0={}.hasOwnProperty,x0,Z0={};for(x0 in aa)if(Q0.call(aa,x0)){let u=aa[x0],e;Z0[x0]={};for(e in u)if(Q0.call(u,e)){let t=u[e].split("|"),a={},n=t.length;for(;n--;)a[t[n]]=n;Z0[x0][e]=a}}function sr(u,e={}){let t=[...e.whitelist||[],...e.only||[]],a=[...e.blacklist||[],...e.ignore||[]],n=e.minLength!==null&&e.minLength!==void 0?e.minLength:R4;if(!u||u.length<n)return na();u=u.slice(0,P4);let r=j4(u,M4);return!r[0]||!(r[0]in Z0)?!r[0]||r[1]===0||!lr(r[0],t,a)?na():cr(r[0]):z4(u,O4(or(u),Z0[r[0]],t,a))}function z4(u,e){let t=e[0][1],a=u.length*ir-t,n=-1;for(;++n<e.length;)e[n][1]=1-(e[n][1]-t)/a||0;return e}function j4(u,e){let t=-1,a,n;for(n in e)if(Q0.call(e,n)){let r=N4(u,e[n]);r>t&&(t=r,a=n)}return[a,t]}function N4(u,e){let t=u.match(e);return(t?t.length:0)/u.length||0}function O4(u,e,t,a){e=H4(e,t,a);let n=[],r;if(e)for(r in e)Q0.call(e,r)&&n.push([r,I4(u,e[r])]);return n.length===0?na():n.sort($4)}function I4(u,e){let t=0,a=-1;for(;++a<u.length;){let n=u[a],r=ir;n[0]in e&&(r=n[1]-e[n[0]]-1,r<0&&(r=-r)),t+=r}return t}function H4(u,e,t){if(e.length===0&&t.length===0)return u;let a={},n;for(n in u)lr(n,e,t)&&(a[n]=u[n]);return a}function lr(u,e,t){return e.length===0&&t.length===0?!0:(e.length===0||e.includes(u))&&!t.includes(u)}function na(){return cr("und")}function cr(u){return[[u,1]]}function $4(u,e){return u[1]-e[1]}var q4=/[\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u3005\u3007\u3021-\u3029\u3038-\u303B\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFA6D\uFA70-\uFAD9]|\uD81B[\uDFE2\uDFE3\uDFF0\uDFF1]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883\uD885-\uD887][\uDC00-\uDFFF]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF39\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A\uDF50-\uDFFF]|\uD888[\uDC00-\uDFAF]/g,U4=/[\u3041-\u3096\u309D-\u309F]|\uD82C[\uDC01-\uDD1F\uDD32\uDD50-\uDD52]|\uD83C\uDE00|[\u30A1-\u30FA\u30FD-\u30FF\u31F0-\u31FF\u32D0-\u32FE\u3300-\u3357\uFF66-\uFF6F\uFF71-\uFF9D]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00\uDD20-\uDD22\uDD55\uDD64-\uDD67]|[㐀-䶵一-龯]/g,W4=/[\u1100-\u11FF\u302E\u302F\u3131-\u318E\u3200-\u321E\u3260-\u327E\uA960-\uA97C\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uFFA0-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/g,V4=/(\s+)|([\p{P}\p{S}])/gu,K4=[["zh-CN",q4],["ja",U4],["ko",W4]];function ut(u){if(!u)return"auto";let e="auto",t=0,a=0,n=u.match(V4);n&&(a=n.reduce((i,o)=>i+o.length,0));let r=u.length-a;for(let i of K4){let o=i[1],s=i[0],c=u.match(o),l=c?c.length:0;l>t&&(t=l,e=s)}return t*2.5/r>.5?e:"auto"}var gr=new Map([["afr","af"],["amh","am"],["arb","ar"],["azj","az"],["bel","be"],["bul","bg"],["ben","bn"],["bos","bs"],["cat","ca"],["ceb","ceb"],["ces","cs"],["dan","da"],["deu","de"],["ell","el"],["eng","en"],["epo","eo"],["spa","es"],["est","et"],["fas","fa"],["fin","fi"],["fra","fr"],["gax","ga"],["glg","gl"],["guj","gu"],["hau","ha"],["heb","he"],["hin","hi"],["hrv","hr"],["hun","hu"],["hye","hy"],["ind","id"],["ibo","ig"],["ita","it"],["jpn","ja"],["jav","jw"],["kat","ka"],["kaz","kk"],["khm","km"],["kan","kn"],["kor","ko"],["ckb","ku"],["lao","lo"],["lit","lt"],["lav","lv"],["min","mi"],["mkd","mk"],["mal","ml"],["mar","mr"],["mya","my"],["nep","ne"],["nld","nl"],["nob","no"],["nya","ny"],["pan","pa"],["pol","pl"],["pbu","ps"],["por","pt"],["ron","ro"],["rus","ru"],["sin","si"],["slk","sk"],["slv","sl"],["sna","sn"],["som","so"],["als","sq"],["srp","sr"],["sun","su"],["swe","sv"],["swh","sw"],["tam","ta"],["tel","te"],["tgk","tg"],["tha","th"],["toi","to"],["tur","tr"],["ukr","uk"],["urd","ur"],["uzn","uz"],["vie","vi"],["xho","xh"],["ydd","yi"],["yor","yo"],["cmn","zh-CN"],["zul","zu"]]),G4={minLength:1,whitelist:[...gr.keys()]};function dr(u){if(!u)return"auto";let e=ut(u);if(e!=="auto")return e;let t=sr(u,G4);if(t&&t.length>0){if(t.length>1&&t[0][0]!=="eng"&&t[1][0]==="eng"&&t[1][1]>.6)return"en";let[a]=t[0],n=gr.get(a);if(n)return n}return"auto"}function Ju(){return typeof process>"u"&&typeof Deno<"u"?Deno.env.toObject():h}var Y=Ju();function Mu(){return Y.IMMERSIVE_TRANSLATE_USERSCRIPT==="1"}function mr(){return typeof Deno<"u"}!globalThis.GM&&globalThis.GM_info&&globalThis.GM_getValue&&(globalThis.GM={info:globalThis.GM_info,getValue:globalThis.GM_getValue,setValue:globalThis.GM_setValue,deleteValue:globalThis.GM_deleteValue,listValues:globalThis.GM_listValues,xmlHttpRequest:globalThis.GM_xmlhttpRequest,registerMenuCommand:globalThis.GM_registerMenuCommand});var fr={get:async u=>{if(u===null){let a=await GM.listValues(),n={};for(let r of a)n[r]=await GM.getValue(r);return n}let e=[];typeof u=="string"?e=[u]:Array.isArray(u)?e=u:e=Object.keys(u);let t={};for(let a of e)t[a]=await GM.getValue(a);return t},set:async u=>{for(let e in u)await GM.setValue(e,u[e])},remove:async u=>{if(typeof u=="string")await GM.deleteValue(u);else if(Array.isArray(u))for(let e of u)await GM.deleteValue(e)}};function J4(){return GM.info.script}function Y4(){let e=Ju().OPTIONS_URL;if(e)window.open(e,"_blank");else throw new Error("options url not found")}var X4={storage:{local:fr,sync:fr},runtime:{getManifest:J4,lastError:null,openOptionsPage:Y4},extra:{detectLanguage:dr}};globalThis.browser=X4;(function(){"use strict";var u=window.Bluebird||window.Promise;if(self.GM_fetch)return;function e(d){if(typeof d!="string"&&(d=d.toString()),/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(d))throw new TypeError("Invalid character in header field name");return d.toLowerCase()}function t(d){return typeof d!="string"&&(d=d.toString()),d}function a(d){if(d.bodyUsed)return u.reject(new TypeError("Already read"));d.bodyUsed=!0}function n(d){return new u(function(g,p){d.onload=function(){g(d.result)},d.onerror=function(){p(d.error)}})}function r(d){var g=new FileReader;return g.readAsArrayBuffer(d),n(g)}function i(d){var g=new FileReader;return g.readAsText(d),n(g)}var o={blob:"FileReader"in self&&"Blob"in self&&function(){try{return new Blob,!0}catch{return!1}}(),formData:"FormData"in self},s=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function c(d){var g=d.toUpperCase();return s.indexOf(g)>-1?g:d}function l(d){var g=new FormData;return d.trim().split("&").forEach(function(p){if(p){var y=p.split("="),b=y.shift().replace(/\+/g," "),f=y.join("=").replace(/\+/g," ");g.append(decodeURIComponent(b),decodeURIComponent(f))}}),g}function m(d){var g=new Headers,p=d.trim().split(`
`);return p.forEach(function(y){var b=y.trim().split(":"),f=b.shift().trim(),E=b.join(":").trim();g.append(f,E)}),g}self.Headers=Headers,self.Request=Request,self.Response=Response,self.GM_fetch=function(d,g){var p,y;return Request.prototype.isPrototypeOf(d)&&!g?p=d:(g.body&&(y=g.body),p=new Request(d,g)),new u(function(b,f){var E={},x;function w(B,T,G){if(B)return B;if(/^X-Request-URL:/m.test(T))return G.get("X-Request-URL")}E.method=p.method,E.url=p.url,E.synchronous=!1,E.onload=function(B){var T=B.status;if(T<100||T>599){f(new TypeError("Network request failed"));return}var G=B.responseHeaders;x=m(G);var hu=w(B.finalUrl||B.responseURL,G,x);x.set("X-Final-URL",hu);var L={status:T,statusText:B.statusText,headers:x,url:hu},J=B.responseText;let nu=new Response(J,L);b(nu)},E.onerror=function(){f(new TypeError("Network request failed"))},E.headers={},p.headers.forEach(function(B,T){E.headers[T]=B}),y&&(E.data=y),GM.xmlHttpRequest(E)})},self.GM_fetch.polyfill=!0})();var Le="Immersive Translate",iu="immersive-translate",gu="immersiveTranslate",ra=`${gu}Container`,_e=`${gu}SpecifiedContainer`,et="buildinConfig";var tt="immersive-translate.owenyoung.com",dd=`https://${tt}/`,pr=`https://${tt}/buildin_config.json`,Me=`${gu}Mark`,oa="immersiveTranslateEffect",Eu=`${gu}Root`,ia=`data-${iu}-effect`,Pe=`${gu}TranslatedMark`,Re=`${gu}ParagraphId`,Iu=`${gu}AtomicBlockMark`,Hu=`${gu}ExcludeMark`,at=`${gu}StayOriginalMark`,Xe=`${gu}PreWhitespaceMark`,ce=`${gu}InlineMark`,ze=`${gu}BlockMark`,D0=`${gu}Left`,hr=`${gu}Right`,md=`${gu}Width`,fd=`${gu}Height`,Er=`${gu}Top`,br=`${gu}FontSize`,C0="lastRunTime",sa=`${gu}GlobalStyleMark`,yr=["@","#"],nt=" --- ",la=`
`,ju=`${iu}-target-wrapper`,rt=`${iu}-pdf-target-container`,xr=`${iu}-target-inner`,pd=`${iu}-source-wrapper`,ca=`${iu}-target-translation-block-wrapper`,Dr=`${iu}-target-translation-pre-whitespace`,ga=`${iu}-target-translation-inline-wrapper`;var Qe=["auto","en","zh-CN","zh-TW","ja","af","am","ar","az","be","bg","bn","bs","ca","ceb","co","cs","cy","da","de","el","eo","es","et","eu","fa","fi","fil","fj","fr","fy","ga","gd","gl","gu","ha","haw","he","hi","hmn","hr","ht","hu","hy","id","ig","is","it","jw","ka","kk","km","kn","ko","ku","ky","la","lb","lo","lt","lv","mg","mi","mk","ml","mn","mr","ms","mt","mww","my","ne","nl","no","ny","otq","pa","pl","ps","pt","ro","ru","sd","si","sk","sl","sm","sn","so","sq","sr","sr-Cyrl","sr-Latn","st","su","sv","sw","ta","te","tg","th","tlh","tlh-Qaak","to","tr","ty","ug","uk","ur","uz","vi","wyw","xh","yi","yo","yua","yue","zu"];var Cr=["https://immersive-translate.owenyoung.com/options/","http://localhost:8000/dist/userscript/options/","https://www.deepl.com/translator","translate.google.com"];var ot="zh-CN";var Q4=Ju(),k0=Q4.PROD==="1";function kr(u,e,t){let a=u.querySelectorAll("footer"),n=u.querySelectorAll("header"),r=u.querySelectorAll("main"),i=[];for(let s of n)r.length>0&&r[0].contains(s)||i.push(s);for(let s=0;s<e.length;s++){let c=e[s].element;for(let l=s+1;l<e.length;l++){let m=e[l].element;if(c.contains(m))e.splice(l,1),l--;else if(m.contains(c)){e.splice(s,1),s--;break}else c===m&&(e.splice(l,1),l--)}}return e.filter(s=>{let c=s.element;if(s.reserve)return!0;let l=!1,m=!1;for(let d of a)if(c===d||d.contains(c)){l=!0;break}if(l)return!1;for(let d of i){if(c.nodeName==="H1")continue;let g=d.querySelector("h1");if(!(g&&Fr(g.textContent||"",t.paragraphMinTextCount,t.paragraphMinWordCount))&&(c===d||d.contains(c))){m=!0;break}}return!m}).map(s=>s.element)}function A0(u){for(let e=u.length-1;e>=0;e--){let t=u[e].element||u[e];if(typeof t!="string")return t}return null}function Ar(u){let e=[];for(let t=u.length-1;t>=0;t--){let a=u[t].element||u[t];typeof a!="string"&&e.push(a)}return e}function ma(u){for(let e=0;e<u.length;e++){let t=u[e];if(typeof t!="string")return t}return null}function w0(u,e){return u&&u.nodeType===Node.TEXT_NODE&&u.textContent&&u.textContent?.length>0?e?u.textContent:" ":null}function $u(u,e){let t=[];for(let a of e){let n=u.querySelectorAll(a);for(let r of n)t.push(r)}return t}function Z4(u,e){let t=function(n){return n.nodeType===Node.ELEMENT_NODE||n.nodeType===Node.TEXT_NODE?n.nodeType===Node.ELEMENT_NODE&&Ru(n,e,!0)?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT},a=document.createTreeWalker(u,NodeFilter.SHOW_ELEMENT,t);for(;a.nextNode();){let n=a.currentNode;if(n.nodeType===Node.ELEMENT_NODE){if(Z(n,ce))continue;if(!e.inlineTags.includes(n.nodeName))return!1}}return!0}function Yu(u,e){let t=e.inlineTags;return u.nodeType===Node.ELEMENT_NODE?t.includes(u.nodeName)?Z(u,ze)||u.nodeName==="BR"?!1:Z(u,ce)?!0:Z4(u,e):Z(u,ce):!1}function wr(u,e){for(let t of e)if(t===u)return!0;return!1}function Tr(u,e){return!!e.metaTags.includes(u.nodeName)}function Ru(u,e,t){if(!(u.nodeType===Node.ELEMENT_NODE||u.nodeType===Node.TEXT_NODE))return!0;let{stayOriginalTags:a,excludeTags:n}=e,r=[];return t&&n&&n.length>0?r=n||[]:r=n.filter(i=>!a.includes(i)),u.nodeType===Node.ELEMENT_NODE&&u.isContentEditable||u.nodeType===Node.ELEMENT_NODE&&Z(u,Hu)?!0:u.nodeType===Node.ELEMENT_NODE&&Z(u,_e)?!1:!!r.includes(u.nodeName)}function vr(u,e,t,a){let n=T0(a),r=new RegExp(`^${n[0]}(\\d+)${n[1]}$`),i=u.text,o=i.trim();return o===""||o.length===1&&o.charCodeAt(0)===8203||/^\d+(,\d+)*(\.\d+)?$/.test(i)||o.includes("</style>")||o.includes("< styles>")||ha(o)||fa(o)||pa(o)||r.test(o)?!1:Fr(i,e,t)}function Fr(u,e,t){let a=u.trim();return a.length>=e||a.split(" ").length>=t}function fa(u){if(u&&u.includes("://"))try{return new URL(u),!0}catch{return!1}else return!1}function pa(u){return!!(u&&u.startsWith("#")&&u.indexOf(" ")===-1)}function ha(u){return!!(u&&u.startsWith("@")&&u.indexOf(" ")===-1)}function Sr(u){return!!(u&&u.startsWith("$")&&u.indexOf(" ")===-1)}function Z(u,e){return ul(u,e,"1")}function ul(u,e,t){return k0?u[Eu]?!!(u[Eu]&&u[Eu][e]===t):!1:u.dataset[e]===t}function Br(u,e){return k0?u[Eu]?!!(u[Eu]&&u[Eu][e]):!1:u.dataset[e]!==void 0}function da(u){return u.replace(/\s/g," ")}function it(u){let e=u.querySelector("main"),t="";if(e&&(t=da(e.innerText||e.textContent||"")),t.length>=10)return t;let a=u.querySelectorAll("article");if(a.length>0)for(let n of a)t=da(n.innerText||n.textContent||"");return t.length>=10||(t=da(u.innerText||u.textContent||"")),t}function Ea(u){return u?typeof u=="string"?document.querySelector(u)!==null:u.some(e=>document.querySelector(e)):!1}function tu(u,e,t){u.isContentEditable||(u.dataset[oa]||(u.dataset[oa]="1"),k0?(u[Eu]||(u[Eu]={}),u[Eu][e]||(u[Eu][e]=t)):u.dataset[e]!==t&&(u.dataset[e]=t))}function Lr(u,e){if(k0){if(!u[Eu]||!u[Eu][e])return;delete u[Eu][e]}else delete u.dataset[e]}function je(u,e){return k0?!u[Eu]||!u[Eu][e]?void 0:u[Eu][e]:u.dataset[e]}function Ze(u,e){let t=!1;return(e.stayOriginalTags.includes(u.nodeName)||Z(u,at))&&(t=!0),t}function _r(u,e){return!e.allBlockTags.concat(e.inlineTags).concat(e.excludeTags).includes(u.nodeName)}function T0(u){let{config:e}=u,t=yr;return e.translationServices[u.translationService]&&e.translationServices[u.translationService].placeholderDelimiters&&(t=e.translationServices[u.translationService].placeholderDelimiters),t}function v0(u,e){if(!e)return!1;Array.isArray(e)||(e=[e]);for(let t of e)if(u.querySelector(t))return!0;return!1}function Mr(u){let e=document.createTreeWalker(u,NodeFilter.SHOW_TEXT,a=>a.textContent&&a.textContent.trim()?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT),t=null;for(;e.nextNode();)t=e.currentNode;return t?t.parentElement:null}function Pr(u,e){let{excludeSelectors:t,additionalExcludeSelectors:a,extraInlineSelectors:n,additionalInlineSelectors:r,extraBlockSelectors:i,atomicBlockSelectors:o,atomicBlockTags:s,globalStyles:c,stayOriginalTags:l,stayOriginalSelectors:m,globalAttributes:d}=e,g=Object.keys(c);if(g.length>0)for(let L of g){let J=$u(document.body,[L]);for(let nu of J)if(!Z(nu,sa)){tu(nu,sa,"1");let U=c[L];nu.style.cssText+=U}}let p=Object.keys(d);if(p.length>0)for(let L of p){let J=d[L],nu=Object.keys(J),U=$u(document.body,[L]);for(let W of U)for(let O of nu){let su=J[O];W.getAttribute(O)!==su&&(su===null?W.removeAttribute(O):W.setAttribute(O,su))}}let y=[...t,...a],b=[...n,...r],f=[...o],E=s.map(L=>L.toLowerCase()),x=i;$u(document.body,y).forEach(L=>{Z(L,Hu)||tu(L,Hu,"1")});let B=[];if(f.length>0&&(B=$u(document.body,f).filter(L=>!Z(L,Iu))),E.length>0){let L=l.reduce((U,W)=>{let O=W.toLowerCase();return U.push(`<${O}>`,`</${O}>`,`<${O} />`),U},[]),J=[">http://",">https://"];L.push(...J);let nu=$u(document.body,E).filter(U=>{if(Z(U,Iu))return!1;{let O=U.innerHTML;return!L.some(ie=>O.includes(ie))}});B.push(...nu)}B.forEach(L=>{Z(L,Iu)||tu(L,Iu,"1")});let T=[];if(b.length>0)for(let L of u)T.push(...$u(L,b));T.forEach(L=>{tu(L,ce,"1")});let G=[];if(x.length>0)for(let L of u)G.push(...$u(L,x));G.forEach(L=>{tu(L,ze,"1")});let hu=[];if(m.length>0)for(let L of u)hu.push(...$u(L,m));hu.forEach(L=>{tu(L,at,"1")})}function Rr(u,e){let t=e.matches||[];if(t&&!Array.isArray(t)&&(t=[t]),t.length===0)return!1;if(t.length>0){if(t.includes(u))return!0;for(let a of t)if(a.includes("*")&&new RegExp(a).test(u))return!0}return!1}function F0(u){return typeof u!="string"?"auto":u==="zh"||u==="zh-Hans"?"zh-CN":u==="zh-Hant"||u==="zh-HK"?"zh-TW":u==="iw"?"he":u==="jv"?"jw":Qe.indexOf(u)===-1?u.indexOf("-")!==-1?(u=u.split("-")[0],Qe.indexOf(u)===-1?"auto":u):"auto":u}function zr(){return typeof Deno<"u"}var jr={addListener:()=>{},removeListener:()=>{},hasListener:()=>{}},Nr={permissions:{contains:()=>{},request:()=>{}},runtime:{onMessage:jr,openOptionsPage:()=>{},lastError:{message:""}},storage:{sync:{get:()=>{},set:()=>{}}},tabs:{onUpdated:jr,query:()=>{},sendMessage:()=>{}}};var V;zr()?V=Nr:V=globalThis.browser;var Or={minVersion:"0.0.20",immediateTranslationTextCount:4e3,interval:36e5,cache:!0,donateUrl:"https://immersive-translate.owenyoung.com/donate.html",feedbackUrl:"https://github.com/immersive-translate/next-immersive-translate/issues",translationServices:{volcAlpha:{placeholderDelimiters:["{","}"]},volc:{placeholderDelimiters:["{","}"]},tencent:{placeholderDelimiters:["{","}"]},transmart:{placeholderDelimiters:["#","#"]},baidu:{placeholderDelimiters:["#","#"]},caiyun:{placeholderDelimiters:["{","}"]},youdao:{placeholderDelimiters:["\u{1F6A0}","\u{1F6A0}"]}},translationParagraphLanguagePattern:{matches:["www.reddit.com","old.reddit.com","twitter.com","*.twitter.com","medium.com","*.medium.com","github.com","gist.github.com","www.facebook.com","www.youtube.com","read.readwise.io","www.inoreader.com","mail.google.com","google.com","discord.com","web.telegram.org","*.slack.com"],excludeMatches:[],selectorMatches:["meta[property='al:ios:url'][content^='medium://']"],selectorExcludeMatches:[]},sourceLanguageUrlPattern:{},generalRule:{_comment:"",normalizeBody:"",wrapperPrefix:"smart",wrapperSuffix:"smart",isPdf:!1,isTransformPreTagNewLine:!1,urlChangeDelay:20,paragraphMinTextCount:8,paragraphMinWordCount:2,blockMinTextCount:32,blockMinWordCount:5,containerMinTextCount:18,lineBreakMaxTextCount:0,globalAttributes:{},globalStyles:{".sr-only":"display:none"},selectors:[],preWhitespaceDetectedTags:["DIV","SPAN"],stayOriginalSelectors:[],additionalSelectors:["h1","section h2","section h3","section h4","main h2","main h3","main h4",".article-title",".article-subtitle",".article_title",".article_subtitle",".article__title",".articleTitle",".Article__content",".title",".abstract",".titleLink",".summary",".content",".headline",".page-content"],atomicBlockTags:[],excludeSelectors:[],additionalExcludeSelectors:[".social-share",".breadcrumbs",".post__footer",".btn",".reference-citations",".share-nav",".o-share","[data-toolbar=share]"],translationClasses:[],atomicBlockSelectors:[],excludeTags:["TITLE","SCRIPT","STYLE","TEXTAREA","SVG","svg","NOSCRIPT","INPUT","BUTTON","BASE","LABEL","SELECT","OPTION","IMG","SUB","SUP","HR","PRE","CODE","KBD","WBR","TT","META"],metaTags:["META","SCRIPT","STYLE","NOSCRIPT"],additionalExcludeTags:[],stayOriginalTags:["CODE","TT","IMG","SUP"],additionalStayOriginalTags:[],inlineTags:["A","ABBR","FONT","ACRONYM","B","INS","DEL","BDO","MARK","BIG","NOBR","CITE","DFN","EM","I","LABEL","Q","S","SMALL","SPAN","STRONG","SUB","SUP","U","KBD","TT","VAR","IMG","CODE","SCRIPT","STYLE","LINK","TIME","META"],additionalInlineTags:[],extraInlineSelectors:[],additionalInlineSelectors:[],extraBlockSelectors:[],allBlockTags:["HGROUP","CONTENT","ADDRESS","ARTICLE","ASIDE","BLOCKQUOTE","CANVAS","DD","DL","DT","FIELDSET","FIGCAPTION","FIGURE","FOOTER","HEADER","FORM","HR","MAIN","NAV","OL","NOSCRIPT","PRE","SECTION","TABLE","TFOOT","UL","VIDEO","P","DIV","H1","H2","H3","H4","H5","H6","UL","LI","OL","BR","PICTURE","TBODY","TR","TD","TH","SOURCE"]},rules:[{matches:["moz-extension://*/content/web/viewer.html*"],isPdf:!0,wrapperPrefix:"",wrapperSuffix:"",urlChangeDelay:0,selectors:[".textLayer"],excludeSelectors:[".annotationLayer"],globalStyles:{"div.page":"width: 98%;",".textLayer":"overflow:visible;opacity: 1;"}},{matches:["mail.jabber.org","antirez.com"],excludeTags:["TITLE","SCRIPT","STYLE","TEXTAREA","SVG","svg","INPUT","LABEL","IMG","SUB","SUP","BR","CODE","KBD","WBR","TT"]},{matches:"*.wikipedia.org",excludeSelectors:[".mw-editsection",".mw-cite-backlink"],wrapperSuffix:"<br><br>",stayOriginalSelectors:[".chemf",".mwe-math-element","[role=math]",".nowrap"],extraInlineSelectors:[".chemf",".mwe-math-element","[role=math]",".nowrap"]},{matches:["twitter.com","mobile.twitter.com","tweetdeck.twitter.com"],selectors:['[data-testid="tweetText"]',".tweet-text",".js-quoted-tweet-text","[data-testid='card.layoutSmall.detail'] > div:nth-child(2)","[data-testid='developerBuiltCardContainer'] > div:nth-child(2)","[data-testid='card.layoutLarge.detail'] > div:nth-child(2)"],extraInlineSelectors:['[data-testid="tweetText"] div']},{matches:["stackoverflow.com","*.stackexchange.com","superuser.com","askubuntu.com","serverfault.com"],additionalSelectors:[".comment-copy"]},{matches:"developer.apple.com/documentation/*",selectors:[".container","h3.title"]},{matches:"news.ycombinator.com",selectors:[".titleline > a",".comment > .commtext",".toptext","a.hn-item-title",".hn-comment-text",".hn-story-title"],excludeSelectors:[".reply"]},{matches:"www.reddit.com",selectors:["h1",".PostHeader__post-title-line","[data-click-id=body] h3","[data-click-id=background] h3","[data-testid=comment]","[data-adclicklocation=media]",".PostContent",".Comment__body","faceplate-batch .md"],detectParagraphLanguage:!0},{matches:["*.quora.com","quora.com"],additionalSelectors:[".puppeteer_test_question_title",".puppeteer_test_answer_content",".q-text"],globalStyles:{".qu-truncateLines--3":"-webkit-line-clamp: unset;"}},{matches:["old.reddit.com/*/.compact","old.reddit.com/.compact"],selectors:[".title > a",".usertext-body"],detectParagraphLanguage:!0},{matches:"old.reddit.com",selectors:["p.title > a","[role=main] .md-container"],detectParagraphLanguage:!0},{matches:"www.reuters.com/",excludeSelectors:["header"]},{matches:"github.com",selectors:[".markdown-title",".markdown-body",".Layout-sidebar p"],excludeSelectors:[".css-truncate","[data-test-selector='commit-tease-commit-message']","div.blob-wrapper-embedded"],detectParagraphLanguage:!0},{matches:"www.facebook.com",selectors:["div[dir=auto][style]","div[dir=auto][class]","span[lang]"],excludeSelectors:["[role=button]"],translationClasses:"immersive-translate-text",detectParagraphLanguage:!0},{matches:"www.youtube.com",selectors:["yt-formatted-string[slot=content].ytd-comment-renderer","yt-formatted-string.ytd-video-renderer","h1 > yt-formatted-string.ytd-watch-metadata","yt-formatted-string#video-title","span#video-title"],wrapperPrefix:"<br>",wrapperSuffix:"<br>",globalStyles:{"ytd-expander.ytd-comment-renderer":"--ytd-expander-max-lines: 1000;","h1.ytd-watch-metadata":"-webkit-line-clamp: unset;max-height: unset;","yt-formatted-string#video-title":"-webkit-line-clamp: unset;max-height: unset;","#video-title":"-webkit-line-clamp: unset;max-height: unset;"},urlChangeDelay:2e3,atomicBlockSelectors:["yt-formatted-string[slot=content].ytd-comment-renderer","h1 > yt-formatted-string.ytd-watch-metadata","yt-formatted-string#video-title","span#video-title"],detectParagraphLanguage:!0},{matches:"1paragraph.app",selectors:"#book"},{matches:["*.substack.com","newsletter.rootsofprogress.org"],selectors:[".post-preview-title",".post-preview-description",".post",".comment-body"],excludeSelectors:[".captioned-button-wrap",".subscription-widget-wrap",".tweet-header",".tweet-link-bottom",".expanded-link",".meta-subheader"],extraBlockSelectors:[".tweet-link-top",".tweet-link-bottom",".expanded-link"]},{matches:["seekingalpha.com/article/*","seekingalpha.com/news/*"],selectors:["[data-test-id=card-container]"],excludeSelectors:["[data-test-id=post-page-meta]","header > div:first-child"]},{matches:"hn.algolia.com",selectors:[".Story_title > a:first-child",".Story_comment > span"]},{matches:"read.readwise.io",selectors:['div[class^="_titleRow_"]','div[class^="_description_"]',"#document-text-content"],detectParagraphLanguage:!0},{matches:"www.inoreader.com",selectors:[".article_title_link",".article_content"],detectParagraphLanguage:!0},{matches:["scholar.google.com"],wrapperPrefix:`
`,selectors:["h3 a[data-clk]","div.gs_rs"],atomicBlockSelectors:[".gs_rs","h3 a[data-clk]"]},{matches:"mail.google.com",selectors:["h2[data-thread-perm-id]","span[data-thread-id]","div[data-message-id] div[class='']"],detectParagraphLanguage:!0},{matches:"www.producthunt.com",selectors:["h2","div[class^='styles_htmlText__']","[class^='styles_tagline']","a[href^='/discussions/'].fontWeight-600","button[class^='styles_textButton'] > div > span"],excludeTags:["TITLE","SCRIPT","STYLE","TEXTAREA","SVG","svg","INPUT","LABEL","IMG","SUB","SUP","BR","CODE","KBD","WBR","TT"]},{matches:"*.gitbook.io",additionalSelectors:["main"],_comment:"https://midjourney.gitbook.io/docs/user-manual"},{matches:"arxiv.org",additionalSelectors:["h1","blockquote.abstract"]},{matches:"https://discord.com/channels/*",selectors:["li[id^=chat-messages] div[id^=message-content]","h3[data-text-variant='heading-lg/semibold']"],excludeSelectors:["div[class^='repliedTextContent']"],globalStyles:{"div[class^=headerText]":"max-height: unset;","h3[data-text-variant='heading-lg/semibold']":"-webkit-line-clamp: none;"},detectParagraphLanguage:!0,wrapperPrefix:"<br>",wrapperSuffix:"<br><br>"},{matches:"web.telegram.org/z/*",selectors:[".text-content"],detectParagraphLanguage:!0},{matches:["web.telegram.org/k/*","web.telegram.org/k/"],selectors:[".message"],detectParagraphLanguage:!0},{matches:"gist.github.com",selectors:[".markdown-body",".readme"],detectParagraphLanguage:!0},{matches:"lobste.rs",selectors:[".u-repost-of",".comment_text"]},{matches:"*.slack.com",selectors:[".p-rich_text_section"],detectParagraphLanguage:!0},{matches:"1paragraph.app",additionalSelectors:["#book"]},{matches:"www.google.*/search*",selectors:["h2","a h3","table h3","table h3 + div","div[data-content-feature='1'] > div","a [aria-level='3']","a [aria-level='3'] + div",".Uroaid","div[style='-webkit-line-clamp:2']","div[style='-webkit-line-clamp: unset;max-height: unset;]"],detectParagraphLanguage:!0,wrapperSuffix:"",globalStyles:{"div[data-content-feature='1'] > div":"-webkit-line-clamp: unset;max-height: unset;","a h3 + div":"position: relative;","div[style='-webkit-line-clamp:2']":"-webkit-line-clamp: unset;max-height: unset;"},extraBlockSelectors:[".MUFPAc"]},{matches:"lowendtalk.com",selectors:["[role=heading]","h1",".userContent"]},{matches:"www.linkedin.com/jobs/*",selectors:["#job-details > span"]},{matches:"www.linkedin.com",addtionalSelectors:["span.break-words > span > span[dir=ltr]"]},{matches:"www.indiehackers.com",selectors:[".content","h1",".feed-item__title-link"]},{matches:"libreddit.de",selectors:["h2.post_title",".comment_body > .md"]},{matches:["notion.site","www.notion.so"],selectors:["div[data-block-id]"]},{matches:"www.newyorker.com",additionalSelectors:["h1","[data-testid=SummaryItemHed]"]},{matches:"start.me",selectors:[".rss-article__title",".rss-articles-list__article-link",".rss-showcase__title",".rss-showcase__text"]},{matches:"www.scmp.com",additionalSelectors:[".info__subHeadline",".section-content h2"]},{matches:"www.lesswrong.com",extraBlockSelectors:["span.commentOnSelection"]},{matches:["mastodon.social","mastodon.online","kolektiva.social","indieweb.social","mastodon.world","infosec.exchange"],selectorMatches:["div#mastodon"],selectors:["div.status__content__text"],detectLanguage:!0},{matches:"www.cnbc.com",additionalSelectors:["div.RenderKeyPoints-list"]},{matches:"app.daily.dev",selectors:["h1",".typo-body","article h3","[class^=markdown_markdown]"],globalStyles:{".line-clamp-3":"-webkit-line-clamp: unset"}},{matches:"www.aljazeera.com",addtionalSelectors:["h1",".article__subhead"]},{matches:["*.pornhub.com","pornhub.com"],selectors:[".title >a",".title > span",".thumbnailTitle",".commentMessage > span"],detectParagraphLanguage:!0,wrapperPrefix:`

`,wrapperSuffix:`
`,globalStyles:{".title":"height: unset; max-height: unset;"}},{matches:["weibo.com"],selectors:["div[class^='detail_wbtext']"]},{matches:["medium.com","*.medium.com"],selectorMatches:["meta[property='al:ios:url'][content^='medium://']"],urlChangeDelay:2e3,selectors:["article section","h2","[aria-hidden='false'] pre","article p"],excludeSelectors:["[aria-label='Post Preview Reading Time']"],globalStyles:{h2:"-webkit-line-clamp: unset;max-height:unset;","article p":"-webkit-line-clamp: unset;max-height:unset;"}},{selectorMatches:["meta[property='og:site_name'][content='Nitter']"],selectors:[".tweet-content",".quote-text"]},{matches:"*.fandom.com",additionalSelectors:[".mcf-card-article__title"]},{matches:["www.washingtonpost.com"],additionalSelectors:["[data-qa='article-body']"]},{matches:"www.economist.com",extraInlineSelectors:"span[data-caps='initial']"},{matches:"www.healthline.com",excludeSelectors:".icon-hl-trusted-source-after"},{matches:"www.amazon.com",selectors:["h1","h2 > a > span","[data-a-expander-name='book_description_expander'] > div","[data-feature-name='editorialReviews']",'[data-a-expander-name="review_text_read_more"] > div > span','[data-feature-name="featurebullets"]','[data-feature-name="aplus"'],excludeBlockSelectors:["div.reviewText > span"],globalStyles:{".s-line-clamp-2":"-webkit-line-clamp: unset;max-height: unset;"}},{matches:"www.bloomberg.com",urlChangeDelay:2e3},{matches:"xueshu.baidu.com",globalStyles:{".abstract_wr":"height: unset; overflow: visible; max-height:unset;"}},{matches:"www.sciencedirect.com",urlChangeDelay:2e3},{matches:"www.thehighestofthemountains.com",extraBlockSelectors:"div"},{matches:"telegra.ph",normalizeBody:"div.ql-editor[contenteditable='false']"}]};function ba(u){return Array.isArray(u)?u:u?[u]:[]}function ya(u,e){return e?(Array.isArray(e)||(e=[e]),Array.from(new Set([...e,u]))):[u]}function he(u,e){return e?(Array.isArray(u)||(u=[u]),Array.isArray(e)||(e=[e]),e.filter(t=>!u.includes(t))):[]}function st(u,e){let t=[],a=Object.keys(u);for(let i of a){let o=u[i];Array.isArray(o)&&t.push(i)}let n=u;return Object.keys(e).forEach(i=>{let o=e[i];if(o!==void 0)if(!t.includes(i))n[i]=o;else if(i.startsWith("additional")){let s=ba(o);n[i]=Array.from(new Set([...n[i],...s]))}else n[i]=ba(o)}),n}function el(){if(Y.PROD==="1")return{};let u={};if(Y.IMMERSIVE_TRANSLATE_SECRET_TENCENT_SECRET_ID&&Y.IMMERSIVE_TRANSLATE_SECRET_TENCENT_SECRET_KEY){let e={secretId:Y.IMMERSIVE_TRANSLATE_SECRET_TENCENT_SECRET_ID,secretKey:Y.IMMERSIVE_TRANSLATE_SECRET_TENCENT_SECRET_KEY};u.translationServices={},u.translationServices.tencent=e}if(Y.IMMERSIVE_TRANSLATE_SECRET_BAIDU_APPID&&Y.IMMERSIVE_TRANSLATE_SECRET_BAIDU_KEY){let e={appid:Y.IMMERSIVE_TRANSLATE_SECRET_BAIDU_APPID,key:Y.IMMERSIVE_TRANSLATE_SECRET_BAIDU_KEY};u.translationServices||(u.translationServices={}),u.translationServices.baidu=e}if(Y.IMMERSIVE_TRANSLATE_SECRET_CAIYUN_TOKEN){let e={token:Y.IMMERSIVE_TRANSLATE_SECRET_CAIYUN_TOKEN};u.translationServices||(u.translationServices={}),u.translationServices.caiyun=e}if(Y.IMMERSIVE_TRANSLATE_SECRET_OPENL_APIKEY){let e={apikey:Y.IMMERSIVE_TRANSLATE_SECRET_OPENL_APIKEY};u.translationServices||(u.translationServices={}),u.translationServices.openl=e}if(Y.IMMERSIVE_TRANSLATE_SECRET_YOUDAO_APP_ID&&Y.IMMERSIVE_TRANSLATE_SECRET_YOUDAO_APP_SECRET){let e={appId:Y.IMMERSIVE_TRANSLATE_SECRET_YOUDAO_APP_ID,appSecret:Y.IMMERSIVE_TRANSLATE_SECRET_YOUDAO_APP_SECRET};u.translationServices||(u.translationServices={}),u.translationServices.youdao=e}if(Y.IMMERSIVE_TRANSLATE_SECRET_VOLC_ACCESS_KEY_ID&&Y.IMMERSIVE_TRANSLATE_SECRET_VOLC_SECRET_ACCESS_KEY){let e={accessKeyId:Y.IMMERSIVE_TRANSLATE_SECRET_VOLC_ACCESS_KEY_ID,secretAccessKey:Y.IMMERSIVE_TRANSLATE_SECRET_VOLC_SECRET_ACCESS_KEY};u.translationServices||(u.translationServices={}),u.translationServices.volc=e}if(Y.IMMERSIVE_TRANSLATE_SECRET_DEEPL_AUTH_KEY){let e={authKey:Y.IMMERSIVE_TRANSLATE_SECRET_DEEPL_AUTH_KEY};u.translationServices||(u.translationServices={}),u.translationServices.deepl=e}return Y.IMMERSIVE_TRANSLATE_SERVICE&&(u.translationService=Y.IMMERSIVE_TRANSLATE_SERVICE),Y.DEBUG==="1"&&(u.debug=!0,u.cache=!1,u.alpha=!0),Y.MOCK==="1"&&(u.translationService="mock"),u}async function ge(){let u=await V.storage.local.get(et),e={...Or,buildinConfigUpdatedAt:Y.BUILD_TIME};if(u[et]){let m=u[et],d=new Date(m.buildinConfigUpdatedAt),g=new Date(e.buildinConfigUpdatedAt);d>g&&(e=m)}let t={...e,targetLanguage:ot,interfaceLanguage:ot,debug:!1,alpha:!1,translationUrlPattern:{matches:[],excludeMatches:[]},translationLanguagePattern:{matches:[],excludeMatches:[]},translationThemePatterns:{},translationParagraphLanguagePattern:{matches:[],excludeMatches:[],selectorMatches:[],excludeSelectorMatches:[]},translationBodyAreaPattern:{matches:[],excludeMatches:[],selectorMatches:[],excludeSelectorMatches:[]},translationTheme:"none",translationService:"google",translationArea:"main",translationStartMode:"dynamic",translationServices:{},generalRule:e.generalRule,translationGeneralConfig:{engine:"google"},rules:[]},a=el(),r=(await V.storage.sync.get("userConfig")||{}).userConfig||{},i=globalThis.IMMERSIVE_TRANSLATE_CONFIG||{},o=Object.assign({},i,a,r),s=Object.assign(t,e),c=Object.keys(s),l=["translationUrlPattern","translationLanguagePattern","translationBodyAreaPattern","translationParagraphLanguagePattern","translationThemePatterns","translationGeneralConfig"];for(let m of c){let d=m;if(d==="generalRule")typeof o[d]=="object"&&(s[d]=st(t[d],o[d]));else if(d==="translationServices"){let g=o[d]||{},p=e[d]||{},y=Object.keys(p),b=Object.keys(g),f=[...new Set([...y,...b])],E={};for(let x of f)E[x]={...p[x],...g[x]};s[d]=E}else if(typeof o[d]!="string"&&typeof o[d]!="boolean"&&typeof o[d]!="number"&&l.includes(d))o[d]&&(s[d]=Object.assign(s[d],o[d]));else if(d==="rules"){if(Array.isArray(o[d])&&(s[d]=[...o[d],...s[d]]),Y.PROD==="0"&&Y.DEV_RULES){let g=JSON.parse(Y.DEV_RULES);s[d]=[...g,...s[d]]}}else o[d]!==void 0&&(s[d]=o[d])}return s.donateUrl=e.donateUrl,s.minVersion=e.minVersion,s.feedbackUrl=e.feedbackUrl,s}function u0(){let u,e="pending",t=new Promise((a,n)=>{u={async resolve(r){await r,e="fulfilled",a(r)},reject(r){e="rejected",n(r)}}});return Object.defineProperty(t,"state",{get:()=>e}),Object.assign(t,u)}var xa=class extends Error{constructor(){super("Deadline"),this.name="DeadlineError"}};function e0(u,e){let t=u0(),a=setTimeout(()=>t.reject(new xa),e);return Promise.race([u,t]).finally(()=>clearTimeout(a))}function S0(u,e={}){let{signal:t,persistent:a}=e;return t?.aborted?Promise.reject(new DOMException("Delay was aborted.","AbortError")):new Promise((n,r)=>{let i=()=>{clearTimeout(s),r(new DOMException("Delay was aborted.","AbortError"))},s=setTimeout(()=>{t?.removeEventListener("abort",i),n()},u);if(t?.addEventListener("abort",i,{once:!0}),a===!1)try{Deno.unrefTimer(s)}catch(c){if(!(c instanceof ReferenceError))throw c;console.error("`persistent` option is only available in Deno")}})}var Ir=class{#u=0;#e=[];#t=[];#a=u0();add(e){++this.#u,this.#n(e[Symbol.asyncIterator]())}async#n(e){try{let{value:t,done:a}=await e.next();a?--this.#u:this.#e.push({iterator:e,value:t})}catch(t){this.#t.push(t)}this.#a.resolve()}async*iterate(){for(;this.#u>0;){await this.#a;for(let e=0;e<this.#e.length;e++){let{iterator:t,value:a}=this.#e[e];yield a,this.#n(t)}if(this.#t.length){for(let e of this.#t)throw e;this.#t.length=0}this.#e.length=0,this.#a=u0()}}[Symbol.asyncIterator](){return this.iterate()}};var qu={};C4(qu,{bgBlack:()=>Fl,bgBlue:()=>_l,bgBrightBlack:()=>zl,bgBrightBlue:()=>Il,bgBrightCyan:()=>$l,bgBrightGreen:()=>Nl,bgBrightMagenta:()=>Hl,bgBrightRed:()=>jl,bgBrightWhite:()=>ql,bgBrightYellow:()=>Ol,bgCyan:()=>Pl,bgGreen:()=>Bl,bgMagenta:()=>Ml,bgRed:()=>Sl,bgRgb24:()=>Kl,bgRgb8:()=>Wl,bgWhite:()=>Rl,bgYellow:()=>Ll,black:()=>dl,blue:()=>hl,bold:()=>rl,brightBlack:()=>qr,brightBlue:()=>Al,brightCyan:()=>Tl,brightGreen:()=>Cl,brightMagenta:()=>wl,brightRed:()=>Dl,brightWhite:()=>vl,brightYellow:()=>kl,cyan:()=>bl,dim:()=>ol,getColorEnabled:()=>al,gray:()=>xl,green:()=>fl,hidden:()=>cl,inverse:()=>ll,italic:()=>il,magenta:()=>El,red:()=>ml,reset:()=>nl,rgb24:()=>Vl,rgb8:()=>Ul,setColorEnabled:()=>tl,strikethrough:()=>gl,stripColor:()=>Jl,underline:()=>sl,white:()=>yl,yellow:()=>pl});var{Deno:Hr}=globalThis,$r=typeof Hr?.noColor=="boolean"?Hr.noColor:!0,Da=!$r;function tl(u){$r||(Da=u)}function al(){return Da}function R(u,e){return{open:`\x1B[${u.join(";")}m`,close:`\x1B[${e}m`,regexp:new RegExp(`\\x1b\\[${e}m`,"g")}}function z(u,e){return Da?`${e.open}${u.replace(e.regexp,e.open)}${e.close}`:u}function nl(u){return z(u,R([0],0))}function rl(u){return z(u,R([1],22))}function ol(u){return z(u,R([2],22))}function il(u){return z(u,R([3],23))}function sl(u){return z(u,R([4],24))}function ll(u){return z(u,R([7],27))}function cl(u){return z(u,R([8],28))}function gl(u){return z(u,R([9],29))}function dl(u){return z(u,R([30],39))}function ml(u){return z(u,R([31],39))}function fl(u){return z(u,R([32],39))}function pl(u){return z(u,R([33],39))}function hl(u){return z(u,R([34],39))}function El(u){return z(u,R([35],39))}function bl(u){return z(u,R([36],39))}function yl(u){return z(u,R([37],39))}function xl(u){return qr(u)}function qr(u){return z(u,R([90],39))}function Dl(u){return z(u,R([91],39))}function Cl(u){return z(u,R([92],39))}function kl(u){return z(u,R([93],39))}function Al(u){return z(u,R([94],39))}function wl(u){return z(u,R([95],39))}function Tl(u){return z(u,R([96],39))}function vl(u){return z(u,R([97],39))}function Fl(u){return z(u,R([40],49))}function Sl(u){return z(u,R([41],49))}function Bl(u){return z(u,R([42],49))}function Ll(u){return z(u,R([43],49))}function _l(u){return z(u,R([44],49))}function Ml(u){return z(u,R([45],49))}function Pl(u){return z(u,R([46],49))}function Rl(u){return z(u,R([47],49))}function zl(u){return z(u,R([100],49))}function jl(u){return z(u,R([101],49))}function Nl(u){return z(u,R([102],49))}function Ol(u){return z(u,R([103],49))}function Il(u){return z(u,R([104],49))}function Hl(u){return z(u,R([105],49))}function $l(u){return z(u,R([106],49))}function ql(u){return z(u,R([107],49))}function Ee(u,e=255,t=0){return Math.trunc(Math.max(Math.min(u,e),t))}function Ul(u,e){return z(u,R([38,5,Ee(e)],39))}function Wl(u,e){return z(u,R([48,5,Ee(e)],49))}function Vl(u,e){return typeof e=="number"?z(u,R([38,2,e>>16&255,e>>8&255,e&255],39)):z(u,R([38,2,Ee(e.r),Ee(e.g),Ee(e.b)],39))}function Kl(u,e){return typeof e=="number"?z(u,R([48,2,e>>16&255,e>>8&255,e&255],49)):z(u,R([48,2,Ee(e.r),Ee(e.g),Ee(e.b)],49))}var Gl=new RegExp(["[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)","(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-nq-uy=><~]))"].join("|"),"g");function Jl(u){return u.replace(Gl,"")}function lt(u,e){let t=null,a=null,n=(...r)=>{n.clear(),a=()=>{n.clear(),u.call(n,...r)},t=setTimeout(a,e)};return n.clear=()=>{typeof t=="number"&&(clearTimeout(t),t=null,a=null)},n.flush=()=>{a?.()},Object.defineProperty(n,"pending",{get:()=>typeof t=="number"}),n}var pt,N,Gr,Yl,B0,Ur,Jr,dt={},Yr=[],Xl=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function be(u,e){for(var t in e)u[t]=e[t];return u}function Xr(u){var e=u.parentNode;e&&e.removeChild(u)}function Qr(u,e,t){var a,n,r,i={};for(r in e)r=="key"?a=e[r]:r=="ref"?n=e[r]:i[r]=e[r];if(arguments.length>2&&(i.children=arguments.length>3?pt.call(arguments,2):t),typeof u=="function"&&u.defaultProps!=null)for(r in u.defaultProps)i[r]===void 0&&(i[r]=u.defaultProps[r]);return ct(u,i,a,n,null)}function ct(u,e,t,a,n){var r={type:u,props:e,key:t,ref:a,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:n??++Gr};return n==null&&N.vnode!=null&&N.vnode(r),r}function ne(u){return u.children}function gt(u,e){this.props=u,this.context=e}function t0(u,e){if(e==null)return u.__?t0(u.__,u.__.__k.indexOf(u)+1):null;for(var t;e<u.__k.length;e++)if((t=u.__k[e])!=null&&t.__e!=null)return t.__e;return typeof u.type=="function"?t0(u):null}function Zr(u){var e,t;if((u=u.__)!=null&&u.__c!=null){for(u.__e=u.__c.base=null,e=0;e<u.__k.length;e++)if((t=u.__k[e])!=null&&t.__e!=null){u.__e=u.__c.base=t.__e;break}return Zr(u)}}function Ca(u){(!u.__d&&(u.__d=!0)&&B0.push(u)&&!mt.__r++||Ur!==N.debounceRendering)&&((Ur=N.debounceRendering)||setTimeout)(mt)}function mt(){for(var u;mt.__r=B0.length;)u=B0.sort(function(e,t){return e.__v.__b-t.__v.__b}),B0=[],u.some(function(e){var t,a,n,r,i,o;e.__d&&(i=(r=(t=e).__v).__e,(o=t.__P)&&(a=[],(n=be({},r)).__v=r.__v+1,ka(o,r,n,t.__n,o.ownerSVGElement!==void 0,r.__h!=null?[i]:null,a,i??t0(r),r.__h),ao(a,r),r.__e!=i&&Zr(r)))})}function uo(u,e,t,a,n,r,i,o,s,c){var l,m,d,g,p,y,b,f=a&&a.__k||Yr,E=f.length;for(t.__k=[],l=0;l<e.length;l++)if((g=t.__k[l]=(g=e[l])==null||typeof g=="boolean"?null:typeof g=="string"||typeof g=="number"||typeof g=="bigint"?ct(null,g,null,null,g):Array.isArray(g)?ct(ne,{children:g},null,null,null):g.__b>0?ct(g.type,g.props,g.key,g.ref?g.ref:null,g.__v):g)!=null){if(g.__=t,g.__b=t.__b+1,(d=f[l])===null||d&&g.key==d.key&&g.type===d.type)f[l]=void 0;else for(m=0;m<E;m++){if((d=f[m])&&g.key==d.key&&g.type===d.type){f[m]=void 0;break}d=null}ka(u,g,d=d||dt,n,r,i,o,s,c),p=g.__e,(m=g.ref)&&d.ref!=m&&(b||(b=[]),d.ref&&b.push(d.ref,null,g),b.push(m,g.__c||p,g)),p!=null?(y==null&&(y=p),typeof g.type=="function"&&g.__k===d.__k?g.__d=s=eo(g,s,u):s=to(u,g,d,f,p,s),typeof t.type=="function"&&(t.__d=s)):s&&d.__e==s&&s.parentNode!=u&&(s=t0(d))}for(t.__e=y,l=E;l--;)f[l]!=null&&(typeof t.type=="function"&&f[l].__e!=null&&f[l].__e==t.__d&&(t.__d=t0(a,l+1)),ro(f[l],f[l]));if(b)for(l=0;l<b.length;l++)no(b[l],b[++l],b[++l])}function eo(u,e,t){for(var a,n=u.__k,r=0;n&&r<n.length;r++)(a=n[r])&&(a.__=u,e=typeof a.type=="function"?eo(a,e,t):to(t,a,a,n,a.__e,e));return e}function to(u,e,t,a,n,r){var i,o,s;if(e.__d!==void 0)i=e.__d,e.__d=void 0;else if(t==null||n!=r||n.parentNode==null)u:if(r==null||r.parentNode!==u)u.appendChild(n),i=null;else{for(o=r,s=0;(o=o.nextSibling)&&s<a.length;s+=2)if(o==n)break u;u.insertBefore(n,r),i=r}return i!==void 0?i:n.nextSibling}function Ql(u,e,t,a,n){var r;for(r in t)r==="children"||r==="key"||r in e||ft(u,r,null,t[r],a);for(r in e)n&&typeof e[r]!="function"||r==="children"||r==="key"||r==="value"||r==="checked"||t[r]===e[r]||ft(u,r,e[r],t[r],a)}function Wr(u,e,t){e[0]==="-"?u.setProperty(e,t):u[e]=t==null?"":typeof t!="number"||Xl.test(e)?t:t+"px"}function ft(u,e,t,a,n){var r;u:if(e==="style")if(typeof t=="string")u.style.cssText=t;else{if(typeof a=="string"&&(u.style.cssText=a=""),a)for(e in a)t&&e in t||Wr(u.style,e,"");if(t)for(e in t)a&&t[e]===a[e]||Wr(u.style,e,t[e])}else if(e[0]==="o"&&e[1]==="n")r=e!==(e=e.replace(/Capture$/,"")),e=e.toLowerCase()in u?e.toLowerCase().slice(2):e.slice(2),u.l||(u.l={}),u.l[e+r]=t,t?a||u.addEventListener(e,r?Kr:Vr,r):u.removeEventListener(e,r?Kr:Vr,r);else if(e!=="dangerouslySetInnerHTML"){if(n)e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!=="href"&&e!=="list"&&e!=="form"&&e!=="tabIndex"&&e!=="download"&&e in u)try{u[e]=t??"";break u}catch{}typeof t=="function"||(t!=null&&(t!==!1||e[0]==="a"&&e[1]==="r")?u.setAttribute(e,t):u.removeAttribute(e))}}function Vr(u){this.l[u.type+!1](N.event?N.event(u):u)}function Kr(u){this.l[u.type+!0](N.event?N.event(u):u)}function ka(u,e,t,a,n,r,i,o,s){var c,l,m,d,g,p,y,b,f,E,x,w,B,T=e.type;if(e.constructor!==void 0)return null;t.__h!=null&&(s=t.__h,o=e.__e=t.__e,e.__h=null,r=[o]),(c=N.__b)&&c(e);try{u:if(typeof T=="function"){if(b=e.props,f=(c=T.contextType)&&a[c.__c],E=c?f?f.props.value:c.__:a,t.__c?y=(l=e.__c=t.__c).__=l.__E:("prototype"in T&&T.prototype.render?e.__c=l=new T(b,E):(e.__c=l=new gt(b,E),l.constructor=T,l.render=u3),f&&f.sub(l),l.props=b,l.state||(l.state={}),l.context=E,l.__n=a,m=l.__d=!0,l.__h=[]),l.__s==null&&(l.__s=l.state),T.getDerivedStateFromProps!=null&&(l.__s==l.state&&(l.__s=be({},l.__s)),be(l.__s,T.getDerivedStateFromProps(b,l.__s))),d=l.props,g=l.state,m)T.getDerivedStateFromProps==null&&l.componentWillMount!=null&&l.componentWillMount(),l.componentDidMount!=null&&l.__h.push(l.componentDidMount);else{if(T.getDerivedStateFromProps==null&&b!==d&&l.componentWillReceiveProps!=null&&l.componentWillReceiveProps(b,E),!l.__e&&l.shouldComponentUpdate!=null&&l.shouldComponentUpdate(b,l.__s,E)===!1||e.__v===t.__v){l.props=b,l.state=l.__s,e.__v!==t.__v&&(l.__d=!1),l.__v=e,e.__e=t.__e,e.__k=t.__k,e.__k.forEach(function(G){G&&(G.__=e)}),l.__h.length&&i.push(l);break u}l.componentWillUpdate!=null&&l.componentWillUpdate(b,l.__s,E),l.componentDidUpdate!=null&&l.__h.push(function(){l.componentDidUpdate(d,g,p)})}if(l.context=E,l.props=b,l.__v=e,l.__P=u,x=N.__r,w=0,"prototype"in T&&T.prototype.render)l.state=l.__s,l.__d=!1,x&&x(e),c=l.render(l.props,l.state,l.context);else do l.__d=!1,x&&x(e),c=l.render(l.props,l.state,l.context),l.state=l.__s;while(l.__d&&++w<25);l.state=l.__s,l.getChildContext!=null&&(a=be(be({},a),l.getChildContext())),m||l.getSnapshotBeforeUpdate==null||(p=l.getSnapshotBeforeUpdate(d,g)),B=c!=null&&c.type===ne&&c.key==null?c.props.children:c,uo(u,Array.isArray(B)?B:[B],e,t,a,n,r,i,o,s),l.base=e.__e,e.__h=null,l.__h.length&&i.push(l),y&&(l.__E=l.__=null),l.__e=!1}else r==null&&e.__v===t.__v?(e.__k=t.__k,e.__e=t.__e):e.__e=Zl(t.__e,e,t,a,n,r,i,s);(c=N.diffed)&&c(e)}catch(G){e.__v=null,(s||r!=null)&&(e.__e=o,e.__h=!!s,r[r.indexOf(o)]=null),N.__e(G,e,t)}}function ao(u,e){N.__c&&N.__c(e,u),u.some(function(t){try{u=t.__h,t.__h=[],u.some(function(a){a.call(t)})}catch(a){N.__e(a,t.__v)}})}function Zl(u,e,t,a,n,r,i,o){var s,c,l,m=t.props,d=e.props,g=e.type,p=0;if(g==="svg"&&(n=!0),r!=null){for(;p<r.length;p++)if((s=r[p])&&"setAttribute"in s==!!g&&(g?s.localName===g:s.nodeType===3)){u=s,r[p]=null;break}}if(u==null){if(g===null)return document.createTextNode(d);u=n?document.createElementNS("http://www.w3.org/2000/svg",g):document.createElement(g,d.is&&d),r=null,o=!1}if(g===null)m===d||o&&u.data===d||(u.data=d);else{if(r=r&&pt.call(u.childNodes),c=(m=t.props||dt).dangerouslySetInnerHTML,l=d.dangerouslySetInnerHTML,!o){if(r!=null)for(m={},p=0;p<u.attributes.length;p++)m[u.attributes[p].name]=u.attributes[p].value;(l||c)&&(l&&(c&&l.__html==c.__html||l.__html===u.innerHTML)||(u.innerHTML=l&&l.__html||""))}if(Ql(u,d,m,n,o),l)e.__k=[];else if(p=e.props.children,uo(u,Array.isArray(p)?p:[p],e,t,a,n&&g!=="foreignObject",r,i,r?r[0]:t.__k&&t0(t,0),o),r!=null)for(p=r.length;p--;)r[p]!=null&&Xr(r[p]);o||("value"in d&&(p=d.value)!==void 0&&(p!==u.value||g==="progress"&&!p||g==="option"&&p!==m.value)&&ft(u,"value",p,m.value,!1),"checked"in d&&(p=d.checked)!==void 0&&p!==u.checked&&ft(u,"checked",p,m.checked,!1))}return u}function no(u,e,t){try{typeof u=="function"?u(e):u.current=e}catch(a){N.__e(a,t)}}function ro(u,e,t){var a,n;if(N.unmount&&N.unmount(u),(a=u.ref)&&(a.current&&a.current!==u.__e||no(a,null,e)),(a=u.__c)!=null){if(a.componentWillUnmount)try{a.componentWillUnmount()}catch(r){N.__e(r,e)}a.base=a.__P=null,u.__c=void 0}if(a=u.__k)for(n=0;n<a.length;n++)a[n]&&ro(a[n],e,typeof u.type!="function");t||u.__e==null||Xr(u.__e),u.__=u.__e=u.__d=void 0}function u3(u,e,t){return this.constructor(u,t)}function L0(u,e,t){var a,n,r;N.__&&N.__(u,e),n=(a=typeof t=="function")?null:t&&t.__k||e.__k,r=[],ka(e,u=(!a&&t||e).__k=Qr(ne,null,[u]),n||dt,dt,e.ownerSVGElement!==void 0,!a&&t?[t]:n?null:e.firstChild?pt.call(e.childNodes):null,r,!a&&t?t:n?n.__e:e.firstChild,a),ao(r,u)}function oo(u,e){var t={__c:e="__cC"+Jr++,__:u,Consumer:function(a,n){return a.children(n)},Provider:function(a){var n,r;return this.getChildContext||(n=[],(r={})[e]=this,this.getChildContext=function(){return r},this.shouldComponentUpdate=function(i){this.props.value!==i.value&&n.some(Ca)},this.sub=function(i){n.push(i);var o=i.componentWillUnmount;i.componentWillUnmount=function(){n.splice(n.indexOf(i),1),o&&o.call(i)}}),a.children}};return t.Provider.__=t.Consumer.contextType=t}pt=Yr.slice,N={__e:function(u,e,t,a){for(var n,r,i;e=e.__;)if((n=e.__c)&&!n.__)try{if((r=n.constructor)&&r.getDerivedStateFromError!=null&&(n.setState(r.getDerivedStateFromError(u)),i=n.__d),n.componentDidCatch!=null&&(n.componentDidCatch(u,a||{}),i=n.__d),i)return n.__E=n}catch(o){u=o}throw u}},Gr=0,Yl=function(u){return u!=null&&u.constructor===void 0},gt.prototype.setState=function(u,e){var t;t=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=be({},this.state),typeof u=="function"&&(u=u(be({},t),this.props)),u&&be(t,u),u!=null&&this.__v&&(e&&this.__h.push(e),Ca(this))},gt.prototype.forceUpdate=function(u){this.__v&&(this.__e=!0,u&&this.__h.push(u),Ca(this))},gt.prototype.render=ne,B0=[],mt.__r=0,Jr=0;var M0,du,Aa,io,_0=0,po=[],ht=[],so=N.__b,lo=N.__r,co=N.diffed,go=N.__c,mo=N.unmount;function bt(u,e){N.__h&&N.__h(du,u,_0||e),_0=0;var t=du.__H||(du.__H={__:[],__h:[]});return u>=t.__.length&&t.__.push({__V:ht}),t.__[u]}function pu(u){return _0=1,e3(bo,u)}function e3(u,e,t){var a=bt(M0++,2);if(a.t=u,!a.__c&&(a.__=[t?t(e):bo(void 0,e),function(r){var i=a.__N?a.__N[0]:a.__[0],o=a.t(i,r);i!==o&&(a.__N=[o,a.__[1]],a.__c.setState({}))}],a.__c=du,!du.u)){du.u=!0;var n=du.shouldComponentUpdate;du.shouldComponentUpdate=function(r,i,o){if(!a.__c.__H)return!0;var s=a.__c.__H.__.filter(function(l){return l.__c});if(s.every(function(l){return!l.__N}))return!n||n.call(this,r,i,o);var c=!1;return s.forEach(function(l){if(l.__N){var m=l.__[0];l.__=l.__N,l.__N=void 0,m!==l.__[0]&&(c=!0)}}),!!c&&(!n||n.call(this,r,i,o))}}return a.__N||a.__}function Xu(u,e){var t=bt(M0++,3);!N.__s&&Eo(t.__H,e)&&(t.__=u,t.i=e,du.__H.__h.push(t))}function Ta(u){return _0=5,ho(function(){return{current:u}},[])}function ho(u,e){var t=bt(M0++,7);return Eo(t.__H,e)?(t.__V=u(),t.i=e,t.__h=u,t.__V):t.__}function P0(u,e){return _0=8,ho(function(){return u},e)}function va(u){var e=du.context[u.__c],t=bt(M0++,9);return t.c=u,e?(t.__==null&&(t.__=!0,e.sub(du)),e.props.value):u.__}function t3(){for(var u;u=po.shift();)if(u.__P&&u.__H)try{u.__H.__h.forEach(Et),u.__H.__h.forEach(wa),u.__H.__h=[]}catch(e){u.__H.__h=[],N.__e(e,u.__v)}}N.__b=function(u){typeof u.type!="function"||u.o||u.type===ne?u.o||(u.o=u.__&&u.__.o?u.__.o:""):u.o=(u.__&&u.__.o?u.__.o:"")+(u.__&&u.__.__k?u.__.__k.indexOf(u):0),du=null,so&&so(u)},N.__r=function(u){lo&&lo(u),M0=0;var e=(du=u.__c).__H;e&&(Aa===du?(e.__h=[],du.__h=[],e.__.forEach(function(t){t.__N&&(t.__=t.__N),t.__V=ht,t.__N=t.i=void 0})):(e.__h.forEach(Et),e.__h.forEach(wa),e.__h=[])),Aa=du},N.diffed=function(u){co&&co(u);var e=u.__c;e&&e.__H&&(e.__H.__h.length&&(po.push(e)!==1&&io===N.requestAnimationFrame||((io=N.requestAnimationFrame)||a3)(t3)),e.__H.__.forEach(function(t){t.i&&(t.__H=t.i),t.__V!==ht&&(t.__=t.__V),t.i=void 0,t.__V=ht})),Aa=du=null},N.__c=function(u,e){e.some(function(t){try{t.__h.forEach(Et),t.__h=t.__h.filter(function(a){return!a.__||wa(a)})}catch(a){e.some(function(n){n.__h&&(n.__h=[])}),e=[],N.__e(a,t.__v)}}),go&&go(u,e)},N.unmount=function(u){mo&&mo(u);var e,t=u.__c;t&&t.__H&&(t.__H.__.forEach(function(a){try{Et(a)}catch(n){e=n}}),t.__H=void 0,e&&N.__e(e,t.__v))};var fo=typeof requestAnimationFrame=="function";function a3(u){var e,t=function(){clearTimeout(a),fo&&cancelAnimationFrame(e),setTimeout(u)},a=setTimeout(t,100);fo&&(e=requestAnimationFrame(t))}function Et(u){var e=du,t=u.__c;typeof t=="function"&&(u.__c=void 0,t()),du=e}function wa(u){var e=du;u.__c=u.__(),du=e}function Eo(u,e){return!u||u.length!==e.length||e.some(function(t,a){return t!==u[a]})}function bo(u,e){return typeof e=="function"?e(u):e}var Km=Number.isNaN||function(u){return typeof u=="number"&&u!==u};var r3=class extends Error{constructor(){super("Throttled function aborted"),this.name="AbortError"}};function yt({limit:u,interval:e,strict:t}){if(!Number.isFinite(u))throw new TypeError("Expected `limit` to be a finite number");if(!Number.isFinite(e))throw new TypeError("Expected `interval` to be a finite number");let a=new Map,n=0,r=0;function i(){let l=Date.now();return l-n>e?(r=1,n=l,0):(r<u?r++:(n+=e,r=1),n-l)}let o=[];function s(){let l=Date.now();if(o.length<u)return o.push(l),0;let m=o.shift()+e;return l>=m?(o.push(l),0):(o.push(m),m-l)}let c=t?s:i;return l=>{let m=function(...d){if(!m.isEnabled)return(async()=>l.apply(this,d))();let g;return new Promise((p,y)=>{g=setTimeout(()=>{p(l.apply(this,d)),a.delete(g)},c()),a.set(g,y)})};return m.abort=()=>{for(let d of a.keys())clearTimeout(d),a.get(d)(new r3);a.clear(),o.splice(0,o.length)},m.isEnabled=!0,m}}var Fa;function ja(u){return[...u.v,(u.i?"!":"")+u.n].join(":")}function Ao(u,e=","){return u.map(ja).join(e)}var wo=typeof CSS<"u"&&CSS.escape||(u=>u.replace(/[!"'`*+.,;:\\/<=>?@#$%&^|~()[\]{}]/g,"\\$&").replace(/^\d/,"\\3$& "));function xt(u){for(var e=9,t=u.length;t--;)e=Math.imul(e^u.charCodeAt(t),1597334677);return"#"+((e^e>>>9)>>>0).toString(36)}function To(u,e="@media "){return e+de(u).map(t=>(typeof t=="string"&&(t={min:t}),t.raw||Object.keys(t).map(a=>`(${a}-width:${t[a]})`).join(" and "))).join(",")}function de(u=[]){return Array.isArray(u)?u:u==null?[]:[u]}function o3(){}var ku={d:0,b:134217728,c:268435456,a:671088640,u:805306368,o:939524096};function vo(u){var e;return((e=u.match(/[-=:;]/g))==null?void 0:e.length)||0}function Pa(u){return Math.min(/(?:^|width[^\d]+)(\d+(?:.\d+)?)(p)?/.test(u)?+RegExp.$1/(RegExp.$2?15:1)/10:0,15)<<22|Math.min(vo(u),15)<<18}var i3=["rst-c","st-ch","h-chi","y-lin","nk","sited","ecked","pty","ad-on","cus-w","ver","cus","cus-v","tive","sable","tiona","quire"];function Na({n:u,i:e,v:t=[]},a,n,r){for(let o of(u&&(u=ja({n:u,i:e,v:t})),r=[...de(r)],t)){let s=a.theme("screens",o);for(let c of de(s&&To(s)||a.v(o))){var i;r.push(c),n|=s?67108864|Pa(c):o=="dark"?1073741824:c[0]=="@"?Pa(c):(i=c,1<<~(/:([a-z-]+)/.test(i)&&~i3.indexOf(RegExp.$1.slice(2,7))||-18))}}return{n:u,p:n,r,i:e}}var Oa=new Map;function yo(u){if(u.d){let e=[],t=Sa(u.r.reduce((a,n)=>n[0]=="@"?(e.push(n),a):n?Sa(a,r=>Sa(n,i=>{let o=/(:merge\(.+?\))(:[a-z-]+|\\[.+])/.exec(i);if(o){let s=r.indexOf(o[1]);return~s?r.slice(0,s)+o[0]+r.slice(s+o[1].length):Ba(r,i)}return Ba(i,r)})):a,"&"),a=>Ba(a,u.n?"."+wo(u.n):""));return t&&e.push(t.replace(/:merge\((.+?)\)/g,"$1")),e.reduceRight((a,n)=>n+"{"+a+"}",u.d)}}function Sa(u,e){return u.replace(/ *((?:\(.+?\)|\[.+?\]|[^,])+) *(,|$)/g,(t,a,n)=>e(a)+n)}function Ba(u,e){return u.replace(/&/g,e)}var s3=new Intl.Collator("en",{numeric:!0});function l3(u,e){for(var t=0,a=u.length;t<a;){let n=a+t>>1;0>=Fo(u[n],e)?t=n+1:a=n}return a}function Fo(u,e){let t=u.p&ku.o;return t==(e.p&ku.o)&&(t==ku.b||t==ku.o)?0:u.p-e.p||u.o-e.o||s3.compare(u.n,e.n)}function La(u,e){return Math.round(parseInt(u,16)*e)}function c3(u,e={}){if(typeof u=="function")return u(e);let{opacityValue:t="1",opacityVariable:a}=e,n=a?`var(${a})`:t;if(u.includes("<alpha-value>"))return u.replace("<alpha-value>",n);if(u[0]=="#"&&(u.length==4||u.length==7)){let r=(u.length-1)/3,i=[17,1,.062272][r-1];return`rgba(${[La(u.substr(1,r),i),La(u.substr(1+r,r),i),La(u.substr(1+2*r,r),i),n]})`}return n=="1"?u:n=="0"?"#0000":u.replace(/^(rgb|hsl)(\([^)]+)\)$/,`$1a$2,${n})`)}function So(u,e,t,a,n=[]){return function r(i,{n:o,p:s,r:c=[],i:l},m){let d=[],g="",p=0,y=0;for(let E in i||{}){var b,f;let x=i[E];if(E[0]=="@"){if(!x)continue;if(E[1]=="a"){d.push(...Bo(o,s,Ha(""+x),m,s,c,l,!0));continue}if(E[1]=="l"){for(let w of de(x))d.push(...r(w,{n:o,p:(b=ku[E[7]],s&~ku.o|b),r:c,i:l},m));continue}if(E[1]=="i"){d.push(...de(x).map(w=>({p:-1,o:0,r:[],d:E+" "+w})));continue}if(E[1]=="k"){d.push({p:ku.d,o:0,r:[E],d:r(x,{p:ku.d},m).map(yo).join("")});continue}if(E[1]=="f"){d.push(...de(x).map(w=>({p:ku.d,o:0,r:[E],d:r(w,{p:ku.d},m).map(yo).join("")})));continue}}if(typeof x!="object"||Array.isArray(x))E=="label"&&x?o=x+xt(JSON.stringify([s,l,i])):(x||x===0)&&(E=E.replace(/[A-Z]/g,w=>"-"+w.toLowerCase()),y+=1,p=Math.max(p,(f=E)[0]=="-"?0:vo(f)+(/^(?:(border-(?!w|c|sty)|[tlbr].{2,4}m?$|c.{7}$)|([fl].{5}l|g.{8}$|pl))/.test(f)?+!!RegExp.$1||-!!RegExp.$2:0)+1),g+=(g?";":"")+de(x).map(w=>m.s(E,g3(""+w,m.theme)+(l?" !important":""))).join(";"));else if(E[0]=="@"||E.includes("&")){let w=s;E[0]=="@"&&(E=E.replace(/\bscreen\(([^)]+)\)/g,(B,T)=>{let G=m.theme("screens",T);return G?(w|=67108864,To(G,"")):B}),w|=Pa(E)),d.push(...r(x,{n:o,p:w,r:[...c,E],i:l},m))}else d.push(...r(x,{p:s,r:[...c,E]},m))}return d.unshift({n:o,p:s,o:Math.max(0,15-y)+1.5*Math.min(p||15,15),r:c,d:g}),d.sort(Fo)}(u,Na(e,t,a,n),t)}function g3(u,e){return u.replace(/theme\((["'`])?(.+?)\1(?:\s*,\s*(["'`])?(.+?)\3)?\)/g,(t,a,n,r,i)=>{let o=e(n,i);return typeof o=="function"&&/color|fill|stroke/i.test(n)?c3(o):""+o})}function Ia(u,e){let t,a=[];for(let n of u)n.d&&n.n?t?.p==n.p&&""+t.r==""+n.r?(t.c=[t.c,n.c].filter(Boolean).join(" "),t.d=t.d+";"+n.d):a.push(t={...n,n:n.n&&e}):a.push({...n,n:n.n&&e});return a}function Ra(u,e,t=ku.u,a,n){let r=[];for(let i of u)for(let o of function(s,c,l,m,d){var g;s={...s,i:s.i||d};let p=function(y,b){let f=Oa.get(y.n);return f?f(y,b):b.r(y.n,y.v[0]=="dark")}(s,c);return p?typeof p=="string"?({r:m,p:l}=Na(s,c,l,m),Ia(Ra(Ha(p),c,l,m,s.i),s.n)):Array.isArray(p)?p.map(y=>{var b,f;return{o:0,...y,r:[...de(m),...de(y.r)],p:(b=l,f=(g=y.p)!=null?g:l,b&~ku.o|f)}}):So(p,s,c,l,m):[{c:ja(s),p:0,o:0,r:[]}]}(i,e,t,a,n))r.splice(l3(r,o),0,o);return r}function Bo(u,e,t,a,n,r,i,o){return Ia((o?t.flatMap(s=>Ra([s],a,n,r,i)):Ra(t,a,n,r,i)).map(s=>s.p&ku.o&&(s.n||e==ku.b)?{...s,p:s.p&~ku.o|e,o:0}:s),u)}function d3(u,e,t,a){var n;return n=(r,i)=>{let{n:o,p:s,r:c,i:l}=Na(r,i,e);return t&&Bo(o,e,t,i,s,c,l,a)},Oa.set(u,n),u}function _a(u,e){if(u[u.length-1]!="("){let t=[],a=!1,n=!1,r="";for(let i of u)if(!(i=="("||/[~@]$/.test(i))){if(i[0]=="!"&&(i=i.slice(1),a=!a),i.endsWith(":")){t[i=="dark:"?"unshift":"push"](i.slice(0,-1));continue}i[0]=="-"&&(i=i.slice(1),n=!n),i.endsWith("-")&&(i=i.slice(0,-1)),i&&i!="&"&&(r+=(r&&"-")+i)}r&&(n&&(r="-"+r),e[0].push({n:r,v:t.filter(m3),i:a}))}}function m3(u,e,t){return t.indexOf(u)==e}var xo=new Map;function Ha(u){let e=xo.get(u);if(!e){let t=[],a=[[]],n=0,r=0,i=null,o=0,s=(c,l=0)=>{n!=o&&(t.push(u.slice(n,o+l)),c&&_a(t,a)),n=o+1};for(;o<u.length;o++){let c=u[o];if(r)u[o-1]!="\\"&&(r+=+(c=="[")||-(c=="]"));else if(c=="[")r+=1;else if(i)u[o-1]!="\\"&&i.test(u.slice(o))&&(i=null,n=o+RegExp.lastMatch.length);else if(c=="/"&&u[o-1]!="\\"&&(u[o+1]=="*"||u[o+1]=="/"))i=u[o+1]=="*"?/^\*\//:/^[\r\n]/;else if(c=="(")s(),t.push(c);else if(c==":")u[o+1]!=":"&&s(!1,1);else if(/[\s,)]/.test(c)){s(!0);let l=t.lastIndexOf("(");if(c==")"){let m=t[l-1];if(/[~@]$/.test(m)){let d=a.shift();t.length=l,_a([...t,"#"],a);let{v:g}=a[0].pop();for(let p of d)p.v.splice(+(p.v[0]=="dark")-+(g[0]=="dark"),g.length);_a([...t,d3(m.length>1?m.slice(0,-1)+xt(JSON.stringify([m,d])):m+"("+Ao(d)+")",ku.a,d,/@$/.test(m))],a)}l=t.lastIndexOf("(",l-1)}t.length=l+1}else/[~@]/.test(c)&&u[o+1]=="("&&a.unshift([])}s(!0),xo.set(u,e=a[0])}return e}function Lo(u,e,t){return e.reduce((a,n,r)=>a+t(n)+u[r+1],u[0])}function _o(u,e){return Array.isArray(u)&&Array.isArray(u.raw)?Lo(u,e,t=>Ma(t).trim()):e.filter(Boolean).reduce((t,a)=>t+Ma(a),u?Ma(u):"")}function Ma(u){let e,t="";if(u&&typeof u=="object")if(Array.isArray(u))(e=_o(u[0],u.slice(1)))&&(t+=" "+e);else for(let a in u)u[a]&&(t+=" "+a);else u!=null&&typeof u!="boolean"&&(t+=" "+u);return t}var i9=Mo("@"),s9=Mo("~");function Mo(u){return new Proxy(function(t,...a){return e("",t,a)},{get:(t,a)=>a in t?t[a]:function(n,...r){return e(a,n,r)}});function e(t,a,n){return Ao(Ha(t+u+"("+_o(a,n)+")"))}}function za(u,e){return Array.isArray(u)?Do(Lo(u,e,t=>t!=null&&typeof t!="boolean"?t:"")):typeof u=="string"?Do(u):[u]}var f3=/ *(?:(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}))/g;function Do(u){let e;u=u.replace(/\/\*[^]*?\*\/|\s\s+|\n/gm," ");let t=[{}],a=[t[0]],n=[];for(;e=f3.exec(u);)e[4]&&(t.shift(),n.shift()),e[3]?(n.unshift(e[3]),t.unshift({}),a.push(n.reduce((r,i)=>({[i]:r}),t[0]))):e[4]||(t[0][e[1]]&&(t.unshift({}),a.push(n.reduce((r,i)=>({[i]:r}),t[0]))),t[0][e[1]]=e[2]);return a}function Po(u,...e){var t,a;let n=za(u,e),r=(((t=n.find(i=>i.label))==null?void 0:t.label)||"css")+xt(JSON.stringify(n));return a=(i,o)=>Ia(n.flatMap(s=>So(s,i,o,ku.o)),r),Oa.set(r,a),r}var l9=new Proxy(function(u,e){return Co("animation",u,e)},{get:(u,e)=>e in u?u[e]:function(t,a){return Co(e,t,a)}});function Co(u,e,t){return{toString:()=>Po({label:u,"@layer components":{...typeof e=="object"?e:{animation:e},animationName:""+t}})}}var c9=Symbol();var Ro=new Proxy(o3,{apply:(u,e,t)=>Fa(t[0]),get(u,e){let t=Fa[e];return typeof t=="function"?function(){return t.apply(Fa,arguments)}:t}});var g9=function u(e){return new Proxy(function(t,...a){return ko(e,"",t,a)},{get:(t,a)=>a==="bind"?u:a in t?t[a]:function(n,...r){return ko(e,a,n,r)}})}();function ko(u,e,t,a){return{toString(){let n=za(t,a),r=wo(e+xt(JSON.stringify([e,n])));return(typeof u=="function"?u:Ro)(Po({[`@keyframes ${r}`]:za(t,a)})),r}}}var h3="inherit",E3="currentColor",b3="transparent",y3="#000",x3="#fff",D3={50:"#f8fafc",100:"#f1f5f9",200:"#e2e8f0",300:"#cbd5e1",400:"#94a3b8",500:"#64748b",600:"#475569",700:"#334155",800:"#1e293b",900:"#0f172a"},C3={50:"#f9fafb",100:"#f3f4f6",200:"#e5e7eb",300:"#d1d5db",400:"#9ca3af",500:"#6b7280",600:"#4b5563",700:"#374151",800:"#1f2937",900:"#111827"},k3={50:"#fafafa",100:"#f4f4f5",200:"#e4e4e7",300:"#d4d4d8",400:"#a1a1aa",500:"#71717a",600:"#52525b",700:"#3f3f46",800:"#27272a",900:"#18181b"},A3={50:"#fafafa",100:"#f5f5f5",200:"#e5e5e5",300:"#d4d4d4",400:"#a3a3a3",500:"#737373",600:"#525252",700:"#404040",800:"#262626",900:"#171717"},w3={50:"#fafaf9",100:"#f5f5f4",200:"#e7e5e4",300:"#d6d3d1",400:"#a8a29e",500:"#78716c",600:"#57534e",700:"#44403c",800:"#292524",900:"#1c1917"},T3={50:"#fef2f2",100:"#fee2e2",200:"#fecaca",300:"#fca5a5",400:"#f87171",500:"#ef4444",600:"#dc2626",700:"#b91c1c",800:"#991b1b",900:"#7f1d1d"},v3={50:"#fff7ed",100:"#ffedd5",200:"#fed7aa",300:"#fdba74",400:"#fb923c",500:"#f97316",600:"#ea580c",700:"#c2410c",800:"#9a3412",900:"#7c2d12"},F3={50:"#fffbeb",100:"#fef3c7",200:"#fde68a",300:"#fcd34d",400:"#fbbf24",500:"#f59e0b",600:"#d97706",700:"#b45309",800:"#92400e",900:"#78350f"},S3={50:"#fefce8",100:"#fef9c3",200:"#fef08a",300:"#fde047",400:"#facc15",500:"#eab308",600:"#ca8a04",700:"#a16207",800:"#854d0e",900:"#713f12"},B3={50:"#f7fee7",100:"#ecfccb",200:"#d9f99d",300:"#bef264",400:"#a3e635",500:"#84cc16",600:"#65a30d",700:"#4d7c0f",800:"#3f6212",900:"#365314"},L3={50:"#f0fdf4",100:"#dcfce7",200:"#bbf7d0",300:"#86efac",400:"#4ade80",500:"#22c55e",600:"#16a34a",700:"#15803d",800:"#166534",900:"#14532d"},_3={50:"#ecfdf5",100:"#d1fae5",200:"#a7f3d0",300:"#6ee7b7",400:"#34d399",500:"#10b981",600:"#059669",700:"#047857",800:"#065f46",900:"#064e3b"},M3={50:"#f0fdfa",100:"#ccfbf1",200:"#99f6e4",300:"#5eead4",400:"#2dd4bf",500:"#14b8a6",600:"#0d9488",700:"#0f766e",800:"#115e59",900:"#134e4a"},P3={50:"#ecfeff",100:"#cffafe",200:"#a5f3fc",300:"#67e8f9",400:"#22d3ee",500:"#06b6d4",600:"#0891b2",700:"#0e7490",800:"#155e75",900:"#164e63"},R3={50:"#f0f9ff",100:"#e0f2fe",200:"#bae6fd",300:"#7dd3fc",400:"#38bdf8",500:"#0ea5e9",600:"#0284c7",700:"#0369a1",800:"#075985",900:"#0c4a6e"},z3={50:"#eff6ff",100:"#dbeafe",200:"#bfdbfe",300:"#93c5fd",400:"#60a5fa",500:"#3b82f6",600:"#2563eb",700:"#1d4ed8",800:"#1e40af",900:"#1e3a8a"},j3={50:"#eef2ff",100:"#e0e7ff",200:"#c7d2fe",300:"#a5b4fc",400:"#818cf8",500:"#6366f1",600:"#4f46e5",700:"#4338ca",800:"#3730a3",900:"#312e81"},N3={50:"#f5f3ff",100:"#ede9fe",200:"#ddd6fe",300:"#c4b5fd",400:"#a78bfa",500:"#8b5cf6",600:"#7c3aed",700:"#6d28d9",800:"#5b21b6",900:"#4c1d95"},O3={50:"#faf5ff",100:"#f3e8ff",200:"#e9d5ff",300:"#d8b4fe",400:"#c084fc",500:"#a855f7",600:"#9333ea",700:"#7e22ce",800:"#6b21a8",900:"#581c87"},I3={50:"#fdf4ff",100:"#fae8ff",200:"#f5d0fe",300:"#f0abfc",400:"#e879f9",500:"#d946ef",600:"#c026d3",700:"#a21caf",800:"#86198f",900:"#701a75"},H3={50:"#fdf2f8",100:"#fce7f3",200:"#fbcfe8",300:"#f9a8d4",400:"#f472b6",500:"#ec4899",600:"#db2777",700:"#be185d",800:"#9d174d",900:"#831843"},$3={50:"#fff1f2",100:"#ffe4e6",200:"#fecdd3",300:"#fda4af",400:"#fb7185",500:"#f43f5e",600:"#e11d48",700:"#be123c",800:"#9f1239",900:"#881337"},q3={__proto__:null,inherit:h3,current:E3,transparent:b3,black:y3,white:x3,slate:D3,gray:C3,zinc:k3,neutral:A3,stone:w3,red:T3,orange:v3,amber:F3,yellow:S3,lime:B3,green:L3,emerald:_3,teal:M3,cyan:P3,sky:R3,blue:z3,indigo:j3,violet:N3,purple:O3,fuchsia:I3,pink:H3,rose:$3},Dt={screens:{sm:"640px",md:"768px",lg:"1024px",xl:"1280px","2xl":"1536px"},colors:q3,columns:{auto:"auto","3xs":"16rem","2xs":"18rem",xs:"20rem",sm:"24rem",md:"28rem",lg:"32rem",xl:"36rem","2xl":"42rem","3xl":"48rem","4xl":"56rem","5xl":"64rem","6xl":"72rem","7xl":"80rem"},spacing:{px:"1px",0:"0px",...Nu(4,"rem",4,.5,.5),...Nu(12,"rem",4,5),14:"3.5rem",...Nu(64,"rem",4,16,4),72:"18rem",80:"20rem",96:"24rem"},durations:{75:"75ms",100:"100ms",150:"150ms",200:"200ms",300:"300ms",500:"500ms",700:"700ms",1e3:"1000ms"},animation:{none:"none",spin:"spin 1s linear infinite",ping:"ping 1s cubic-bezier(0,0,0.2,1) infinite",pulse:"pulse 2s cubic-bezier(0.4,0,0.6,1) infinite",bounce:"bounce 1s infinite"},aspectRatio:{auto:"auto",square:"1/1",video:"16/9"},backdropBlur:K("blur"),backdropBrightness:K("brightness"),backdropContrast:K("contrast"),backdropGrayscale:K("grayscale"),backdropHueRotate:K("hueRotate"),backdropInvert:K("invert"),backdropOpacity:K("opacity"),backdropSaturate:K("saturate"),backdropSepia:K("sepia"),backgroundColor:K("colors"),backgroundImage:{none:"none"},backgroundOpacity:K("opacity"),backgroundSize:{auto:"auto",cover:"cover",contain:"contain"},blur:{none:"none",0:"0",sm:"4px",DEFAULT:"8px",md:"12px",lg:"16px",xl:"24px","2xl":"40px","3xl":"64px"},brightness:{...Nu(200,"",100,0,50),...Nu(110,"",100,90,5),75:"0.75",125:"1.25"},borderColor:({theme:u})=>({DEFAULT:u("colors.gray.200","currentColor"),...u("colors")}),borderOpacity:K("opacity"),borderRadius:{none:"0px",sm:"0.125rem",DEFAULT:"0.25rem",md:"0.375rem",lg:"0.5rem",xl:"0.75rem","2xl":"1rem","3xl":"1.5rem","1/2":"50%",full:"9999px"},borderSpacing:K("spacing"),borderWidth:{DEFAULT:"1px",...Uu(8,"px")},boxShadow:{sm:"0 1px 2px 0 rgba(0,0,0,0.05)",DEFAULT:"0 1px 3px 0 rgba(0,0,0,0.1), 0 1px 2px -1px rgba(0,0,0,0.1)",md:"0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -2px rgba(0,0,0,0.1)",lg:"0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.1)",xl:"0 20px 25px -5px rgba(0,0,0,0.1), 0 8px 10px -6px rgba(0,0,0,0.1)","2xl":"0 25px 50px -12px rgba(0,0,0,0.25)",inner:"inset 0 2px 4px 0 rgba(0,0,0,0.05)",none:"0 0 #0000"},boxShadowColor:K("colors"),caretColor:K("colors"),accentColor:({theme:u})=>({auto:"auto",...u("colors")}),contrast:{...Nu(200,"",100,0,50),75:"0.75",125:"1.25"},content:{none:"none"},divideColor:K("borderColor"),divideOpacity:K("borderOpacity"),divideWidth:K("borderWidth"),dropShadow:{sm:"0 1px 1px rgba(0,0,0,0.05)",DEFAULT:["0 1px 2px rgba(0,0,0,0.1)","0 1px 1px rgba(0,0,0,0.06)"],md:["0 4px 3px rgba(0,0,0,0.07)","0 2px 2px rgba(0,0,0,0.06)"],lg:["0 10px 8px rgba(0,0,0,0.04)","0 4px 3px rgba(0,0,0,0.1)"],xl:["0 20px 13px rgba(0,0,0,0.03)","0 8px 5px rgba(0,0,0,0.08)"],"2xl":"0 25px 25px rgba(0,0,0,0.15)",none:"0 0 #0000"},fill:K("colors"),grayscale:{DEFAULT:"100%",0:"0"},hueRotate:{0:"0deg",15:"15deg",30:"30deg",60:"60deg",90:"90deg",180:"180deg"},invert:{DEFAULT:"100%",0:"0"},flex:{1:"1 1 0%",auto:"1 1 auto",initial:"0 1 auto",none:"none"},flexBasis:({theme:u})=>({...u("spacing"),...R0(2,6),...R0(12,12),auto:"auto",full:"100%"}),flexGrow:{DEFAULT:1,0:0},flexShrink:{DEFAULT:1,0:0},fontFamily:{sans:'ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"'.split(","),serif:'ui-serif,Georgia,Cambria,"Times New Roman",Times,serif'.split(","),mono:'ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace'.split(",")},fontSize:{xs:["0.75rem","1rem"],sm:["0.875rem","1.25rem"],base:["1rem","1.5rem"],lg:["1.125rem","1.75rem"],xl:["1.25rem","1.75rem"],"2xl":["1.5rem","2rem"],"3xl":["1.875rem","2.25rem"],"4xl":["2.25rem","2.5rem"],"5xl":["3rem","1"],"6xl":["3.75rem","1"],"7xl":["4.5rem","1"],"8xl":["6rem","1"],"9xl":["8rem","1"]},fontWeight:{thin:"100",extralight:"200",light:"300",normal:"400",medium:"500",semibold:"600",bold:"700",extrabold:"800",black:"900"},gap:K("spacing"),gradientColorStops:K("colors"),gridAutoColumns:{auto:"auto",min:"min-content",max:"max-content",fr:"minmax(0,1fr)"},gridAutoRows:{auto:"auto",min:"min-content",max:"max-content",fr:"minmax(0,1fr)"},gridColumn:{auto:"auto","span-full":"1 / -1"},gridRow:{auto:"auto","span-full":"1 / -1"},gridTemplateColumns:{none:"none"},gridTemplateRows:{none:"none"},height:({theme:u})=>({...u("spacing"),...R0(2,6),min:"min-content",max:"max-content",fit:"fit-content",auto:"auto",full:"100%",screen:"100vh"}),inset:({theme:u})=>({...u("spacing"),...R0(2,4),auto:"auto",full:"100%"}),keyframes:{spin:{from:{transform:"rotate(0deg)"},to:{transform:"rotate(360deg)"}},ping:{"0%":{transform:"scale(1)",opacity:"1"},"75%,100%":{transform:"scale(2)",opacity:"0"}},pulse:{"0%,100%":{opacity:"1"},"50%":{opacity:".5"}},bounce:{"0%, 100%":{transform:"translateY(-25%)",animationTimingFunction:"cubic-bezier(0.8,0,1,1)"},"50%":{transform:"none",animationTimingFunction:"cubic-bezier(0,0,0.2,1)"}}},letterSpacing:{tighter:"-0.05em",tight:"-0.025em",normal:"0em",wide:"0.025em",wider:"0.05em",widest:"0.1em"},lineHeight:{...Nu(10,"rem",4,3),none:"1",tight:"1.25",snug:"1.375",normal:"1.5",relaxed:"1.625",loose:"2"},margin:({theme:u})=>({auto:"auto",...u("spacing")}),maxHeight:({theme:u})=>({full:"100%",min:"min-content",max:"max-content",fit:"fit-content",screen:"100vh",...u("spacing")}),maxWidth:({theme:u,breakpoints:e})=>({...e(u("screens")),none:"none",0:"0rem",xs:"20rem",sm:"24rem",md:"28rem",lg:"32rem",xl:"36rem","2xl":"42rem","3xl":"48rem","4xl":"56rem","5xl":"64rem","6xl":"72rem","7xl":"80rem",full:"100%",min:"min-content",max:"max-content",fit:"fit-content",prose:"65ch"}),minHeight:{0:"0px",full:"100%",min:"min-content",max:"max-content",fit:"fit-content",screen:"100vh"},minWidth:{0:"0px",full:"100%",min:"min-content",max:"max-content",fit:"fit-content"},opacity:{...Nu(100,"",100,0,10),5:"0.05",25:"0.25",75:"0.75",95:"0.95"},order:{first:"-9999",last:"9999",none:"0"},padding:K("spacing"),placeholderColor:K("colors"),placeholderOpacity:K("opacity"),outlineColor:K("colors"),outlineOffset:Uu(8,"px"),outlineWidth:Uu(8,"px"),ringColor:({theme:u})=>({...u("colors"),DEFAULT:u("colors.blue.500","#3b82f6")}),ringOffsetColor:K("colors"),ringOffsetWidth:Uu(8,"px"),ringOpacity:({theme:u})=>({...u("opacity"),DEFAULT:"0.5"}),ringWidth:{DEFAULT:"3px",...Uu(8,"px")},rotate:{...Uu(2,"deg"),...Uu(12,"deg",3),...Uu(180,"deg",45)},saturate:Nu(200,"",100,0,50),scale:{...Nu(150,"",100,0,50),...Nu(110,"",100,90,5),75:"0.75",125:"1.25"},scrollMargin:K("spacing"),scrollPadding:K("spacing"),sepia:{0:"0",DEFAULT:"100%"},skew:{...Uu(2,"deg"),...Uu(12,"deg",3)},space:K("spacing"),stroke:K("colors"),strokeWidth:Nu(2),textColor:K("colors"),textDecorationColor:K("colors"),textDecorationThickness:{"from-font":"from-font",auto:"auto",...Uu(8,"px")},textUnderlineOffset:{auto:"auto",...Uu(8,"px")},textIndent:K("spacing"),textOpacity:K("opacity"),transitionDuration:({theme:u})=>({...u("durations"),DEFAULT:"150ms"}),transitionDelay:K("durations"),transitionProperty:{none:"none",all:"all",DEFAULT:"color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter",colors:"color,background-color,border-color,text-decoration-color,fill,stroke",opacity:"opacity",shadow:"box-shadow",transform:"transform"},transitionTimingFunction:{DEFAULT:"cubic-bezier(0.4,0,0.2,1)",linear:"linear",in:"cubic-bezier(0.4,0,1,1)",out:"cubic-bezier(0,0,0.2,1)","in-out":"cubic-bezier(0.4,0,0.2,1)"},translate:({theme:u})=>({...u("spacing"),...R0(2,4),full:"100%"}),width:({theme:u})=>({min:"min-content",max:"max-content",fit:"fit-content",screen:"100vw",...u("flexBasis")}),willChange:{scroll:"scroll-position"},zIndex:{...Nu(50,"",1,0,10),auto:"auto"}};function R0(u,e){let t={};do for(var a=1;a<u;a++)t[`${a}/${u}`]=Number((a/u*100).toFixed(6))+"%";while(++u<=e);return t}function Uu(u,e,t=0){let a={};for(;t<=u;t=2*t||1)a[t]=t+e;return a}function Nu(u,e="",t=1,a=0,n=1,r={}){for(;a<=u;a+=n)r[a]=a/t+e;return r}function K(u){return({theme:e})=>e(u)}var U3={"*,::before,::after":{boxSizing:"border-box",borderWidth:"0",borderStyle:"solid",borderColor:"theme(borderColor.DEFAULT, currentColor)"},"::before,::after":{"--tw-content":"''"},html:{lineHeight:1.5,WebkitTextSizeAdjust:"100%",MozTabSize:"4",tabSize:4,fontFamily:`theme(fontFamily.sans, ${Dt.fontFamily.sans})`},body:{margin:"0",lineHeight:"inherit"},hr:{height:"0",color:"inherit",borderTopWidth:"1px"},"abbr:where([title])":{textDecoration:"underline dotted"},"h1,h2,h3,h4,h5,h6":{fontSize:"inherit",fontWeight:"inherit"},a:{color:"inherit",textDecoration:"inherit"},"b,strong":{fontWeight:"bolder"},"code,kbd,samp,pre":{fontFamily:`theme(fontFamily.mono, ${Dt.fontFamily.mono})`,fontSize:"1em"},small:{fontSize:"80%"},"sub,sup":{fontSize:"75%",lineHeight:0,position:"relative",verticalAlign:"baseline"},sub:{bottom:"-0.25em"},sup:{top:"-0.5em"},table:{textIndent:"0",borderColor:"inherit",borderCollapse:"collapse"},"button,input,optgroup,select,textarea":{fontFamily:"inherit",fontSize:"100%",lineHeight:"inherit",color:"inherit",margin:"0",padding:"0"},"button,select":{textTransform:"none"},"button,[type='button'],[type='reset'],[type='submit']":{WebkitAppearance:"button",backgroundColor:"transparent",backgroundImage:"none"},":-moz-focusring":{outline:"auto"},":-moz-ui-invalid":{boxShadow:"none"},progress:{verticalAlign:"baseline"},"::-webkit-inner-spin-button,::-webkit-outer-spin-button":{height:"auto"},"[type='search']":{WebkitAppearance:"textfield",outlineOffset:"-2px"},"::-webkit-search-decoration":{WebkitAppearance:"none"},"::-webkit-file-upload-button":{WebkitAppearance:"button",font:"inherit"},summary:{display:"list-item"},"blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre":{margin:"0"},fieldset:{margin:"0",padding:"0"},legend:{padding:"0"},"ol,ul,menu":{listStyle:"none",margin:"0",padding:"0"},textarea:{resize:"vertical"},"input::placeholder,textarea::placeholder":{opacity:1,color:"theme(colors.gray.400, #9ca3af)"},'button,[role="button"]':{cursor:"pointer"},":disabled":{cursor:"default"},"img,svg,video,canvas,audio,iframe,embed,object":{display:"block",verticalAlign:"middle"},"img,video":{maxWidth:"100%",height:"auto"},"[hidden]":{display:"none"}};var $a;function Qa(u){return[...u.v,(u.i?"!":"")+u.n].join(":")}function Uo(u,e=","){return u.map(Qa).join(e)}var Wo=typeof CSS<"u"&&CSS.escape||(u=>u.replace(/[!"'`*+.,;:\\/<=>?@#$%&^|~()[\]{}]/g,"\\$&").replace(/^\d/,"\\3$& "));function kt(u){for(var e=9,t=u.length;t--;)e=Math.imul(e^u.charCodeAt(t),1597334677);return"#"+((e^e>>>9)>>>0).toString(36)}function At(u,e="@media "){return e+Wu(u).map(t=>(typeof t=="string"&&(t={min:t}),t.raw||Object.keys(t).map(a=>`(${a}-width:${t[a]})`).join(" and "))).join(",")}function Wu(u=[]){return Array.isArray(u)?u:u==null?[]:[u]}function W3(){}var Au={d:0,b:134217728,c:268435456,a:671088640,u:805306368,o:939524096};function Vo(u){return u.match(/[-=:;]/g)?.length||0}function Ga(u){return Math.min(/(?:^|width[^\d]+)(\d+(?:.\d+)?)(p)?/.test(u)?Math.max(0,29.63*(+RegExp.$1/(RegExp.$2?15:1))**.137-43):0,15)<<22|Math.min(Vo(u),15)<<18}var V3=["rst-c","st-ch","h-chi","y-lin","nk","sited","ecked","pty","ad-on","cus-w","ver","cus","cus-v","tive","sable","tiona","quire"];function Za({n:u,i:e,v:t=[]},a,n,r){u&&(u=Qa({n:u,i:e,v:t})),r=[...Wu(r)];for(let o of t){let s=a.theme("screens",o);for(let c of Wu(s&&At(s)||a.v(o))){var i;r.push(c),n|=s?67108864|Ga(c):o=="dark"?1073741824:c[0]=="@"?Ga(c):(i=c,1<<~(/:([a-z-]+)/.test(i)&&~V3.indexOf(RegExp.$1.slice(2,7))||-18))}}return{n:u,p:n,r,i:e}}var un=new Map;function zo(u){if(u.d){let e=[],t=qa(u.r.reduce((a,n)=>n[0]=="@"?(e.push(n),a):n?qa(a,r=>qa(n,i=>{let o=/(:merge\(.+?\))(:[a-z-]+|\\[.+])/.exec(i);if(o){let s=r.indexOf(o[1]);return~s?r.slice(0,s)+o[0]+r.slice(s+o[1].length):Ua(r,i)}return Ua(i,r)})):a,"&"),a=>Ua(a,u.n?"."+Wo(u.n):""));return t&&e.push(t.replace(/:merge\((.+?)\)/g,"$1")),e.reduceRight((a,n)=>n+"{"+a+"}",u.d)}}function qa(u,e){return u.replace(/ *((?:\(.+?\)|\[.+?\]|[^,])+) *(,|$)/g,(t,a,n)=>e(a)+n)}function Ua(u,e){return u.replace(/&/g,e)}var jo=new Intl.Collator("en",{numeric:!0});function K3(u,e){for(var t=0,a=u.length;t<a;){let n=a+t>>1;0>=Ko(u[n],e)?t=n+1:a=n}return a}function Ko(u,e){let t=u.p&Au.o;return t==(e.p&Au.o)&&(t==Au.b||t==Au.o)?0:u.p-e.p||u.o-e.o||jo.compare(No(u.n),No(e.n))||jo.compare(Oo(u.n),Oo(e.n))}function No(u){return(u||"").split(/:/).pop().split("/").pop()||"\0"}function Oo(u){return(u||"").replace(/\W/g,e=>String.fromCharCode(127+e.charCodeAt(0)))+"\0"}function Wa(u,e){return Math.round(parseInt(u,16)*e)}function ye(u,e={}){if(typeof u=="function")return u(e);let{opacityValue:t="1",opacityVariable:a}=e,n=a?`var(${a})`:t;if(u.includes("<alpha-value>"))return u.replace("<alpha-value>",n);if(u[0]=="#"&&(u.length==4||u.length==7)){let r=(u.length-1)/3,i=[17,1,.062272][r-1];return`rgba(${[Wa(u.substr(1,r),i),Wa(u.substr(1+r,r),i),Wa(u.substr(1+2*r,r),i),n]})`}return n=="1"?u:n=="0"?"#0000":u.replace(/^(rgb|hsl)(\([^)]+)\)$/,`$1a$2,${n})`)}function Go(u,e,t,a,n=[]){return function r(i,{n:o,p:s,r:c=[],i:l},m){let d=[],g="",p=0,y=0;for(let E in i||{}){var b,f;let x=i[E];if(E[0]=="@"){if(!x)continue;if(E[1]=="a"){d.push(...Yo(o,s,tn(""+x),m,s,c,l,!0));continue}if(E[1]=="l"){for(let w of Wu(x))d.push(...r(w,{n:o,p:(b=Au[E[7]],s&~Au.o|b),r:c,i:l},m));continue}if(E[1]=="i"){d.push(...Wu(x).map(w=>({p:-1,o:0,r:[],d:E+" "+w})));continue}if(E[1]=="k"){d.push({p:Au.d,o:0,r:[E],d:r(x,{p:Au.d},m).map(zo).join("")});continue}if(E[1]=="f"){d.push(...Wu(x).map(w=>({p:Au.d,o:0,r:[E],d:r(w,{p:Au.d},m).map(zo).join("")})));continue}}if(typeof x!="object"||Array.isArray(x))E=="label"&&x?o=x+kt(JSON.stringify([s,l,i])):(x||x===0)&&(E=E.replace(/[A-Z]/g,w=>"-"+w.toLowerCase()),y+=1,p=Math.max(p,(f=E)[0]=="-"?0:Vo(f)+(/^(?:(border-(?!w|c|sty)|[tlbr].{2,4}m?$|c.{7,8}$)|([fl].{5}l|g.{8}$|pl))/.test(f)?+!!RegExp.$1||-!!RegExp.$2:0)+1),g+=(g?";":"")+Wu(x).map(w=>m.s(E,Jo(""+w,m.theme)+(l?" !important":""))).join(";"));else if(E[0]=="@"||E.includes("&")){let w=s;E[0]=="@"&&(E=E.replace(/\bscreen\(([^)]+)\)/g,(B,T)=>{let G=m.theme("screens",T);return G?(w|=67108864,At(G,"")):B}),w|=Ga(E)),d.push(...r(x,{n:o,p:w,r:[...c,E],i:l},m))}else d.push(...r(x,{p:s,r:[...c,E]},m))}return d.unshift({n:o,p:s,o:Math.max(0,15-y)+1.5*Math.min(p||15,15),r:c,d:g}),d.sort(Ko)}(u,Za(e,t,a,n),t)}function Jo(u,e){return u.replace(/theme\((["'`])?(.+?)\1(?:\s*,\s*(["'`])?(.+?)\3)?\)/g,(t,a,n,r,i="")=>{let o=e(n,i);return typeof o=="function"&&/color|fill|stroke/i.test(n)?ye(o):""+Wu(o).filter(s=>Object(s)!==s)})}function en(u,e){let t,a=[];for(let n of u)n.d&&n.n?t?.p==n.p&&""+t.r==""+n.r?(t.c=[t.c,n.c].filter(Boolean).join(" "),t.d=t.d+";"+n.d):a.push(t={...n,n:n.n&&e}):a.push({...n,n:n.n&&e});return a}function Ja(u,e,t=Au.u,a,n){let r=[];for(let i of u)for(let o of function(s,c,l,m,d){s={...s,i:s.i||d};let g=function(p,y){let b=un.get(p.n);return b?b(p,y):y.r(p.n,p.v[0]=="dark")}(s,c);return g?typeof g=="string"?({r:m,p:l}=Za(s,c,l,m),en(Ja(tn(g),c,l,m,s.i),s.n)):Array.isArray(g)?g.map(p=>{var y,b;return{o:0,...p,r:[...Wu(m),...Wu(p.r)],p:(y=l,b=p.p??l,y&~Au.o|b)}}):Go(g,s,c,l,m):[{c:Qa(s),p:0,o:0,r:[]}]}(i,e,t,a,n))r.splice(K3(r,o),0,o);return r}function Yo(u,e,t,a,n,r,i,o){return en((o?t.flatMap(s=>Ja([s],a,n,r,i)):Ja(t,a,n,r,i)).map(s=>s.p&Au.o&&(s.n||e==Au.b)?{...s,p:s.p&~Au.o|e,o:0}:s),u)}function G3(u,e,t,a){var n;return n=(r,i)=>{let{n:o,p:s,r:c,i:l}=Za(r,i,e);return t&&Yo(o,e,t,i,s,c,l,a)},un.set(u,n),u}function Va(u,e,t){if(u[u.length-1]!="("){let a=[],n=!1,r=!1,i="";for(let o of u)if(!(o=="("||/[~@]$/.test(o))){if(o[0]=="!"&&(o=o.slice(1),n=!n),o.endsWith(":")){a[o=="dark:"?"unshift":"push"](o.slice(0,-1));continue}o[0]=="-"&&(o=o.slice(1),r=!r),o.endsWith("-")&&(o=o.slice(0,-1)),o&&o!="&"&&(i+=(i&&"-")+o)}i&&(r&&(i="-"+i),e[0].push({n:i,v:a.filter(J3),i:n}))}}function J3(u,e,t){return t.indexOf(u)==e}var Io=new Map;function tn(u){let e=Io.get(u);if(!e){let t=[],a=[[]],n=0,r=0,i=null,o=0,s=(c,l=0)=>{n!=o&&(t.push(u.slice(n,o+l)),c&&Va(t,a)),n=o+1};for(;o<u.length;o++){let c=u[o];if(r)u[o-1]!="\\"&&(r+=+(c=="[")||-(c=="]"));else if(c=="[")r+=1;else if(i)u[o-1]!="\\"&&i.test(u.slice(o))&&(i=null,n=o+RegExp.lastMatch.length);else if(c=="/"&&u[o-1]!="\\"&&(u[o+1]=="*"||u[o+1]=="/"))i=u[o+1]=="*"?/^\*\//:/^[\r\n]/;else if(c=="(")s(),t.push(c);else if(c==":")u[o+1]!=":"&&s(!1,1);else if(/[\s,)]/.test(c)){s(!0);let l=t.lastIndexOf("(");if(c==")"){let m=t[l-1];if(/[~@]$/.test(m)){let d=a.shift();t.length=l,Va([...t,"#"],a);let{v:g}=a[0].pop();for(let p of d)p.v.splice(+(p.v[0]=="dark")-+(g[0]=="dark"),g.length);Va([...t,G3(m.length>1?m.slice(0,-1)+kt(JSON.stringify([m,d])):m+"("+Uo(d)+")",Au.a,d,/@$/.test(m))],a)}l=t.lastIndexOf("(",l-1)}t.length=l+1}else/[~@]/.test(c)&&u[o+1]=="("&&a.unshift([])}s(!0),Io.set(u,e=a[0])}return e}function Xo(u,e,t){return e.reduce((a,n,r)=>a+t(n)+u[r+1],u[0])}function Qo(u,e){return Array.isArray(u)&&Array.isArray(u.raw)?Xo(u,e,t=>Ka(t).trim()):e.filter(Boolean).reduce((t,a)=>t+Ka(a),u?Ka(u):"")}function Ka(u){let e,t="";if(u&&typeof u=="object")if(Array.isArray(u))(e=Qo(u[0],u.slice(1)))&&(t+=" "+e);else for(let a in u)u[a]&&(t+=" "+a);else u!=null&&typeof u!="boolean"&&(t+=" "+u);return t}var P9=Zo("@"),R9=Zo("~");function Zo(u){return new Proxy(function(t,...a){return e("",t,a)},{get(t,a){return a in t?t[a]:function(n,...r){return e(a,n,r)}}});function e(t,a,n){return Uo(tn(t+u+"("+Qo(a,n)+")"))}}function Ya(u,e){return Array.isArray(u)?Ho(Xo(u,e,t=>t!=null&&typeof t!="boolean"?t:"")):typeof u=="string"?Ho(u):[u]}var Y3=/ *(?:(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}))/g;function Ho(u){let e;u=u.replace(/\/\*[^]*?\*\/|\s\s+|\n/gm," ");let t=[{}],a=[t[0]],n=[];for(;e=Y3.exec(u);)e[4]&&(t.shift(),n.shift()),e[3]?(n.unshift(e[3]),t.unshift({}),a.push(n.reduce((r,i)=>({[i]:r}),t[0]))):e[4]||(t[0][e[1]]&&(t.unshift({}),a.push(n.reduce((r,i)=>({[i]:r}),t[0]))),t[0][e[1]]=e[2]);return a}function ui(u,...e){var t;let a=Ya(u,e),n=(a.find(r=>r.label)?.label||"css")+kt(JSON.stringify(a));return t=(r,i)=>en(a.flatMap(o=>Go(o,r,i,Au.o)),n),un.set(n,t),n}var z9=new Proxy(function(u,e){return $o("animation",u,e)},{get(u,e){return e in u?u[e]:function(t,a){return $o(e,t,a)}}});function $o(u,e,t){return{toString(){return ui({label:u,"@layer components":{...typeof e=="object"?e:{animation:e},animationName:""+t}})}}}function k(u,e,t){return[u,X3(e,t)]}function X3(u,e){return typeof u=="function"?u:typeof u=="string"&&/^[\w-]+$/.test(u)?(t,a)=>({[u]:e?e(t,a):Xa(t,1)}):t=>u||{[t[1]]:Xa(t,2)}}function Xa(u,e,t=u.slice(e).find(Boolean)||u.$$||u.input){return u.input[0]=="-"?`calc(${t} * -1)`:t}function A(u,e,t,a){return[u,Q3(e,t,a)]}function Q3(u,e,t){let a=typeof e=="string"?(n,r)=>({[e]:t?t(n,r):n._}):e||(({1:n,_:r},i,o)=>({[n||o]:r}));return(n,r)=>{let i=ei(u||n[1]),o=r.theme(i,n.$$)??z0(n.$$,i,r);if(o!=null)return n._=Xa(n,0,o),a(n,r,i)}}function bu(u,e={},t){return[u,Z3(e,t)]}function Z3(u={},e){return(t,a)=>{let{section:n=ei(t[0]).replace("-","")+"Color"}=u,[r,i]=uc(t.$$);if(!r)return;let o=a.theme(n,r)||z0(r,n,a);if(!o||typeof o=="object")return;let{opacityVariable:s=`--tw-${t[0].replace(/-$/,"")}-opacity`,opacitySection:c=n.replace("Color","Opacity"),property:l=n,selector:m}=u,d=a.theme(c,i||"DEFAULT")||i&&z0(i,c,a),g=e||(({_:y})=>{let b=j0(l,y);return m?{[m]:b}:b});t._={value:ye(o,{opacityVariable:s||void 0,opacityValue:d||void 0}),color:y=>ye(o,y),opacityVariable:s||void 0,opacityValue:d||void 0};let p=g(t,a);if(!t.dark){let y=a.d(n,r,o);y&&y!==o&&(t._={value:ye(y,{opacityVariable:s||void 0,opacityValue:d||"1"}),color:b=>ye(y,b),opacityVariable:s||void 0,opacityValue:d||void 0},p={"&":p,[a.v("dark")]:g(t,a)})}return p}}function uc(u){return(u.match(/^(\[[^\]]+]|[^/]+?)(?:\/(.+))?$/)||[]).slice(1)}function j0(u,e){let t={};return typeof e=="string"?t[u]=e:(e.opacityVariable&&e.value.includes(e.opacityVariable)&&(t[e.opacityVariable]=e.opacityValue||"1"),t[u]=e.value),t}function z0(u,e,t){if(u[0]=="["&&u.slice(-1)=="]"){if(u=Ct(Jo(u.slice(1,-1),t.theme)),!e)return u;if(!(/color|fill|stroke/i.test(e)&&!(/^color:/.test(u)||/^(#|((hsl|rgb)a?|hwb|lab|lch|color)\(|[a-z]+$)/.test(u))||/image/i.test(e)&&!(/^image:/.test(u)||/^[a-z-]+\(/.test(u))||/weight/i.test(e)&&!(/^(number|any):/.test(u)||/^\d+$/.test(u))||/position/i.test(e)&&/^(length|size):/.test(u)))return u.replace(/^[a-z-]+:/,"")}}function ei(u){return u.replace(/-./g,e=>e[1].toUpperCase())}function Ct(u){return u.includes("url(")?u.replace(/(.*?)(url\(.*?\))(.*?)/g,(e,t="",a,n="")=>Ct(t)+a+Ct(n)):u.replace(/(^|[^\\])_+/g,(e,t)=>t+" ".repeat(e.length-t.length)).replace(/\\_/g,"_").replace(/(calc|min|max|clamp)\(.+\)/g,e=>e.replace(/(-?\d*\.?\d(?!\b-.+[,)](?![^+\-/*])\D)(?:%|[a-z]+)?|\))([+\-/*])/g,"$1 $2 "))}var j9=Symbol();var ec=new Proxy(W3,{apply(u,e,t){return $a(t[0])},get(u,e){let t=$a[e];return typeof t=="function"?function(){return t.apply($a,arguments)}:t}});var N9=function u(e){return new Proxy(function(t,...a){return qo(e,"",t,a)},{get(t,a){return a==="bind"?u:a in t?t[a]:function(n,...r){return qo(e,a,n,r)}}})}();function qo(u,e,t,a){return{toString(){let n=Ya(t,a),r=Wo(e+kt(JSON.stringify([e,n])));return(typeof u=="function"?u:ec)(ui({[`@keyframes ${r}`]:Ya(t,a)})),r}}}var tc=[k("\\[([-\\w]+):(.+)]",({1:u,2:e},t)=>({"@layer overrides":{"&":{[u]:z0(`[${e}]`,u,t)}}})),k("(group|peer)(~[^-[]+)?",({input:u},{h:e})=>[{c:e(u)}]),A("aspect-","aspectRatio"),k("container",(u,{theme:e})=>{let{screens:t=e("screens"),center:a,padding:n}=e("container"),r={width:"100%",marginRight:a&&"auto",marginLeft:a&&"auto",...i("xs")};for(let o in t){let s=t[o];typeof s=="string"&&(r[At(s)]={"&":{maxWidth:s,...i(o)}})}return r;function i(o){let s=n&&(typeof n=="string"?n:n[o]||n.DEFAULT);if(s)return{paddingRight:s,paddingLeft:s}}}),A("content-","content",({_:u})=>({"--tw-content":u,content:"var(--tw-content)"})),k("(?:box-)?decoration-(slice|clone)","boxDecorationBreak"),k("box-(border|content)","boxSizing",({1:u})=>u+"-box"),k("hidden",{display:"none"}),k("table-(auto|fixed)","tableLayout"),k(["(block|flex|table|grid|inline|contents|flow-root|list-item)","(inline-(block|flex|table|grid))","(table-(caption|cell|column|row|(column|row|footer|header)-group))"],"display"),"(float)-(left|right|none)","(clear)-(left|right|none|both)","(overflow(?:-[xy])?)-(auto|hidden|clip|visible|scroll)","(isolation)-(auto)",k("isolate","isolation"),k("object-(contain|cover|fill|none|scale-down)","objectFit"),A("object-","objectPosition"),k("object-(top|bottom|center|(left|right)(-(top|bottom))?)","objectPosition",wt),k("overscroll(-[xy])?-(auto|contain|none)",({1:u="",2:e})=>({["overscroll-behavior"+u]:e})),k("(static|fixed|absolute|relative|sticky)","position"),A("-?inset(-[xy])?(?:$|-)","inset",({1:u,_:e})=>({top:u!="-x"&&e,right:u!="-y"&&e,bottom:u!="-x"&&e,left:u!="-y"&&e})),A("-?(top|bottom|left|right)(?:$|-)","inset"),k("visible","visibility"),k("invisible",{visibility:"hidden"}),A("-?z-","zIndex"),k("flex-((row|col)(-reverse)?)","flexDirection",ti),k("flex-(wrap|wrap-reverse|nowrap)","flexWrap"),A("(flex-(?:grow|shrink))(?:$|-)"),A("(flex)-"),A("grow(?:$|-)","flexGrow"),A("shrink(?:$|-)","flexShrink"),A("basis-","flexBasis"),A("-?(order)-"),"-?(order)-(\\d+)",A("grid-cols-","gridTemplateColumns"),k("grid-cols-(\\d+)","gridTemplateColumns",oi),A("col-","gridColumn"),k("col-(span)-(\\d+)","gridColumn",ri),A("col-start-","gridColumnStart"),k("col-start-(auto|\\d+)","gridColumnStart"),A("col-end-","gridColumnEnd"),k("col-end-(auto|\\d+)","gridColumnEnd"),A("grid-rows-","gridTemplateRows"),k("grid-rows-(\\d+)","gridTemplateRows",oi),A("row-","gridRow"),k("row-(span)-(\\d+)","gridRow",ri),A("row-start-","gridRowStart"),k("row-start-(auto|\\d+)","gridRowStart"),A("row-end-","gridRowEnd"),k("row-end-(auto|\\d+)","gridRowEnd"),k("grid-flow-((row|col)(-dense)?)","gridAutoFlow",u=>wt(ti(u))),k("grid-flow-(dense)","gridAutoFlow"),A("auto-cols-","gridAutoColumns"),A("auto-rows-","gridAutoRows"),A("gap-x(?:$|-)","gap","columnGap"),A("gap-y(?:$|-)","gap","rowGap"),A("gap(?:$|-)","gap"),"(justify-(?:items|self))-",k("justify-","justifyContent",ai),k("(content|items|self)-",u=>({["align-"+u[1]]:ai(u)})),k("(place-(content|items|self))-",({1:u,$$:e})=>({[u]:("wun".includes(e[3])?"space-":"")+e})),A("p([xytrbl])?(?:$|-)","padding",a0("padding")),A("-?m([xytrbl])?(?:$|-)","margin",a0("margin")),A("-?space-(x|y)(?:$|-)","space",({1:u,_:e})=>({"&>:not([hidden])~:not([hidden])":{[`--tw-space-${u}-reverse`]:"0",["margin-"+{y:"top",x:"left"}[u]]:`calc(${e} * calc(1 - var(--tw-space-${u}-reverse)))`,["margin-"+{y:"bottom",x:"right"}[u]]:`calc(${e} * var(--tw-space-${u}-reverse))`}})),k("space-(x|y)-reverse",({1:u})=>({"&>:not([hidden])~:not([hidden])":{[`--tw-space-${u}-reverse`]:"1"}})),A("w-","width"),A("min-w-","minWidth"),A("max-w-","maxWidth"),A("h-","height"),A("min-h-","minHeight"),A("max-h-","maxHeight"),A("font-","fontWeight"),A("font-","fontFamily","fontFamily",re),k("antialiased",{WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale"}),k("subpixel-antialiased",{WebkitFontSmoothing:"auto",MozOsxFontSmoothing:"auto"}),k("italic","fontStyle"),k("not-italic",{fontStyle:"normal"}),k("(ordinal|slashed-zero|(normal|lining|oldstyle|proportional|tabular)-nums|(diagonal|stacked)-fractions)",({1:u,2:e="",3:t})=>e=="normal"?{fontVariantNumeric:"normal"}:{["--tw-"+(t?"numeric-fraction":"pt".includes(e[0])?"numeric-spacing":e?"numeric-figure":u)]:u,fontVariantNumeric:"var(--tw-ordinal) var(--tw-slashed-zero) var(--tw-numeric-figure) var(--tw-numeric-spacing) var(--tw-numeric-fraction)","@layer defaults":{"*,::before,::after,::backdrop":{"--tw-ordinal":"var(--tw-empty,/*!*/ /*!*/)","--tw-slashed-zero":"var(--tw-empty,/*!*/ /*!*/)","--tw-numeric-figure":"var(--tw-empty,/*!*/ /*!*/)","--tw-numeric-spacing":"var(--tw-empty,/*!*/ /*!*/)","--tw-numeric-fraction":"var(--tw-empty,/*!*/ /*!*/)"}}}),A("tracking-","letterSpacing"),A("leading-","lineHeight"),k("list-(inside|outside)","listStylePosition"),A("list-","listStyleType"),k("list-","listStyleType"),A("placeholder-opacity-","placeholderOpacity",({_:u})=>({"&::placeholder":{"--tw-placeholder-opacity":u}})),bu("placeholder-",{property:"color",selector:"&::placeholder"}),k("text-(left|center|right|justify|start|end)","textAlign"),k("text-(ellipsis|clip)","textOverflow"),A("text-opacity-","textOpacity","--tw-text-opacity"),bu("text-",{property:"color"}),A("text-","fontSize",({_:u})=>typeof u=="string"?{fontSize:u}:{fontSize:u[0],...typeof u[1]=="string"?{lineHeight:u[1]}:u[1]}),A("indent-","textIndent"),k("(overline|underline|line-through)","textDecorationLine"),k("no-underline",{textDecorationLine:"none"}),A("underline-offset-","textUnderlineOffset"),bu("decoration-",{section:"textDecorationColor",opacityVariable:!1,opacitySection:"opacity"}),A("decoration-","textDecorationThickness"),k("decoration-","textDecorationStyle"),k("(uppercase|lowercase|capitalize)","textTransform"),k("normal-case",{textTransform:"none"}),k("truncate",{overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"}),k("align-","verticalAlign"),k("whitespace-","whiteSpace"),k("break-normal",{wordBreak:"normal",overflowWrap:"normal"}),k("break-words",{overflowWrap:"break-word"}),k("break-all",{wordBreak:"break-all"}),bu("caret-",{opacityVariable:!1,opacitySection:"opacity"}),bu("accent-",{opacityVariable:!1,opacitySection:"opacity"}),k("bg-gradient-to-([trbl]|[tb][rl])","backgroundImage",({1:u})=>`linear-gradient(to ${Ne(u," ")},var(--tw-gradient-stops))`),bu("from-",{section:"gradientColorStops",opacityVariable:!1,opacitySection:"opacity"},({_:u})=>({"--tw-gradient-from":u.value,"--tw-gradient-to":u.color({opacityValue:"0"}),"--tw-gradient-stops":"var(--tw-gradient-from),var(--tw-gradient-to)"})),bu("via-",{section:"gradientColorStops",opacityVariable:!1,opacitySection:"opacity"},({_:u})=>({"--tw-gradient-to":u.color({opacityValue:"0"}),"--tw-gradient-stops":`var(--tw-gradient-from),${u.value},var(--tw-gradient-to)`})),bu("to-",{section:"gradientColorStops",property:"--tw-gradient-to",opacityVariable:!1,opacitySection:"opacity"}),k("bg-(fixed|local|scroll)","backgroundAttachment"),k("bg-origin-(border|padding|content)","backgroundOrigin",({1:u})=>u+"-box"),k(["bg-(no-repeat|repeat(-[xy])?)","bg-repeat-(round|space)"],"backgroundRepeat"),k("bg-blend-","backgroundBlendMode"),k("bg-clip-(border|padding|content|text)","backgroundClip",({1:u})=>u+(u=="text"?"":"-box")),A("bg-opacity-","backgroundOpacity","--tw-bg-opacity"),bu("bg-",{section:"backgroundColor"}),A("bg-","backgroundImage"),A("bg-","backgroundPosition"),k("bg-(top|bottom|center|(left|right)(-(top|bottom))?)","backgroundPosition",wt),A("bg-","backgroundSize"),A("rounded(?:$|-)","borderRadius"),A("rounded-([trbl]|[tb][rl])(?:$|-)","borderRadius",({1:u,_:e})=>{let t={t:["tl","tr"],r:["tr","br"],b:["bl","br"],l:["bl","tl"]}[u]||[u,u];return{[`border-${Ne(t[0])}-radius`]:e,[`border-${Ne(t[1])}-radius`]:e}}),k("border-(collapse|separate)","borderCollapse"),A("border-opacity(?:$|-)","borderOpacity","--tw-border-opacity"),k("border-(solid|dashed|dotted|double|none)","borderStyle"),A("border-spacing(-[xy])?(?:$|-)","borderSpacing",({1:u,_:e})=>({"@layer defaults":{"*,::before,::after,::backdrop":{"--tw-border-spacing-x":0,"--tw-border-spacing-y":0}},["--tw-border-spacing"+(u||"-x")]:e,["--tw-border-spacing"+(u||"-y")]:e,"border-spacing":"var(--tw-border-spacing-x) var(--tw-border-spacing-y)"})),bu("border-([xytrbl])-",{section:"borderColor"},a0("border","Color")),bu("border-"),A("border-([xytrbl])(?:$|-)","borderWidth",a0("border","Width")),A("border(?:$|-)","borderWidth"),A("divide-opacity(?:$|-)","divideOpacity",({_:u})=>({"&>:not([hidden])~:not([hidden])":{"--tw-divide-opacity":u}})),k("divide-(solid|dashed|dotted|double|none)",({1:u})=>({"&>:not([hidden])~:not([hidden])":{borderStyle:u}})),k("divide-([xy]-reverse)",({1:u})=>({"&>:not([hidden])~:not([hidden])":{["--tw-divide-"+u]:"1"}})),A("divide-([xy])(?:$|-)","divideWidth",({1:u,_:e})=>{let t={x:"lr",y:"tb"}[u];return{"&>:not([hidden])~:not([hidden])":{[`--tw-divide-${u}-reverse`]:"0",[`border-${Ne(t[0])}Width`]:`calc(${e} * calc(1 - var(--tw-divide-${u}-reverse)))`,[`border-${Ne(t[1])}Width`]:`calc(${e} * var(--tw-divide-${u}-reverse))`}}}),bu("divide-",{property:"borderColor",selector:"&>:not([hidden])~:not([hidden])"}),A("ring-opacity(?:$|-)","ringOpacity","--tw-ring-opacity"),bu("ring-offset-",{property:"--tw-ring-offset-color",opacityVariable:!1}),A("ring-offset(?:$|-)","ringOffsetWidth","--tw-ring-offset-width"),k("ring-inset",{"--tw-ring-inset":"inset"}),bu("ring-",{property:"--tw-ring-color"}),A("ring(?:$|-)","ringWidth",({_:u},{theme:e})=>({"--tw-ring-offset-shadow":"var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)","--tw-ring-shadow":`var(--tw-ring-inset) 0 0 0 calc(${u} + var(--tw-ring-offset-width)) var(--tw-ring-color)`,boxShadow:"var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)","@layer defaults":{"*,::before,::after,::backdrop":{"--tw-ring-offset-shadow":"0 0 #0000","--tw-ring-shadow":"0 0 #0000","--tw-shadow":"0 0 #0000","--tw-shadow-colored":"0 0 #0000","&":{"--tw-ring-inset":"var(--tw-empty,/*!*/ /*!*/)","--tw-ring-offset-width":e("ringOffsetWidth","","0px"),"--tw-ring-offset-color":ye(e("ringOffsetColor","","#fff")),"--tw-ring-color":ye(e("ringColor","","#93c5fd"),{opacityVariable:"--tw-ring-opacity"}),"--tw-ring-opacity":e("ringOpacity","","0.5")}}}})),bu("shadow-",{section:"boxShadowColor",opacityVariable:!1,opacitySection:"opacity"},({_:u})=>({"--tw-shadow-color":u.value,"--tw-shadow":"var(--tw-shadow-colored)"})),A("shadow(?:$|-)","boxShadow",({_:u})=>({"--tw-shadow":re(u),"--tw-shadow-colored":re(u).replace(/([^,]\s+)(?:#[a-f\d]+|(?:(?:hsl|rgb)a?|hwb|lab|lch|color|var)\(.+?\)|[a-z]+)(,|$)/g,"$1var(--tw-shadow-color)$2"),boxShadow:"var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)","@layer defaults":{"*,::before,::after,::backdrop":{"--tw-ring-offset-shadow":"0 0 #0000","--tw-ring-shadow":"0 0 #0000","--tw-shadow":"0 0 #0000","--tw-shadow-colored":"0 0 #0000"}}})),A("(opacity)-"),k("mix-blend-","mixBlendMode"),...ni(),...ni("backdrop-"),A("transition(?:$|-)","transitionProperty",(u,{theme:e})=>({transitionProperty:re(u),transitionTimingFunction:u._=="none"?void 0:re(e("transitionTimingFunction","")),transitionDuration:u._=="none"?void 0:re(e("transitionDuration",""))})),A("duration(?:$|-)","transitionDuration","transitionDuration",re),A("ease(?:$|-)","transitionTimingFunction","transitionTimingFunction",re),A("delay(?:$|-)","transitionDelay","transitionDelay",re),A("animate(?:$|-)","animation",(u,{theme:e,h:t})=>{let a=re(u),n=a.split(" "),r=e("keyframes",n[0]);return r?{["@keyframes "+(n[0]=t(n[0]))]:r,animation:n.join(" ")}:{animation:a}}),"(transform)-(none)",k("transform",nn),k("transform-(cpu|gpu)",({1:u})=>({"--tw-transform":ii(u=="gpu")})),A("scale(-[xy])?-","scale",({1:u,_:e})=>({["--tw-scale"+(u||"-x")]:e,["--tw-scale"+(u||"-y")]:e,...nn()})),A("-?(rotate)-","rotate",an),A("-?(translate-[xy])-","translate",an),A("-?(skew-[xy])-","skew",an),k("origin-(center|((top|bottom)(-(left|right))?)|left|right)","transformOrigin",wt),"(appearance)-",A("(columns)-"),"(columns)-(\\d+)","(break-(?:before|after|inside))-",A("(cursor)-"),"(cursor)-",k("snap-(none)","scroll-snap-type"),k("snap-(x|y|both)",({1:u})=>({"scroll-snap-type":u+" var(--tw-scroll-snap-strictness)","@layer defaults":{"*,::before,::after,::backdrop":{"--tw-scroll-snap-strictness":"proximity"}}})),k("snap-(mandatory|proximity)","--tw-scroll-snap-strictness"),k("snap-(?:(start|end|center)|align-(none))","scroll-snap-align"),k("snap-(normal|always)","scroll-snap-stop"),k("scroll-(auto|smooth)","scroll-behavior"),A("scroll-p([xytrbl])?(?:$|-)","padding",a0("scroll-padding")),A("-?scroll-m([xytrbl])?(?:$|-)","scroll-margin",a0("scroll-margin")),k("touch-(auto|none|manipulation)","touch-action"),k("touch-(pinch-zoom|pan-(?:(x|left|right)|(y|up|down)))",({1:u,2:e,3:t})=>({[`--tw-${e?"pan-x":t?"pan-y":u}`]:u,"touch-action":"var(--tw-touch-action)","@layer defaults":{"*,::before,::after,::backdrop":{"--tw-pan-x":"var(--tw-empty,/*!*/ /*!*/)","--tw-pan-y":"var(--tw-empty,/*!*/ /*!*/)","--tw-pinch-zoom":"var(--tw-empty,/*!*/ /*!*/)","--tw-touch-action":"var(--tw-pan-x) var(--tw-pan-y) var(--tw-pinch-zoom)"}}})),k("outline-none",{outline:"2px solid transparent","outline-offset":"2px"}),k("outline",{outlineStyle:"solid"}),k("outline-(dashed|dotted|double|hidden)","outlineStyle"),A("(outline-offset)-"),bu("outline-",{opacityVariable:!1,opacitySection:"opacity"}),A("outline-","outlineWidth"),"(pointer-events)-",A("(will-change)-"),"(will-change)-",["resize(?:-(none|x|y))?","resize",({1:u})=>({x:"horizontal",y:"vertical"})[u]||u||"both"],k("select-(none|text|all|auto)","userSelect"),bu("fill-",{section:"fill",opacityVariable:!1,opacitySection:"opacity"}),bu("stroke-",{section:"stroke",opacityVariable:!1,opacitySection:"opacity"}),A("stroke-","strokeWidth"),k("sr-only",{position:"absolute",width:"1px",height:"1px",padding:"0",margin:"-1px",overflow:"hidden",whiteSpace:"nowrap",clip:"rect(0,0,0,0)",borderWidth:"0"}),k("not-sr-only",{position:"static",width:"auto",height:"auto",padding:"0",margin:"0",overflow:"visible",whiteSpace:"normal",clip:"auto"})];function wt(u){return(typeof u=="string"?u:u[1]).replace(/-/g," ").trim()}function ti(u){return(typeof u=="string"?u:u[1]).replace("col","column")}function Ne(u,e="-"){let t=[];for(let a of u)t.push({t:"top",r:"right",b:"bottom",l:"left"}[a]);return t.join(e)}function re(u){return u&&""+(u._||u)}function ai({$$:u}){return({r:"flex-","":"flex-",w:"space-",u:"space-",n:"space-"}[u[3]||""]||"")+u}function a0(u,e=""){return({1:t,_:a})=>{let n={x:"lr",y:"tb"}[t]||t+t;return n?{...j0(u+"-"+Ne(n[0])+e,a),...j0(u+"-"+Ne(n[1])+e,a)}:j0(u+e,a)}}function ni(u=""){let e=["blur","brightness","contrast","grayscale","hue-rotate","invert",u&&"opacity","saturate","sepia",!u&&"drop-shadow"].filter(Boolean),t={};for(let a of e)t[`--tw-${u}${a}`]="var(--tw-empty,/*!*/ /*!*/)";return t={[`${u}filter`]:e.map(a=>`var(--tw-${u}${a})`).join(" "),"@layer defaults":{"*,::before,::after,::backdrop":t}},[`(${u}filter)-(none)`,k(`${u}filter`,t),...e.map(a=>A(`${a[0]=="h"?"-?":""}(${u}${a})(?:$|-)`,a,({1:n,_:r})=>({[`--tw-${n}`]:Wu(r).map(i=>`${a}(${i})`).join(" "),...t})))]}function an({1:u,_:e}){return{["--tw-"+u]:e,...nn()}}function nn(){return{transform:"var(--tw-transform)","@layer defaults":{"*,::before,::after,::backdrop":{"--tw-translate-x":"0","--tw-translate-y":"0","--tw-rotate":"0","--tw-skew-x":"0","--tw-skew-y":"0","--tw-scale-x":"1","--tw-scale-y":"1","--tw-transform":ii()}}}}function ii(u){return[u?"translate3d(var(--tw-translate-x),var(--tw-translate-y),0)":"translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y))","rotate(var(--tw-rotate))","skewX(var(--tw-skew-x))","skewY(var(--tw-skew-y))","scaleX(var(--tw-scale-x))","scaleY(var(--tw-scale-y))"].join(" ")}function ri({1:u,2:e}){return`${u} ${e} / ${u} ${e}`}function oi({1:u}){return`repeat(${u},minmax(0,1fr))`}var nc=Object.create,li=Object.defineProperty,rc=Object.getOwnPropertyDescriptor,oc=Object.getOwnPropertyNames,ic=Object.getPrototypeOf,sc=Object.prototype.hasOwnProperty,lc=(u,e)=>()=>(e||u((e={exports:{}}).exports,e),e.exports),cc=(u,e,t,a)=>{if(e&&typeof e=="object"||typeof e=="function")for(let n of oc(e))!sc.call(u,n)&&n!==t&&li(u,n,{get:()=>e[n],enumerable:!(a=rc(e,n))||a.enumerable});return u},gc=(u,e,t)=>(t=u!=null?nc(ic(u)):{},cc(e||!u||!u.__esModule?li(t,"default",{value:u,enumerable:!0}):t,u)),dc=lc((u,e)=>{(function(t,a){typeof u=="object"&&typeof e=="object"?e.exports=a():typeof define=="function"&&define.amd?define([],a):typeof u=="object"?u.notie=a():t.notie=a()})(u,function(){return function(t){function a(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,a),i.l=!0,i.exports}var n={};return a.m=t,a.c=n,a.i=function(r){return r},a.d=function(r,i,o){a.o(r,i)||Object.defineProperty(r,i,{configurable:!1,enumerable:!0,get:o})},a.n=function(r){var i=r&&r.__esModule?function(){return r.default}:function(){return r};return a.d(i,"a",i),i},a.o=function(r,i){return Object.prototype.hasOwnProperty.call(r,i)},a.p="",a(a.s=1)}([function(t,a){t.exports=function(n){return n.webpackPolyfill||(n.deprecate=function(){},n.paths=[],n.children||(n.children=[]),Object.defineProperty(n,"loaded",{enumerable:!0,get:function(){return n.l}}),Object.defineProperty(n,"id",{enumerable:!0,get:function(){return n.i}}),n.webpackPolyfill=1),n}},function(t,a,n){"use strict";(function(r){var i,o,s,c=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(l){return typeof l}:function(l){return l&&typeof Symbol=="function"&&l.constructor===Symbol&&l!==Symbol.prototype?"symbol":typeof l};(function(l,m){c(a)==="object"&&c(r)==="object"?r.exports=m():(o=[],i=m,s=typeof i=="function"?i.apply(a,o):i,s!==void 0&&(r.exports=s))})(void 0,function(){return function(l){function m(g){if(d[g])return d[g].exports;var p=d[g]={i:g,l:!1,exports:{}};return l[g].call(p.exports,p,p.exports,m),p.l=!0,p.exports}var d={};return m.m=l,m.c=d,m.i=function(g){return g},m.d=function(g,p,y){m.o(g,p)||Object.defineProperty(g,p,{configurable:!1,enumerable:!0,get:y})},m.n=function(g){var p=g&&g.__esModule?function(){return g.default}:function(){return g};return m.d(p,"a",p),p},m.o=function(g,p){return Object.prototype.hasOwnProperty.call(g,p)},m.p="",m(m.s=0)}([function(l,m,d){function g(D,I){var C={};for(var S in D)I.indexOf(S)>=0||Object.prototype.hasOwnProperty.call(D,S)&&(C[S]=D[S]);return C}Object.defineProperty(m,"__esModule",{value:!0});var p=typeof Symbol=="function"&&c(Symbol.iterator)==="symbol"?function(D){return typeof D>"u"?"undefined":c(D)}:function(D){return D&&typeof Symbol=="function"&&D.constructor===Symbol&&D!==Symbol.prototype?"symbol":typeof D>"u"?"undefined":c(D)},y=Object.assign||function(D){for(var I=1;I<arguments.length;I++){var C=arguments[I];for(var S in C)Object.prototype.hasOwnProperty.call(C,S)&&(D[S]=C[S])}return D},b={top:"top",bottom:"bottom"},f={alertTime:3,dateMonths:["January","February","March","April","May","June","July","August","September","October","November","December"],overlayClickDismiss:!0,overlayOpacity:.75,transitionCurve:"ease",transitionDuration:.3,transitionSelector:"all",classes:{container:"notie-container",textbox:"notie-textbox",textboxInner:"notie-textbox-inner",button:"notie-button",element:"notie-element",elementHalf:"notie-element-half",elementThird:"notie-element-third",overlay:"notie-overlay",backgroundSuccess:"notie-background-success",backgroundWarning:"notie-background-warning",backgroundError:"notie-background-error",backgroundInfo:"notie-background-info",backgroundNeutral:"notie-background-neutral",backgroundOverlay:"notie-background-overlay",alert:"notie-alert",inputField:"notie-input-field",selectChoiceRepeated:"notie-select-choice-repeated",dateSelectorInner:"notie-date-selector-inner",dateSelectorUp:"notie-date-selector-up"},ids:{overlay:"notie-overlay"},positions:{alert:b.top,force:b.top,confirm:b.top,input:b.top,select:b.bottom,date:b.top}},E=m.setOptions=function(D){f=y({},f,D,{classes:y({},f.classes,D.classes),ids:y({},f.ids,D.ids),positions:y({},f.positions,D.positions)})},x=function(){return new Promise(function(D){return setTimeout(D,0)})},w=function(D){return new Promise(function(I){return setTimeout(I,1e3*D)})},B=function(){document.activeElement&&document.activeElement.blur()},T=function(){var D="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(I){var C=16*Math.random()|0,S=I==="x"?C:3&C|8;return S.toString(16)});return"notie-"+D},G={1:f.classes.backgroundSuccess,success:f.classes.backgroundSuccess,2:f.classes.backgroundWarning,warning:f.classes.backgroundWarning,3:f.classes.backgroundError,error:f.classes.backgroundError,4:f.classes.backgroundInfo,info:f.classes.backgroundInfo,5:f.classes.backgroundNeutral,neutral:f.classes.backgroundNeutral},hu=function(){return f.transitionSelector+" "+f.transitionDuration+"s "+f.transitionCurve},L=function(D){return D.keyCode===13},J=function(D){return D.keyCode===27},nu=function(D,I){D.classList.add(f.classes.container),D.style[I]="-10000px",document.body.appendChild(D),D.style[I]="-"+D.offsetHeight+"px",D.listener&&window.addEventListener("keydown",D.listener),x().then(function(){D.style.transition=hu(),D.style[I]=0})},U=function(D,I){var C=document.getElementById(D);C&&(C.style[I]="-"+C.offsetHeight+"px",C.listener&&window.removeEventListener("keydown",C.listener),w(f.transitionDuration).then(function(){C.parentNode&&C.parentNode.removeChild(C)}))},W=function(D,I){var C=document.createElement("div");C.id=f.ids.overlay,C.classList.add(f.classes.overlay),C.classList.add(f.classes.backgroundOverlay),C.style.opacity=0,D&&f.overlayClickDismiss&&(C.onclick=function(){U(D.id,I),O()}),document.body.appendChild(C),x().then(function(){C.style.transition=hu(),C.style.opacity=f.overlayOpacity})},O=function(){var D=document.getElementById(f.ids.overlay);D.style.opacity=0,w(f.transitionDuration).then(function(){D.parentNode&&D.parentNode.removeChild(D)})},su=m.hideAlerts=function(D){var I=document.getElementsByClassName(f.classes.alert);if(I.length){for(var C=0;C<I.length;C++){var S=I[C];U(S.id,S.position)}D&&w(f.transitionDuration).then(function(){return D()})}},ie=m.alert=function(D){var I=D.type,C=I===void 0?4:I,S=D.text,F=D.time,H=F===void 0?f.alertTime:F,$=D.stay,lu=$!==void 0&&$,au=D.position,q=au===void 0?f.positions.alert||q.top:au;B(),su();var eu=document.createElement("div"),ru=T();eu.id=ru,eu.position=q,eu.classList.add(f.classes.textbox),eu.classList.add(G[C]),eu.classList.add(f.classes.alert),eu.innerHTML='<div class="'+f.classes.textboxInner+'">'+S+"</div>",eu.onclick=function(){return U(ru,q)},eu.listener=function(P){(L(P)||J(P))&&su()},nu(eu,q),H&&H<1&&(H=1),!lu&&H&&w(H).then(function(){return U(ru,q)})},fe=m.force=function(D,I){var C=D.type,S=C===void 0?5:C,F=D.text,H=D.buttonText,$=H===void 0?"OK":H,lu=D.callback,au=D.position,q=au===void 0?f.positions.force||q.top:au;B(),su();var eu=document.createElement("div"),ru=T();eu.id=ru;var P=document.createElement("div");P.classList.add(f.classes.textbox),P.classList.add(f.classes.backgroundInfo),P.innerHTML='<div class="'+f.classes.textboxInner+'">'+F+"</div>";var Q=document.createElement("div");Q.classList.add(f.classes.button),Q.classList.add(G[S]),Q.innerHTML=$,Q.onclick=function(){U(ru,q),O(),lu?lu():I&&I()},eu.appendChild(P),eu.appendChild(Q),eu.listener=function(yu){L(yu)&&Q.click()},nu(eu,q),W()},se=m.confirm=function(D,I,C){var S=D.text,F=D.submitText,H=F===void 0?"Yes":F,$=D.cancelText,lu=$===void 0?"Cancel":$,au=D.submitCallback,q=D.cancelCallback,eu=D.position,ru=eu===void 0?f.positions.confirm||ru.top:eu;B(),su();var P=document.createElement("div"),Q=T();P.id=Q;var yu=document.createElement("div");yu.classList.add(f.classes.textbox),yu.classList.add(f.classes.backgroundInfo),yu.innerHTML='<div class="'+f.classes.textboxInner+'">'+S+"</div>";var ou=document.createElement("div");ou.classList.add(f.classes.button),ou.classList.add(f.classes.elementHalf),ou.classList.add(f.classes.backgroundSuccess),ou.innerHTML=H,ou.onclick=function(){U(Q,ru),O(),au?au():I&&I()};var j=document.createElement("div");j.classList.add(f.classes.button),j.classList.add(f.classes.elementHalf),j.classList.add(f.classes.backgroundError),j.innerHTML=lu,j.onclick=function(){U(Q,ru),O(),q?q():C&&C()},P.appendChild(yu),P.appendChild(ou),P.appendChild(j),P.listener=function(Cu){L(Cu)?ou.click():J(Cu)&&j.click()},nu(P,ru),W(P,ru)},fu=function(D,I,C){var S=D.text,F=D.submitText,H=F===void 0?"Submit":F,$=D.cancelText,lu=$===void 0?"Cancel":$,au=D.submitCallback,q=D.cancelCallback,eu=D.position,ru=eu===void 0?f.positions.input||ru.top:eu,P=g(D,["text","submitText","cancelText","submitCallback","cancelCallback","position"]);B(),su();var Q=document.createElement("div"),yu=T();Q.id=yu;var ou=document.createElement("div");ou.classList.add(f.classes.textbox),ou.classList.add(f.classes.backgroundInfo),ou.innerHTML='<div class="'+f.classes.textboxInner+'">'+S+"</div>";var j=document.createElement("input");j.classList.add(f.classes.inputField),j.setAttribute("autocapitalize",P.autocapitalize||"none"),j.setAttribute("autocomplete",P.autocomplete||"off"),j.setAttribute("autocorrect",P.autocorrect||"off"),j.setAttribute("autofocus",P.autofocus||"true"),j.setAttribute("inputmode",P.inputmode||"verbatim"),j.setAttribute("max",P.max||""),j.setAttribute("maxlength",P.maxlength||""),j.setAttribute("min",P.min||""),j.setAttribute("minlength",P.minlength||""),j.setAttribute("placeholder",P.placeholder||""),j.setAttribute("spellcheck",P.spellcheck||"default"),j.setAttribute("step",P.step||"any"),j.setAttribute("type",P.type||"text"),j.value=P.value||"",P.allowed&&(j.oninput=function(){var Tu=void 0;if(Array.isArray(P.allowed)){for(var Pu="",pe=P.allowed,le=0;le<pe.length;le++)pe[le]==="an"?Pu+="0-9a-zA-Z":pe[le]==="a"?Pu+="a-zA-Z":pe[le]==="n"&&(Pu+="0-9"),pe[le]==="s"&&(Pu+=" ");Tu=new RegExp("[^"+Pu+"]","g")}else p(P.allowed)==="object"&&(Tu=P.allowed);j.value=j.value.replace(Tu,"")});var Cu=document.createElement("div");Cu.classList.add(f.classes.button),Cu.classList.add(f.classes.elementHalf),Cu.classList.add(f.classes.backgroundSuccess),Cu.innerHTML=H,Cu.onclick=function(){U(yu,ru),O(),au?au(j.value):I&&I(j.value)};var Ku=document.createElement("div");Ku.classList.add(f.classes.button),Ku.classList.add(f.classes.elementHalf),Ku.classList.add(f.classes.backgroundError),Ku.innerHTML=lu,Ku.onclick=function(){U(yu,ru),O(),q?q(j.value):C&&C(j.value)},Q.appendChild(ou),Q.appendChild(j),Q.appendChild(Cu),Q.appendChild(Ku),Q.listener=function(Tu){L(Tu)?Cu.click():J(Tu)&&Ku.click()},nu(Q,ru),j.focus(),W(Q,ru)};m.input=fu;var wu=m.select=function(D,I){var C=D.text,S=D.cancelText,F=S===void 0?"Cancel":S,H=D.cancelCallback,$=D.choices,lu=D.position,au=lu===void 0?f.positions.select||au.top:lu;B(),su();var q=document.createElement("div"),eu=T();q.id=eu;var ru=document.createElement("div");ru.classList.add(f.classes.textbox),ru.classList.add(f.classes.backgroundInfo),ru.innerHTML='<div class="'+f.classes.textboxInner+'">'+C+"</div>",q.appendChild(ru),$.forEach(function(Q,yu){var ou=Q.type,j=ou===void 0?1:ou,Cu=Q.text,Ku=Q.handler,Tu=document.createElement("div");Tu.classList.add(G[j]),Tu.classList.add(f.classes.button),Tu.classList.add(f.classes.selectChoice);var Pu=$[yu+1];Pu&&!Pu.type&&(Pu.type=1),Pu&&Pu.type===j&&Tu.classList.add(f.classes.selectChoiceRepeated),Tu.innerHTML=Cu,Tu.onclick=function(){U(eu,au),O(),Ku()},q.appendChild(Tu)});var P=document.createElement("div");P.classList.add(f.classes.backgroundNeutral),P.classList.add(f.classes.button),P.innerHTML=F,P.onclick=function(){U(eu,au),O(),H?H():I&&I()},q.appendChild(P),q.listener=function(Q){J(Q)&&P.click()},nu(q,au),W(q,au)},zu=m.date=function(D,I,C){var S=D.value,F=S===void 0?new Date:S,H=D.submitText,$=H===void 0?"OK":H,lu=D.cancelText,au=lu===void 0?"Cancel":lu,q=D.submitCallback,eu=D.cancelCallback,ru=D.position,P=ru===void 0?f.positions.date||P.top:ru;B(),su();var Q="&#9662",yu=document.createElement("div"),ou=document.createElement("div"),j=document.createElement("div"),Cu=function(cu){yu.innerHTML=f.dateMonths[cu.getMonth()],ou.innerHTML=cu.getDate(),j.innerHTML=cu.getFullYear()},Ku=function(cu){var ae=new Date(F.getFullYear(),F.getMonth()+1,0).getDate(),Ye=cu.target.textContent.replace(/^0+/,"").replace(/[^\d]/g,"").slice(0,2);Number(Ye)>ae&&(Ye=ae.toString()),cu.target.textContent=Ye,Number(Ye)<1&&(Ye="1"),F.setDate(Number(Ye))},Tu=function(cu){var ae=cu.target.textContent.replace(/^0+/,"").replace(/[^\d]/g,"").slice(0,4);cu.target.textContent=ae,F.setFullYear(Number(ae))},Pu=function(cu){Cu(F)},pe=function(cu){var ae=new Date(F.getFullYear(),F.getMonth()+cu+1,0).getDate();F.getDate()>ae&&F.setDate(ae),F.setMonth(F.getMonth()+cu),Cu(F)},le=function(cu){F.setDate(F.getDate()+cu),Cu(F)},er=function(cu){var ae=F.getFullYear()+cu;ae<0?F.setFullYear(0):F.setFullYear(F.getFullYear()+cu),Cu(F)},Fe=document.createElement("div"),ea=T();Fe.id=ea;var ta=document.createElement("div");ta.classList.add(f.classes.backgroundInfo);var Gu=document.createElement("div");Gu.classList.add(f.classes.dateSelectorInner);var Ke=document.createElement("div");Ke.classList.add(f.classes.button),Ke.classList.add(f.classes.elementThird),Ke.classList.add(f.classes.dateSelectorUp),Ke.innerHTML=Q;var Ge=document.createElement("div");Ge.classList.add(f.classes.button),Ge.classList.add(f.classes.elementThird),Ge.classList.add(f.classes.dateSelectorUp),Ge.innerHTML=Q;var Je=document.createElement("div");Je.classList.add(f.classes.button),Je.classList.add(f.classes.elementThird),Je.classList.add(f.classes.dateSelectorUp),Je.innerHTML=Q,yu.classList.add(f.classes.element),yu.classList.add(f.classes.elementThird),yu.innerHTML=f.dateMonths[F.getMonth()],ou.classList.add(f.classes.element),ou.classList.add(f.classes.elementThird),ou.setAttribute("contentEditable",!0),ou.addEventListener("input",Ku),ou.addEventListener("blur",Pu),ou.innerHTML=F.getDate(),j.classList.add(f.classes.element),j.classList.add(f.classes.elementThird),j.setAttribute("contentEditable",!0),j.addEventListener("input",Tu),j.addEventListener("blur",Pu),j.innerHTML=F.getFullYear();var E0=document.createElement("div");E0.classList.add(f.classes.button),E0.classList.add(f.classes.elementThird),E0.innerHTML=Q;var b0=document.createElement("div");b0.classList.add(f.classes.button),b0.classList.add(f.classes.elementThird),b0.innerHTML=Q;var y0=document.createElement("div");y0.classList.add(f.classes.button),y0.classList.add(f.classes.elementThird),y0.innerHTML=Q,Ke.onclick=function(){return pe(1)},Ge.onclick=function(){return le(1)},Je.onclick=function(){return er(1)},E0.onclick=function(){return pe(-1)},b0.onclick=function(){return le(-1)},y0.onclick=function(){return er(-1)};var Se=document.createElement("div");Se.classList.add(f.classes.button),Se.classList.add(f.classes.elementHalf),Se.classList.add(f.classes.backgroundSuccess),Se.innerHTML=$,Se.onclick=function(){U(ea,P),O(),q?q(F):I&&I(F)};var Be=document.createElement("div");Be.classList.add(f.classes.button),Be.classList.add(f.classes.elementHalf),Be.classList.add(f.classes.backgroundError),Be.innerHTML=au,Be.onclick=function(){U(ea,P),O(),eu?eu(F):C&&C(F)},Gu.appendChild(Ke),Gu.appendChild(Ge),Gu.appendChild(Je),Gu.appendChild(yu),Gu.appendChild(ou),Gu.appendChild(j),Gu.appendChild(E0),Gu.appendChild(b0),Gu.appendChild(y0),ta.appendChild(Gu),Fe.appendChild(ta),Fe.appendChild(Se),Fe.appendChild(Be),Fe.listener=function(cu){L(cu)?Se.click():J(cu)&&Be.click()},nu(Fe,P),W(Fe,P)};m.default={alert:ie,force:fe,confirm:se,input:fu,select:wu,date:zu,setOptions:E,hideAlerts:su}}])})}).call(a,n(0)(t))}])})}),mc=gc(dc()),{default:si,...fc}=mc,rn=si!==void 0?si:fc;var gf=Symbol("clean");var df=Symbol();function on(u,e){if(typeof u=="string")return e(u);{let t={};for(let a in u)t[a]=on(u[a],e);return t}}function gi(u){return e=>{if(e.transform){let t=e.transform;return e=e.input,{input:e,transform(a,n,r){let i=u(a,n,...r);return(...o)=>t(a,i,o)}}}else return{input:e,transform(t,a,n){return u(t,a,...n)}}}}var Df=gi((u,e,t)=>on(e,a=>{for(let n in t)a=a.replace(new RegExp(`{${n}}`,"g"),t[n]);return a})),Cf=gi((u,e,t)=>{let a=new Intl.PluralRules(u).select(t);return a in e||(a="many"),on(e[a],n=>n.replace(/{count}/g,t))});var _f=rn.alert;var sn=class{#u=performance.now();reset(){this.#u=performance.now()}stop(e){let t=performance.now(),a=Math.round(t-this.#u),n=qu.green;a>1e4?n=qu.red:a>1e3&&(n=qu.yellow),console.debug(qu.dim(Le+" TIMING:"),e,"in",n(a+"ms")),this.#u=t}},N0=class{#u=1;get level(){return this.#u}setLevel(e){switch(e){case"debug":this.#u=0;break;case"info":this.#u=1;break;case"warn":this.#u=2;break;case"error":this.#u=3;break;case"fatal":this.#u=4;break}}debug(...e){this.#u<=0&&console.log(qu.dim(Le+" DEBUG:"),...e)}info(...e){this.#u<=1&&console.log(qu.green(Le+" INFO:"),...e)}warn(...e){this.#u<=2&&console.warn(qu.yellow(Le+" WARN:"),...e)}error(...e){this.#u<=3&&console.error(qu.red(Le+" ERROR:"),...e)}fatal(...e){this.#u<=4&&console.error(qu.red(Le+" FATAL:"),...e)}timing(){return this.level===0?new sn:{reset:()=>{},stop:()=>{}}}},_=new N0;var vu=class extends Error{constructor(t,a,n){super(a);this.name=t,n&&(this.details=n)}};async function di(u){u.body;let{url:e,responseType:t,...a}=u;t||(t="json"),a={mode:"cors",...a};let r=await(u.fetchPolyfill||fetch)(e,a);if(r.ok&&r.status>=200&&r.status<400){if(t==="json")return await r.json();if(t==="text")return await r.text();if(t==="raw"){let i=await r.text(),o=Object.fromEntries([...r.headers.entries()]),s=r.url;return s||(r.headers.get("X-Final-URL")?s=r.headers.get("X-Final-URL"):s=e),{body:i,headers:o,status:r.status,statusText:r.statusText,url:s}}}else{let i;try{i=await r.text()}catch(o){_.error("parse response failed",o)}throw new vu("fetchError",r.status+": "+r.statusText||"",i)}}function xe(u,e){var t=(u&65535)+(e&65535),a=(u>>16)+(e>>16)+(t>>16);return a<<16|t&65535}function Ec(u,e){return u<<e|u>>>32-e}function vt(u,e,t,a,n,r){return xe(Ec(xe(xe(e,u),xe(a,r)),n),t)}function Fu(u,e,t,a,n,r,i){return vt(e&t|~e&a,u,e,n,r,i)}function Su(u,e,t,a,n,r,i){return vt(e&a|t&~a,u,e,n,r,i)}function Bu(u,e,t,a,n,r,i){return vt(e^t^a,u,e,n,r,i)}function Lu(u,e,t,a,n,r,i){return vt(t^(e|~a),u,e,n,r,i)}function Tt(u,e){u[e>>5]|=128<<e%32,u[(e+64>>>9<<4)+14]=e;var t,a,n,r,i,o=1732584193,s=-271733879,c=-1732584194,l=271733878;for(t=0;t<u.length;t+=16)a=o,n=s,r=c,i=l,o=Fu(o,s,c,l,u[t],7,-680876936),l=Fu(l,o,s,c,u[t+1],12,-389564586),c=Fu(c,l,o,s,u[t+2],17,606105819),s=Fu(s,c,l,o,u[t+3],22,-1044525330),o=Fu(o,s,c,l,u[t+4],7,-176418897),l=Fu(l,o,s,c,u[t+5],12,1200080426),c=Fu(c,l,o,s,u[t+6],17,-1473231341),s=Fu(s,c,l,o,u[t+7],22,-45705983),o=Fu(o,s,c,l,u[t+8],7,1770035416),l=Fu(l,o,s,c,u[t+9],12,-1958414417),c=Fu(c,l,o,s,u[t+10],17,-42063),s=Fu(s,c,l,o,u[t+11],22,-1990404162),o=Fu(o,s,c,l,u[t+12],7,1804603682),l=Fu(l,o,s,c,u[t+13],12,-40341101),c=Fu(c,l,o,s,u[t+14],17,-1502002290),s=Fu(s,c,l,o,u[t+15],22,1236535329),o=Su(o,s,c,l,u[t+1],5,-165796510),l=Su(l,o,s,c,u[t+6],9,-1069501632),c=Su(c,l,o,s,u[t+11],14,643717713),s=Su(s,c,l,o,u[t],20,-373897302),o=Su(o,s,c,l,u[t+5],5,-701558691),l=Su(l,o,s,c,u[t+10],9,38016083),c=Su(c,l,o,s,u[t+15],14,-660478335),s=Su(s,c,l,o,u[t+4],20,-405537848),o=Su(o,s,c,l,u[t+9],5,568446438),l=Su(l,o,s,c,u[t+14],9,-1019803690),c=Su(c,l,o,s,u[t+3],14,-187363961),s=Su(s,c,l,o,u[t+8],20,1163531501),o=Su(o,s,c,l,u[t+13],5,-1444681467),l=Su(l,o,s,c,u[t+2],9,-51403784),c=Su(c,l,o,s,u[t+7],14,1735328473),s=Su(s,c,l,o,u[t+12],20,-1926607734),o=Bu(o,s,c,l,u[t+5],4,-378558),l=Bu(l,o,s,c,u[t+8],11,-2022574463),c=Bu(c,l,o,s,u[t+11],16,1839030562),s=Bu(s,c,l,o,u[t+14],23,-35309556),o=Bu(o,s,c,l,u[t+1],4,-1530992060),l=Bu(l,o,s,c,u[t+4],11,1272893353),c=Bu(c,l,o,s,u[t+7],16,-155497632),s=Bu(s,c,l,o,u[t+10],23,-1094730640),o=Bu(o,s,c,l,u[t+13],4,681279174),l=Bu(l,o,s,c,u[t],11,-358537222),c=Bu(c,l,o,s,u[t+3],16,-722521979),s=Bu(s,c,l,o,u[t+6],23,76029189),o=Bu(o,s,c,l,u[t+9],4,-640364487),l=Bu(l,o,s,c,u[t+12],11,-421815835),c=Bu(c,l,o,s,u[t+15],16,530742520),s=Bu(s,c,l,o,u[t+2],23,-995338651),o=Lu(o,s,c,l,u[t],6,-198630844),l=Lu(l,o,s,c,u[t+7],10,1126891415),c=Lu(c,l,o,s,u[t+14],15,-1416354905),s=Lu(s,c,l,o,u[t+5],21,-57434055),o=Lu(o,s,c,l,u[t+12],6,1700485571),l=Lu(l,o,s,c,u[t+3],10,-1894986606),c=Lu(c,l,o,s,u[t+10],15,-1051523),s=Lu(s,c,l,o,u[t+1],21,-2054922799),o=Lu(o,s,c,l,u[t+8],6,1873313359),l=Lu(l,o,s,c,u[t+15],10,-30611744),c=Lu(c,l,o,s,u[t+6],15,-1560198380),s=Lu(s,c,l,o,u[t+13],21,1309151649),o=Lu(o,s,c,l,u[t+4],6,-145523070),l=Lu(l,o,s,c,u[t+11],10,-1120210379),c=Lu(c,l,o,s,u[t+2],15,718787259),s=Lu(s,c,l,o,u[t+9],21,-343485551),o=xe(o,a),s=xe(s,n),c=xe(c,r),l=xe(l,i);return[o,s,c,l]}function mi(u){var e,t="",a=u.length*32;for(e=0;e<a;e+=8)t+=String.fromCharCode(u[e>>5]>>>e%32&255);return t}function ln(u){var e,t=[];for(t[(u.length>>2)-1]=void 0,e=0;e<t.length;e+=1)t[e]=0;var a=u.length*8;for(e=0;e<a;e+=8)t[e>>5]|=(u.charCodeAt(e/8)&255)<<e%32;return t}function bc(u){return mi(Tt(ln(u),u.length*8))}function yc(u,e){var t,a=ln(u),n=[],r=[],i;for(n[15]=r[15]=void 0,a.length>16&&(a=Tt(a,u.length*8)),t=0;t<16;t+=1)n[t]=a[t]^909522486,r[t]=a[t]^1549556828;return i=Tt(n.concat(ln(e)),512+e.length*8),mi(Tt(r.concat(i),512+128))}function fi(u){var e="0123456789abcdef",t="",a,n;for(n=0;n<u.length;n+=1)a=u.charCodeAt(n),t+=e.charAt(a>>>4&15)+e.charAt(a&15);return t}function cn(u){return unescape(encodeURIComponent(u))}function pi(u){return bc(cn(u))}function xc(u){return fi(pi(u))}function hi(u,e){return yc(cn(u),cn(e))}function Dc(u,e){return fi(hi(u,e))}function n0(u,e,t){return e?t?hi(e,u):Dc(e,u):t?pi(u):xc(u)}function Ei(u,e,t){let a=Cc(u,e),n=[],r={from:u[0].from,to:u[0].to,tempSentences:[],url:u[0].url};for(let i of a)(r.tempSentences.reduce((s,c)=>s+c.text.length,0)+i.text.length>e||r.tempSentences.length>=t)&&(n.push(r),r={from:i.from,to:i.to,tempSentences:[],url:i.url}),(r.from!==i.from||r.to!==i.to)&&(r.tempSentences.length>0?(n.push(r),r={from:i.from,to:i.to,tempSentences:[],url:i.url}):(r.from=i.from,r.to=i.to)),r.tempSentences.push(i);return r.tempSentences.length>0&&n.push(r),n}function Cc(u,e){let t=[];for(let a=0;a<u.length;a++){let n=u[a],{from:r,to:i,text:o,url:s}=n,c=o.split(/\r?\n/),l=[],m="";for(let d=0;d<c.length;d++){let g=c[d];if(g===""){l.length>0?d<c.length-1&&(l[l.length-1].suffix+=`
`):m+=`
`;continue}else if(g.length>e){let p=[];gn(g,e,p);for(let y=0;y<p.length;y++){let b=p[y],{text:f,prefix:E,suffix:x}=b;l.push({from:r,to:i,text:f,prefix:E,suffix:x,index:a,url:s})}}else l.push({text:g,prefix:m,suffix:"",from:r,to:i,index:a,url:s});l.length>0&&d<c.length-1&&(l[l.length-1].suffix+=`
`)}t.push(...l)}return t}function Ft(u,e){let t=F0(u),a=F0(e),n=t===a;return n?!0:(n=t.startsWith("zh")&&a.startsWith("zh"),n)}function gn(u,e,t){let n=[".","?","!","\u3002","\uFF1F","\uFF01"].reduce((r,i)=>{let o=u.lastIndexOf(i,e);return o>r?o:r},-1);if(n===-1)t.push({text:u.slice(0,e),prefix:"",suffix:""}),u.length>e&&gn(u.slice(e),e,t);else{let r=u.slice(0,n+1);r.startsWith(" ")?t.push({text:r.slice(1),prefix:" ",suffix:""}):t.push({text:r,prefix:"",suffix:""}),n+1<u.length&&gn(u.slice(n+1),e,t)}return t}var r0=[];async function St(u,e){return await new Promise((t,a)=>{let n=u,r=1,i=indexedDB.open(n,r);i.onsuccess=o=>{t(i.result)},i.onerror=o=>{console.error("onerror: Error opening the database, switching to non-database mode",o),a()},i.onupgradeneeded=o=>{let s=i.result,c=e||"cache";s.createObjectStore(c,{keyPath:"key"})}})}async function bi(u){let e=`${iu}-${u.service}@${u.from}->${u.to}`;return await Ac(e,u)}async function yi(u){let e=n0(u.originalText),t=`${iu}-${u.service}@${u.from}->${u.to}`;return await kc(t,e)}async function kc(u,e){let t=await St(u);return await new Promise((a,n)=>{if(!t)return n();let r="cache",o=t.transaction([r],"readonly").objectStore(r).get(e);o.onsuccess=s=>{t.close();let c=o.result;a(c)},o.onerror=s=>{t.close(),console.error("queryInDB->onerror:",s),n()}})}async function Ac(u,e){let t=await St(u);return(await Tc()).includes(u)||await wc(u),await new Promise(n=>{if(!t)return n(!1);let r="cache",o=t.transaction([r],"readwrite").objectStore(r).put(e);o.onsuccess=s=>{t.close(),n(!0)},o.onerror=s=>{console.error("addInDB->onerror:",s),t.close(),n(!1)}})}async function wc(u){let e="cache_list",t=await St(iu+"-cacheList",e),n=t.transaction([e],"readwrite").objectStore(e).put({key:u});n.onsuccess=r=>{t.close(),r0.push(u)},n.onerror=r=>{t.close(),console.error(r)}}async function Tc(){if(r0&&r0.length>0)return r0;let u=await St(iu+"-cacheList","cache_list");return r0=await new Promise(e=>{let t="cache_list",n=u.transaction([t],"readonly").objectStore(t).getAllKeys();n.onsuccess=r=>{u.close(),e(n.result)},n.onerror=r=>{u.close(),console.error(r),e([])}}),r0}var Di="auto",Bt="auto",xi="auto";function Ci(u){Di=u}function Lt(u){Bt=u}function o0(){return Bt!=="auto"?Bt:xi!=="auto"?xi:Di}function dn(){return Bt}var O0=new Map,i0=class{constructor(e,t=!1){this.logger=new N0,t&&this.logger.setLevel("debug"),this.fromType=e,O0.has(e)||(O0.set(e,new Map),V.runtime.onMessage.addListener((a,n,r)=>{let i=a.from,o=a.to,s,c,l;n.tab&&n.tab.id&&(s=n.tab.id,i=`${i}:${s}`,c=n.tab.url,l=n.tab.active),this.logger.debug(`${a.to} received message [${a.payload.method}] from ${a.from}`,a.payload.data?a.payload.data:" ");let m=fn(o),{type:d,name:g}=m;if(d!==e)return!1;let p=fn(i),b=O0.get(d).get(g);if(!b)return this.logger.debug(`no message handler for ${d}:${o}`),r({ok:!1,errorName:"notActive",errorMessage:`${o} is not active, from ${i} ${a.payload.method}`}),!1;let{messageHandler:f,sync:E}=b,x={type:e,name:p.name,id:s,url:c,active:l};if(E){try{let w=f(a.payload,x);r({ok:!0,data:w})}catch(w){r({ok:!1,errorName:w.name,errorMessage:w.message,errorDetails:w.details})}return!1}else return e0(f(a.payload,x),18e5).then(w=>{r({ok:!0,data:w})}).catch(w=>{r({ok:!1,errorName:w.name,errorMessage:w.message,errorDetails:w.details})}),!0}))}getConnection(e,t,a){let n=!1;a&&a.sync&&(n=!0);let r=this.fromType,i=O0.get(r);if(i.has(e))return i.get(e).connectionInstance;{let o=new mn(`${r}:${e}`,this.logger);return O0.get(r).set(e,{messageHandler:t,sync:n,connectionInstance:o}),o}}},mn=class{constructor(e,t){this.from=e,this.logger=t}async sendMessage(e,t){let a=fn(e),{type:n,id:r}=a;if(n!=="content_script"){let i={to:e,from:this.from,payload:t};this.logger.debug(`${i.from} send message [${i.payload.method}] to ${i.to}`,i.payload.data?i.payload.data:" ");let o=await V.runtime.sendMessage(i);return ki(i,o,this.logger)}else{let i={from:this.from,to:e,payload:t};this.logger.debug(`${i.from} send message [${i.payload.method}] to ${i.to}`,i.payload.data?i.payload.data:" ");let o=await V.tabs.sendMessage(r,i);return ki(i,o,this.logger)}}};function ki(u,e,t){if(e.ok)return t.debug(`${u.from} received response from ${u.to}:`,e.data?e.data:" "),e.data;throw new vu(e.errorName||"UnknownError",e.errorMessage||"Unknown error",e.errorDetails)}function fn(u){let e=u.split(":");if(e.length<2)throw new Error("not a valid to string");let t={type:e[0],name:e[1]};if(e[0]==="content_script"){let a=parseInt(e[2]);if(!isNaN(a))t.id=a;else throw new Error("tab id not a valid number")}return t}var vc=async function(u,e){let{method:t,data:a}=u;if(t==="translateTheWholePage")await Rt();else if(t==="translateToThePageEndImmediately")await zt();else if(t==="toggleTranslatePage")await s0();else if(t==="translatePage")await Ce();else if(t==="restorePage")De();else if(t==="showTranslationOnly")wi();else if(t==="setCurrentPageLanguageByClient"){let{language:n}=a;Lt(n)}},Fc=function(u,e){let{method:t,data:a}=u;if(_.debug(`content script received sync message: ${t}`,a||" "),t==="ping")return"pong";if(t==="getPageStatus")return Oe();if(t==="getCurrentPageLanguage")return o0()},_t,Mt;function Ai(){let u=Pt();Sc(),u.sendMessage("popup:main_sync",{method:"ready"}).catch(e=>{})}function Pt(){return _t||(_t=new i0("content_script",!1).getConnection("main",vc),_t)}function Sc(){return Mt||(Mt=new i0("content_script",!1).getConnection("main_sync",Fc,{sync:!0}),Mt)}async function Ie(u){return await Pt().sendMessage("background:main",u)}function X(u){return Mu()||mr()?(u.fetchPolyfill=globalThis.GM_fetch,di(u)):Ie({method:"fetch",data:u})}function He(){return Mu()?ge():Ie({method:"getConfig"})}function Qu(u){if(u.text){let e=ut(u.text);if(e!=="auto")return Promise.resolve(e)}else return Promise.resolve("auto");if(Mu()){let e=V.extra.detectLanguage(u.text);return Promise.resolve(e)}return Ie({method:"detectLanguage",data:u})}function Ti(){return Ie({method:"detectTabLanguage"})}function vi(u){if(Mu()){let t=new CustomEvent("pageTranslatedStatus",{detail:u});document.dispatchEvent(t);return}Pt().sendMessage("popup:main_sync",{method:"setPageStatus",data:u}).catch(t=>{})}function Fi(u){return Mu()?yi(u):Ie({method:"queryParagraphCache",data:u})}async function Si(u){if(Mu()){await bi(u);return}return Ie({method:"setParagraphCache",data:u})}async function pn(){if(Mu())return Promise.resolve();await Ie({method:"mockRequest"})}async function Bi(){let u="auto";return document.body&&document.body.textContent&&document.body.textContent.trim()&&(u=await Qu({text:it(document.body)})),u==="auto"&&document.documentElement&&document.documentElement.lang&&(u=F0(document.documentElement.lang)),u}function hn(u,e){if(!(u&&u.textContent&&u.textContent.trim()))return[];let{rule:t,state:{translationArea:a}}=e,n=[];if(a==="body")return[u];if(t&&t.selectors.length>0){let i=t.selectors.map(o=>{let s=u.matches(o),c=[];s?c=[u]:c=u.querySelectorAll(o);for(let l of c)Z(l,_e)||tu(l,_e,"1");return Array.from(c)}).flat();n.push(...i.map(o=>({element:o,reserve:!0})))}else{if(t&&t.additionalSelectors.length>0){let m=$u(u,t.additionalSelectors);for(let d of m)Z(d,_e)||tu(d,_e,"1");n.push(...m.map(d=>({element:d,reserve:!0})))}let i=$u(u,["article"]);n.push(...i.map(m=>({element:m,reserve:!0})));let o;if(n.length===0&&(o=u.querySelectorAll("[role=main]"),o.length===0&&(o=u.querySelectorAll("main")),o.length===0&&(o=u.querySelectorAll(".main")),o.length>0)){let m=Array.from(o);n=n.concat(m.map(d=>({element:d,reserve:!0})))}let s=[],c=m=>{if(m.nodeType===Node.ELEMENT_NODE&&Ru(m,e.rule,!1))return NodeFilter.FILTER_REJECT;if(m.nodeType===Node.TEXT_NODE&&(m.textContent?m.textContent.trim():"").length>=t.containerMinTextCount){let g=m.parentNode;g&&g.parentNode&&(g=g.parentNode),g&&g.nodeType===Node.ELEMENT_NODE&&(s.includes(g)||s.push(g))}return NodeFilter.FILTER_ACCEPT},l=document.createTreeWalker(u,NodeFilter.SHOW_TEXT|NodeFilter.SHOW_ELEMENT,c);for(;l.nextNode(););n.push(...s.map(m=>({element:m,reserve:!1})))}let r=kr(u,n,t);return r.sort(function(i,o){return i.compareDocumentPosition(o)&Node.DOCUMENT_POSITION_FOLLOWING?-1:1}),r}var En=[];function Li(u){En.push(u)}function bn(){En.forEach(u=>u()),En=[]}function Vu(u,e,t){let a=[],{rule:n}=t,r=T0(t);if(u.length===0)return null;u=u.map(d=>d.element?d:{element:d});let i="",o=!1;for(let d=0;d<u.length;d++){let p=u[d].element;if(typeof p=="string"){i+=p;continue}let y="";v0(p,`[${Hu}]`)?y=Bc(p):y=p.innerText;let b=y.startsWith(" "),f=y.endsWith(" ");p.tagName==="A"&&(b=!0,f=!0);let E=Ze(p,n);if(y===""||E){E&&(b=!0,f=!0);let x={type:"element",value:p};a.push(x);let w=a.length-1,B=`${r[0]}${w}${r[1]}`;i+=(b?" ":"")+B+(f?" ":"");continue}if(!Ru(p,n,!0)){{let x=e?y:y.trim();if(fa(x)||pa(x)||ha(x)||Sr(x)){let w={type:"element",value:p};a.push(w);let B=a.length-1,T=`${r[0]}${B}${r[1]}`;i+=(b?" ":"")+T+(f?" ":"")}else o=!0,i+=(b?" ":"")+x+(f?" ":"")}if(typeof p!="string"){let x=w0(p.nextSibling,e);x&&(i+=x)}}}if(!o)return null;let s=!1,c=i.split(" ").length,l=i.split(`
`).length;c<=n.blockMinWordCount&&i.length<=n.blockMinTextCount&&l<2&&(s=!0);let m={elements:u.map(d=>d.element),text:i,variables:a,inline:s,preWhitespace:e};return vr(m,t.state.translationArea==="body"?2:n.paragraphMinTextCount,t.state.translationArea==="body"?1:n.paragraphMinWordCount,t)?m:null}function Bc(u){let e="",t=n=>n.nodeType===Node.ELEMENT_NODE?Z(n,Hu)?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT:n.nodeType===Node.TEXT_NODE?(n.textContent&&n.textContent.trim()!==""&&(e+=n.textContent.replace(/\s+/g," ")),NodeFilter.FILTER_REJECT):NodeFilter.FILTER_ACCEPT,a=document.createTreeWalker(u,NodeFilter.SHOW_ELEMENT|NodeFilter.SHOW_TEXT,t);for(;a.nextNode(););return e}var Lc=1,l0=new Map;function Pi(){return l0}function ke(u){return l0.get(u)}function I0(u,e){l0.set(u,e)}function Ri(){l0.clear()}function _i(u){if(!Z(u,Me))return!1;if(Z(u,Pe))return!0;let e=je(u,Re);if(!e)return!1;let t=parseInt(e),a=l0.has(t);if(!a){let n=document.getElementById(`${ju}-${t}`);n&&n.remove()}return a}function oe(u,e){let t={...u,id:Lc++};t.elements.forEach(a=>{a instanceof HTMLElement&&(tu(a,Me,"1"),tu(a,Re,`${t.id}`))}),e.push(t),l0.set(t.id,{...t,state:"Original",observers:[]})}async function zi(u,e,t){let a=[],{targetLanguage:n,rule:r,isDetectParagraphLanguage:i}=t;for(let o of e){if(Ru(o,r,!1))continue;let s=Z(o,Xe),c=[];if(Z(o,Iu)){if(!_i(o)){let g=Vu([o],s,t);g&&oe(g,a)}continue}let l=g=>{if(!(g.nodeType===Node.TEXT_NODE||g.nodeType===Node.ELEMENT_NODE))return NodeFilter.FILTER_REJECT;if(g.nodeType===Node.ELEMENT_NODE){let p=g;if(p.isContentEditable||_i(g))return NodeFilter.FILTER_REJECT;if(tu(p,Me,"1"),Z(p,Iu)){if(c.length>0){let b=Vu([...c],s,t);b&&oe(b,a),c.length=0}c.push(p);let y=Vu([...c],s,t);return y&&oe(y,a),c.length=0,NodeFilter.FILTER_REJECT}}if(Ru(g,r,!0)){if((g.nodeName==="CODE"||g.nodeName==="TT")&&g.parentNode?.nodeName==="PRE")return NodeFilter.FILTER_REJECT;if(Yu(g,r))return Mi(g,c,a,s,t),NodeFilter.FILTER_REJECT;if(c.length>0){let p=Vu([...c],s,t);p&&oe(p,a),c.length=0}return NodeFilter.FILTER_REJECT}return g.nodeName==="PRE"?g.classList.contains("code")?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT:Yu(g,r)?(Mi(g,c,a,s,t),NodeFilter.FILTER_REJECT):NodeFilter.FILTER_ACCEPT},m=document.createTreeWalker(o,NodeFilter.SHOW_ELEMENT,l),d=m.nextNode();for(;d;){if(c.length>0){let g=Vu([...c],s,t);g&&oe(g,a),c.length=0}d=m.nextNode()}if(c.length>0){let g=Vu([...c],s,t);g&&oe(g,a),c.length=0}}if(i){let o=a.map(l=>{let{text:m}=l;return Qu({text:m})}),s=await Promise.all(o),c=[];s.forEach((l,m)=>{Ft(l,n)||c.push(a[m])}),a=c}return a}function _c(u,e){let t=[],a=document.createTreeWalker(u,NodeFilter.SHOW_TEXT,null),n=null,r=!1;for(;n=a.nextNode();){let o=n.textContent||"",s=o.trim();if(!r&&o.length>0&&s.length===0){r=!0,t.push(" ");continue}s.length>0&&(t.push(n.parentElement),r=!1)}let i=t[t.length-1];if(i&&typeof i!="string"){let o=w0(i.nextSibling,e);o&&t.push(o)}if(typeof t[t.length-1]!="string"){let o=w0(u.nextSibling,e);o&&t.push(o)}return t}function Mi(u,e,t,a,n){if(v0(u,"br")&&e.length>0){let o=Vu([...e],a,n);o&&oe(o,t),e.length=0}let r=u.previousElementSibling;if(r&&!Yu(r,n.rule)&&e.length>0){let o=Vu([...e],a,n);o&&oe(o,t),e.length=0}Ru(u,n.rule,!1)?Tr(u,n.rule)||e.push(u):Ze(u,n.rule)?e.push(u):v0(u,["code","tt"])?e.push(..._c(u,a)):e.push(u)}async function Hi(u,e,t,a){let n=[],{targetLanguage:r,rule:i,isDetectParagraphLanguage:o}=t;for(let s=0;s<e.length;s++){let c=e[s],l=a[s];if(!l)throw new Error("targetContainer is null");let m=[],d=!0,g=null,p=function(f){let E=f;if(["DIV","BR"].includes(E.nodeName))return d=!0,NodeFilter.FILTER_REJECT;if(E.classList.contains("markedContent"))return NodeFilter.FILTER_ACCEPT;if(Pc(f))return NodeFilter.FILTER_REJECT;if(tu(E,Me,"1"),Yu(E,i)){let x=A0(m),w=globalThis.getComputedStyle(E);if(!x)m.push(Ii(E,w));else{let B=globalThis.getComputedStyle(x),T=Ni(B),G=Ni(w),hu=Oi(G,T),L=!1;d&&g&&Oi(G,g).left>=1.2&&(L=!0),d&&(g=G,d=!1),L||(L=Mc(hu)),L&&ji(m,n,t,l),m.push(Ii(E,w)),m.push(" ")}return NodeFilter.FILTER_REJECT}return NodeFilter.FILTER_ACCEPT},y=document.createTreeWalker(c,NodeFilter.SHOW_ELEMENT,p),b=y.nextNode();for(;b;)b=y.nextNode();ji(m,n,t,l)}return n}function ji(u,e,t,a){if(u.length>0){let n=Vu([...u],!1,t);n&&(n.isPdf=!0,n.targetContainer=a,n.inline=!1,oe(n,e)),u.length=0}}function Ni(u){return{top:parseFloat(u.top.slice(0,-2)),left:parseFloat(u.left.slice(0,-2)),fontSize:parseFloat(u.fontSize.slice(0,-2))}}function Mc(u){return u.fontSize>10||u.fontSize<-10||u.top>=1.9||u.top<0}function Oi(u,e){let t=e.fontSize,a=u.fontSize;return{top:(u.top-e.top)/t,left:(u.left-e.left)/t,fontSize:a-t}}function Ii(u,e){return e.fontFamily==="monospace"?{element:u,isStayOriginal:!0,targetTagName:"code"}:u}function Pc(u){if(!Z(u,Me))return!1;if(Z(u,Pe))return!0;let e=je(u,Re);if(!e)return!1;let t=parseInt(e),n=Pi().has(t);if(!n){let r=document.getElementById(`${ju}-${t}`);r&&r.remove()}return n}function $i(u){return u.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function Rc(u,e,t=[],a){let n=["notranslate"];return a&&n.push(Dr),u&&(n.push(`${iu}-target-translation-theme-${u}`),e?n.push(`${ga}-theme-${u}`):n.push(`${ca}-theme-${u}`)),t.length>0&&n.push(...t),e?n.push(ga):n.push(ca),n}function zc(u){let e=["notranslate",xr];return u&&e.push(`${iu}-target-translation-theme-${u}-inner`),e}function qi(u,e,t){let{rule:a,translationTheme:n}=t,{variables:r}=u;r=r||[];let{text:i}=e,{wrapperPrefix:o,wrapperSuffix:s}=a,c=T0(t),l="afterend",m=new RegExp(`${c[0]}(\\d+)${c[1]}`,"g"),d=0,g=$i(i);r.length>0&&(g=g.replace(m,b=>{let f=g.indexOf(b),E=g[f-1]===" ",x=g[f+b.length]===" ",w=r[Number(d)];if(d++,w.type==="element"){let B=w.value.outerHTML;return E||(B=" "+B),x||(B=B+" "),B}else _.error("variable type not supported",w);return b}));let p=Rc(n,u.inline,a.translationClasses||[],u.preWhitespace),y=zc(n);return g=`<span class="${p.join(" ")}"><span class="${y.join(" ")}">${g}</span></span>`,u.inline||(o==="smart"?g=`<br>${g}`:g=`${o}${g}`,s==="smart"?g=`${g}`:g=`${g}${s}`),u.inline&&(g=`<span class="notranslate">&nbsp;</span>${g}`),{html:g,position:l}}function Wi(u,e){let t=[];for(let a of u){if(Z(a,Iu))continue;if(tu(a,ra,"1"),a.normalize(),e.lineBreakMaxTextCount>0){let r=o=>o.nodeType===Node.ELEMENT_NODE&&Ru(o,e,!0)?NodeFilter.FILTER_REJECT:(o.nodeType===Node.TEXT_NODE&&(o.textContent?o.textContent.trim():"").length>=e.lineBreakMaxTextCount&&yn(o,e.lineBreakMaxTextCount),NodeFilter.FILTER_ACCEPT),i=document.createTreeWalker(a,NodeFilter.SHOW_TEXT|NodeFilter.SHOW_ELEMENT,r);for(;i.nextNode(););}if(!(e.excludeTags.includes("PRE")||e.additionalExcludeTags.includes("PRE"))&&e.isTransformPreTagNewLine){let r=a.querySelectorAll("pre");for(let i of r)Ui(i)}e.preWhitespaceDetectedTags.includes(a.tagName)&&(Br(a,Xe)||(jc(a)?(tu(a,Xe,"1"),e.isTransformPreTagNewLine&&Ui(a)):tu(a,Xe,"0"))),Vi(0,a,e,t)}return{hiddenElements:t}}function Vi(u,e,t,a=[]){if(Z(e,Iu))return;let n=!1;if(u===0){let r=Ze(e,t);e.childNodes&&e.childNodes.length===1&&e.nodeType===Node.ELEMENT_NODE&&Yu(e,t)&&!r&&(n=!0)}if(e&&e.childNodes&&e.childNodes.length>0){for(let r of e.childNodes)if(r.nodeType===Node.ELEMENT_NODE){if(Ru(r,t,!1))continue;{let i=globalThis.getComputedStyle(r),o=!1;if(i.display==="none"&&(a.push(r),o=!0),!o){let s=i.clip,c=i.zIndex,l=i.height,m=i.width,d=0;if(c.startsWith("-")){let g=parseInt(c);isNaN(g)||(d=g)}if((s==="rect(1px, 1px, 1px, 1px)"||d<0)&&(o=!0),!o&&r.nodeName!=="BR"){let g=parseInt(l),p=parseInt(m);!isNaN(g)&&!isNaN(p)&&(g>0&&g<8||p>0&&p<=8)&&(o=!0)}}if(o){tu(r,Hu,"1");continue}else{if(r.nodeName==="DIV"||_r(r,t)){if((i.display==="inline"||i.display==="inline-flex")&&!Z(r,ze)){tu(r,ce,"1");continue}}else if((r.nodeName==="SPAN"||r.nodeName==="A")&&!i.display.startsWith("inline")){Z(r,ce)||tu(r,ze,"1");continue}if(Yu(r,t)&&!n)continue;Vi(u+1,r,t,a)}}}else if(r.nodeType===Node.TEXT_NODE){let i=r.textContent;if(i&&i.trim().length>0){let o=document.createElement("span");r.after(o),o.appendChild(r)}}}}function jc(u){let e=window.getComputedStyle(u);return e.whiteSpace.startsWith("pre")||e.whiteSpace==="break-spaces"}function Ui(u){let t=u.innerHTML.replace(/\n/g,"<br>");u.innerHTML=t}function yn(u,e){let t=u.textContent||"";if(t.trim().length<=e)return;let r=[".","?","!","\u3002","\uFF1F","\uFF01"].reduce((i,o)=>{let s=t.lastIndexOf(o,e);return s>i?s:i},-1);if(r===-1)t.length<=e&&yn(u,e+20);else{let i=t.slice(r+1);r++,i.startsWith(" ")&&r++;let o=u.splitText(r),s=document.createElement("br");o.parentNode?.insertBefore(s,o),r+1<t.length&&yn(o,e)}}function Ki(u,e){let t=[];for(let a of u){let n=0,r=1e5,i=document.createElement("div"),o=l=>{let m=l;if(["DIV","BR"].includes(m.nodeName))return NodeFilter.FILTER_REJECT;if(m.classList.contains("markedContent"))return NodeFilter.FILTER_ACCEPT;if(m.nodeName==="SPAN"){let d=m.getBoundingClientRect(),g=globalThis.getComputedStyle(m),p=d.right,y=d.left,b=g.top.slice(0,-2),f=g.fontSize.slice(0,-2);p>n&&(n=p),y<r&&(r=y);let E=y-r;E<0&&(E=0);let x=n-r;return x<0&&(x=0),tu(m,D0,`${E}`),tu(m,hr,`${x}`),tu(m,Er,b),tu(m,br,f),NodeFilter.FILTER_ACCEPT}else return NodeFilter.FILTER_ACCEPT},s=document.createTreeWalker(a,NodeFilter.SHOW_ELEMENT,o);for(;s.nextNode(););let c=n-r;c<600&&(c=600),t.push(i),i.style.left=n+"px",i.style.width=c+"px",i.classList.add(rt),a.childNodes.length>0&&a.insertBefore(i,a.childNodes[0])}return{targetContainers:t}}var uu=class{constructor(e,t){this.maxTextLength=1800;this.throttleLimit=3;this.isSupportList=!0;this.maxTextGroupLength=200;this.serviceConfig=e,this.generalConfig=t}static getAllProps(){return[]}static getProps(){return[]}async init(){}getMaxTextGroupLength(){return this.maxTextGroupLength}translate(e){throw new Error("Not implemented")}translateList(e){throw new Error("Not implemented")}async multipleTranslate(e,t){if(e.sentences.length===0)return{sentences:[]};let{sentences:a}=e,n=[],r=[],i=0,o=new Set,s=null;try{r=Ei(a,this.maxTextLength,this.maxTextGroupLength),_.debug("tempSentenceGroups",r)}catch(l){if(t){o.has(i)&&i++;for(let m=i;m<a.length;m++){let d=a[m];t(l,null,d)}s=l}else s=l}let c=yt({limit:this.throttleLimit,interval:1e3});for(let l=0;l<r.length;l++){let m=r[l],d=m.url,g=c(async()=>{if(this.isSupportList)return await this.translateList({text:m.tempSentences.map(f=>f.text),from:m.from,to:m.to,url:d});{let b=m.tempSentences.map(w=>w.text).join(la),f=await this.translate({text:b,from:m.from,to:m.to,url:d}),{text:E}=f;return{text:E.split(la),from:f.from,to:f.to}}}),p;try{p=await g()}catch(b){if(t){o.has(i)&&i++;for(let f=i;f<a.length;f++){let E=a[f];t(b,null,E)}s=b;continue}else{s=b;continue}}let{text:y}=p;for(let b=0;b<y.length;b++)try{let f=y[b],E=m.tempSentences[b],{index:x,prefix:w,suffix:B}=E;n[x]===void 0?n[x]={...a[x],from:m.from,to:m.to,text:w+f+B}:n[x].text+=w+f+B,x!==i&&t&&(o.add(i),t(null,n[i],a[i])),i=x}catch(f){if(t){o.has(i)&&i++;for(let E=i;E<a.length;E++){let x=a[E];t(f,null,x)}throw f}else throw f}}if(t&&!o.has(i)&&n[i]&&a[i]&&t(null,n[i],a[i]),s)throw s;return{sentences:n}}detectLanguageLocally(e){return Qu({text:e})}detectLanguageRemotely(e){return Promise.resolve("auto")}detectLanguage(e){return e.length>=32?this.detectLanguageLocally(e):this.detectLanguageRemotely(e)}};var c0="input is invalid type",xn=typeof window=="object",Ae=xn?window:{};Ae.JS_SHA256_NO_WINDOW&&(xn=!1);var Nc=!xn&&typeof self=="object",Oc=!Ae.JS_SHA256_NO_NODE_JS&&typeof process=="object"&&process.versions&&process.versions.node;Oc?Ae=global:Nc&&(Ae=self);var Xp=!Ae.JS_SHA256_NO_COMMON_JS&&typeof module=="object"&&module.exports,Qp=typeof define=="function"&&define.amd,H0=!Ae.JS_SHA256_NO_ARRAY_BUFFER&&typeof ArrayBuffer<"u",v="0123456789abcdef".split(""),Ic=[-2147483648,8388608,32768,128],Zu=[24,16,8,0],jt=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298],Nt=["hex","array","digest","arrayBuffer"],xu=[];(Ae.JS_SHA256_NO_NODE_JS||!Array.isArray)&&(Array.isArray=function(u){return Object.prototype.toString.call(u)==="[object Array]"});H0&&(Ae.JS_SHA256_NO_ARRAY_BUFFER_IS_VIEW||!ArrayBuffer.isView)&&(ArrayBuffer.isView=function(u){return typeof u=="object"&&u.buffer&&u.buffer.constructor===ArrayBuffer});var Gi=function(u,e){return function(t){return new Du(e,!0).update(t)[u]()}},Yi=function(u){var e=Gi("hex",u);e.create=function(){return new Du(u)},e.update=function(n){return e.create().update(n)};for(var t=0;t<Nt.length;++t){var a=Nt[t];e[a]=Gi(a,u)}return e},Ji=function(u,e){return function(t,a){return new Ot(t,e,!0).update(a)[u]()}},Xi=function(u){var e=Ji("hex",u);e.create=function(n){return new Ot(n,u)},e.update=function(n,r){return e.create(n).update(r)};for(var t=0;t<Nt.length;++t){var a=Nt[t];e[a]=Ji(a,u)}return e};function Du(u,e){e?(xu[0]=xu[16]=xu[1]=xu[2]=xu[3]=xu[4]=xu[5]=xu[6]=xu[7]=xu[8]=xu[9]=xu[10]=xu[11]=xu[12]=xu[13]=xu[14]=xu[15]=0,this.blocks=xu):this.blocks=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],u?(this.h0=3238371032,this.h1=914150663,this.h2=812702999,this.h3=4144912697,this.h4=4290775857,this.h5=1750603025,this.h6=1694076839,this.h7=3204075428):(this.h0=1779033703,this.h1=3144134277,this.h2=1013904242,this.h3=2773480762,this.h4=1359893119,this.h5=2600822924,this.h6=528734635,this.h7=1541459225),this.block=this.start=this.bytes=this.hBytes=0,this.finalized=this.hashed=!1,this.first=!0,this.is224=u}Du.prototype.update=function(u){if(!this.finalized){var e,t=typeof u;if(t!=="string"){if(t==="object"){if(u===null)throw new Error(c0);if(H0&&u.constructor===ArrayBuffer)u=new Uint8Array(u);else if(!Array.isArray(u)&&(!H0||!ArrayBuffer.isView(u)))throw new Error(c0)}else throw new Error(c0);e=!0}for(var a,n=0,r,i=u.length,o=this.blocks;n<i;){if(this.hashed&&(this.hashed=!1,o[0]=this.block,o[16]=o[1]=o[2]=o[3]=o[4]=o[5]=o[6]=o[7]=o[8]=o[9]=o[10]=o[11]=o[12]=o[13]=o[14]=o[15]=0),e)for(r=this.start;n<i&&r<64;++n)o[r>>2]|=u[n]<<Zu[r++&3];else for(r=this.start;n<i&&r<64;++n)a=u.charCodeAt(n),a<128?o[r>>2]|=a<<Zu[r++&3]:a<2048?(o[r>>2]|=(192|a>>6)<<Zu[r++&3],o[r>>2]|=(128|a&63)<<Zu[r++&3]):a<55296||a>=57344?(o[r>>2]|=(224|a>>12)<<Zu[r++&3],o[r>>2]|=(128|a>>6&63)<<Zu[r++&3],o[r>>2]|=(128|a&63)<<Zu[r++&3]):(a=65536+((a&1023)<<10|u.charCodeAt(++n)&1023),o[r>>2]|=(240|a>>18)<<Zu[r++&3],o[r>>2]|=(128|a>>12&63)<<Zu[r++&3],o[r>>2]|=(128|a>>6&63)<<Zu[r++&3],o[r>>2]|=(128|a&63)<<Zu[r++&3]);this.lastByteIndex=r,this.bytes+=r-this.start,r>=64?(this.block=o[16],this.start=r-64,this.hash(),this.hashed=!0):this.start=r}return this.bytes>4294967295&&(this.hBytes+=this.bytes/4294967296<<0,this.bytes=this.bytes%4294967296),this}};Du.prototype.finalize=function(){if(!this.finalized){this.finalized=!0;var u=this.blocks,e=this.lastByteIndex;u[16]=this.block,u[e>>2]|=Ic[e&3],this.block=u[16],e>=56&&(this.hashed||this.hash(),u[0]=this.block,u[16]=u[1]=u[2]=u[3]=u[4]=u[5]=u[6]=u[7]=u[8]=u[9]=u[10]=u[11]=u[12]=u[13]=u[14]=u[15]=0),u[14]=this.hBytes<<3|this.bytes>>>29,u[15]=this.bytes<<3,this.hash()}};Du.prototype.hash=function(){var u=this.h0,e=this.h1,t=this.h2,a=this.h3,n=this.h4,r=this.h5,i=this.h6,o=this.h7,s=this.blocks,c,l,m,d,g,p,y,b,f,E,x;for(c=16;c<64;++c)g=s[c-15],l=(g>>>7|g<<25)^(g>>>18|g<<14)^g>>>3,g=s[c-2],m=(g>>>17|g<<15)^(g>>>19|g<<13)^g>>>10,s[c]=s[c-16]+l+s[c-7]+m<<0;for(x=e&t,c=0;c<64;c+=4)this.first?(this.is224?(b=300032,g=s[0]-1413257819,o=g-150054599<<0,a=g+24177077<<0):(b=704751109,g=s[0]-210244248,o=g-1521486534<<0,a=g+143694565<<0),this.first=!1):(l=(u>>>2|u<<30)^(u>>>13|u<<19)^(u>>>22|u<<10),m=(n>>>6|n<<26)^(n>>>11|n<<21)^(n>>>25|n<<7),b=u&e,d=b^u&t^x,y=n&r^~n&i,g=o+m+y+jt[c]+s[c],p=l+d,o=a+g<<0,a=g+p<<0),l=(a>>>2|a<<30)^(a>>>13|a<<19)^(a>>>22|a<<10),m=(o>>>6|o<<26)^(o>>>11|o<<21)^(o>>>25|o<<7),f=a&u,d=f^a&e^b,y=o&n^~o&r,g=i+m+y+jt[c+1]+s[c+1],p=l+d,i=t+g<<0,t=g+p<<0,l=(t>>>2|t<<30)^(t>>>13|t<<19)^(t>>>22|t<<10),m=(i>>>6|i<<26)^(i>>>11|i<<21)^(i>>>25|i<<7),E=t&a,d=E^t&u^f,y=i&o^~i&n,g=r+m+y+jt[c+2]+s[c+2],p=l+d,r=e+g<<0,e=g+p<<0,l=(e>>>2|e<<30)^(e>>>13|e<<19)^(e>>>22|e<<10),m=(r>>>6|r<<26)^(r>>>11|r<<21)^(r>>>25|r<<7),x=e&t,d=x^e&a^E,y=r&i^~r&o,g=n+m+y+jt[c+3]+s[c+3],p=l+d,n=u+g<<0,u=g+p<<0;this.h0=this.h0+u<<0,this.h1=this.h1+e<<0,this.h2=this.h2+t<<0,this.h3=this.h3+a<<0,this.h4=this.h4+n<<0,this.h5=this.h5+r<<0,this.h6=this.h6+i<<0,this.h7=this.h7+o<<0};Du.prototype.hex=function(){this.finalize();var u=this.h0,e=this.h1,t=this.h2,a=this.h3,n=this.h4,r=this.h5,i=this.h6,o=this.h7,s=v[u>>28&15]+v[u>>24&15]+v[u>>20&15]+v[u>>16&15]+v[u>>12&15]+v[u>>8&15]+v[u>>4&15]+v[u&15]+v[e>>28&15]+v[e>>24&15]+v[e>>20&15]+v[e>>16&15]+v[e>>12&15]+v[e>>8&15]+v[e>>4&15]+v[e&15]+v[t>>28&15]+v[t>>24&15]+v[t>>20&15]+v[t>>16&15]+v[t>>12&15]+v[t>>8&15]+v[t>>4&15]+v[t&15]+v[a>>28&15]+v[a>>24&15]+v[a>>20&15]+v[a>>16&15]+v[a>>12&15]+v[a>>8&15]+v[a>>4&15]+v[a&15]+v[n>>28&15]+v[n>>24&15]+v[n>>20&15]+v[n>>16&15]+v[n>>12&15]+v[n>>8&15]+v[n>>4&15]+v[n&15]+v[r>>28&15]+v[r>>24&15]+v[r>>20&15]+v[r>>16&15]+v[r>>12&15]+v[r>>8&15]+v[r>>4&15]+v[r&15]+v[i>>28&15]+v[i>>24&15]+v[i>>20&15]+v[i>>16&15]+v[i>>12&15]+v[i>>8&15]+v[i>>4&15]+v[i&15];return this.is224||(s+=v[o>>28&15]+v[o>>24&15]+v[o>>20&15]+v[o>>16&15]+v[o>>12&15]+v[o>>8&15]+v[o>>4&15]+v[o&15]),s};Du.prototype.toString=Du.prototype.hex;Du.prototype.digest=function(){this.finalize();var u=this.h0,e=this.h1,t=this.h2,a=this.h3,n=this.h4,r=this.h5,i=this.h6,o=this.h7,s=[u>>24&255,u>>16&255,u>>8&255,u&255,e>>24&255,e>>16&255,e>>8&255,e&255,t>>24&255,t>>16&255,t>>8&255,t&255,a>>24&255,a>>16&255,a>>8&255,a&255,n>>24&255,n>>16&255,n>>8&255,n&255,r>>24&255,r>>16&255,r>>8&255,r&255,i>>24&255,i>>16&255,i>>8&255,i&255];return this.is224||s.push(o>>24&255,o>>16&255,o>>8&255,o&255),s};Du.prototype.array=Du.prototype.digest;Du.prototype.arrayBuffer=function(){this.finalize();var u=new ArrayBuffer(this.is224?28:32),e=new DataView(u);return e.setUint32(0,this.h0),e.setUint32(4,this.h1),e.setUint32(8,this.h2),e.setUint32(12,this.h3),e.setUint32(16,this.h4),e.setUint32(20,this.h5),e.setUint32(24,this.h6),this.is224||e.setUint32(28,this.h7),u};function Ot(u,e,t){var a,n=typeof u;if(n==="string"){var r=[],i=u.length,o=0,s;for(a=0;a<i;++a)s=u.charCodeAt(a),s<128?r[o++]=s:s<2048?(r[o++]=192|s>>6,r[o++]=128|s&63):s<55296||s>=57344?(r[o++]=224|s>>12,r[o++]=128|s>>6&63,r[o++]=128|s&63):(s=65536+((s&1023)<<10|u.charCodeAt(++a)&1023),r[o++]=240|s>>18,r[o++]=128|s>>12&63,r[o++]=128|s>>6&63,r[o++]=128|s&63);u=r}else if(n==="object"){if(u===null)throw new Error(c0);if(H0&&u.constructor===ArrayBuffer)u=new Uint8Array(u);else if(!Array.isArray(u)&&(!H0||!ArrayBuffer.isView(u)))throw new Error(c0)}else throw new Error(c0);u.length>64&&(u=new Du(e,!0).update(u).array());var c=[],l=[];for(a=0;a<64;++a){var m=u[a]||0;c[a]=92^m,l[a]=54^m}Du.call(this,e,t),this.update(l),this.oKeyPad=c,this.inner=!0,this.sharedMemory=t}Ot.prototype=new Du;Ot.prototype.finalize=function(){if(Du.prototype.finalize.call(this),this.inner){this.inner=!1;var u=this.array();Du.call(this,this.is224,this.sharedMemory),this.update(this.oKeyPad),this.update(u),Du.prototype.finalize.call(this)}};var g0=Yi();g0.sha256=g0;g0.sha224=Yi(!0);g0.sha256.hmac=Xi();g0.sha224.hmac=Xi(!0);var Qi=g0;var Zi=Qi.sha256;function ue(u){return Promise.resolve(Zi(u))}function It(u){return Array.from(new Uint8Array(u)).map(a=>a.toString(16).padStart(2,"0")).join("")}function we(u,e){let t=Zi.hmac.create(e);return t.update(u),Promise.resolve(t.array())}async function us(u,e){let t=await we(u,e);return It(t)}async function Ht(u,e){let t=Hc(e),a=await we(u,t);return It(a)}function Hc(u){let e=[];return u.replace(/../g,function(t){return e.push(parseInt(t,16)),""}),new Uint8Array(e).buffer}var es=[["auto","auto"],["zh-CN","zh"],["zh-TW","zh-TW"],["de","de"],["en","en"],["es","es"],["fr","fr"],["id","id"],["it","it"],["ja","jp"],["ko","kr"],["ms","ms"],["pt","pt"],["ru","ru"],["th","th"],["tr","tr"],["vi","vi"]],ee=class extends uu{constructor(t,a){super(t,a);this.secretId="";this.secretKey="";this.isSupportList=!0;if(!t||!t.secretId||!t.secretKey)throw new Error("secretId and secretKey are required");this.secretId=t.secretId,this.secretKey=t.secretKey}static getUTCDate(t){let a=t.getUTCFullYear(),n=`${t.getUTCMonth()+1}`.padStart(2,"0"),r=`${t.getUTCDate()}`.padStart(2,"0");return`${a}-${n}-${r}`}static getAllProps(){return[{name:"secretId",required:!0,type:"text"},{name:"secretKey",required:!0,type:"password"}]}async translate(t){let{text:a,from:n,to:r}=t,i=JSON.stringify({ProjectId:0,Source:ee.langMap.get(n),SourceText:a,Target:ee.langMap.get(r)}),o=await this.signedRequest({secretId:this.secretId,secretKey:this.secretKey,action:"TextTranslate",payload:i,service:"tmt",version:"2018-03-21"});return{text:o.Response.TargetText,from:ee.langMapReverse.get(o.Response.Source)||n,to:ee.langMapReverse.get(o.Response.Target)||r}}async translateList(t){let{text:a,from:n,to:r}=t,i=JSON.stringify({ProjectId:0,Source:ee.langMap.get(n),SourceTextList:a,Target:ee.langMap.get(r)}),o=await this.signedRequest({secretId:this.secretId,secretKey:this.secretKey,action:"TextTranslateBatch",payload:i,service:"tmt",version:"2018-03-21"});return{text:o.Response.TargetTextList,from:ee.langMapReverse.get(o.Response.Source)||n,to:ee.langMapReverse.get(o.Response.Target)||r}}async signedRequest({secretId:t,secretKey:a,action:n,payload:r,service:i,version:o}){let s=`${i}.tencentcloudapi.com`,c=new Date,l=`${new Date().valueOf()}`.slice(0,10),m=["POST","/","","content-type:application/json; charset=utf-8",`host:${s}`,"","content-type;host",await ue(r)].join(`
`),d=ee.getUTCDate(c),g=["TC3-HMAC-SHA256",l,`${d}/${i}/tc3_request`,await ue(m)].join(`
`),p=await us(d,`TC3${a}`),y=await Ht(i,p),b=await Ht("tc3_request",y),f=await Ht(g,b),E=await X({url:`https://${i}.tencentcloudapi.com`,method:"POST",headers:{"Content-Type":"application/json; charset=utf-8",Host:s,"X-TC-Action":n,"X-TC-Timestamp":l,"X-TC-Region":"ap-beijing","X-TC-Version":o,Authorization:`TC3-HMAC-SHA256 Credential=${t}/${d}/${i}/tc3_request, SignedHeaders=content-type;host, Signature=${f}`},body:r});if(E instanceof Error)throw E;if(E.Response&&E.Response.Error&&E.Response.Error.Message)throw new Error(E.Response.Error.Message);return E}},$e=ee;$e.langMap=new Map(es),$e.langMapReverse=new Map(es.map(([t,a])=>[a,t]));var ts=[["auto","auto"],["zh-CN","zh-CN"],["zh-TW","zh-TW"],["en","en"],["af","af"],["am","am"],["ar","ar"],["az","az"],["be","be"],["bg","bg"],["bn","bn"],["bs","bs"],["ca","ca"],["ceb","ceb"],["co","co"],["cs","cs"],["cy","cy"],["da","da"],["de","de"],["el","el"],["eo","eo"],["es","es"],["et","et"],["eu","eu"],["fa","fa"],["fi","fi"],["fr","fr"],["fy","fy"],["ga","ga"],["gd","gd"],["gl","gl"],["gu","gu"],["ha","ha"],["haw","haw"],["he","he"],["hi","hi"],["hmn","hmn"],["hr","hr"],["ht","ht"],["hu","hu"],["hy","hy"],["id","id"],["ig","ig"],["is","is"],["it","it"],["ja","ja"],["jw","jw"],["ka","ka"],["kk","kk"],["km","km"],["kn","kn"],["ko","ko"],["ku","ku"],["ky","ky"],["la","la"],["lb","lb"],["lo","lo"],["lt","lt"],["lv","lv"],["mg","mg"],["mi","mi"],["mk","mk"],["ml","ml"],["mn","mn"],["mr","mr"],["ms","ms"],["mt","mt"],["my","my"],["ne","ne"],["nl","nl"],["no","no"],["ny","ny"],["pa","pa"],["pl","pl"],["ps","ps"],["pt","pt"],["ro","ro"],["ru","ru"],["sd","sd"],["si","si"],["sk","sk"],["sl","sl"],["sm","sm"],["sn","sn"],["so","so"],["sq","sq"],["sr","sr"],["st","st"],["su","su"],["sv","sv"],["sw","sw"],["ta","ta"],["te","te"],["tg","tg"],["th","th"],["fil","tl"],["tr","tr"],["ug","ug"],["uk","uk"],["ur","ur"],["uz","uz"],["vi","vi"],["xh","xh"],["yi","yi"],["yo","yo"],["zu","zu"]],$0=class extends uu{constructor(t,a){super(t,a);this.isSupportList=!1;this.throttleLimit=100}async translate(t){let{text:a,from:n,to:r}=t;if(!a)return{...t};let i=$0.langMap.get(n)||"auto",o=$0.langMap.get(r)||"zh-CN",s=await this.fetchWithoutToken(a,i,o);if(!s)throw new Error("google translate NETWORK_ERROR");if(!s.data[0]||s.data[0].length<=0)throw new Error("google translate API_SERVER_ERROR");return{text:s.data[0].map(l=>l[0]).filter(Boolean).join(""),from:$0.langMapReverse.get(s.data[2])||"auto",to:r}}async fetchWithoutToken(t,a,n){let r="https://translate.googleapis.com/translate_a/single?"+new URLSearchParams({client:"gtx",dt:"t",sl:a,tl:n,q:t});return{data:await X({url:r})}}},qe=$0;qe.langMap=new Map(ts),qe.langMapReverse=new Map(ts.map(([t,a])=>[a,t]));function as(u){return u.result.texts}function $c(u,e){return e?u+(e-u%e):u}function qc(u,e){return u.split(e).length-1}function ns(u){let e=Date.now(),t=1;for(let a of u)t+=qc(a,"i");return $c(e,t)}function Uc(u,e){return Math.floor(Math.random()*(e-u+1))+u}function Dn(){return Uc(1e6,1e8)}var Cn="https://www2.deepl.com/jsonrpc",$t="auto",rs=[{code:"BG",language:"Bulgarian"},{code:"ZH",language:"Chinese"},{code:"CS",language:"Czech"},{code:"DA",language:"Danish"},{code:"NL",language:"Dutch"},{code:"EN",language:"English"},{code:"ET",language:"Estonian"},{code:"FI",language:"Finnish"},{code:"FR",language:"French"},{code:"DE",language:"German"},{code:"EL",language:"Greek"},{code:"HU",language:"Hungarian"},{code:"IT",language:"Italian"},{code:"JA",language:"Japanese"},{code:"LV",language:"Latvian"},{code:"LT",language:"Lithuanian"},{code:"PL",language:"Polish"},{code:"PT",language:"Portuguese"},{code:"RO",language:"Romanian"},{code:"RU",language:"Russian"},{code:"SK",language:"Slovak"},{code:"SL",language:"Slovenian"},{code:"ES",language:"Spanish"},{code:"SV",language:"Swedish"}],os=["formal","informal"];function ss(u,e=$t,t=Dn()){return{jsonrpc:"2.0",method:"LMT_split_text",params:{commonJobParams:{mode:"translate"},lang:{lang_user_selected:e,user_preferred_langs:[]},texts:u},id:t}}function Wc(u,e=1){let t=[],a=0;for(let n=0;n<u.length;n++){let r=u[n].chunks;for(let i=0;i<r.length;i++){let o=r[i];t.push({kind:"default",_index:n,sentences:[{id:a,text:o.sentences[0].text,prefix:o.sentences[0].prefix}],raw_en_context_before:r.slice(0,a).map(s=>s.sentences[0].text),raw_en_context_after:a+1<r.length?[r[a+1].sentences[0].text]:[],preferred_num_beams:e}),a++}}return t}function is(u){return u.reduce((e,t)=>{let a=t.chunks;for(let n of a)e.push(n.sentences[0].text);return e},[])}function Vc(u){if(!u)return{};if(!os.includes(u))throw new Error("Formality tone '{formality_tone}' not supported.");return{formality:u}}function ls(u,e,t,a=Dn(),n=1,r){let i=is(t);return{jsonrpc:"2.0",method:"LMT_handle_jobs",params:{jobs:Wc(t,n),lang:{user_preferred_langs:[e,u],source_lang_computed:u,target_lang:e},priority:1,commonJobParams:Vc(r),timestamp:ns(is(t))},id:a}}function Kc(u=rs){return u.reduce((e,t)=>(e[t.code.toLowerCase()]=t.code,e[t.language.toLowerCase()]=t.code,e),{})}function kn(u){return Kc()[u.toLowerCase()]}var cs={Accept:"*/*","Accept-Language":"en-US;q=0.8,en;q=0.7",Authority:"www2.deepl.com","Content-Type":"application/json",Origin:"https://www.deepl.com",Referer:"https://www.deepl.com/translator","Sec-Fetch-Dest":"empty","Sec-Fetch-Mode":"cors","Sec-Fetch-Site":"same-site"};function gs(u){return JSON.stringify(u).replace('"method":"',()=>{let e=u;return(e.id+3)%13===0||(e.id+5)%29===0?'"method" : "':'"method": "'})}async function Gc(u,e,t){let a=ss(u,e,t);return await X({method:"POST",url:Cn+"?method=LMT_split_text",headers:cs,body:gs(a)})}async function Jc(u,e,t,a,n,r){let i=await Gc(u,t,a),o=ls(t==="auto"?i.result.lang.detected:t,e,as(i),a,n,r),s=o.params.jobs.map(m=>m._index);o.params.jobs=o.params.jobs.map(m=>{let d={...m};return delete d._index,d});let c=await X({method:"POST",url:Cn+"?method=LMT_handle_jobs",body:gs(o),headers:cs}),l={from:i.result.lang.detected,to:e,text:[]};return c.result.translations.forEach((m,d)=>{let g=s[d];l.text[g]===void 0&&(l.text[g]="");let p=o.params.jobs[d].sentences[0].prefix,y=o.params.jobs[d].sentences[0].prefix;l.text[g]=l.text[g]+p+m.beams[0].sentences[0].text}),l}async function ds(u,e,t=$t,a,n,r){return u?u&&u.length===1&&u[0]===""?{text:[""],from:t,to:e}:Jc(u,kn(e),kn(t)??"auto",a,n,r):{text:[],from:t,to:e}}var ms=[["auto","auto"],["zh-CN","ZH"],["zh-TW","ZH"],["de","DE"],["en","EN"],["es","ES"],["fr","FR"],["it","IT"],["ja","JA"],["pt","PT"],["ru","RU"],["tr","tr"]],d0=class extends uu{constructor(t,a){super(t,a);this.maxTextGroupLength=3;this.maxTextLength=800;this.isSupportList=!0}async translateList(t){let{text:a,to:n,from:r}=t,i=await ds(a,d0.langMap.get(n),d0.langMap.get(r));return{text:i.text,from:d0.langMapReverse.get(i.from),to:d0.langMapReverse.get(i.to)}}},Ue=d0;Ue.langMap=new Map(ms),Ue.langMapReverse=new Map(ms.map(([t,a])=>[a,t]));var fs=[["auto","auto"],["zh-CN","zh"],["en","en"],["yue","yue"],["wyw","wyw"],["ja","jp"],["ko","kor"],["fr","fra"],["es","spa"],["th","th"],["ar","ara"],["ru","ru"],["pt","pt"],["de","de"],["it","it"],["el","el"],["nl","nl"],["pl","pl"],["bg","bul"],["et","est"],["da","dan"],["fi","fin"],["cs","cs"],["ro","rom"],["sl","slo"],["sv","swe"],["hu","hu"],["zh-TW","cht"],["vi","vie"]],Gh=new Map(fs),Jh=new Map(fs.map(([u,e])=>[e,u]));var ps=[["auto","auto"],["zh-CN","zh"],["zh-TW","zh-TW"],["de","de"],["en","en"],["es","es"],["fr","fr"],["id","id"],["it","it"],["ja","jp"],["ko","kr"],["ms","ms"],["pt","pt"],["ru","ru"],["th","th"],["tr","tr"],["vi","vi"]],An="https://transmart.qq.com/api/imt",We=class extends uu{constructor(t,a){super(t,a);this.maxTextGroupLength=50;this.maxTextLength=1e3;this.throttleLimit=1e3;this.isSupportList=!1;this.clientKey=btoa("transmart_crx_"+navigator.userAgent).slice(0,100)}async translate(t){let{text:a,to:n}=t,r=await this.detectLanguage(a),i=We.langMap.get(r)||r,o=We.langMap.get(n)||n;if(r===n)return{text:a,from:r,to:n};let s=JSON.stringify({header:{fn:"auto_translation_block",client_key:this.clientKey},source:{text_block:a,lang:i,orig_url:t.url},target:{lang:o}}),c=await X({url:An,body:s,method:"POST"});if(c.header.ret_code!=="succ")throw new Error(c.message||c.header.ret_code);return{text:c.auto_translation,from:r||"auto",to:n}}async translateList(t){let{from:a,text:n,to:r}=t;if(n.length===1){let m=await this.translate({from:a,text:n[0],to:r,url:t.url});return{text:[m.text],from:m.from,to:m.to}}let i=await this.detectLanguage(n.join(`
`));if(i===r)return{text:n,from:i,to:r};let o=We.langMap.get(i)||i,s=We.langMap.get(r)||r,c=JSON.stringify({header:{fn:"auto_translation",client_key:this.clientKey},source:{text_list:n,lang:o,orig_url:t.url},target:{lang:s},type:"plain"}),l=await X({url:An,body:c,method:"POST"});if(l.header.ret_code!=="succ")throw new Error(l.message||l.header.ret_code);return{text:l.auto_translation,from:i||"auto",to:r}}detectLanguageLocally(t){return this.detectLanguageRemotely(t)}async detectLanguageRemotely(t){let a={header:{fn:"text_analysis",client_key:this.clientKey},text:t.slice(0,280)},n=await X({url:An,method:"POST",body:JSON.stringify(a)});if(n.header.ret_code!=="succ")throw new Error(n.message||n.header.ret_code);let r=n.language,i=We.langMapReverse.get(r);return i||r}},Ve=We;Ve.langMap=new Map(ps),Ve.langMapReverse=new Map(ps.map(([t,a])=>[a,t]));function hs(){return Math.random()>=0}var m0=class extends uu{constructor(){super(...arguments);this.isSupportList=!0}async translate(t){let{text:a}=t;await pn(),await S0(5e3);let n=a.match(/^\s*/)[0].length;return{text:a.slice(0,n)+"\u6A21\u62DF\uFF1A"+a.slice(n),from:t.from,to:t.to}}async translateList(t){let{text:a,from:n,to:r}=t;if(await pn(),!hs())throw new Error("\u6A21\u62DF\u9519\u8BEF");return a.length===0?{from:n,to:r,text:[""]}:{from:n,to:r,text:a.map(i=>{let o=i.match(/^\s*/)[0].length;return i.slice(0,o)+"\u6A21\u62DF\uFF1A"+i.slice(o)})}}};var ys=[["auto","auto"],["zh-CN","zh"],["en","en"],["ja","ja"],["de","de"],["fr","fr"],["it","it"],["es","es"],["nl","nl"],["pl","pl"],["pt","pt"],["ru","ru"]],Es=new Map(ys),bs=new Map(ys.map(([u,e])=>[e,u])),q0=class extends uu{constructor(t,a){super(t,a);this.apikey="";this.codename=q0.DEFAULT_CODENAME;this.isSupportList=!1;this.maxTextGroupLength=1;if(!t||!t.apikey)throw new Error("apikey are required");this.apikey=t.apikey,t.codename&&(this.codename=t.codename)}static getAllProps(){return[...q0.getProps(),{type:"password",name:"apikey",required:!0}]}static getProps(){return[{type:"select",name:"codename",label:"translationEngine",default:q0.DEFAULT_CODENAME,required:!1,options:[{label:"translationServices.deepl",value:"deepl"},{label:"translationServices.youdao",value:"youdao"},{label:"translationServices.tencent",value:"tencent"},{label:"translationServices.aliyun",value:"aliyun"},{label:"translationServices.baidu",value:"baidu"},{label:"translationServices.caiyun",value:"caiyun"},{label:"translationServices.wechat",value:"wechat"},{label:"translationServices.azure",value:"azure"},{label:"translationServices.ibm",value:"ibm"},{label:"translationServices.aws",value:"aws"},{label:"translationServices.google",value:"google"}]}]}async translate(t){let{text:a,from:n,to:r}=t,i=await X({url:`https://api.openl.club/services/${this.codename}/translate`,headers:{"content-type":"application/json"},method:"POST",body:JSON.stringify({apikey:this.apikey,text:a,source_lang:Es.get(n)||"auto",target_lang:Es.get(r)})});if(i.status){let o=i;return{text:o.result,from:bs.get(o.source_lang),to:bs.get(o.target_lang)}}else throw new Error(i.msg)}},qt=q0;qt.DEFAULT_CODENAME="deepl";var Ut=qt;var Ds=[["auto",""],["zh-CN","ZH"],["zh-TW","ZH"],["en","EN"],["de","DE"],["fr","FR"],["it","IT"],["ja","JA"],["es","ES"],["nl","NL"],["pl","PL"],["pt","PT"],["ru","RU"]],xs=new Map(Ds),Yc=new Map(Ds.map(([u,e])=>[e,u])),wn=class extends uu{constructor(t,a){super(t,a);this.authKey="";this.maxTextGroupLength=10;this.maxTextLength=1200;if(!t||!t.authKey)throw new Error("authKey are required");this.authKey=t.authKey}static getAllProps(){return[{name:"authKey",required:!0,type:"password"}]}async translateList(t){let{from:a,to:n,text:r}=t,i={source_lang:xs.get(a),target_lang:xs.get(n)},o=new URLSearchParams(i);r.forEach(g=>{o.append("text",g)});let s=o.toString(),c="https://api-free.deepl.com/v2/translate";this.authKey.includes(":fx")||(c="https://api.deepl.com/v2/translate");let l=await X({url:c,method:"POST",body:s,headers:{Authorization:"DeepL-Auth-Key "+this.authKey,"content-type":"application/x-www-form-urlencoded"}}),{translations:m}=l;return{text:m.map(g=>g.text),from:m[0]&&Yc.get(m[0].detected_source_language)||a,to:n}}},Cs=wn;var Xc=["authorization","content-type","content-length","user-agent","presigned-expires","expect"],mu={algorithm:"HMAC-SHA256",v4Identifier:"request",dateHeader:"X-Date",tokenHeader:"X-Security-Token",contentSha256Header:"X-Content-Sha256",notSignBody:"X-NotSignBody",kDatePrefix:"",credential:"X-Credential",algorithmKey:"X-Algorithm",signHeadersKey:"X-SignedHeaders",signQueriesKey:"X-SignedQueries",signatureKey:"X-Signature"},Tn=u=>{try{return encodeURIComponent(u).replace(/[^A-Za-z0-9_.~\-%]+/g,escape).replace(/[*]/g,e=>`%${e.charCodeAt(0).toString(16).toUpperCase()}`)}catch{return""}},vn=u=>Object.keys(u).map(e=>{let t=u[e];if(typeof t>"u"||t===null)return;let a=Tn(e);if(!!a)return Array.isArray(t)?`${a}=${t.map(Tn).sort().join(`&${a}=`)}`:`${a}=${Tn(t)}`}).filter(e=>e).join("&"),U0=class{constructor(e,t,a){this.request=e,this.request.headers=e.headers||{},this.serviceName=t,a=a||{},this.bodySha256=a.bodySha256,this.request.params=this.sortParams(this.request.params)}sortParams(e){let t={};return e&&Object.keys(e).filter(a=>{let n=e[a];return typeof n<"u"&&n!==null}).sort().map(a=>{t[a]=e[a]}),t}async addAuthorization(e,t){let a=this.getDateTime(t);await this.addHeaders(e,a),this.request.headers.Authorization=await this.authorization(e,a)}async authorization(e,t){let a=[],n=this.credentialString(t);return a.push(`${mu.algorithm} Credential=${e.accessKeyId}/${n}`),a.push(`SignedHeaders=${this.signedHeaders()}`),a.push(`Signature=${await this.signature(e,t)}`),a.join(", ")}async getSignUrl(e,t){let a=this.getDateTime(t),n={...this.request.params},r=this.request.params,i=this.request.headers;e.sessionToken&&(n[mu.tokenHeader]=e.sessionToken),n[mu.dateHeader]=a,n[mu.notSignBody]="",n[mu.credential]=`${e.accessKeyId}/${this.credentialString(a)}`,n[mu.algorithmKey]=mu.algorithm,n[mu.signHeadersKey]="",n[mu.signQueriesKey]=void 0,n[mu.signatureKey]=void 0,n=this.sortParams(n),this.request.params=n,this.request.headers={};let o=await this.signature(e,a);return this.request.params=r,this.request.headers=i,n[mu.signQueriesKey]=Object.keys(n).sort().join(";"),n[mu.signatureKey]=o,vn(n)}getDateTime(e){return this.iso8601(e).replace(/[:\-]|\.\d{3}/g,"")}async addHeaders(e,t){if(this.request.headers[mu.dateHeader]=t,e.sessionToken&&(this.request.headers[mu.tokenHeader]=e.sessionToken),this.request.body){let a=this.request.body;this.request.headers[mu.contentSha256Header]=await ue(a)}}async signature(e,t){let a=await this.getSigningKey(e,t.substr(0,8),this.request.region,this.serviceName);return It(await we(await this.stringToSign(t),a))}async stringToSign(e){let t=[];t.push(mu.algorithm),t.push(e),t.push(this.credentialString(e));let a=await this.canonicalString();return t.push(await this.hexEncodedHash(a)),t.join(`
`)}async canonicalString(){let e=[],t=this.request.pathname||"/";e.push(this.request.method.toUpperCase()),e.push(t);let a=vn(this.request.params)||"";return e.push(a),e.push(`${this.canonicalHeaders()}
`),e.push(this.signedHeaders()),e.push(await this.hexEncodedBodyHash()),e.join(`
`)}canonicalHeaders(){let e=[];Object.keys(this.request.headers).forEach(a=>{e.push([a,this.request.headers[a]])}),e.sort((a,n)=>a[0].toLowerCase()<n[0].toLowerCase()?-1:1);let t=[];return e.forEach(a=>{let n=a[0].toLowerCase();if(this.isSignableHeader(n)){let r=a[1];if(typeof r>"u"||r===null||typeof r.toString!="function")throw new Error(`Header ${n} contains invalid value`);t.push(`${n}:${this.canonicalHeaderValues(r.toString())}`)}}),t.join(`
`)}canonicalHeaderValues(e){return e.replace(/\s+/g," ").replace(/^\s+|\s+$/g,"")}signedHeaders(){let e=[];return Object.keys(this.request.headers).forEach(t=>{t=t.toLowerCase(),this.isSignableHeader(t)&&e.push(t)}),e.sort().join(";")}signedQueries(){return Object.keys(this.request.params).join(";")}credentialString(e){return this.createScope(e.substr(0,8),this.request.region,this.serviceName)}async hexEncodedHash(e){return await ue(e)}async hexEncodedBodyHash(){return this.request.headers[mu.contentSha256Header]?this.request.headers[mu.contentSha256Header]:this.request.body?await this.hexEncodedHash(vn(this.request.body)):await this.hexEncodedHash("")}isSignableHeader(e){return Xc.indexOf(e)<0}iso8601(e){return e===void 0&&(e=new Date),e.toISOString().replace(/\.\d{3}Z$/,"Z")}async getSigningKey(e,t,a,n){let r=await we(t,`${mu.kDatePrefix}${e.secretKey}`),i=await we(a,r),o=await we(n,i);return we(mu.v4Identifier,o)}createScope(e,t,a){return[e.substr(0,8),t,a,mu.v4Identifier].join("/")}};var As=[["af","af"],["am","am"],["ar","ar"],["az","az"],["be","be"],["bg","bg"],["bn","bn"],["bs","bs"],["ca","ca"],["co","co"],["cs","cs"],["cy","cy"],["da","da"],["de","de"],["el","el"],["en","en"],["eo","eo"],["es","es"],["et","et"],["eu","eu"],["fa","fa"],["fi","fi"],["fj","fj"],["fr","fr"],["fy","fy"],["ga","ga"],["gd","gd"],["gl","gl"],["gu","gu"],["ha","ha"],["he","he"],["hi","hi"],["hr","hr"],["ht","ht"],["hu","hu"],["hy","hy"],["id","id"],["ig","ig"],["is","is"],["it","it"],["ja","ja"],["ka","ka"],["kk","kk"],["km","km"],["kn","kn"],["ko","ko"],["ku","ku"],["ky","ky"],["la","la"],["lb","lb"],["lo","lo"],["lt","lt"],["lv","lv"],["mg","mg"],["mi","mi"],["mk","mk"],["ml","ml"],["mn","mn"],["mr","mr"],["ms","ms"],["mt","mt"],["my","my"],["ne","ne"],["nl","nl"],["no","no"],["ny","ny"],["pa","pa"],["pl","pl"],["ps","ps"],["pt","pt"],["ro","ro"],["ru","ru"],["sd","sd"],["si","si"],["sk","sk"],["sl","sl"],["sm","sm"],["sn","sn"],["so","so"],["sq","sq"],["sr","sr"],["st","st"],["su","su"],["sv","sv"],["sw","sw"],["ta","ta"],["te","te"],["tg","tg"],["th","th"],["tn","tn"],["to","to"],["tr","tr"],["ty","ty"],["ug","ug"],["uk","uk"],["ur","ur"],["uz","uz"],["vi","vi"],["xh","xh"],["yi","yi"],["yo","yo"],["zh-CN","zh"],["zh-TW","zh-Hans"],["zu","zu"]],ks=new Map(As),Qc=new Map(As.map(([u,e])=>[e,u])),Fn=class extends uu{constructor(t,a){super(t,a);this.accessKeyId="";this.secretAccessKey="";this.maxTextGroupLength=8;if(!t||!t.accessKeyId||!t.secretAccessKey)throw new Error("accessKeyId and secretAccessKey are required");this.accessKeyId=t.accessKeyId,this.secretAccessKey=t.secretAccessKey}static getAllProps(){return[{name:"accessKeyId",required:!0,type:"text"},{name:"secretAccessKey",required:!0,type:"password"}]}async translateList(t){let{text:a,from:n,to:r}=t,i=ks.get(n),o={TargetLanguage:ks.get(r)||r,TextList:a};i&&(o.SourceLanguage=i);let s={region:"cn-north-1",method:"POST",params:{Action:"TranslateText",Version:"2020-06-01"},pathname:"/",headers:{"Content-Type":"application/json",host:"open.volcengineapi.com"},body:JSON.stringify(o)},c=new U0(s,"translate");await c.addAuthorization({accessKeyId:this.accessKeyId,secretKey:this.secretAccessKey});let l=new URLSearchParams(s.params),m=await X({url:"https://open.volcengineapi.com"+s.pathname+"?"+l.toString(),headers:c.request.headers,method:s.method,body:s.body});if(m.TranslationList){let d=m.TranslationList.map(p=>p.Translation),g=n;return m.TranslationList.length>0&&m.TranslationList[0].DetectedSourceLanguage&&(g=Qc.get(m.TranslationList[0].DetectedSourceLanguage)||n),{text:d,from:g,to:r}}else{let d=m.ResponseMetaData.Error;throw new vu(d.Code,d.Message)}}},ws=Fn;var Ts=[["auto","detect"],["af","af"],["am","am"],["ar","ar"],["az","az"],["be","be"],["bg","bg"],["bn","bn"],["bs","bs"],["ca","ca"],["co","co"],["cs","cs"],["cy","cy"],["da","da"],["de","de"],["el","el"],["en","en"],["eo","eo"],["es","es"],["et","et"],["eu","eu"],["fa","fa"],["fi","fi"],["fj","fj"],["fr","fr"],["fy","fy"],["ga","ga"],["gd","gd"],["gl","gl"],["gu","gu"],["ha","ha"],["he","he"],["hi","hi"],["hr","hr"],["ht","ht"],["hu","hu"],["hy","hy"],["id","id"],["ig","ig"],["is","is"],["it","it"],["ja","ja"],["ka","ka"],["kk","kk"],["km","km"],["kn","kn"],["ko","ko"],["ku","ku"],["ky","ky"],["la","la"],["lb","lb"],["lo","lo"],["lt","lt"],["lv","lv"],["mg","mg"],["mi","mi"],["mk","mk"],["ml","ml"],["mn","mn"],["mr","mr"],["ms","ms"],["mt","mt"],["my","my"],["ne","ne"],["nl","nl"],["no","no"],["ny","ny"],["pa","pa"],["pl","pl"],["ps","ps"],["pt","pt"],["ro","ro"],["ru","ru"],["sd","sd"],["si","si"],["sk","sk"],["sl","sl"],["sm","sm"],["sn","sn"],["so","so"],["sq","sq"],["sr","sr"],["st","st"],["su","su"],["sv","sv"],["sw","sw"],["ta","ta"],["te","te"],["tg","tg"],["th","th"],["tn","tn"],["to","to"],["tr","tr"],["ty","ty"],["ug","ug"],["uk","uk"],["ur","ur"],["uz","uz"],["vi","vi"],["xh","xh"],["yi","yi"],["yo","yo"],["zh-CN","zh"],["zh-TW","zh-Hans"],["zu","zu"]],Zc=new Map(Ts),ug=new Map(Ts.map(([u,e])=>[e,u])),W0=class extends uu{constructor(){super(...arguments);this.maxTextGroupLength=50;this.isSupportList=!1}async translate(t){let{text:a,from:n,to:r}=t,o={source_language:Zc.get(n)||"detect",target_language:"zh",text:a},s=await X({url:"https://translate.volcengine.com/crx/translate/v1/",method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)});if(s.base_resp&&s.base_resp.status_code===0){let c=s.translation,l=n;return s.detected_language&&(l=ug.get(s.detected_language)||n),{text:c,from:l,to:r}}else{let c=s.base_resp;throw new vu(c.status_code.toString(),c.status_message)}}};var eg=[["auto","auto"],["zh-CN","ZH"],["zh-TW","ZH"],["de","DE"],["en","EN"],["es","ES"],["fr","FR"],["it","IT"],["ja","JA"],["pt","PT"],["ru","RU"],["tr","tr"]],vs=new Map(eg),V0=class extends uu{constructor(t,a){super(t,a);this.url="";this.isSupportList=!1;this.maxTextGroupLength=1;if(!t||!t.url)throw new Error("deeplx custom url are required, please check your settings.");this.url=t.url}static getAllProps(){return[{name:"url",required:!0,type:"text"}]}async translate(t){let{text:a,from:n,to:r}=t,o=await X({url:this.url,headers:{"content-type":"application/json"},method:"POST",body:JSON.stringify({source_lang:vs.get(n)||n,target_lang:vs.get(r)||r,text:a})});if(o.code===200)return{text:o.data,from:n,to:r};throw new Error(o.message||o.message||"API Error")}};var Sn="https://{s}bing.com",_s=Sn+"/translator",tg=Sn+"/ttranslatev3",ag=Sn+"/tspellcheckv3",Wt="bingGlobalConfig",Ms=[["auto","auto-detect"],["ar","ar"],["ga","ga"],["et","et"],["bg","bg"],["is","is"],["pl","pl"],["bs","bs-Latn"],["fa","fa"],["da","da"],["de","de"],["ru","ru"],["fr","fr"],["zh-TW","zh-Hant"],["fil","fil"],["fj","fj"],["fi","fi"],["gu","gu"],["kk","kk"],["ht","ht"],["ko","ko"],["nl","nl"],["ca","ca"],["zh-CN","zh-Hans"],["cs","cs"],["kn","kn"],["otq","otq"],["tlh","tlh"],["hr","hr"],["lv","lv"],["lt","lt"],["ro","ro"],["mg","mg"],["mt","mt"],["mr","mr"],["ml","ml"],["ms","ms"],["mi","mi"],["bn","bn-BD"],["hmn","mww"],["af","af"],["pa","pa"],["pt","pt"],["ps","ps"],["ja","ja"],["sv","sv"],["sm","sm"],["sr-Latn","sr-Latn"],["sr-Cyrl","sr-Cyrl"],["no","nb"],["sk","sk"],["sl","sl"],["sw","sw"],["ty","ty"],["te","te"],["ta","ta"],["th","th"],["to","to"],["tr","tr"],["cy","cy"],["ur","ur"],["uk","uk"],["es","es"],["he","iw"],["el","el"],["hu","hu"],["it","it"],["hi","hi"],["id","id"],["en","en"],["yua","yua"],["yue","yua"],["vi","vi"],["ku","ku"],["km","kmr"]],Fs=new Map(Ms),Ss=new Map(Ms.map(([u,e])=>[e,u])),Bs=1e3,te,f0;function Bn(u,e){return u.replace("{s}",e?e+".":"")}async function ng(){if(!te){let t=await V.storage.local.get(Wt);return t&&(te=t[Wt]),!0}let{tokenTs:u,tokenExpiryInterval:e}=te;return Date.now()-u>e}async function Ls(){let u,e,t,a,n,r,i,o,s,c;try{let l=Bn(_s,u),m=await X({url:l,responseType:"raw"}),{body:d,headers:g,url:p}=m;u=p.match(/^https?:\/\/(\w+)\.bing\.com/)[1],c=g["set-cookie"],e=d.match(/IG:"([^"]+)"/)[1],t=d.match(/data-iid="([^"]+)"/)[1],[n,a,r,i,o,s]=JSON.parse(d.match(/params_RichTranslateHelper\s?=\s?([^\]]+\])/)[1])}catch(l){throw console.error("failed to fetch global config",l),l}return te={subdomain:u,IG:e,IID:t,key:n,token:a,tokenTs:n,tokenExpiryInterval:r,isVertical:i,frontDoorBotClassification:o,isSignedInOrCorporateUser:s,cookie:c,count:0},await V.storage.local.set({[Wt]:te}),te}function rg(u){let{IG:e,IID:t,subdomain:a,isVertical:n}=te;return Bn(u?ag:tg,a)+"?isVertical="+ +n+(e&&e.length?"&IG="+e:"")+(t&&t.length?"&IID="+t+"."+te.count++:"")}function og(u,e,t,a){let{token:n,key:r}=te,i={fromLang:t,text:e,token:n,key:r};return!u&&a&&(i.to=a),i}async function Ps(u,e,t){if(!u||!(u=u.trim()))return;if(u.length>Bs)throw new Error(`The supported maximum length of text is ${Bs}. Please shorten the text.`);f0||(f0=Ls()),await f0,await ng()&&(f0=Ls(),await f0),e=e||"auto",t=t||"zh-CN",e=Fs.get(e)||e,t=Fs.get(t)||t;let n=rg(!1),r=og(!1,u,e,t==="auto-detect"?"zh-Hans":t),i={referer:Bn(_s,te.subdomain),"content-type":"application/x-www-form-urlencoded"},o=new URLSearchParams(r),s=n,c=o.toString(),l=await X({url:s,headers:i,method:"POST",body:c});if(l.ShowCaptcha||l.StatusCode===401||l.statusCode){if(te=null,f0=null,await V.storage.local.remove(Wt),l.ShowCaptcha)throw new Error(`
      Sorry that bing translator seems to be asking for the captcha,
      Please take care not to request too frequently.
      The response code is ${l.StatusCode}.
    `);if(l.StatusCode===401)throw new Error(`
      Max count of translation exceeded. Please try it again later.
      The response code is 401.
    `);if(l.statusCode)throw new Error(`Something went wrong! The response is ${JSON.stringify(l)}.`)}let m=l[0].translations[0],d=l[0].detectedLanguage;return{text:m.text,from:Ss.get(d.language),to:Ss.get(m.to)}}var K0=class extends uu{constructor(t,a){super(t,a);this.isSupportList=!1;this.maxTextLength=1e3}async translate(t){let{text:a,from:n,to:r}=t;return a?await Ps(a,n,r):{...t}}};var zs=[["auto","auto"],["zh-CN","zh"],["en","en"],["yue","yue"],["wyw","wyw"],["ja","jp"],["ko","kor"],["fr","fra"],["es","spa"],["th","th"],["ar","ara"],["ru","ru"],["pt","pt"],["de","de"],["it","it"],["el","el"],["nl","nl"],["pl","pl"],["bg","bul"],["et","est"],["da","dan"],["fi","fin"],["cs","cs"],["ro","rom"],["sl","slo"],["sv","swe"],["hu","hu"],["zh-TW","cht"],["vi","vie"]],Rs=new Map(zs),ig=new Map(zs.map(([u,e])=>[e,u])),Ln=class extends uu{constructor(t,a){super(t,a);this.endpoint="https://api.fanyi.baidu.com/api/trans/vip/translate";this.appid="";this.key="";this.isSupportList=!1;if(!t||!t.appid||!t.key)throw new Error("appid and key are required");this.appid=t.appid,this.key=t.key}static getAllProps(){return[{name:"appid",required:!0,type:"text"},{name:"key",required:!0,type:"password"}]}async translate(t){let a=Date.now().toString(),{endpoint:n}=this,{appid:r,key:i}=this,{text:o,from:s,to:c}=t,l=new URLSearchParams({from:Rs.get(s),to:Rs.get(c),q:o,salt:a,appid:r,sign:n0(r+o+a+i)}),m=new URL(n);m.search=l.toString();let d=await X({url:m.toString()});if(d.error_code)throw console.error(new Error("[Baidu service]"+d.error_msg)),new vu("API_SERVER_ERROR",d.error_msg);let{trans_result:g,from:p}=d,y=g.map(({dst:f})=>f);return{from:ig.get(p),to:c,text:y.join(`
`)}}},js=Ln;var sg=[["auto","auto"],["zh-CN","zh"],["en","en"],["ja","ja"]],Ns=new Map(sg),_n=class extends uu{constructor(t,a){super(t,a);this.token="";if(!t||!t.token)throw new Error("token are required");this.token=t.token}static getAllProps(){return[{name:"token",required:!0,type:"password"}]}async translateList(t){let{text:a,from:n,to:r}=t;n==="auto"&&(n=await Qu({text:a.join(" ")}));let i=a;return{text:(await X({url:"https://api.interpreter.caiyunai.com/v1/translator",headers:{"content-type":"application/json","x-authorization":"token "+this.token},method:"POST",body:JSON.stringify({source:i,trans_type:`${Ns.get(n)}2${Ns.get(r)}`})})).target,from:n,to:r}}},Os=_n;var Hs=[["auto","auto"],["en","en"],["ru","ru"],["pt","pt"],["es","es"],["zh-CN","zh-CHS"],["ja","ja"],["ko","ko"],["fr","fr"],["ar","ar"],["id","id"],["vi","vi"],["it","it"]],Is=new Map(Hs),lg=new Map(Hs.map(([u,e])=>[e,u]));function cg(u){let e=u.length;return e<=20?u:u.substring(0,10)+e+u.substring(e-10,e)}var Mn=class extends uu{constructor(t,a){super(t,a);this.isSupportList=!1;this.appId="";this.appSecret="";if(!t||!t.appId||!t.appSecret)throw new Error("appId and appSecret are required");this.appId=t.appId,this.appSecret=t.appSecret}static getAllProps(){return[{name:"appId",required:!0,type:"text"},{name:"appSecret",required:!0,type:"password"}]}async translate(t){let{text:a,from:n,to:r}=t,i=new Date().getTime(),o=Math.round(new Date().getTime()/1e3),s=this.appId+cg(a)+i+o+this.appSecret,c=await ue(s),l={q:a,appKey:this.appId,salt:i.toString(),from:Is.get(n),to:Is.get(r),sign:c,signType:"v3",curtime:o.toString()},m=new URLSearchParams(l),g=await X({url:"https://openapi.youdao.com/api",method:"POST",body:m.toString(),headers:{"Content-Type":"application/x-www-form-urlencoded"}}),p=g.l,[y,b]=p.split("2");return{text:g.translation.join(`
`),from:lg.get(y),to:r}}},$s=Mn;var p0={mock:{class:m0,name:"Mock",homepage:"https://www.google.com"},mock2:{class:m0,name:"Mock2",homepage:"https://www.google.com"},google:{class:qe,name:"Google",homepage:"https://translate.google.com/"},transmart:{class:Ve,name:"Transmart",homepage:"https://transmart.qq.com/"},deepl:{class:Cs,name:"DeepL",homepage:"https://www.deepl.com/translator",docUrl:"https://hcfy.app/docs/services/deepl"},volc:{class:ws,name:"Volc",homepage:"https://www.volcengine.com/",docUrl:"https://hcfy.app/docs/services/hs-api"},volcAlpha:{class:W0,name:"Volc Alpha",alpha:!0,homepage:"https://www.volcengine.com/"},bing:{class:K0,name:"Bing",homepage:"https://www.bing.com/translator"},tencent:{class:$e,name:"Tencent",homepage:"https://fanyi.qq.com/",docUrl:"https://hcfy.app/docs/services/qq-api"},baidu:{class:js,name:"Baidu",homepage:"https://fanyi.baidu.com/",docUrl:"https://hcfy.app/docs/services/baidu-api"},caiyun:{class:Os,name:"Caiyun",homepage:"https://fanyi.caiyunapp.com/",docUrl:"https://hcfy.app/docs/services/caiyun-api"},openl:{class:Ut,name:"Openl",homepage:"https://openl.club/",docUrl:"https://docs.openl.club/"},youdao:{class:$s,name:"Youdao",homepage:"https://fanyi.youdao.com/",docUrl:"https://hcfy.app/docs/services/youdao-api"},d:{class:Ue,name:"Deepl(Alpha) ",alpha:!0,homepage:"https://www.deepl.com/translator"},deeplx:{class:V0,name:"DeepLX(Alpha)",alpha:!0,homepage:"https://www.deepl.com/translator"}};function Pn(u,e){let t=p0[u],a=e.config.translationServices[u]||{},n=!0,r=t.class.getAllProps();if(r.length>0){let i=r.filter(o=>o.required);if(i.length>0){for(let o of i)if(!a[o.name]){n=!1;break}}}return{...t,id:u,selected:e.translationService===u,ok:n,config:a,props:t.class.getProps(),allProps:r}}var gg=Object.keys(p0),qs=u=>{let{config:e}=u,t=e.alpha,a=e.debug;return gg.filter(n=>{let r=p0[n];return n.startsWith("mock")?!!a:!r.alpha||t||n===u.translationService}).map(n=>Pn(n,u))};async function Rn(u,e){if(!u.text)return u;let t=await zn({sentences:[u]},e);if(t.sentences.length>0)return{...u,...t.sentences[0]};throw new vu("translateFailed","translate failed")}async function zn(u,e,t){if(!u.sentences.length)return{...u};let{config:a,translationService:n}=e,r=a.translationGeneralConfig,i=a.translationServices,o=n,s=i[o]||{};u.sentences=u.sentences.map(b=>b);let c=[],l={sentences:Array(u.sentences.length)},m=u.sentences.length,d=-1;if(a.cache)for(let b of u.sentences){d++;let f=o;o==="openl"&&(f=o+"-"+s.codename||Ut.DEFAULT_CODENAME);let E=null;try{E=await e0(Fi({originalText:b.text,from:b.from,to:b.to,service:f}),1e3)}catch(x){_.warn("query cache DB error, but it's ok",x)}if(E){let x={...b,text:E.translatedText};l.sentences[d]=x,t&&t(null,x,b)}else c.push(b)}else c.push(...u.sentences);let g=c.length;if(m-g>0&&_.debug(`use ${m-g} sentences from cache`),!c.length)return l;let p;try{p=new p0[o].class(s,r),await p.init()}catch(b){if(t)for(let f of c)t(b,null,f);throw b}let y=await p.multipleTranslate({sentences:c},(b,f,E)=>{if(t&&(t(b,f,E),!b&&f&&!o.startsWith("mock")&&a.cache)){let x=o;o==="openl"&&(x=o+"-"+s.codename||Ut.DEFAULT_CODENAME),a.cache&&e0(Si({translatedText:f.text,from:E.from,to:E.to,detectedFrom:f.from,key:n0(E.text),service:x}),3e3).catch(w=>{_.warn("set cache DB error",w)})}});for(let b of y.sentences){let f=l.sentences.findIndex(E=>!E);if(f===-1)throw new vu("translateFailed","can not match the result");l.sentences[f]=b}return l}var Us=["*://*/*","*","*://*"],Vs="immersive-translate-wildcard-placeholder.com";function jn(u,e){let t=[];if(!e||(e&&!Array.isArray(e)?t=[e]:t=e,t.length===0))return null;if(t.some(i=>Us.includes(i)))return u;let a=new URL(u);a.hash="",a.search="";let n=a.href,r=a.hostname;if(t&&t.length>0){let i=t.find(o=>{if(o===r)return!0;if(Us.includes(o))return!0;if(o.includes("*")){let s,c=o;o.includes("://")?s=o.split("://")[0]:(s="*",o="https://"+o);let l=o.replace(/\*/g,Vs),m=new URL(l),d=m.hostname,g=m.pathname;g==="/"&&(c.includes("/")||(g="/*"));let p=m.protocol,y=m.port,b=dg(s+":",Ws(d),Ws(g));if(b){let f=new URL(n);return f.port="",b.test(f.href)}else return!1}else{try{let s=new URL(o);return s.pathname==="/"&&!o.endsWith("/")?s.hostname===r:mg(n,o)}catch{}return!1}});if(i)return i}return null}function Ws(u){return u.replace(Vs,"*")}function dg(u,e,t){let a="^";return u==="*:"?a+="(http:|https:|file:)":a+=u,a+="//",e&&(e==="*"?a+="[^/]+?":(e.match(/^\*\./)&&(a+="[^/]*?",e=e.substring(2)),a+=e.replace(/\./g,"\\.").replace(/\*/g,"[^/]*"))),t?t==="*"||t==="/*"?a+="(/.*)?":(t.includes("*")&&(a+=t.replace(/\*/g,".*?")),a+="/?"):a+="/?",a+="$",new RegExp(a)}function Te(u,e){return jn(u,e)!==null}function mg(u,e){let t=new URL(u),a=new URL(e);return t.hostname===a.hostname&&t.pathname===a.pathname&&t.protocol===a.protocol&&t.port===a.port}async function me(u){let{url:e,config:t,state:a}=u,n=new URL(e),r="auto",{translationParagraphLanguagePattern:i,translationService:o,translationServices:s,translationTheme:c,translationThemePatterns:l,translationUrlPattern:m,targetLanguage:d,sourceLanguageUrlPattern:g}=t,p=Te(e,i.matches);if(!p){let fu=i.selectorMatches;p=Ea(fu)}let y=o,b=Object.keys(s);for(let fu of b){let wu=s[fu];if(Te(e,wu.matches)){y=fu;break}}let f=c,E=Object.keys(l);for(let fu of E){let wu=l[fu];if(Te(e,wu.matches)){f=fu;break}}let x=Te(e,m.matches),w=Te(e,m.excludeMatches);w||(w=Te(e,Cr));let B=Object.keys(g),T={};for(let fu of B){let wu=g[fu];if(wu&&wu.matches)for(let zu of wu.matches)T[zu]=fu}let G=Object.keys(T),hu=jn(e,G);hu&&(r=T[hu]??"auto");let L=d||"zh-CN",J=n.hostname,nu=await ue(J),U=n.pathname+n.search+n.hash,W=await ue(U),O=`https://${nu}.com/${W}`,su={targetLanguage:L,config:t,isDetectParagraphLanguage:p,translationService:y,translationTheme:f,isTranslateUrl:x,sourceLanguage:r,isTranslateExcludeUrl:w,rule:t.generalRule,url:e,encryptedUrl:O,state:a||{translationArea:t.translationArea,translationStartMode:t.translationStartMode,isAutoTranslate:!1,isNeedClean:!1}};su.translationService==="d"&&(t.immediateTranslationTextCount=0);let ie=t.rules,fe;globalThis.PDFViewerApplication?fe=ie.find(fu=>fu.isPdf):fe=ie.find(fu=>{let wu=Te(e,fu.matches);if(!wu){let zu=fu.selectorMatches;zu&&zu.length>0&&(wu=Ea(zu))}return wu});let se=t.generalRule;return fe&&(su.rule=st(se,fe)),su}var Kt="Original",Vt=[],$n=new Set,Nn=[],Gt=[],Gs=[],Jt=[],Ks=globalThis.location.href.split("#")[0],qn=0,Ou,fg=lt(Cg,300),pg=lt(Js,200),hg=Ju(),Eg=hg.PROD==="1",G0,J0,Y0="";async function s0(){Oe()==="Original"?await Ce():(Oe()==="Translated"||Oe()==="Error")&&De()}function wi(){let u=document.querySelectorAll(`[${Pe}="1"]`);for(let e of u)e.style.display="none"}function De(){bn(),Hn(),_u("Translating"),Y0&&(document.title=Y0),document.querySelectorAll("."+ju).forEach(a=>{a.remove()}),document.querySelectorAll("."+rt).forEach(a=>{a.remove()}),document.querySelectorAll("["+ia+"]").forEach(a=>{if(Eg)delete a[Eu];else{let r=Object.keys(a.dataset).filter(i=>i.startsWith(gu));for(let i of r)delete a.dataset[i]}a.removeAttribute(ia)}),_u("Original")}function bg(u,e){let t=!1,a=ma(u.elements),n=A0(u.elements);$n.add(u.id);let r=[];if(a){let o=new IntersectionObserver((s,c)=>{s.forEach(l=>{l.intersectionRatio>0&&(c.disconnect(),t||(t=!0,e(u)))})});Gt.push(o),r.push(o),o.observe(a)}if(n&&n!==a){let o=new IntersectionObserver((s,c)=>{s.forEach(l=>{l.intersectionRatio>0&&(c.disconnect(),t||(t=!0,e(u)))})});Gt.push(o),r.push(o),o.observe(n)}let i=ke(u.id);i&&(i.observers=r,I0(u.id,i))}function yg(u,e){if(u){let t=new ResizeObserver((a,n)=>{for(let r of a)r.contentRect.width>10&&(n.disconnect(),e(r.target))});t.observe(u),Gs.push(t)}}async function Js(u){let e=[...Jt];Jt=[];try{let t=[];for(let a of e){let n=hn(a,u);if(n.length===0)continue;let r=n;t.push(...r)}await Un(t,u)}catch(t){_.error(`translateNewDynamicNodes error: ${t.message}`)}}function On(u,e){$n.delete(u.id);let t=ke(u.id);t&&(t.observers&&t.observers.length>0&&t.observers.forEach(r=>{r.disconnect()}),t.observers=[],t.state="Translating",I0(u.id,t));let a=u.id;qn+=u.text.length;let n=Ar(u.elements);if(u.isPdf){let r=ma(u.elements),i=window.getComputedStyle(r),o=i.top,s=i.fontSize,c=u.targetContainer,l=document.createElement("span");n.length===1&&(l.style.fontSize=s),l.id=`${ju}-${a}`,l.style.top=o;let m=je(r,D0),d=n.reduce((g,p)=>{let y=je(p,D0);return y&&y<g?y:g},1e3);m&&m<10&&(m=10),l.style.left=`${m||10}px`,d<400?l.style.width="500px":l.style.width=`calc(100% - ${d}px)`,l.classList.add("notranslate",`${ju}`),c.appendChild(l)}else{let r=A0(u.elements),i="afterend";u.elements.length>0&&r&&(n.length===1?i="beforeend":Yu(u.elements[0],e.rule)||(i="beforeend"));let o=document.createElement("span");if(o.classList.add("notranslate",ju),o.id=`${ju}-${a}`,o.innerHTML=Xs(),i==="beforeend"){let s=Mr(r);s?s.appendChild(o):r.appendChild(o)}else if(i==="afterend")r.insertAdjacentElement(i,o);else throw new Error("not support position")}Vt.push(a),fg(e)}function xg(u,e){e.state.translationStartMode==="dynamic"&&qn>e.config.immediateTranslationTextCount?bg(u,t=>{On(t,e)}):On(u,e)}async function Ce(){if(Kt==="Translating")return;_u("Translating");let u=await X0(globalThis.location.href);_.debug("ctx",u),u.state.isNeedClean?De():Ou.state.isNeedClean=!0,u.rule.normalizeBody&&document.querySelector(u.rule.normalizeBody)&&(document.body=document.body.cloneNode(!0)),Li(()=>{qn=0,Ri(),Gt.forEach(e=>{e.disconnect()}),Gs.forEach(e=>{e.disconnect()}),Gt=[],$n.clear()}),_u("Translating");try{let e=hn(document.body,u);_.debug("detect containers",e),_u("Translating");let{rule:t}=u;e.length>0&&await Un(e,u),Ys(u).catch(a=>{_.error("translateTitle error:",a.name,a.message,a.details||"")}),kg(t,u),e.length===0&&_u("Translated")}catch(e){_u("Error"),_.error(e)}}async function X0(u){let e=await He();if(!Ou)Ou=await me({url:u,config:e});else{let t={url:u,config:e,state:Ou.state};Ou=await me(t)}return Ou}async function Rt(){Ou=await X0(globalThis.location.href),Ou.state.translationArea="body",await Ce()}async function zt(){Ou=await X0(globalThis.location.href),Ou.state.translationArea="body",Ou.state.translationStartMode="immediate",await Ce(),await Js(Ou)}async function Ys(u){let e=document.title;if(!e||e.includes(nt))return;Y0!==e&&(Y0=e);let t="auto";if(u.isDetectParagraphLanguage||(t=dn()),t==="auto"){let a=await Qu({text:e});if(Ft(a,u.targetLanguage))return}try{let a=await Rn({text:e,from:t,to:u.targetLanguage},u);a&&a.text&&(document.title=Y0+nt+a.text)}catch(a){throw a}}function Dg(u){let e=document.getElementById(ju+"-"+u);e&&(e.innerHTML=Xs())}function Xs(){return`<span class="${iu}-loading notranslate"></span>`}async function Un(u,e){let{rule:t}=e;Pr(u,t);let a=[];if(e.rule.isPdf)u.length>0&&(_u("Translating"),a=Ki(u,t).targetContainers);else{_u("Translating");let r=Wi(u,t),{hiddenElements:i}=r;for(let o of i)yg(o,()=>{Lr(o,Hu),Un([o],e)});_u("Translating")}let n=[];if(e.rule.isPdf?n=await Hi(document.body,u,e,a):(u=u.filter(r=>!Ru(r,t,!1)),n=await zi(document.body,u,e)),_u("Translating"),n.length===0){_u("Translated");return}_.debug("detect paragraphs",n);for(let r of n)xg(r,e);_u("Translated")}async function Qs(u){let e=ke(u);if(!e)throw new Error("paragraph not found");Dg(u);let t=await X0(globalThis.location.href),a=dn();t.isDetectParagraphLanguage&&(a="auto");let n={id:e.id,text:e.text,from:a,to:t.targetLanguage,url:t.encryptedUrl};try{let r=await Rn(n,t);In(null,r,n,t)}catch(r){In(r,null,n,t)}}function In(u,e,t,a){let n=ke(t.id);if(u||!e){u||(_.error("translate error",e),u=new Error("no response from server"));let r=t.id,i=document.getElementById(`${ju}-${r}`),o=u.message.replaceAll(`
`,"");o=o.replaceAll('"',"&quot;"),n&&(n.state="Error",I0(n.id,n));let s=`<span class="${iu}-error notranslate"> <span class="immersive-translate-tooltip" data-immersive-translate-tooltip-text="${o}"><button class="${iu}-clickable-button notranslate" title="${o}">\u2757</button></span> <button class="${iu}-clickable-button notranslate" data-${iu}-paragraph-id="${r}" data-${iu}-action="retry">\u{1F504}</button></span>`;i&&(i.innerHTML=s)}else{let r=ke(t.id);if(r){r.state="Translated",I0(r.id,r);let i=qi(r,e,a),o=e.id,s=document.getElementById(`${ju}-${o}`);s&&(s.innerHTML=i.html,document.querySelectorAll(`[${Re}="${o}"]`).forEach(l=>{tu(l,Pe,"1")}))}else _.error("paragraph not found",t.id)}}async function Cg(u){if(Vt.length===0)return Promise.resolve();let e=[...Vt];Vt=[];let t="auto";u.isDetectParagraphLanguage||(t=o0());let a={sentences:e.filter(r=>ke(r)).map(r=>{let i=ke(r);return{id:i.id,url:u.encryptedUrl,text:i.text,from:t,to:u.targetLanguage}})};if(a.sentences.length>0){_u("Translating");try{await zn(a,u,(r,i,o)=>{In(r,i,o,u)})}catch(r){_u("Error"),_.error("translateCurrentQueue error",r.name,r.message,r.details||" ");return}}_u("Translated")}function _u(u){Kt=u,vi(Kt)}function kg(u,e){Hn(),Nn=[],Jt=[];let t=u.inlineTags.concat(u.excludeTags).concat("#text","BR");G0=new MutationObserver(function(n){n.forEach(r=>{let i=globalThis.location.href;if(i.split("#")[0]!==Ks){Ks=i.split("#")[0],bn(),Hn(),setTimeout(()=>{_.debug("url changed, reinit page"),Yt()},u.urlChangeDelay);let s=new Event("urlChange");document.dispatchEvent(s);return}r.addedNodes.forEach(s=>{if(s.nodeType===Node.ELEMENT_NODE){let c=s;t.includes(c.nodeName)||c.classList.contains("notranslate")||wr(c,Nn)||(Jt.push(c),Nn.push(c),pg(e))}})})}),G0.observe(document.body,{childList:!0,subtree:!0});let a=document.querySelector("title");a&&(J0=new MutationObserver(function(n){n.length>0&&(n[0].target.text.includes(nt)||Ys(e).catch(i=>{_.error("translateTitle error:",i.name,i.message,i.details||"")}))}),J0.observe(a,{subtree:!0,characterData:!0,childList:!0}))}async function Yt(){let u=await X0(globalThis.location.href);_.debug("context",u),u.rule.urlChangeDelay&&await S0(u.rule.urlChangeDelay);let e=u.sourceLanguage;e==="auto"?(Mu()?e=await Qu({text:it(document.body).slice(0,1e3)}):e=await Ti(),e==="auto"&&(e=await Bi()),Ci(e)):Lt(e);let t=u.state.isAutoTranslate||u.isTranslateUrl||u.rule.isPdf;!t&&!u.isTranslateExcludeUrl&&(_.debug(`detect page language: ${e}`),Rr(e,u.config.translationLanguagePattern)&&(t=!0,_.debug(`match language pattern ${e}, auto translate`))),t?(Ou.state.isAutoTranslate=!0,await Ce()):_.debug("do not auto translate")}function Hn(){G0&&(G0.disconnect(),G0.takeRecords()),J0&&(J0.disconnect(),J0.takeRecords())}function Oe(){return Kt}function Zs(){document.addEventListener("click",u=>{let e=u.target,t=e.getAttribute("data-immersive-translate-action");if(t&&t==="retry"){let a=e.getAttribute("data-immersive-translate-paragraph-id");a&&Qs(Number(a))}})}function u4(u,e){return u.localeCompare(e,void 0,{numeric:!0,sensitivity:"base"})>=0}async function Xt(u){try{let e=new Date;_.debug("cron task start, next will run at",new Date(e.getTime()+u).toLocaleString()),await V.storage.local.set({[C0]:e.toISOString()}),await Ag()}catch(e){_.error("run cron task failed",e)}}async function e4(){let e=(await He()).interval;if(e){let t=await V.storage.local.get(C0);if(t&&t[C0]){let a=t[C0];if(Date.now()-new Date(a).getTime()<e){let n=new Date(new Date(a).getTime()+e);_.debug(`cron task not run, next will run at ${n}`);return}else Xt(e)}else Xt(e)}}async function Ag(){try{let u=await He(),e=await X({url:pr}),t=u.buildinConfigUpdatedAt,a=new Date(t),n=e.buildinConfigUpdatedAt,r=new Date(n),i=e.minVersion,o=V.runtime.getManifest().version;u4(o,i)?r>a?(await V.storage.local.set({buildinConfig:e}),_.info(`sync remote rules success, latest: ${new Date(n).toLocaleString()}`)):_.debug(`no need to sync rules, latest: ${a}`):_.info(`local version is too old, please update to ${i} or later`)}catch(u){_.error("sync rules error: ",u)}}function t4(){let u=["localhost",tt],e=["/dist/userscript/options/","/options/","/options"],t=globalThis.location.href,a=new URL(t),n=a.hostname,r=a.pathname;if(u.includes(n)&&e.includes(r)){let i=document.querySelector("meta[name=immersive-translate-options]");if(i&&i.getAttribute("content")==="true")return!0}return!1}async function n4(){if(!document.getElementById("immersive-translate-status")){_.error("Could not find status element");return}await a4("local"),await a4("sync"),wg();let e=document.getElementById("immersive-translate-page-ready");e&&setTimeout(()=>{e.value="true",e.dispatchEvent(new Event("change"))},100)}function wg(){let u=document.getElementById("immersive-translate-manifest");if(!u){_.error("Could not find manifest element");return}u.value=JSON.stringify(V.runtime.getManifest())}async function a4(u){let e=document.getElementById("immersive-translate-status"),t=document.getElementById(`immersive-translate-${u}-storage`);if(t){_.debug("init storage");let a=await V.storage[u].get(null);t.value=JSON.stringify(a),t.addEventListener("change",n=>{try{let r=JSON.parse(n.target.value);V.storage[u].set(r)}catch(r){_.error("save to storage error",r)}})}else{_.error(`Could not find storage ${u} element`),e.innerText="Could not find storage local input element";return}}async function r4(){let u=await He(),e=await me({config:u,url:globalThis.location.href});if(e.isTranslateExcludeUrl&&t4())_.debug("detect web options page"),n4();else if(Zs(),Mu()||Ai(),u.debug?_.setLevel("debug"):_.setLevel("info"),!e.isTranslateExcludeUrl){if(e.rule.isPdf){let n=!1;globalThis.PDFViewerApplication&&globalThis.PDFViewerApplication.initializedPromise.then(()=>{let r=globalThis.PDFViewerApplication;r.eventBus.on("pagesdestroy",()=>{De()}),r.eventBus.on("textlayerrendered",async()=>{n||(n=!0,await Yt())}),r.eventBus.on("fileinputchange",()=>{n=!1})})}else await Yt();e4()}}function o4(u,e){return[u,!u||u.endsWith("/")?"":"/",e,".json"].join("")}function i4(u,e){let t=u;return e&&Object.keys(e).forEach(a=>{let n=e[a],r=new RegExp("{"+a+"}","gm");t=t.replace(r,n.toString())}),t}function Wn(u,e,t){let a=u[e];if(!a)return t;let n=t.split("."),r="";do{r+=n.shift();let i=a[r];i!==void 0&&(typeof i=="object"||!n.length)?(a=i,r=""):n.length?r+=".":a=t}while(n.length);return a}var h0={},Tg={root:"",lang:"en",fallbackLang:"en"};function Vn(u,e){let t=Object.assign({},Tg,u);h0=e||h0;let[a,n]=pu(t.lang),[r,i]=pu(h0),[o,s]=pu(!1),c=m=>{if(r.hasOwnProperty(m))return;s(!1);let d=o4(t.root||"",m);t.getUrl&&(d=t.getUrl(t.root||"",m),fetch(d).then(g=>g.json()).then(g=>{h0[m]=g,i({...h0}),s(!0)}).catch(g=>{i({...h0}),s(!0)}))};return Xu(()=>{c(t.fallbackLang||"en"),c(a)},[a]),{lang:a,setLang:n,t:(m,d)=>{if(!r.hasOwnProperty(a))return m;let g=Wn(r,a,m);return g===m&&a!==t.fallbackLang&&(g=Wn(r,t.fallbackLang,m)),i4(g,d)},isReady:o}}var vg=0;function M(u,e,t,a,n){var r,i,o={};for(i in e)i=="ref"?r=e[i]:o[i]=e[i];var s={type:u,props:o,key:t,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--vg,__source:n,__self:a};if(typeof u=="function"&&(r=u.defaultProps))for(i in r)o[i]===void 0&&(o[i]=r[i]);return N.vnode&&N.vnode(s),s}var Gn=oo(null),Kn={root:"assets",lang:"en",fallbackLang:"en"},s4=u=>{let{t:e,setLang:t,lang:a,isReady:n}=Vn({root:u.root||Kn.root,lang:u.lang||Kn.lang,fallbackLang:u.fallbackLang||Kn.fallbackLang,getUrl:u.getUrl},u.translations);return M(Gn.Provider,{value:{t:e,setLang:t,lang:a,isReady:n},children:u.children})};function l4(u,e,t){let a=[];t||(t={}),t[e]||(t[e]={matches:[],excludeMatches:[]}),a=t[e].matches;let n=new Set(a);e==="auto"?n.delete(u):n.add(u);let r=Array.from(n);return{...t,[e]:{...t[e],matches:r}}}function c4(u,e=2e3){return t=>{let a,n=0;return r=>{++n==u&&(t(r),n=0),clearTimeout(a),a=setTimeout(()=>n=0,e)}}}function g4(u){let e;try{e=new URL(u)}catch{return!1}let t=e.pathname;return t.endsWith(".html")||t.endsWith(".htm")?!0:!(e.protocol!=="http:"&&e.protocol!=="https:"&&e.protocol!=="file:"&&e.protocol!=="data:")}function d4(u){let e=u.split(".");return e.length>2?(e[0]="*",e.join(".")):null}function m4(){return V.runtime.getManifest().version}function ve(u){let{items:e,maxWidth:t}=u;return t=t||128,M("select",{autoComplete:"off",class:"min-select",style:{maxWidth:`${t}px`},value:e.find(a=>a.selected)?.value,onChange:a=>{let n=a.target.value,r=e.find(i=>i.value===n);r&&r.onSelected(r)},children:e.map(a=>M("option",{value:a.value,selected:a.selected,children:a.label}))})}var Qt="DROP_DOWN_DEFAULT_VALUE";function Jn(u){let{showArrow:e,onSelected:t,className:a,menus:n,maxWidth:r}=u;a=a||"",e=e??!0,r=r||60;let i=Ta(null);return M("select",{ref:i,autoComplete:"off",class:`min-select ${e?"":"min-select-no-arrow"} ${a||""}`,value:Qt,style:{maxWidth:`${r}px`},onChange:o=>{o.preventDefault();let s=o.target.value;if(i.current&&s!==Qt){i.current.value=Qt,i.current?.dispatchEvent(new Event("change"));let c=n.find(l=>l.value===s);c&&t(c)}},children:[{value:Qt,label:u.label}].concat(n).map(o=>M("option",{value:o.value,children:o.label}))})}function Zt(){return va(Gn)}function Yn(u){let{size:e,field:t,root:a,onChange:n,value:r}=u;r=r||t.default||"";let{t:i}=Zt();return t.type==="select"?M("div",{class:"flex justify-between mb-2",children:[M("label",{class:"inline-block",children:[t.label?i(t.label):t.name,"\uFF1A"]}),M(ve,{root:a,size:e,items:t.options.map(o=>({label:`${o.label?i(o.label):o.value}`,value:r,selected:r===o.value,onSelected:()=>{n(o.value)}}))})]}):null}var Fg=m4();function Xn(u){let{onUserConfigChange:e,pageStatus:t,config:a,onTranslateTheWholePage:n,ontranslateToThePageEndImmediately:r,onSetPageLanguage:i,root:o,onToggleTranslate:s,onTranslateLocalPdfFile:c,onTranslatePdf:l,onRestorePage:m,ctx:d,currentUrl:g,currentLang:p,onClose:y,onTranslatePage:b}=u,f=e,[E,x]=pu(""),[w,B]=pu(""),{t:T}=Zt(),G=null,hu=null,L=null,J=null,nu=null,U=null,W=null,O=null,su=null;if(a){let{translationService:C,translationServices:S,translationUrlPattern:F}=a;if(p0[C]&&(U=Pn(C,d)),S&&S[C]?su=S[C]||{}:su={},g&&g4(g)){W=new URL(g),O=d4(W.hostname);let{matches:H,excludeMatches:$}=F;hu=H.includes(O),G=H.includes(W.hostname),J=$.includes(O),L=$.includes(W.hostname)}}if(a&&p!=="auto"){let{translationLanguagePattern:C}=a,{matches:S}=C;S.includes(p)?nu=!0:nu=!1}let ie=C=>{C.preventDefault(),V.runtime.openOptionsPage(),y()},fe=C=>{f(S=>(setTimeout(()=>{x("")},3e3),S.alpha?x("Success disable alpha!"):x("Success enable alpha!"),{...S,alpha:!S.alpha}))},se=(C,S,F,H)=>{if(C==="default"){f(au=>{let q={...au.translationUrlPattern};return{...au,translationUrlPattern:{...au.translationUrlPattern,matches:he([W?.hostname,O,g],q.matches),excludeMatches:he([W?.hostname,O,g],q.excludeMatches)}}});return}let $=C,lu=$==="matches"?"excludeMatches":"matches";W&&f(au=>{let q={...au.translationUrlPattern};return q[$]=ya(S,q[$]),H.length>0&&(q[$]=he(H,q[$])),q[lu]=he(F,q[lu]),{...au,translationUrlPattern:{...au.translationUrlPattern,...q}}}),$==="matches"&&t==="Original"&&setTimeout(()=>{b(),y()},100)},fu=C=>{if(!C){f(H=>{let $={...H.translationLanguagePattern};return{...H,translationLanguagePattern:{...H.translationLanguagePattern,matches:he(p,$.matches),excludeMatches:he(p,$.excludeMatches)}}});return}let S=C,F=S==="matches"?"excludeMatches":"matches";p&&f(H=>{let $={...H.translationLanguagePattern};return $[S]=ya(p,$[S]),$[F]=he(p,$[F]),{...H,translationLanguagePattern:{...H.translationLanguagePattern,...$}}}),S==="matches"&&t==="Original"&&setTimeout(()=>{b(),y()},100)},wu=W?.pathname.toLowerCase().endsWith(".pdf"),zu=T("translate");t==="Translated"?zu=T("show-original"):t==="Original"?wu?zu=T("translate-pdf"):zu=T("translate"):zu=T(t);let D=[];d&&(D=qs(d));let I=C=>{C.preventDefault(),y()};return M("div",{class:"p-3",children:[M("div",{class:"text-sm",children:[M("div",{class:"flex justify-between mb-2",children:[M("label",{class:"inline-block",children:[T("sourceLanguage"),"\uFF1A"]}),M(ve,{items:Qe.map(C=>({label:T(`languages.${C}`),value:C,selected:C===p,onSelected:S=>{i(S.value)}}))})]}),a&&a.targetLanguage&&M("div",{class:"flex justify-between mb-2",children:[M("label",{class:"inline-block",children:[T("target"),"\uFF1A"]}),M(ve,{items:Qe.filter(C=>C!=="auto").map(C=>({label:T(`languages.${C}`),value:C,selected:C===a.targetLanguage,onSelected:S=>{f(F=>({...F,targetLanguage:S.value}))}}))})]}),U&&D.length>0&&M(ne,{children:[M("div",{class:"flex justify-between mb-2",children:[M("label",{class:"inline-block",children:[T("service"),"\uFF1A"]}),M(ve,{items:D.map(C=>({label:`${T("translationServices."+C.id)}${C.ok?"":" "+T("needAction")}`,value:C.id,selected:C.selected,onSelected:S=>{let F=D.find(H=>H.id===S.value);F.ok?(f(H=>({...H,translationService:F.id})),F.props.length===0?setTimeout(()=>{b()},1):setTimeout(()=>{m()},1)):(f(H=>({...H,translationService:F.id})),setTimeout(()=>{m()},1),setTimeout(()=>{V.runtime.openOptionsPage(),y()},100))}}))})]}),su&&U.props.length>0&&U.props.map((C,S)=>M("div",{class:"pl-4 text-sm",children:M(Yn,{root:o,size:"sm",field:C,value:su[C.name],onChange:F=>{f(H=>{let $=H.translationServices||{},lu=$[U.id]||{};return setTimeout(()=>{m()},1),{...H,translationServices:{...$,[U.id]:{...lu,[C.name]:F}}}})}},"field-"+S)}))]}),W&&M("div",{class:"flex justify-between mb-2",children:[M("label",{class:"inline-block",children:T("forThisSite")}),M(ve,{items:[{label:T("default"),value:"default",selected:G===!1&&L===!1&&hu&&J,onSelected:()=>{se("default",W.hostname,[],[])}},{label:T("alwaysTranslateSomeSite",{hostname:W.hostname}),value:"matches",selected:G,onSelected:C=>{se(C.value,W.hostname,[W.hostname,O],[O])}},{label:T("neverTranslateSomeSite",{hostname:W.hostname}),value:"excludeMatches",selected:L,onSelected:C=>{se(C.value,W.hostname,[W.hostname,O],[O])}},O&&{label:T("alwaysTranslateSomeSite",{hostname:O}),value:"matchesWild",selected:hu,onSelected:()=>{se("matches",O,[W.hostname,O],[W.hostname])}},O&&{label:T("neverTranslateSomeSite",{hostname:O}),value:"excludeMatchesWild",selected:J,onSelected:()=>{se("excludeMatches",O,[W.hostname,O],[W.hostname])}}].filter(Boolean)})]})]}),M("div",{class:"",children:M("button",{class:"py-2 mt-1 mb-2 main-button ",onClick:()=>{wu?l&&l():s()},"aria-busy":t==="Translating",disabled:t==="Translating",children:zu})}),M("div",{class:"flex justify-between",children:[p!=="auto"?M("label",{for:"alwaysTranslateThisLanugage",class:"text-sm",children:[M("input",{type:"checkbox",id:"alwaysTranslateThisLanugage",name:"alwaysTranslateThisLanugage",checked:!!nu,onChange:C=>{let S=C.target.checked;fu(S?"matches":void 0)}}),T("alwaysTranslateSomeLanguage",{language:T(`languages.${p}`)})]}):M("span",{}),M(Jn,{label:T("more"),showArrow:!0,onSelected:C=>{C.value==="translateTheWholePage"?n():C.value==="translateToThePageEndImmediately"?r():C.value==="showTranslationOnly"||(C.value==="translateLocalPdfFile"?c&&c():C.value==="donate"?(globalThis.open(a.donateUrl),y()):C.value==="feedback"?(globalThis.open(a.feedbackUrl),y()):C.value==="options"&&(V.runtime.openOptionsPage(),y()))},menus:[{label:T("translateTheWholePage"),value:"translateTheWholePage"},{label:T("translateToThePageEndImmediately"),value:"translateToThePageEndImmediately"},!Mu()&&{label:T("translateLocalPdfFile"),value:"translateLocalPdfFile"},{label:"\u2615\uFE0F "+T("sponsorLabel"),value:"donate"},{label:"\u{1F41B} "+T("feedback"),value:"feedback"},{label:"\u2699\uFE0F "+T("openOptionsPage"),value:"options"}].filter(Boolean)})]}),M("div",{class:"text-sm",children:E}),M("div",{class:"text-sm",children:w}),M("footer",{class:"mt-3 text-sm flex justify-between",children:[M("a",{href:"#",class:"secondary",onClick:ie,children:T("options")}),Mu()&&M("a",{href:"#",class:"secondary",onClick:I,children:T("close")}),M("span",{class:"immersive-translate-no-select muted",onClick:c4(7)(fe),children:["V",Fg]})]})]})}var Qn={get:(u,e,t)=>{let a=e===void 0?u:{[u]:e};return V.storage[t].get(a)},set:(u,e,t)=>V.storage[t].set({[u]:e})};function ua(u,e,t){let[a]=pu(()=>typeof e=="function"?e():e),[n]=pu(t),[r,i]=pu(a),[o,s]=pu(!0),[c,l]=pu("");Xu(()=>{Qn.get(u,a,n).then(d=>{d[u]&&i(d[u]),s(!0),l("")}).catch(d=>{s(!1),l(d)})},[u,a,n]);let m=P0(d=>{let g=typeof d=="function"?d(r):d;_.debug("new settings",g),Qn.set(u,g,n).then(()=>{i(g),s(!0),l("")}).catch(p=>{i(g),s(!1),l(p)})},[n,u,r]);return[r,m,o,c]}function Zn(u,e,t){let a=[];return function(){let[r,i,o,s]=ua(u,e,t),c=P0(l=>{for(let m of a)m(l)},[]);return Xu(()=>(a.push(i),()=>{a.splice(a.indexOf(i),1)}),[i]),[r,c,o,s]}}function f4(u,e){return Zn(u,e,"sync")}var Sg="userConfig",Bg={},p4=f4(Sg,Bg);function ur(u){let{root:e,onClose:t}=u,[a,n]=pu("Original"),[r,i,o,s]=p4(),[c,l]=pu(null),[m,d]=pu(globalThis.location.href),[g,p]=pu("auto"),[y,b]=pu(null),f=J=>{n(J.detail)},E=J=>{p(J);let nu=l4(m,J,c.sourceLanguageUrlPattern);i(U=>({...U,sourceLanguageUrlPattern:nu}))},x=()=>{d(globalThis.location.href)};Xu(()=>(document.addEventListener("pageTranslatedStatus",f,!1),ge().then(J=>{l(J);let nu=o0();p(nu);let U=Oe();n(U),Xt(J.interval)}),document.addEventListener("urlChange",x),()=>{document.removeEventListener("pageTranslatedStatus",f),document.removeEventListener("urlChange",x)}),[]),Xu(()=>{ge().then(J=>{l(J)})},[r]),Xu(()=>{m&&c&&me({url:m,config:c}).then(J=>{b(J)})},[m,c]);let w=()=>{Ce(),t()},B=()=>{De()},T=()=>{s0(),t()},G=()=>{Rt(),t()},hu=()=>{zt(),t()},L=()=>{t()};return!c||!y?null:M(Xn,{root:e,onClose:L,onTranslateTheWholePage:G,onToggleTranslate:T,ontranslateToThePageEndImmediately:hu,onTranslatePage:w,onRestorePage:B,onSetPageLanguage:E,onUserConfigChange:i,config:c,pageStatus:a,ctx:y,currentUrl:m,currentLang:g})}var h4={lineBreakMaxTextCount:"\u6362\u884C\u540E\uFF0C\u6BCF\u53E5\u8BDD\u5141\u8BB8\u7684\u6700\u5927\u5B57\u7B26\u6570\u91CF","translate-pdf":"\u70B9\u51FB\u7FFB\u8BD1 PDF",enableLineBreak:"\u662F\u5426\u5F00\u542F\u957F\u6BB5\u843D\u81EA\u52A8\u6362\u884C",sponsorLabel:"$1 \u8D77\u8D5E\u52A9\u5F00\u53D1\u8005",translateLocalPdfFile:"\u7FFB\u8BD1\u672C\u5730 PDF \u6587\u4EF6",enableLineBreakDescription:"\u5F00\u542F\u540E\uFF0C\u5C06\u4F1A\u5728\u957F\u6BB5\u843D\u4E2D\u6BCF\u53E5\u8BDD\u7ED3\u675F\u63D2\u5165\u6362\u884C\u7B26\uFF0C\u4EE5\u4FBF\u4E8E\u9605\u8BFB","browser.brandName":"\u6C89\u6D78\u5F0F\u7FFB\u8BD1","browser.brandDescription":"\u6C89\u6D78\u5F0F\u7F51\u9875\u53CC\u8BED\u7FFB\u8BD1\u6269\u5C55\uFF0C\u5B8C\u5168\u514D\u8D39\u4F7F\u7528\uFF0C\u652F\u6301 Deepl/Google/\u817E\u8BAF/\u706B\u5C71\u7FFB\u8BD1\u7B49\u591A\u4E2A\u7FFB\u8BD1\u670D\u52A1\uFF0C\u652F\u6301 Firefox/Chrome/\u6CB9\u7334\u811A\u672C\uFF0C\u4EA6\u53EF\u5728 iOS Safari \u4E0A\u4F7F\u7528\u3002",changelog:"\u66F4\u65B0\u65E5\u5FD7",general:"\u57FA\u672C\u8BBE\u7F6E",toggleDebug:"\u5728\u63A7\u5236\u53F0\u6253\u5370\u8C03\u8BD5\u65E5\u5FD7",document:"\u6587\u6863",resetSuccess:"\u91CD\u7F6E\u6240\u6709\u8BBE\u7F6E\u6210\u529F",goAdvancedSettings:"\u53BB\u8FDB\u9636\u8BBE\u7F6E\u9875",advanced:"\u8FDB\u9636\u8BBE\u7F6E",advancedDescription:"\u4E00\u4E9B\u96BE\u4EE5\u7406\u89E3\u7684\u8BBE\u7F6E\u9879\uFF08\u4E00\u822C\u65E0\u9700\u8BBE\u7F6E\uFF0C\u4FDD\u6301\u9ED8\u8BA4\u5373\u53EF\uFF09",developer:"\u5F00\u53D1\u8005\u8BBE\u7F6E",donateCafe:"\u8BF7\u5F00\u53D1\u8005\u559D\u676F\u5496\u5561","translate to the bottom of the page":"\u6253\u5F00\u7F51\u9875\u540E\uFF0C\u662F\u5426\u7ACB\u5373\u7FFB\u8BD1\u5230\u9875\u9762\u5E95\u90E8\uFF1F",feedback:"\u95EE\u9898\u53CD\u9988",toggleTranslatePage:"\u7FFB\u8BD1\u7F51\u9875/\u663E\u793A\u539F\u6587",openOptionsPage:"\u6253\u5F00\u8BBE\u7F6E\u9875",translateToThePageEndImmediatelyDescription:"\u5F00\u542F\u540E\uFF0C\u5C06\u4F1A\u7ACB\u5373\u7FFB\u8BD1\u7F51\u9875\u4ECE\u9876\u90E8\u5230\u5E95\u90E8\u7684\u5185\u5BB9\uFF0C\u800C\u4E0D\u662F\u8FB9\u770B\u8FB9\u8BD1\u3002\uFF08\u4E0D\u63A8\u8350\u5F00\u542F\uFF09","translate all areas of the page":"\u662F\u5426\u7FFB\u8BD1\u7F51\u9875\u6240\u6709\u533A\u57DF",translationAreaDescription:"\u5F00\u542F\u540E\uFF0C\u6574\u4E2A\u7F51\u9875\u7684\u533A\u57DF\u90FD\u4F1A\u88AB\u7FFB\u8BD1\uFF0C\u800C\u4E0D\u662F\u9ED8\u8BA4\u7684\u667A\u80FD\u8BC6\u522B\u4E3B\u8981\u533A\u57DF\u53BB\u7FFB\u8BD1\uFF08\u4E0D\u63A8\u8350\u5F00\u542F\uFF09","the number of characters to be translated first":"\u524D\u591A\u5C11\u4E2A\u5B57\u7B26\u65E0\u9700\u7B49\u5F85\u6EDA\u52A8\u5230\u53EF\u89C6\u533A\u57DF\uFF0C\u76F4\u63A5\u7FFB\u8BD1\uFF1F","interface language":"\u754C\u9762\u8BED\u8A00","display both the original text and the translation":"\u540C\u65F6\u663E\u793A\u539F\u6587\u548C\u8BD1\u6587","keyboard shortcuts":"\u952E\u76D8\u5FEB\u6377\u952E",modify:"\u4FEE\u6539\u5FEB\u6377\u952E",reset:"\u91CD\u7F6E",close:"\u5173\u95ED",homepage:"\u4E3B\u9875",more:"\u66F4\u591A",translateTheWholePage:"\u7FFB\u8BD1\u9875\u9762\u5168\u90E8\u533A\u57DF\uFF08\u533A\u522B\u4E8E\u667A\u80FD\u8BC6\u522B\u4E3B\u8981\u533A\u57DF\uFF09",translateToThePageEndImmediately:"\u7ACB\u5373\u7FFB\u8BD1\u5230\u9875\u9762\u5E95\u90E8\uFF08\u533A\u522B\u4E8E\u6EDA\u52A8\u7FFB\u8BD1\uFF09","The local rules are up to date":"\u672C\u5730\u9002\u914D\u89C4\u5219\u5DF2\u662F\u6700\u65B0:","Successfully synchronized with the latest official rules:":"\u6210\u529F\u540C\u6B65\u6700\u65B0\u5B98\u65B9\u9002\u914D\u89C4\u5219:","Checking for updates":"\u6B63\u5728\u68C0\u67E5\u66F4\u65B0","Rules are being synchronized":"\u6B63\u5728\u540C\u6B65\u9002\u914D\u89C4\u5219",localVersionIsTooOld:"\u672C\u5730\u6269\u5C55\u7248\u672C\u8FC7\u65E7\uFF0C\u8BF7\u5347\u7EA7\u6269\u5C55\u5230 {minVersion} \u6216\u4E4B\u540E\u5230\u7248\u672C\u540E\u518D\u5C1D\u8BD5\u540C\u6B65",foundNewVersion:"\u53D1\u73B0\u65B0\u7248\u672C",theLocalExtensionIsUpToUpdate:"\u5F53\u524D\u6269\u5C55\u5DF2\u662F\u6700\u65B0\u7248\u672C\u3002",failToSyncRules:"\u540C\u6B65\u6700\u65B0\u9002\u914D\u89C4\u5219\u5931\u8D25",retry:"\u70B9\u6B64\u91CD\u8BD5",failedReason:"\u5931\u8D25\u539F\u56E0",currentRuleVersion:"\u5F53\u524D\u89C4\u5219\u7248\u672C",calculating:"\u8BA1\u7B97\u4E2D",unknownError:"\u672A\u77E5\u9519\u8BEF",canNotFetchRemoteRule:"\u65E0\u6CD5\u83B7\u53D6\u8FDC\u7A0B\u89C4\u5219",enableAlphaSuccess:"\u5DF2\u5F00\u542FAlpha\u529F\u80FD",disableAlphaSuccess:"\u5DF2\u5173\u95EDAlpha\u529F\u80FD",cacheSize:"\u7F13\u5B58\u5927\u5C0F\uFF1A",cleaning:"\u6E05\u7406\u4E2D",cleanCache:"\u6E05\u9664\u7F13\u5B58",options:"\u8BBE\u7F6E",about:"\u5173\u4E8E",service:"\u7FFB\u8BD1\u670D\u52A1",needAction:"(\u53BB\u8BBE\u7F6E)",translationEngine:"\u5F15\u64CE\u9009\u9879",sourceLanguage:"\u539F\u6587\u8BED\u8A00",target:"\u76EE\u6807\u8BED\u8A00",forThisSite:"\u9488\u5BF9\u8BE5\u7F51\u7AD9\uFF1A",alwaysTranslateSomeLanguage:"\u603B\u662F\u7FFB\u8BD1{language}",neverTranslateSomeLanguage:"\u6C38\u4E0D\u7FFB\u8BD1{language}",alwaysTranslateSomeSite:"\u603B\u662F\u7FFB\u8BD1 {hostname}",neverTranslateSomeSite:"\u6C38\u4E0D\u7FFB\u8BD1 {hostname}",add:"\u6DFB\u52A0",default:"\u9ED8\u8BA4",forThisLanguage:"\u9488\u5BF9\u8BE5\u8BED\u8A00\uFF1A","add url":"\u8F93\u5165URL",edit:"\u7F16\u8F91","translate other languages into specific language":"\u5C06\u5176\u4ED6\u8BED\u8A00\u7FFB\u8BD1\u4E3A\u4F60\u8BBE\u7F6E\u7684\u8BED\u8A00","select translation service":"\u9009\u62E9\u4E00\u9879\u7FFB\u8BD1\u670D\u52A1",language:"\u8BED\u8A00","show-original":"\u663E\u793A\u539F\u6587",translate:"\u7FFB\u8BD1",Translated:"\u5DF2\u7FFB\u8BD1",Translating:"\u7FFB\u8BD1\u4E2D",Error:"\u9519\u8BEF",allowCacheTranslations:"\u5F00\u542F\u672C\u5730\u7FFB\u8BD1\u7F13\u5B58\uFF08\u51CF\u5C11\u91CD\u590D\u6BB5\u843D\u7684\u7FFB\u8BD1\u8BF7\u6C42\uFF09","translation display":"\u8BD1\u6587\u663E\u793A\u6837\u5F0F","select diplay style":"\u533A\u5206\u8BD1\u6587\u7684\u6837\u5F0F\uFF0C\u5177\u4F53\u53EF\u53C2\u8003\u4E0B\u5217\u793A\u4F8B",interface:"\u754C\u9762\u8BBE\u7F6E",import_export:"\u5BFC\u5165/\u5BFC\u51FA","translationTheme.none":"\u65E0","translationTheme.dashed":"\u865A\u7EBF\u4E0B\u5212\u7EBF","translationTheme.dotted":"\u70B9\u72B6\u4E0B\u5212\u7EBF","translationTheme.dashedBorder":"\u865A\u7EBF\u8FB9\u6846","translationTheme.underline":"\u76F4\u7EBF\u4E0B\u5212\u7EBF","translationTheme.mask":"\u6A21\u7CCA\u6548\u679C","translationTheme.paper":"\u767D\u7EB8\u9634\u5F71\u6548\u679C","translationTheme.highlight":"\u9AD8\u4EAE","translationTheme.blockquote":"\u5F15\u7528\u6837\u5F0F","translationTheme.weakening":"\u5F31\u5316","translationTheme.italic":"\u659C\u4F53","translationTheme.bold":"\u52A0\u7C97","translationTheme.thinDashed":"\u7EC6\u865A\u7EBF\u4E0B\u5212\u7EBF","translationServices.tencent":"\u817E\u8BAF\u7FFB\u8BD1\u541B","translationServices.google":"\u8C37\u6B4C\u7FFB\u8BD1","translationServices.bai":"\u767E\u5EA6(Alpha)","translationServices.baidu":"\u767E\u5EA6\u7FFB\u8BD1","translationServices.aliyun":"\u963F\u91CC\u4E91\u7FFB\u8BD1","translationServices.volc":"\u706B\u5C71\u7FFB\u8BD1","translationServices.deeplx":"DeeplX(Alpha)","translationServices.bing":"\u5FC5\u5E94\u7FFB\u8BD1","translationServices.deepl":"Deepl","translationServices.wechat":"\u5FAE\u4FE1\u7FFB\u8BD1","translationServices.azure":"\u5FAE\u8F6F\u7FFB\u8BD1","translationServices.ibm":"IBM Watson","translationServices.aws":"\u4E9A\u9A6C\u900A\u7FFB\u8BD1","translationServices.mock":"\u6A21\u62DF\u7FFB\u8BD1","translationServices.mock2":"\u6A21\u62DF\u7FFB\u8BD12","translationServices.caiyun":"\u5F69\u4E91\u5C0F\u8BD1","translationServices.volcAlpha":"\u706B\u5C71\u7FFB\u8BD1(Alpha)","translationServices.openl":"OpenL","translationServices.youdao":"\u6709\u9053\u7FFB\u8BD1","translationServices.transmart":"\u817E\u8BAF\u4EA4\u4E92\u7FFB\u8BD1","translationServices.d":"Deepl(Alpha)","translate title":"\u7FFB\u8BD1\u9875\u9762\u6807\u9898","always languages":"\u603B\u662F\u7FFB\u8BD1\u7684\u8BED\u8A00","always translate the following languages":"\u5F53\u9875\u9762\u8BED\u8A00\u4E3A\u4E0B\u5217\u8BED\u8A00\u65F6\uFF0C\u4F1A\u81EA\u52A8\u7FFB\u8BD1\u4E3A\u76EE\u6807\u8BED\u8A00","always sites":"\u603B\u662F\u7FFB\u8BD1\u7684\u7F51\u5740","always translate the following sites":"\u5F53\u7F51\u7AD9\u4E3A\u4E0B\u5217\u57DF\u540D\u65F6\uFF0C\u4F1A\u81EA\u52A8\u7FFB\u8BD1\u4E3A\u76EE\u6807\u8BED\u8A00","never sites":"\u6C38\u4E0D\u7FFB\u8BD1\u7684\u7F51\u5740","never translate the following sites":"\u5F53\u7F51\u7AD9\u4E3A\u4E0B\u5217\u57DF\u540D\u65F6\uFF0C\u5C06\u4E0D\u4F1A\u8FDB\u884C\u7FFB\u8BD1","please refer to":"\u9700\u8981\u586B\u5199\u5BC6\u94A5\u540E\u624D\u53EF\u7528\uFF0C\u8BE6\u60C5\u53C2\u8003","Key Application and Configuration Tutorial":"\u300A\u5BC6\u94A5\u7533\u8BF7\u548C\u914D\u7F6E\u6559\u7A0B\u300B","for details":"","use the above style for the following sites":"\u5F53\u524D\u9ED8\u8BA4\u8BD1\u6587\u6837\u5F0F\u4E3A\u300C{theme}\u300D\uFF0C\u4F60\u4E5F\u53EF\u4EE5\u8BBE\u7F6E\u4E3A\u8BA9\u67D0\u4E9B\u7F51\u7AD9\u4F7F\u7528\u8BE5\u6837\u5F0F\uFF0C\u70B9\u51FB\u53F3\u8FB9\u7684\u6309\u94AE\u6DFB\u52A0\u540E\uFF0C\u518D\u5207\u6362\u5230\u53E6\u4E00\u79CD\u9ED8\u8BA4\u8BD1\u6587\u6837\u5F0F\uFF0C\u8FD9\u6837\u5373\u53EF\u5B9E\u73B0\u4E0D\u540C\u7F51\u7AD9\u4F7F\u7528\u4E0D\u540C\u7684\u8BD1\u6587\u6837\u5F0F\u3002",confirm:"\u4FDD\u5B58",cancel:"\u53D6\u6D88",delete:"\u5220\u9664","languages.af":"\u5357\u975E\u8377\u5170\u8BED","languages.am":"\u963F\u59C6\u54C8\u62C9\u8BED","languages.ar":"\u963F\u62C9\u4F2F\u8BED","languages.auto":"\u81EA\u52A8\u68C0\u6D4B\u8BED\u8A00","languages.az":"\u963F\u585E\u62DC\u7586\u8BED","languages.be":"\u767D\u4FC4\u7F57\u65AF\u8BED","languages.bg":"\u4FDD\u52A0\u5229\u4E9A\u8BED","languages.tn":"\u672D\u90A3\u8BED","languages.bn":"\u5B5F\u52A0\u62C9\u8BED","languages.bs":"\u6CE2\u65AF\u5C3C\u4E9A\u8BED","languages.ca":"\u52A0\u6CF0\u7F57\u5C3C\u4E9A\u8BED","languages.ceb":"\u5BBF\u52A1\u8BED","languages.co":"\u79D1\u897F\u5609\u8BED","languages.cs":"\u6377\u514B\u8BED","languages.cy":"\u5A01\u5C14\u58EB\u8BED","languages.da":"\u4E39\u9EA6\u8BED","languages.de":"\u5FB7\u8BED","languages.el":"\u5E0C\u814A\u8BED","languages.en":"\u82F1\u8BED","languages.eo":"\u4E16\u754C\u8BED","languages.es":"\u897F\u73ED\u7259\u8BED","languages.et":"\u7231\u6C99\u5C3C\u4E9A\u8BED","languages.eu":"\u5DF4\u65AF\u514B\u8BED","languages.fa":"\u6CE2\u65AF\u8BED","languages.fi":"\u82AC\u5170\u8BED","languages.fil":"\u83F2\u5F8B\u5BBE\u8BED","languages.fj":"\u6590\u6D4E\u8BED","languages.fr":"\u6CD5\u8BED","languages.fy":"\u5F17\u91CC\u65AF\u5170\u8BED","languages.ga":"\u7231\u5C14\u5170\u8BED","languages.gd":"\u82CF\u683C\u5170\u76D6\u5C14\u8BED","languages.gl":"\u52A0\u5229\u897F\u4E9A\u8BED","languages.gu":"\u53E4\u5409\u62C9\u7279\u8BED","languages.ha":"\u8C6A\u8428\u8BED","languages.haw":"\u590F\u5A01\u5937\u8BED","languages.he":"\u5E0C\u4F2F\u6765\u8BED","languages.hi":"\u5370\u5730\u8BED","languages.hmn":"\u82D7\u8BED","languages.hr":"\u514B\u7F57\u5730\u4E9A\u8BED","languages.ht":"\u6D77\u5730\u514B\u91CC\u5965\u5C14\u8BED","languages.hu":"\u5308\u7259\u5229\u8BED","languages.hy":"\u4E9A\u7F8E\u5C3C\u4E9A\u8BED","languages.id":"\u5370\u5EA6\u5C3C\u897F\u4E9A\u8BED","languages.ig":"\u4F0A\u535A\u8BED","languages.is":"\u51B0\u5C9B\u8BED","languages.it":"\u610F\u5927\u5229\u8BED","languages.ja":"\u65E5\u8BED","languages.jw":"\u722A\u54C7\u8BED","languages.ka":"\u683C\u9C81\u5409\u4E9A\u8BED","languages.kk":"\u54C8\u8428\u514B\u8BED","languages.km":"\u9AD8\u68C9\u8BED","languages.kn":"\u5361\u7EB3\u8FBE\u8BED","languages.ko":"\u97E9\u8BED","languages.ku":"\u5E93\u5C14\u5FB7\u8BED","languages.ky":"\u5409\u5C14\u5409\u65AF\u8BED","languages.la":"\u62C9\u4E01\u8BED","languages.lb":"\u5362\u68EE\u5821\u8BED","languages.lo":"\u8001\u631D\u8BED","languages.lt":"\u7ACB\u9676\u5B9B\u8BED","languages.lv":"\u62C9\u8131\u7EF4\u4E9A\u8BED","languages.mg":"\u9A6C\u5C14\u52A0\u4EC0\u8BED","languages.mi":"\u6BDB\u5229\u8BED","languages.mk":"\u9A6C\u5176\u987F\u8BED","languages.ml":"\u9A6C\u62C9\u96C5\u62C9\u59C6\u8BED","languages.mn":"\u8499\u53E4\u8BED","languages.mr":"\u9A6C\u62C9\u5730\u8BED","languages.ms":"\u9A6C\u6765\u8BED","languages.mt":"\u9A6C\u8033\u4ED6\u8BED","languages.mww":"\u767D\u82D7\u6587","languages.my":"\u7F05\u7538\u8BED","languages.ne":"\u5C3C\u6CCA\u5C14\u8BED","languages.nl":"\u8377\u5170\u8BED","languages.no":"\u632A\u5A01\u8BED","languages.ny":"\u5C3C\u6768\u624E\u8BED\uFF08\u9F50\u5207\u74E6\u8BED\uFF09","languages.otq":"\u514B\u96F7\u5854\u7F57\u5965\u6258\u7C73\u8BED","languages.pa":"\u65C1\u906E\u666E\u8BED","languages.pl":"\u6CE2\u5170\u8BED","languages.ps":"\u666E\u4EC0\u56FE\u8BED","languages.pt":"\u8461\u8404\u7259\u8BED\uFF08\u8461\u8404\u7259\u3001\u5DF4\u897F\uFF09","languages.ro":"\u7F57\u9A6C\u5C3C\u4E9A\u8BED","languages.ru":"\u4FC4\u8BED","languages.sd":"\u4FE1\u5FB7\u8BED","languages.si":"\u50E7\u4F3D\u7F57\u8BED","languages.sk":"\u65AF\u6D1B\u4F10\u514B\u8BED","languages.sl":"\u65AF\u6D1B\u6587\u5C3C\u4E9A\u8BED","languages.sm":"\u8428\u6469\u4E9A\u8BED","languages.sn":"\u4FEE\u7EB3\u8BED","languages.so":"\u7D22\u9A6C\u91CC\u8BED","languages.sq":"\u963F\u5C14\u5DF4\u5C3C\u4E9A\u8BED","languages.sr":"\u585E\u5C14\u7EF4\u4E9A\u8BED","languages.sr-Cyrl":"\u585E\u5C14\u7EF4\u4E9A\u8BED(\u897F\u91CC\u5C14\u6587)","languages.sr-Latn":"\u585E\u5C14\u7EF4\u4E9A\u8BED(\u62C9\u4E01\u6587)","languages.st":"\u585E\u7D22\u6258\u8BED","languages.su":"\u5DFD\u4ED6\u8BED","languages.sv":"\u745E\u5178\u8BED","languages.sw":"\u65AF\u74E6\u5E0C\u91CC\u8BED","languages.ta":"\u6CF0\u7C73\u5C14\u8BED","languages.te":"\u6CF0\u5362\u56FA\u8BED","languages.tg":"\u5854\u5409\u514B\u8BED","languages.th":"\u6CF0\u8BED","languages.tlh":"\u514B\u6797\u8D21\u8BED","languages.tlh-Qaak":"\u514B\u6797\u8D21\u8BED(piqaD)","languages.to":"\u6C64\u52A0\u8BED","languages.tr":"\u571F\u8033\u5176\u8BED","languages.ty":"\u5854\u5E0C\u63D0\u8BED","languages.ug":"\u7EF4\u543E\u5C14\u8BED","languages.uk":"\u4E4C\u514B\u5170\u8BED","languages.ur":"\u4E4C\u5C14\u90FD\u8BED","languages.uz":"\u4E4C\u5179\u522B\u514B\u8BED","languages.vi":"\u8D8A\u5357\u8BED","languages.wyw":"\u6587\u8A00\u6587","languages.xh":"\u73ED\u56FE\u8BED","languages.yi":"\u610F\u7B2C\u7EEA\u8BED","languages.yo":"\u7EA6\u9C81\u5DF4\u8BED","languages.yua":"\u5C24\u5361\u5766\u739B\u96C5\u8BED","languages.yue":"\u7CA4\u8BED\uFF08\u7E41\u4F53\uFF09","languages.zh-CN":"\u4E2D\u6587\uFF08\u7B80\u4F53\uFF09","languages.zh-TW":"\u4E2D\u6587\uFF08\u7E41\u4F53\uFF09","languages.zu":"\u7956\u9C81\u8BED"};var E4={lineBreakMaxTextCount:"\u6362\u884C\u540E\uFF0C\u6BCF\u53E5\u8BDD\u5141\u8BB8\u7684\u6700\u5927\u5B57\u7B26\u6570\u91CF",enableLineBreak:"\u662F\u5426\u5F00\u542F\u957F\u6BB5\u843D\u81EA\u52A8\u6362\u884C",sponsorLabel:"$1 \u8D77\u8D5E\u52A9\u5F00\u53D1\u8005 (\u6309\u6708\u6216\u4E00\u6B21\u6027\u5747\u53EF)",enableLineBreakDescription:"\u5F00\u542F\u540E\uFF0C\u5C06\u4F1A\u5728\u957F\u6BB5\u843D\u4E2D\u6BCF\u53E5\u8BDD\u7ED3\u675F\u63D2\u5165\u6362\u884C\u7B26\uFF0C\u4EE5\u4FBF\u4E8E\u9605\u8BFB","browser.brandName":"\u6C89\u6D78\u5F0F\u7FFB\u8B6F","browser.brandDescription":"\u6C89\u6D78\u5F0F\u7DB2\u9801\u96D9\u8A9E\u7FFB\u8B6F\u64F4\u5C55\uFF0C\u5B8C\u5168\u514D\u8CBB\u4F7F\u7528\uFF0C\u652F\u6301 Deepl/Google/\u9A30\u8A0A/\u706B\u5C71\u7FFB\u8B6F\u7B49\u591A\u500B\u7FFB\u8B6F\u670D\u52D9\uFF0C\u652F\u6301 Firefox/Chrome/\u6CB9\u7334\u8173\u672C\uFF0C\u4EA6\u53EF\u5728 iOS Safari \u4E0A\u4F7F\u7528\u3002",changelog:"\u66F4\u65B0\u65E5\u5FD7",general:"\u57FA\u672C\u8A2D\u7F6E",toggleDebug:"\u5728\u63A7\u5236\u53F0\u6253\u5370\u8C03\u8BD5\u65E5\u5FD7",document:"\u6587\u6863",resetSuccess:"\u91CD\u7F6E\u6240\u6709\u8BBE\u7F6E\u6210\u529F",goAdvancedSettings:"\u53BB\u8FDB\u9636\u8BBE\u7F6E\u9875",advanced:"\u9032\u968E\u8A2D\u7F6E",advancedDescription:"\u4E00\u4E9B\u96BE\u4EE5\u7406\u89E3\u7684\u8BBE\u7F6E\u9879\uFF08\u4E00\u822C\u65E0\u9700\u8BBE\u7F6E\uFF0C\u4FDD\u6301\u9ED8\u8BA4\u5373\u53EF\uFF09",developer:"\u958B\u767C\u8005\u8A2D\u7F6E",donateCafe:"\u8ACB\u958B\u767C\u8005\u559D\u676F\u5496\u5561","translate to the bottom of the page":"\u6253\u958B\u7DB2\u9801\u5F8C\uFF0C\u662F\u5426\u7ACB\u5373\u7FFB\u8B6F\u5230\u9801\u9762\u5E95\u90E8\uFF1F",feedback:"\u95EE\u9898\u53CD\u9988",toggleTranslatePage:"\u7FFB\u8B6F\u7DB2\u9801/\u986F\u793A\u539F\u6587",openOptionsPage:"\u6253\u958B\u8A2D\u7F6E\u9801",translateToThePageEndImmediatelyDescription:"\u5F00\u542F\u540E\uFF0C\u5C06\u4F1A\u7ACB\u5373\u7FFB\u8BD1\u7F51\u9875\u4ECE\u9876\u90E8\u5230\u5E95\u90E8\u7684\u5185\u5BB9\uFF0C\u800C\u4E0D\u662F\u8FB9\u770B\u8FB9\u8BD1\u3002\uFF08\u4E0D\u63A8\u8350\u5F00\u542F\uFF09","translate all areas of the page":"\u662F\u5426\u7FFB\u8BD1\u7F51\u9875\u6240\u6709\u533A\u57DF",translationAreaDescription:"\u5F00\u542F\u540E\uFF0C\u6574\u4E2A\u7F51\u9875\u7684\u533A\u57DF\u90FD\u4F1A\u88AB\u7FFB\u8BD1\uFF0C\u800C\u4E0D\u662F\u9ED8\u8BA4\u7684\u667A\u80FD\u8BC6\u522B\u4E3B\u8981\u533A\u57DF\u53BB\u7FFB\u8BD1\uFF08\u4E0D\u63A8\u8350\u5F00\u542F\uFF09","the number of characters to be translated first":"\u524D\u591A\u5C11\u4E2A\u5B57\u7B26\u65E0\u9700\u7B49\u5F85\u6EDA\u52A8\u5230\u53EF\u89C6\u533A\u57DF\uFF0C\u76F4\u63A5\u7FFB\u8BD1\uFF1F","interface language":"\u754C\u9762\u8A9E\u8A00","display both the original text and the translation":"\u540C\u6642\u986F\u793A\u539F\u6587\u548C\u8B6F\u6587","keyboard shortcuts":"\u9375\u76E4\u5FEB\u6377\u9375",modify:"\u4FEE\u6539\u5FEB\u6377\u9375",reset:"\u91CD\u8A2D",close:"\u95DC\u9589",homepage:"\u4E3B\u9801",more:"\u66F4\u591A",translateTheWholePage:"\u7FFB\u8B6F\u9801\u9762\u5168\u90E8\u5340\u57DF\uFF08\u5340\u5206\u65BC\u53EA\u7FFB\u8B6F\u4E3B\u8981\u5340\u57DF\uFF09",translateToThePageEndImmediately:"\u7ACB\u5373\u7FFB\u8B6F\u5230\u5E95\u90E8\uFF08\u5340\u5206\u65BC\u770B\u54EA\u8B6F\u54EA\uFF09","The local rules are up to date":"\u672C\u5730\u9002\u914D\u89C4\u5219\u5DF2\u662F\u6700\u65B0:","Successfully synchronized with the latest official rules:":"\u6210\u529F\u540C\u6B65\u6700\u65B0\u5B98\u65B9\u9002\u914D\u89C4\u5219:","Checking for updates":"\u6B63\u5728\u68C0\u67E5\u66F4\u65B0","Rules are being synchronized":"\u6B63\u5728\u540C\u6B65\u9002\u914D\u89C4\u5219",localVersionIsTooOld:"\u672C\u5730\u6269\u5C55\u7248\u672C\u8FC7\u65E7\uFF0C\u8BF7\u5347\u7EA7\u6269\u5C55\u5230 {minVersion} \u6216\u4E4B\u540E\u5230\u7248\u672C\u540E\u518D\u5C1D\u8BD5\u540C\u6B65",foundNewVersion:"\u53D1\u73B0\u65B0\u7248\u672C",theLocalExtensionIsUpToUpdate:"\u5F53\u524D\u6269\u5C55\u5DF2\u662F\u6700\u65B0\u7248\u672C\u3002",failToSyncRules:"\u540C\u6B65\u6700\u65B0\u9002\u914D\u89C4\u5219\u5931\u8D25",retry:"\u70B9\u6B64\u91CD\u8BD5",failedReason:"\u5931\u8D25\u539F\u56E0",currentRuleVersion:"\u5F53\u524D\u89C4\u5219\u7248\u672C",calculating:"\u8BA1\u7B97\u4E2D",unknownError:"\u672A\u77E5\u9519\u8BEF",canNotFetchRemoteRule:"\u65E0\u6CD5\u83B7\u53D6\u8FDC\u7A0B\u89C4\u5219",enableAlphaSuccess:"\u5DF2\u5F00\u542FAlpha\u529F\u80FD",disableAlphaSuccess:"\u5DF2\u5173\u95EDAlpha\u529F\u80FD",cacheSize:"\u7F13\u5B58\u5927\u5C0F\uFF1A",cleaning:"\u6E05\u7406\u4E2D",cleanCache:"\u6E05\u9664\u7F13\u5B58",options:"\u9078\u9805",about:"\u95DC\u65BC",service:"\u7FFB\u8B6F\u670D\u52D9",needAction:"(\u53BB\u8BBE\u7F6E)",translationEngine:"\u5F15\u64CE\u9078\u9805",sourceLanguage:"\u539F\u6587\u8BED\u8A00",target:"\u76EE\u6A19\u8A9E\u8A00",forThisSite:"\u5C0D\u65BC\u8A72\u7DB2\u7AD9\uFF1A",alwaysTranslateSomeLanguage:"\u7E3D\u662F\u7FFB\u8B6F{language}",neverTranslateSomeLanguage:"\u6C38\u4E0D\u7FFB\u8B6F{language}",alwaysTranslateSomeSite:"\u7E3D\u662F\u7FFB\u8B6F {hostname}",neverTranslateSomeSite:"\u6C38\u4E0D\u7FFB\u8B6F {hostname}",add:"\u589E\u52A0",default:"\u9ED8\u8A8D",forThisLanguage:"\u5C0D\u65BC\u8A72\u8A9E\u8A00\uFF1A","add url":"\u8F38\u5165URL",edit:"\u7DE8\u8F2F","translate other languages into specific language":"\u5C07\u5176\u4ED6\u8A9E\u8A00\u7FFB\u8B6F\u70BA\u4F60\u8A2D\u7F6E\u7684\u8A9E\u8A00","select translation service":"\u9078\u64C7\u4E00\u9805\u7FFB\u8B6F\u670D\u52D9",language:"\u8A9E\u8A00","show-original":"\u986F\u793A\u539F\u6587",translate:"\u7FFB\u8B6F",Translated:"\u5DF2\u7FFB\u8B6F",Translating:"\u7FFB\u8B6F\u4E2D",Error:"\u932F\u8AA4",allowCacheTranslations:"\u958B\u555F\u672C\u5730\u7FFB\u8B6F\u7DE9\u5B58\uFF08\u6E1B\u5C11\u91CD\u8907\u6BB5\u843D\u7684\u7FFB\u8B6F\u8ACB\u6C42\uFF09","translation display":"\u8B6F\u6587\u986F\u793A\u6A23\u5F0F","select diplay style":"\u5340\u5206\u8B6F\u6587\u7684\u6A23\u5F0F\uFF0C\u5177\u9AD4\u53EF\u53C3\u8003\u4E0B\u5217\u793A\u4F8B",interface:"\u754C\u9762\u8A2D\u7F6E",import_export:"\u5C0E\u5165/\u5C0E\u51FA","translationTheme.none":"\u7121","translationTheme.dashed":"\u865B\u7DDA\u4E0B\u5283\u7DDA","translationTheme.dotted":"\u9EDE\u72C0\u4E0B\u5283\u7DDA","translationTheme.dashedBorder":"\u865B\u7DDA\u908A\u6846","translationTheme.underline":"\u76F4\u7DDA\u4E0B\u5283\u7DDA","translationTheme.mask":"\u6A21\u7CCA\u6548\u679C","translationTheme.paper":"\u767D\u7D19\u9670\u5F71\u6548\u679C","translationTheme.highlight":"\u9AD8\u4EAE","translationTheme.blockquote":"\u5F15\u7528\u6A23\u5F0F","translationTheme.weakening":"\u5F31\u5316","translationTheme.italic":"\u659C\u9AD4","translationTheme.bold":"\u7C97\u9AD4","translationTheme.thinDashed":"\u7D30\u865B\u7DDA\u4E0B\u5283\u7DDA","translationServices.tencent":"\u9A30\u8A0A\u7FFB\u8B6F\u541B","translationServices.google":"\u8C37\u6B4C\u7FFB\u8B6F","translationServices.bai":"\u767E\u5EA6(Alpha)","translationServices.baidu":"\u767E\u5EA6\u7FFB\u8B6F","translationServices.aliyun":"\u963F\u91CC\u96F2\u7FFB\u8B6F","translationServices.volc":"\u706B\u5C71\u7FFB\u8B6F","translationServices.deeplx":"DeeplX(Alpha)","translationServices.bing":"\u5FC5\u61C9\u7FFB\u8B6F","translationServices.deepl":"Deepl","translationServices.wechat":"\u5FAE\u4FE1\u7FFB\u8B6F","translationServices.azure":"\u5FAE\u8EDF\u7FFB\u8B6F","translationServices.ibm":"IBM Watson","translationServices.aws":"\u4E9E\u99AC\u905C\u7FFB\u8B6F","translationServices.mock":"\u6A21\u64EC\u7FFB\u8B6F","translationServices.mock2":"\u6A21\u62DF\u7FFB\u8BD12","translationServices.caiyun":"\u5F69\u96F2\u5C0F\u8B6F","translationServices.volcAlpha":"\u706B\u5C71\u7FFB\u8B6F(Alpha)","translationServices.openl":"OpenL","translationServices.youdao":"\u6709\u9053\u7FFB\u8B6F","translationServices.transmart":"\u9A30\u8A0A\u4EA4\u4E92\u7FFB\u8B6F","translationServices.d":"Deepl(Alpha)","translate title":"\u7FFB\u8B6F\u9801\u9762\u6A19\u984C","always languages":"\u7E3D\u662F\u7FFB\u8B6F\u7684\u8A9E\u8A00","always translate the following languages":"\u7576\u9801\u9762\u8A9E\u8A00\u70BA\u4E0B\u5217\u8A9E\u8A00\u6642\uFF0C\u6703\u81EA\u52D5\u7FFB\u8B6F\u70BA\u76EE\u6A19\u8A9E\u8A00","always sites":"\u7E3D\u662F\u7FFB\u8B6F\u7684\u7DB2\u5740","always translate the following sites":"\u7576\u7DB2\u7AD9\u70BA\u4E0B\u5217\u57DF\u540D\u6642\uFF0C\u6703\u81EA\u52D5\u7FFB\u8B6F\u70BA\u76EE\u6A19\u8A9E\u8A00","never sites":"\u6C38\u4E0D\u7FFB\u8B6F\u7684\u7DB2\u5740","never translate the following sites":"\u7576\u7DB2\u7AD9\u70BA\u4E0B\u5217\u57DF\u540D\u6642\uFF0C\u5C07\u4E0D\u6703\u9032\u884C\u7FFB\u8B6F","please refer to":"\u9700\u8981\u586B\u5199\u5BC6\u94A5\u540E\u624D\u53EF\u7528\uFF0C\u8BE6\u60C5\u53C2\u8003","Key Application and Configuration Tutorial":"\u300A\u5BC6\u9470\u7533\u8ACB\u548C\u914D\u7F6E\u6559\u7A0B\u300B","for details":"","use the above style for the following sites":"\u5C07\u4E0A\u9762\u7684\u6A23\u5F0F\u7528\u65BC\u4EE5\u4E0B\u7DB2\u7AD9",confirm:"\u5132\u5B58",cancel:"\u53D6\u6D88",delete:"\u522A\u9664","languages.af":"\u5357\u975E\u8377\u862D\u8A9E","languages.am":"\u963F\u59C6\u54C8\u62C9\u8A9E","languages.ar":"\u963F\u62C9\u4F2F\u8A9E","languages.auto":"\u6AA2\u6E2C\u8A9E\u8A00","languages.az":"\u963F\u585E\u62DC\u7586\u8A9E","languages.be":"\u767D\u4FC4\u7F85\u65AF\u8A9E","languages.bg":"\u4FDD\u52A0\u5229\u4E9E\u8A9E","languages.tn":"\u672D\u90A3\u8A9E","languages.bn":"\u5B5F\u52A0\u62C9\u8A9E","languages.bs":"\u6CE2\u65AF\u5C3C\u4E9E\u8A9E","languages.ca":"\u52A0\u6CF0\u7F85\u5C3C\u4E9E\u8A9E","languages.ceb":"\u5BBF\u52D9\u8A9E","languages.co":"\u79D1\u897F\u5609\u8A9E","languages.cs":"\u6377\u514B\u8A9E","languages.cy":"\u5A01\u723E\u58EB\u8A9E","languages.da":"\u4E39\u9EA5\u8A9E","languages.de":"\u5FB7\u8A9E","languages.el":"\u5E0C\u81D8\u8A9E","languages.en":"\u82F1\u8A9E","languages.eo":"\u4E16\u754C\u8A9E","languages.es":"\u897F\u73ED\u7259\u8A9E","languages.et":"\u611B\u6C99\u5C3C\u4E9E\u8A9E","languages.eu":"\u5DF4\u65AF\u514B\u8A9E","languages.fa":"\u6CE2\u65AF\u8A9E","languages.fi":"\u82AC\u862D\u8A9E","languages.fil":"\u83F2\u5F8B\u8CD3\u8A9E","languages.fj":"\u6590\u6FDF\u8A9E","languages.fr":"\u6CD5\u8A9E","languages.fy":"\u5F17\u91CC\u65AF\u862D\u8A9E","languages.ga":"\u611B\u723E\u862D\u8A9E","languages.gd":"\u8607\u683C\u862D\u84CB\u723E\u8A9E","languages.gl":"\u52A0\u5229\u897F\u4E9E\u8A9E","languages.gu":"\u53E4\u5409\u62C9\u7279\u8A9E","languages.ha":"\u8C6A\u85A9\u8A9E","languages.haw":"\u590F\u5A01\u5937\u8A9E","languages.he":"\u5E0C\u4F2F\u4F86\u8A9E","languages.hi":"\u5370\u5730\u8A9E","languages.hmn":"\u82D7\u8A9E","languages.hr":"\u514B\u7F85\u5730\u4E9E\u8A9E","languages.ht":"\u6D77\u5730\u514B\u91CC\u5967\u723E\u8A9E","languages.hu":"\u5308\u7259\u5229\u8A9E","languages.hy":"\u4E9E\u7F8E\u5C3C\u4E9E\u8A9E","languages.id":"\u5370\u5EA6\u5C3C\u897F\u4E9E\u8A9E","languages.ig":"\u4F0A\u535A\u8A9E","languages.is":"\u51B0\u5CF6\u8A9E","languages.it":"\u610F\u5927\u5229\u8A9E","languages.ja":"\u65E5\u8A9E","languages.jw":"\u722A\u54C7\u8A9E","languages.ka":"\u683C\u9B6F\u5409\u4E9E\u8A9E","languages.kk":"\u54C8\u85A9\u514B\u8A9E","languages.km":"\u9AD8\u68C9\u8A9E","languages.kn":"\u5361\u7D0D\u9054\u8A9E","languages.ko":"\u97D3\u8A9E","languages.ku":"\u5EAB\u723E\u5FB7\u8A9E","languages.ky":"\u5409\u723E\u5409\u65AF\u8A9E","languages.la":"\u62C9\u4E01\u8A9E","languages.lb":"\u76E7\u68EE\u5821\u8A9E","languages.lo":"\u8001\u64BE\u8A9E","languages.lt":"\u7ACB\u9676\u5B9B\u8A9E","languages.lv":"\u62C9\u812B\u7DAD\u4E9E\u8A9E","languages.mg":"\u99AC\u723E\u52A0\u4EC0\u8A9E","languages.mi":"\u6BDB\u5229\u8A9E","languages.mk":"\u99AC\u5176\u9813\u8A9E","languages.ml":"\u99AC\u62C9\u96C5\u62C9\u59C6\u8A9E","languages.mn":"\u8499\u53E4\u8A9E","languages.mr":"\u99AC\u62C9\u5730\u8A9E","languages.ms":"\u99AC\u4F86\u8A9E","languages.mt":"\u99AC\u8033\u4ED6\u8A9E","languages.mww":"\u767D\u82D7\u6587","languages.my":"\u7DEC\u7538\u8A9E","languages.ne":"\u5C3C\u6CCA\u723E\u8A9E","languages.nl":"\u8377\u862D\u8A9E","languages.no":"\u632A\u5A01\u8A9E","languages.ny":"\u5C3C\u694A\u624E\u8A9E\uFF08\u9F4A\u5207\u74E6\u8A9E\uFF09","languages.otq":"\u514B\u96F7\u5854\u7F85\u5967\u6258\u7C73\u8A9E","languages.pa":"\u65C1\u906E\u666E\u8A9E","languages.pl":"\u6CE2\u862D\u8A9E","languages.ps":"\u666E\u4EC0\u5716\u8A9E","languages.pt":"\u8461\u8404\u7259\u8A9E\uFF08\u8461\u8404\u7259\u3001\u5DF4\u897F\uFF09","languages.ro":"\u7F85\u99AC\u5C3C\u4E9E\u8A9E","languages.ru":"\u4FC4\u8A9E","languages.sd":"\u4FE1\u5FB7\u8A9E","languages.si":"\u50E7\u4F3D\u7F85\u8A9E","languages.sk":"\u65AF\u6D1B\u4F10\u514B\u8A9E","languages.sl":"\u65AF\u6D1B\u6587\u5C3C\u4E9E\u8A9E","languages.sm":"\u85A9\u6469\u4E9E\u8A9E","languages.sn":"\u4FEE\u7D0D\u8A9E","languages.so":"\u7D22\u99AC\u91CC\u8A9E","languages.sq":"\u963F\u723E\u5DF4\u5C3C\u4E9E\u8A9E","languages.sr":"\u585E\u723E\u7DAD\u4E9E\u8A9E","languages.sr-Cyrl":"\u585E\u723E\u7DAD\u4E9E\u8A9E(\u897F\u91CC\u723E\u6587)","languages.sr-Latn":"\u585E\u723E\u7DAD\u4E9E\u8A9E(\u62C9\u4E01\u6587)","languages.st":"\u585E\u7D22\u6258\u8A9E","languages.su":"\u5DFD\u4ED6\u8A9E","languages.sv":"\u745E\u5178\u8A9E","languages.sw":"\u65AF\u74E6\u5E0C\u91CC\u8A9E","languages.ta":"\u6CF0\u7C73\u723E\u8A9E","languages.te":"\u6CF0\u76E7\u56FA\u8A9E","languages.tg":"\u5854\u5409\u514B\u8A9E","languages.th":"\u6CF0\u8A9E","languages.tlh":"\u514B\u6797\u8CA2\u8A9E","languages.tlh-Qaak":"\u514B\u6797\u8CA2\u8A9E(piqaD)","languages.to":"\u6E6F\u52A0\u8A9E","languages.tr":"\u571F\u8033\u5176\u8A9E","languages.ty":"\u5854\u5E0C\u63D0\u8A9E","languages.ug":"\u7DAD\u543E\u723E\u8A9E","languages.uk":"\u70CF\u514B\u862D\u8A9E","languages.ur":"\u70CF\u723E\u90FD\u8A9E","languages.uz":"\u70CF\u8332\u5225\u514B\u8A9E","languages.vi":"\u8D8A\u5357\u8A9E","languages.wyw":"\u6587\u8A00\u6587","languages.xh":"\u73ED\u5716\u8A9E","languages.yi":"\u610F\u7B2C\u7DD2\u8A9E","languages.yo":"\u7D04\u9B6F\u5DF4\u8A9E","languages.yua":"\u5C24\u5361\u5766\u746A\u96C5\u8A9E","languages.yue":"\u7CB5\u8A9E\uFF08\u7E41\u9AD4\uFF09","languages.zh-CN":"\u4E2D\u6587\uFF08\u7C21\u9AD4\uFF09","languages.zh-TW":"\u4E2D\u6587\uFF08\u7E41\u9AD4\uFF09","languages.zu":"\u7956\u9B6F\u8A9E"};var b4={lineBreakMaxTextCount:"\u6362\u884C\u540E\uFF0C\u6BCF\u53E5\u8BDD\u5141\u8BB8\u7684\u6700\u5927\u5B57\u7B26\u6570\u91CF",enableLineBreak:"\u662F\u5426\u5F00\u542F\u957F\u6BB5\u843D\u81EA\u52A8\u6362\u884C",sponsorLabel:"$1 \u8D77\u8D5E\u52A9\u5F00\u53D1\u8005 (\u6309\u6708\u6216\u4E00\u6B21\u6027\u5747\u53EF)",enableLineBreakDescription:"\u5F00\u542F\u540E\uFF0C\u5C06\u4F1A\u5728\u957F\u6BB5\u843D\u4E2D\u6BCF\u53E5\u8BDD\u7ED3\u675F\u63D2\u5165\u6362\u884C\u7B26\uFF0C\u4EE5\u4FBF\u4E8E\u9605\u8BFB","browser.brandName":"Immersive Translate","browser.brandDescription":"Web bilingual translation, completely free to use, supports Deepl/Google/Bing/Tencent/Youdao, etc. it also works on iOS Safari.",changelog:"\u66F4\u65B0\u65E5\u5FD7",general:"General",toggleDebug:"\u5728\u63A7\u5236\u53F0\u6253\u5370\u8C03\u8BD5\u65E5\u5FD7",document:"\u6587\u6863",resetSuccess:"\u91CD\u7F6E\u6240\u6709\u8BBE\u7F6E\u6210\u529F",goAdvancedSettings:"\u53BB\u8FDB\u9636\u8BBE\u7F6E\u9875",advanced:"Advanced",advancedDescription:"\u4E00\u4E9B\u96BE\u4EE5\u7406\u89E3\u7684\u8BBE\u7F6E\u9879\uFF08\u4E00\u822C\u65E0\u9700\u8BBE\u7F6E\uFF0C\u4FDD\u6301\u9ED8\u8BA4\u5373\u53EF\uFF09",developer:"\u5F00\u53D1\u8005\u8BBE\u7F6E",donateCafe:"Buy Me a Coffee","translate to the bottom of the page":"Whether translate to the bottom of the page once you open the page?",feedback:"Feedback",toggleTranslatePage:"Toggle Translate",openOptionsPage:"Open Options",translateToThePageEndImmediatelyDescription:"When turned on, it will immediately translate the page from the top to the bottom, instead of translating as you read. (Not recommended to turn on)","translate all areas of the page":"Whether to translate all areas of the web page",translationAreaDescription:"When enabled, the entire area of the page will be translated, not the default intelligent recognition main area to translate ( not recommended)","the number of characters to be translated first":"How many characters are translated directly without waiting to scroll to the visible area for the first few characters?","interface language":"Interface language","display both the original text and the translation":"Display both the original text and the translation","keyboard shortcuts":"Keyboard shortcuts",modify:"Modify shortcut key",reset:"Reset",close:"Close",homepage:"Home Page",more:"More",translateTheWholePage:"Translate the whole page area (different from only the main area)",translateToThePageEndImmediately:"Immediately translate to the bottom (different from behold translate which)","The local rules are up to date":"Local  rules are up to date:","Successfully synchronized with the latest official rules:":"Successfully synced latest official rules:","Checking for updates":"Checking for update","Rules are being synchronized":"Syncing official rules",localVersionIsTooOld:"The local extension is too old. Please upgrade to {minVersion} or then try syncing again",foundNewVersion:"New version available",theLocalExtensionIsUpToUpdate:"The current extension version is up to date.",failToSyncRules:"Failed to sync latest adaptive rules",retry:"Retry",failedReason:"Failure reason",currentRuleVersion:"Current Rule Version",calculating:"Calculating",unknownError:"Unknown Error",canNotFetchRemoteRule:"Unable to fetch remote rule",enableAlphaSuccess:"Alpha enabled successfully",disableAlphaSuccess:"Alpha has been disabled",cacheSize:"Cache size:",cleaning:"Cleaning",cleanCache:"Clear cache",options:"Options",about:"About",service:"Translation Service",needAction:"(to set up)",translationEngine:"Engine Options",sourceLanguage:"Original language",target:"Target Language",forThisSite:"For This Site:",alwaysTranslateSomeLanguage:"Always translate {language}",neverTranslateSomeLanguage:"Never translate {language}",alwaysTranslateSomeSite:"Always translate {hostname}",neverTranslateSomeSite:"Never translate {hostname}",add:"Add",default:"Default",forThisLanguage:"For This Language:","add url":"Add URL",edit:"Edit","translate other languages into specific language":"Translate other languages into the language you set","select translation service":"Select a translation service",language:"Language","show-original":"Show original text",translate:"Translate",Translated:"Translated",Translating:"Translating",Error:"Error",allowCacheTranslations:"Enable local translation caching (reduce translation requests for duplicate paragraphs)","translation display":"Translation display style","select diplay style":"Please refer to the following examples",interface:"Interface Settings",import_export:"Import/Export","translationTheme.none":"None","translationTheme.dashed":"Dashed underline","translationTheme.dotted":"Dotted Underline","translationTheme.dashedBorder":"Dashed Border","translationTheme.underline":"Straight underline","translationTheme.mask":"Blur effect","translationTheme.paper":"White paper shadow effect","translationTheme.highlight":"Highlight","translationTheme.blockquote":"quote style","translationTheme.weakening":"Weakening","translationTheme.italic":"Italic","translationTheme.bold":"Bold","translationTheme.thinDashed":"Thin dashed underline","translationServices.tencent":"Tencent Translator","translationServices.google":"Google Translate","translationServices.bai":"Baidu (Alpha)","translationServices.baidu":"Baidu translation","translationServices.aliyun":"Aliyun Translator","translationServices.volc":"Volcano Translation","translationServices.deeplx":"DeeplX (Alpha)","translationServices.bing":"Bing translate","translationServices.deepl":"DeepL","translationServices.wechat":"Wechat translation","translationServices.azure":"Microsoft Translator","translationServices.ibm":"IBM Watson","translationServices.aws":"Amazon Translate","translationServices.mock":"Mock translation","translationServices.mock2":"Mock Translation2","translationServices.caiyun":"Caiyun Translation","translationServices.volcAlpha":"Volcano Translation (Alpha)","translationServices.openl":"OpenL","translationServices.youdao":"Youdao Translation","translationServices.transmart":"Tencent Smart Translation","translationServices.d":"DeeplX (Alpha)","translate title":"Translate page title","always languages":"Always translate the following languages","always translate the following languages":"The following languages will always be translated","always sites":"Always translate the following sites","always translate the following sites":"The following sites will always be translated","never sites":"Never translate the following sites","never translate the following sites":"The following sites will never be translated","please refer to":"\u9700\u8981\u586B\u5199\u5BC6\u94A5\u540E\u624D\u53EF\u7528\uFF0C\u8BE6\u60C5\u53C2\u8003","Key Application and Configuration Tutorial":" 'Key Application and Configuration Tutorial' ","for details":"","use the above style for the following sites":"use the above style for the following sites",confirm:"Save",cancel:"Cancel",delete:"Delete","languages.af":"Afrikaans","languages.am":"Amharic","languages.ar":"Arabic","languages.auto":"Detect Language","languages.az":"Azerbaijani","languages.be":"Belarusian","languages.bg":"Bulgarian","languages.tn":"Zana","languages.bn":"Bengali","languages.bs":"Bosnian","languages.ca":"Catalan","languages.ceb":"Cebuano","languages.co":"Corsican","languages.cs":"Czech","languages.cy":"Welsh","languages.da":"Danish","languages.de":"German","languages.el":"Greek","languages.en":"English","languages.eo":"Esperanto","languages.es":"Spanish","languages.et":"Estonian","languages.eu":"Basque","languages.fa":"Farsi","languages.fi":"Finnish","languages.fil":"Filipino","languages.fj":"Fijian","languages.fr":"French","languages.fy":"Frisian","languages.ga":"Irish","languages.gd":"Scottish Gaelic","languages.gl":"Galician","languages.gu":"Gujarati","languages.ha":"Hausa","languages.haw":"Hawaiian","languages.he":"Hebrew","languages.hi":"Hindi","languages.hmn":"Hmong","languages.hr":"Croatian","languages.ht":"Haitian Creole","languages.hu":"Hungarian","languages.hy":"Armenian","languages.id":"Indonesian","languages.ig":"Igbo","languages.is":"Icelandic","languages.it":"Italian","languages.ja":"Japanese","languages.jw":"Javanese","languages.ka":"Georgian","languages.kk":"Kazakh","languages.km":"Khmer","languages.kn":"Kannada","languages.ko":"Korean","languages.ku":"Kurdish","languages.ky":"Kyrgyz","languages.la":"Latin","languages.lb":"Luxembourgish","languages.lo":"Lao","languages.lt":"Lithuanian","languages.lv":"Latvian","languages.mg":"Malagash","languages.mi":"Maori","languages.mk":"Macedonian","languages.ml":"Malayalam","languages.mn":"Mongolian","languages.mr":"Marathi","languages.ms":"Malay","languages.mt":"Maltese","languages.mww":"Bai Miao","languages.my":"Burmese","languages.ne":"Nepali","languages.nl":"Dutch","languages.no":"Norwegian","languages.ny":"Nyanza (Chichewa)","languages.otq":"Quer\xE9taro Otomi","languages.pa":"Punjabi","languages.pl":"Polish","languages.ps":"Pashto","languages.pt":"Portuguese (Portugal, Brazil)","languages.ro":"Romanian","languages.ru":"Russian","languages.sd":"Sindhi","languages.si":"Sinhala","languages.sk":"Slovak","languages.sl":"Slovenian","languages.sm":"Samoan","languages.sn":"Shona","languages.so":"Somali","languages.sq":"Albanian","languages.sr":"Serbian","languages.sr-Cyrl":"Serbian (Cyrillic)","languages.sr-Latn":"Serbian (Latin)","languages.st":"Sesotho","languages.su":"Sundanese","languages.sv":"Swedish","languages.sw":"Swahili","languages.ta":"Tamil","languages.te":"Telugu","languages.tg":"Tajik","languages.th":"Thai","languages.tlh":"Klingon","languages.tlh-Qaak":"Klingon (piqaD)","languages.to":"Tongan","languages.tr":"Turkish","languages.ty":"Tahiti","languages.ug":"Uyghur","languages.uk":"Ukrainian","languages.ur":"Urdu","languages.uz":"Uzbek","languages.vi":"Vietnamese","languages.wyw":"Classical Chinese","languages.xh":"Bantu","languages.yi":"Yiddish","languages.yo":"Yoruba","languages.yua":"Yucatan Mayan","languages.yue":"Cantonese (Traditional)","languages.zh-CN":"Chinese (Simplified)","languages.zh-TW":"Chinese (Traditional)","languages.zu":"Zulu"};var Lg={"zh-CN":h4,en:b4,"zh-TW":E4},y4=Lg;function _g(u,e){for(let t of e)u.appendChild(document.createElement("style")).innerHTML=t}function x4(){let u=Ju(),e=document.createElement("div");e.id="immersive-translate-popup",e.setAttribute("style","all: initial"),document.body.appendChild(e);let t=e.attachShadow({mode:"open"}),a=[u.IMMERSIVE_TRANSLATE_PICO_CSS,u.IMMERSIVE_TRANSLATE_COMMON_CSS,u.IMMERSIVE_TRANSLATE_POPUP_CSS];_g(t,a);let n=document.createElement("div");n.innerHTML=u.IMMERSIVE_TRANSLATE_POPUP_HTML,t.appendChild(n);let r=document.createElement("script");r.textContent=u.IMMERSIVE_TRANSLATE_POPUP_JS,t.appendChild(r);let i=t.querySelector("#immersive-translate-popup-btn");i.addEventListener("click",()=>{Mg(t)});let o=t.querySelector("#mount");function s(){L0(null,o),o.style.display="none",i.style.display="block"}document.addEventListener("click",c=>{c.target.id!=="immersive-translate-popup"&&s()})}function Mg(u){let e=u.querySelector("#mount"),t=u.querySelector("#immersive-translate-popup-btn");function a(){L0(null,e),e.style.display="none",t.style.display="block"}let n=()=>{a()};(async()=>{let r=await ge();L0(M(s4,{lang:r.interfaceLanguage,fallbackLang:"zh-CN",translations:y4,children:M(ur,{onClose:n,root:e})}),e)})().then(()=>{t.style.display="none",e.style.display="block"})}function Pg(){s0().catch(u=>{console.error("Translate page error:",u)})}globalThis.GM&&globalThis.GM.registerMenuCommand&&globalThis.GM.registerMenuCommand("Toggle Translate",Pg,"t");var Rg=u=>document.head.appendChild(document.createElement("style")).innerHTML=u;async function zg(){let u=await ge(),e={url:globalThis.location.href,config:u},t=await me(e);if(u.debug&&_.setLevel("debug"),t.isTranslateExcludeUrl)_.debug("detect exclude url, do not inject anything.");else{let n=Ju().IMMERSIVE_TRANSLATE_INJECTED_CSS;n&&Rg(n),x4()}await r4()}globalThis.IMMERSIVE_TRANSLATE_ENTRY=zg;})();
(function () {
  "use strict";
  if (globalThis.top != globalThis.self) {
    return;
  }
  globalThis.IMMERSIVE_TRANSLATE_CONFIG = {};

  if (globalThis.IMMERSIVE_TRANSLATE_ENTRY) {
    globalThis.IMMERSIVE_TRANSLATE_ENTRY().catch((e) => {
      console.error(`immersive translate error`, e);
    });
  } else {
    console.error("immersive-translate not found");
  }
})();
