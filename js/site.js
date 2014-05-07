function init() {

	var map = L.map('map').setView([47.618, -122.362], 11);
	L.tileLayer('http://{s}.tiles.mapbox.com/v3/examples.map-h67hf2ic/{z}/{x}/{y}.png', {
		attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
		maxZoom: 18
	}).addTo(map);

	L.geoJson(waka, {
		onEachFeature: onEachFeature,
		style: function(feature) {
			return {color: feature.properties['marker-color'] };
		},
		pointToLayer: function(feature, latlng) {
			return new L.CircleMarker(latlng, {radius: 10, fillOpacity: 0.6});
		}
	}).addTo(map);

	function onEachFeature(feature, layer) {
		// does this feature have a property named popupContent?
		var point = feature.properties;
		if (point && point.Name) {
			layer.bindPopup('<strong>' + point.Name + '</strong><br>CSO_Status: ' + point.CSO_Status);
		}
	}

}

window.onLoad = init();