import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import CartWidget from '../components/CartWidget';

function NavBar() {
    return (
    <Navbar className="py-0 navbar navbar-dark sticky-top navbar-expand-lg color__negro margen2">
        <div className="container-fluid">
        <Link className="navbar-brand" to={"/"}><img src="https://d3ugyf2ht6aenh.cloudfront.net/stores/002/635/418/themes/common/logo-298030976-1671460819-2824a4b461bcf501a809394e4961ffdc1671460819-320-0.png?0" alt="Andino Outfiters" width={100} /></Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="fw-bold justify-content-center collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Link className="nav-link" to={"/"}>HOME</Link>
                    <Link className="nav-link" to={"/category/remeras"}>Remeras</Link>
                    <Link className="nav-link" to={"/category/cargos"}>Cargos</Link>
                    <Link className="nav-link" to={"/category/buzos"}>Buzos</Link>
                    <Link className="nav-link" to={"/contacto.html"}>Contáctanos</Link>
                </div>
            </div>
            <CartWidget/>
        </div>
    </Navbar>
    
    );
}
export default NavBar;

