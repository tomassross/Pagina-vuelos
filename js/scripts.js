function validarFormulario() {
  var nombreUsuario = document.getElementById("Nombre").value;
  var contraseñaUsuario = document.getElementById("Contraseña").value;
  var formulario = document.getElementById("Formulario"); 
  var validador = true;
  var pagina = "home.html";

  if (nombreUsuario.length > 3) {
      console.log("Nombre correcto");
      document.getElementById("errorNombre").style.visibility = "hidden"; 
  } else {
      validador = false;
      document.getElementById("errorNombre").style.visibility = "visible"; 
  }
  
  if (validador) {
      window.location.href = pagina;
  }
}


let classes = [];
let currentIndex = 0;
const classesPerLoad = 5;

document.addEventListener('DOMContentLoaded', async () => {
  const response = await fetch('json/clases.json');
  classes = await response.json();
  renderClasses();
});

document.getElementById('btn-cargar-mas').addEventListener('click', renderClasses);

function renderClasses() {
  const container = document.getElementById('clases-container');
  const fragment = document.createDocumentFragment();
  
  for (let i = 0; i < classesPerLoad; i++) {
    if (currentIndex >= classes.length) {
      document.getElementById('btn-cargar-mas').style.display = 'none';
      break;
    }

    const clase = classes[currentIndex];
    const date = new Date(clase.fecha).toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' });

    if (currentIndex === 0 || classes[currentIndex - 1].fecha !== clase.fecha) {
      const dateHeader = document.createElement('h3');
      dateHeader.classList.add('fecha-clases');
      dateHeader.textContent = date;
      fragment.appendChild(dateHeader);
    }

    const card = document.createElement('div');
    card.className = 'card mb-3';
    card.innerHTML = `
      <div class="row no-gutters">
        <div class="col-md-4">
        <img src="${clase.imagen}" class="img-fluid rounded-start" alt="${clase.titulo}">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">${clase.titulo}</h5>
            <p class="card-text">Hora: ${clase.hora}</p>
            <p class="card-text">Plazas disponibles: ${clase.plazasDisponibles}/${clase.totalPlazas}</p>
            <p class="card-text">Profesor: ${clase.profesor}</p>
            <button type="button" class="btn btn-primary btn-reservar" data-toggle="modal" data-target="#reservarModal">Reservar lugar</button>
          </div>
        </div>
      </div>
    `;
    fragment.appendChild(card);
    currentIndex++;
  }
  container.appendChild(fragment);
}

$(document).ready(function() {
  function cargarProfesores() {
    $.getJSON("../json/profesores.json", function(data) {
      $.each(data, function(key, value) {
        var estrellas = '';
        for (var i = 1; i <= 5; i++) {
          if (i <= value.puntuacion) {
            estrellas += '<i class="fas fa-star"></i>';
          } else {
            estrellas += '<i class="far fa-star"></i>';
          }
        }

        var profesorCard = `
          <div class="profesor-card" data-toggle="modal" data-target="#profesorModal" data-nombre="${value.nombre}" data-foto="${value.foto}" data-descripcion="${value.descripcion}" data-disciplina="${value.disciplina}" data-puntuacion="${value.puntuacion}">
            <div class="card mb-4 shadow-sm">
              <img src="${value.foto}" class="card-img-top" alt="${value.nombre}">
              <div class="card-body">
                <h5 class="card-title">${value.nombre}</h5>
                <p class="card-text">${value.disciplina}</p>
                <p class="card-text">${estrellas}</p>
              </div>
            </div>
          </div>
        `;
        $("#profesores-container").append(profesorCard);
      });

      $('.profesores-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-prev">&lt;</button>',
        nextArrow: '<button type="button" class="slick-next">&gt;</button>',
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      });
    });
  }
  
  $('#profesores-container').on('click', '.profesor-card', function() {
    var nombre = $(this).data('nombre');
    var foto = $(this).data('foto');
    var descripcion = $(this).data('descripcion');
    var disciplina = $(this).data('disciplina');
    var puntuacion = $(this).data('puntuacion');

    var estrellas = '';
    for (var i = 1; i <= 5; i++) {
      if (i <= puntuacion) {
        estrellas += '<i class="fas fa-star"></i>';
      } else {
        estrellas += '<i class="far fa-star"></i>';
      }
    }

    $('#profesorModalLabel').text(nombre);
    $('#profesorModalBody').html(`
      <img src="${foto}" class="img-fluid mb-3" alt="${nombre}">
      <p><strong>Disciplina:</strong> ${disciplina}</p>
      <p><strong>Descripción:</strong> ${descripcion}</p>
      <p><strong>Puntuación:</strong> ${estrellas}</p>
    `);

    $('#profesorModal').modal('show');
  });

  cargarProfesores();
});

document.addEventListener('DOMContentLoaded', async () => {
  const response = await fetch("../json/profesores.json");
  const profesores = await response.json();
  
  const profesorAsignado = profesores.find(profesor => profesor.asignado === true);

  
  if (profesorAsignado) {
    const asideProfesor = document.querySelector('.aside-profesor');
    asideProfesor.querySelector('.profesor-foto').src = profesorAsignado.foto;
    asideProfesor.querySelector('.profesor-nombre').textContent = profesorAsignado.nombre;
    asideProfesor.querySelector('.profesor-disciplina').textContent = `Disciplina: ${profesorAsignado.disciplina}`;
    asideProfesor.querySelector('.profesor-puntuacion').textContent = `Puntuación: ${profesorAsignado.puntuacion}`;
    asideProfesor.querySelector('.profesor-descripcion').textContent = profesorAsignado.descripcion;
  }
});

$(document).ready(function() {
  
  $.getJSON("json/rutinas.json", function(data) {
    const rutina = data[0]; 

    
    $('.rutina-fecha').text(rutina.fecha);

    
    $('.rutina-nombre').text(rutina.nombre);

    
    const completados = rutina.cantidad_completados;
    const totalEjercicios = rutina.cantidad_ejercicios;
    let datosRutina = `${completados}/${totalEjercicios} completados`;

    
    if (completados === totalEjercicios) {
      datosRutina = 'Completado';
    }

    $('.rutina-datos').text(datosRutina);
  });
});
