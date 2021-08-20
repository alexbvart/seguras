import Link from 'next/link'
const Header = () => {
    return (
        <>
            <nav className="navbar navbar-dark bg-dark">
                <div className="container-fluid">
                    <div className="container">
                            <Link href="/">
                                <a className="navbar-brand">
                                    Alertas
                                </a>
                            </Link>
                            <Link href="/mapa">
                                <a className="navbar-brand">Mapa</a>
                            </Link>
                    </div>
                </div>
            </nav>
        </>
    );
}
export default Header;