const cards = document.querySelector('#products');

const path = './data/solar.json';

let products=[]

//function to fetch data
async function getProducts() {
  try {
    const response = await fetch(path);
    const data = await response.json();
    console.log(data.solarproducts);
    products=data.solarproducts;
    displayProducts(products);
  } catch (error) {
    console.error('The error:', error);
  }
}
getProducts();




// DISPLAY ALL Courses
document.querySelector('#all').addEventListener('click', () => {
  displayProducts(products)
}); // end function

// DISPLAY Panels
document.querySelector('#panels').addEventListener('click', () => {
  const result = products.filter((course) => course.type === 'panel');
  displayProducts(result)
}); // end function

// DISPLAY Inverters
document.querySelector('#inverters').addEventListener('click', () => {
  const result = products.filter((course) => course.type === 'inverter');
  displayProducts(result)
}); // end function

// DISPLAY Batteries
document.querySelector('#battery').addEventListener('click', () => {
  const result = products.filter((course) => course.type === 'battery');
  displayProducts(result)
}); // end function





const displayProducts = (products) => {
  cards.innerHTML = '';
  console.log(products);
  products.forEach(product => {
    const solarname = document.createElement('h2');
    const solardescription = document.createElement('p');
    const solarcost = document.createElement('span');
    const solarimage = document.createElement('img');

    solarname.textContent = product.name;
    solardescription.textContent = product.description;
    solarcost.textContent = product.cost;
    solarimage.src = `images/${product.photo_url}`;
    solarimage.alt = product.name;
    solarimage.loading = 'lazy';

    const solarcard = document.createElement('section');
    solarcard.classList.add('mycard');
    solarcard.appendChild(solarname)
    solarcard.appendChild(solarimage)
    solarcard.appendChild(solardescription)
    solarcard.appendChild(solarcost)
    
    cards.appendChild(solarcard)
  });
}