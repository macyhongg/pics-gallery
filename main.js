var gallery = document.querySelector('main');
// Dummy Data
var imageUrls = [
  'https://i.kym-cdn.com/entries/icons/original/000/013/564/doge.jpg',
  'https://etcanada.com/wp-content/uploads/2016/06/58c0500b2ac4c342c6fc4ab096ada150.jpg?quality=80&strip=all&crop=0px%2C21px%2C500px%2C333px&resize=720%2C480',
  'https://wiki.godvillegame.com/images/thumb/7/76/Prap.jpg/298px-Prap.jpg',
  'https://ih1.redbubble.net/image.969938492.4298/st,small,507x507-pad,600x600,f8f8f8.jpg',
  'https://matthewdevaney.com/wp-content/uploads/2020/10/powerapps-email-nohtml-featured.jpg',
  'https://i.ytimg.com/vi/_KpqqAUHcpw/maxresdefault.jpg'
];
var imageUrlInput = document.querySelector('input');
var addImageButton = document.querySelector('button');

// Listens for clicks and pushes url into the array
addImageButton.addEventListener('click', function () {
  // console.log(imageUrlInput.value);
  if (imageUrlInput.value !== '') {
    imageUrls.push(imageUrlInput.value);
  }
  imageUrlInput.value = '';
  updateGallery();
});

// Iterates through URL array, creates new img element, + appends it to gallery
function updateGallery() {
  gallery.innerHTML = '';
  for (let i = 0; i < imageUrls.length; i++) {
    var imageElement = document.createElement('img');
    imageElement.className = 'gallery-image';
    imageElement.src = imageUrls[i];
    gallery.appendChild(imageElement);
  }
}

// Shows dummy data before any clicks
updateGallery();
