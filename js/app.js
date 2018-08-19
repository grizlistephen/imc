/*
    app.js
	IMC global JavaScript functions

*/

/**
	Not sure we should be doing this, i.e. preventing image printing and downloading 
	
	The general advice to developers is not to for various 'this is the Internet' reasons.
	Whatever we do can be bypassed.
	
	I have limited the right click interference to images only for now and not bothered to display an explanatory message.
	
	Alternative:
	We could display a transparent gif in the HTML image tag(s) and then in the css display the actual image. 
	No less / no more secure than what we currently have except that if Javascript is turned off the css route will still work.
	Will require plenty of testing...
*/

/*
	disable right click context menu for images
*/
function disableContextMenu(e) {
	"use strict"
	e = e || event;
	var elm = e.target.tagName || e.srcElement.tagName;
	if (elm == "IMG") {
		return false;
	}
}
document.oncontextmenu = disableContextMenu;

/*
	disable right click context menu for entire page
*/
/*
document.addEventListener("contextmenu", function(e){
	"use strict"
	e.preventDefault();
	}, false);
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

function isMobile() {
    return (
        ( navigator.userAgent.indexOf( "iPhone" ) > -1 ) ||
        ( navigator.userAgent.indexOf( "iPod" ) > -1 ) ||
        ( navigator.userAgent.indexOf( "iPad" ) > -1 ) ||
        ( navigator.userAgent.indexOf( "Android" ) > -1 ) ||
        ( navigator.userAgent.indexOf( "webOS" ) > -1 )
    );
}