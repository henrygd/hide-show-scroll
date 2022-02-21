# hide-show-scroll [![npm][npm-image]][npm-url] [![File Size][size-image]][cdn-url]

[npm-image]: https://img.shields.io/npm/v/hide-show-scroll.svg?style=flat
[npm-url]: https://www.npmjs.com/package/hide-show-scroll
[size-image]: https://img.badgesize.io/henrygd/hide-show-scroll/master/dist/hide-show-scroll.mjs?compression=gzip
[cdn-url]: https://github.com/henrygd/hide-show-scroll/blob/master/index.js

https://henrygd.me/hide-show-scroll

This won't work if the scrollbar is on an element other than html. May add that option in the future.

## Module Usage

```
$ npm install hide-show-scroll
```

```js
import { hideScroll, showScroll } from 'hide-show-scroll'

// lock scroll / hide html scrollbar
hideScroll()

// allow scroll / show html scrollbar
showScroll()
```

## Direct Script Usage

```html
<script src="hide-show-scroll.min.js"></script>
```

```js
// lock scroll / hide html scrollbar
hideShowScroll.hideScroll()

// allow scroll / show html scrollbar
hideShowScroll.showScroll()
```

## License

MIT
