import React from 'react'
// import PropTypes from 'prop-types'ß

import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
    textField: {
      display: 'flex',
      margin: theme.spacing.unit,
      width: '60%'
    },
    button: {
      margin: theme.spacing.unit,
      width: '30%'
    }
  })
  const Form = (props) => (
    <form onSubmit={props.getNews}>
        <div className="newsForm">
        <h1>React News App</h1>

        <div className="newsForm2">

      <TextField
        className={props.classes.textField}
        label='Keyword or phrase search'
        margin='normal'
        name='country'
        type='text'
        InputLabelProps={{
          required: true,
          color: 'white'
        }}
      />
      
      <Button
        className={props.classes.button}
        color='primary'
        type='submit'
        variant='raised'
      >
        Submit
      </Button>
      </div>

      <div className="newsForm3">
      <Button
        className={props.classes.button}
        color='primary'
        variant='raised'
        onClick=''
      >
        Canada
      </Button><Button
        className={props.classes.button}
        color='primary'
        variant='raised'
      >
        India
      </Button><Button
        className={props.classes.button}
        color='secondary'
        type='submit'
        variant='raised'
      >
        Search Results
      </Button><Button
        className={props.classes.button}
        color='primary'
        variant='raised'
      >
        Japan
      </Button> <Button
        className={props.classes.button}
        color='primary'
        variant='raised'
      >
        U.S.A
      </Button>       
      </div>      
      </div>
    </form>

  )  
  export default withStyles(styles)(Form)