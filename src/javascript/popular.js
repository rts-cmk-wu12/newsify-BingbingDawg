require ('../scss/popular.scss')
const collapseNewsArray = ["Health", "Sport", "Travel", "Business", "Europe"];
function collapseMenu(titleData){
  const collapseButton = document.createElement("button")
  const collapseDiv = document.createElement("div")
  const collapseLogo = document.createElement("img")
  const collapseContentContainer = document.createElement("div")
  const collapseTitle = document.createElement("h2")

  collapseButton.classList.add("collapsible")
  collapseDiv.classList.add("newsarticle-category")
  collapseLogo.src = "./img/newsify_logo 1.svg";
  collapseContentContainer.classList.add("content")

  collapseButton.append(collapseDiv)
  collapseDiv.append(collapseLogo, collapseTitle)
  collapseTitle.innerText = titleData

  collapseButton.addEventListener('click', function() {
    collapseButton.classList.toggle('active');
    
    if(collapseContentContainer.style.display === "block") {
        collapseContentContainer.style.display = "none";
    } else {
        collapseContentContainer.style.display = "block"
    }
});

const mainElement = document.querySelector("main")

mainElement.append(collapseButton, collapseContentContainer)


}

collapseNewsArray.forEach(category => collapseMenu(category));

// fetch 
const { fetchMostPopularByViews } = require ('./nyt');

(async () => {
  try { const popularNews = await fetchMostPopularByViews(7);
    console.log(popularNews);
    popularNews.forEach(article => {
        console.log(article.section)
    })
} catch (error) {
    console.error('Error', error);
  }
})();
