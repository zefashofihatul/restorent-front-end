Feature('Add review restaurant');

Before(({ I }) => {
  I.amOnPage('/#/explore');
});

Scenario('Add review and success', async ({ I }) => {
  I.seeElement('.restaurant');

  I.seeElement('.restaurant-button a');
  I.click(locate('.restaurant-button a').first());

  const nameInputTesting = 'Ini nama E2E';
  const reviewInputTesting = 'ini review E2E';
  I.amOnPage('/#/detail');
  I.seeElement('#add-review-name');
  I.fillField('#add-review-name', nameInputTesting);
  I.seeElement('#add-review-text');
  I.fillField('#add-review-text', reviewInputTesting);

  I.click(locate('#add-review-button'));

  const nameReviewLocate = locate('.costumer-review-content-title').first();
  const nameReview = await I.grabTextFrom(nameReviewLocate);
  console.log(nameReview);

  I.see(nameInputTesting, '.costumer-review-content-title h3');
  I.see(reviewInputTesting, '.costumer-review-content-sub p');
});

Scenario('Add review but name field is null', async ({ I }) => {
  I.seeElement('.restaurant');

  I.seeElement('.restaurant-button a');
  I.click(locate('.restaurant-button a').first());

  const nameInputTesting = '   ';
  const reviewInputTesting = 'ini review E2E';
  I.amOnPage('/#/detail');
  I.seeElement('#add-review-name');
  I.fillField('#add-review-name', nameInputTesting);
  I.seeElement('#add-review-text');
  I.fillField('#add-review-text', reviewInputTesting);

  I.click(locate('#add-review-button'));

  I.seeElement('.warning');
});

Scenario('Add review but review text field is null', async ({ I }) => {
  I.seeElement('.restaurant');

  I.seeElement('.restaurant-button a');
  I.click(locate('.restaurant-button a').first());

  const nameInputTesting = 'Ini name';
  const reviewInputTesting = '     ';
  I.amOnPage('/#/detail');
  I.seeElement('#add-review-name');
  I.fillField('#add-review-name', nameInputTesting);
  I.seeElement('#add-review-text');
  I.fillField('#add-review-text', reviewInputTesting);

  I.click(locate('#add-review-button'));

  I.seeElement('.warning');
});
