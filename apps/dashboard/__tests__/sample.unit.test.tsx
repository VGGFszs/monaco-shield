import React from 'react';
import { render, screen } from '@testing-library/react';

describe('Sample Dashboard Unit Test', () => {
  it('renders a dashboard message', () => {
    render(<div>Dashboard Ready!</div>);
    expect(screen.getByText('Dashboard Ready!')).toBeInTheDocument();
  });
}); 