class HeaderDesktopComponent extends HTMLElement {
    connectedCallback() {
      this.innerHTML = 
      `<nav id="nav">
          <h1><img src="assets/Recurso 5.svg" alt="logo" id="logo"></h1>
          <ul class="nav-list">
              <li><a href="">Ofertas</a></li>
              <li><a href="">Destinos de Moda</a></li>
              <li><a href="">Favoritos</a></li>
          </ul>
       /nav>`;
    }
  }

  customElements.define('header-desktop', HeaderDesktopComponent);