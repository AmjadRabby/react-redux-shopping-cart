import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons";
import { connect } from 'react-redux';
import { getNumbers } from '../../redux/actions/getAction';

const Header = (props) => {
  console.log(props)
  return (
    <Navbar className="header-container " expand="lg">
      <div className="overwrite"></div>
      <Container>
        <Navbar.Brand className="text-white" href="#home">
          SHOPPING CARTS
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto text-white">
            <Nav.Link className="text-white bg-dark m-1 p-1" href="#home">
              HOME
            </Nav.Link>
            <Nav.Link className="text-white bg-dark m-1 p-1" href="#link">
              ABOUT
            </Nav.Link>
            <Nav.Link className="text-white bg-dark m-1 p-1" href="#link">
              {" "}
            CART{" "}    <FontAwesomeIcon icon={faShoppingBasket} /> 
               <span className=""> {props.cartProps.cartNumber} </span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};


const mapStateToProps = state => ({
    cartProps: state.cartState
})

export default connect(mapStateToProps, {getNumbers})(Header);
