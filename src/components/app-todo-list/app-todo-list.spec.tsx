import { newSpecPage } from '@stencil/core/testing';
import { AppTodoList } from './app-todo-list';

describe('app-todo-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AppTodoList],
      html: `<app-todo-list></app-todo-list>`,
    });
    expect(page.root).toEqualHtml(`
      <app-todo-list>
        <mock:shadow-root>
          <ul class="todo-list"></ul>
        </mock:shadow-root>
      </app-todo-list>
    `);
  });
});
