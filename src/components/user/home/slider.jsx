import React, {Component} from 'react'
import '../../../css/style.css'
import 'jquery/dist/jquery.slim'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'

class SliderHome extends Component {
    render() { 
        return (  
            <React.Fragment>
                <header>
                    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                        <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        </ol>
                        <div className="carousel-inner" role="listbox">

                        <div className="carousel-item active slide1">
                            <div className="carousel-caption d-none d-md-block">
                            <h3 className="display-4">First Slide</h3>
                            <p className="lead">This is a description for the first slide.</p>
                            </div>
                        </div>
                        <div className="carousel-item slide2">
                            <div className="carousel-caption d-none d-md-block">
                            <h3 className="display-4">Second Slide</h3>
                            <p className="lead">This is a description for the second slide.</p>
                            </div>
                        </div>
                        <div className="carousel-item slide3">
                            <div className="carousel-caption d-none d-md-block">
                            <h3 className="display-4">Third Slide</h3>
                            <p className="lead">This is a description for the third slide.</p>
                            </div>
                        </div>
                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                            </a>
                        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                            </a>
                    </div>
                </header>
            </React.Fragment>
        );
    }
}
 
export default SliderHome;