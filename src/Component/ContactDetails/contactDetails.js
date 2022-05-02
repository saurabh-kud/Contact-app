import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import user from "../../Image/user.png";
import "../../CSS/ContactDetails/contactDetails.css";

function ContactDetails(props) {
  const location = useLocation();
  const { name, email } = location.state.contact;

  return (
    <>
      <div>
        <div>
          <div>
            <img src={user} alt="user" />
          </div>
          <div>{name}</div>
          <div>{email}</div>
          <Link to="/">
            <button>back to home</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default ContactDetails;
