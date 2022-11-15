import { createOffers } from './data.js';
import { createOffersList } from './view.js';

const offers = createOffers();
createOffersList(offers);

