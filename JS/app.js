var allImages = [];
var imageNames = ['bag', 'banana', 'boots', 'chair', 'cthulhu', 'dragon', 'pen', 'scissors', 'shark', 'sweep', 'unicorn', 'usb', 'water_can', 'wine_glass'
];

function Picture (name, home) {
  this.pictureName = name;
  this.path = home;
  this.votes = 0;
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

  imgEls: document.getElementById('imagesHere'),
  resultsEls: document.getElementById('results'),
  resultButtonEls: document.getElementById('showResults'),
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
    imgRank.leftEl.id = this.leftImg.pictureName;

    imgRank.midEl.src = this.midImg.path;
    imgRank.midEl.id = this.midImg.pictureName;

    imgRank.rightEl.src = this.rightImg.path;
    imgRank.rightEl.id = this.rightImg.pictureName;
  },

  tallyClicks: function(elementId) {
    for (var i in allImages) {
      if(allImages[i].pictureName === elementId) {
        allImages[i].votes += 1;
        imgRank.totalClicks += 1;
        console.log(allImages[i].pictureName + ': ' + allImages[i].votes);
      }
    }
  },

  displayResults: function() {
    var ulEl = document.createElement('ul');
    for (var i in allImages) {
      var liEl = document.createElement('li');
      var stg = allImages[i].pictureName + ' ' + 'has ' + allImages[i].votes + ' votes.';
      liEl.textContent = stg.charAt(0).toUpperCase() + stg.slice(1);
      ulEl.appendChild(liEl);
    }
    var li2El = document.createElement('li');
    li2El.textContent = 'Total User Clicks ' + imgRank.totalClicks;
    ulEl.appendChild(li2El);
    this.resultsEls.appendChild(ulEl);
  },
  showButton: function() {
    imgRank.resultButtonEls.hidden = false;
    imgRank.resultButtonEls.addEventListener('click', function() {
      imgRank.resultButtonEls.hidden = true;
      imgRank.resetButtonEls.hidden = false;
      imgRank.displayResults();
    });
    imgRank.resetButtonEls.addEventListener('click', function(){
      imgRank.resetButtonEls.hidden = true;
      location.reload();
    });
  },
  onClick: function() {
    console.log(event.target.id);
    if(event.target.id === imgRank.leftImg.pictureName || event.target.id === imgRank.rightImg.pictureName || event.target.id === imgRank.midImg.pictureName) {
      imgRank.tallyClicks(event.target.id);

      if(imgRank.totalClicks % 15 === 0) {
        imgRank.imgEls.removeEventListener('click', imgRank.onClick);
        imgRank.showButton();
      }
      imgRank.displayImages();
    } else {
      var errorMsg = document.getElementById('missedTarget');
      errorMsg.innerHTML = '<p>' + 'You need to click on an image.' + '</p>';
    }
  }
};

imgRank.imgEls.addEventListener('click', imgRank.onClick);
imgRank.displayImages();
