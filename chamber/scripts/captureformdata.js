//Grab the entire URL for this page inclucing the attached GET values
const currentUrl = window.location.href;
console.log(currentUrl);

//Divide the url into two halves
const everything=currentUrl.split('?')
console.log(everything)

//Grab just the second half
let formData = everything[1]
console.log(formData)

//Break the form name value pairs into an array
formData=formData.split('&')
console.log(formData)

function show(cup) {
    formData.forEach((element) => {
        //console.log(element)
        if (element.startsWith(cup)) {
            //result=element.split('=')[1]
            //result=result.replace("%40","@")
            result=(element.split('=')[1].replace("%40","@"))
        } // end of if
    }); // end of loop
    return(result)
}

const showInfo = document.querySelector('#results')
showInfo.innerHTML = `
<p>Application from ${show('first')} ${show('last')}</p>
<p>Business Name: ${show('organization')} </p>
<p>Your Phone: ${show('phone')} </p>
<p>Your email  <a href="mailto:${show('email')}">${show('email')}</a> </p>
<p>Form was submitted on ${show('hiddendate')}</p>
`