class RecommendedItem extends HTMLElement {
  _style = null;
  _restaurant = {
    id: 0,
    name: 'restaurantName',
    description: 'restaurantDescription',
    pictureId: 'restaurantPictureId',
    city: 'restaurantCity',
    rating: 0,
  };

  constructor() {
    super();
    this._style = document.createElement('style');
  }

  setRecommendedItem(value) {
    this._recommendedItem = value;
    this.render();
  }

  setRatingValue(rating) {
    if (Number.isInteger(rating)) {
      let tmp = '';
      for (let i = rating; i > 0; i--) {
        if (i == 1) {
          tmp += '★';
        } else {
          tmp += '★ ';
        }
      }
      return tmp;
    } else {
      let tmp = '';
      const wholeStars = Math.floor(rating);
      const decimalPart = rating - wholeStars;

      for (let i = 0; i < wholeStars; i++) {
        tmp += '★ ';
      }

      if (decimalPart >= 0.5) {
        tmp += '☆';
      }

      return tmp.trim();
    }
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

          .recommended-header{
            display: inherit;
            flex-direction: row;

            position: absolute;
            top: -20%;
          }

          .recommended-header > .restaurant-photo{
            border-radius: 150px;
            height: 150px;
            width: 150px;
          }

          .restaurant-name {
            margin-block-end: unset;
            margin-top: 30px;
          }

          .restaurant-city{
            margin: unset;
            font-size: 14px;
          }

          .restaurant-rating {
            color: #EA6D27;
            font-size: 20px;
            font-weight: 800;
          }

          .restaurant-rating > span{
            font-size: 16px;
          }

          .restaurant-description {
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
    this.setAttribute('data-id', this._restaurant.id);

    this.updateStyle();
    this.innerHTML = `
        ${this._style.outerHTML}
        <div class="recommended-header">
          <img src="${
  this._restaurant.pictureId
}" class="restaurant-photo" alt="restaurant-photo"/>
        </div>
        <h3 class="restaurant-name">${this._restaurant.name}</h3>
        <p class="restaurant-city">${this._restaurant.city}</p>
        <span class="restaurant-rating"> <span>${
  this._restaurant.rating
}/5</span> ${this.setRatingValue(this._restaurant.rating)}</span>
        <p class="restaurant-description">${this._restaurant.description}</p>
      `;
  }
}

customElements.define('recommended-item', RecommendedItem);
