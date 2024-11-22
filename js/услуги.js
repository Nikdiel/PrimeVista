let light = document.getElementById('light');

let dark = document.getElementById('dark');



light.addEventListener('click', themeChangeLight);

dark.addEventListener('click', themeChangeDark);



window.onload = themeChangeLight;



function themeChangeLight(){
    document.getElementById('main').style.backgroundColor = '#fff';
    document.body.style.color = 'black';
    document.documentElement.style.backgroundColor = '#e8e8e8';
};


function themeChangeDark(){
    document.getElementById('main').style.backgroundColor = 'rgb(36 37 51)';
    document.body.style.color = 'white';
    document.documentElement.style.backgroundColor = '#1a1a29';
};