import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';

import App from './App';
import React from 'react'

test('Render App', () => {
    render(<App />);
    const title = screen.getByText(/react starter/i);
    
    expect(title).toBeInTheDocument();
})