import API_ENDPOINT from '../globals/api-endpoint';
import CONFIG from '../globals/config';

class RestaurantSource {
  static async getDataRestaurants() {
    const response = await fetch(API_ENDPOINT.GETALL);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async getDetailRestaurant(id) {
    const response = await fetch(`${API_ENDPOINT.GETDETAIL}/${id}`);
    const responseJson = await response.json();
    return responseJson.restaurant;
  }

  static async getSearchRestaurant(query) {
    const response = await fetch(`${API_ENDPOINT.SEARCH}${query}`);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async postReviewRestaurant(data) {
    const requestBody = {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        'X-Auth-Token': `${CONFIG.API_KEY}`,
      },
      body: JSON.stringify(data),
    };
    const response = await fetch(`${API_ENDPOINT.POSTREVIEW}`, requestBody);
    const responseJson = await response.json();
    return responseJson.customerReviews;
  }
}

export default RestaurantSource;
