import Link from 'next/link'
const Header = () => {
    return (
        <>
            <nav className="navbar navbar-dark bg-dark">
                <div className="container-fluid">
                    <div className="container">
                            <Link href="/report">
                                <a className="navbar-brand">
                                    Alertas
                                </a>
                            </Link>
                            <Link href="/notification">
                                <a className="navbar-brand">Notificaciones</a>
                            </Link>
                    </div>
                </div>
            </nav>
        </>
    );
}
export default Header;