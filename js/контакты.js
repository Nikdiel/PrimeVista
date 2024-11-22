let light = document.getElementById('light');

let dark = document.getElementById('dark');



light.addEventListener('click', themeChangeLight);

dark.addEventListener('click', themeChangeDark);



window.onload = themeChangeLight;



function themeChangeLight(){
    document.getElementById('main').style.backgroundColor = '#fff';
    document.body.style.color = '#333';
    document.documentElement.style.backgroundColor = '#e8e8e8';
    document.getElementById('form').style.backgroundColor = '#fff';
    document.getElementById('1').style.backgroundColor = '#fff';
    document.getElementById('2').style.backgroundColor = '#fff';
    document.getElementById('3').style.backgroundColor = '#fff';
    document.getElementById('p1').color = '#777';
    document.getElementById('p2').color = '#777';
    document.getElementById('p3').color = '#777';
    document.getElementById('name').style.backgroundColor = '#fff';
    document.getElementById('email').style.backgroundColor = '#fff';
    document.getElementById('textarea').style.backgroundColor = '#fff';
    document.getElementById('btn').style.backgroundColor = '#3d3d5c';
    document.getElementById('name').classList.add('gray');
    document.getElementById('email').classList.add('gray');
    document.getElementById('textarea').classList.add('gray');
    document.getElementById('name').classList.remove('white');
    document.getElementById('email').classList.remove('white');
    document.getElementById('textarea').classList.remove('white');
    document.getElementById('name').style.borderColor = '#dddddd';
    document.getElementById('email').style.borderColor = '#dddddd';
    document.getElementById('textarea').style.borderColor = '#dddddd';
};


function themeChangeDark(){
    document.getElementById('main').style.backgroundColor = 'rgb(36 37 51)';
    document.body.style.color = 'white';
    document.documentElement.style.backgroundColor = '#1a1a29';
    document.getElementById('form').style.backgroundColor = 'rgb(61, 61, 92)';
    document.getElementById('1').style.backgroundColor = '#52538b';
    document.getElementById('2').style.backgroundColor = '#52538b';
    document.getElementById('3').style.backgroundColor = '#52538b';
    document.getElementById('name').style.backgroundColor = '#1a1a29';
    document.getElementById('email').style.backgroundColor = '#1a1a29';
    document.getElementById('textarea').style.backgroundColor = '#1a1a29';
    document.getElementById('name').classList.add('white');
    document.getElementById('email').classList.add('white');
    document.getElementById('textarea').classList.add('white');
    document.getElementById('name').classList.remove('gray');
    document.getElementById('email').classList.remove('gray');
    document.getElementById('textarea').classList.remove('gray');
    document.getElementById('btn').style.backgroundColor = '#52538b';
    document.getElementById('name').style.border = '0';
    document.getElementById('email').style.border = '0';
    document.getElementById('textarea').style.border = '0';
    
};