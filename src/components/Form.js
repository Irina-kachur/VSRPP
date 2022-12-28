import React, { Component } from 'react';
import Autocomplete from 'react-autocomplete';
import "./autocomple.css";

class Form extends Component {

    constructor(props) {
        super(props);

        this.initialState = {
            firstName: '',
            lastName: '',
            email: '',
        };

        this.state = this.initialState;

        this.state = {
            count: 1,
            users: [{ firstName: 'Aleksandr', lastName: 'Ivanov', email: 'ivanov@gmail.com' },
            { firstName: 'Vladislav', lastName: 'Popov', email: 'popov@gmail.com' },
            { firstName: 'Uriy', lastName: 'Kovalev', email: 'kovalev@gmail.com' },
            { firstName: 'Mihail', lastName: 'Sunlest', email: 'sunlest@gmail.com' },
            { firstName: 'Anna', lastName: 'Popova', email: 'popova@gmail.com' }]
        };
    }

    handleChange = (name, value) => {
        this.setState({
            [name]: value
        });
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.handleSubmit(this.state);
        this.setState(this.initialState);
        this.setState((state) => {
            return {
                count: state.count + 1,
            }
        });
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit}>
                <table>
                    <tr>
                        <th></th>
                        <th><label for="firstName">FirstName</label></th>
                        <th><label for="lastName">LastName</label></th>
                        <th><label for="email">Email</label></th>
                    </tr>
                    <tr>
                        <th>
                            <button type="submit">
                                Add User
                            </button>
                        </th>
                        <th>
                            <Autocomplete
                                value={this.state.firstName}
                                items={this.state.users}
                                getItemValue={item => item.firstName}
                                renderMenu={item => (
                                    <div className="dropdown">
                                        {item}
                                    </div>
                                )}
                                renderItem={(item, isHighlighted) =>
                                    <div className={`item ${isHighlighted ? 'selected-item' : ''}`}>
                                        {item.firstName}
                                    </div>
                                }
                                onChange={(event, val) => this.handleChange('firstName', val)}
                                onSelect={val => this.handleChange('firstName', val)}
                            />
                        </th>
                        <th>
                            <Autocomplete
                                value={this.state.lastName}
                                items={this.state.users}
                                getItemValue={item => item.lastName}
                                renderMenu={item => (
                                    <div className="dropdown">
                                        {item}
                                    </div>
                                )}
                                renderItem={(item, isHighlighted) =>
                                    <div className={`item ${isHighlighted ? 'selected-item' : ''}`}>
                                        {item.lastName}
                                    </div>
                                }
                                onChange={(event, val) => this.handleChange('lastName', val)}
                                onSelect={val => this.handleChange('lastName', val)}
                            />
                        </th>
                        <th>
                            <Autocomplete
                                value={this.state.email}
                                items={this.state.users}
                                getItemValue={item => item.email}
                                renderMenu={item => (
                                    <div className="dropdown">
                                        {item}
                                    </div>
                                )}
                                renderItem={(item, isHighlighted) =>
                                    <div className={`item ${isHighlighted ? 'selected-item' : ''}`}>
                                        {item.email}
                                    </div>
                                }
                                onChange={(event, val) => this.handleChange('email', val)}
                                onSelect={val => this.handleChange('email', val)}
                            />
                        </th>
                    </tr>
                </table>
            </form>
        );
    }
}

export default Form;
