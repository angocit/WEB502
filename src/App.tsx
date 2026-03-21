import { Route, Routes } from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Products from './components/Products'
import ProductAdd from './components/ProductAdd'
import Home from './components/Home';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
function App() {
  return (
    <>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">Trang chủ</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/products">Danh sách</Nav.Link>
            <Nav.Link href="/products/add">Thêm</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Container>
    <Routes>
      <Route path='' Component={Home}/>
      <Route path='products' Component={Products}/>
      <Route path='products/add' Component={ProductAdd}/>
    </Routes>
    </Container>
    </>
  )
}

export default App
