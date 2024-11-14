
class OfertasComponent extends HTMLElement {
    connectedCallback() {
      this.innerHTML = 
      `<section id="ofertas">
            <div class="ofertas-content">
                <h2>Ofertas</h2>
                <p>Promociones, descuentos y ofertas especiales para ti</p>
                <div class="ofertas-container">
                    <div class="overlay-ofertas"></div>
                    <a href="ofertas.html">
                        <button>Ver ofertas</button>
                    </a>
                </div>
            </div>
        </section>`;
  }
}

customElements.define('ofertas-section', OfertasComponent);