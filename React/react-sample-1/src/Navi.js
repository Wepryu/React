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
        {/*Props ve Encapsulations çalışmalar */}
        <NavbarBrand href="/">{this.props.info.menu_1}</NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              {/*Props ve Encapsulations çalışmalar */}
              <NavLink href="/Hakkinda/">{this.props.info.menu_2}</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/Teknoloji/">{this.props.info.menu_3}</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                {this.props.info.menu_4[0]}
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem> {this.props.info.menu_4[1]}</DropdownItem>
                <DropdownItem> {this.props.info.menu_4[2]}</DropdownItem>
                <DropdownItem divider />
                <DropdownItem> {this.props.info.menu_4[3]}</DropdownItem>
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
