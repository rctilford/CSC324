/********************************************************************
 * 
 * This js file has code in it that will populate a table
 * 
 *******************************************************************/

// The array of objects, one object for each artist.

const artists = [
  {
    name: "Ms Scandalous",
    birthYear: 1985,
    link: "https://www.youtube.com/watch?v=2FPivlfvxu0"
  },
  {
    name: "Juggy D",
    birthYear: 1981,
    link: "https://www.youtube.com/watch?v=1jAc_-FVjdI"
  },
  {
    name: "Sukhbir Singh",
    birthYear: 1969,
    link: "https://www.youtube.com/watch?v=HiprNF9Jad0"
  },
  {
    name: "Abrar-ul-Haq",
    birthYear: 1989,
    link: "https://www.youtube.com/watch?v=-lnnVIP7FEc"
  },
  {
    name: "Rishi Rich",
    birthYear: 1970,
    link: "https://www.youtube.com/watch?v=O95-w2gACuA"
  }
]

// complete with code to select and populate the table.

function populateTable(array) {

  let table = document.getElementById('bhangra'); // this code selects the table

  // declare a string to hold the inner HTML code for the table
  let contents = "<tbody>";

  // add the header row
  contents += `<tr><th>name</th>`;
  contents += `<th>birthyear</th>`;
  contents += `<th>link</th></tr>`;


  array.forEach(function (artist) {
    contents += `<tr>`; // open the row
    contents += `<td>${artist.name}</td>`;
    contents += `<td>${artist.birthYear}</td>`;
    contents += `<td><a href= "${artist.link}" target="_blank">${artist.link}</a></td>`;
    contents += `</tr>`; // close the row
  })


  // close out the body of the table
  contents += "</tbody>";

  table.innerHTML = contents; // this code populates the table with the contents string

};

// call the function to populate the table
populateTable(artists);

// create the button elements and append them to the DOM
function createButton(id, label, parent) {
  
  // create a new button element
  const newbutton = document.createElement("button");
  
  // add the text to the button
  newbutton.innerText = label;
  
  // add the id to the button
  newbutton.id = id;
  
  // append the button to the parent
  parent.appendChild(newbutton);

  // return the button
  return newbutton;

};

// create the buttons and add them to the DOM
const nameButton = createButton("name-button", "Sort by Name", document.getElementById("sorting"));

const yearButton = createButton("year-button", "Sort by Year", document.getElementById("sorting"));

const randomButton = createButton("random-button", "Shuffle", document.getElementById("sorting"));

const reverseButton = createButton("reverse-button", "Reverse", document.getElementById("sorting"));

// next lets add the event listeners to the buttons
nameButton.addEventListener('click', function () {
  artists.sort(byName);
});

yearButton.addEventListener('click', function () {
  artists.sort(byYear);
});

randomButton.addEventListener('click', function () {
  artists.sort(shuffle);
});

reverseButton.addEventListener('click', function () {
  populateTable(artists.reverse());
});

// first a function to sort by name:
function byName(a, b) {

  populateTable(artists.sort(function (a, b) {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
  }));

};

// next a function to sort by year:
function byYear(a, b) {

  populateTable(artists.sort(function (a, b) {
    if (a.birthYear < b.birthYear) return -1;
    if (a.birthYear > b.birthYear) return 1;
    return 0;
  }));

};

// next a function to shuffle the rows:
function shuffle() {

    for (let i = artists.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [artists[i], artists[j]] = [artists[j], artists[i]];
    }

    populateTable(artists);

};