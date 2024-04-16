async function getGifSearch(evt) {
  const searchTerm = document.querySelector("#search-term").value;
  const searchParams = new URLSearchParams({
    q: searchTerm, 'api_key': "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym"
  });
  const gifData = await fetch(`http://api.giphy.com/v1/gifs/search?${searchParams}`);
  console.log(gifData);
}


document.querySelector('#search-giphy').addEventListener('click', getGifSearch);

