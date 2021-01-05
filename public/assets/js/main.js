"use strict";
const btn = document.getElementById('show-modal');
// Añadir un objeto de atributos a un elemento
const addAttributes = (element, attrObj) => {
    for (let attr in attrObj) {
        if (attrObj.hasOwnProperty(attr))
            element.setAttribute(attr, attrObj[attr]);
    }
};
// Crear elementos con atributos e hijo
const createCustomElement = (element, attributes, children) => {
    let customElement = document.createElement(element);
    if (children !== undefined)
        children.forEach(el => {
            if (el.nodeType) {
                if (el.nodeType === 1 || el.nodeType === 11)
                    customElement.appendChild(el);
            }
            else {
                customElement.innerHTML += el;
            }
        });
    addAttributes(customElement, attributes);
    return customElement;
};
// Print modal
const printModal = (content) => {
    // Create container child
    const modalContent = createCustomElement('div', {
        id: 'modal-content',
        class: 'modal-content'
    }, [content]);
    // Create container father
    const modalConatiner = createCustomElement('div', {
        id: 'modal-container',
        class: 'modal-container'
    }, [modalContent]);
    // print modal
    document.body.appendChild(modalConatiner);
    // Remove modal
    const removeModal = () => {
        document.body.removeChild(modalConatiner);
    };
    modalConatiner.addEventListener('click', e => {
        if (e.target === modalConatiner)
            removeModal();
    });
};
btn === null || btn === void 0 ? void 0 : btn.addEventListener('click', () => printModal(`<h1>Hello World`));
/*
Keyboard shortcut
*/
addEventListener('keydown', e => {
    if (e.key == 'a' && e.ctrlKey == true) {
        e.preventDefault();
        printModal(`<h1>Hello World`);
    }
});
