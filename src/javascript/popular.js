require ('../scss/popular.scss')
function collapseMenu(titleData, articleTitle, articleAbstract ){
  const collapseButton = document.createElement("button")
  const collapseDiv = document.createElement("div")
  const collapseLogo = document.createElement("img")
  const collapseContentContainer = document.createElement("div")
  const collapseTitle = document.createElement("h2")
  const collapseContainerTitle = document.createElement("h3")
  const collapseContainerText = document.createElement("p")

  collapseButton.classList.add("collapsible")
  collapseDiv.classList.add("newsarticle-category")
  collapseLogo.src = "./img/newsify_logo 1.svg";
  collapseContentContainer.classList.add("content")

  collapseButton.append(collapseDiv)
  collapseDiv.append(collapseLogo, collapseTitle)
  collapseTitle.innerText = titleData
  collapseContainerTitle.innerText = articleTitle; 
  collapseContainerText.innerText = articleAbstract;
  collapseContentContainer.append(collapseContainerTitle, collapseContainerText )

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


// fetch 
const { fetchMostPopularByViews } = require ('./nyt');

(async () => {
  try { const popularNews = await fetchMostPopularByViews(7);
    console.log(popularNews);

    const addedCategories = {};

    popularNews.forEach(article => {
      if (!addedCategories[article.section]) {
        collapseMenu(article.section, article.title, article.abstract);
        addedCategories[article.section] = true;
      }
    })
} catch (error) {
    console.error('Error', error);
  }
})();
