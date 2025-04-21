
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

// const style = document.createElement('style');
// style.textContent = `
//   * {
//     margin: 0;
//     padding: 0;
//     font-family: 'Arial', sans-serif;
//     box-sizing: border-box;
//   }

// `;
// document.head.appendChild(style);


// //body
// document.body.style.background = 'linear-gradient(80deg, rgb(19, 63, 93),rgb(61, 57, 90))';;

// // card div
// const cardDiv = document.createElement('div');
// cardDiv.classList.add('card');
// cardDiv.style.width = "70%px";
// cardDiv.style.maxWidth = '470px';
// cardDiv.style.background = 'linear-gradient(135deg, rgb(0, 254, 186),rgb(77, 52, 239))';
// // cardDiv.style.color = 'rgb(171, 165, 165)';
// cardDiv.style.margin = '100px auto 0';
// cardDiv.style.borderRadius = '20px';
// cardDiv.style.padding = '40px 35px';
// cardDiv.style.textAlign = 'center';
// cardDiv.style.display ="flex";
// cardDiv.style.flexDirection = "column";
// cardDiv.style.alignItems ="center";
// cardDiv.style.padding ="20px";

// //apend cardDiv

// document.body.appendChild(cardDiv);

// // search div
// const searchDiv = document.createElement('div');
// searchDiv.classList.add('search');
// searchDiv.style.width = "100%";
// searchDiv.style.display = 'flex';
// searchDiv.style.justifyContent = 'space-between';


// //input element
// const input = document.createElement('input');
// input.type = 'text';
// input.placeholder = 'Enter your city name';
// input.spellcheck = false;
// input.style.border = '0';
// input.style.outline = '0';
// input.style.background = '#ebfffc';
// input.style.color = '#555';
// input.style.padding = '10px 25px';
// input.style.height = '60px';
// input.style.borderRadius = '30px';
// input.style.flex = '1';
// input.style.marginRight = '16px';
// input.style.fontSize = '18px';


// //button
// const button = document.createElement('button');
// button.style.border = '0';
// button.style.outline = '0';
// button.style.background = '#ebfffc';
// button.style.borderRadius = '50%';
// button.style.width ='60px';
// button.style.height ='60px';
// button.style.cursor ='pointer';

// //image
// const image = document.createElement('img');
// image.src = './images/search.png';
// image.alt = 'Search';
// image.style.width= '16px';
// image.style


// //append Search
// button.appendChild(image);
// searchDiv.appendChild(input);
// searchDiv.appendChild(button);
// cardDiv.appendChild(searchDiv);

// //weather
// const weather = document.createElement('div');
// // weather.style.width ="100px";
// // weather.style.marginBottom = "10px";


// //w image
// const wicon =document.createElement('img');
// wicon.classList.add('icon');
// wicon.src = './images/rain.png';
// wicon.style.margin = "10px auto";


// //w temprature
// const temp = document.createElement('h1');
// temp.classList.add('tem');
// temp.textContent = '22°c';
// temp.style.fontSize ="80px";
// temp.style.fontWeight ="500";
// temp.style.margin =" 10px 0";


// //city
// const city =document.createElement('h2');
// city.classList.add('cit');
// city.textContent = 'New York';
// city.style.fontSize ="45px";
// city.style.fontWeight ="400";
// city.style.marginTop = "-10px";
// city.style.marginBottom = "20px";


// //append weather
// cardDiv.appendChild(wicon);
// cardDiv.appendChild(temp);
// cardDiv.appendChild(city);


// //details
// const details = document.createElement('div');


// //col 1
// const col1 = document.createElement('div');

// //humidity

// const humidity = document.createElement('div'); 

// //hicon
// const hicon = document.createElement('img');
// hicon.classList.add('icon');
// hicon.src = './images/humidity.png';

// // Paragraphs
// const div = document.createElement('div');

// const para1 = document.createElement('p');
// para1.classList.add('hm');
// para1.textContent = '50%';

// const para2 = document.createElement('p');
// para2.textContent = 'Humidity';

// // Append humidity
// div.appendChild(para1);
// div.appendChild(para2);
// humidity.appendChild(hicon);
// humidity.appendChild(div);
// cardDiv.appendChild(humidity);

// //col 2
// const col2 = document.createElement('div');

// //wind
// const wind = document.createElement('div');
// // wind.style.height ="10vh";
// // wind.style.marginLeft= "60px"


// //wicon
// const windicon = document.createElement('img');
// windicon.classList.add('icon');
// windicon.src = './images/wind.png';



// wind.appendChild(windicon);
// //para
// const wdiv =document.createElement('div');
// const wp1 =document.createElement('p');
// wp1.classList.add('wind');
// wp1.textContent = '15km/h';

// const wp2 = document.createElement('p');
// wp2.textContent = 'Wind';



// col1.appendChild(humidity);
// details.appendChild(col1);
// details.appendChild(col2);
// cardDiv.appendChild(details);
// //append wind
// wdiv.appendChild(wp1);
// wdiv.appendChild(wp2);

// wind.appendChild(wicon);
// wind.appendChild(wdiv);

// col2.appendChild(wind);
// cardDiv.appendChild(col2);

// Apply global styles
const style = document.createElement('style');
style.textContent = `
  * {
    margin: 0;
    padding: 0;
    font-family: 'Georgia', sans-serif;
    box-sizing: border-box;
  }
`;
document.head.appendChild(style);

// Set background gradient
document.body.style.background = 'linear-gradient(80deg, rgb(19, 63, 93),rgb(61, 57, 90))';

// Create main card container
const cardDiv = document.createElement('div');
cardDiv.classList.add('card');
cardDiv.style.width = '90%';
cardDiv.style.maxWidth = '470px';
cardDiv.style.background = 'linear-gradient(135deg, rgb(0, 254, 186), rgb(77, 52, 239))';
cardDiv.style.margin = '10px auto 0';
cardDiv.style.borderRadius = '20px';
cardDiv.style.padding = '40px 35px';
cardDiv.style.textAlign = 'center';
cardDiv.style.display = 'flex';
cardDiv.style.flexDirection = 'column';
cardDiv.style.alignItems = 'center';
document.body.appendChild(cardDiv);

// Create Search section
const searchDiv = document.createElement('div');
searchDiv.classList.add('search');
searchDiv.style.width = '100%';
searchDiv.style.display = 'flex';
searchDiv.style.justifyContent = 'space-between';

const input = document.createElement('input');
input.type = 'text';
input.id = "cityInput";
input.name = "city";
input.placeholder = 'Enter city name';
input.spellcheck = false;
Object.assign(input.style, {
  border: '0',
  outline: '0',
  background: '#ebfffc',
  color: '#555',
  padding: '10px 25px',
  height: '60px',
  borderRadius: '30px',
  flex: '1',
  marginRight: '16px',
  fontSize: '18px'
});

const button = document.createElement('button');
Object.assign(button.style, {
  border: '0',
  outline: '0',
  background: '#ebfffc',
  borderRadius: '50%',
  width: '60px',
  height: '60px',
  cursor: 'pointer'
});

const image = document.createElement('img');
image.src = './images/search.png';
image.alt = 'Search';
image.style.width = '20px';
image.style.height = '20px';


button.appendChild(image);
searchDiv.appendChild(input);
searchDiv.appendChild(button);
cardDiv.appendChild(searchDiv);

// Weather icon
const wicon = document.createElement('img');
wicon.classList.add('icon');
wicon.src = './images/rain.png';
wicon.style.margin = '10px auto';

const Message = document.createElement('p');
Message.style.fontSize = '18px';
Message.style.marginTop = '20px';
Message.style.color = 'white';
Message.style.fontWeight = 'bold';
cardDiv.appendChild(Message);
cardDiv.appendChild(wicon);


// Temperature
const temp = document.createElement('h1');
temp.classList.add('temp');
temp.textContent = '22°C';
Object.assign(temp.style, {
  fontSize: '80px',
  fontWeight: '500',
  margin: '5px 0',
});
cardDiv.appendChild(temp);

// City
const city = document.createElement('h2');
city.classList.add('city');
city.textContent = 'New York';
Object.assign(city.style, {
  fontSize: '45px',
  fontWeight: '400',
  marginTop: '-10px',
  marginBottom: '20px'
});
cardDiv.appendChild(city);

//date
const dateElement = document.createElement('p');
dateElement.classList.add('date');
Object.assign(dateElement.style, {
  fontSize: '18px',
  marginTop: '1px',
  color: 'black'
});
cardDiv.appendChild(dateElement);

//weather condition 
const conditionText = document.createElement('p');
conditionText.classList.add('condition');
conditionText.style.fontSize = '24px';
conditionText.style.marginTop = '10px';
conditionText.textContent = 'Condition: Rainy'; 
cardDiv.appendChild(conditionText);


// Details container
const details = document.createElement('div');
details.style.display = 'flex';
details.style.justifyContent = 'space-between';
details.style.width = '100%';
details.style.marginTop = '50px';
details.style.alignItems = 'center';
details.style.fontSize = '20px';

// Column 1 - Humidity
const col1 = document.createElement('div');
col1.style.display = 'flex';
col1.style.alignItems = 'center';
col1.style.gap = '10px';

const humidity = document.createElement('div');
humidity.style.display = 'flex';
humidity.style.alignItems = 'center';
humidity.style.gap = '10px';

const hicon = document.createElement('img');
hicon.src = './images/humidity.png';
hicon.alt = 'Humidity Icon';
hicon.style.width = '80px';

const hText = document.createElement('div');
hText.style.textAlign = 'left';
const hValue = document.createElement('p');
hValue.textContent = '50%';
const hLabel = document.createElement('p');
hLabel.textContent = 'Humidity';

hText.appendChild(hValue);
hText.appendChild(hLabel);
humidity.appendChild(hicon);
humidity.appendChild(hText);
col1.appendChild(humidity);

// Column 2 - Wind
const col2 = document.createElement('div');
col2.style.display = 'flex';
col2.style.alignItems = 'center';
col2.style.gap = '10px';

const wind = document.createElement('div');
wind.style.display = 'flex';
wind.style.alignItems = 'center';
wind.style.gap = '10px';

const windIcon = document.createElement('img');
windIcon.src = './images/wind.png';
windIcon.alt = 'Wind Icon';
windIcon.style.width = '80px';

const wText = document.createElement('div');
wText.style.textAlign = 'left';
const wValue = document.createElement('p');
wValue.textContent = '15 km/h';
const wLabel = document.createElement('p');
wLabel.textContent = 'Wind';

wText.appendChild(wValue);
wText.appendChild(wLabel);
wind.appendChild(windIcon);
wind.appendChild(wText);
col2.appendChild(wind);

// Append columns to details
details.appendChild(col1);
details.appendChild(col2);
cardDiv.appendChild(details);

const apikey = "5eb56915fd1776a4c52005327883e60a";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

async function getWeatherData(cityName) {
  const response = await fetch(apiurl + cityName + `&appid=${apikey}`);
  if (!response.ok) throw new Error("City not found");
  return await response.json();
}
function renderWeather(data) {
  city.textContent = data.name;
  temp.textContent = `${Math.round(data.main.temp)}°C`;
  hValue.textContent = data.main.humidity + "%"; //`${data.main.humidity}%`;
  wValue.textContent = data.wind.speed + " km/h"; //`${data.wind.speed} km/h`;

  const condition = data.weather[0].main.toLowerCase();
  let friendlyCondition = "";

  switch (condition) {
    case "clouds":
      wicon.src = "./images/clouds.png"; //`./images/${condition}.png`;
      friendlyCondition = "Cloudy";
      break;
    case "clear":
      wicon.src = "./images/clear.png"; //
      friendlyCondition = "Sunny";
      break;
    case "rain":
      wicon.src = "./images/rain.png";
      friendlyCondition = "Rainy";
      break;
    case "drizzle":
      wicon.src = "./images/drizzle.png";
      friendlyCondition = "Drizzle";
      break;
    case "mist":
      wicon.src = "./images/mist.png";
      friendlyCondition = "Mist";
      break;
    case "snow":
      wicon.src = "./images/snow.png";
      friendlyCondition = "Snowy";
      break;
    default:
      wicon.src = "./images/default.png";
      friendlyCondition = condition.charAt(0).toUpperCase() + condition.slice(1);
  }

  conditionText.textContent = `${friendlyCondition}`;
}
function showError(message) {
  Message.textContent = message;
  Message.style.color = "red";
}
function toggleLoading(state) {
}
async function checkWeather(cityName) {
  try {
    Message.textContent = "City Found";
    Message.style.color = "white";

    const data = await getWeatherData(cityName);
    renderWeather(data);

  } catch (error) {
    showError("City not found");
  }
}
button.addEventListener("click", () => {
  const cityName = input.value.trim();
  if (cityName !== "") {
    checkWeather(cityName);
  }

  const now = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  dateElement.textContent = now.toLocaleDateString('en-US', options);
});


// const apikey = "5eb56915fd1776a4c52005327883e60a";
// const apiurl ="https://api.openweathermap.org/data/2.5/weather?&unit=matric&q=bangalore";
// const apikey = "5eb56915fd1776a4c52005327883e60a";
// const apiurl = "https://api.openweathermap.org/data/2.5/weather?q=bangalore&units=metric";
// const apikey = "5eb56915fd1776a4c52005327883e60a";
// const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

// async function checkWeather(cityName) {
//   try {
//     Message.textContent = "City Found";
//     Message.style.color = "white";
//     const response = await fetch(apiurl + cityName + `&appid=${apikey}`);
//     if (!response.ok){
//       throw new Error("City not found");
//     }
  
//   // const response = await fetch(apiurl + cityName + `&appid=${apikey}`);
//   const data = await response.json();

//   console.log(data);

//   city.textContent = data.name;
//   // temp.textContent = Math.round(data.main.temp) + "°C";
//   temp.textContent = `${Math.round(data.main.temp)}°C`;
//   hValue.textContent = data.main.humidity + "%";
//   wValue.textContent = data.wind.speed + " km/h";

//   const condition = data.weather[0].main.toLowerCase();
//   let friendlyCondition ="";

//   if (condition === "clouds") {
//     // wicon.src = "./images/clouds.png";
//     wicon.src = `./images/${condition}.png`;

//     friendlyCondition ="Cloudy";
//   } else if (condition === "clear") {
//     wicon.src = "./images/clear.png";
//     friendlyCondition ="Sunny";
//   } else if (condition === "rain") {
//     wicon.src = "./images/rain.png";
//     friendlyCondition ="Rainy";
//   } else if (condition === "dizzle") {
//     wicon.src = "./images/dizzle.png";
//     friendlyCondition ="Dizzle";
//   } else if (condition === "mist") {
//     wicon.src = "./images/mist.png";
//     friendlyCondition ="Mist";
//   } else if (condition === "snow") {
//     wicon.src = "./images/snow.png";
//     friendlyCondition ="Snowy";
//   } else {
//     wicon.src = "./images/default.png";
//     friendlyCondition = condition.charAt(0).toUpperCase() + condition.slice(1);
//   }
//   conditionText.textContent =`${friendlyCondition}`;
// }catch (error){
// Message.textContent = "City not found ";
// Message.style.color ="red";
// }
// }


// // checkWeather("Bangalore");

// button.addEventListener("click", () => {
//   const cityName = input.value.trim();
//   if (cityName !== "") {
//     checkWeather(cityName);
//   }

//   const now = new Date();
// const options = { 
//    weekday: 'long',
//    year: 'numeric',
//    month: 'long', 
//    day: 'numeric' };
// dateElement.textContent = now.toLocaleDateString('en-US', options);

// });


























