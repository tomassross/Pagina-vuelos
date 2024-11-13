document.addEventListener('DOMContentLoaded', function () {
    // Ruta del archivo JSON con los datos de las ofertas
    fetch('../data/vuelos.json')
        .then(response => response.json())
        .then(data => {
            // Contenedor donde se insertarán las tarjetas de ofertas
            const europaContainer = document.getElementById('europaOfertas');
            
            data.forEach(oferta => {
                // Crear el elemento de tarjeta
                const card = document.createElement('div');
                card.classList.add('card');
                
                // Verificar si la oferta tiene sticker de oferta
                if (oferta.oferta) {
                    const sticker = document.createElement('div');
                    sticker.classList.add('sticker');
                    sticker.textContent = 'Oferta imbatible';
                    card.appendChild(sticker);
                }

                // Título del destino
                const title = document.createElement('h3');
                title.textContent = oferta.destino;
                card.appendChild(title);

                // Fechas de salida y llegada
                const dates = document.createElement('p');
                dates.textContent = `Salida: ${oferta.salida} - Llegada: ${oferta.llegada}`;
                card.appendChild(dates);

                // Precio
                const price = document.createElement('p');
                price.textContent = `Desde ${oferta.precio}`;
                card.appendChild(price);

                // Botón de reservar
                const button = document.createElement('button');
                button.textContent = 'Reservar';
                card.appendChild(button);

                // Insertar la tarjeta en el contenedor
                europaContainer.appendChild(card);
            });
        })
        .catch(error => console.error('Error al cargar el JSON:', error));
});
