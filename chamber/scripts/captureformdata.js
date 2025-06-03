const myInfo = new URLSearchParams(window.location.search);
console.log(myInfo);

console.log(myInfo.get('first'));
console.log(myInfo.get('last'));
console.log(myInfo.get('title'));
console.log(myInfo.get('email'));
console.log(myInfo.get('phone'));
console.log(myInfo.get('organization'));
console.log(myInfo.get('description'));



//build the message
document.querySelector('#results').innerHTML = `
    <p>Application submission from ${myInfo.get('first')} ${myInfo.get('last')}</p>
    <p>The ${myInfo.get('title')} of ${myInfo.get('organization')}
    <p><p> Phone: ${myInfo.get('phone')} </p>
    <p>Email: ${myInfo.get('email')}</p>
    <p>Business Description: ${myInfo.get('description')}</p>`

