import { newE2EPage } from '@stencil/core/testing';

describe('app-todo-form', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<app-todo-form></app-todo-form>');

    const element = await page.find('app-todo-form');
    expect(element).toHaveClass('hydrated');
  });
});
