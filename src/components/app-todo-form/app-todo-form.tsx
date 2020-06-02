import { Component, ComponentInterface, Event, h, State } from '@stencil/core';
import { EventEmitter } from "@stencil/router/dist/types/stencil.core";

export interface Todo {
  description: string;
  isDone: boolean;
}

@Component({
  tag: 'app-todo-form',
  styleUrl: 'app-todo-form.css',
  shadow: true,
})
export class AppTodoForm implements ComponentInterface {

  @State() value: string = '';

  @Event() create: EventEmitter<Todo>;

  handleSubmit(e: Event) {
    e.preventDefault();

    const todo: Todo = {
      isDone: false,
      description: this.value
    }
    this.create.emit(todo);
    this.value = '';
  }

  handleChange(e: Event) {
    this.value = (e.target as HTMLInputElement).value;
  }

  render() {
    return (
      <form class="todo-form" onSubmit={e => this.handleSubmit(e)}>
        <input type="text" value={this.value} placeholder="Description" onInput={e => this.handleChange(e)} autofocus />
        <input type="submit" value="Add" disabled={!this.value.trim()} />
      </form>
    );
  }

}
