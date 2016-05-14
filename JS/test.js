var hours = [
  '10am',
  '11am',
  '12pm',
  '1pm',
  '2pm',
  '3pm',
  '4pm',
  '5pm'
];
var stores = [];
var tableView;

// Store.prototype.totals = [];
// Store.prototype.grandTotal = 0;

function Store (storeName, minCust, maxCust, avgCookie, id) {
  this.storeName = storeName;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookie = avgCookie;
  this.totals = [];
  this.grandTotal = 0;
  stores.push(this); //pushes new stores (instances, when we use NEW STORE) into the stores array
  Store.renderStore(tableView, this);
};

Store.prototype.getRandom = function(min, max) {
  return Math.random() * (max - min) + min;
};

Store.hourTotal = function(obj) {
  for(var j = 0; j < hours.length; j++) {
    var monkey = Math.floor(obj.getRandom(obj.minCust, obj.maxCust)) * obj.avgCookie;
    obj.totals.push(monkey);
    obj.grandTotal += monkey;
  }
};

(Store.render = function() {
  tableView = document.createElement('table');
  tableView.setAttribute('id', 'theGrid');
  var rowOne = document.createElement('tr');
  rowOne.setAttribute('id', 'storeHours');
  var emptyEl = document.createElement('th');
  rowOne.appendChild(emptyEl);
  for(var d = 0; d < hours.length; d++) {
    var tableHours = document.createElement('th');
    tableHours.textContent = hours[d];
    rowOne.appendChild(tableHours);
  }
  var rowOneTotals = document.createElement('th');
  rowOneTotals.textContent = 'Total';
  rowOne.appendChild(rowOneTotals);
  tableView.appendChild(rowOne);
  document.getElementById('theTable').appendChild(tableView);
})();

Store.renderStore = function(tbl, store) {
  Store.hourTotal(store);
  var storeRows = document.createElement('tr');
  var storeName = document.createElement('th');
  storeName.textContent = store.storeName;
  storeRows.appendChild(storeName);
  for(hour in hours) {
    var storeData = document.createElement('td');
    storeData.textContent = Math.floor(store.totals[hour]);
    storeRows.appendChild(storeData);
  }
  var storeRowsTotals = document.createElement('th');
  storeRowsTotals.textContent = Math.floor(store.grandTotal);
  storeRows.appendChild(storeRowsTotals);
  tbl.appendChild(storeRows);
};

var pikeStore = new Store('Pike Place', 17, 88, 5.2, 'pikeplace');
var seaTacStore = new Store('SeaTac Airport', 6, 24, 1.2, 'seaTacStore');
var southCenterStore = new Store('South Center', 11, 38, 1.9, 'southCtrStore');
var bellevueSqStore = new Store('Bellevue Square', 20, 48, 3.3, 'bellSqStore');
var alkiStore = new Store('Alki', 3, 24, 2.6, 'alki_Store');

// BELOW HERE WE PUT NEW STORE DATA VIA INPUT FORMS.

Store.renderNew = function(obj) {
  var newRow = document.createElement('tr');
  var newStoreNameTh = document.createElement('th');
  newStoreNameTh.textContent = obj.name;
  newRow.appendChild(newStoreNameTh);
  for(hour in hours) {
    var newTdNewStore = document.createElement('td');
    newTdNewStore.textContent = Math.floor(obj.totals[hour]);
    newRow.appendChild(newTdNewStore);
  }
  var newTotalTh = document.createElement('th');
  newTotalTh.textContent = Math.floor(obj.grandTotal);
  newRow.appendChild(newTotalTh);
};

var formEl = document.getElementById('tableForm');
formEl.addEventListener('submit', function(event) {
  event.preventDefault();
  var newName = event.target.storeName.value;
  var newMin = parseInt(event.target.minCustomers.value);
  var newMax = parseInt(event.target.maxCustomers.value);
  var newAvg = parseInt(Math.floor(event.target.avgCookies.value));
  var newShop = new Store(newName, newMin, newMax, newAvg);
  console.log(newShop);
  Store.hourTotal(newShop);
  Store.renderNew(newShop);
});





// var bagPic = new Picture('bag', 0, src="IMG/bag.jpg");
// var bananaPic = new Picture('banana', 0, src="IMG/banana.jpg");
// var bootsPic = new Picture('boots', 0, src="IMG/boots.jpg");
// var chairPic = new Picture('chair', 0, src="IMG/chair.jpg");
// var cthuluPic = new Picture('cthulu', 0, src="IMG/cthulhu.jpg");
// var dragonPic = new Picture('dragon', 0, src="IMG/dragon.jpg");
// var penPic = new Picture('pen', 0, src="IMG/pen.jpg");
// var scissorsPic = new Picture('scissors', 0, src="IMG/scissors.jpg");
// var sharkPic = new Picture('shark', 0, src="IMG/shark.jpg");
// var sweepPic = new Picture('sweep', 0, src="IMG/sweep.jpg");
// var unicornPic = new Picture('unicorn', 0, src="IMG/unicorn.jpg");
// var usbPic = new Picture('usb', 0, src="IMG/Picture.pictureName");
// var water_canPic = new Picture('water_can', 0, src="IMG/Picture.pictureName");
// var wine_glassPic = new Picture('wine_glass', 0, src="IMG/Picture.pictureName");


//on page load, the section and the three image spots..divs probably, or a div with three sections needs to be created, then appended to one another.

// then the goal is to have each object get created by passing in the corresponding items into the constructor, and pushing everything in the constructor into allItems array.

// then we have to run a random generator to pluck three random indexes from allItems and put each one into a separate div/section.  then have all that display on the page.

// then it's a matter of listening for a click.  on click, we have to add 1 to the corresponding image's numVotes, then run the random generator again.

// all of that has to be in a for loop, iterating as long as i <= 15.  it can't be allItems.length because since it's random, that could run forever.  so it has to be 15.  once the counter hits 15, we end the loop and show the 'view your results' button.

// selection of that button will populate the UL with all images and totals.  so each li will be a combo of string and variable:  'the shark picture got ' + sharkPic.numVotes.

//   getRandomIndex = function() {
//     return Math.floor(Math.random() * allImages.length);
//   },
//
// displayImages = function() {
// //this is where we call renderImage
//   Picture.renderImage(obj);
// //
// //
//   };
// //     // TODO: Hmm... what's going to happen here?
// //
//   tallyClicks: function(elementId) {
//     if (click) {
//       picTracker.votes++
//     }
//     // TODO: Hmm... what's going to happen here?
//   },
// //
//   displayResults: function() {
//     // TODO: Hmm... what's going to happen here?
//   },
//
//   showButton: function() {
//      show the 'get results' button
//     // TODO: Hmm... what's going to happen here?
//   },
//
//   onClick: function() {
//    tallyClicks(); //we have to call tally clicks, to add one to the tally.
//       if (allImages[i] <= 15) {
//      getRandomIndex(); //run the random generator again
//     }
//     else {
//     showButton();
//   }
//     // TODO: Hmm... what's going to happen here?
// };
//
// tallyClicks.imageEls.addEventListener('click', tallyClicks.onClick);
// productRank.displayImages();

//CHART SHITE:

// var ctx = document.getElementById('myChart').getContext('2d');
// var myChart = new Chart(ctx, {
//     type: 'bar',
//   data: {
//     labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
//     datasets: [{
//         label: '# of Votes',
//         data: [12, 19, 3, 5, 2, 3]
//     }]
//   },
//   options: {
//     scales: {
//         yAxes: [{
//             ticks: {
//                 beginAtZero:true
//             }
//         }]
//     }
//   }
// });
