// ==UserScript==
// @name         Mikraot Gedolot footnote remover
// @namespace    http://binjomin.hu/
// @version      0.1
// @description  Remove footnotes for preparing video shiur
// @author       Binjomin Szanto-Varnagy
// @match        https://mg.alhatorah.org/*
// @grant        none
// ==/UserScript==

(function() {
    setTimeout(function() {
        var divs = document.getElementsByClassName("he");

        for (let div of divs) {
            var sups = div.getElementsByTagName("sup");

            // remove all <a> elements
            while (sups[0]) {
                sups[0].parentNode.removeChild(sups[0])
            }
        }
    }, 2000);
})();