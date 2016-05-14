var allImages = [];
var imageNames = ['bag', 'banana', 'boots', 'chair', 'cthulu', 'dragon', 'pen', 'scissors', 'shark', 'sweep', 'unicorn', 'usb', 'water_can', 'wine_glass'
];

function Picture (name, home) {
  this.pictureName = name;
  this.path = home;
  allImages.push(this);
};

(function createPictures() {
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

  leftEl: document.getElementById('img1'),
  midEl: document.getElementById('img2'),
  rightEl: document.getElementById('img3'),

  imgEls: document.getElementById('theSlidesHere'),
  resultsEls: document.getElementById('results'),
  dooverButtonEls: document.getElementById('showResults'),
  resetButtonEls: document.getElementById('reset'),

  getRandomIndex: function() {
    return Math.floor(Math.random() * allImages.length);
  },

  displayImages: function() {
    imgRank.leftImg = allImages[imgRank.getRandomIndex()];
    imgRank.midImg = allImages[imgRank.getRandomIndex()];
    imgRank.rightImg = allImages[imgRank.getRandomIndex()];
    if(this.leftImg === this.midImg || this.midImg === this.rightImg || this.leftImg === this.rightImg) {
      imgRank.displayImages();
    }
    imgRank.leftEl.src = this.leftImg.path;
    imgRank.leftEl.id = this.leftImg.name;

    imgRank.midEl.src = this.midImg.path;
    imgRank.midEl.id = this.midImg.name;

    imgRank.rightEl.src = this.rightImg.path;
    imgRank.rightEl.id = this.rightImg.name;
  }
};

imgRank.displayImages();
