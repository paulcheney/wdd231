const url = './data/members.json';
const cards = document.querySelector('#members');

async function getMembers() {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data.members);
  displayMembers(data.members)
}

getMembers();

const displayMembers = (allMembers) => {
  allMembers.forEach((member) => {
    const myName = document.createElement('h3')
    myName.textContent= member.name;
    const myAddress = document.createElement('p')
    myAddress.textContent = member.address
    const myPhone = document.createElement('p')
    myPhone.textContent = member.phone
    const myURL = document.createElement('p')
    myURL.innerHTML = `<a href="${member.url}" target="_blank">Website</a>`
    const myLogo = document.createElement('img')
    myLogo.src=`./images/${member.logopath}`
    myLogo.setAttribute('loading', 'lazy')
    myLogo.setAttribute('width', '300')
    myLogo.setAttribute('height', '200')
    
    const mySection = document.createElement('section')
    mySection.appendChild(myLogo)
    mySection.appendChild(myName)
    mySection.appendChild(myAddress)
    mySection.appendChild(myPhone)
    mySection.appendChild(myURL)
    cards.appendChild(mySection)
  });
}

const setGrid = document.querySelector('#btnGrid')
const setList = document.querySelector('#btnList')
setGrid.addEventListener('click',() => {
  setGrid.className="active"
  setList.className=""
  cards.className='grid'
})
setList.addEventListener('click',() => {
  setList.className="active"
  setGrid.className=""
  cards.className='list'
})