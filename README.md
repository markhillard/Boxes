# Boxes

Boxes is a tiny scoop of vanilla JavaScript that allows you to visualize HTML elements in high contrast. It helps with debugging layout issues and provides a quick way to outline elements without opening your web browser's inspector.

## Bookmarklet

Create a new bookmark called **Boxes** in your web browser and paste in the following location:

```
javascript:void%20function(){document.body.innerHTML+=%22%3Cstyle%3E*{background:%23000!important;border-color:%23000!important;box-shadow:0%200%201px%200%20%23a94442!important;color:%23fff!important;cursor:default!important;}*:hover{box-shadow:0%200%201px%200%20%233c763d!important;}%3C/style%3E%22}();
```

## Console

Open your web browser's developer tools and run the contents of [boxes.js](boxes.js) in console:

```js
(function () {
    document.body.innerHTML += "\
        <style>\
            * {\
            background:#000 !important;\
            border-color:#000 !important;\
            box-shadow:0 0 1px 0 #a94442 !important;\
            color:#fff !important;\
            cursor:default !important;\
            }\
            \
            *:hover {\
            box-shadow:0 0 1px 0 #3c763d !important;\
            }\
        </style>\
    ";
})();
```

## Browser Support

Boxes works in all modern web browsers and IE9+.

## Credit

Thanks to [@wernull](https://gist.github.com/wernull) for creating [Ghost CSS](https://gist.github.com/wernull/e9456b7aba5a3f9f91a6).

I used `box-shadow` instead of `outline`, changed some colors, and added a few more CSS properties to make it pretty.
