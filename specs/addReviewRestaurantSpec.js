import RestaurantSource from '../src/scripts/data/restaurantSource';
import AddReviewPresenter from '../src/scripts/utils/add-review-presenter';

describe('Add Review Restaurant', () => {
  let Presenter;
  let restaurantSource;
  const idTest = 111;
  const addReviewContainer = () => {
    document.body.innerHTML = `
    <div id="review">
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
    </div>
    </div>`;
  };

  const postingReview = ({ name, review }) => {
    const nameInputElement = document.querySelector('#add-review-name');
    const textInputElement = document.querySelector('#add-review-text');
    const addReviewButton = document.querySelector('#add-review-button');
    nameInputElement.value = name;
    textInputElement.value = review;
    addReviewButton.dispatchEvent(new Event('click'));
  };

  const costructAddReview = () => {
    spyOn(RestaurantSource, 'postReviewRestaurant');
    restaurantSource = spyOnAllFunctions(RestaurantSource);
    Presenter = new AddReviewPresenter({
      addReviewButton: document.querySelector('#add-review-button'),
      nameInputElement: document.querySelector('#add-review-name'),
      textInputElement: document.querySelector('#add-review-text'),
      restaurant: {
        id: idTest,
      },
    });
  };

  beforeEach(() => {
    addReviewContainer();
    costructAddReview();
  });

  it('Should be able to type name by user', () => {
    postingReview({
      name: 'atep',
      review: '',
    });

    expect(Presenter.valueInputName).toEqual('atep');
    expect(Presenter.valueInputText).toEqual('');
  });

  it('Should be able to type text review by user', () => {
    postingReview({
      name: '',
      review: 'review',
    });

    expect(Presenter.valueInputName).toEqual('');
    expect(Presenter.valueInputText).toEqual('review');
    expect(
      document.querySelector('#add-review-text').classList.contains('warning')
    ).toBeFalsy();
    expect(
      document.querySelector('#add-review-name').classList.contains('warning')
    ).toBeTruthy();
  });

  it('Should show warning if user typed empty input name', () => {
    postingReview({
      name: 'atep',
      review: '',
    });
    expect(
      document.querySelector('#add-review-name').classList.contains('warning')
    ).toBeFalsy();
    expect(
      document.querySelector('#add-review-text').classList.contains('warning')
    ).toBeTruthy();
  });

  it('Should show warning if user typed empty input text', () => {
    postingReview({
      name: '',
      review: 'review',
    });
    expect(
      document.querySelector('#add-review-name').classList.contains('warning')
    ).toBeTruthy();
    expect(
      document.querySelector('#add-review-text').classList.contains('warning')
    ).toBeFalsy();
  });

  it('Should ask model to posting review', () => {
    postingReview({
      name: 'atep',
      review: 'review',
    });
    expect(restaurantSource.postReviewRestaurant).toHaveBeenCalledWith({
      id: `${idTest}`,
      name: 'atep',
      review: 'review',
    });
  });

  it('Should show name review', (done) => {
    const postingInput = {
      id: `${idTest}`,
      name: 'atep',
      review: 'review',
    };

    document
      .querySelector('#review')
      .addEventListener('costumer-review-cards:searched:updated', () => {
        expect(
          document.querySelectorAll('.costumer-review-content-title').length
        ).toEqual(2);
        done();
      });

    restaurantSource.postReviewRestaurant
      .withArgs(postingInput)
      .and.returnValues([
        { id: 111, name: 'zefa', review: 'satu' },
        { id: 222, name: 'zefa', review: 'dua' },
      ]);
    postingReview(postingInput);
  });

  it('Should show message review', (done) => {
    const postingInput = {
      id: `${idTest}`,
      name: 'atep',
      review: 'review',
    };

    document
      .querySelector('#review')
      .addEventListener('costumer-review-cards:searched:updated', () => {
        expect(
          document.querySelectorAll('.costumer-review-content-sub').length
        ).toEqual(2);
        done();
      });

    restaurantSource.postReviewRestaurant
      .withArgs(postingInput)
      .and.returnValues([
        { id: 111, name: 'zefa', review: 'satu' },
        { id: 222, name: 'zefa', review: 'dua' },
      ]);
    postingReview(postingInput);
  });

  it('Should capture text input as empty', () => {
    postingReview({
      name: ' ',
      review: ' ',
    });
    expect(Presenter.valueInputName).toEqual('');
    expect(Presenter.valueInputText).toEqual('');

    postingReview({
      name: '        ',
      review: '       ',
    });
    expect(Presenter.valueInputName).toEqual('');
    expect(Presenter.valueInputText).toEqual('');

    postingReview({
      name: '',
      review: '',
    });
    expect(Presenter.valueInputName).toEqual('');
    expect(Presenter.valueInputText).toEqual('');

    postingReview({
      name: '\t',
      review: '\t',
    });
    expect(Presenter.valueInputName).toEqual('');
    expect(Presenter.valueInputText).toEqual('');
  });
});
