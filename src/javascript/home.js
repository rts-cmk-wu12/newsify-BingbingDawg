require ('../scss/home.scss')
require ('../javascript/popular')

// collapse
var collapsingElement = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < collapsingElement.length; i++) {
  collapsingElement[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
};

// fetch 
const { fetchMostPopularByViews } = require ('./nyt');

const popularNews = await fetchMostPopularByViews();


console.log(popularNews);


const collapseNewsContent = data.results;
const firstArticle = data.results[0].section;
const collapseNewsCategories = document.querySelector('.newsarticle-category')

collapseNewsCategories.innerHTML +=
`
   <h2>Health</h2>
  `

console.log(collapseNewsContent)