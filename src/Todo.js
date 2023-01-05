import { Component } from "react";

export class Todo extends Component {
    state = {
        userInput: " ",
        todoList: []
    }

    onChangeEvent = (e) => {
        this.setState({userInput: e})
        console.log(e)
    }

    onFormSubmit = (e) => {
        e.preventDefault();
    }

    addItem = (input) => {
        if (input === "") {
            alert("Please enter what's on your agenda")
        }
        else {
            let listArray = this.state.todoList;
            listArray.unshift(input);
            this.setState({todoList: listArray, userInput: " "})
        }
    }

    crossedWord = (event) => {
        const li = event.target;
        li.classList.toggle('crossed');
    }

    deleteItems = () => {
        let listArray = this.state.todoList;
        listArray = [];
        this.setState({todoList: listArray})
    }

    render() {
        return (
        <div className="container">
            <form onSubmit={this.onFormSubmit}>
                <div className="input-container">
                    <input type="text" placeholder="e.g. study" onChange={(e) =>{this.onChangeEvent(e.target.value)}} value={this.state.userInput} />
                    <button onClick={() => this.addItem(this.state.userInput)} className="add" >➕</button>
                </div>
                <div>
                    <ul>
                        {this.state.todoList.map((item,index) => (
                            <li onClick={this.crossedWord} key={index} className="input-container">
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="container">
                    <button onClick={() => this.deleteItems()} className="delete">Clear All</button>
                </div>
            </form>
        </div>
        )
    }
}