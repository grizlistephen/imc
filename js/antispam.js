// antispam.js

/*
<!--  									-->
<!--  	TODO::							-->
<!--  									-->
<!-- 	Update contact details		    -->
<!-- 	as needed						-->
<!-- 									-->
<!--    Wunna							-->
<!--  									-->
<!--  	Date finished: 					-->
<!--  									-->
<!--  	Comment: 						-->
<!--  			 						-->
<!--  									-->
*/

/*
 Source: Jottings.com - Anti-spam Email Link Obfuscator - Mailto: encryption
*/

/*
{ centre: "",
  url: "",
  name: "",
  address: "",
  phone: "",
  cell: "",
  fax: "",
  email: ""
}
*/
var centres = [
	{	centre: "UK",
		url: "http://www.internationalmeditationcentre.org/introduction.html",
		name: "International Meditation Centre",
		address: "Splatts House, Heddington, Calne, SN11 0PE, UK",
		phone: "+44 1380 850 238",
		cell: "",
		fax: "+44 1380 850 833",
		email: "infoimcuk@internationalmeditationcentre.org"
	},
	{	centre: "Australia NSW",
		url: "http://www.imcnsw.com",
		name: "International Meditation Centre",
		address: "PO Box 3059, Bonnells Bay, NSW 2264, Australia",
		phone: "+61 2 4970 5433",
		cell: "",
		fax: "+61 2 4970 5749",
		email: "10daysvipassanacourse@imcnsw.com"
	},
	{	centre: "Australia WA",
		url: "http://www.imcperth.org",
		name: "International Meditation Centre",
		address: "1525 Jacoby Street, Mahogany Creek, WA 6072, Australia",
		phone: "+61 8 9295 2644",
		cell: "",
		fax: "+61 8 9295 3435",
		email: "imcperthmail@iinet.net.au"
	},
	{	centre: "Austria",
		url: "http://www.imc-austria.com",
		name: "International Meditation Centre",
		address: "St. Michael 6, 9130 Poggersdorf, Austria",
		phone: "+43 4224 2820",
		cell: "",
		fax: "+43 4224 2820 32",
		email: "mail@international-meditationcentre.org"
	},
	{	centre: "USA",
		url: "http://www.ubakhin.org",
		name: "International Meditation Centre",
		address: "4920 Rose Drive, Westminster MD 21158, USA",
		phone: "+1 410 346 7889",
		cell: "",
		fax: "",
		email: "imcusa@ubakhin.org"
	},
	{	centre: "Canada",
		url: "",
		name: "IMC Canada",
		address: "4 Old York Crescent, Kitchener, Ontario, N2B 3G3, Canada",
		phone: "+1 519 896 0533",
		cell: "",
		fax: "",
		email: ""
	},
	{	centre: "Germany",
		url: "http://www.subk-vipassana.de",
		name: "Sayagyi U Ba Khin Gesellschaft",
		address: "In der Wann 39, 35037 Marburg, Germany",
		phone: "+49 6421 34 660",
		cell: "",
		fax: "",
		email: ""
	},
	{	centre: "Italy",
		url: "http://www.ubakhin.eu",
		name: "Mr Renzo Fedele",
		address: "Via Euganea 94, 35033 Bresseo PD, Italy",
		phone: "+39 049 9900 752",
		cell: "",
		fax: "",
		email: "renzo1fedexpress@yahoo.it"
	},
	{ 	centre: "Japan",
		url: "http://www.subakhin.org",
		name: "Sayagyi U Ba Khin Memorial Trust",
		address: "2-2-22 Minato-Machi #209, Naniwa-ku, Osaka City 556-0017, Japan",
		phone: "+81 6 6649 2105",
		cell: "",
		fax: "+81 6 6649 2105",
		email: "EMERYworldwide@WALTZ.PLALA.OR.JP"
	}, 
	{ 	centre: "Netherlands",
		url: "http://www.ubakhin.net",
		name: "Sayagyi U Ba Khin Stichting",
		address: "Centrumlaan 10, 6869 VE Heveadorp, Netherlands",
		phone: "+31 26 3332554",
		cell: "",
		fax: "",
		email: "INFOmoniek@UBAKHIN.NET"
	}, 
	{ 	centre: "Singapore",
		url: "",
		name: "Sayagyi U Ba Khin Memorial Association",
		address: "522 East Coast Road, #12-03 Ocean Park, Singapore 458966",
		phone: "+65 6242 2389",
		cell: "+65 8125 1823",
		fax: "",
		email: "LIMSONGTENG@GMAIL.COM"
	}, 
	{ 	centre: "Switzerland",
		url: "http://www.ubakhin.ch",
		name: "Sayagyi U Ba Khin Gesellschaft",
		address: "c/o Eugen Jung, Abendstrasse 30/119, 3018 Bern, Switzerland",
		phone: "+41 31 991 6141",
		cell: "",
		fax: "",
		email: "EUGEN.JUNGvipassana@HISPEED.CH"
	}, 
	{ 	centre: "USA",
		url: "",
		name: "",
		address: "Mr Joe McCormack, 23 Via Capistrano, Tiburon, CA 94920, USA",
		phone: "+1 415 789 0153",
		cell: "",
		fax: "+1 415 789 0193",
		email: "MCCORMACK23vipassana@COMCAST.NET"
	}, 
	{ 	centre: "Ukraine",
		url: "",
		name: "",
		address: "Mr Alexandre Nossov, Glushkova ave, h. 45, app. 37, Kiev 03187, Ukraine",
		phone: "+380 63 154 20 77",
		cell: "",
		fax: "",
		email: "ALEXANDRE8N@GMAIL.COM"
	}
];

var o = { today: 0, seed: 0 };

o["today"] = new Date();
o["seed"] = o["today"].getTime();

function rnd() {
	"use strict"
	o["seed"] = (o["seed"] * 9301+49297) % 233280;
	return o["seed"] / (233280.0);
};

function rand(number) {
	"use strict"
	return Math.ceil(rnd() * number);
};

// "use strict" ??
function munge(address, isPhoneNumber) {
	isPhoneNumber = isPhoneNumber || false;

	address = address.toLowerCase();
	var coded = "";

	var linktext = address;
	linktext = linktext.trim();
	if (isPhoneNumber) address = address.replace(/\s+/g, '');

	var unmixedkey = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	var inprogresskey = unmixedkey;
	var mixedkey = "";
	var unshuffled = 62;
	
	for (i = 0; i <= 62; i++) {
		var ranpos = rand(unshuffled) - 1;
		var nextchar = inprogresskey.charAt(ranpos);
		mixedkey += nextchar;
		var before = inprogresskey.substring(0,ranpos);
		var after = inprogresskey.substring(ranpos+1,unshuffled);
		inprogresskey = before+after;
		unshuffled -= 1;
	}
	var cipher = mixedkey;

	var shift = address.length;

    var txt =	'<script type=\"text/javascript\">\n' +
        	'<!-'+'-\n' +
            '// Email obfuscator script 2.1 by Tim Williams, University of Arizona\n' +
            '// Random encryption key feature by Andrew Moulden, Site Engineering Ltd\n' +
            '// This code is freeware provided these four comment lines remain intact\n' +
            '// A wizard to generate this code is at http://www.jottings.com/obfuscator/\n' + 
            '// Modified by Steve Etherington: http://etherington.net.au, to include phone number obsfucation when using tel: protocol. \n';

    for (j=0; j<address.length; j++) {
			if (cipher.indexOf(address.charAt(j)) == -1 ) {
				chr = address.charAt(j);
				coded += address.charAt(j);
			}
			else {
				chr = (cipher.indexOf(address.charAt(j)) + shift) % cipher.length;
				coded += cipher.charAt(chr);
			}
    }

	txt +=	'{ coded = \"' + coded + '\"\n' +
		'  key = "'+cipher+'"\n'+
		'  shift=coded.length\n'+
		'  link=""\n'+
		'  for (i=0; i<coded.length; i++) {\n' +
		'    if (key.indexOf(coded.charAt(i))==-1) {\n' +
		'      ltr = coded.charAt(i)\n' +
		'      link += (ltr)\n' +
		'    }\n' +
		'    else {     \n'+
		'      ltr = (key.indexOf(coded.charAt(i))-shift+key.length) % key.length\n'+
		'      link += (key.charAt(ltr))\n'+
		'    }\n'+
		'  }\n';
	
	var endtext = isPhoneNumber ? '\'tel:"+link+"\'>' + linktext + '</a>")\n': '\'mailto:"+link+"\'>' + linktext + '</a>")\n';
	txt += 'document.write("<a href=' + endtext; 
	txt	+= '}\n'+
       	'//-'+'->\n' +
       	'<' + '/script><noscript title="Anti spam measure.">Javascript needed to view and use email.' +
		'<'+'/noscript>\n';
    return txt;
}


/*
	Inject Centre addresses into page.
	This will add another layer of abstraction in the browser DOM making email/phone harvesting a little trickier still.
	If needed it will also make internationalisation easier as the only change is to the array content.
*/
function injectCentres(){
	for (var i = 0; i < centres.length; i++){
		document.write('\t\t\t\t\t<div class="row contact">');  
		document.write('\t\t\t\t\t\t<div class="col-xs-12 col-sm-12 col-lg-2">');  

		if (centres[i].url.length > 0 ){
			document.write('\t\t\t\t\t\t\t<a href="' + centres[i].url +'">');  
			document.write(centres[i].centre);
			document.write('</a>');
		} else {
			document.write('\t\t\t\t\t\t\t<b>' + centres[i].centre + '</b>');
			if (centres[i].centre == 'USA') document.write('<br><small>West Coast</small>'); 
		} 	
		document.write('\t\t\t\t\t</div>');
		document.write('\t\t\t\t\t\t<div class="col-xs-12 col-sm-12 col-lg-10">');
	  	
	  	if (centres[i].name.length > 0 ) {
	  		document.write('\t\t\t\t\t\t\t' + centres[i].name + '<br>');
	  	}
	  	if (centres[i].address.length > 0 ) {
	  		document.write('\t\t\t\t\t\t\t' + centres[i].address + '<br>');
	  	}
	  	if (centres[i].phone == centres[i].fax ){
			document.write('\t\t\t\t\t\t\t' + 'Tel/Fax: ' + munge(centres[i].phone, true) );
		} else {
			if (centres[i].phone.length > 0 ){
				document.write('\t\t\t\t\t\t\t' + 'Tel: ' + munge(centres[i].phone, true) );
			}
			if (centres[i].cell.length > 0 ){
				document.write(', Mobile: ' + munge(centres[i].cell, true) );
			}
			if (centres[i].fax.length > 0 ){
				document.write(', Fax: ' + munge(centres[i].fax, true) );
			}
		}
	  	document.write('<br>');
	  	if (centres[i].email.length > 0 ){
	  		document.write('\t\t\t\t\t\t\t' + 'Email: ' + munge(centres[i].email) );
	  	}
		document.write('\t\t\t\t\t\t</div>');  
		document.write('\t\t\t\t\t</div>'); 
	}
	 
}

