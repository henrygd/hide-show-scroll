!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e=e||self).hideShowScroll=t()}(this,(function(){let e,t,n=document.documentElement;return{hide:function(){t||(e=window.innerWidth-n.clientWidth,n.style.overflow="hidden",e&&(n.style.paddingRight=e+"px"),t=1)},show:function(){n.style.overflow="auto",e&&(n.style.paddingRight="0"),t=0}}}));
