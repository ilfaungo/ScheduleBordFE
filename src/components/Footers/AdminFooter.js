import React from "react";

// react-bootstrap components
import {
  Badge,
  Button,
  ButtonGroup,
  Card,
  Form,
  InputGroup,
  Navbar,
  Nav,
  Pagination,
  Container,
  Row,
  Col,
} from "react-bootstrap";

function AdminFooter() {
  return (
    <>
      <footer className="footer">
        <Container fluid className="pl-4 ml-2">
          <nav>
            <ul className="footer-menu">
              <li>
                <a href="/admin/dashboard" onClick={(e) => e.preventDefault()}>
                  Home
                </a>
              </li>           
            </ul>           
          </nav>
        </Container>
      </footer>
    </>
  );
}

export default AdminFooter;
