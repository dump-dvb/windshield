const FADE_DELAY = 150 * 1000;
const FADE_DURATION = 60 * 1000;
var LINES_CACHE = {}
var trackLayers = [];

function fetchLinePlan(line) {
  if (LINES_CACHE.hasOwnProperty(line)) {
    return new Promise(resolve => resolve(LINES_CACHE[line]));
  }

  return fetch(`/res/lines/${line}.json`)
    .then(res => {
      if (res.status != 200) {
        return [];
      } else {
        return res.json();
      }
    })
    .catch(e => {
      return [];
    })
    .then(res => {
      LINES_CACHE[line] = res;
      return res;
    });
}

function distanceBetweenJunctions(line, start, stop) {
  let i;
  for(i = 0; i < line.segments.length; i++) {
    if (line.segments[i].junction === start) {
      break;
    }
  }
  if (i == line.segments.length) {
    console.error("wat");
    return;
  }

  let distance = 0;
  let prev = line.segments[i].pos;
  for(; i < line.segments.length; i++) {
    if (line.segments[i].junction === stop) {
      return distance;
    } else if (line.segments[i].constructor === Array) {
      distance += WGS84Util.distanceBetween(
        { coordinates: prev },
        { coordinates: line.segments[i] },
      );
      prev = line.segments[i];
    }
  }
  console.error("wat");
}

function distanceFromJunction(line, junction, distance) {
  if (!line.segments) {
    console.warn("bogus line", line);
    return;
  }

  let i;
  for(i = 0; i < line.segments.length; i++) {
    if (line.segments[i].junction === junction) {
      break;
    }
  }
  if (i == line.segments.length) {
    console.error("wat");
    return;
  }

  let distance1 = 0;
  let prev = line.segments[i].pos;
  for(; i < line.segments.length; i++) {
    if (line.segments[i].constructor === Array) {
      const segmentLength = WGS84Util.distanceBetween(
        { coordinates: prev },
        { coordinates: line.segments[i] },
      );
      if (distance1 + segmentLength > distance) {
        // how far in this segment
        let a = (distance - distance1) / segmentLength;
        return [
          (1 - a) * prev[0] + a * line.segments[i][0],
          (1 - a) * prev[1] + a * line.segments[i][1],
        ];
      }
      distance1 += segmentLength;
      prev = line.segments[i];
    }
  }
  // line over
}

window.onload = function () {


  {
    delay: -1
    destination_number: 3
    direction: 15
    lat: 0
    line: 68
    lon: 0
    position_id: 231
    run_number: 15
    station_name: ""
    status: 0
    time_stamp: 1651530824
    train_length: 0
  }


  var map = L.map('map').setView([51.05, 13.72], 14)
  L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
    subdomains: 'abcd',
    maxZoom: 20
  }).addTo(map);


  let loc = null;
  function onLocationFound(e) {
    if (loc) {
      loc.setLatLng(e.latlng)
      return;
    }
    loc = L.circleMarker(e.latlng, { weight: 10, opacity: 0.3, fillOpacity: 1, zIndexOffset: 1000 });
    loc.addTo(map);
  }
  map.on('locationfound', onLocationFound);
  map.locate({ setView: true, maxZoom: 16 });


  map.on("click", () => {
    document.getElementById("dynstyle").innerHTML = "";

    trackLayers.forEach(layer => layer.remove());
    trackLayers = [];
  })

  const wsAdd = 'wss://socket.dvb.solutions';
  let socket = null;
  function setupSocket() {
    socket = new WebSocket(wsAdd);
    socket.addEventListener('close', () => { setupSocket() })
    socket.addEventListener('error', () => { setupSocket() })
    socket.addEventListener('message', function (event) {
      const data = JSON.parse(event.data)
      if (data.region_code !== 0) {
        // Dresden only
        return;
      }
      fetchLinePlan(data.line)
        .then(plan => {
          let pos;
          plan.forEach(line => {
            line.segments.forEach(segment => {
              if (segment.junction === data.position_id) {
                pos = segment.pos;
              }
            });
          });
          if (pos && data.lon == 0 && data.lat == 0) {
            console.log("found interpolated pos", pos);
            data.lon = pos[0];
            data.lat = pos[1];
          }
          processVehicle(data);
        })
    })
  }


  let vehicles = {}
  let vehiclesByLine = {}

  function drawVehicle(data) {
    var ico = L.divIcon({
      html: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->\
        <rect x="24" y="50" width="400" height="350" style="fill: #FFF"/>\
        <path style="fill: #eb7f45" d="M224 0C348.8 0 448 35.2 448 80V416C448 433.7 433.7 448 416 448V480C416 497.7 401.7 512 384 512H352C334.3 512 320 497.7 320 480V448H128V480C128 497.7 113.7 512 96 512H64C46.33 512 32 497.7 32 480V448C14.33 448 0 433.7 0 416V80C0 35.2 99.19 0 224 0zM64 256C64 273.7 78.33 288 96 288H352C369.7 288 384 273.7 384 256V128C384 110.3 369.7 96 352 96H96C78.33 96 64 110.3 64 128V256zM80 400C97.67 400 112 385.7 112 368C112 350.3 97.67 336 80 336C62.33 336 48 350.3 48 368C48 385.7 62.33 400 80 400zM368 400C385.7 400 400 385.7 400 368C400 350.3 385.7 336 368 336C350.3 336 336 350.3 336 368C336 385.7 350.3 400 368 400z"/>\
        <text x="224" y="260" style="font: bold 200px sans-serif; fill: #334f6a" text-anchor="middle">' + data.line + '</text>\
      </svg>',
      iconSize: [45, 40], // size of the icon
      iconAnchor: [22, 20], // point of the icon which will correspond to marker's location
      className: `line line-${data.line}`
    });
    let m = L.marker([data.lat, data.lon], { icon: ico });
    m.addTo(map)
      .bindPopup(JSON.stringify(data, null, 2));
    return m;
  }


  function processVehicle(data) {
    let id = `${data.line}-${data.run_number}`

    if (data.lat == 0 || data.lon == 0) {
      return;
    }
    if (id in vehicles) {
      console.log("Vehicle already here ", id)
      const v = vehicles[id];

      if (v.history.length > 0 && v.history[v.history.length - 1].junction == data.position_id) {
        // avoid entries with duplicate junctions in history
        v.history.pop();
      }
      v.history.push({
        junction: data.position_id,
        time: Date.now(),
      });
      // cap history size
      while(v.history.length > 3) {
        v.history.pop();
      }
      // recalc speed
      if (v.history.length > 2) {
        fetchLinePlan(data.line)
          .then(plan => {
            let pos;
            let expectedStops = v.history.map(({ junction }) => junction);
            // select only the lines for which all stops this vehicle
            // has gone through are contained in the right order
            v.lines = plan.filter(line => {
              let stops = [].concat(expectedStops);
              line.segments.forEach(segment => {
                if (segment.junction === stops[0]) {
                  stops.shift();
                }
              });
              return stops.length == 0;
            });
            console.log("lines", v.lines.length);
            if (v.lines.length != 0) {
              console.log("dist", distanceBetweenJunctions(
                v.lines[0],
                v.history[0].junction,
                v.history[v.history.length - 1].junction
              ), "delta", v.history[v.history.length - 1].time - v.history[0].time);
            }
            v.speed = (v.lines.length == 0)
              ? 0
              : (distanceBetweenJunctions(
                v.lines[0],
                v.history[0].junction,
                v.history[v.history.length - 1].junction
              ) / Math.max(v.history[v.history.length - 1].time - v.history[0].time, 1));
            console.log("SPEED", v.speed);
          })
      }

      v.marker.setLatLng([data.lat, data.lon]);
      v.marker.getPopup().setContent(JSON.stringify(data, null, 2));
      return
    }
    let v = {
      marker: drawVehicle(data),
      history: [{
        junction: data.position_id,
        time: Date.now(),
      }],
      lines: [],
      speed: 0,
    };
    vehicles[id] = v;

    v.marker.addEventListener('click', function (event) {
      console.log("Clicked on ", data);
      document.getElementById("dynstyle").innerHTML = ".leaflet-tile{filter:brightness(0.5)}";
      highlight(data.line)

      v.lines.forEach(line => {
        let latLngs = [];
        line.segments.forEach(segment => {
          if (segment.constructor == Array) {
            latLngs.push([segment[1], segment[0]]);
          }
        });
        trackLayers.push(
          L.polyline(latLngs, {
            color: '#FFFF3F',
            opacity: 0.7,
            weight: 8,
          }).addTo(map)
        );
      });
    });

    if (id in vehiclesByLine) {
      vehiclesByLine[data.line].push(v);
    } else {
      vehiclesByLine[data.line] = [v];
    }
  }


  function highlight(line) {
    const st = `.line:not(.line-${line}){filter:brightness(0.5)}`
    if (!document.getElementById("dynstyle").innerHTML.includes(st)) {
      document.getElementById("dynstyle").innerHTML += st;
    }
  }


  setupSocket();

  const params = {
    region: "dresden",
  };
  const options = {
    method: 'POST',
    body: JSON.stringify(params),
    headers: new Headers({ 'content-type': 'application/json' })
  };
  // fetch('https://cors-anywhere.herokuapp.com/https://api.dvb.solutions/state/all', options)
  // fetch('https://api.dvb.solutions/state/all', options)
  //   .then(response => response.json())
  //   .then(response => {
  //     // Do something with response.
  //     let lines = response.lines;
  //     for (l in lines) {
  //       for (id in lines[l].trams) {
  //         let v = lines[l].trams[id];
  //         let stop = stops[v.position_id];
  //         if (stop) {
  //           v.line = l;
  //           v.lat = stop.lat;
  //           v.lon = stop.lon;
  //           processVehicle(v);
  //         }
  //       }
  //       // processVehicle(response[i]);
  //     }
  //   });

  function animate() {
    for(var id in vehicles) {
      const v = vehicles[id];
      // fade out
      const opacity = Math.min(1.0,
        1.0 - (Date.now() - v.history[v.history.length - 1].time - FADE_DELAY) / FADE_DURATION
      );
      if (opacity <= 0.0) {
        v.marker.remove();
        delete vehicles[id];
        continue;
      }
      v.marker.setOpacity(opacity);

      // interpolate
      if (v.history.length > 1 && v.lines.length > 0) {
        const pos = distanceFromJunction(
          v.lines[0],
          v.history[v.history.length - 1].junction,
          v.speed * (Date.now() - v.history[v.history.length - 1].time)
        );
        if (pos) {
          v.marker.setLatLng([pos[1], pos[0]]);
        }
      }
    }

    // loop
    window.requestAnimationFrame(animate);
  }
  window.requestAnimationFrame(animate);
}
