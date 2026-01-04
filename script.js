
const autos = [
    { id: 1, marca: "Ford", modelo: "Focus Titanium", precio:  18000000, km:  55000, anio:  2018, combustible: "Nafta", duenos:  1, reparaciones: "Service oficial", foto: "https://http2.mlstatic.com/D_NQ_NP_2X_878702-MLA97404174880_112025-F.webp" },
    { id: 2, marca: "Volkswagen", modelo: "Gol Trend", precio: 13390000, km: 110000, anio: 2016, combustible: "Nafta/GNC", duenos: 2, reparaciones: "Correa 90k", foto: "https://http2.mlstatic.com/D_NQ_NP_2X_753679-MLA98143004997_112025-F.webp" },
    { id: 3, marca: "Toyota", modelo: "Etios XLS", precio: 20000000, km: 40000, anio: 2020, combustible: "Nafta", duenos: 1, reparaciones: "Ninguna", foto:"https://http2.mlstatic.com/D_NQ_NP_2X_791375-MLA97619995412_112025-F.webp" },
    { id: 4, marca: "Chevrolet", modelo: "Cruze LTZ", precio: 29900000, km: 30000, anio: 2021, combustible: "Nafta", duenos: 1, reparaciones: "Batería nueva", foto: "https://http2.mlstatic.com/D_NQ_NP_2X_919288-MLA93502344326_102025-F.webp" },
    { id: 5, marca: "Ford", modelo: "Mondeo Titanium", precio: 38600000, km: 28000, anio: 2020, combustible: "Nafta", duenos: 1, reparaciones: "Ninguna", foto: "https://http2.mlstatic.com/D_NQ_NP_2X_852936-MLA90667873831_082025-F.webp" },
];


const container = document.getElementById('autos-container');
const searchInput = document.getElementById('buscador');
const modal = document.getElementById('modal');
const closeBtn = document.getElementById('close-btn');
const homeIcon = document.getElementById('home-icon'); 


const renderAutos = (lista) => {
    container.innerHTML = ''; 

   
    if(lista.length === 0) {
        container.innerHTML = '<p style="color:#a1a1aa; text-align:center; grid-column: 1/-1; margin-top: 20px;">No tenemos ese auto 😢</p>';
        return;
    }

    lista.forEach(auto => {
        const card = document.createElement('div');
        card.classList.add('card');
        
        
        card.style.animation = 'fadeIn 0.5s ease forwards';

        
        const precioFormateado = new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS', minimumFractionDigits: 0}).format(auto.precio);

        card.innerHTML = `
            <img src="${auto.foto}" alt="${auto.modelo}" class="card-img">
            <h3 class="card-title">${auto.marca} ${auto.modelo}</h3>
            <p class="card-price">${precioFormateado}</p>
            <div class="card-details">
                <span>${auto.anio}</span> • 
                <span>${auto.km} km</span> • 
                <span>${auto.combustible}</span>
            </div>
        `;
        
        
        card.addEventListener('click', () => abrirModal(auto));
        
        container.appendChild(card);
    });
};


renderAutos(autos);


searchInput.addEventListener('input', (e) => {
    const termino = e.target.value.toLowerCase();
    
    const filtrados = autos.filter(auto => 
        auto.marca.toLowerCase().includes(termino) || 
        auto.modelo.toLowerCase().includes(termino)
    );

    renderAutos(filtrados);
});



function abrirModal(auto) {
    
    document.getElementById('modal-img').src = auto.foto;
    document.getElementById('modal-title').textContent = `${auto.marca} ${auto.modelo}`;
    document.getElementById('modal-price').textContent = new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS'}).format(auto.precio);
    document.getElementById('modal-year').textContent = auto.anio;
    document.getElementById('modal-km').textContent = `${auto.km} km`;
    document.getElementById('modal-fuel').textContent = auto.combustible;
    document.getElementById('modal-owners').textContent = `${auto.duenos} Dueño(s)`;
    document.getElementById('modal-repairs').textContent = auto.reparaciones;

  
    modal.classList.remove('hidden');
    
    
    document.body.classList.add('modal-open');
}

function cerrarModal() {
   
    modal.classList.add('hidden');
    
    
    document.body.classList.remove('modal-open');
}




closeBtn.addEventListener('click', cerrarModal);


window.addEventListener('click', (e) => {
    if (e.target == modal) cerrarModal();
});


if(homeIcon) {
    homeIcon.addEventListener('click', (e) => {
        e.preventDefault();
        cerrarModal();
    });
}