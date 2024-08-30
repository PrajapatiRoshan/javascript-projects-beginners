'use strict';
const list = document.querySelector('.projects-list');

// Project Name Formatter
const projectNameFormatter = (name) => {
  return name
    .split('-')
    .map((word) => word[0] + word.slice(1))
    .join(' ');
};

//  UpdateUI
const updateUI = (data) => {
  const { repo, projects, url } = data;
  projects.map(({ name, id }) => {
    const _folderName = `${Number(id)}-${name}`;
    const itemList = document.createElement('li');
    itemList.innerHTML = `
		<span class="project-number">${id}</span>
		<span class="project-name">
        <a href="./${_folderName}/index.html" target="_blank" >
		    ${projectNameFormatter(name)}
		</a>
        </span>
		<a href="${url}${_folderName}" target="_blank" class="code-link">
		    ${'{'} code ${'}'}
		</a>`;
    list.appendChild(itemList);
  });
};

//  Fetch data
fetch('./projects.json')
  .then((res) => res.json())
  .then((data) => updateUI(data));
