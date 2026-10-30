
// Initialize Village Map
var map = L.map('map').setView([12.3000, 76.6400], 14);

// Add OpenStreetMap Layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Village Asset Data
var assets = [
    {
        name: "Government High School",
        type: "School",
        lat: 12.3000,
        lng: 76.6400
    },
    {
        name: "Primary Health Centre",
        type: "Hospital",
        lat: 12.2920,
        lng: 76.6450
    },
    {
        name: "Community Water Tank",
        type: "Water Tank",
        lat: 12.2980,
        lng: 76.6500
    },
    {
        name: "Village Panchayat Office",
        type: "Office",
        lat: 12.3050,
        lng: 76.6350
    }
];

// Add Markers to Map
assets.forEach(function(asset) {

    var marker = L.marker([asset.lat, asset.lng])
        .addTo(map);

    marker.bindPopup(
        "<b>" + asset.name + "</b><br>" +
        "Category: " + asset.type
    );
});

// Display Asset Counts
console.log("Village Assets Loaded:", assets.length);

// Show Map Successfully
console.log("Village Asset Mapping System Ready!");
