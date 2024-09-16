class HeroComponent extends HTMLElement {
    connectedCallback() {
      this.innerHTML = 
      `<section id="hero">
          <div class="overlay"></div>
          <div class="hero-content">
              <h2>Busca el mejor vuelo para tu destino</h2>
              <form class="hero-form">
                <div class="form-group" id="lupita">
                    <img src="assets/busqueda.svg" alt="" width="40px">
                </div>
                <div class="form-group">
                    <label for="destino">Destino</label>
                    <input type="text" id="destino" placeholder="¿Dónde quieres ir?" name="destino" required>
                </div>
      
                  <div class="form-group">
                      <label for="ida">Ida</label>
                      <input type="date" id="ida" name="ida" required>
                  </div>
      
                  <div class="form-group">
                      <label for="vuelta">Vuelta</label>
                      <input type="date" id="vuelta" name="vuelta" required>
                  </div>
      
                  <div class="form-group">
                      <label for="pasajeros">Pasajeros</label>
                      <select id="pasajeros" name="pasajeros">
                          <option value="1 adulto" selected>1 adulto</option>
                          <option value="2 adultos">2 adultos</option>
                          <option value="3 adultos">3 adultos</option>
                      </select>
                  </div>
      
                  <div class="form-group">
                      <label for="clase">Clase</label>
                      <select id="clase" name="clase">
                          <option value="turista" selected>Clase turista</option>
                          <option value="corporativo">Clase corporativa</option>
                          <option value="primera">Primera clase</option>
                      </select>
                  </div>
      
                  <button type="submit" class="buscar-btn">Buscar</button>
              </form>
          </div>
      </section>`;
    }
  }

customElements.define('hero-section', HeroComponent);