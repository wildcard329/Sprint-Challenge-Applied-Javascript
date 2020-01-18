// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>
let topics = [];
const tabs = document.querySelector('.tabs')
axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then(response => {
  console.log(response)
  Object.values(response.data.articles).forEach(element => {
      topics.push(element);
  })
  topics.forEach(element => {
      tabs.appendChild(tabMaker(element));
  })

})

function tabMaker (obj) {
    const tab = document.createElement('div')
    tab.classList.add('tab');
    tab.textContent = obj;

    return tab;
}