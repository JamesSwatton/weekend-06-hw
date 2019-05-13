document.addEventListener('DOMContentLoaded', () => {
  const newItemForm = document.querySelector('#new-item-form');
  newItemForm.addEventListener('submit', handleNewItemFormSubmit);

  const deleteAllButton = document.querySelector('#delete-all');
  deleteAllButton.addEventListener('click', handleDeleteAllClick);

  console.log('JavaScript loaded');
})

const handleNewItemFormSubmit = function(event) {
  event.preventDefault();

  const gameListItem = createGameListItem(event.target);
  const gameList = document.querySelector('#game-list');
  gameList.appendChild(gameListItem);

  event.target.reset();
}

const createGameListItem = function(form) {
  const gameListItem = document.createElement('li')

  const logo = document.createElement('img');

  if (form.system.value === 'SNES') {
    logo.src = "css/systems_logos/SNES.svg.png";
  } else if (form.system.value === 'NES') {
    logo.src = "css/systems_logos/NES.svg.png";
  }

  gameListItem.appendChild(logo);

  const title = document.createElement('h2');
  title.textContent = form.title.value;
  gameListItem.appendChild(title);

  const system = document.createElement('h3');
  system.textContent = form.system.value;
  gameListItem.appendChild(system);

  const genre = document.createElement('p');
  genre.textContent = form.genre.value;
  gameListItem.appendChild(genre);

  return gameListItem;
}

const handleDeleteAllClick = function(event) {
  const gameList = document.querySelector('#game-list');
  gameList.innerHTML = '';
}
