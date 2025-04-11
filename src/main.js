import './style.css'
import { Hero } from './components/heroSection.js';
import { CountrysideSection } from './components/countrySideSection.js';
import { footerSection } from './components/footerSection.js';
import { locallSourceSection } from './components/locallySourceSection.js';
import { menuHighlights } from './components/menuHighlightsSection.js';
import { familyGathering } from './components/familyGatheringSection.js';
import { form } from './components/bookingForm.js';
import { bookingFooter } from './components/bookingFooter.js';
import { bookingHero } from './components/bookingHeroSection.js';


function router() {
  const path = window.location.pathname;
  const appElement = document.querySelector('#app');
  const bookingElement = document.querySelector('#booking');
  
  if (path === '/' || path === '/index.html') {
    appElement.style.display = 'block';
    bookingElement.style.display = 'none';
    
    
    if (!appElement.hasChildNodes()) {
      appElement.innerHTML = `
        ${Hero()}
        ${CountrysideSection()}
        ${locallSourceSection()}
        ${menuHighlights()}
        ${familyGathering()}
        ${footerSection()}
      `;
      setupHomeEventListeners();
    }
  } 
  else if (path === '/booking.html' || path === '/booking') {
    appElement.style.display = 'none';
    bookingElement.style.display = 'block';
    if (!bookingElement.hasChildNodes()) {
      bookingElement.innerHTML = `
        ${bookingHero()}
        ${form()}
        ${bookingFooter()}
      `;
      initializeDatePicker();
      initializeTimePicker();
      initializePeopleCounter();
      handleFormSubmission();
    }
  }
}

function setupHomeEventListeners() {
  const bookButtons = document.querySelectorAll('a[href="/booking.html"]');
  bookButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      history.pushState(null, '', '/booking.html');
      router();
    });
  });

  
  const eventButtons = document.querySelectorAll('.event-type');
  eventButtons.forEach(button => {
    button.addEventListener('click', () => {
      eventButtons.forEach(btn => {
        btn.classList.remove('short-border-bottom','font-bold','pb-2', 'mx-auto', 'w-fit');
        btn.classList.add('text-gray-400');
      });
      button.classList.remove('text-gray-400');
      button.classList.add('font-medium', 'text-black');
      
      if (window.innerWidth < 1024) {
        button.classList.add('short-border-bottom', 'pb-2', 'mx-auto', 'w-fit');
      }
  
      
      const eventTitle = document.getElementById('event-title');
      const eventDescription = document.getElementById('event-description');
      const eventDesktopImage = document.getElementById('event-desktop-image');
      const eventTabletImage = document.getElementById('event-tablet-image');
      const eventMobileImage = document.getElementById('event-mobile-image');
      
      switch(button.textContent.trim()) {
        case 'Family Gathering':
          eventTitle.textContent = 'Family Gathering';
          eventDescription.textContent = "We love catering for entire families. So please bring everyone along for a special meal with your loved ones. We'll provide a memorable experience for all.";
          eventDesktopImage.src = "/images/homepage/family-gathering-desktop.jpg";
          eventTabletImage.src = "/images/homepage/family-gathering-tablet.jpg";
          eventMobileImage.src = "/images/homepage/family-gathering-mobile.jpg";
          break;
        case 'Special Events':
          eventTitle.textContent = 'Special Events';
          eventDescription.textContent = "Whether it's a romantic dinner or special date you're celebrating, we'll look after you. We'll be sure to mark your special date with an unforgettable meal.";
          eventDesktopImage.src = '/images/homepage/special-events-desktop.jpg';
          eventTabletImage.src = "/images/homepage/special-events-tablet.jpg";
          eventMobileImage.src = "/images/homepage/special-events-mobile.jpg";
          break;
        case 'Social Events':
          eventTitle.textContent = 'Social Events';
          eventDescription.textContent = "Are you looking to have a larger social event? No problem! We're experienced in hosting social gatherings. We'll work with you to make your event a night to remember.";
          eventDesktopImage.src = '/images/homepage/social-events-desktop.jpg';
          eventTabletImage.src = "/images/homepage/social-events-tablet.jpg";
          eventMobileImage.src = "/images/homepage/social-events-mobile.jpg";
          break;
      }
    });
  });
}


function initializeDatePicker() {
  const monthSelect = document.getElementById('month');
  const daySelect = document.getElementById('day');
  const yearSelect = document.getElementById('year');
  
  if (!monthSelect || !daySelect || !yearSelect) return;
  
  const months = [
    {value: '01', text: 'January'},
    {value: '02', text: 'February'},
    {value: '03', text: 'March'},
    {value: '04', text: 'April'},
    {value: '05', text: 'May'},
    {value: '06', text: 'June'},
    {value: '07', text: 'July'},
    {value: '08', text: 'August'},
    {value: '09', text: 'September'},
    {value: '10', text: 'October'},
    {value: '11', text: 'November'},
    {value: '12', text: 'December'}
  ];
  
  months.forEach(month => {
    const option = document.createElement('option');
    option.value = month.value;
    option.textContent = month.text;
    monthSelect.appendChild(option);
  });
  
  for (let i = 1; i <= 31; i++) {
    const option = document.createElement('option');
    option.value = i < 10 ? `0${i}` : `${i}`;
    option.textContent = i;
    daySelect.appendChild(option);
  }
  
  const currentYear = new Date().getFullYear();
  for (let i = currentYear; i <= currentYear + 10; i++) {
    const option = document.createElement('option');
    option.value = i;
    option.textContent = i;
    yearSelect.appendChild(option);
  }
}

function initializeTimePicker() {
  const hourSelect = document.getElementById('hour');
  const minuteSelect = document.getElementById('minute');
  
  if (!hourSelect || !minuteSelect) return;
  
  for (let i = 1; i <= 12; i++) {
    const option = document.createElement('option');
    option.value = i < 10 ? `0${i}` : `${i}`;
    option.textContent = i < 10 ? `0${i}` : `${i}`;
    hourSelect.appendChild(option);
  }
  
  const minutes = ['00', '15', '30', '45'];
  minutes.forEach(min => {
    const option = document.createElement('option');
    option.value = min;
    option.textContent = min;
    minuteSelect.appendChild(option);
  });
}

function initializePeopleCounter() {
  const decreaseBtn = document.getElementById('decrease-people');
  const increaseBtn = document.getElementById('increase-people');
  const peopleInput = document.getElementById('people');
  
  if (!decreaseBtn || !increaseBtn || !peopleInput) return;
  
  decreaseBtn.addEventListener('click', () => {
    const currentValue = parseInt(peopleInput.value);
    if (currentValue > 1) {
      peopleInput.value = currentValue - 1;
    }
  });
  
  increaseBtn.addEventListener('click', () => {
    const currentValue = parseInt(peopleInput.value);
    if (currentValue < 20) {
      peopleInput.value = currentValue + 1;
    }
  });
}

function handleFormSubmission() {
  const form = document.getElementById('reservation-form');
  const successMessage = document.getElementById('success-message');
  
  if (!form || !successMessage) return;
  
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = new FormData(form);
    const reservationData = {
      name: formData.get('name'),
      email: formData.get('email'),
      date: `${formData.get('year')}-${formData.get('month')}-${formData.get('day')}`,
      time: `${formData.get('hour')}:${formData.get('minute')} ${formData.get('ampm')}`,
      people: formData.get('people')
    };
    console.log('Reservation data:', reservationData);
     form.classList.add('hidden');
    successMessage.classList.remove('hidden');
    
    setTimeout(() => {
      form.reset();
      form.classList.remove('hidden');
      successMessage.classList.add('hidden'); 
    }, 5000);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  router();
  
  window.addEventListener('popstate', router);
});