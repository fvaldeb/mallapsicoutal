const data = {
  "mallaData": [/* Pega aquí el arreglo completo de `mallaData` desde tu archivo JSON */],
  "estructuraPorAnio": [/* Pega aquí el arreglo de `estructuraPorAnio` */],
  "cantidadAnios": 5
};

const contenedor = document.getElementById('malla-container');
contenedor.innerHTML = '';

data.mallaData.forEach((periodo) => {
  const seccion = document.createElement('div');
  seccion.className = 'anio';

  const titulo = document.createElement('h2');
  titulo.textContent = `Año ${periodo.año} - ${periodo.periodo}`;
  seccion.appendChild(titulo);

  if (periodo.materias.length === 0) {
    const vacio = document.createElement('p');
    vacio.textContent = 'No hay materias registradas.';
    seccion.appendChild(vacio);
  } else {
    periodo.materias.forEach((materia) => {
      const div = document.createElement('div');
      div.className = 'materia';
      div.innerHTML = `
        <strong>${materia.nombre.trim()}</strong><br>
        Créditos: ${materia.creditos} <br>
        Requisitos: ${
          materia.requisitos.length > 0
            ? materia.requisitos.join(', ')
            : 'Ninguno'
        }
      `;
      seccion.appendChild(div);
    });
  }

  contenedor.appendChild(seccion);
});
