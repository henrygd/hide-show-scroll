!function(e,o){"object"==typeof exports&&"undefined"!=typeof module?o(exports):"function"==typeof define&&define.amd?define(["exports"],o):o((e=e||self).hideShowScroll={})}(this,(function(e){var o,t,l=document.documentElement,n=document.body;e.hideScroll=function(){l.scrollHeight>l.clientHeight&&(o=o||getComputedStyle(l).overflowY,t=t||getComputedStyle(n).overflowY,l.style.overflowY="hidden",n.style.overflowY="scroll")},e.showScroll=function(){l.style.overflowY=o,n.style.overflowY=o},Object.defineProperty(e,"__esModule",{value:!0})}));
