import { newSpecPage } from '@stencil/core/testing';
import { AppTodoForm } from './app-todo-form';

describe('app-todo-form', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AppTodoForm],
      html: `<app-todo-form></app-todo-form>`,
    });
    expect(page.root).toEqualHtml(`
      <app-todo-form>
        <mock:shadow-root>
          <form class="todo-form">
            <input autofocus="" placeholder="Description" type="text" value="">
            <input disabled="" type="submit" value="Add">
          </form>
        </mock:shadow-root>
      </app-todo-form>
    `);
  });
});
