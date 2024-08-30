const inputEl = document.getElementById('input');
const infoTextEl = document.getElementById('info-text');
const meaningContainerEl = document.getElementById('meaning-container');
const titleEl = document.getElementById('title');
const meaningEl = document.getElementById('meaning');
const audioEl = document.getElementById('audio');

const fetchAPI = async (word) => {
  try {
    infoTextEl.style.display = 'block';
    meaningContainerEl.style.display = 'none';
    infoTextEl.innerText = `Searching the meaning of "${word}"`;
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    const result = await fetch(url).then((res) => res.json());
    meaningContainerEl.style.display = 'block';
    infoTextEl.style.display = 'none';
    if (result.title) {
      titleEl.innerText = word;
      meaningEl.innerText = 'N/A';
      audioEl.style.display = 'none';
    } else {
      audioEl.style.display = 'inline-flex';
      titleEl.innerText = result[0].word;
      meaningEl.innerText = result[0].meanings[0].definitions[0].definition;
      audioEl.src = result[0].phonetics[0].audio;
    }
  } catch (error) {
    infoTextEl.innerText = `an error happened, try again later`;
  }
};

inputEl.addEventListener('keyup', (e) => {
  if (e.target.value && e.key === 'Enter') {
    fetchAPI(e.target.value);
  }
});
