import React, { useRef } from "react";
import ContactCard from "./ContactCard/contactCard";
import { Link } from "react-router-dom";

function ContactList(props) {
  function findId(id) {
    props.deleteContacts(id);
  }
  const searchText = useRef("");
  const handleSearch = () => {
    // console.log(searchText.current.value);
    props.searchClick(searchText.current.value);
  };

  const renderContactList = props.contacts.map((contact, index) => {
    return <ContactCard findId={findId} key={contact.id} contact={contact} />;
  });

  return (
    <div className="">
      <h2>
        Contact List
        <Link to="/add">
          <button>add</button>
        </Link>
      </h2>
      <div>
        <div>
          <input
            ref={searchText}
            type="text"
            placeholder="search"
            onChange={handleSearch}
            value={props.searchText}
          ></input>
        </div>
      </div>
      {renderContactList.length > 0 ? renderContactList : "not avilable"}
    </div>
  );
}
export default ContactList;
