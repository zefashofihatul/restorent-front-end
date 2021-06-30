import cardTemplate from '../../component/review-card';

const destructoringCustomerReview = (customerReviews) => {
  let customerReviewsContainer = '';
  const customerReviewsData = customerReviews.reverse();
  customerReviewsData.forEach((customerReview, index) => {
    if (index === 10) return;
    customerReviewsContainer += cardTemplate(customerReview);
  });
  return customerReviewsContainer;
};

export default destructoringCustomerReview;
