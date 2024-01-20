// ? Display the following array on the page
// todo-1: First, watch the video in the help folder.
// todo-2: In the next step, review the HTML and CSS files.
// todo-3: Iterate over the "data" array and create a card for each array index.
// todo-4: Append the created card to the element with the class "cards".
// todo-5: Each card should have a button; when clicked, the card title should be displayed on the element with the class "cardSelected".

const data = [
  {
    id: 1,
    title: "ravel Monkey Club #1",
    src: "https://themesflat.co/html/axiesv/assets/images/box-item/card-item-9.jpg",
    account: "Ralph Garraway",
    accountImage: "https://themesflat.co/html/axiesv/assets/images/avatar/avt-12.jpg",
  },
  {
    id: 2,
    title: "ravel Monkey Club #2",
    src: "https://themesflat.co/html/axiesv/assets/images/box-item/image-box-21.jpg",
    account: "Ralph Garraway",
    accountImage: "https://themesflat.co/html/axiesv/assets/images/avatar/avt-12.jpg",
  },
  {
    id: 3,
    title: "ravel Monkey Club #3",
    src: "https://themesflat.co/html/axiesv/assets/images/box-item/image-box-10.jpg",
    account: "Ralph Garraway",
    accountImage: "https://themesflat.co/html/axiesv/assets/images/avatar/avt-12.jpg",
  },
  {
    id: 4,
    title: "ravel Monkey Club #4",
    src: "https://themesflat.co/html/axiesv/assets/images/box-item/card-item8.jpg",
    account: "Ralph Garraway",
    accountImage: "https://themesflat.co/html/axiesv/assets/images/avatar/avt-12.jpg",
  },
];



// answer:

const cardsContainer = document.querySelector('.cards');
const cardSelected = document.querySelector('.cardSelected');

// Iteratiing the data array
data.forEach(item => {
  // Create a new card element
  const card = document.createElement('div');
  card.classList.add('cards__card');

  // Adding the card content using innerHTML
  card.innerHTML = `
    <div class="cards__card__img">
    <img src="${item.src}" alt="${item.title}">
    <i class="cards__card__img__icon ri-heart-line">100</i>
    </div>
    <div class="cards__card__body__title">
      <h3>${item.title}</h3>
      <span>BSC</span>
    </div>
    <div class="cards__card__footer">
    <div class="cards__card__footer__account">
    <img src="${item.accountImage}" alt="${item.account}">
    <h4>${item.account}</h4>
    </div>
    <button>Place Bid</button>
    </div>
  `;

  // Adding an event listener to the button
  card.querySelector('button').addEventListener('click', () => {
    cardSelected.textContent = `You Selected Card #${item.id}`;
  });

  // Appending the card to the cardsContainer
  cardsContainer.appendChild(card);
});


