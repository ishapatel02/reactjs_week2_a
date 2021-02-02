import React, { Component } from 'react';
//importing navbar from reactstrap
import {Navbar, NavbarBrand} from 'reactstrap';
//importing Menu Component from Components folder
import Menu from './MenuComponent';
//import './App.css';

//importing dishes from shared folder
import DishDetail from './DishdetailComponent';
import { DISHES } from '../shared/dishes';

class Main extends Component {

   constructor(props) {
     super(props);    
     this.state = {
        dishes: DISHES,
        selectedDish: null
     };
   }

    onDishSelect(dishId) {
            /*When we have to change the state we have to use setState*/
            this.setState({ selectedDish: dishId });
        }

render() {
  return (
    <div>
       <Navbar dark color="primary">
          <div className="container">
             <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
       </Navbar>
       {/*to render the menu on the screen*/}
       <Menu dishes={this.state.dishes}
          onClick={(dishId)=>this.onDishSelect(dishId)} />
       <DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]}/>
    </div>
  );
}
}

export default Main;
