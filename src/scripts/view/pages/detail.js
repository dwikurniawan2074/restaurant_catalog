import UrlParser from '../../../scripts/routes/url-parser';
import DataSource from '../../../public/data/data-source';

const Detail = {
  async render() {
    return `
        <h2>Detail Page</h2>
      `;
  },
  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await DataSource.detailRestaurant(url.id);
    console.log(restaurant);
  },
};
export default Detail;
