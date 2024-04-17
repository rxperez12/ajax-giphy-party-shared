async function getGifSearch(evt) {
  evt.preventDefault();

  const searchTerm = document.querySelector("#search-term").value;
  console.log(searchTerm);
  const searchParams = new URLSearchParams({
    q: searchTerm, 'api_key': "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym"
  });
  const resp = await fetch(`http://api.giphy.com/v1/gifs/search?${searchParams}`);

  const data = await resp.json();

  console.log(
    "getGifSearch resp=", resp, "data=", data);

  //showHand(data.hand);
}


document.querySelector('#search-giphy').addEventListener('click', getGifSearch);
