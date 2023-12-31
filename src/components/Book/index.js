import React, { useState } from 'react';
import style from './style.js';
import { withStyles } from '@material-ui/core/styles';
import { Paper, Typography } from '@material-ui/core';


const BooksList = (props) => {
  const [seeMore, useSeeMore] = useState(false)
  const { classes, book } = props

  return (
    <Paper variant="outlined" className={classes.paper}>

      {/* book title */}
      <Typography variant="h6">{book.book_title}</Typography>
      <Typography variant="subtitle2"><span style={{ fontSize: 10 }}>by</span> {book.book_author}</Typography>


      <Typography variant="caption" component={'h6'}>
        {`Published in
          ${book.book_publication_city && book.book_publication_city + ','}
          ${book.book_publication_country && book.book_publication_country + ','}
          ${book.book_publication_year}.
          `}
        &nbsp; {book.book_pages} pages
      </Typography>
    </Paper>
  )
}

export default withStyles(style)(BooksList);
