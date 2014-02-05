for (index = 0; index < menu.length; index++) {

	document.write('<a href="' + menu[index][0] + '"><font color="#FFFFFF">'
			+ menu[index][1] + '</font></a>');
	if (index < menu.length - 1) {
		document.write('&nbsp;&nbsp;&nbsp;&nbsp;');
	}
}
