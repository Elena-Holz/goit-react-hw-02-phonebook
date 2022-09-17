import css from 'components/ContactsBook.module.css'
import PropTypes from "prop-types";

const Filter = ({ filter, handelChange }) => {
    
    return (
        <div className={css.formGrup}>
            <label className={css.titleInput}>Find contacts by name</label><br />
            <input className={css.input} type='text' name="filter" onChange={handelChange} value={filter} />
        </div>
)

}

export default Filter

Filter.propTypes = {

    filter: PropTypes.string.isRequired,
     handelChange: PropTypes.func.isRequired,
    
}


// export class App extends Component {
//   state = {
//     contacts: [],
//     filter: '',
   
//   }
  

//   addContact = (contact) => {
//      if (this.isCopy(contact)) {
//         return alert(`${contact.name} is already in contacts`);
//     }
//     const newContact = {
//       id: nanoid(),
//       ...contact
//     }
//     this.setState((prev) => {
//       return {
//         contacts: [...prev.contacts, newContact]
//       }
//     })
//   }

//     isCopy({ name }) {
//     const { contacts } = this.state;
//     const result = contacts.find((item) => item.name=== name);
//     return result;
//   }

//   handelChange = (event) => {
//     const { name, value } = event.target;
//     this.setState({
//       [name]: value
//     })
//   }

//     removeContact = (id) => {
//     this.setState((prev) => {
//       const newContacts = prev.contacts.filter((contact) => contact.id !== id);
//       return {
//         contacts: newContacts
//       }
//       })
//     }
   


//   getFilterContacts() {
//     const { contacts, filter } = this.state;

//     if (!filter) {
//       return contacts;
//     }
//     const registerFilter = filter.toLocaleLowerCase();
//     const filterContacts = contacts.filter(({ name }) => {
//       const registerName = name.toLocaleLowerCase();
//       const result = registerName.includes(registerFilter);
//       return result;
//     })

//     return filterContacts;
// }



//   render() {
//     const { addContact, handelChange,  removeContact } = this;
//     const { filter } = this.state;
//     const contacts = this.getFilterContacts();

//     return (
//       <div
//         style={{
//           height: '100vh',
//           display: 'flex',
//           flexDirection: 'column',
//           justifyContent: 'center',
//           alignItems: 'center',
//           fontSize: 40,
//           color: '#010101'
//         }}
//       >
        
//         <h2 className={css.title}>Phonebook</h2>
//         <FormAddPhone onSubmit={addContact} />
//        <label className={css.titleInput}>Find contacts by name</label>
        // <input className={css.inputFilter} type='text' name="filter" onChange={handelChange} value={filter} />
//         <h2 className={css.title}>Contacts</h2>
//         <ContactsForm items={contacts} removeContact={removeContact}/>
//       </div>
//     );
//   };
// }
