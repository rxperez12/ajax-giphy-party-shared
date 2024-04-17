let currentCount = 0;

/**takes the user input search value and gets the gif data
 * from giphy api that matches the query search.
 */
async function getGifSearch(evt) {
  evt.preventDefault();


  const searchTerm = document.querySelector("#search-term").value;

  const searchParams = new URLSearchParams({
    q: searchTerm, 'api_key': "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym"
  });
  const resp = await fetch(`http://api.giphy.com/v1/gifs/search?${searchParams}`);

  const data = await resp.json();


  const gif = data.data[currentCount++].images.original.url;

  console.log({ data });

  showGif(gif);
}


document.querySelector('#search-giphy').addEventListener('click', getGifSearch);

/**Creates HTML template and inserts the gif into the DOM
 */

function showGif(res) {
  const $gifArea =
    document.querySelector("#gif-area");
  const gifDiv = `<div class="gif-div" style="background-image: url('${res}' );"></div>`;
  $gifArea.insertAdjacentHTML("beforeend", gifDiv);
}