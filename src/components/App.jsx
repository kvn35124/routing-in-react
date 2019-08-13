import React, { Fragment } from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import FilmCard from './FilmCard';
import PeopleCard from './PeopleCard';
import Home from './Home';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <Router>
                <Fragment>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/films" component={FilmCard} />
                        <Route exact path="/people" component={PeopleCard} />
                    </Switch>
                </Fragment>

            </Router>
        )
    }
}




export default App;