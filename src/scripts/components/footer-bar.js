class FooterBar extends HTMLElement {
  constructor() {
    super();
    this._style = document.createElement('style');
  }

  updateStyle() {
    this._style.textContent = `
        ${this.localName}{
            font-size: 1em;
        }

        footer-bar > div{
            padding: 24px 20px;
            text-align: center;
        }
    `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.updateStyle();

    this.innerHTML = `
        ${this._style.outerHTML}
        <div>
            <span>Copyright &copy; 2024 - Bitespot.</span>
        </div>
    `;
  }
}

customElements.define('footer-bar', FooterBar);
