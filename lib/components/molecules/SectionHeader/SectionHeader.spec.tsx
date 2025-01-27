import { screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import SectionHeader from '.';
import { render } from '../../__test__/test-utils';

describe('SectionHeader', () => {
  it('matches snapshot', () => {
    const { container } = render(
      <SectionHeader title="Test" description="This is a test" />
    );
    expect(container).toMatchSnapshot();
  });

  it('renders correctly with title and description', () => {
    render(<SectionHeader title="Test" description="This is a test" />);
    expect(screen.getByText('Test')).toBeInTheDocument();
    expect(screen.getByText('This is a test')).toBeInTheDocument();
  });

  it('renders only title when no description is provided', () => {
    render(<SectionHeader title="Test Title" />);
    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.queryByText('This is a test')).not.toBeInTheDocument();
  });

  it('returns null when no title is provided', () => {
    const { container } = render(
      <SectionHeader description="Description only" />
    );
    expect(container).toBeEmptyDOMElement();
  });
});
