import CONFIG from '../../globals/config';

// function for maximum text
function truncateText(data = 'Untitled', maxLength) {
  const truncated = data.split(' ');
  let result = '';
  for (let a = 0; a < maxLength; a += 1) {
    result += `${truncated[a]} `;
  }
  return result;
}

// Component restaurant-card
function restaurantCard(data) {
  const container = `
  <div tabindex="0" class="restaurant">
  <div class="main-image-container">
    <img
      class="main-image"
      src="${CONFIG.BASE_IMG_URL}${data.pictureId}"
      alt="Restaurant"
    />
  </div>
  <div class="sub-info">
    <div class="rating">
      <span class="fa fa-star" aria-label="rating restaurant"></span>
      <p>${data.rating}</p>
    </div>
    <p class="kota">${data.city}</p>
  </div>
  <div class="restaurant-info">
    <h2 class="restaurant-info-name">${data.name}</h2>
    <p>
      ${truncateText(data.description, 10)} ...
    </p>
  </div>
  <div class="restaurant-button">
    <a href="#/detail/${data.id}">More Info</a>
  </div>
</div>
  `;

  return container;
}

export default restaurantCard;
