const cardTemplate = ({ name, date, review }) => {
  const container = `
  <div class="review">
  <div class="img-review">
  </div>
  <div class="costumer-review-content">
  <div class="costumer-review-content-title">
  <h3>${name}</h3>
  <span>${date}</span>
  </div>
      <div class="costumer-review-content-sub">
        <p>${review}</p>
      </div>
    </div>
  </div>
  `;
  return container;
};

export default cardTemplate;
