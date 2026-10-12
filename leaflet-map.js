// Coordinates of Hacettepe University Beytepe Campus
const HACETTEPE_COORDS = [39.8667, 32.7350];
const ZOOM_THRESHOLD = 12;

// ISSUE 2 (Leaflet): Prevent earth from repeating (noWrap, maxBounds, minZoom)
const map = L.map('leafletMap', {
  minZoom: 2,
  maxBounds: [[-90, -180], [90, 180]],
  maxBoundsViscosity: 1.0
}).setView(HACETTEPE_COORDS, 15);

window.leafletMapInstance = map;

// OSM Tile Layer
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  noWrap: true
}).addTo(map);

// ISSUE 1 (Leaflet): Zoom threshold control
const markerGroup = L.layerGroup();

// Marker and Popup with "You can find me here"
const hacettepeMarker = L.marker(HACETTEPE_COORDS)
  .bindPopup('<strong>You can find me here</strong><br>Hacettepe University Beytepe Campus');

hacettepeMarker.addTo(markerGroup);

const zoomInfo = document.getElementById('zoomInfo');

function updateMarkers() {
  const currentZoom = map.getZoom();
  if (currentZoom >= ZOOM_THRESHOLD) {
    if (!map.hasLayer(markerGroup)) {
      map.addLayer(markerGroup);
      hacettepeMarker.openPopup();
    }
  } else {
    if (map.hasLayer(markerGroup)) {
      map.removeLayer(markerGroup);
    }
  }
  if (zoomInfo) {
    zoomInfo.textContent = 'Zoom: ' + currentZoom + ' (Markers appear at zoom ' + ZOOM_THRESHOLD + ' and above)';
  }
}

map.on('zoomend', updateMarkers);
updateMarkers();