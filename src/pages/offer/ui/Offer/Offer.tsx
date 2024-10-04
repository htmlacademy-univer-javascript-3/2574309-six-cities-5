import { useUserReviewForm, UserReviewFormI } from '@/features/private-route/hooks/useUserReviewForm';
import {
  getInsideItemsRefbook,
  getOfferMockData,
  InsideItemsRefbookI,
  OfferI,
} from '@/shared/api';
import { PlaceList } from '@/widgets/PlaceList';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

export const Offer: React.FC = () => {
  const [offer, setOffer] = useState<OfferI | null>(null);
  const [insideItemsRb, setInsideItemsRb] = useState<
    InsideItemsRefbookI[] | null
  >(null);

  const {values, handleSubmit, setFieldValue} = useUserReviewForm();

  const { id } = useParams();

  useEffect(() => {
    if (id) {
      scrollTo({top: 0, behavior: 'smooth'});
      setOffer(getOfferMockData(Number(id)));
      setInsideItemsRb(getInsideItemsRefbook());
    }
  }, [id]);

  const onChangeInputHandler = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const value = e.currentTarget.value;
    const name = e.currentTarget.name as keyof UserReviewFormI;
    setFieldValue(name, value);
  };

  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link" href="main.html">
                <img
                  className="header__logo"
                  src="img/logo.svg"
                  alt="6 cities logo"
                  width="81"
                  height="41"
                />
              </a>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a
                    className="header__nav-link header__nav-link--profile"
                    href="#"
                  >
                    <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                    <span className="header__user-name user__name">
                      Oliver.conner@gmail.com
                    </span>
                    <span className="header__favorite-count">3</span>
                  </a>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href="#">
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--offer">
        <section className="offer">
          {offer ? (
            <>
              {offer.images.length && (
                <div className="offer__gallery-container container">
                  <div className="offer__gallery">
                    {offer.images.map((img) => (
                      <div key={img.id} className="offer__image-wrapper">
                        <img
                          className="offer__image"
                          src={img.src}
                          alt="Photo studio"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
              <div className="offer__container container">
                <div className="offer__wrapper">
                  {offer.premium && (
                    <div className="offer__mark">
                      <span>Premium</span>
                    </div>
                  )}
                  <div className="offer__name-wrapper">
                    <h1 className="offer__name">{offer.name}</h1>
                    <button
                      className="offer__bookmark-button button"
                      type="button"
                    >
                      <svg
                        className="offer__bookmark-icon"
                        width="31"
                        height="33"
                      >
                        <use xlinkHref="#icon-bookmark"></use>
                      </svg>
                      <span className="visually-hidden">To bookmarks</span>
                    </button>
                  </div>
                  <div className="offer__rating rating">
                    <div className="offer__stars rating__stars">
                      <span style={{ width: `${offer.rating * 20}%` }}></span>
                      <span className="visually-hidden">Rating</span>
                    </div>
                    <span className="offer__rating-value rating__value">
                      {offer.rating}
                    </span>
                  </div>
                  <ul className="offer__features">
                    <li className="offer__feature offer__feature--entire">
                      {offer.entire}
                    </li>
                    <li className="offer__feature offer__feature--bedrooms">
                      {offer.bedroomsCount} Bedroom
                      {offer.bedroomsCount > 1 && 's'}
                    </li>
                    <li className="offer__feature offer__feature--adults">
                      Max {offer.maxAdults} adults
                    </li>
                  </ul>
                  <div className="offer__price">
                    <b className="offer__price-value">&euro;{offer.price}</b>
                    <span className="offer__price-text">&nbsp;night</span>
                  </div>
                  <div className="offer__inside">
                    <h2 className="offer__inside-title">What&apos;s inside</h2>
                    {insideItemsRb && (
                      <ul className="offer__inside-list">
                        {offer.insideItems.map((insideItemId) => (
                          <li key={insideItemId} className="offer__inside-item">
                            {insideItemsRb.find(
                              (item) => item.id === insideItemId
                            )?.name || 'Something unusual'}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                  <div className="offer__host">
                    <h2 className="offer__host-title">Meet the host</h2>
                    <div className="offer__host-user user">
                      <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
                        <img
                          className="offer__avatar user__avatar"
                          src={offer.host.imgSrc}
                          width="74"
                          height="74"
                          alt="Host avatar"
                        />
                      </div>
                      <span className="offer__user-name">
                        {offer.host.name}
                      </span>
                      <span className="offer__user-status">
                        {offer.host.status}
                      </span>
                    </div>
                    <div className="offer__description">
                      {offer.offerText.split('\n').map((item) => (
                        <p key={item.slice(0, 10)} className="offer__text">
                          {item}
                        </p>
                      ))}
                    </div>
                  </div>
                  <section className="offer__reviews reviews">
                    {offer.reviews.length && (
                      <>
                        <h2 className="reviews__title">
                          Reviews &middot;{' '}
                          <span className="reviews__amount">
                            {offer.reviews.length}
                          </span>
                        </h2>
                        <ul className="reviews__list">
                          {offer.reviews.map((review) => (
                            <li key={review.id} className="reviews__item">
                              <div className="reviews__user user">
                                <div className="reviews__avatar-wrapper user__avatar-wrapper">
                                  <img
                                    className="reviews__avatar user__avatar"
                                    src={review.imgSrc}
                                    width="54"
                                    height="54"
                                    alt="Reviews avatar"
                                  />
                                </div>
                                <span className="reviews__user-name">
                                  {review.name}
                                </span>
                              </div>
                              <div className="reviews__info">
                                <div className="reviews__rating rating">
                                  <div className="reviews__stars rating__stars">
                                    <span
                                      style={{
                                        width: `${review.rating * 20}%`,
                                      }}
                                    >
                                    </span>
                                    <span className="visually-hidden">
                                      Rating
                                    </span>
                                  </div>
                                </div>
                                <p className="reviews__text">
                                  {review.text}
                                </p>
                                <time
                                  className="reviews__time"
                                  dateTime={review.date}
                                >
                                  {new Date(review.date).toLocaleDateString('en-US', {year: 'numeric', month: 'long'})}
                                </time>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </>
                    )}
                    <form
                      className="reviews__form form"
                      action="#"
                      method="post"
                    >
                      <label
                        className="reviews__label form__label"
                        htmlFor="review"
                      >
                        Your review
                      </label>
                      <div className="reviews__rating-form form__rating">
                        <input
                          className="form__rating-input visually-hidden"
                          name="rating"
                          value="5"
                          id="5-stars"
                          type="radio"
                          onChange={(e) => onChangeInputHandler(e)}
                        />
                        <label
                          htmlFor="5-stars"
                          className="reviews__rating-label form__rating-label"
                          title="perfect"
                        >
                          <svg
                            className="form__star-image"
                            width="37"
                            height="33"
                          >
                            <use xlinkHref="#icon-star"></use>
                          </svg>
                        </label>

                        <input
                          className="form__rating-input visually-hidden"
                          name="rating"
                          value="4"
                          id="4-stars"
                          type="radio"
                          onChange={(e) => onChangeInputHandler(e)}
                        />
                        <label
                          htmlFor="4-stars"
                          className="reviews__rating-label form__rating-label"
                          title="good"
                        >
                          <svg
                            className="form__star-image"
                            width="37"
                            height="33"
                          >
                            <use xlinkHref="#icon-star"></use>
                          </svg>
                        </label>

                        <input
                          className="form__rating-input visually-hidden"
                          name="rating"
                          value="3"
                          id="3-stars"
                          type="radio"
                          onChange={(e) => onChangeInputHandler(e)}
                        />
                        <label
                          htmlFor="3-stars"
                          className="reviews__rating-label form__rating-label"
                          title="not bad"
                        >
                          <svg
                            className="form__star-image"
                            width="37"
                            height="33"
                          >
                            <use xlinkHref="#icon-star"></use>
                          </svg>
                        </label>

                        <input
                          className="form__rating-input visually-hidden"
                          name="rating"
                          value="2"
                          id="2-stars"
                          type="radio"
                          onChange={(e) => onChangeInputHandler(e)}
                        />
                        <label
                          htmlFor="2-stars"
                          className="reviews__rating-label form__rating-label"
                          title="badly"
                        >
                          <svg
                            className="form__star-image"
                            width="37"
                            height="33"
                          >
                            <use xlinkHref="#icon-star"></use>
                          </svg>
                        </label>

                        <input
                          className="form__rating-input visually-hidden"
                          name="rating"
                          value="1"
                          id="1-star"
                          type="radio"
                          onChange={(e) => onChangeInputHandler(e)}
                        />
                        <label
                          htmlFor="1-star"
                          className="reviews__rating-label form__rating-label"
                          title="terribly"
                        >
                          <svg
                            className="form__star-image"
                            width="37"
                            height="33"
                          >
                            <use xlinkHref="#icon-star"></use>
                          </svg>
                        </label>
                      </div>
                      <textarea
                        className="reviews__textarea form__textarea"
                        id="review"
                        name="review"
                        placeholder="Tell how was your stay, what you like and what can be improved"
                        value={values.review}
                        onChange={(e) => onChangeInputHandler(e)}
                      />
                      <div className="reviews__button-wrapper">
                        <p className="reviews__help">
                          To submit review please make sure to set{' '}
                          <span className="reviews__star">rating</span> and
                          describe your stay with at least{' '}
                          <b className="reviews__text-amount">50 characters</b>.
                        </p>
                        <button
                          className="reviews__submit form__submit button"
                          type="button"
                          disabled={!values.rating || !values.review}
                          onClick={() => handleSubmit()}
                        >
                          Submit
                        </button>
                      </div>
                    </form>
                  </section>
                </div>
              </div>
              <section className="offer__map map"></section>
            </>
          ) : (
            <div className="container"><h1 className='offer__name'>Not Found</h1></div>
          )}
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">
              Other places in the neighbourhood
            </h2>
            <PlaceList size='small' rootBEMClassName='near-places' className="near-places__list places__list" />
          </section>
        </div>
      </main>
    </div>
  );
};
