const menu = () => {

  const parallax = document.querySelector('.parallax');
  const footer = document.querySelector('.footer');

  // Our menu
  const holder = document.createElement('div');
  holder.classList.add('holder');
  const menuContainer = document.createElement('div');
  menuContainer.classList.add('menu-container');
  holder.appendChild(menuContainer);
  const menu1 = document.createElement('img');
  menu1.setAttribute('src', 'assets/latte.jpeg')
  menu1.setAttribute('title', 'Our signature latte, decorated to your taste!');
  menuContainer.appendChild(menu1);
  const menu2 = document.createElement('img');
  menu2.setAttribute('src', 'assets/espresso.jpeg')
  menu2.setAttribute('title', 'Espresso - For the man/woman on the go.');
  menuContainer.appendChild(menu2);
  const menu3 = document.createElement('img');
  menu3.setAttribute('src', 'assets/milkshake.jpeg')
  menu3.setAttribute('title', 'Indulge yourself with our mason jar milkshakes!');
  menuContainer.appendChild(menu3);
  const menu4 = document.createElement('img');
  menu4.setAttribute('src', 'assets/tropical.jpeg')
  menu4.setAttribute('title', 'Our tropical blends... As exotic as romantic!');
  menuContainer.appendChild(menu4);
  const menu5 = document.createElement('img');
  menu5.setAttribute('src', 'assets/tea.jpeg')
  menu5.setAttribute('title', 'Our growing selection of tea, for the cultured ones');
  menuContainer.appendChild(menu5);
  const menu6 = document.createElement('img');
  menu6.setAttribute('src', 'assets/smoothie.jpeg')
  menu6.setAttribute('title', 'Smoothies made with the finest quality ingredients.');
  menuContainer.appendChild(menu6);
  const menu7 = document.createElement('img');
  menu7.setAttribute('src', 'assets/bakery.jpeg')
  menu7.setAttribute('title', 'Take your pick! With our fresh, out of the oven bakery.');
  menuContainer.appendChild(menu7);
  const menu8 = document.createElement('img');
  menu8.setAttribute('src', 'assets/cake.jpeg')
  menu8.setAttribute('title', 'Eat one slice of our cakes, you\'ll fall in love!');
  menuContainer.appendChild(menu8);
  const menu9 = document.createElement('img');
  menu9.setAttribute('src', 'assets/brownie.jpeg')
  menu9.setAttribute('title', 'Our dessert bar is to die for. Don\'t wait any longer!');
  menuContainer.appendChild(menu9);


  // Insert our finished menu.
  parallax.insertBefore(holder, footer);
}

export { menu };