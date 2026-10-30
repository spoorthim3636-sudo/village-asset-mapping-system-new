// ===================================
// VILLAGE ASSET MAPPING SYSTEM
// ===================================

// Initialize Interactive Map
var map = L.map('map').setView([12.3000, 76.6400], 14);

// OpenStreetMap Layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);


// ===================================
// VILLAGE ASSET DATA
// ===================================

var assets = [

    {
        name: "Government High School",
        type: "School",
        lat: 12.3000,
        lng: 76.6400,
        description: "Government educational institution."
    },

    {
        name: "Primary Health Centre",
        type: "Hospital",
        lat: 12.2920,
        lng: 76.6450,
        description: "Primary healthcare facility."
    },

    {
        name: "Community Water Tank",
        type: "Water Tank",
        lat: 12.2980,
        lng: 76.6500,
        description: "Village drinking water facility."
    },

    {
        name: "Village Panchayat Office",
        type: "Office",
        lat: 12.3050,
        lng: 76.6350,
        description: "Village administration office."
    },

    {
        name: "Main Village Road",
        type: "Road",
        lat: 12.3020,
        lng: 76.6420,
        description: "Main road connecting village areas."
    }

];


// ===================================
// AUTOMATIC DASHBOARD COUNTS
// ===================================

function updateDashboard() {

    document.getElementById("school-count").textContent =
        assets.filter(a => a.type === "School").length;

    document.getElementById("hospital-count").textContent =
        assets.filter(a => a.type === "Hospital").length;

    document.getElementById("water-count").textContent =
        assets.filter(a => a.type === "Water Tank").length;

    document.getElementById("road-count").textContent =
        assets.filter(a => a.type === "Road").length;

}


// ===================================
// DISPLAY MAP MARKERS
// ===================================

var markerLayer = L.layerGroup().addTo(map);

function displayAssets() {

    markerLayer.clearLayers();

    var searchText = document.getElementById("search")
        .value.toLowerCase();

    var selectedCategory =
        document.getElementById("category-filter").value;

    var filteredAssets = assets.filter(function(asset) {

        var matchesSearch =
            asset.name.toLowerCase().includes(searchText) ||
            asset.type.toLowerCase().includes(searchText);

        var matchesCategory =
            selectedCategory === "All" ||
            asset.type === selectedCategory;

        return matchesSearch && matchesCategory;

    });

    filteredAssets.forEach(function(asset) {

        var marker = L.marker([asset.lat, asset.lng]);

        marker.bindPopup(
            "<h3>" + asset.name + "</h3>" +
            "<b>Category:</b> " + asset.type + "<br>" +
            "<b>Details:</b> " + asset.description
        );

        marker.addTo(markerLayer);

    });

}


// ===================================
// SEARCH FUNCTIONALITY
// ===================================

document.getElementById("search")
    .addEventListener("input", displayAssets);


// ===================================
// CATEGORY FILTER
// ===================================

document.getElementById("category-filter")
    .addEventListener("change", displayAssets);


// ===================================
// INITIALIZE PROJECT
// ===================================

updateDashboard();

displayAssets();

console.log("Village Asset Mapping System Loaded!");
console.log("Total Assets:", assets.length);
