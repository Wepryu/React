import React, { Component } from "react";
import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

export default class Navi extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Oğuzhan KOCAKAŞ</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/Hakkinda/">Hakkında</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/Teknoloji/">Teknoloji</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Blog
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>Blog Konu 1</DropdownItem>
                  <DropdownItem>Blog Konu 2</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Önemli 1</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      // <div>
      //     <h1>  Üst menü barın oldğu yer</h1>
      // </div>
    );
  }
}
