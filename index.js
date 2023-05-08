// Define the seat layout
const ROWS = 10;
const SEATS_PER_ROW = 7;
const LAST_ROW_SEATS = 4;

// Initialize the list of available seats
let availableSeats = [];
for (let row = 0; row < ROWS; row++) {
  for (let seat = 0; seat < SEATS_PER_ROW; seat++) {
    if (row === ROWS - 1 && seat >= SEATS_PER_ROW - LAST_ROW_SEATS) {
      // Skip last row and last seat in each row
      continue;
    }
    availableSeats.push(`${row+1}${String.fromCharCode(65+seat)}`);
  }
}

// Define the reserveSeats() function
function reserveSeats() {
  let numSeats = parseInt(document.getElementById("numSeats").value);
  if(numSeats == 5 || numSeats == 3 || numSeats == 7){
    alert("Please enter a number between 1 or 2 or 4 and 6");
    return;
  }
  if (numSeats < 1 || numSeats > 7) {
    alert("Please enter a number between 1 and 7");
    return;
  }
  if (numSeats > availableSeats.length) {
    alert("Sorry, there are not enough seats available");
    return;
  }
  let reservedSeats = availableSeats.slice(0, numSeats);
  availableSeats = availableSeats.slice(numSeats);
  displaySeats("reserved sets are"+reservedSeats);
}

//Notification altert
if(Notification.permission ==="granted"){
  new Notification("Hello from Girish Your Guid")
}
else if(Notification.permission ==="default"){
  Notification.requestPermission().then(permission=>{
    if(permission==="granted"){
      new Notification("Hello from Girish Your Guid")
    }
  })
}

// Define the displaySeats() function
function displaySeats(reservedSeats) {
  let seatLayout = document.getElementById("seatLayout");
  seatLayout.innerHTML = "";
  let table = document.createElement("table");
  for (let row = 0; row < ROWS; row++) {
    let tr = document.createElement("tr");
    for (let seat = 0; seat < SEATS_PER_ROW; seat++) {
      if (row === ROWS - 1 && seat >= SEATS_PER_ROW - LAST_ROW_SEATS) {
        // Skip last row and last seat in each row
        continue;
      }
      let td = document.createElement("td");
      td.innerText = `${row+1}${String.fromCharCode(65+seat)}`;
      if (reservedSeats.includes(td.innerText)) {
        td.classList.add("reserved");
      } else {
        td.classList.add("available");
      }
      tr.appendChild(td);
    }
    table.appendChild(tr);
  }
  seatLayout.appendChild(table);
}
