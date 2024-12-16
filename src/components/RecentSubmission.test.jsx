import { render, screen } from '@testing-library/react';
import RecentSubmission from './RecentSubmission';


describe('Wave 2:  RecentSubmission', () => {
  test('It renders with a submission and shows the text', () => {
    // Act
    render(<RecentSubmission submission={'This is a submission'} />);

    // Assert
    const textContainer = screen.getByText(/This is a submission/i);
    expect(textContainer).toBeInTheDocument();
  });
});
