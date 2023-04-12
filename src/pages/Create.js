import React from 'react'
import { Typography, Button, Container } from '@mui/material'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
  
})

export default function Create() {
  const classes = useStyles()

  return (
    <Container>
      <Typography
        className={classes.title}
        variant='h6'
        component='h2'
        gutterBottom
        color='textSecondary'
      >
        Create a New Note
      </Typography>

      <Button
      className={classes.btn}
        onClick={() => console.log('you clicked me')}
        type='submit'
        color='secondary'
        variant='contained'
        endIcon={<KeyboardArrowRightIcon />}
      >
        Submit
      </Button>
    </Container>
  )
}
