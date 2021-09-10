import useSession from '@hooks/useSesion';
import logout from '@services/logout';
import SessionContext from 'context/session/SessionContext';
import Link from 'next/link'
import { useContext, useEffect } from 'react';

import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import HeaderAdmin from './admin'
import HeaderControl from './control';
import HeaderInstitution from './institution';
import { header, headerspaces } from './styles.module.css'

const TYPES_HEADER = {
    "admin": <HeaderAdmin />,
    "user-t2": <HeaderControl />,
    "user-t3": <HeaderInstitution />
}

const Header = ({ roles = "user-t2" }) => {
    const usera = useSession();
    const { user, setUser, getUser } = useContext(SessionContext)
    useEffect(() => {
        getUser()
    }, [])
    const existSesion = () => {
        setUser(null)
        logout()
    }

    return (
        <>
            <Navbar sticky="top" expand="lg" className={header} >
                <Container >
                    <header className={headerspaces}>
                        {TYPES_HEADER[roles]}
                        <Nav className="justify-content-end">
                            <Navbar.Text>
                                {user ?
                                    <NavDropdown title={user.username} id="nav-dropdown">
                                        <NavDropdown.Item>
                                            <Link href="/login">
                                                <a><div onClick={() => existSesion()}>Cerrar sesión</div></a>
                                            </Link>
                                        </NavDropdown.Item>
                                    </NavDropdown>
                                    :
                                    <Link href="/login">
                                        <a>Iniciar sesión</a>
                                    </Link>}
                            </Navbar.Text>
                        </Nav>
                    </header>
                </Container>
            </Navbar>
        </>
    );
}
export default Header;