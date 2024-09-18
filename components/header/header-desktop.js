class HeaderDesktopComponent extends HTMLElement {
    connectedCallback() {
      this.innerHTML = 
      `<nav id="nav">
                <h1><a href="index.html"><img src="assets/Recurso 5.svg" alt="logo" id="logo"></a></h1>
                <ul class="nav-list">
                    <li><a href="index.html#ofertas">Ofertas</a></li>
                    <li><a href="index.html#destinos-de-moda">Destinos de Moda</a></li>
                    <li><a href="#">Favoritos</a></li>
                </ul>
                <div class="registro">
                    <button class="Log-in-btn">Log in</button>
                    <button class="sign-in-btn">sign in</button>
                </div>
            </nav>`;
    }
  }

  customElements.define('header-desktop', HeaderDesktopComponent);