let currentCount = 0;

/**
 *
 * TODO: Add docstring
 */
async function getGifSearch(evt) {
  evt.preventDefault();


  const searchTerm = document.querySelector("#search-term").value;

  const searchParams = new URLSearchParams({
    q: searchTerm, 'api_key': "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym"
  });
  const resp = await fetch(`http://api.giphy.com/v1/gifs/search?${searchParams}`);

  const data = await resp.json();


  const gif = data.data[currentCount++].url;

  showGif(gif);
}


document.querySelector('#search-giphy').addEventListener('click', getGifSearch);

/**
 *
 * TODO: add docstring
 */

function showGif(res) {
  const $gifArea =
    document.querySelector("#gif-area");
  const gifDiv = `<div>${res}</div>`;
  $gifArea.insertAdjacentHTML("beforeend", gifDiv);
}