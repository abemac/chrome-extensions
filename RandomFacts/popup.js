function myFunction() {
		var x = document.getElementById("searchbar");
		var site = document.getElementById("site").value
		if (site == "Dictionary") {
			document.getElementById("ultimatesearch").innerHTML = "<a href = 'http://www.oxforddictionaries.com/us/definition/american_english/" + x.value + "' target = '_blank'> ¿Qué significa? </a>";
		}
		else if (site == "DiningHallMenu") {
			document.getElementById("ultimatesearch").innerHTML = "<a href = 'http://compuweb.facilities.udel.edu:8080/?sid=" + x.value + "'target = _blank'> Worth a swipe? </a>";
		}
		else if (site == "Google") {
			if (x.value == "") {
			document.getElementById("ultimatesearch").innerHTML = "<a href = 'boris.html' target = 'testiframe'> Try Again </a>";
			}
			else {
			document.getElementById("ultimatesearch").innerHTML = "<a href = 'https://www.google.com/?gws_rd=ssl#q=" + x.value + "' target = '_blank'> Google Search </a>";
			}
		}
		else if (site == "Thesaurus") {
			document.getElementById("ultimatesearch").innerHTML = "<a href = 'http://www.thesaurus.com/browse/" + x.value + "?s=t' target = '_blank'> Osmose Metonyms </a>";
		}
		else if (site == "Translate") {
			document.getElementById("ultimatesearch").innerHTML = "<a href = 'https://translate.google.com/#en/es/" + x.value + "' target = '_blank'> Traducir </a>";
		}
		else if (site == "Youtube") {
			document.getElementById("ultimatesearch").innerHTML = "<a href = 'http://www.youtube.com/results?search_query=" + x.value + "' target = '_blank'> Youtube Search </a>";
		}
	}