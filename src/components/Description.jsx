import React from 'react';
import {Link} from 'react-router-dom';


class Description extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            film: {}
        }
    }

async componentDidMount() {
    let r = await fetch(`https://ghibliapi.herokuapp.com/films/${this.props.match.params.id}`);
    let description = await r.json();
    this.setState({film : description}) 

    
}

    render() {
        return (
            <>
                <section className="row justify-content-center">
                    <article className="col-md-6">
                        <div className="card m-2 border border-dark shadow bg-primary">
                            <div className="card-body">
                                <h1 className="card-title center-text">{this.state.film.title}</h1>
                                    <h4 className="card-text">Description: {this.state.film.description}</h4>
                                    <a href={this.state.film.url} className="text-danger">{this.state.film.url}</a>
                            </div>
                        </div>
                        <Link to="/films" className="btn btn-primary m-2">Back to Films Page</Link>
                    </article>
                </section>
            </>
        )
    }
      
}


export default Description;

