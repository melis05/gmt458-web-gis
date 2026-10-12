// Hacettepe University Beytepe Campus: [Longitude, Latitude]
const HACETTEPE_LONLAT = [32.7350, 39.8667];
const OL_ZOOM_THRESHOLD = 12;

// Point Feature
const markerFeature = new ol.Feature({
  geometry: new ol.geom.Point(ol.proj.fromLonLat(HACETTEPE_LONLAT)),
  name: 'You can find me here'
});

// ISSUE 1 (OpenLayers): Zoom threshold using minZoom on vector layer
const vectorLayer = new ol.layer.Vector({
  minZoom: OL_ZOOM_THRESHOLD,
  source: new ol.source.Vector({
    features: [markerFeature]
  }),
  style: new ol.style.Style({
    image: new ol.style.Circle({
      radius: 9,
      fill: new ol.style.Fill({ color: '#b5657b' }),
      stroke: new ol.style.Stroke({ color: '#000000', width: 3 })
    }),
    text: new ol.style.Text({
      text: 'You can find me here',
      font: '14px VT323, monospace',
      offsetY: -18,
      fill: new ol.style.Fill({ color: '#000000' }),
      backgroundFill: new ol.style.Fill({ color: '#ffffff' }),
      padding: [4, 6, 4, 6]
    })
  })
});

// ISSUE 2 (OpenLayers): wrapX: false and extent restriction
const olMap = new ol.Map({
  target: 'olMap',
  layers: [
    new ol.layer.Tile({
      source: new ol.source.OSM({ wrapX: false })
    }),
    vectorLayer
  ],
  view: new ol.View({
    center: ol.proj.fromLonLat(HACETTEPE_LONLAT),
    zoom: 15,
    minZoom: 2,
    extent: [-20037508.34, -20037508.34, 20037508.34, 20037508.34]
  })
});

window.olMapInstance = olMap;

// Update zoom badge
const olZoomInfo = document.getElementById('olZoomInfo');
function showOlZoom() {
  const z = Math.round(olMap.getView().getZoom());
  if (olZoomInfo) {
    olZoomInfo.textContent = 'Zoom: ' + z + ' (Points appear at zoom ' + OL_ZOOM_THRESHOLD + ' and above)';
  }
}
olMap.getView().on('change:resolution', showOlZoom);
showOlZoom();