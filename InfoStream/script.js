const api = "833365dc3a0648ec9ef1b64dde2b443a";

const blogContainer = document.getElementById("blog-container");

const searchField = document.getElementById("search-option");

const searchButton = document.getElementById("search-button");

async function fetchRandomNews() {
  try {
    const apiURL = `
https://newsapi.org/v2/top-headlines?sources=techcrunch&pageSize=12&apikey=${api}`;

    const response = await fetch(apiURL);
    const data = await response.json();
    return data.articles;
  } catch (error) {
    console.error("Error fetching News", error);
    return [];
  }
}

searchButton.addEventListener("click", async () => {
  const query = searchField.value.trim();
  if (query !== "")
    try {
      const articles = await fetchNewsQuery(query);
      displayBlogs(articles);
    } catch (error) {
      console.log("error Fetching News by query", error);
    }
});

async function fetchNewsQuery(query) {
  try {
    const apiURL = `
https://newsapi.org/v2/everything?q=${query}&pageSize=12&apikey=${api}`;

    const response = await fetch(apiURL);
    const data = await response.json();
    return data.articles;
  } catch (error) {
    console.error("Error fetching News", error);
    return [];
  }
}

function displayBlogs(articles) {
  blogContainer.innerHTML = "";
  articles.forEach((article) => {
    const blockCard = document.createElement("div");
    blockCard.classList.add("block-card");
    const img = document.createElement("img");
    img.src = article.urlToImage;
    img.alt = article.title;
    const title = document.createElement("h2");
    title.textContent = article.title;
    const description = document.createElement("p");
    description.textContent = article.description;

    blockCard.appendChild(img);
    blockCard.appendChild(title);
    blockCard.appendChild(description);
    blockCard.addEventListener("click", () => {
      window.open(article.url, "_blank");
    });

    blogContainer.appendChild(blockCard);
  });
}

(async () => {
  try {
    const articles = await fetchRandomNews();
    displayBlogs(articles);
  } catch (error) {
    console.error("Error fetching random news", error);
  }
})();
