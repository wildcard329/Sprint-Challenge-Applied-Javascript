// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then(response => {
  console.log(response.data.articles)

    // entryPoint.append(cardMaker(response.data))
})
.catch(error => {
  console.log('The data was not returned', error)
})

function cardMaker (lUrl) {
    const newCard = document.createElement('div'),
            headLine = document.createElement('div'),
            newAuthor = document.createElement('div'),
            imgCont = document.createElement('div'),
            imgSRC = document.createElement('img'),
            byName = document.createElement('span')

    newCard.append(headLine);
    newCard.append(newAuthor);
    newAuthor.append(imgCont);
    newAuthor.append(byName);
    imgCont.append(imgSRC);

    newCard.classList.add('card');
    headLine.classList.add('headline');
    newAuthor.classList.add('author');
    imgCont.classList.add('img-container');

    // headLine.textContent = 'lUrl.data.articles.javascrpt.headline[0]'
    // newAuthor.src = 'lUrl.data.articles.javascript.'

    lUrl.data.articles.array.forEach(element => {
        // headLine.textContent.add(element);
        articlesArray += element;
    });
}