import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Cards.css';
import CheckList from './CheckList/CheckList';
import Persons from './Persons/Persons';

class Cards extends Component {
    
   
    render() {
        return (
            <div className="Cards">
                <div className="container">
                    <CheckList list={this.props.list} changed={this.props.onPersonChange} />
                    <Persons list={this.props.list} changed={this.props.onPersonChange} count={this.props.count} />
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        list: state.locations,
        count: state.selectCount
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onPersonChange: (loc, id) => dispatch({type: 'PERSON_CHANGE', currentData: {loc: loc, id:id}})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cards);