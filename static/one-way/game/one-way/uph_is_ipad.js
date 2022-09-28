/*
   Copyright (c) 2022, BunniByte. All rights reserved.
*/

function detect_ipad_info(n,a){var e=n.indexOf(a);return e>-1&&n.splice(e,1),n}function collect_ipad_meta(n,a){for(var e=0;e<n.length;)n[e]===a?n.splice(e,1):++e;return n}let agent=navigator.userAgent;function is_ipad(){return["iPad Simulator","iPad"].includes(navigator.platform)||agent.includes("Mac")&&"ontouchend"in document}