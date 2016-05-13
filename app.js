var allImages = [];
var imageNames = ['bag', 'banana', 'boots', 'chair', 'cthulu', 'dragon', 'pen', 'scissors', 'shark', 'sweep', 'unicorn', 'usb', 'water_can', 'wine_glass'
];

function Picture (name, votes, home,) {
  this.pictureName = name;
  this.numVotes = votes; //or should this be set to 0?
  this.home = IMG/this.pictureName;
  allImages.push(this);
  Picture.renderImage(slides, this);
};

(Picture.render = function() {
  var slideshow = document.createElement('section');
  slideshow.setAttribute('id', 'slideshow');
  var imgOne = document.createelement('img')
  imgOne.setAtribute('src', this.home);
  var imgTwo = document.createElement('img');
  imgTwo.setAttribute('src', this.home);
  var imgThree = document.createElement('img');
  imgThree.setAttribute('src', this.home);
  slideshow.appendChild(imgOne);
  slideshow.appendChild(imgTwo);
  slideshow.appendChild(imgThree);
  document.getElementById('theSlidesHere').appendChild(slideshow);
})();

var bagPic = new Picture('bag', 0, IMG/Picture.pictureName);
var bananaPic = new Picture('banana', 0, IMG/Picture.pictureName);
var bootsPic = new Picture('boots', 0, IMG/Picture.pictureName);
var chairPic = new Picture('chair', 0, IMG/Picture.pictureName);
var cthuluPic = new Picture('cthulu', 0, IMG/Picture.pictureName);
var dragonPic = new Picture('dragon', 0, IMG/Picture.pictureName);
var penPic = new Picture('pen', 0, IMG/Picture.pictureName);
var scissorsPic = new Picture('scissors', 0, IMG/Picture.pictureName);
var sharkPic = new Picture('shark', 0, IMG/Picture.pictureName);
var sweepPic = new Picture('sweep', 0, IMG/Picture.pictureName);
var unicornPic = new Picture('unicorn', 0, IMG/Picture.pictureName);
var usbPic = new Picture('usb', 0, IMG/Picture.pictureName);
var water_canPic = new Picture('water_can', 0, IMG/Picture.pictureName);
var wine_glassPic = new Picture('wine_glass', 0, IMG/Picture.pictureName);


var productRank = {
  // TODO: All the properties of the object! What do you think you need? Try to write one piece at a time and make sure it does what you want before writing a little more.
  // NOTE: A-C-P reminder... Make very intentional and iterative changes to your code, and then A-C-P.

  getRandomIndex: function() {
    // TODO: Hmm... what's going to happen here?
  },

  displayImages: function() {
    // TODO: Hmm... what's going to happen here?
  },

  tallyClicks: function(elementId) {
    // TODO: Hmm... what's going to happen here?
  },

  displayResults: function() {
    // TODO: Hmm... what's going to happen here?
  },

  showButton: function() {
    // TODO: Hmm... what's going to happen here?
  },

  onClick: function() {
    // TODO: Hmm... what's going to happen here?
};

productRank.imageEls.addEventListener('click', productRank.onClick);
productRank.displayImages();
