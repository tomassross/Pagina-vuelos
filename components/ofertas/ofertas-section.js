
class OfertasComponent extends HTMLElement {
    connectedCallback() {
      this.innerHTML = 
      `<section id="ofertas">
          
      </section>`;
    }
  }

customElements.define('ofertas-section', OfertasComponent);