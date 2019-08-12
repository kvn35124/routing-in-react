import React, {Fragment} from 'react';
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom';

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
                    <Link className="btn btn-primary m-2">Go Home</Link>
                    <Link className="btn btn-primary m-2">View Films</Link>
                    <Link className="btn btn-primary m-2">View People</Link>
                    <Switch>
                        <Route />
                        <Route />
                    </Switch>
                </Fragment>
            </Router>
        )
    }
}




export default App;