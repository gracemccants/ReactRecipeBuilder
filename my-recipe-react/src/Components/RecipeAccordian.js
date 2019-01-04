import React, { Component } from 'react';
import { Panel, PanelGroup } from 'react-bootstrap';


class RecipeAccordian extends Component {

    render() {
        
        const recipeList = [{
            name: "",
            ingredients: []
        }]
        
        return (
            <div>
                {recipeList.map((recipe, id) => {
                    return (
                        <PanelGroup accordion id="accordion-example">
                            <Panel bsStyle="success" eventKey={id+1} key={id}>
                                <Panel.Heading>
                                    <Panel.Title toggle>{recipeList.name}</Panel.Title>
                                </Panel.Heading>
                                <Panel.Body collapsible>
                                {recipeList.ingredients.map((ingredient, key) => {
                                    return (
                                        <button key={id}>{ingredient}</button>
                                    )
                                })
                                }
                                </Panel.Body>
                            </Panel>
                        </PanelGroup>
                    )
                    })
                }
            </div>
        )
    }

}

export default RecipeAccordian;