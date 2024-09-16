class FooterComponent extends HTMLElement {
    connectedCallback() {
      this.innerHTML = 
      `<footer>
    <div class="container">
        <div class="column">
            <h3>Ayuda</h3>
            <ul>
                <li><a href="#">Preguntas Frecuentes</a></li>
                <li><a href="#">Soporte</a></li>
                <li><a href="#">Contacto</a></li>
            </ul>
        </div>
        <div class="column">
            <h3>Términos y Condiciones</h3>
            <ul>
                <li><a href="#">Política de Privacidad</a></li>
                <li><a href="#">Términos de Uso</a></li>
                <li><a href="#">Cookies</a></li>
            </ul>
        </div>
        <div class="column">
            <h3>Redes Sociales</h3>
            <ul>
                <li><a href="#">Facebook</a></li>
                <li><a href="#">Twitter</a></li>
                <li><a href="#">Instagram</a></li>
                <li>Teléfono: 123-456-7890</li>
                <li>Email: info@ejemplo.com</li>
            </ul>
        </div>
    </div>
</footer>`;
    }
  }

customElements.define('footer-component', FooterComponent);