window.onload = function() {
  var map = L.map('map').setView([51.05, 13.72], 14)
  L.tileLayer('https://tileserver.memomaps.de/tilegen/{z}/{x}/{y}.png', {
    attribution: 'OpenStreetMap',
    maxZoom: 18,
  }).addTo(map)

  function width(data) {
    return  30 + 20 * data.train_length
  }
  
  function pointToBounds(data) {
    const w = width(data)
    const h = 20
    if (data.lat && data.lon && Math.abs(data.lat) > 0.01 && Math.abs(data.lon) > 0.01) {
      const p = map.latLngToLayerPoint(L.latLng(data.lat, data.lon))
      return [
        map.layerPointToLatLng([p.x - w / 2, p.y - h / 2]),
        map.layerPointToLatLng([p.x + w / 2, p.y + h / 2]),
      ]
    }
  }

  var vehicles = {}

  map.on('zoomlevelchange', function () {
    for(var k in vehicles) {
      vehicles[k].setBounds(vehicleBounds(vehicles[k].windshieldData))
    }
  })

  const socket = new WebSocket('wss://socket.dvb.solutions')

  socket.addEventListener('message', function (event) {
    const data = JSON.parse(event.data)
    console.log('Message ', data)

    const bounds = pointToBounds(data)

    const id = data.line + "-" + data.run_number
    if (!vehicles[id] && bounds) {
      var svgElement = document.createElementNS("http://www.w3.org/2000/svg", "svg")
      svgElement.setAttribute('xmlns', "http://www.w3.org/2000/svg")
      svgElement.setAttribute('viewBox', "0 0 " + width(data) + " 20")
      svgElement.innerHTML = '<rect width="' + width(data) + '" height="20" style="fill: #FFDF3F"/><text x="4" y="16" style="font: bold 16px sans-serif; fill: black">' + data.line + '</text>'
      vehicles[id] = L.svgOverlay(svgElement, bounds)
      vehicles[id].windshieldData = data
      vehicles[id].addTo(map)
    } else if (vehicles[id] && bounds) {
      const vehicle = vehicles[id]
      vehicle.windshieldData = data
      vehicle.setBounds(bounds)
    }
  })
}
