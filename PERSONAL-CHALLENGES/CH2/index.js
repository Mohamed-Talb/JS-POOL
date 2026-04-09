/*
Challenge:
1. Wire up this search pattern app so that inputting 
   a full or partial name brings up the matching     
   contact or contacts.
*/
import {contactsArr} from './contactsData.js';

const patternSearchInput = document.getElementById('pattern-search-input')
const patternSearchSubmit = document.getElementById('pattern-search-submit')
const contactDisplay = document.getElementById('contact-display')

function renderContact(contactObj)
{
    contactDisplay.innerHTML = '';
    const contactCard = document.createElement('aside')
    contactCard.classList.add('contact-card')
    console.log(contactObj);   
    let name = document.createElement('p');
    let mail = document.createElement('p');
    let phoneNumber = document.createElement('p');
    
    name.textContent = contactObj.name;
    mail.textContent = contactObj.email;
    phoneNumber.textContent = contactObj.phone;

    contactCard.appendChild(name);
    contactCard.appendChild(mail);
    contactCard.appendChild(phoneNumber);
    
    contactDisplay.appendChild(contactCard);
    /*
    The CSS for contact-card has been done for you. 
    The name, email and phone details can be placed in
    'p' elements and placed inside contact-card. 
*/
}

function search()
{
    patternSearchSubmit.addEventListener('click', () =>
    {
        let content = patternSearchInput.value.toLowerCase().trim();
        if (content.length === 0)
            return ;
        let matchContacts = contactsArr.filter((curr) => curr.name.toLowerCase().includes(content));
        matchContacts.forEach(curr => renderContact(curr));  
    })
}

search();
