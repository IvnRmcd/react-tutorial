import React, {Component} from 'react';
import Aux from '../../../src/hoc/Auxillary'
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component {

    state = {
        ingredients: {
            salad: 1,
            bacon: 1,
            cheese: 2,
            meat: 2
        }
    }
    render(){
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
                <div>Burger Controls</div>
            </Aux>
        );
    }
}

export default BurgerBuilder;