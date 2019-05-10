document.addEventListener('DOMContentLoaded', () => {
  const newItemForm = document.querySelector('#new-item-form');
  newItemForm.addEventListener('submit', handleNewItemFormSubmit);

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

  const title = document.createElement('h2');
  title.textContent = form.title.value;
  gameListItem.appendChild(title);

  const genre = document.createElement('h3');
  genre.textContent = form.genre.value;
  gameListItem.appendChild(genre);

  const system = document.createElement('p');
  system.textContent = form.system.value;
  gameListItem.appendChild(system);

  return gameListItem;
}
