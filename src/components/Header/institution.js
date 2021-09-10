import Link from 'next/link'
import { Nav, NavDropdown } from 'react-bootstrap';
const HeaderInstitution = () => {
    const handleSelect = (eventKey) => {};

    return (
        <>
            <Nav activeKey="1" onSelect={handleSelect} className="navbar navbar-dark bg-dark">
                <Nav.Item>
                    <Nav.Link eventKey="1" href="#/home">
                        <Link href="/notification">
                            <a>Notificationes</a>
                        </Link>
                    </Nav.Link>
                </Nav.Item>
                {/*                 <Nav.Item>
                    <Nav.Link eventKey="2" title="Item">
                        NavLink 2 content
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="3" disabled>
                        NavLink 3 content
                    </Nav.Link>
                </Nav.Item> */}
                <NavDropdown title="Personal de policia" id="nav-dropdown">
                    <NavDropdown.Item eventKey="4.1">
                        <Link href="/police/NEW">
                            <a>Registrar</a>
                        </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item eventKey="4.2"><Link href="/police">
                        <a>Listar</a>
                    </Link></NavDropdown.Item>
                    {/* <NavDropdown.Item eventKey="4.3">Something else here</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>*/}
                </NavDropdown>

            </Nav>
        </>
    );
}
export default HeaderInstitution;