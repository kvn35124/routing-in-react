import React from "react";
import { Link } from 'react-router-dom';

let Home = () => {
    return (
        <>
            <div class="jumbotron row d-flex justify-content-center">
                <h1 class="display-4">WELCOME HOME!</h1>
                <p class="lead justify-content-center">This demonstrates how to use routing in react!</p>
                <hr class="my-4" />
                <Link to="/films" className="btn btn-primary btn-block m-2">View Films</Link>
                <Link to="/people" className="btn btn-primary btn-block m-2">View People</Link>
            </div>
        </>
    )
}


export default Home