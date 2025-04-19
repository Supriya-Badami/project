
// const link = document.createElement('link');
// link.rel = 'stylesheet';
// link.href = 'https://fonts.googleapis.com/css2?family=Poppins&display=swap';
// document.head.appendChild(link);

// const style = document.createElement('style');
// style.textContent = `
//   * {
//     margin: 0;
//     padding: 0;
//     font-family: 'Poppins', sans-serif;
//     box-sizing: border-box;
//   }
// `;
// document.head.appendChild(style);

const style = document.createElement('style');
style.textContent = `
  * {
    margin: 0;
    padding: 0;
    font-family: 'Arial', sans-serif;
    box-sizing: border-box;
  }

`;
document.head.appendChild(style);


//body
document.body.style.background = 'linear-gradient(80deg, rgb(19, 63, 93),rgb(61, 57, 90))';;

// card div
const cardDiv = document.createElement('div');
cardDiv.classList.add('card');
cardDiv.style.width = "90%";
cardDiv.style.maxWidth = '470px';
cardDiv.style.background = 'linear-gradient(135deg, rgb(0, 254, 186),rgb(77, 52, 239))';
cardDiv.style.color = 'rgb(171, 165, 165)';
cardDiv.style.margin = '100px auto 0';
cardDiv.style.borderRadius = '20px';
cardDiv.style.padding = '40px 35px';
cardDiv.style.textAlign = 'center';

//apend cardDiv

document.body.appendChild(cardDiv);

// search div
const searchDiv = document.createElement('div');
searchDiv.classList.add('search');
searchDiv.style.width = "100%";
searchDiv.style.display = 'flex';
searchDiv.style.justifyContent = 'space-between';


//input element
const input = document.createElement('input');
input.type = 'text';
input.placeholder = 'Enter your city name';
input.spellcheck = false;
input.style.border = '0';
input.style.outline = '0';
input.style.background = '#ebfffc';
input.style.color = '#555';
input.style.padding = '10px 25px';
input.style.height = '60px';
input.style.borderRadius = '30px';
input.style.flex = '1';
input.style.marginRight = '16px';
input.style.fontSize = '18px';


//button
const button = document.createElement('button');
button.style.border = '0';
button.style.outline = '0';
button.style.background = '#ebfffc';
button.style.borderRadius = '50%';
button.style.width ='60px';
button.style.height ='60px';
button.style.cursor ='pointer';

//image
const image = document.createElement('img');
image.src = './images/search.png';
image.alt = 'Search';
image.style.width= '16px';

//append Search
button.appendChild(image);
searchDiv.appendChild(input);
searchDiv.appendChild(button);
cardDiv.appendChild(searchDiv);

//weather
const weather = document.createElement('div');

//w image
const wicon =document.createElement('img');
wicon.classList.add('icon');
wicon.src = './images/rain.png';

//w temprature
const temp = document.createElement('h1');
temp.classList.add('tem');
temp.textContent = '22°c';

//city
const city =document.createElement('h2');
city.classList.add('cit');
city.textContent = 'New York';

//append weather
cardDiv.appendChild(wicon);
cardDiv.appendChild(temp);
cardDiv.appendChild(city);


//details
const details = document.createElement('div');


//col 1
const col1 = document.createElement('div');
//humidity

const humidity = document.createElement('div'); 
//hicon
const hicon = document.createElement('img');
hicon.classList.add('icon');
hicon.src = './images/humidity.png';

// Paragraphs
const div = document.createElement('div');

const para1 = document.createElement('p');
para1.classList.add('hm');
para1.textContent = '50%';

const para2 = document.createElement('p');
para2.textContent = 'Humidity';

// Append humidity
div.appendChild(para1);
div.appendChild(para2);
humidity.appendChild(hicon);
humidity.appendChild(div);
cardDiv.appendChild(humidity);

//col 2
const col2 = document.createElement('div');

//wind
const wind = document.createElement('div');
//wicon
const windicon = document.createElement('img');
windicon.classList.add('icon');
windicon.src = './images/wind.png';

wind.appendChild(windicon);
//para
const wdiv =document.createElement('div');
const wp1 =document.createElement('p');
wp1.classList.add('wind');
wp1.textContent = '15km/h';

const wp2 = document.createElement('p');
wp2.textContent = 'Wind';



col1.appendChild(humidity);
details.appendChild(col1);
details.appendChild(col2);
cardDiv.appendChild(details);
//append wind
wdiv.appendChild(wp1);
wdiv.appendChild(wp2);

wind.appendChild(wicon);
wind.appendChild(wdiv);

col2.appendChild(wind);
cardDiv.appendChild(col2);


















  