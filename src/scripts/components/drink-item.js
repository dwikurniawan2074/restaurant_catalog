class DrinkItem extends HTMLElement {
  _style = null;
  _drink = {
    id: 0,
    name: 'drinkName',
  };

  constructor() {
    super();
    this._style = document.createElement('style');
  }

  setDrinkItem(value) {
    this._drink = value;
    this.render();
  }

  connectedCallback() {
    this.render();
  }

  updateStyle() {
    this._style.textContent = `
            ${this.localName}
            {
              display: flex !important;
              flex-direction: column;
              background-color: white;
              padding: 90px 20px 20px 20px;
              border: 1px solid;
              width: 80%;
              max-width: 300px !important;
              align-items: center;
              position: relative;
              flex: 0 0 auto;
              transition: width 0.3s ease;
            }
  
            .drink-header{
              display: inherit;
              flex-direction: row;
  
              position: absolute;
              top: -20%;
            }
  
            .drink-header > .drink-photo{
              border-radius: 150px;
              height: 150px;
              width: 150px;
            }
  
            .drink-name {
              margin-block-end: unset;
              margin-top: 30px;
            }
  
            .drink-name > a{
              text-decoration: none;
              color: black;
            }
  
            .drink-description {
              width: 100%;
              display: inline;
              -webkit-line-clamp: 3;
              text-overflow: ellipsis;
              overflow: hidden;
              display: -webkit-box;
              -webkit-box-orient: vertical;
            }
  
            @media screen and (min-width: 720px) {
              ${this.localName}
              {
                width: 300px !important;
              }
            }
        `;
  }

  render() {
    this.setAttribute('class', 'box-leaf-two shadow-box');
    this.setAttribute('data-id', this._drink.id);

    this.updateStyle();
    this.innerHTML = `
          ${this._style.outerHTML}
          <div class="drink-header">
            <img src="./images/default_drinks.png" class="drink-photo" alt="drink-photo"/>
          </div>
          <h3 class="drink-name">${this._drink.name}</h3>
          <p class="drink-description">Delicious Guaranteed!</p>
        `;
  }
}

customElements.define('drink-item', DrinkItem);
