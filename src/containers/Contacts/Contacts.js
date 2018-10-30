import React, { PureComponent, Component } from "react";
import Aux from "../../hoc/Auxi";
import Contact from "../../components/Contact/Contact";
import ContactDetail from "../../components/ContactDetails/ContactDetails";
import contactsList from "../../assets/contacts.json";

export default class Contacts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contactsList: contactsList,
      contactData: null
    };
  }
  componentWillMount() {
    console.log("contactlist", contactsList);
  }
  componentDidMount() {}
  showContactDetail = contactIndex => {
    // const persons = this.state.persons.slice();
    console.log("insied delete", contactIndex);
    const contacts = [...this.state.contactsList];
    const contactData = contacts.filter(
      (contact, index) => index === contactIndex
    );
    this.setState({ contactData: contactData });
    console.log("contact is=", this.state.contactData);
  };

  render() {
    let contact = null;
    let contactDetail = null;
    if (contactsList) {
      contact = (
        <div>
          {this.state.contactsList.map((contact, index) => {
            return (
              <Contact
                click={() => this.showContactDetail(index)}
                name={contact.general.firstName}
                title={contact.job.title}
                key={contact.general.firstName}
                avatar={contact.general.avatar}
              />
            );
          })}
        </div>
      );
    }
    if (this.state.contactData != null) {
      contactDetail = (
        <div>
          {this.state.contactData.map((contact, index) => {
            return (
              <ContactDetail
                name={contact.general.firstName}
                name={contact.general.firstName}
                title={contact.job.title}
                key={contact.general.firstName}
                avatar={contact.general.avatar}
                email={contact.contact.email}
                phone={contact.contact.phone}
                address={contact.address.street}
              />
            );
          })}
        </div>
      );
    }
    return (
      <Aux>
        {contactDetail} {contact}
      </Aux>
    );
  }
}
