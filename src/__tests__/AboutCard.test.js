import React from 'react';
import { render, screen } from '@testing-library/react';
import AboutCard from '../components/About/AboutCard'; // Assuming your component file is named AboutCard

describe('AboutCard component', () => {
  it('renders the AboutCard component', () => {
    render(<AboutCard />);
    
    const aboutHeading = screen.getByRole('heading', { level: 1, name: /about me/i });
    const socialLinksHeading = screen.getByRole('heading', { level: 1, name: /find me on/i });
    
    expect(aboutHeading).toBeInTheDocument();
    expect(socialLinksHeading).toBeInTheDocument();
  });

  it('renders the correct about me content', () => {
    render(<AboutCard />);
    
    const aboutText = screen.getByText(/computer science engineering student/i);
    const gymText = screen.getByText(/gym/i);
    const guitarText = screen.getByText(/guitar/i);
    
    expect(aboutText).toBeInTheDocument();
    expect(gymText).toBeInTheDocument();
    expect(guitarText).toBeInTheDocument();
  });
});