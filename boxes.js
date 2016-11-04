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
