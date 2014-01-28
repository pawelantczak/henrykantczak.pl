for (index = 0; index < menu.length; index++) {

	document.write('<a href="' + menu[index][0] + '"><font color="#FFFFFF">'
			+ menu[index][1] + '</font></a>');
	if (index < menu.length - 1) {
		document.write('&nbsp;&nbsp;&nbsp;&nbsp;');
	}
}

(function(i, s, o, g, r, a, m) {
	i['GoogleAnalyticsObject'] = r;
	i[r] = i[r] || function() {
		(i[r].q = i[r].q || []).push(arguments)
	}, i[r].l = 1 * new Date();
	a = s.createElement(o), m = s.getElementsByTagName(o)[0];
	a.async = 1;
	a.src = g;
	m.parentNode.insertBefore(a, m)
})(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');

ga('create', 'UA-307820-17', 'henrykantczak.pl');
ga('send', 'pageview');
