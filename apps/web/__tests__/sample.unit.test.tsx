import React from 'react';
import { render, screen } from '@testing-library/react';

describe('Sample Web Unit Test', () => {
  it('renders a web message', () => {
    render(<div>Web App Running!</div>);
    expect(screen.getByText('Web App Running!')).toBeInTheDocument();
  });
}); 