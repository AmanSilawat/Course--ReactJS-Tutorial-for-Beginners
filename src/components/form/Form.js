import React, { Component } from 'react';

class Form extends Component {
    constructor() {
        super();

        this.state = {
            name: '',
            commit: '',
            topic: 'ruby'
        }

        this.nameHandler = this.nameHandler.bind(this);
        this.commitHandler = this.commitHandler.bind(this);
        this.topicHandler = this.topicHandler.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
    }

    nameHandler(event) {
        this.setState({
            name: event.target.value
        });
    }

    commitHandler(event) {
        this.setState({
            commit: event.target.value
        });
    }

    topicHandler(event) {
        this.setState({
            topic: event.target.value
        });
    }

    submitHandler(event) {
        event.preventDefault();
        alert(`${this.state.name}, ${this.state.commit}, ${this.state.topic}`);
    }

    render() {
        return (
            <form onSubmit={this.submitHandler}>
                <div>
                    <label>
                        Name:
                        <input type="text" value={this.state.name} onChange={this.nameHandler} />
                    </label>
                </div>
                <div>
                    <label>
                        Comment:
                     <textarea value={this.state.commit} onChange={this.commitHandler}></textarea>
                    </label>
                </div>
                <div>
                    <label>
                        Topic:
                         <select value={this.state.topic} onChange={this.topicHandler}>
                            <option>php</option>
                            <option>nodejs</option>
                            <option>ruby</option>
                            <option>python</option>
                        </select>
                    </label>
                </div>
                <div>
                    <input type="submit" />
                </div>
            </form>
        )
    }
}

export default Form;