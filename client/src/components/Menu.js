import React from 'react';
import { Button, Header, Icon, } from 'semantic-ui-react';

const Menu = ({ id, name, updateMenu, deleteMenu, }) => (
  <div style={styles.flex}>
    <div style={styles.flex}>
      <Header as="h2" style={{ marginLeft: "15px", }}>{ name }</Header>
    </div>
    <Button
    icon
    color="red"
    size="tiny"
    onClick={() => deleteMenu(id)}
    style={{ marginLeft: "15px", }}
    >
      <Icon name="trash" />
    </Button>
  </div>
  
);

const styles = {
  pointer: {
    cursor: "pointer",
  },
  flex: {
    display: "flex",
    alignItems: "center",
  },
}

export default Menu;