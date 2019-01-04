import React, { Component } from 'react';
import RecipeAccordian from '../Components/RecipeAccordian.js';
import { Button } from 'react-bootstrap';

class Home extends Component {

    render() {
        return (
            <div className="homeWrapper">
                <RecipeAccordian />
                <Button bsStyle="primary">Add Recipe</Button>
            </div>
        )
    }

}

export default Home;