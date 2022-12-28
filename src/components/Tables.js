import React, { Component } from 'react';
import Table from './Table';
import Form from './Form';
import store from '../store/index';
import { useNavigate } from 'react-router-dom';

class Tables extends Component {
    state = {
        characters: []
    };

    removeCharacter = index => {
        const { characters } = this.state;
    
        this.setState({
            characters: characters.filter((character, i) => { 
                return i !== index;
            })
        });
    }

    logout = () =>{
        const navigate = useNavigate();
        navigate("/");
    }

    handleSubmit = character => {
        this.setState({characters: [...this.state.characters, character]});
    }

    buttonStyle = {
        position: 'absolute',
        top: '-15px',
        left: '90%'
    }

    render() {
        const { characters } = this.state;
        
        return (
            <div className="container">
                <h3>Add new User</h3>
                <h3 style={this.buttonStyle}><button onClick={function(){
                    store.dispatch({type: "logOut"})
                    window.location.href = '/';
                }}
                >Logout</button> </h3>
                <Form handleSubmit={this.handleSubmit} />
                <h4>Users</h4>
                <Table
                    characterData={characters}
                    removeCharacter={this.removeCharacter}
                />
            </div>
        );
    }
}

export default Tables;