// Layer Peta
	var osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
		maxZoom: 19,
		attribution: '©️ OpenStreetMap'
	});
 
// Basemap
var map = L.map('mapid', {
    center: [-7.183072981118777, 108.38209764864128],
    zoom: 15,
    layers: [osm]
});
    var polygon = [{
            "type": "FeatureCollection",
            "features": [
              {
                "type": "Feature",
                "properties": {
                  "namart": "Bahsan Nawawi",
                  "jumlahkk": 21,
                  "jumlahwarga": 66
                },
                "geometry": {
                  "type": "Polygon",
                  "coordinates": [
                    [
                      [108.37867919193152,-7.17344797389147 ],
                      [108.3974084835257,-7.174850439068924],
                      [108.39263781491209,-7.185281138176822],
                      [108.38097618052326,-7.196149847262388],
                      [108.37867919193152,-7.17344797389147]
                    ]
                  ]
                }
              }
            ]
          }]
var map = L.geoJSON(polygon, {
onEachFeature: function (feature, osm) {
osm.bindPopup('<p>Nama RT: '+feature.properties.namart+'</p><p>Jumlah KK: '+feature.properties.jumlahkk+'</p><p>Jumlah Warga: '+feature.properties.jumlahwarga+'</p>');
}
}).addTo(map);

var point = [{
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "kepala": "Tatang",
        "jmlanggota": 3,
        "jmllaki": 2,
        "jmlpr": 1
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          108.38422778, -7.19025000
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "kepala": "iwa",
        "jmlanggota": 3,
        "jmllaki": 1,
        "jmlpr": 2
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          108.38661667,
          -7.18576111
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "kepala": "Karso",
        "jmlanggota": 4,
        "jmllaki": 2,
        "jmlpr": 2
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          108.38501944,
          -7.18308889
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "kepala": "Ocid",
        "jmlanggota": 4,
        "jmllaki": 2,
        "jmlpr": 2
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          108.38207222,
          -7.18198056
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "kepala": "Indra.",
        "jmlanggota": 2,
        "jmllaki": 1,
        "jmlpr": 1
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          108.38733056,
          -7.17749722
        ]
      }
    }
  
  ]
}]
  var map = L.geoJSON(point, {
  onEachFeature: function (feature, osm) {
  osm.bindPopup('<p>Nama Kepala Keluarga: '+feature.properties.kepala+'</p><p>Jumlah Anggota: '+feature.properties.jmlanggota+'</p><p>Jumlah Laki-laki: '+feature.properties.jmllaki+'</p><p>Jumlah Perempuan: '+feature.properties.jmlpr+'</p>');
  }
  }).addTo(map);