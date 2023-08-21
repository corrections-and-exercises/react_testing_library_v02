import {describe, it, expect} from 'vitest';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../src/App.jsx';

describe('testing headline', () => {
  it('if headline is initially not shown', () => {
    render(<App />);
    const headline = screen.queryByText(/hello world/i);
    expect(headline).toBeNull();
  });
  it('if headline is shown after button click', async () => {
    render(<App />);
    const button = screen.getByRole('button');
    await userEvent.click(button);
    const headline = screen.getByText(/hello world/i);
    expect(headline).toBeInTheDocument();
  });
});
