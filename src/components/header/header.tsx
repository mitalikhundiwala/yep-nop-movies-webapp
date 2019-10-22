import React, { FunctionComponent, useState } from "react";
import { connect } from "react-redux";
import {
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
import { startLogout } from "../../actions/auth";
import { IStore } from "../../store/configureStore";
import User from "../../models/user";

import "./header.scss";

interface IProps {
  startLogout: () => Promise<void>;
  user: User;
}

export const Header: FunctionComponent<IProps> = ({ startLogout, user }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <header className="header">
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Yep Nop Movies</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                <img src={user.photoURL} className="user-photo" />
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>{user.name}</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  <a className="nav-link" href="#" onClick={startLogout}>
                    Logout
                  </a>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </header>
  );
};

const mapDispatchToProps = (dispatch): Partial<IProps> => ({
  startLogout: () => {
    return dispatch(startLogout());
  }
});

const mapStateToProps = (state: IStore): Partial<IProps> => {
  console.log(state.auth.user);
  return {
    user: state.auth.user
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
