// function for maximum text
function truncateText(data, maxLength) {
  const truncated = data.split('');
  let result = '';
  for (let a = 0; a < maxLength && a < data.length; a += 1) {
    result += `${truncated[a]}`;
  }
  if (maxLength <= data.length) {
    result += ' ...';
  }
  return result;
}

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
        <p>${truncateText(review, 100)}</p>
      </div>
    </div>
  </div>
  `;
  return container;
};

export default cardTemplate;
