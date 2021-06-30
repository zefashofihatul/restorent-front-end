class NavElement extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <nav>
      <div class="topnav" id="topnav">
        <span>RESTORENT</span>
        <div class="link-content">
          <a class="hamburger" href="#/explore" aria-label="show navigation menu">
            <i class="fa fa-bars"></i>
          </a>
          <div class="drawer">
            <a href="#/explore" class="nav-wide">Home</a>
            <a href="#/favorites/" class="nav-wide">Favorite</a>
            <a href="https://www.linkedin.com/in/zefa-shofihatul-6375531b5/" target="_blank" class="nav-wide">About</a>
          </div>
        </div>
      </div> 
    </nav>
    `;
  }
}

customElements.define('nav-element', NavElement);
