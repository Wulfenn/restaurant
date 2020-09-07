const home = () => {

  const parallax = document.querySelector('.parallax');
  const footer = document.querySelector('.footer');

  // Our resturant description containers.
  const holder = document.createElement('div');
  holder.classList.add('holder');
  const elegance = document.createElement('div');
  elegance.classList.add('desc-container');
  const eleganceText = document.createElement('div');
  eleganceText.innerHTML = '<span class="highlight">Elegance</span><br /> In the aroma of our freshly brewed coffee.';
  elegance.appendChild(eleganceText);
  const aroma = document.createElement('img');
  aroma.setAttribute('src', 'assets/aroma.jpeg');
  aroma.setAttribute('alt', '"');
  elegance.appendChild(aroma);
  holder.appendChild(elegance); 

  const classDiv = document.createElement('div');
  classDiv.classList.add('desc-container');
  const eclair = document.createElement('img');
  eclair.setAttribute('src', 'assets/eclair.jpeg');
  eclair.setAttribute('alt', '"');
  classDiv.appendChild(eclair);
  const classText = document.createElement('div');
  classText.innerHTML = '<span class="highlight">Class</span><br /> In the quality of our delicious pastries.';
  classDiv.appendChild(classText);
  holder.appendChild(classDiv); 

  const romance = document.createElement('div');
  romance.classList.add('desc-container');
  const romanceText = document.createElement('div');
  romanceText.innerHTML = '<span class="highlight">Romance</span><br /> In Le Cafe de l\'Amour.';
  romance.appendChild(romanceText);
  const heart = document.createElement('img');
  heart.setAttribute('src', 'assets/heart.jpeg');
  heart.setAttribute('alt', '"');
  romance.appendChild(heart);
  holder.appendChild(romance);
  
  parallax.insertBefore(holder, footer);
 
}

export { home };