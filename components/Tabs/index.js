// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>
let topics = [ ];
const tabs = document.querySelector('.topics')
axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then(response => {
  Object.keys(response.data.articles).forEach(element => {
      topics.push(element);
  })
  topics.forEach(element => {
      tabs.append(tabMaker(element));
  })

})

function tabMaker (obj) {
    const newTab = document.createElement('div')
    newTab.classList.add('tab');
    newTab.textContent = obj;

    return newTab;
}