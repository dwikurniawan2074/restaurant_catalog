class Appbar extends HTMLElement {
  style = null;

  constructor() {
    super();
    this._style = document.createElement('style');
    this._logoImg = this.getAttribute('logoImg');
  }

  updateStyle() {
    this._style.textContent = `
        ${this.localName}{
            width: 250px;
            height: 100%;
            position: fixed;
            padding: 20px;
            z-index: 1; 
          
            transform: translate(-250px, 0);
            transition: transform 0.3s ease-in-out;
            background-color: #EA6D27;
            max-width: 1980px;
            align-items: center;
        }

        ${this.localName}.open {
          transform: translate(0,0);
        }

        .app-bar-logo{
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 10px;
        }

        .app-bar-logo:hover{
          cursor: pointer;
        }

        .app-bar-logo > h1
        {
            font-weight: 900 !important;
        }

        .app-bar-logo > img{
          height: 50px;
        }
        
        .sub-menu-bar{
          min-width: 30%;
          display: flex;
          flex-direction: column;
        }

        .sub-menu-bar a{
          padding: 15px 0px;
          text-decoration: none;
          font-size: 16px;
          font-weight: 700;
          // color: white;
        }

        .sub-menu-bar a:hover {
          transform: scale(1.1);
          color: #EA6D27;
          filter: brightness(1.3);
        }

        .app-bar-button{
            height: fit-content;
            margin: 10px 0;
            padding: 10px 15px;
            border: unset;
            background-color: black !important;
            color: white;
            font-weight: 700;
        }

        @media screen and (min-width: 720px) {
          ${this.localName} {
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            transform: translate(0,0);
            background-color: unset;
            width: 100%;
            height: 90px;
            position: fixed;
            background-color:#ffffff;
            z-index: 10;
            transform: translate(-50%, 0); 
            left: 50%;
          }

          ${this.localName}.open {
            transition: transform 0.3s ease-in-out;
          }

          .sub-menu-bar{
            flex-direction: row;
            align-items: center;
            justify-content: space-evenly;
            gap: 10%;
            width: 35%;
          }

          .sub-menu-bar > a{
              color: black;
              font-size: 20px;
              font-weight: 700;
          }

          .app-bar-button{
            height: fit-content;
            margin: auto 0;
            padding: 10px 20px;
            border-radius: 10px 5px 10px 5px;
            margin: 20px 0px;
            background-color: #EA6D27 !important;
            border: unset;
            color: white;
          }
        }

        @media screen and (min-width: 1280px) {
          .sub-menu-bar{
            width: 20%;
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
            <div class="app-bar-logo" onclick="window.location.href='/'" >
              <img src="${this._logoImg}" alt="App Bar Logo"/>
              <h1>Bitespot.</h1>
            </div>
            
            <div class="sub-menu-bar">
                <a href="#/">Home</a>
                <a href="#/favorites">Favorite</a>
                <a href="#contact-section">About Us</a>
            </div>
            
            <button class="app-bar-button shadow-box box-leaf">Order Now</button>
        `;
  }
}

customElements.define('app-bar', Appbar);
