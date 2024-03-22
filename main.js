let section = document.querySelector("section");
section.setAttribute("class", "featured");

let sectionPost = document.querySelector(".posts");
let article = document.createElement("article");
article.innerHTML = 
`<img src="./images/paul-gilmore-unsplash.jpg" alt="Image of a mountain in front of a lake."/>
<h3>Stop Planning</h3>
<p>
You -- yes you! You're an over-planner, I can tell. It's time to stop
planning so much and instead focusing on relaxing. Taking a break at all is
so stressful these days; why add to the stress by overworking yourself?
</p>
<aside>
<p>
  <span><strong>Read Time:</strong> 4 Minutes</span
  ><a href="#">Read more...</a>
</p>
</aside>`
sectionPost.appendChild(article)

let firstArticle = document.querySelectorAll("article")[1];
let secondArticle = document.querySelectorAll("article")[2];
sectionPost.insertBefore(secondArticle, firstArticle);

let navLinks = document.querySelector("ul");
navLinks.removeChild(navLinks.firstElementChild);

let firstAside = document.querySelector("span");
firstAside.remove();

let thirdArticle = document.querySelectorAll("article")[3];
thirdArticle.remove();

let nonFeaturedPostOne = document.querySelectorAll("h3")[1];
nonFeaturedPostOne.remove();
let nonFeaturedPostTwo = document.querySelectorAll("h3")[0];
nonFeaturedPostTwo.remove();

let title = document.querySelector("title");
title.innerHTML = `M.O.K.A Travel Blog`