const myInfo = new URLSearchParams(window.location.search);

//build the message
document.querySelector('#message').innerHTML = `<p>We have scheduled an appointment for ${myInfo.get('first')} ${myInfo.get('last')}  on ${myInfo.get('date')} between ${myInfo.get('time')}</p>
<p>We will call you back at  ${myInfo.get('phone')}</p>`

    