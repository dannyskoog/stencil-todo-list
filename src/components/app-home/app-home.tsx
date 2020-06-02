import { Component, h, State } from '@stencil/core';
import { Todo } from "../app-todo-form/app-todo-form";

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
  shadow: true
})
export class AppHome {

  @State() todos: Todo[] = [];

  handleCreate(todo: Todo) {
    this.todos = this.sortByDone([todo].concat(this.todos));
  }

  handleRemove(id: number) {
    this.todos = this.todos.filter((_, index) => index !== id);
  }

  handleDone({ id , done }: { id: number, done: boolean }) {
    this.todos = this.sortByDone(this.todos.map((todo, index) => {
      return index === id
        ? { ...todo, isDone: done }
        : todo;
    }));
  }

  sortByDone(todos: Todo[]): Todo[] {
    return todos.sort((a, b) => {
      return a.isDone === b.isDone 
        ? 0 
        : a.isDone ? 1 : -1;
    })
  }

  render() {
    return (
      <div class='app-home'>
        <app-todo-form onCreate={val => this.handleCreate(val.detail)}></app-todo-form>
        <app-todo-list 
          todos={this.todos}
          onRemove={val => this.handleRemove(val.detail)}
          onDone={val => this.handleDone(val.detail)}>
        </app-todo-list>
      </div>
    );
  }
}
