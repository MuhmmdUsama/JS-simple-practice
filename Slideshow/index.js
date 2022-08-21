let img = document.getElementById('slideshow'),
  images = ['./image/1.jpg', './image/2.png', './image/3.jpg', './image/4.jpg'];
let i = 0;
//src="./image/1.jpg"

function slide() {
    console.log('log')
    img.setAttribute('src', images[i]);
    i++
    if(i== images.length){
        i=0
    }
  

  setTimeout(function () {
    slide();
  }, 1000);
}

slide();
