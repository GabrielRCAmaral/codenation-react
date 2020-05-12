import React from 'react';


import Topbar from "./components/Topbar.jsx";
import './App.scss';
import Filters from "./components/Filters.jsx";
import Contact from "./components/Contact.jsx";
import Contacts from "./components/Contacts.jsx";

class App extends React.Component {

  constructor(){
    super();
    this.state = {
      contacts: [],
      carregado: false,
    }
    console.log('Constructor')
  }
  
  componentDidMount(){
    const api='https://5e82ac6c78337f00160ae496.mockapi.io/api/v1/contacts'
    fetch(api).then(response => response.json())
    .then(resultado => {
      this.setState({
        carregado:true,
        contacts:resultado
      })
    })
  }

  render() {
    const {carregado,contacts} = this.state;
    if(!carregado){
      return <div>Carregando</div>
    }
    return (
      <React.Fragment>
        <Topbar />
        <Filters />
        <Contacts>{
          contacts.map(contact => (
            <Contact
            key={contact.id}
            avatarContact={contact.avatar}
            nameContact={contact.name}
            phoneContact={contact.phone}
            countryContact={contact.country}
            admissionDateContact={contact.admissionDate}
            companyContact={contact.company}
            departmentContact={contact.department}  
            />

          ))
          
          }
        
        </Contacts>
        
      </React.Fragment>
    )
  }
}

export default App;
