import { getUserLoggedIn } from '../storage/userDB.js';
import { logoutUser } from '../storage/userDB.js';
import { getCountryFlag } from '../api/countriesApi.js';
import { passGenRender } from './passGenDashboard.js';
import { mountWeatherUI } from './weatherAppDashboard.js';

const userLoggedIn = getUserLoggedIn();

const userName = document.getElementById('userName');
const countryName = document.getElementById('countryName');
const countryFlag = document.getElementById('countryFlag');

const burgerBtn = document.getElementById('burgerBtn');
const sideMenu = document.getElementById('sideMenu');
const closeBtn = document.getElementById('closeBtn');
const logoutBtn = document.getElementById('logoutBtn');

const firstCard = document.getElementById('firstCard');

//populate & render dashboard with currentUser data
(async () => {
  if (userLoggedIn) {
    userName.innerText = userLoggedIn.name;
    countryName.innerText = userLoggedIn.country;
    const flagLink = await getCountryFlag();
    countryFlag.src = flagLink;
  }
})();

// logic to open/close sideMenu in Dashboard
if (burgerBtn) {
  burgerBtn.addEventListener('click', () => {
    sideMenu.classList.toggle('open');
  });
}
if (window.location.pathname.includes('dashboard.html')) {
  window.addEventListener('click', (e) => {
    if (sideMenu.classList.contains('open') && e.clientX > 250) {
      sideMenu.classList.remove('open');
    }
  });
}
if (closeBtn) {
  closeBtn.addEventListener('click', () => {
    sideMenu.classList.remove('open');
  });
}

//logs out the user when clicked
if (logoutBtn) {
  logoutBtn.addEventListener('click', () => {
    logoutUser();
    window.location.href = 'index.html';
  })
}

//password generator app
const btn = document.getElementById('generatorBtn');
btn.addEventListener('click', () => {
  passGenRender();
});

//weather app
const inputSearch = document.getElementById('inputSearch');
const searchBtn = document.getElementById('searchBtn');

const renderWeatherApp = () => {
  const city = inputSearch.value.trim();
  if (city) mountWeatherUI(city);
}

searchBtn.addEventListener('click', ()=> {
  console.log(inputSearch.value);
  renderWeatherApp();
});
inputSearch.addEventListener('keydown', (e) => {
  console.log(inputSearch.value);
  if (e.key === 'Enter') renderWeatherApp();
})