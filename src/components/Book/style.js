const style = () => ({
  paper: {
    width: '100%',
    margin: 7,
    font: 'Georgia',
    color: 333,
    backgroundColor: '#f2efe9',
    '& h6': {
      marginLeft: 10,
      marginRight: 10,
      marginBottom: 7,
    },
  },

  button: {
    fontSize: '1.093rem',
    textTransform: 'lowercase',
    backgroundColor: 'transparent',
    boxShadow: '0px 1px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 1px 0px rgba(0,0,0,0.02)',
    '&:hover': {
      backgroundColor: 'transparent',
      cursor: 'pointer'
    },
    color: '#000000',
    marginTop: 5,
    marginLeft: 6,
    width: 40
  }
})

export default style;
