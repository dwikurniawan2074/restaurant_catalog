import DrawerInitiator from '../../scripts/utils/drawer-intitator';
import UrlParser from '../../scripts/routes/url-parser';
import routes from '../../scripts/routes/routes';

class App {
  constructor({ button, drawer, content }) {
    this._button = button;
    this._drawer = drawer;
    this._content = content;
    this._initialAppShell();
  }
  _initialAppShell() {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      content: this._content,
    });

  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    const skipLink = document.querySelector('.skip-link');
    const pageUrl = `${window.location.protocol  }//${  window.location.host  }/`;


    skipLink.addEventListener('click', (event) => {
      const restaurantDetailContent = document.querySelector('#restaurant-detail-content');
      const restaurantFavoriteContent = document.querySelector('#restaurant-favorites-content');

      if (window.location.href  == pageUrl || window.location.href  == `${pageUrl  }#/`){
        window.location.hash = 'recommended-section';
      } else if (window.location.href  == `${pageUrl  }#/favorites`){
        restaurantFavoriteContent.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      } else if (window.location.href  == `${pageUrl  }#contact-section`){
        window.location.hash = 'recommended-section';
      } else if (window.location.hash.startsWith('#/detail/')){
        restaurantDetailContent.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }

      event.preventDefault();
    });

    this._content.innerHTML = await page.render();
    await page.afterRender();
  }
}
export default App;