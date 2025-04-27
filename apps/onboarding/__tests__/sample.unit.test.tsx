import React from 'react';
import { render, screen } from '@testing-library/react';

describe('Sample Onboarding Unit Test', () => {
  it('renders a welcome message', () => {
    render(<div>Welcome to Onboarding!</div>);
    expect(screen.getByText('Welcome to Onboarding!')).toBeInTheDocument();
  });
}); 