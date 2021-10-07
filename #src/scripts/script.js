'use strict'

let doc = document;
let innerWindowWidth = () => window.innerWidth;
let innerWindowHeight = () => window.innerHeight;


// ? If you see an error here, it's normal.
@@include('_modalWindow.js');


function showOrHideSubmenu(e) {
    const menuButton = e.currentTarget;
    const allSubmenu = doc.querySelectorAll('.navmenu__submenu');
    const allMenuButtons = doc.querySelectorAll('.submenu-open-button');

    // Hides all previously active menus and menu buttons.
    for (let i = 0; i < allSubmenu.length; i++) {

        if (allSubmenu[i] !== menuButton.firstElementChild &&
            allMenuButtons[i] !== menuButton) {

            allMenuButtons[i].classList.remove('show');
            allSubmenu[i].classList.remove('show');
        }
    }

    if (menuButton.firstElementChild !== undefined) {
        menuButton.classList.toggle('active');
        menuButton.firstElementChild.classList.toggle('show');
    }
}
const activateSubmenuButtons = doc.querySelectorAll('.submenu-open-button');
for (let submenuButton of activateSubmenuButtons) {
    submenuButton.addEventListener('click', showOrHideSubmenu);
}

function showSubmitButton(e, isActive) {
    if (isActive) {
        submitButton.classList.add('unactive');
    } else {
        submitButton.classList.remove('unactive');
    }
}
const chatInput = document.querySelector('#chat-text');
chatInput.addEventListener('focus', () => showSubmitButton(null, false));
chatInput.addEventListener('blur', () => showSubmitButton(null, true));

const submitButton = document.querySelector('#chat-submit');

function closeSidepanel(e) {
    sidepanel.remove();
}
const sidepanel = document.querySelector('.sidepanel');

const closeSidepanelButton = document.querySelector('#profile-close');
closeSidepanelButton.addEventListener("click", closeSidepanel);


doc.addEventListener('keydown', (key) => {
    let chatBody = doc.querySelector('.chat__body');

    if (key.code === 'End') {
        chatBody.scrollIntoView(false);
    }
});