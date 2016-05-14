var allImages = [];
var imageNames = ['bag', 'banana', 'boots', 'chair', 'cthulu', 'dragon', 'pen', 'scissors', 'shark', 'sweep', 'unicorn', 'usb', 'water_can', 'wine_glass'
];

function Picture (name, votes, home) {
  this.pictureName = name;
  this.numVotes = 0; //or should this be set to 0?
  this.src = "IMG/this.pictureName";
  allImages.push(this);
  // Picture.renderImage(slides, this);
};


(Picture.renderImage = function() {
  var slideshow = document.createElement('section');
  slideshow.setAttribute('id', 'slideshow');
  var imgOne = document.createElement('img')
  imgOne.setAttribute('src' Picture.src);
  imgOne.setAttribute('class' slidePics);
  var imgTwo = document.createElement('img');
  ifmgTwo.setAttribute('src' Picture.src);
  imgTwo.setAttribute('class' slidePics);
  var imgThree = document.createElement('img');
  imgThree.setAttribute('src' Picture.src);
  imgThree.setAttribute('class' slidePics);
  slideshow.appendChild(imgOne);
  slideshow.appendChild(imgTwo);
  slideshow.appendChild(imgThree);
  document.getElementById('theSlidesHere').appendChild(slideshow);
})();

var bagPic = new Picture('bag', 0, src="IMG/bag.jpg");
var bananaPic = new Picture('banana', 0, src="IMG/banana.jpg");
var bootsPic = new Picture('boots', 0, src="IMG/boots.jpg");
var chairPic = new Picture('chair', 0, src="IMG/chair.jpg");
var cthuluPic = new Picture('cthulu', 0, src="IMG/cthulhu.jpg");
var dragonPic = new Picture('dragon', 0, src="IMG/dragon.jpg");
var penPic = new Picture('pen', 0, src="IMG/pen.jpg");
var scissorsPic = new Picture('scissors', 0, src="IMG/scissors.jpg");
var sharkPic = new Picture('shark', 0, src="IMG/shark.jpg");
var sweepPic = new Picture('sweep', 0, src="IMG/sweep.jpg");
var unicornPic = new Picture('unicorn', 0, src="IMG/unicorn.jpg");
var usbPic = new Picture('usb', 0, src="IMG/Picture.pictureName");
var water_canPic = new Picture('water_can', 0, src="IMG/Picture.pictureName");
var wine_glassPic = new Picture('wine_glass', 0, src="IMG/Picture.pictureName");


//on page load, the section and the three image spots..divs probably, or a div with three sections needs to be created, then appended to one another.

// then the goal is to have each object get created by passing in the corresponding items into the constructor, and pushing everything in the constructor into allItems array.

// then we have to run a random generator to pluck three random indexes from allItems and put each one into a separate div/section.  then have all that display on the page.

// then it's a matter of listening for a click.  on click, we have to add 1 to the corresponding image's numVotes, then run the random generator again.

// all of that has to be in a for loop, iterating as long as i <= 15.  it can't be allItems.length because since it's random, that could run forever.  so it has to be 15.  once the counter hits 15, we end the loop and show the 'view your results' button.

// selection of that button will populate the UL with all images and totals.  so each li will be a combo of string and variable:  'the shark picture got ' + sharkPic.numVotes.

var picTracker = {
  name: Picture.pictureName,
  votes: 0,

  // TODO: All the properties of the object! What do you think you need? Try to write one piece at a time and make sure it does what you want before writing a little more.
  // NOTE: A-C-P reminder... Make very intentional and iterative changes to your code, and then A-C-P.

  getRandomIndex: function() {
    var polaroid = allimages[Math.floor(Math.random()*allImages.length)];
  },
//
//
displayImages: function(sld, picture) {
//this is where we call renderImage
  Picture.renderImage(obj);
//
//
  };
//     // TODO: Hmm... what's going to happen here?
//
  tallyClicks: function(elementId) {
    if (click) {
      picTracker.votes++
    }
    // TODO: Hmm... what's going to happen here?
  },
//
  displayResults: function() {
    // TODO: Hmm... what's going to happen here?
  },

  showButton: function() {
     show the 'get results' button
    // TODO: Hmm... what's going to happen here?
  },

  onClick: function() {
   tallyClicks(); //we have to call tally clicks, to add one to the tally.
      if (allImages[i] <= 15) {
     getRandomIndex(); //run the random generator again
    }
    else {
    showButton();
  }
    // TODO: Hmm... what's going to happen here?
};
//
// tallyClicks.imageEls.addEventListener('click', tallyClicks.onClick);
// productRank.displayImages();
