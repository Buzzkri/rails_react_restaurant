import React from 'react';
import { Container, Header } from "semantic-ui-react";
import MenuList from "./components/MenuList";
import axios from "axios";

class App extends React.Component {
  state = { menus: [
    { id: 1, name: "Breakfast", },
    { id: 2, name: "Lunch", }
  ], };

  componentDidMount() {

    axios.get("/api/menus")
    .then( res => { 
      this.setState({ menus: res. data, });
    })
      .catch(
        // debugger
      )
  };

  addMenu = (name) => {
    axios.post("/api/menus", { name, })
    .then( res => {
      this.setState({ menus: [...this.state.menus, res.data], 
      });
    })
    .catch(
      // debugger
    )
  };

  updateMenu = (id) => {
    axios.put(`/api/menus/${id}`)
    .then( res => {
      const menus = this.state.menus.map( t => {
        if (t.id === id)
          return res.data;
        return t;
      });
      this.setState({ menus, });
    })
  };

  deleteMenu = (id) => {
    axios.delete(`/api/menus/${id}`)
    .then( res => {
      const { menus, } = this.state;
      this.setState({ menus: menus.filter( t=> t.id !== id),
      })
    })
  };


  render() {
    return(
      <Container style={{ padding: "30px 10px", }}>
        <Header as="h1">Restaurant</Header>
      <br />
        {/* <MenuForm addDish={this.addDish} /> */}
      <br />
      <br />
      <MenuList
      menus={this.state.menus}
      updateMenu={this.updateMenu}
      deleteMenu={this.deleteMenu}
      />
      </Container>
    );
  };
};


export default App;
