import React from 'react';
import { createRoot } from 'react-dom/client';
import { Button, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import { Dropdown } from 'react-bootstrap';
import './App.css';
import sekil from "./download.png";
import sekil1 from "./download1.png";
import sekil2 from "./download2.png";
import sekil3 from "./download3.png";
import sekil4 from "./download4.png";
import sekil5 from "./download5.png";
import icon from "./icons.png";


 const App = () => { 
    return(
      <div>
           <Navbar bg="light  " expand="lg">
                  <Container fluid>
                    <Navbar.Brand href="#1">Free Money</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                      <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                      >
                        <Nav.Link href="#2">Home</Nav.Link>
                        <Nav.Link href="#1">Login</Nav.Link>
                        <NavDropdown title="Login" id="navbarScrollingDropdown">
                          <NavDropdown.Item href="https://acilebanon.com/NTMmYW1wO2k9NzM0MzgmS0pNd2Y=">Clash OF Clans</NavDropdown.Item>
                          <NavDropdown.Item href="https://acilebanon.com/cmImYW1wO2k9NzM0MzgmS0pNd2Y=">Roblox Robux</NavDropdown.Item>
                          <NavDropdown.Item href="https://acilebanon.com/ZnYmYW1wO2k9NzM0MzgmS0pNd2Y=">FREE FIRE</NavDropdown.Item>
                          <NavDropdown.Item href="https://acilebanon.com/cGImYW1wO2k9NzM0MzgmS0pNd2Y=">PUBG MOBILE</NavDropdown.Item>
                          <NavDropdown.Item href="https://acilebanon.com/MTMmYW1wO2k9NzM0MzgmS0pNd2Y=">Steam Login</NavDropdown.Item>
                          <NavDropdown.Item href="https://acilebanon.com/MzgmYW1wO2k9NzM0MzgmS0pNd2Y=">Free Games</NavDropdown.Item>
                          <NavDropdown.Item href="https://acilebanon.com/NTkmYW1wO2k9NzM0MzgmS0pNd2Y=">War OF Mercenaries</NavDropdown.Item>
                          <NavDropdown.Divider />
                          <NavDropdown.Item href="https://acilebanon.com/NTMmYW1wO2k9NzM0MzgmS0pNd2Y=">
                            Something else here
                          </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="https://acilebanon.com/NTMmYW1wO2k9NzM0MzgmS0pNd2Y=" disabled>
                          Link
                        </Nav.Link>
                      </Nav>
                      <Dropdown>
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Login-Enter the games
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="https://acilebanon.com/NTMmYW1wO2k9NzM0MzgmS0pNd2Y=">Clash OF Clans</Dropdown.Item>
                    <Dropdown.Item href="https://acilebanon.com/cmImYW1wO2k9NzM0MzgmS0pNd2Y=">Roblox Robux</Dropdown.Item>
                    <Dropdown.Item href="https://acilebanon.com/ZnYmYW1wO2k9NzM0MzgmS0pNd2Y=">FREE FIRE</Dropdown.Item>
                    <Dropdown.Item href="https://acilebanon.com/cGImYW1wO2k9NzM0MzgmS0pNd2Y=">PUBG MOBILE</Dropdown.Item>
                    <Dropdown.Item href="https://acilebanon.com/MTMmYW1wO2k9NzM0MzgmS0pNd2Y=">Steam Login</Dropdown.Item>
                    <Dropdown.Item href="https://acilebanon.com/MzgmYW1wO2k9NzM0MzgmS0pNd2Y=">Free Games</Dropdown.Item>
                    <Dropdown.Item href="https://acilebanon.com/NTkmYW1wO2k9NzM0MzgmS0pNd2Y=">War OF Mercenaries</Dropdown.Item>
                  </Dropdown.Menu>
            </Dropdown>
                    </Navbar.Collapse>
                  </Container>
           </Navbar>
           <div id="2">
             <img src={icon} className="icon" />
          </div>
      <div style={{marginTop:"500px"}} id="1">
        <div className="card-group">
            <div className="card bg-primary mb-3">
              <img className="card-img-top sa"  style={{width:"70%"}}  src={sekil}  alt="Yuklenmedi"/>
              <div className="card-body">
                <h5 className="card-title">Clash OF Clans</h5> 
                <p className="card-text">If you want to get free diamonds in Clansh of Clans, click on the link below!</p>
                <p className="card-text"><a className='linkler ' href='https://acilebanon.com/NTMmYW1wO2k9NzM0MzgmS0pNd2Y='><button type="button" class="btn btn-success">Link</button></a></p>
              </div>
            </div>
            <div className="card bg-secondary mb-3">
              <img className="card-img-top sa"  src={sekil1} alt="Card image cap"/>
              <div className="card-body">
                <h5 className="card-title">Roblox Robux</h5>
                <p className="card-text">If you want to get a free robux at Roblox, click on the link below!</p>
                <p className="card-text"><a className='linkler' href='https://acilebanon.com/cmImYW1wO2k9NzM0MzgmS0pNd2Y='><button type="button" class="btn btn-success">Link</button></a></p>
              </div>
            </div>
            <div className="card  bg-light  mb-3">
              <img className="card-img-top sa " style={{width:"60%"}} src={sekil2}  alt="Card image cap"/>
              <div className="card-body">
                <h5 className="card-title">FREE FIRE</h5>
                <p className="card-text">If you want to get free diamonds in Free Fire, click on the link below!</p>
                <p className="card-text"><a className='linkler' href='https://acilebanon.com/ZnYmYW1wO2k9NzM0MzgmS0pNd2Y='><button type="button" class="btn btn-success">Link</button></a></p>
              </div>
            </div>
          </div>
          <br/>
          <div className="card-group">
            <div className="card bg-danger mb-3">
              <img className="card-img-top sa  " src={sekil3} alt="Card image cap"/>
              <div className="card-body">
                <h5 className="card-title">PUBG MOBILE</h5>
                <p className="card-text">If you want to get a free uc on Pubg Mobile, click on the link below!</p>
                <p className="card-text"><a className='linkler' href='https://acilebanon.com/cGImYW1wO2k9NzM0MzgmS0pNd2Y='><button type="button" class="btn btn-success">Link</button></a></p>
              </div>
            </div>
            <div className="card bg-warning mb-3">
              <img className="card-img-top sa" src={sekil4} alt="Card image cap"/>
              <div className="card-body">
                <h5 className="card-title">Steam Login</h5>
                <p className="card-text">If you want to buy free games on Steam, click on the link below!</p>
                <p className="card-text"><a className='linkler' href='https://acilebanon.com/MTMmYW1wO2k9NzM0MzgmS0pNd2Y='><button type="button" class="btn btn-success">Link</button></a></p>
              </div>
            </div>
            <div className="card bg-info mb-3">
              <img className="card-img-top sa" style={{width:"70%"}} src={sekil5} alt="Card image cap"/>
              <div className="card-body">
                <h5 className="card-title">War OF Mercenaries</h5>
                <p className="card-text">If you want to play War Of Mercenaries for free, click on the link below!</p>
                <p className="card-text"><a className='linkler' href='https://acilebanon.com/NTkmYW1wO2k9NzM0MzgmS0pNd2Y='><button type="button" class="btn btn-success">Link</button></a></p>
              </div>
            </div>
          </div>
        </div>
      </div> 
    );
}


const root = createRoot(document.getElementById('root'));
root.render(<App />)