import destructoringArray from './helper/destructoring-array';
import destructoringCustomerReview from './helper/destructoring-customer-review';

const restaurantDetail = (data) => {
  const restaurantContainer = `
        <div class="back-arrow">
          <a class="fa fa-arrow-left" tabindex="0" id="back-page-button" href="/"></a>
          <div class="saved" id="saved-text">
            
          </div>
        </div>
        <div class="container-general-information">
          <div class="general-information">
            <div class="title-general-information">
              <h1 tabindex="0">${data.name}</h1>
            </div>
            <div class="img-general-information">
              <img src="https://restaurant-api.dicoding.dev/images/medium/${
                data.pictureId
              }" alt="Restaurant">
            </div>
            <div class="sub-general-information">
              <div class="card-information">
                <h2 class="card-information-title" tabindex="0">Lokasi</h2>
                <p class="card-information-sub" tabindex="0">${data.city}</p>
              </div>
              <div class="card-information">
                <h2 class="card-information-title" tabindex="0">Rating</h2>
                <p class="card-information-sub" tabindex="0">${data.rating}</p>
              </div>
              <div class="card-information">
                <h2 class="card-information-title" tabindex="0">Categories</h2>
                <p class="card-information-sub" tabindex="0">
                  ${destructoringArray(data.categories)}
                </p>
              </div>
              <div class="card-information">
                <h2 class="card-information-street" tabindex="0">
                  ${data.address}
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div class="container-description">
          <div class="description">
            <div class="description-content">
              <h2 class="description-content-title" tabindex="0">
                Description
              </h2>
              <p class="description-content-article">
                ${data.description}
              </p>
            </div>
          </div>
          <div class="container-menu-review">
            <div class="menu">
              <div class="foods-menu">
                <h2 class="foods-menu-title" tabindex="0">
                  Foods Menu
                </h2>
                <p class="foods-menu-article">
                  ${destructoringArray(data.menus.foods)}
                </p>
              </div>
              <div class="drinks-menu">
                <h2 class="drinks-menu-title" tabindex="0">
                  Drinks Menu
                </h2>
                <p class="drinks-menu-article">
                  ${destructoringArray(data.menus.drinks)}
                </p>
              </div>
            </div>

            <div class="costumer-review" id="review">
              <h2 class="costumer-review-title" tabindex="0">
                Costumer Review
              </h2>
              <p class="costumer-review-description">
                Ini apa kata mereka mengenai restaurant :
              </p>
              <div class="add-review">
                <div class="input">
                  <input type="text" name="add-review" id="add-review-name" placeholder="Name" maxlength="50">
                </div>
                <div class="input">
                  <input type="text" name="add-review" id="add-review-text" placeholder="Review" maxlength="50">
                </div>
                <div class="button">
                  <button id="add-review-button">Add</button>
                </div>
              </div>
              <div class="costumer-review-cards">
                ${destructoringCustomerReview(data.customerReviews)}
              </div>
            </div>
          </div>
        </div>
  `;
  return restaurantContainer;
};

export default restaurantDetail;
