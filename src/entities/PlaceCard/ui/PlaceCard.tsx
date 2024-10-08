import { Link } from 'react-router-dom';
import { PlaceCardProps } from './PlaceCard.props';
import { classNamesConcat } from '@/shared/utils/classNamesConcat';

export const PlaceCard: React.FC<PlaceCardProps> = ({
  id,
  premium,
  images,
  price,
  rating,
  name,
  rootBEMClassName,
}: PlaceCardProps) => (
  <article className={classNamesConcat('place-card', {[`${rootBEMClassName}__card`]: rootBEMClassName})}>
    {premium && (
      <div className="place-card__mark">
        <span>Premium</span>
      </div>
    )}
    {images.length && (
      <div className={classNamesConcat({[`${rootBEMClassName}__image-wrapper`]: rootBEMClassName}, 'place-card__image-wrapper')}>
        <Link to={`/offer/${id}`}>
          <img
            className="place-card__image"
            src={images[0].src}
            width="260"
            height="200"
            alt="Place image"
          />
        </Link>
      </div>
    )}
    <div className="place-card__info">
      <div className="place-card__price-wrapper">
        <div className="place-card__price">
          <b className="place-card__price-value">&euro;{price}</b>
          <span className="place-card__price-text">&#47;&nbsp;night</span>
        </div>
        <button className="place-card__bookmark-button button" type="button">
          <svg className="place-card__bookmark-icon" width="18" height="19">
            <use xlinkHref="#icon-bookmark"></use>
          </svg>
          <span className="visually-hidden">To bookmarks</span>
        </button>
      </div>
      <div className="place-card__rating rating">
        <div className="place-card__stars rating__stars">
          <span style={{ width: `${rating * 20}%` }}></span>
          <span className="visually-hidden">Rating</span>
        </div>
      </div>
      <h2 className="place-card__name">
        <a href="#">{name}</a>
      </h2>
      <p className="place-card__type">Apartment</p>
    </div>
  </article>
);
