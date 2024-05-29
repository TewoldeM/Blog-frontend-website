const navitems = document.querySelector('.nav-items');
const openbtn=document.querySelector('#open-nav-btn');
const closebtn=document.querySelector('#close-nav-btn');


const opennav =()=>{
  navitems.style.display='flex';
 openbtn.style.display='none';
 closebtn.style.display='inline-block';
}
const closenav=()=>{
  navitems.style.display='none';
  closebtn.style.display='none';
  openbtn.style.display='inline-block';
}
openbtn.addEventListener('click',opennav);
closebtn.addEventListener('click',closenav);

// #################################      toogle the category manager
const sidebar=document.querySelector('aside');
const showsidebarbtn=document.querySelector('#show__sidebar-btn');
const hidesidebarbtn=document.querySelector('#hide__sidebar-btn');


const  showsidebar=()=>{
  sidebar.style.left='0';
  showsidebarbtn.style.display='none';
  hidesidebarbtn.style.display='inline-block';
}

const  hidesidebar=()=>{
  sidebar.style.left='-100%';
  showsidebarbtn.style.display='inline-block';
  hidesidebarbtn.style.display='none';
}

showsidebarbtn.addEventListener('click',showsidebar);
hidesidebarbtn.addEventListener('click',hidesidebar);