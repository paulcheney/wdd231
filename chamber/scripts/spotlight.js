const path = './data/members.json';
const spotlight = document.querySelector('#spot');


async function allMembers() {
    const response = await fetch(path);
    const d = await response.json();
    displayMembers(d.members)
  } // end allMembers

  allMembers();

  const displayMembers = (myArray) => {
    for (let step = 0; step < 3; step++) {
    const random = Math.floor(Math.random() * myArray.length);
    //console.log(random)
    let picked = myArray[random];
    myArray.splice(random, 1);
    //console.log(picked)
    //console.log(myArray)
    showOnPage(picked)
    } // end loop
  }// end display members

  function showOnPage(x) {
    console.log(x)
    const sl= document.createElement('div')

    const name= document.createElement('h2')
    name.innerHTML = x.name
    sl.appendChild(name)

    const photo= document.createElement('img')
    photo.src = `images/${x.logopath}`
    photo.alt=x.name
    sl.appendChild(photo)

    const phone= document.createElement('p')
    phone.innerHTML = x.phone
    sl.appendChild(phone)

    const address= document.createElement('p')
    address.innerHTML = x.address
    sl.appendChild(address)

    const link= document.createElement('a')
    link.href = x.url
    link.textContent="Link"
    link.target="_blank"
    sl.appendChild(link)

    spotlight.appendChild(sl)
  }