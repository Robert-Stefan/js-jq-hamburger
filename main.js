/**
 * REFERENCES
 */

var hamburger = $('.fas.fa-bars');
var menu = $('.hamburger-menu');
var chiuso = $('.close');

//MOSTRARE MENU HAMBURGER
hamburger.click( function(){
    menu.show();
});

//CHIUDERE MENU HAMBURGER
chiuso.click( function(){
    menu.hide();
});