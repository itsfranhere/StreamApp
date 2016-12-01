console.log("mapbox.js ready to roll!")

mapboxgl.accessToken = 'pk.eyJ1IjoiaXRzZnJhbmhlcmUiLCJhIjoiY2l2ZG41YW01MDA1ZTJ1cWttYzlqdHhpcSJ9.dmJAocs2G0wH0CjoSNH0RA'

var map = new mapboxgl.Map(
{
  // container id specified in the HTML
  container: 'map',
  // style URL
  style: 'mapbox://styles/mapbox/light-v9',
  // initial position in [long, lat] format
  center: [0.005353, 51.501597],
  // initial zoom
  zoom: 10
})