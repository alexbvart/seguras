import { Link } from 'react-router-dom'

const AlertItem = ({title,subtitle="nombre",fecha="08/12/2021",tipo=""}) => {
    return (
        <div className="card mb-2">
            <div class="card-header">
                {title}
            </div>
            <div className="card-body">               
                <h5 className="card-title">{fecha}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{subtitle}</h6>                
                <div className="d-flex justify-content-end">
                    <Link className="btn btn-sm btn-primary" to="#">View</Link>
                </div>
            </div>
        </div>
    );
}
 
export default AlertItem