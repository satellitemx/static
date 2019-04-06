var panel = document.getElementById("panel");
var searchbox = document.getElementById("searchbox");
var search = document.getElementById("search");
var go = document.getElementById("go");
var locations = document.getElementsByClassName("controls");

if (!apple()) {
	panel.style.backgroundColor = "rgba(26, 26, 26, 0.8)";
}

window.addEventListener('resize', shiftPanel);

go.addEventListener('click', doSearch);

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

function shiftPanel() {

	if (window.innerWidth <= 640) {
		panel.style.top = "40px";
	} else {
		panel.style.top = "30px";
	}
}

function doSearch() {
	if (searchbox.value == "") {
		return;
	}
	alert("You searched " + searchbox.value);
	searchbox.value = "";
}

shiftPanel();