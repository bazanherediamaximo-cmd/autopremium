const autos = [
    {
        id: 1,
        marca: "Ford",
        modelo: "Focus Titanium",
        precio: 18000000,
        km: 55000,
        anio: 2018,
        combustible: "Nafta",
        duenos: 1,
        reparaciones: "Service oficial al día",
        foto: "https://http2.mlstatic.com/D_NQ_NP_2X_878702-MLA97404174880_112025-F.webp"
    },
    {
        id: 2,
        marca: "Volkswagen",
        modelo: "Gol Trend",
        precio: 13390000,
        km: 110000,
        anio: 2016,
        combustible: "Nafta/GNC",
        duenos: 2,
        reparaciones: "Cambio de correa a los 90.000 km",
        foto: "https://http2.mlstatic.com/D_NQ_NP_2X_753679-MLA98143004997_112025-F.webp"
    },
    {
        id: 3,
        marca: "Toyota",
        modelo: "Etios XLS",
        precio: 20000000,
        km: 40000,
        anio: 2020,
        combustible: "Nafta",
        duenos: 1,
        reparaciones: "Ninguna",
        foto:"https://http2.mlstatic.com/D_NQ_NP_2X_791375-MLA97619995412_112025-F.webp"
    },
    {
        id: 4,
        marca: "Chevrolet",
        modelo: "Cruze LTZ",
        precio: 29900000,
        km: 30000,
        anio: 2021,
        combustible: "Nafta",
        duenos: 1,
        reparaciones: "Cambio de batería",
        foto: "https://http2.mlstatic.com/D_NQ_NP_2X_919288-MLA93502344326_102025-F.webp"
    },
    {
        id: 5,
        marca: "Ford",
        modelo: "Mondeo Titanium",
        precio: 38600000,
        km: 28000,
        anio: 2020,
        combustible: "Nafta",
        duenos: 1,
        reparaciones: "Ninguna",
        foto: "https://http2.mlstatic.com/D_NQ_NP_2X_852936-MLA90667873831_082025-F.webp"
    },
];

const formatearPrecio = (precio) => {
    return new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS', minimumFractionDigits: 0}).format(precio);
};

const container = document.getElementById('autos-container');

autos.forEach(auto => {
    const card = document.createElement('div');
    card.classList.add('card');

    card.innerHTML = `
    <img src="${auto.foto}" alt="${auto.modelo}" class="card-img">
    <h3 class="card-title">${auto.marca} ${auto.modelo}</h3>
    <p class="card-price">${formatearPrecio(auto.precio)}</p>
    <div class="card-details">
       <span>${auto.anio}</span>
       <span>${auto.km} km</span>
       <span>${auto.combustible}</span>
    </div>
    `;

    card.addEventListener('click', () => abrirModal(auto));

    container.appendChild(card);
});

const modal = document.getElementById('modal');
const closeBtn = document.getElementById('close-btn');

const mImg = document.getElementById('modal-img');
const mTitle = document.getElementById('modal-title');
const mPrice = document.getElementById('modal-price');
const mYear = document.getElementById('modal-year');
const mKm = document.getElementById('modal-km');
const mFuel = document.getElementById('modal-fuel');
const mOwners = document.getElementById('modal-owners');
const mRepairs = document.getElementById('modal-repairs');

function abrirModal(auto) {
    mImg.src = auto.foto;
    mTitle.textContent = `${auto.marca} ${auto.modelo}`;
    mPrice.textContent = formatearPrecio(auto.precio);
    mYear.textContent = auto.anio;
    mKm.textContent = `${auto.km} km`;
    mFuel.textContent = auto.combustible;
    mOwners.textContent = auto.duenos;
    mRepairs.textContent = auto.reparaciones;

    modal.classList.remove('hidden');
}

closeBtn.addEventListener('click', () => {
    modal.classList.add('hidden');
});

window.addEventListener('click', (e) => {
    if (e.target == modal) {
        modal.classList.add('hidden');
    }
});