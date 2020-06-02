import { Component, ComponentInterface, h, Prop, Event } from '@stencil/core';
import { Todo } from "../app-todo-form/app-todo-form";
import { EventEmitter } from "@stencil/router/dist/types/stencil.core";

@Component({
  tag: 'app-todo-list',
  styleUrl: 'app-todo-list.css',
  shadow: true,
})
export class AppTodoList implements ComponentInterface {
  @Prop() todos: Todo[] = [];

  @Event() remove: EventEmitter<number>;
  @Event() done: EventEmitter<{ id: number, done: boolean }>;

  render() {
    return (
      <ul class="todo-list">
        {this.todos.map((todo, index) => 
          <li>
            <label class="container">
              <input type="checkbox" checked={todo.isDone} onChange={() => this.done.emit({ id: index, done: !todo.isDone })} />
              <span class={`checkmark ${todo.isDone ? 'checked' : ''}`}></span>
            </label>
            <span class={`description ${todo.isDone ? 'done' : ''}`}>{todo.description}</span>
            <span class="remove" onClick={() => this.remove.emit(index)}>Remove</span>
          </li>
        )}
      </ul>
    );
  }

}
