
import React, { useEffect, useCallback } from "react";
// react-bootstrap components
import {
  Badge,
  Button,
  ButtonGroup,
  Card,
  Dropdown,
  Form,
  InputGroup,
  Navbar,
  Nav,
  Pagination,
  Container,
  Row,
  Col,
  Collapse,
} from "react-bootstrap";
import { logout } from "../../action/getData";
import { history } from "../../Utils/history";
import { connect } from "react-redux";
import { useDispatch } from "react-redux"

const mapStateToProps = state => ({
  ...state
});

function AdminNavbar() {
  const dispatch = useDispatch()
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  
  useEffect(() => {
    dispatch(logout())
  
  });
 
  const handleLogOut = useCallback(
    () =>{ 
      dispatch({ type: 'LOG_OUT' }) 
    history.push("/");
    window.location.reload(true);} ,
    [dispatch]
  )


 
  return (
    <>
      <Navbar expand="lg">
        <Container fluid>
          <div className="navbar-wrapper">
            <div className="navbar-minimize">
              <Button
                className="btn-fill btn-round btn-icon d-none d-lg-block bg-dark border-dark"
                variant="dark"
                onClick={() => document.body.classList.toggle("sidebar-mini")}
              >
                <i className="fas fa-ellipsis-v visible-on-sidebar-regular"></i>
                <i className="fas fa-bars visible-on-sidebar-mini"></i>
              </Button>
              <Button
                className="btn-fill btn-round btn-icon d-block d-lg-none bg-dark border-dark"
                variant="dark"
                onClick={() =>
                  document.documentElement.classList.toggle("nav-open")
                }
              >
                <i className="fas fa-ellipsis-v visible-on-sidebar-regular"></i>
                <i className="fas fa-bars visible-on-sidebar-mini"></i>
              </Button>
            </div>
           
          </div>
          <button
            className="navbar-toggler navbar-toggler-right border-0"
            type="button"
            onClick={() => setCollapseOpen(!collapseOpen)}
          >
            <span className="navbar-toggler-bar burger-lines"></span>
            <span className="navbar-toggler-bar burger-lines"></span>
            <span className="navbar-toggler-bar burger-lines"></span>
          </button>
          <Navbar.Collapse className="justify-content-end" in={collapseOpen}>
           
            <Nav navbar>
              <Dropdown as={Nav.Item}>
                <Dropdown.Toggle
                  as={Nav.Link}
                  id="dropdown-165516306"
                  variant="default"
                >
                  <i className="nc-icon nc-single-02"></i>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                 
                  <Dropdown.Item
                  
                    onClick={handleLogOut}
                  >
                    Logout
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
             
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
export default connect(
  mapStateToProps,
  null
)(AdminNavbar);
