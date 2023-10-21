import React,{useState} from 'react'

function ContactList({contacts}) {
    const [filteredText, setFilterText] = useState('');

    const filteredData = contacts.filter((contact) =>
    Object.values(contact).some((value) =>
      value.toString().toLowerCase().includes(filteredText.toLowerCase())
    )
     );

     console.log(contacts)
  return (
    <div>
      <input type='text' placeholder='search' onChange={(e) => setFilterText(e.target.value)}/>
      <ul id='list'>
        {
            filteredData.map((data, index) => {
                return (
                    <li key={index}>
                        <span>{data.full_name}</span>
                        <span>{data.phone_number}</span>
                    </li>
                )
            })
        }
      </ul>
      <span id="totalCount">Total Count ({filteredData.length})</span>
    </div>
  )
}

export default ContactList
