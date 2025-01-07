import DataSource from '../../../public/data/data-source';
import { createRestaurantTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
        <main-section id="main-section" mainImg="./images/heros/hero-image_2.jpg"></main-section>

        <div id="recommended-section" class="recommended-section">
          <h1>Recommended</h1>
          <recommended-list>
          </recommended-list>
        </div>
        
        <div id="testimonial-section" class="testimonial-section">
          <h1>Testimonial</h1>
          <testimonial-list></testimonial-list>
        </div>

        <div id="contact-section" class="contact-section">
          <div class="email-box shadow-box">
            <h2>List your restaurant with us today!</h2>
            <form action="">
              <div class="email-input-container shadow-box">
                <input type="text" class="box-leaf" placeholder="Enter your email...">
                <button class="box-leaf shadow-box primary-color-button">Send</button>
              </div>
            </form>
          </div>
          <h2>Our Social Media</h2>
          <div class="social-media-list">
            <a href="https://www.instagram.com/dvvkrn" class="box-leaf"><img src="./images/instagram.png" alt="instagram logo" width="25"></a>
            <a href="https://www.facebook.com/dwi.kurniawan.3367174" class="box-leaf"><img src="./images/facebook.png" alt="facebook logo" width="28"></a>
            <a href="https://www.twitter.com/elonmusk" class="box-leaf"><img src="./images/twitter.png" alt="twitter logo" width="25"></a>
            <a href="https://www.tiktok.com/@dwikurniawan732" class="box-leaf"><img src="./images/tiktok.png" alt="tiktok logo" width="28"></a>
          </div>
        </div>
        
        <footer>
          <footer-bar></footer-bar>
        </footer>
    `;
  },

  async afterRender() {

    const restaurants = await DataSource.restaurantList();
    const recommendedList = document.querySelector('recommended-list');

    restaurants.forEach((restaurant) => {
      const restaurantElement = createRestaurantTemplate(restaurant);
      recommendedList.appendChild(restaurantElement);
    });

  },
};
export default Home;
