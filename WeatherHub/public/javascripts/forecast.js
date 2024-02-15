// forecast.js
document.addEventListener('DOMContentLoaded', () => {
    const coordinatesDiv = document.getElementById('coordinates');
    const map = L.map('map', {
      minZoom: 1,
      maxZoom: 5,
      zoomSnap: 0.25,
      zoomControl: false,
    }).setView([0, 0], 2);
  
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
    }).addTo(map);
  
    function onMapClick(e) {
      const lat = e.latlng.lat.toFixed(4);
      const lng = e.latlng.lng.toFixed(4);
  
      coordinatesDiv.style.display = 'block';
    }
  
    map.on('click', onMapClick);
  });