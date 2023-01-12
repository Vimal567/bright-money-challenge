import "./Header.css";
import {Navbar,Container} from 'react-bootstrap';

const Header = () => {
    return(
        <div>
          <Navbar className='fixed-top header' collapseOnSelect expand="md" id="navbg"  variant="dark">
            <Container>
              <span className="main-heading">BILL MANAGEMENT</span>
            </Container>
          </Navbar>
        </div>
      )
}


export default Header;