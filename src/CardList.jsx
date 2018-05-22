import React, {Component} from 'react';
import { Card } from 'semantic-ui-react';
import Popup from "reactjs-popup";
import { connect } from 'react-redux';
import * as cardActions from './actions/card';
import { bindActionCreators } from 'redux';


class CardList extends Component {

    render(){
        const{
            cards,
            id,
            
        } = this.props
    return(
        <Card  >
            {
                cards.map(card => (
                    <Card.Content key={card.id}>
                      <Card.Header>{card.title}<button>remove </button></Card.Header>
                      <Card.Meta>{card.description}</Card.Meta>
                      <Popup trigger={<button>Change card</button>} position="right center">
                        <Card.Content>
                            <Card.Header><input type="head"  /></Card.Header>
                            <Card.Header><input type="text"  /></Card.Header>
                            <Card.Meta><input type="submit" value="Submit"  /></Card.Meta>
                        </Card.Content>
                        </Popup>
                    </Card.Content>
                ))
                
            }
             
        </Card>
    )
}
}


const mapStateToProps = ({}) => ({
    
  });
    
  const mapDispatchToPtops = dispatch => ({
    ...bindActionCreators(cardActions, dispatch),
  });
  
  export default connect(mapStateToProps, mapDispatchToPtops)(CardList);