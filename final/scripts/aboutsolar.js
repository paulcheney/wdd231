import { requirements } from '../data/steps.mjs'
console.log(requirements)

const showHere = document.querySelector('#solarsteps')
const mydialog = document.querySelector('#solarstepsdialog')
const mytitle = document.querySelector('#solarstepsdialog h2')
const mylist = document.querySelector('#solarstepsdialog ul')
const myclose = document.querySelector('#solarstepsdialog button')
myclose.addEventListener('click', () => { mydialog.close(); })

function displaySteps(data) {
    data.forEach(x => {
        const step = document.createElement('section')
        const learnmore = document.createElement('button')
        learnmore.textContent = 'Learn More'
        step.innerHTML = `
    <div>${x.step}</div>
    <h2>${x.title}</h2>`
        step.appendChild(learnmore)
        learnmore.addEventListener('click', () => showstuff(x))
        showHere.appendChild(step)
    }) // end loop
} // end function

displaySteps(requirements)

function showstuff(x) {
    //console.log(x)
    mytitle.textContent = x.title
    mylist.innerHTML = ''
    console.log(x.details)
    x.details.forEach(y => {
        console.log(y)
        const item = document.createElement('li')
        item.textContent = y
        mylist.appendChild(item)
    })
    mydialog.showModal()
} // end function