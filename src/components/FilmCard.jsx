import React from 'react';
import { Link } from 'react-router-dom';

class FilmCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            films: []
        }
    }

    async componentDidMount() {
        try {
            let r = await fetch("https://ghibliapi.herokuapp.com/films");
            let films = await r.json();
            this.setState({ films: films })
        } catch (error) {
            console.log(error);
        }
    }


    render() {
        return (
            <>
                <container className="row d-flex justify-content-center">
                    <h1>Films</h1>
                    <navbar>
                        <Link to="/" className="btn btn-primary m-2">Go Home</Link>
                        <Link to="/people" className="btn btn-primary m-2">View People</Link>
                    </navbar>
                    <section className="row justify-content-center">
                        {this.state.films.map(film => {
                            console.log(film);
                            console.log(this.props);
                            return (
                                <div className="card border border-dark m-2">
                                    <div className="card-body bg-success">
                                        <h5 className="card-title text-center">{film.title}</h5>
                                        <p className="card-text">{film.description}</p>
                                        <Link to="" className="btn btn-primary">Discription</Link>
                                    </div>
                                </div>
                            )
                        })}
                    </section>
                </container>

            </>
        )
    }

}


export default FilmCard