class LoadingCard extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div id="loadingCard">
      <div id="loadingAnimation">
        <svg viewBox="0 0 100 100">
          <defs>
            <filter id="shadow">
              <feDropShadow dx="0" dy="0" stdDeviation="1.5" 
                flood-color="#000"/>
            </filter>
          </defs>
          <circle id="spinner" style="fill:transparent;stroke:#000;stroke-width: 6px;stroke-linecap: round;" cx="50" cy="50" r="45"/>
        </svg>      
      </div>
    </div>
    `;
  }
}

customElements.define('loading-card', LoadingCard);
