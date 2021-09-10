import Link from 'next/link'
const HeaderInstitution = () => {
    return (
        <>
            <nav className="navbar navbar-dark bg-dark">
                <div className="container-fluid">
                    <div className="container">
                            <Link href="/notification">
                                <a className="navbar-brand">
                                Notificaciones
                                </a>
                            </Link>
                            <Link href="/police">
                                <a className="navbar-brand">Personal de policia</a>
                            </Link>
                    </div>
                </div>
            </nav>
        </>
    );
}
export default HeaderInstitution;