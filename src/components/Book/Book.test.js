import React from 'react';
import { render, queryByText } from '@testing-library/react';
import Book from '../Book';
import '@testing-library/jest-dom/extend-expect';

describe('Book component', () => {
  const book = {
    book_title: 'Sample Title',
    book_author: 'Sample Author',
    book_publication_city: 'Sample City',
    book_publication_country: 'Sample Country',
    book_publication_year: 2023,
    book_pages: 200,
  };

  test('displays book title and author', () => {
    const { container } = render(<Book book={book} />);
    const getByText = (text) => queryByText(container, (_, node) => node.textContent === text);

    const titleElement = getByText('Sample Title');
    const authorElement = getByText('by Sample Author');

    expect(titleElement).toBeInTheDocument();
    expect(authorElement).toBeInTheDocument();

  });

  test('displays additional book information', () => {
    const book = {
      book_title: 'Sample Title',
      book_author: 'Sample Author',
      book_publication_city: 'City',
      book_publication_country: 'Country',
      book_publication_year: '2023',
      book_pages: 200,
    };

    const { getByText } = render(<Book book={book} />);

    const publicationInfo = getByText(/Published in/i);
    const pagesInfo = getByText(/200 pages/i);

    expect(publicationInfo).toBeInTheDocument();
    expect(pagesInfo).toBeInTheDocument();
  });
});






