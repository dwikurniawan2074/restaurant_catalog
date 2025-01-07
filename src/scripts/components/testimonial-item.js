class TestimonialItem extends HTMLElement {
  constructor() {
    super();
    this._style = document.createElement('style');
    this._profileImg = this.getAttribute('profileImg');
    this._profileName = this.getAttribute('profileName');
    this._profileJob = this.getAttribute('profileJob');
    this._reviewDesc = this.getAttribute('reviewDesc');
  }

  connectedCallback() {
    this.render();
  }

  updateStyle() {
    this._style.textContent = `
            ${this.localName}
            {
              display: flex;
              flex-direction: column;
              background-color: white;
              padding: 90px 20px 20px 20px;
              border: 1px solid;
              width: 90%;
              max-width: 500px !important;
              align-items: center;
              position: relative;
              flex: 0 0 auto;
              transition: width 0.3s ease;
            }

            ${this.localName} > p{
                margin-top: 20px;
            }

            .testimonial-header{
              display: inherit;
              flex-direction: row;

              position: absolute;
              top: -20%;
            }

            .testimonial-header > img{
              background-size: cover;
              height: 150px;
              margin-bottom: 20px;
              border-radius: 150px;
            }

            .testimonial-name {
              margin-block-end: unset;
            }

            .testimonial-header > .testimonial-rating{
              left: -20%;
            }

            @media screen and (min-width: 720px) {
              ${this.localName}
              {
                width: 45% !important;
              }
            }

            @media screen and (min-width: 1200px) {
                ${this.localName}
                {
                  width: 30% !important;
                }
            }
        `;
  }

  render() {
    this.setAttribute('class', 'box-leaf-two shadow-box');

    this.updateStyle();
    this.innerHTML = `
              ${this._style.outerHTML}
              <div class="testimonial-header">
                <!-- <div class="testimonial-photo"></div> -->
                <img src="${this._profileImg}" alt="testimonial-photo" class="testimonial-photo"/>
              </div>

              <p class="testimonial-description">
              ${
  this._reviewDesc
    ? this._reviewDesc
    : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
}
              </p>

              <h3 class="testimonial-name">${this._profileName}</h3>
              <span>${this._profileJob}</span>
          `;
  }
}

customElements.define('testimonial-item', TestimonialItem);
