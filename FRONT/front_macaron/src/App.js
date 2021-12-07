import './App.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const MyMap = () =>{
  var map = L.map('map').setView([51.505, -0.09], 13);
  L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: 'mapbox/streets-v11',
      tileSize: 512,
      zoomOffset: -1,
      accessToken: 'your.mapbox.access.token'
  }).addTo(map);
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <body>
            <h1>Map</h1>
            <div id="map"></div>
            <MyMap/>
      </body>
    </div>
  );
}

export default App;
