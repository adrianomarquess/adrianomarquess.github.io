mapboxgl.accessToken =
  'pk.eyJ1IjoiZHJpbWFycXVlcyIsImEiOiJjamw0NHhqaWcyOGVmM3dsbWh1Z2NkdXVsIn0.pT05BPiijnI6y1y9D5Swmw';

const coordinates = [-46.9043886, -23.5323186];

const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/dark-v9',
  center: coordinates,
  zoom: 16
});

map.addControl(new mapboxgl.NavigationControl());

const marker = new mapboxgl.Marker({ color: '#fed150' })
  .setLngLat(coordinates)
  .addTo(map);
