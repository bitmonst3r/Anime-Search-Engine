document.getElementById("input").focus();

// lets you use "Enter" key and button to search
var input = document.getElementById("input");
input.addEventListener("keyup", function(event) {
  // Enter key is 13
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("searchBtn").click();
  }
});

// get info from API
async function findAnime() {
  const animeName = $('#input').val();
  console.log(animeName);
  const url = `https://api.jikan.moe/v4/anime?q=${animeName}`;
  const data = await fetchData(url);
  const info = await data.results;

  for (let i=0; i<data.length; i++) {
    $('#holder').append(`<div class="card">
          <img src="${data[i].images.jpg.image_url}" class="card-img-top">
          <div class="card-body">
            <h5 class="card-title"> ${data[i].title}</h5>
            <p class="card-text">${data[i].synopsis}</p>
            <a href="${data[i].url}" class="btn btn-outline-primary">More Info</a>
          </div>
        </div>`);
  }
}

// fetch data method
async function fetchData(url) {
  let response = await fetch(url)
  let data = await response.json()
  return data
}
