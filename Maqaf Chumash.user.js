// ==UserScript==
// @name         Maqaf Chumash
// @namespace    http://binjomin.hu/
// @version      0.1
// @description  change dashes to maqafs on Torat Emet
// @author       Binjomin Szanto-Varnagy
// @match        http://www.toratemetfreeware.com/online/*
// @grant        none
// ==/UserScript==

(function() {
    var spans = document.getElementsByTagName("span");

    for (let span of spans) {
        let status = span.getAttribute('style');
        if (status === 'font-family:Ezra SIL SR;') {
            var content = span.textContent;

            const searchRegExp = /-/g;
            const replaceWith = '־';

            const result = content.replace(searchRegExp, replaceWith);
            span.textContent = result;
        }
    }

})();