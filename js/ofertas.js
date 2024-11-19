document.addEventListener('DOMContentLoaded', function () {
    fetch('../data/vuelos.json')
        .then(response => response.json())
        .then(data => {
            // Contenedores
            const europaContainer = document.getElementById('europaOfertas');
            const argentinaContainer = document.getElementById('argentinaOfertas');

            // Función para crear cards
            const createCard = (oferta) => {
                const card = document.createElement('div');
                card.classList.add('card', 'col-12', 'col-sm-6', 'col-md-4');

                // Imagen
                const img = document.createElement('img');
                img.src = oferta.thumbnail;
                img.alt = oferta.destino;
                card.appendChild(img);

                // Sticker
                const sticker = document.createElement('div');
                sticker.classList.add('sticker');
                sticker.textContent = 'Oferta';
                card.appendChild(sticker);

                // Título
                const title = document.createElement('h3');
                title.textContent = oferta.destino;
                card.appendChild(title);

                // Fechas
                const dates = document.createElement('p');
                dates.textContent = `Salida: ${oferta.salida} - Llegada: ${oferta.llegada}`;
                card.appendChild(dates);

                // Precio
                const price = document.createElement('p');
                price.textContent = `Desde ${oferta.precio}`;
                card.appendChild(price);

                // Botón
                const button = document.createElement('button');
                button.textContent = 'Reservar';
                card.appendChild(button);

                return card;
            };

            // Filtrar y agregar ofertas a Europa
            data.filter(oferta => oferta.categoría.includes('Europa') && oferta.oferta)
                .forEach(oferta => europaContainer.appendChild(createCard(oferta)));

            // Filtrar y agregar ofertas a Argentina
            data.filter(oferta => oferta.categoría.includes('Argentina') && oferta.oferta)
                .forEach(oferta => argentinaContainer.appendChild(createCard(oferta)));
        })
        .catch(error => console.error('Error al cargar el JSON:', error));
});
