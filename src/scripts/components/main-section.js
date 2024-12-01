class MainSection extends HTMLElement {
  constructor() {
    super();
    this._style = document.createElement("style");
    this._mainImg = this.getAttribute("mainImg");
  }

  updateStyle() {
    this._style.textContent = `
        ${this.localName} {
            display: flex;
            flex-direction: column;
            padding: 40px 10%;
            margin-top: 80px;
            margin-right: auto;
            margin-left: auto; 
            max-width: 1980px;

            background: 
                linear-gradient(to top, rgba(234, 109, 39, 0.8), rgba(255, 126, 95, 0.1)), 
                url(${this._mainImg});
            background-size: cover;
        }
        
        main-section > .main-text-box {
            order: 2;
        }
        
        main-section > .blank-space {
            display: flex;
            align-self: center;
            order: 1;
        }

        .blank-space{
            max-width: 500px;
        }
        
        .main-text-box > .main-button-group {
            display: flex;
            gap: 10px;
            justify-content: start;
        }

        .main-text-box > h1, .main-text-box > p {
            color: white;
        }

        .main-text-box > p {
            font-size: 20px;
        }
        
        .blank-space {
            width: 100%;      
            height: 200px;   
        }

        .main-button-group > button {
            padding: 10px 20px;
            border: unset;
        }

        @media screen and (min-width: 1200px) {
            ${this.localName}
            {
                display: flex;
                flex-direction: column;
                align-items: center;
                padding: 200px 20px;
                background: 
                    linear-gradient(to right, rgba(234, 109, 39, 0.8), rgba(255, 126, 95, 0.1)), 
                    url(${this._mainImg});
                background-size: cover;
            }

            .main-text-box{
                width: 35%;
                order: 1;
            }

            .blank-space{
                width: 40%;
                padding: 0px 20px;
                order: 2 !important;
                height: 400px;
            }

            .main-text-box > .main-button-group {
                gap: 20px;
            }
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
            <div class="main-text-box">
                <h1>Bringing you the best for every bites</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                <div class="main-button-group">
                    <button class="box-leaf shadow-box" style="color: white; background-color: black;">Find Nearby</button>
                    <button class="box-leaf shadow-box primary-color-button">Book Now</button>
                </div>
            </div>
            <div class="blank-space">
            </div>
        `;
  }
}

customElements.define("main-section", MainSection);
