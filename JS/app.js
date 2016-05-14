var allImages = [];
var imageNames = ['bag', 'banana', 'boots', 'chair', 'cthulu', 'dragon', 'pen', 'scissors', 'shark', 'sweep', 'unicorn', 'usb', 'water_can', 'wine_glass'
];

function Picture (name, home) {
  this.pictureName = name;
  this.path = home;
  allImages.push(this);
};

(function creatPictures() {
  for (var i = 0; i < imageNames.length; i++) {
    new Picture(imageNames[i], 'IMG/' + imageNames[i] + '.jpg');
  }
})();

// Tracker

var imgRank = {
  totalClicks: 0,
  leftImg: null,
  midImg: null,
  rightImg: null,

  leftEl: document.getElementById('imgFirst'),
  midEl: document.getElementById('imgSecond'),
  rightEl: document.getElementById('imgThird'),

  imgEls: document.getElementById('theSlidesHere'),
  resultsEls: document.getElementById('results'),
  dooverButtonEls: document.getElementById('showResults'),
  resetButtonEls: document.getElementById('reset'),
};
