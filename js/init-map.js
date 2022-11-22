import { setActiveFilterFormState } from './page-state.js';
import { createCard } from './view.js';
import { addAdFormAction } from './form.js';
import { getData } from './api.js';
import { filterData, setDataRanking } from './filters.js';
import { debounce } from './utils.js';
import { renderGetErrorMessage } from './error-message.js';

const START_LOCATION = {
  lat: 35.68172,
  lng: 139.75392,
};
const GET_DATA = 'https://27.javascript.pages.academy/keksobooking/data';
const DECIMALS = 5;
const MAP_ZOOM = 12;
const ADVERTS_COUNT = 10;
const TIME_INTERVAL = 500;

const addressInput = document.querySelector('#address');
const formFilter = document.querySelector('.map__filters');
const interactiveMap = L.map('map-canvas');
const markerGroup = L.layerGroup();

let interactiveMarker;
let marker;

const setStartAddressValue = () => {
  addressInput.value = `${START_LOCATION.lat}, ${START_LOCATION.lng}`;
};

const setLocation = (target) => {
  const location = target.getLatLng();
  addressInput.value = `${location.lat.toFixed(
    DECIMALS
  )}, ${location.lng.toFixed(DECIMALS)}`;
};

const resetMap = () => {
  interactiveMap.setView(START_LOCATION, MAP_ZOOM);
  interactiveMap.closePopup();
  interactiveMarker.setLatLng(START_LOCATION);
};

const addMarkerGroup = (data) => {
  markerGroup.addTo(interactiveMap);
  setDataRanking(data)
    .slice()
    .filter(filterData)
    .slice(0, ADVERTS_COUNT)
    .forEach((offer) => {
      marker = L.marker(offer.location, {
        icon: L.icon({
          iconUrl: './img/pin.svg',
          iconSize: [40, 40],
          iconAnchor: [20, 40],
        }),
      });
      marker.addTo(markerGroup).bindPopup(createCard(offer));
    });
};

const onMarkerMove = (evt) => setLocation(evt.target);

const setAdFormStartState = () => {
  addAdFormAction();
  setStartAddressValue();
};

const setMapChange = (data) => {
  formFilter.addEventListener(
    'change',
    debounce(() => {
      markerGroup.clearLayers();
      resetMap();
      addMarkerGroup(data);
    }, TIME_INTERVAL)
  );
};

const getDataSuccessCallback = (data) => {
  setActiveFilterFormState();
  addMarkerGroup(data);
  setMapChange(data);
};

const getDataErrorCallback = () => {
  renderGetErrorMessage();
};

const initMap = () => {
  interactiveMap
    .on('load', () => {
      setAdFormStartState();
      getData(GET_DATA, getDataSuccessCallback, getDataErrorCallback);
    })
    .setView(START_LOCATION, MAP_ZOOM);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    foo: 'bar',
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(interactiveMap);

  interactiveMarker = L.marker(START_LOCATION, {
    draggable: 'true',
    icon: L.icon({
      iconUrl: './img/main-pin.svg',
      iconSize: [52, 52],
      iconAnchor: [26, 52],
    }),
  }).addTo(interactiveMap);

  interactiveMarker.on('move', onMarkerMove);
};

export { markerGroup, addMarkerGroup, initMap, resetMap };
