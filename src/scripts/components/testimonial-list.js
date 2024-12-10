class TestimonialList extends HTMLElement {
  constructor() {
    super();

    this._style = document.createElement('style');
  }

  setRecommendedList(value) {
    this._setRecommendedList = value;

    this.render();
  }

  connectedCallback() {
    this.render();
    this.append(this._style);
  }

  updateStyle() {
    this._style.textContent = `         
          ${this.localName}
          {
            display: flex;
            flex-direction: row;
            padding: 80px 20px 40px 20px;
            gap: 40px;
            justify-content: start;
            overflow-x: auto; /* Allow horizontal scrolling */
            scroll-behavior: smooth; /* Smooth scrolling when swiping or using scroll buttons */
            -ms-overflow-style: none; /* Internet Explorer 10+ */
            scrollbar-width: none; /* Firefox */
          }

          @media screen and (min-width: 720px) {
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
          <testimonial-item profileImg="./images/people_1.jpeg" profileName="John Doe" profileJob="CEO TechStark"></testimonial-item>
          <testimonial-item profileImg="./images/people_2.jpg" profileName="Pevita Pearce" profileJob="Freelance Novelist Writer"></testimonial-item>
        `;
    this.append(this._style);
  }
}

customElements.define('testimonial-list', TestimonialList);
