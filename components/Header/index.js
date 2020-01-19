// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component
const headerContainer = document.querySelector('.header-container')
const headerItems = [{date: 'SMARCH 28, 2019', title: 'Lambda Times', temp: '98°'}]

function makeHeader(date, title, temp) {
    const mainHeader = document.createElement('div'),
        newsDate = document.createElement('span'),
        newsTitle = document.createElement('h1'),
        newsTemp = document.createElement('span')

    mainHeader.classList.add('header');
    newsDate.classList.add('date');
    newsTemp.classList.add('temp');

    newsDate.textContent = date;
    newsTitle.textContent = title;
    newsTemp.textContent = temp;
    
    mainHeader.append(newsDate);
    mainHeader.append(newsTitle);
    mainHeader.append(newsTemp);

    return mainHeader;
}
headerItems.forEach(data =>{
    headerContainer.append(makeHeader(data.date, data.title, data.temp))
})
