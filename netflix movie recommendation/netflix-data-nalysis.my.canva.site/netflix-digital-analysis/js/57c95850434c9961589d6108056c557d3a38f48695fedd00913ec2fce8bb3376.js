! function() {
    "use strict";

    function e() {
        const e = document.getElementById("menuToggle");
        e && window.addEventListener("hashchange", (() => function(e) {
            e.checked = !1
        }(e)))
    }
    "loading" === document.readyState ? window.addEventListener("DOMContentLoaded", e) : e()
}();