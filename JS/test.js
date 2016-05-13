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
