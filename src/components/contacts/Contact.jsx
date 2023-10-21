import React, {useState} from "react";
import ContactList from "../contact list/ContactList";
import ContactForm from "../contact form/ContactForm";

function Contacts () {
    const [contacts, setContacts] = useState([
        { full_name: "Person One", phone_number: "1234" },
        { full_name: "Person Two", phone_number: "567" },
        { full_name: "Person Three", phone_number: "890" },
      ]);
    return (
        <div id="container">
         <div id="box">
            <ContactList contacts={contacts}/>
            <ContactForm contacts={contacts} setContacts={setContacts}/>
         </div>
         <div id="footer">
           <span>powered by <a href="https://sainekkala.com">sai nekkala</a></span>  
         </div>
        </div>
    )
};

export default Contacts ;