let index = 0;  
const images = document.querySelectorAll(".gallery img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.querySelector("#lightbox img");
function showImage() {
  images.forEach(img => img.classList.remove("active")); 
  images[index].classList.add("active"); 
}
document.getElementById("next").onclick = () => {
  index = (index + 1) % images.length; 
  showImage();
};
document.getElementById("prev").onclick = () => {
  index = (index - 1 + images.length ) % images.length; 
  showImage();
};
images.forEach(img => {
  img.onclick = () => {
    lightbox.style.display = "flex"; 
    lightboxImg.src = img.src;       
  };
});
document.getElementById("close").onclick = () => {
  lightbox.style.display = "none";
};
showImage();
