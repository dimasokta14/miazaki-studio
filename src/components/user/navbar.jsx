import React, {Component} from 'react'
import '../../css/style.css'
import 'bootstrap/dist/css/bootstrap.min.css'

class Navbar extends Component {
    render() { 
        return ( 
            <React.Fragment>
                <nav className="navbar navbar-expand-lg navbar-white bg-white fixed-top text-black padding-nav">
                    <div className="container">
                        <a className="navbar-brand" href="#">Miazaki Studio</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarResponsive">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item active">
                                <a className="nav-link" href="#">Work
                                        <span className="sr-only">(current)</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                <a className="nav-link" href="#">About</a>
                                </li>
                                <li className="nav-item">
                                <a className="nav-link" href="#">Services</a>
                                </li>
                                <li className="nav-item">
                                <a className="nav-link" href="#">Contact</a>
                                </li>
                            </ul>
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <a className="nav-link" href="#"><i className="fab fa-instagram"></i></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#"><i className="fab fa-behance"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </React.Fragment>   
         );
    }
}
 
export default Navbar;