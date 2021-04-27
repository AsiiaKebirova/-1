"use strict";

const menuTabItem = document.querySelectorAll('.tabs__menu-item'),
    tabItem = document.querySelectorAll('.tabs__item');

menuTabItem.forEach((elem, index) => {
    elem.addEventListener('click', () => {
        if (!elem.classList.contains('tabs__menu-item_active')) {
            menuTabItem.forEach((tab,index) => {
                if (tab.classList.contains('tabs__menu-item_active')) {
                    tab.classList.remove('tabs__menu-item_active');
                    tabItem[index].classList.remove('tabs__item_active');
                }
            });
            elem.classList.add('tabs__menu-item_active');
            tabItem[index].classList.add('tabs__item_active');
        }
    });
});

