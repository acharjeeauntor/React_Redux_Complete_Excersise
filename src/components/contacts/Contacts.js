import React, { Component } from 'react';
import Contact from './Contact';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import {getContacts} from '../../actions/contactActions'


class Contacts extends Component {
  componentDidMount() {
    this.props.getContacts()
  }
  render() {
    const { contacts } = this.props;
    return (
      <React.Fragment>
        <h1 className="display-4 mb-2">
          <span className="text-danger">Contact</span> List
        </h1>
        {contacts.map(contact => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </React.Fragment>
    );
  }
}

Contacts.propTypes = {
  contacts: PropTypes.array.isRequired,
  getContacts:PropTypes.func.isRequired
}

const mapStateToProps = (state) =>({
  contacts: state.contact.contacts
})


//This is one way to dispatch. we can also pass payload {type:GET_CONTACTS,payload:id}
// const mapDispatchToProps = (dispatch) => ({
//   getContacts:()=>dispatch({type:GET_CONTACTS})
// })

// export default connect(mapStateToProps,mapDispatchToProps)(Contacts);

//Now we follow another best way 

export default connect(mapStateToProps, {getContacts})(Contacts);
