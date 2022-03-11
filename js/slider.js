const imageArray = [
    'action.png',
    'airpod.png',
    'camera.png',
    'gear.png',
    'lights.png',
    'mic.png',
    'setup.png',
    'single-light.png',
    'tripod.png'
];
const showImage = document.getElementById('image-id');
let imageIndex = 0;
setInterval(()=> {
    if(imageIndex == imageArray.length){
        imageIndex =0;
    }
     showImage.setAttribute('src',`images/${imageArray[imageIndex]}`);
     imageIndex++;
}, 1000);