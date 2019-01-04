import React, { Component } from 'react';

class AddRecipe extends Component {

    addRecipe(){
        this.setState(prevState => ({
            currentRecipeList: 
        })
            )
    }

    render() {
        return (
             <div className="static-modal">
                <Modal.Dialog>
                    <Modal.Header>
                    <Modal.Title>Modal title</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                       <input 
                       type="text"
                       value={this.state.recipeName}

                       /> 
                    </Modal.Body>

                    <Modal.Footer>
                    <Button bsStyle="primary" onClick=this.bind.>Add Recipe</Button>
                    <Button>Close</Button>
                    </Modal.Footer>
                </Modal.Dialog>
            </div>
        )
    }

}

export default AddRecipe;