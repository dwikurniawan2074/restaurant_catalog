class FoodItem extends HTMLElement {
  _style = null;
  _food = {
    id: 0,
    name: 'foodName',
  };

  constructor() {
    super();
    this._style = document.createElement('style');
  }

  setFoodItem(value) {
    this._food = value;
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

          .food-header{
            display: inherit;
            flex-direction: row;

            position: absolute;
            top: -20%;
          }

          .food-header > .food-photo{
            border-radius: 150px;
            height: 150px;
            width: 150px;
          }

          .food-name {
            margin-block-end: unset;
            margin-top: 30px;
          }

          .food-name > a{
            text-decoration: none;
            color: black;
          }

          .food-description {
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
    this.setAttribute('data-id', this._food.id);

    this.updateStyle();
    this.innerHTML = `
        ${this._style.outerHTML}
        <div class="food-header">
          <img src="./images/default_food.png" class="food-photo" alt="food-photo"/>
        </div>
        <h3 class="food-name">${this._food.name}</h3>
        <p class="food-description">Delicious Guaranteed!</p>
      `;
  }
}

customElements.define('food-item', FoodItem);
