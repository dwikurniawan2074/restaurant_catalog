class RecommendedList extends HTMLElement {
//   _style = null;

  constructor() {
    super();

    this._style = document.createElement("style");
  }

  setRecommendedList(value) {
    this._setRecommendedList = value;

    this.render();
  }

  connectedCallback() {
    this.render();
  }

  updateStyle() {
    this._style.textContent = 
    `         
        ${this.localName}
        {
          display: flex !important;
          flex-direction: row;
          padding: 80px 20px 40px 20px;
          gap: 20px;
          justify-content: start;
          overflow-x: auto; /* Allow horizontal scrolling */
          scroll-behavior: smooth; /* Smooth scrolling when swiping or using scroll buttons */
          -ms-overflow-style: none; /* Internet Explorer 10+ */
          scrollbar-width: none; /* Firefox */
        }

        ${this.localName}::-webkit-scrollbar {
          display: none;
        }

        @media screen and (min-width: 1280px) {
          ${this.localName}
          {
            justify-content: center;
          }
        }
    `;
  }

  render() {

    this.updateStyle();

    this.innerHTML += `
      <recommended-item></recommended-item>
      <recommended-item></recommended-item>
      <recommended-item></recommended-item>
      <recommended-item></recommended-item>
    `;
    this.append(this._style);
  }
}

customElements.define("recommended-list", RecommendedList);
