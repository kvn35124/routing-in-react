import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import FilmCard from './FilmCard';
import PeopleCard from './PeopleCard';
import Home from './Home';
import Description from './Description';

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
                        <Route exact path="/description/:id" component={Description} />
                    </Switch>
                </Fragment>

            </Router>
        )
    }
}




export default App;