var panel = document.getElementById("panel");

var locations = document.getElementsByClassName("controls");

if (!apple()) {
	panel.style.backgroundColor = "#1A1A1B";
}

for (var i = 0; i < locations.length; i++) {
	locations[i].addEventListener("click", pan);
}

function apple() {
	if (window.navigator.appVersion.indexOf("Mac OS X") != -1) {
		return true;
	};
	return false;
}

function pan(event) {

	id = event.target.id;

	if (id == "unimelb") {
		map.flyTo({
			center: [144.961, -37.796],
			zoom: 15,
			speed: 1
		});
		return;
	}

	if (id == "pdp") {
		map.flyTo({
			center: [144.956, -37.684],
			zoom: 15,
			speed: 1
		});
		return;
	}
}