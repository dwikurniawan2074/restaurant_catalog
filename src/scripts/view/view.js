import Utils from "../utils.js";
const restaurantData = require('../../public/data/DATA.json');

const view = () => {
    const recommendedSection = document.querySelector("#recommended-section");
    const recommendedListEl = recommendedSection.querySelector("recommended-list");

    // console.log(restaurantData);

    const showRecommendedItem = () => {
        displayResult();
        // showRecommendedList();
        
    }

    const showRecommendedList = () => {
        Array.from(recommendedSection.children).forEach((element) => {
          console.log(element);
        });
        Utils.showElement(recommendedListEl);  
    };

    const displayResult = () => {
        let restaurants = [];
        
        if (Array.isArray(restaurantData.restaurants)) {
            restaurants = restaurantData.restaurants;
        } else {
            console.error("Invalid restaurant data format");
            return;
        }

        const recommendedItemElements = [];
        restaurants.forEach((restaurant) => {
            const recommendedItemElement = document.createElement("recommended-item");
            recommendedItemElement._restaurant = restaurant;
            recommendedItemElements.push(recommendedItemElement);
        });

        Utils.emptyElement(recommendedListEl);
        recommendedListEl.append(...recommendedItemElements);
    }

    showRecommendedItem();
};

export default view;
