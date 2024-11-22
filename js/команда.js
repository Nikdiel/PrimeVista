let light = document.getElementById('light');

let dark = document.getElementById('dark');

light.addEventListener('click', temaChangeLight);

dark.addEventListener('click', temaChangeDark);

let a = document.querySelectorAll('#service');

window.onload = temaChangeLight;

function temaChangeLight(){
    document.getElementById('main').style.backgroundColor = '#fff';
    document.body.style.color = 'black';
    document.documentElement.style.backgroundColor = '#e8e8e8';
    document.getElementById('1').style.backgroundColor = '#404158';
    document.getElementById('2').style.backgroundColor = '#404158';
    document.getElementById('3').style.backgroundColor = '#404158';
    document.getElementById('4').style.backgroundColor = '#404158';
    document.getElementById('5').style.backgroundColor = '#404158';
};

function temaChangeDark(){
    document.getElementById('main').style.backgroundColor = 'rgb(36 37 51)';
    document.body.style.color = 'white';
    document.documentElement.style.backgroundColor = '#1a1a29';
    document.getElementById('1').style.backgroundColor = '#3d3d5c';
    document.getElementById('2').style.backgroundColor = '#3d3d5c';
    document.getElementById('3').style.backgroundColor = '#3d3d5c';
    document.getElementById('4').style.backgroundColor = '#3d3d5c';
    document.getElementById('5').style.backgroundColor = '#3d3d5c';
};