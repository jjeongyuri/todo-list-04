import { Component } from 'react';
import './App.css';
import TodoListTemplete from './components/TodoListTemplete';
import Form from './components/Form';
import TodoItemList from './components/TodoItemList';

class App extends Component{
  id = 3;

  state = { 
    input: '',
    todos: [
      {id: 0, text: ' 리액트 소개', checked: false},
      {id: 1, text: ' 리액트 소개', checked: true},
      {id: 2, text: ' 리액트 소개', checked: false}
    ]
  }

  handleChange = (e) => {
    this.setState({
      input: e.target.value
    })
  }

  handleCreate = () => {
    const {input, todos} = this.state;
    this.setState({
      input: '',
      todos: todos.concat({
        id: this.id++,
        text: input,
        checked: false
      })
    })
  }

  handleToggle = (id) => {
    const {todos} = this.state;

    const index = todos.findIndex(todo => todo.id === id);
    const selected = todos[index];

    const nextTodos = [...todos];
    nextTodos[index] = {
      ...selected,
      checked: !selected.checked
    };

    this.setState({
      todos: nextTodos
    })
  }

  handleRemove = (id) => {
    const {todos} = this.state;
    this.setState({
      todos: todos.filter(todo => todo.id !== id)
    });
  }

  render(){
    const {input, todos} = this.state;
    const {
      handleChange,
      handleCreate,
      handleToggle,
      handleRemove
    } = this;
    return(
      <TodoListTemplete>

        <Form value={input}
              onChange={handleChange}
              onCreate={handleCreate}/>

        <TodoItemList todos={todos}
                      onToggle={handleToggle}
                      onRemove={handleRemove}/>

      </TodoListTemplete>
    )
  }
}

export default App;
