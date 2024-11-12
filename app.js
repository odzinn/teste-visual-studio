'use strict';
const switcher = document.querySelector('.btn');

switcher.addEventListener ('click', function()
 {
    document.body.classList.toggle('dark-theme')

    var className = document.body.className;
    if(className == 'light-theme') {//Aqui é uma condicional "Se"
        this.textContent = "vermelho";
    }       
    else { // Aqui é um senão
        this.textContent = "ciano";
    }     

    console.log('current class name:' + className);

});