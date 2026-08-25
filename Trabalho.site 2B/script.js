* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    line-height: 1.6;
    background-color: #f7f9fc;
    color: #333;
    scroll-behavior: smooth;
}

header {
    background-color: #ff7675;
    color: white;
    text-align: center;
    padding: 40px 20px;
}

header h1 {
    font-size: 2.5rem;
    margin-bottom: 10px;
}

header nav a {
    color: white;
    text-decoration: none;
    font-weight: bold;
    margin: 0 10px;
}

main {
    max-width: 1100px;
    margin: 30px auto;
    padding: 0 20px;
}

h2 {
    color: #2d3436;
    margin-bottom: 20px;
    border-bottom: 2px solid #ff7675;
    padding-bottom: 10px;
}

/* Área de Filtros */
.filtros {
    margin-bottom: 25px;
    display: flex;
    gap: 10px;
}

.btn-filtro {
    padding: 8px 18px;
    border: 2px solid #ff7675;
    background: transparent;
    color: #ff7675;
    border-radius: 20px;
    cursor: pointer;
    font-weight: bold;
    transition: 0.2s;
}

.btn-filtro.ativo, .btn-filtro:hover {
    background: #ff7675;
    color: white;
}

/* Sistema de Grid */
.pet-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 20px;
    margin-bottom: 50px;
}

.pet-card {
    background: white;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 4px 10px rgba(0,0,0,0.05);
    border: 1px solid #eee;
    transition: transform 0.2s;
}

.pet-card:hover {
    transform: translateY(-5px);
}

.pet-foto {
    background-color: #ffeaa7;
    height: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 3.5rem;
}

.pet-info {
    padding: 20px;
}

.pet-info h3 {
    margin-bottom: 10px;
    color: #2d3436;
}

.pet-info p {
    font-size: 0.9rem;
    margin-bottom: 5px;
    color: #636e72;
}

.status {
    display: inline-block;
    background-color: #d63031;
    color: white;
    padding: 3px 10px;
    border-radius: 20px;
    font-size: 0.8rem;
    margin-top: 10px;
    font-weight: bold;
}

/* Formulário Organizado */
.form-secao {
    background: white;
    padding: 30px;
    border-radius: 12px;
    box-shadow: 0 4px 10px rgba(0,0,0,0.05);
}

.form-grupo {
    margin-bottom: 15px;
    display: flex;
    flex-direction: column;
}

.form-row {
    display: flex;
    gap: 15px;
}

.form-row .form-grupo {
    flex: 1;
}

form label {
    font-weight: bold;
    color: #2d3436;
    margin-bottom: 5px;
}

form input, form select {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 6px;
    font-size: 1rem;
}

form button {
    width: 100%;
    padding: 12px;
    background-color: #10ac84;
    color: white;
    border: none;
    border-radius: 6px;
    font-size: 1.1rem;
    cursor: pointer;
    font-weight: bold;
    margin-top: 10px;
}

form button:hover {
    background-color: #0ebd93;
}

footer {
    text-align: center;
    padding: 30px;
    background-color: #2d3436;
    color: white;
    margin-top: 50px;
}

const petForm = document.getElementById('petForm');
const petGrid = document.getElementById('petGrid');

// Função para cadastrar novo pet
petForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const especie = document.getElementById('especie').value;
    const porte = document.getElementById('porte').value;
    const cor = document.getElementById('cor').value;
    const local = document.getElementById('local').value;
    const contato = document.getElementById('contato').value;
    
    const emoji = especie === 'Cachorro' ? '🐶' : especie === 'Gato' ? '🐱' : '🐾';

    const novoCard = document.createElement('div');
    novoCard.classList.add('pet-card');
    novoCard.setAttribute('data-especie', especie); // Importante para o filtro funcionar

    novoCard.innerHTML = `
        <div class="pet-foto">${emoji}</div>
        <div class="pet-info">
            <h3>${nome} (${especie})</h3>
            <p><strong>Porte/Cor:</strong> ${porte} | ${cor}</p>
            <p><strong>Visto em:</strong> ${local}</p>
            <p><strong>Contato:</strong> ${contato}</p>
            <span class="status">Procura-se</span>
        </div>
    `;

    petGrid.insertBefore(novoCard, petGrid.firstChild);
    petForm.reset();
    alert('Animal cadastrado com sucesso no mural!');
});

// Função para filtrar os animais (Cachorro / Gato / Todos)
function filtrarPets(especieSelecionada) {
    // Atualiza o botão ativo visualmente
    const botoes = document.querySelectorAll('.btn-filtro');
    botoes.forEach(btn => btn.classList.remove('ativo'));
    event.target.classList.add('ativo');

    // Esconde ou mostra os cards com base no filtro
    const cards = document.querySelectorAll('.pet-card');
    cards.forEach(card => {
        const especieCard = card.getAttribute('data-especie');
        if (especieSelecionada === 'Todos' || especieCard === especieSelecionada) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}
