// Menu data structure (Task 5.0)
const menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '#', subLinks: [
      {text: 'all', href: '/catalog/all'},
      {text: 'top selling', href: '/catalog/top'},
      {text: 'search', href: '/catalog/search'},
    ]},
    {text: 'orders', href: '#' , subLinks: [
      {text: 'new', href: '/orders/new'},
      {text: 'pending', href: '/orders/pending'},
      {text: 'history', href: '/orders/history'},
    ]},
    {text: 'account', href: '#', subLinks: [
      {text: 'profile', href: '/account/profile'},
      {text: 'sign out', href: '/account/signout'},
    ]},
  ];

//Task 1.0
const mainEl = document.querySelector('main');
console.log(mainEl)

//Task 1.1
mainEl.style.backgroundColor = "var(--main-bg)";

//Task1.2
mainEl.innerHTML = '<h1>SEI Rocks!</h1>';

//Task1.3
mainEl.classList.add('flex-ctr');

//Task2.0
const topMenuEl = document.getElementById("top-menu");
console.log(topMenuEl);

//Task2.1
topMenuEl.style.height = '100%'

//Task2.2
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';

//Task2.3
topMenuEl.classList.add('flex-around');

//task3.1
menuLinks.forEach(function(link) {
    const linkEl = document.createElement('a');
    linkEl.setAttribute('href', link.href);
    linkEl.textContent = link.text;
    topMenuEl.appendChild(linkEl);
  });

  //task4.0

  const subMenu = document.getElementById('sub-menu');
  console.log(subMenu)

  //task4.1
  subMenuEl.style.height = '100%';

  //task4.2
  subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)';

  //task4.3
  subMenuEl.style.classList.add('flex-around');

  //task4.4/*----- app's state (variables) -----*/
let game;

/*----- cached element references -----*/
const boardEl = document.getElementById('board');
const msgEl = document.getElementById('message');

/*----- classes -----*/

/*----- functions -----*/
initialize();

function initialize() {

}
  subMenuEl.style.position('absolute');

  //task4.5
  subMenu.style.top = '0';

  //task5.0
  //i replaced the menu 

  //task 5.1
  const topMenuLinks = document.querySelectorAll('#top-menu a');


  ///struggled here
//   // Task 5.2
//     topMenuEl.addEventListener('click', function(evt) {
//     evt.preventDefault();
//     const link = evt.target;
//     if (link.tagName !== 'A') return;
//     console.log(link.textContent);
//     // Task 5.3
//     if (link.classList.contains('active')) {
//       link.classList.remove('active');
//       showingSubMenu = false;
//       subMenuEl.style.top = '0';
//       return;
//     }
//     // Task 5.4
//     topMenuLinks.forEach(function(link) {
//       link.classList.remove('active');
//     });
//     // Task 5.5
//     link.classList.add('active');
//     // Task 5.6
//     const linkData = menuLinks.find(function(linkObj) {
//       return linkObj.text === link.textContent;
//     });
//     showingSubMenu = 'subLinks' in linkData;
//     // Task 6.4
//     // Task 5.7
//     if (showingSubMenu) {
//       buildSubMenu(linkData.subLinks);
//       subMenuEl.style.top = '100%';
//     } else {
//       subMenuEl.style.top = '0';
//       mainEl.innerHTML = '<h1>about</h1>';
//     }
//   });
  
//   // Task 5.8
//   function buildSubMenu(subLinks) {
//     subMenuEl.innerHTML = '';
//     subLinks.forEach(function(link) {
//       const linkEl = document.createElement('a');
//       linkEl.setAttribute('href', link.href);
//       linkEl.textContent = link.text;
//       subMenuEl.appendChild(linkEl);
//     });
//   }
  
//   // Task 6.0
//   subMenuEl.addEventListener('click', function(evt) {
//     evt.preventDefault();
//     const link = evt.target;
//     if (link.tagName !== 'A') return;
//     console.log(link.textContent);
//     // Task 6.1
//     showingSubMenu = false;
//     subMenuEl.style.top = '0';
//     // Task 6.2
//     topMenuLinks.forEach(function(link) {
//       link.classList.remove('active');
//     });
//     // Task 6.3
//     mainEl.innerHTML = `<h1>${link.textContent}</h1>`;
//   });
  