import React from 'react';
import { Link } from 'react-router-dom';

class PeopleCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            people: []
        }
    }

    async componentDidMount() {
        try {
            let r = await fetch("https://ghibliapi.herokuapp.com/people");
            let people = await r.json();
            this.setState({ people: people });
        } catch (error) {
            console.log(error);
        }
    }

    render() {
        return (
            <>
                <container className="row justify-content-center">
                    <div className="col-md-4">
                        <h1>People</h1>
                        <navbar>
                            <Link to="/" className="btn btn-primary m-2">Go Home</Link>
                            <Link to="/films" className="btn btn-primary m-2">View Films</Link>
                        </navbar>
                        <section className="row justify-content-center">
                            {this.state.people.map(person => {
                                return (
                                    <div className="card border border-dark m-2">
                                        <div className="card-body bg-success">
                                            <h5 className="card-title text-center">{person.name}</h5>
                                            <p className="card-text">{person.gender}</p>
                                        </div>
                                    </div>
                                )
                            })}
                        </section>
                    </div>

                </container>

            </>
        )
    }

}

export default PeopleCard;