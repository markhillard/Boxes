# Boxes

[![Boxes releases](https://img.shields.io/github/release/markhillard/Boxes.svg)](https://github.com/markhillard/Boxes/releases)

Boxes is a tiny scoop of vanilla JavaScript that allows you to visualize HTML elements in high contrast. It helps with debugging layout issues and provides a quick way to outline elements without opening your web browser's inspector.

## Bookmarklet

1). Create a new bookmark called **Boxes** in your web browser and paste in the following location:

```
javascript:void%20function(){document.body.innerHTML+='%3Cstyle%20id=%22boxes%22%3E*{background:%23000!important;border-color:%23000!important;box-shadow:0%200%201px%200%20%23f00!important;color:%23fff!important;cursor:default!important;}*:hover{box-shadow:0%200%201px%200%20%23080!important;}%23boxes-close{background-color:%23fff!important;border-radius:2px!important;border:2px%20solid%20%23ccc!important;box-shadow:none!important;color:%23000!important;cursor:pointer!important;font-family:%20inherit!important;font-size:1rem!important;padding:.5rem%201rem!important;position:fixed!important;right:1rem!important;text-decoration:none!important;top:1rem!important;}%23boxes-close:hover{background-color:%23ccc!important;}%3C/style%3E';var%20o=document.createElement(%22a%22),t=document.createTextNode(%22(x)%20close%22);o.setAttribute(%22id%22,%22boxes-close%22),o.appendChild(t),document.body.appendChild(o),document.getElementById(%22boxes-close%22).onclick=function(){document.getElementById(%22boxes%22).remove(),this.remove()}}();
```

2). Click your new bookmark on the page you want to debug

3). Click the `(x) close` button or refresh the page to remove bookmarklet styles

## Console

Open your web browser's developer tools and run the contents of [boxes.js](boxes.js) (or [boxes.min.js](boxes.min.js)) in console:

```js
(function () {
    document.body.innerHTML += '\
        <style id="boxes">\
            * {\
            background:#000 !important;\
            border-color:#000 !important;\
            box-shadow:0 0 1px 0 #f00 !important;\
            color:#fff !important;\
            cursor:default !important;\
            }\
            \
            *:hover {\
            box-shadow:0 0 1px 0 #080 !important;\
            }\
            \
            #boxes-close {\
            background-color:#fff !important;\
            border-radius:2px !important;\
            border:2px solid #ccc !important;\
            box-shadow:none !important;\
            color:#000 !important;\
            cursor:pointer !important;\
            font-family: inherit !important;\
            font-size:1rem !important;\
            padding:.5rem 1rem !important;\
            position:fixed !important;\
            right:1rem !important;\
            text-decoration:none !important;\
            top:1rem !important;\
            }\
            \
            #boxes-close:hover {\
            background-color:#ccc !important;\
            }\
        </style>\
    ';
    var e = document.createElement('a');
    var t = document.createTextNode('(x) close');
    e.setAttribute('id', 'boxes-close');
    e.appendChild(t);
    document.body.appendChild(e);
    document.getElementById('boxes-close').onclick = function () {
        document.getElementById('boxes').remove();
        this.remove();
    };
})();
```

## Browser Support

Boxes works in all modern web browsers and IE9+.

## Credit

This project was inspired by [Ghost CSS](https://gist.github.com/wernull/e9456b7aba5a3f9f91a6).
