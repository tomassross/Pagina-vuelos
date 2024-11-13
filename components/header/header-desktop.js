class HeaderDesktopComponent extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
      <nav id="nav">
          <h1><a href="index.html"><img src="assets/Recurso 5.svg" alt="logo" id="logo"></a></h1>
          <button id="hamburger" class="hamburger">&#9776;</button> 
          <div class="menu-content"> 
              <ul class="nav-list">
                  <li><a href="ofertas.html">Ofertas</a></li>
                  <li><a href="index.html#destinos-de-moda">Destinos de Moda</a></li>
                  <li><a href="#">Favoritos</a></li>
              </ul>
              <div class="registro">
                <a href="login.html">
                    <button class="Log-in-btn">Log in</button>
                </a>
                <a href="registro.html">
                    <button class="sign-in-btn">Sign in</button>
                </a>
              </div>
          </div>
      </nav>`;

      const hamburger = this.querySelector('#hamburger');
      const menuContent = this.querySelector('.menu-content');

      hamburger.addEventListener('click', () => {
          menuContent.classList.toggle('active');
      });
    }
}

customElements.define('header-desktop', HeaderDesktopComponent);
