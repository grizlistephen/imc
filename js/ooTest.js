/*
    ooTest.js
    Functions.js 	// better name
*/


var Functions = (function(){
	"use strict"
	
	/*
		disable right click context menu for images
	*/
	let disableContextMenu = function (e) {
			e = e || event;
			var elm = e.target.tagName || e.srcElement.tagName;
			if (elm == "IMG") {
				return false;
			}
		};
		
	/*
		anti spam measure from old site
		the case conversion seems pointless except for appearances. It is harmless.
		the document.write statement mitigates email harvesting to some extent
		this is so because email robots parse the source not the runtime DOM
	 */
	let clean = function (msg) {
			msg = msg || "";
			msg = msg.replace(/[^A-Z0-9.@]/g, "").toLowerCase();
			document.write("<a href=mailto:" + msg + ">" + msg + "</a>");
		};
		
		/* 
			Not thoroughly tested. 
			May not be needed with bootstrap.
			Currently not exposed as part of Functions API.
		
		*/
	let isMobile = function() {
			return (
				( navigator.userAgent.indexOf( "iPhone" ) > -1 ) ||
				( navigator.userAgent.indexOf( "iPod" ) > -1 ) ||
				( navigator.userAgent.indexOf( "iPad" ) > -1 ) ||
				( navigator.userAgent.indexOf( "Android" ) > -1 ) ||
				( navigator.userAgent.indexOf( "webOS" ) > -1 )
			);
		};
		
	return{
		noRightClick: disableContextMenu,
		clean: clean
		/* isMobile: isMobile */
	};
})();

document.oncontextmenu = Functions.noRightClick;


/**
	Usage:
	document.oncontextmenu = Functions.noRightClick;
	
	Functions.clean(someEmail);
	
	if ( Functions.isMobile() ) { /* do mobile stuff */ }