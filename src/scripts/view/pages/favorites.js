import UrlParser from '../../../scripts/routes/url-parser';
import DataSource from '../../../public/data/data-source';

const Favorites = {
  async render() {
    return `
        <h2>Favorites Page</h2>
      `;
  },
  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
  },
};
export default Favorites;