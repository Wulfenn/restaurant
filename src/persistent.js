const persistent = () => {
  const content = document.querySelector('#content'); // Our initial div

  const parallax = document.createElement('div');
  parallax.classList.add('parallax');

  // Our header 
  const header = document.createElement('div');
  header.classList.add('header');
  const logo = document.createElement('div');
  logo.classList.add('logo');
  const logoPicDiv = document.createElement('div');
  const coffeeImg = document.createElement('img');
  coffeeImg.setAttribute('src', 'assets/coffee.png');
  coffeeImg.style.width = '80px';
  coffeeImg.style.height = '80px';
  logo.appendChild(coffeeImg);
  const logoText = document.createElement('div');
  logoText.textContent = "Le Cafe de L'Amour"; 
  logo.appendChild(logoText);
  header.appendChild(logo);
  const homeLink = document.createElement('div');
  homeLink.classList.add('navlink');
  homeLink.setAttribute('id', 'home');
  homeLink.textContent = 'Home';
  header.appendChild(homeLink);
  const menuLink = document.createElement('div');
  menuLink.classList.add('navlink');
  menuLink.setAttribute('id', 'menu');
  menuLink.textContent = 'Menu';
  header.appendChild(menuLink);
  const contactLink = document.createElement('div');
  contactLink.classList.add('navlink');
  contactLink.setAttribute('id', 'contact');
  contactLink.textContent = 'Contact';
  header.appendChild(contactLink);
  parallax.appendChild(header);

// Footer
  const footer = document.createElement('div');
  footer.classList.add('footer');
  footer.innerHTML = 'Created by Sergio Navarro | <a href="https://github.com/Wulfenn"> My Github (Wulfenn) </a>';
  parallax.appendChild(footer);

// Put it all together.
  content.appendChild(parallax); 
}

export { persistent };