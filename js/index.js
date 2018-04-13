const countdown = document.querySelector('.countdown');
const thedate = document.querySelector('.thedate');

// Set Launch Date (ms)
const launchDate = new Date('Jan 1, 2019 13:00:00').getTime();

// Update every second
const intvl = setInterval(() => {
  // Get todays date and time (ms)
  const now = new Date().getTime();


  var today = new Date();
  var dd= today.getDate();
  var mm= today.getMonth()+1;
  var yy= today.getFullYear();
  var Hour = today.getHours();
  var mins = today.getMinutes();
  var seconds = today.getSeconds();


  if(dd<10){
    dd = '0'+dd
  }
  if(mm<10){
    mm = '0'+mm
  }
  today = dd + '/' + mm + '/' + yy  
  
 
  // Display result
  countdown.innerHTML = ` 
  <div>${Hour}</div>:
  <div>${mins}<span></span></div>:
  <div>${seconds}<span></span></div>
  `;
  thedate.innerHTML =`<h1><span>Today: </span>${today}</h1>`;

}, 1000);