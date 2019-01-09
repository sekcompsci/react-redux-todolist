import React from 'react';

class TextInput extends React.Component {
    state = {
        text: ""
    };

    handleSubmit = e => {
        const text = e.target.value.trim();
        if (text.length <= 0) return;
        if (e.key === "Enter") {
            this.props.addTodo(this.props.counter, text);
            this.props.incrementBy();
            this.setState({ text: "" });
        }
    };

    handleChange = e => {
        this.setState({ text: e.target.value });
    };

    render() {
        return (
            <input
                className="new-todo"
                placeholder="What needs to be done?"
                value={this.state.text}
                onChange={this.handleChange}
                onKeyDown={this.handleSubmit}
            />
        );
    }
}

export default TextInput;