import { createOffers } from './data.js';
import { viewCard } from './view.js';
import { disableForms, formActivate, filterActivate } from './form.js';

const offer = createOffers()[0];
viewCard(offer);
