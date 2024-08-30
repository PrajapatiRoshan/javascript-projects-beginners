// DOM Element
const btnEl = document.getElementById('btn');
const quoteEl = document.getElementById('quote');
const apiUrl = `https://api.api-ninjas.com/v1/quotes?category=happiness`;
const apiKey = '6COdvjMBUINUxH4ybCxlVQ==IdqiAmhaxzntW6Gz';

const getJoke = async () => {
  try {
    const options = {
      method: 'GET',
      headers: {
        'X-Api-Key': apiKey,
      },
    };
    quoteEl.innerText = 'Loading...';
    const data = await (await fetch(apiUrl, options)).json();
    const { quote } = data[0];
    quoteEl.innerText = quote;
  } catch (error) {
    quoteEl.innerText = 'An error happened, try again later.';
  }
};

(() => {
  getJoke();
  btnEl.addEventListener('click', getJoke);
})();
