//DOM
//connect to the root id in html
const app = document.getElementById("root");
console.log(app);

//create img logo div and set src to the .png file
const logo = document.createElement("img");
logo.src = "logo.png";
console.log(logo);

//create div with class container
const container = document.createElement("div");
container.setAttribute("class", "container");
console.log(container);

//placing js data (div logo to the root)
app.appendChild(logo);
app.appendChild(container);

//Create a request variable and assign a new XMLHttpRequest object to it
let request = new XMLHttpRequest();
// Open a new connection, using the GET request on the URL endpoint
request.open("GET", "https://ghibliapi.herokuapp.com/films", true);

request.onload = function () {
  //Begin accessing JSON data here
  let data = JSON.parse(this.response);
  if (request.status >= 200 && request.status < 400) {
    data.forEach(movie => {
      // create div with card class
      const card = document.createElement("div");
      card.setAttribute("class", "card");
      // create h1 set the content to film's title
      const h1 = document.createElement("h1");
      h1.textContent = movie.title
        //create p to set the description inside
        const p = document.createElement('p');
       movie.description = movie.description.substring(0, 300)//limit to 300 chars
       p.textContent = `${movie.description}...`//End with ellipses
      //append the cards to container
      container.appendChild(card)

      //place h1 and p into cards
      card.appendChild(h1)
      card.appendChild(p)
        //Log each movie's title
        console.log(movie.title);
      console.log(movie.description);
    });
  } else {
    console.log("error");
  }
};
// Send request
request.send();
