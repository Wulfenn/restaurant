const contact = () => {

  const parallax = document.querySelector('.parallax');
  const footer = document.querySelector('.footer');

  const holder = document.createElement('div');
  holder.classList.add('holder');
  const contactContainer = document.createElement('div');
  contactContainer.classList.add('contact-container');
  holder.appendChild(contactContainer);
  const address = document.createElement('div');
  address.classList.add('address');
  address.innerHTML = '<div><h1> Address </h1> <p> Le Cafe de l\'Amour </p> 46286 Dorsten, Germany <br /> Next to the Wulfen train station.<br /><h1>Phone</h1><p>777-123-4567<br />777-345-6789</p><br /><h1>Service Hours</h1><p>Mon-Fri: 10:00am - 9:00pm <br />Saturday: 10:00am - 11:00pm<br />Sunday: 8:00am - 9:00pm</div>';
  const mapImg = document.createElement('img');
  mapImg.setAttribute('src', 'assets/map.jpg') 
  address.appendChild(mapImg);
  contactContainer.appendChild(address);
  const msgContainer = document.createElement('div');
  msgContainer.classList.add('msg-container');
  holder.appendChild(msgContainer);
  const comments = document.createElement('div');
  comments.innerHTML = '<h1>Leave us a Comment</h1>';
  msgContainer.appendChild(comments);
  const form = document.createElement('form');
  const formDiv1 = document.createElement('div');
  formDiv1.classList.add('flex-horizontal');
  const nameDiv = document.createElement('div');
  const textInput = document.createElement('input');
  const nameLabel = document.createElement('label');
  nameLabel.setAttribute('for', 'name');
  nameLabel.innerHTML = 'Name <br />';
  nameDiv.appendChild(nameLabel);
  textInput.setAttribute('type', 'text');
  textInput.setAttribute('placeholder', 'Your name');
  nameDiv.appendChild(textInput);
  formDiv1.appendChild(nameDiv);
  const emailDiv = document.createElement('div');
  const emailLabel = document.createElement('label');
  emailLabel.setAttribute('for', 'email');
  emailLabel.innerHTML = 'Email <br />';
  emailDiv.appendChild(emailLabel);
  const emailInput = document.createElement('input');
  emailInput.setAttribute('type', 'email');
  emailInput.setAttribute('placeholder', 'Your email');
  emailDiv.appendChild(emailInput);
  formDiv1.appendChild(emailDiv);
  form.appendChild(formDiv1);
  const formDiv2 = document.createElement('div');
  const textLabel = document.createElement('label');
  textLabel.setAttribute('for', 'textarea');
  textLabel.innerHTML = 'Your message: <br />';
  formDiv2.appendChild(textLabel);
  const textArea = document.createElement('textarea');
  formDiv2.appendChild(textArea);
  form.appendChild(formDiv2);
  const formDiv3 = document.createElement('div');
  const submitBtn = document.createElement('button');
  submitBtn.setAttribute('type', 'submit');
  submitBtn.textContent = 'Send';
  formDiv3.appendChild(submitBtn);
  form.appendChild(formDiv3);
  msgContainer.appendChild(form);



    // Insert our finished contact page.
    parallax.insertBefore(holder, footer);
}

export { contact };