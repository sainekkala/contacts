import React, {useState} from "react";

function ContactForm ({contacts, setContacts}) {
    const initialValues = { full_name: "", phone_number: "" };
    const [formData, setFormData] = useState(initialValues);
    
    const onChangeInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setFormData({...formData, [name] : value});
    };
    
    const handleForm = (e) => {
        e.preventDefault();
        if(formData.full_name === '' || formData.phone_number === ''){
            alert("please fill the form")
        }
        setContacts([...contacts, formData])
        setFormData(initialValues);
    }


    return (
        <>
         <form onSubmit={handleForm}>
           <div className="m-1">
           <input
            type="text" 
            name="full_name" 
            placeholder="fullname"
            value={formData.full_name}
            onChange={onChangeInput}
            required
            />
            </div>
            <div className="m-1">
            <input 
            type="number"
            name="phone_number"
            placeholder="phone number"
            value={formData.phone_number}
            onChange={onChangeInput}
            required
             />
           </div>
            <div id="button"><button>Add</button></div>
         </form>
        </>
    )
};

export default ContactForm;