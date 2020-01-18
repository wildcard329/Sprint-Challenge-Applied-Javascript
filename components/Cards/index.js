const cardContainer = document.querySelector('.cards-container')

axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then(response => {
  console.log('I am a axios call from the cards', response.data.articles)
  Object.values(response.data.articles).forEach(elements => {
    elements.forEach(element => {
      cardContainer.append(createCards(element))
    })
  });
})
.catch(error => {
  console.log('error')
})

function createCards(obj){
  const newCard = document.createElement('div'),
        newHead = document.createElement('div'),
        newAuth = document.createElement('div'),
        newImgC = document.createElement('div'),
        newImag = document.createElement('img'),
        newName = document.createElement('span')

  newCard.classList.add('card');
  newHead.classList.add('headline');
  newAuth.classList.add('author');
  newImag.classList.add('img-container');

  newHead.textContent = obj.headline;
  newImag.setAttribute('src', obj.authorPhoto);
  newName.textContent = obj.authorName;

  newCard.append(newHead);
  newCard.append(newAuth);
  newAuth.append(newImgC);
  newAuth.append(newName);
  newImgC.append(newImag);

  return newCard;
        
}