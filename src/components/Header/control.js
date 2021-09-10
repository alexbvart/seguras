import Link from 'next/link'
const HeaderControl = () => {
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
                            <Link href="/monitor">
                                <a className="navbar-brand">Personal de monitoreo</a>
                            </Link>
                    </div>
                </div>
            </nav>
        </>
    );
}
export default HeaderControl;