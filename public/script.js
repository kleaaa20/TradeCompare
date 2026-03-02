/* GLOBAL VARIABLES*/
let ratingsChart;
let currentPage = 1;
const rowsPerPage = 5;
let platformData = [];


/*  SEARCH TABLE*/
function searchTable() {
    const input = document
        .getElementById("searchInput")
        .value.toLowerCase();

    const filtered = platformData.filter(p =>
        Object.values(p).join(" ").toLowerCase().includes(input)
    );

    currentPage = 1;
    renderTable(filtered);
}


/* SORT TABLE*/
function sortTable(column) {

    const keys = ["name", "fees", "minDeposit", "bestFor", "rating"];

    platformData.sort((a, b) => {
        if (keys[column] === "rating")
            return b.rating - a.rating;

        return String(a[keys[column]])
            .localeCompare(String(b[keys[column]]));
    });

    renderTable();
}


/* DARK MODE*/
function toggleDarkMode() {
    document.body.classList.toggle("dark");
}


/*  RENDER TABLE + PAGINATION*/
function renderTable(data = platformData) {

    const tbody = document.querySelector("#platformTable tbody");
    tbody.innerHTML = "";

    const start = (currentPage - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    const pageItems = data.slice(start, end);

    pageItems.forEach(p => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td><a href="${p.url}" target="_blank">${p.name}</a></td>
            <td>${p.fees}</td>
            <td>${p.minDeposit}</td>
            <td>${p.bestFor}</td>
            <td class="rating">${p.rating}</td>
        `;

        tbody.appendChild(row);
    });

    document.getElementById("pageInfo").innerText =
        `Page ${currentPage} of ${Math.ceil(data.length / rowsPerPage)}`;
}


function nextPage() {
    if (currentPage < Math.ceil(platformData.length / rowsPerPage)) {
        currentPage++;
        renderTable();
    }
}

function prevPage() {
    if (currentPage > 1) {
        currentPage--;
        renderTable();
    }
}


/* FOREX CHARTS*/
function initForexCharts() {

    const forexCharts = [
        { id: "usdEurChart", label: "USD/EUR", data: [0.88,0.89,0.87,0.91,0.90,0.92,0.91], color:"#0b5ed7"},
        { id: "usdJpyChart", label: "USD/JPY", data: [115,116,114,117,118,116,117], color:"#28a745"},
        { id: "gbpUsdChart", label: "GBP/USD", data: [1.32,1.31,1.33,1.34,1.32,1.35,1.36], color:"#ffc107"}
    ];

    forexCharts.forEach(chart => {

        const canvas = document.getElementById(chart.id);
        if (!canvas) return;

        new Chart(canvas.getContext("2d"), {
            type: "line",
            data: {
                labels: ["Jan","Feb","Mar","Apr","May","Jun","Jul"],
                datasets: [{
                    label: chart.label,
                    data: chart.data,
                    borderColor: chart.color,
                    backgroundColor: chart.color + "33",
                    fill: true,
                    tension: 0.3
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins:{
                    legend:{ position:"top" }
                }
            }
        });
    });
}


/*  LOAD PLATFORMS FROM API*/
async function loadPlatforms() {

    try {
        const res = await fetch("/api/platforms");
        const data = await res.json();

        platformData = data;

        renderTable();
        createCards(data);
        createRatingsChart(data);

    } catch (err) {
        console.error("Failed to load platforms:", err);
    }

    setTimeout(initSlider, 100);
}


/* CREATE CARDS SLIDER*/
function createCards(data) {

    const container = document.getElementById("cardsContainer");
    container.innerHTML = "";

    data.forEach(p => {

        const card = document.createElement("div");
        card.className = "swiper-slide card";

        card.innerHTML = `
            <h3>${p.name}</h3>
            <p>Best for ${p.bestFor}</p>
            <span class="score">Trust Score ${p.rating}</span>
        `;

        container.appendChild(card);
    });
}


/* RATINGS BAR CHART*/
function createRatingsChart(data) {

    const ctx = document
        .getElementById("ratingsChart")
        .getContext("2d");

    if (ratingsChart) ratingsChart.destroy();

    ratingsChart = new Chart(ctx, {
        type: "bar",
        data: {
            labels: data.map(p => p.name),
            datasets: [{
                label: "Trust Score",
                data: data.map(p => p.rating),
                backgroundColor: "#041a3b"
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio:false,
            scales:{
                y:{ beginAtZero:true, max:10 }
            }
        }
    });
}


/*  SWIPER SLIDER*/
function initSlider() {

    new Swiper(".mySlider", {
        slidesPerView: 3,
        spaceBetween: 30,
        loop: true,
        grabCursor: true,

        autoplay:{
            delay:2500,
            disableOnInteraction:false
        },

        pagination:{
            el:".swiper-pagination",
            clickable:true
        },

        navigation:{
            nextEl:".swiper-button-next",
            prevEl:".swiper-button-prev"
        },

        breakpoints:{
            0:{slidesPerView:1},
            768:{slidesPerView:2},
            1200:{slidesPerView:3}
        }
    });
}


document.addEventListener("DOMContentLoaded", () => {
    loadPlatforms();
    initForexCharts();
});