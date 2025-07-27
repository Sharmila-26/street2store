const supermarkets = [
  {
    name: "FreshMart",
    location: "Chennai",
    image: "images/freshmart.jpg",
    link: "https://www.freshmart.in"
  },
  {
    name: "Daily Wholesale",
    location: "Guindy",
    image: "images/daily.jpg",
    link: "https://www.dailywholesale.com"
  },
  {
    name: "Metro Cash & Carry",
    location: "Velachery",
    image: "images/metro.jpg",
    link: "https://www.metro.co.in"
  }
];

const container = document.getElementById('supermarket-list');

supermarkets.forEach(store => {
  const card = document.createElement('div');
  card.className = 'supermarket-card';
  card.innerHTML = `
    <img src="${store.image}" alt="${store.name}">
    <h3>${store.name}</h3>
    <p>${store.location}</p>
    <a href="${store.link}" target="_blank" class="button">Visit Supermarket</a>
  `;
  container.appendChild(card);
});
