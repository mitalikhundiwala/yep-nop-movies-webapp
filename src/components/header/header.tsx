import React, { FunctionComponent, useState } from "react";
import { Link } from "react-router-dom";
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
      <Navbar color="light" light expand="sm">
        <NavbarBrand href="/">Yep Nop Movies</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem className="d-block d-sm-none">{user.name}</NavItem>
            <NavItem>
              <Link className="d-block d-sm-none nav-link" to="#" onClick={startLogout}>
                Logout
              </Link>
            </NavItem>
            <UncontrolledDropdown nav inNavbar className="d-none d-sm-block">
              <DropdownToggle nav caret>
                <img src={user.photoURL} className="user-photo" />
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>{user.name}</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  <Link className="nav-link" to="#" onClick={startLogout}>
                    Logout
                  </Link>
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
  return {
    user: state.auth.user
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
