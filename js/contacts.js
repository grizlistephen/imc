/**
    contacts.js
*/

/*
 * anti spam measure from old site
 * the case conversion seems pointless except for appearances. It is harmless.
 * the document.write statement mitigates email harvesting to some extent
 * this is so because email robots parse the source not the runtime DOM
 */
function clean(msg) {
    "use strict"
    msg = msg || "";
    msg = msg.replace(/[^A-Z0-9.@]/g, "").toLowerCase();
    document.write("<a href=mailto:" + msg + ">" + msg + "</a>");
}