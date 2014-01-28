var menu = [ [ "index.php", "strona główna" ], [ "osobie.php", "o sobie" ],
		[ "program_wyborczy.php", "program wyborczy" ],
		[ "referencje.php", "referencje" ], [ "galeria.php", "galeria" ],
		[ "kontakt.php", "kontakt" ] ];

for (index = 0; index < menu.length; ++index) {

	var n = document.URL.indexOf(menu[index][0]);
	var isActive = "";
	if (n > 0) {
		isActive = "item active";
	} else {
		isActive = "item";
	}
	document.write('<li><a class="' + isActive + '" href="' + menu[index][0]
			+ '">' + menu[index][1] + '</a></li>');

}
