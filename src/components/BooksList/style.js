const style = () => ({
  paginationContainer: {
    width: 400,
    paddingLeft: 30,
    margin: '20px auto',
    flexWrap: 'wrap'
  },
  paperInput: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 500,
    borderRadius: 10,
    backgroundColor: '#ffffff3b',
    margin: '0 auto',
    marginTop: 30
  },
  input: {
    marginLeft: 1,
    flex: 1,
  },
  iconButton: {
    '&:hover': {
      cursor: 'pointer'
    }
  },
  divider: {
    height: 28,
    margin: 40,
  },
})

export default style;
