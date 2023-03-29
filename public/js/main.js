let pop = document.querySelector('.pop');
let overlay = document.getElementById('overlay');

let DOMPopup = (item) => {
  let popup = document.createElement('div');
  popup.className = 'popup';
  pop.appendChild(popup);

  let close = document.createElement('i');
  close.className = 'fa-solid fa-xmark';
  close.id = 'close';
  popup.appendChild(close);

  close.addEventListener('click', (e) => {
    e.target.parentElement.remove();
    overlay.style.display = 'none';
  });

  let imgDiv = document.createElement('div');
  imgDiv.className = 'image';
  popup.appendChild(imgDiv);

  let img = document.createElement('img');
  img.src = `https://ddragon.leagueoflegends.com/cdn/12.5.1/img/champion/${item.image.full}`;
  imgDiv.appendChild(img);

  let cName = document.createElement('h2');
  cName.className = 'name';
  cName.textContent = item.name;
  popup.appendChild(cName);

  let title = document.createElement('h3');
  title.className = 'title';
  title.textContent = item.title;
  popup.appendChild(title);

  let box = document.createElement('div');
  box.className = 'box';
  box.textContent = `Attack:${item.info.attack},Defense:${item.info.defense},Magic:${item.info.magic}`;
  popup.appendChild(box);

  let details = document.createElement('p');
  details.className = 'details';
  details.textContent = item.blurb;
  popup.appendChild(details);
};


const container = document.querySelector('.container');

const handleDom = (data) => {
  let arrayData = Object.entries(data).map((entry) => entry[1]);
  arrayData.forEach(ele => {
    const box = document.createElement('div');
    box.className = 'box';
    container.appendChild(box);
  
    const boxImg = document.createElement('div');
    boxImg.className = 'box-img';
    box.appendChild(boxImg);
  
    const img = document.createElement('img');
    img.src = `https://ddragon.leagueoflegends.com/cdn/12.5.1/img/champion/${ele.image.full}`;
    boxImg.appendChild(img);
  
    const content = document.createElement('div');
    content.className = 'content';
    box.appendChild(content);
  
    const champName = document.createElement('h3');
    champName.className = 'champ-name';
    champName.textContent = ele.name;
    content.appendChild(champName);
  
    const more = document.createElement('button');
    more.className = 'more';
    more.textContent = 'more details';
    content.appendChild(more);

    more.addEventListener('click', () => {
      overlay.className = 'overlay';
      overlay.style.display = 'block';
    });
    more.addEventListener('click', () => DOMPopup(ele));
    more.addEventListener('click', () => {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    });
  })
};

fetch('/getChamp')
  .then((res) => res.json())
  .then((data) => data.data)
  .then((champData) => handleDom(champData))
  .catch((error) => console.log(error));

