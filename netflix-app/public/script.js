// URL base de la API
const API_URL = 'http://localhost:3000/api';

// Elementos del DOM
const seriesGrid = document.getElementById('series-grid');
const loading = document.getElementById('loading');
const errorDiv = document.getElementById('error');
const modal = document.getElementById('modal');
const modalBody = document.getElementById('modal-body');
const closeBtn = document.querySelector('.close');

document.addEventListener('DOMContentLoaded',()=>{
  cargarSeries();
})

async function CargarSeries(){
  try{
    loading.style.display = 'block';
    errorDiv.style.display = 'none';

    const response = await (`${API_URL}/series`)

    if(!response.ok){
      throw new Error('Error al cargar las series');
    }

    const series = response.json();
    mostar(series);

    loading.style.display = 'none'
  }catch(error){
    console.error('Error: ',error);
    errorDiv.textContent = 'Error al cargar las series. Verificar que el servidor este corriendo';
    errorDiv.style.display = 'block';
  }
}

function mostrarSeries(series) {
  seriesGrid.innerHTML = '';
  if (series.length === 0) {
    seriesGrid.innerHTML = '<p style="text-align: center; color: #999;">No hay series disponibles.</p>';
    return;
  }
  series.forEach(serie => {
    const card = crearTarjetaSerie(serie);
    seriesGrid.appendChild(card);
  });
}

function crearTarjetaSerie(serie) {
  const card = document.createElement('div');
  card.className = 'serie-card';
  card.onclick = () => mostrarDetalles(serie.serie_id);
  card.innerHTML = `
    <div class="serie-card-body">
      <h2>${serie.titulo}</h2>
      <div class="serie-info">
        Año: ${serie.año_lanzamiento || 'N/A'}
      </div>
      ${serie.genero ? `<span class="serie-genero">${serie.genero}</span>` : ''}
      <p class="serie-descripcion">
        ${serie.descripcion || 'Sin descripcion disponible'}
      </p>
    </div>
  `;
  return card;
}

closeBtn.onclick = () => {
  modal.style.display = 'none';
};
window.onclick = (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
};

// ─────────────────────────────────────────────
// Genera el HTML interno del modal
// ─────────────────────────────────────────────
function generarContenidoModal(serie, episodios, actores) {
  let html = `
    <div class="modal-header">
      <h2>${serie.titulo}</h2>
    </div>
    <div class="modal-info">
      <strong>Año:</strong> ${serie.año_lanzamiento || 'N/A'} |
      <strong>Genero:</strong> ${serie.genero || 'N/A'}
    </div>
    <div class="modal-descripcion">
      ${serie.descripcion || 'Sin descripcion'}
    </div>
  `;

  // Sección de actores
  if (actores.length > 0) {
    html += '<div class="actores-section"><h3>Reparto</h3>';
    actores.forEach(actor => {
      html += `
        <div class="actor-item">
          <span class="actor-nombre">${actor.nombre}</span>
          <span class="actor-personaje">${actor.personaje || 'Personaje desconocido'}</span>
        </div>
      `;
    });
    html += '</div>';
  }

  // Sección de episodios
  if (episodios.length > 0) {
    html += `<div class="episodios-section"><h3>Episodios (${episodios.length})</h3>`;
    episodios.forEach(ep => {
      html += `
        <div class="episodio-item">
          <div class="episodio-titulo">
            ${ep.temporada ? `T${ep.temporada} - ` : ''}${ep.episodio_titulo}
          </div>
          <div class="episodio-info">
            ${ep.duracion ? `Duracion: ${ep.duracion} min` : ''}
            ${ep.rating_imdb ? `| Rating: ${ep.rating_imdb}` : ''}
          </div>
        </div>
      `;
    });
    html += '</div>';
  }

  return html;
}