const leftBtn = document.querySelector('.btn-left');
const rightBtn = document.querySelector('.btn-right');
const imgContainer = document.querySelector('.img-container');
const imgs = document.querySelectorAll('.img-grid img'); 

const images = ['im1', 'im2', 'im3', 'im4', 'im5'];
let counter = 0;

const blurImages = () => { 
  imgs.forEach(img=> img.style.opacity = '0.3')
}

const moveLeft = () => { 
  counter--; 
  blurImages();
  if (counter < 0) { 
    counter = imgs.length - 1
  }
  imgContainer.style.backgroundImage = `url(./imgs/${images[counter]}.jpg)`;
  imgs[counter].style.opacity = '1';
}

const moveRight = () => { 
  counter++; 
   blurImages();
  if (counter >= images.length) { 
    counter = 0;
  }
    imgContainer.style.backgroundImage = `url(./imgs/${images[counter]}.jpg)`;
		imgs[counter].style.opacity = "1";
}

leftBtn.addEventListener('click', moveLeft)
rightBtn.addEventListener('click', moveRight)

imgs.forEach((img, index) => { 
  img.addEventListener('click', (e) => { 
    imgContainer.style.backgroundImage = `url(${img.getAttribute("src")})`
    blurImages();
    img.style.opacity = '1';
    counter = index;
  })
})

