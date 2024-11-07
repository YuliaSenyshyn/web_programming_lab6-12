import React, { createContext, useState, useEffect } from 'react';
import { initialBooksData } from '../utils/BooksData';

export const BookContext = createContext();

export const BookProvider = ({ children }) => {
  const [books, setBooks] = useState(initialBooksData); 

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch('http://localhost:3000/catalog');
        const data = await response.json();
        setBooks(data); 
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };

    fetchBooks();
  }, []); 

  return (
    <BookContext.Provider value={{ books }}>
      {children}
    </BookContext.Provider>
  );
};

