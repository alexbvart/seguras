import Link from 'next/link'
import { Nav, NavDropdown } from 'react-bootstrap';

const HeaderAdmin = () => {
    const handleSelect = (eventKey) => {};

    return (
        <>
                        <Nav activeKey="1" onSelect={handleSelect}>
                <Nav.Item>
                    <Nav.Link eventKey="1" href="#">
                        <Link href="/alert">
                            <a>Alertas</a>
                        </Link>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="1" href="#">
                        <Link href="/notification">
                            <a>Notificaciones</a>
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
                <NavDropdown title="Personal de monitoreo" id="nav-dropdown">
                    <NavDropdown.Item eventKey="4.1">
                        <Link href="/monitor/new">
                            <a>Registrar</a>
                        </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item eventKey="4.2"><Link href="/monitor/">
                        <a>Listar</a>
                    </Link></NavDropdown.Item>
                    {/* <NavDropdown.Item eventKey="4.3">Something else here</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>*/}
                </NavDropdown>
                <NavDropdown title="Instituciones" id="nav-dropdown">
                    <NavDropdown.Item eventKey="4.1">
                        <Link href="/institution/new">
                            <a>Registrar</a>
                        </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item eventKey="4.2"><Link href="/institution/">
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
export default HeaderAdmin;