import React, { useState } from 'react'
import { 
  Typography, 
  Button, 
  Container, 
  TextField, 
  Radio, 
  RadioGroup, 
  FormControlLabel,
  FormControl,
  FormLabel
} from '@mui/material'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import { makeStyles } from '@mui/styles'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'

const useStyles = makeStyles((theme) => ({
  field: {
    '&.MuiTextField-root': {
      marginTop: 20,
      marginBottom: 20,
      display: 'block'
    }
  }
}))


export default function Create() {
  const classes = useStyles()
  const history = useHistory()
  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const [titleError, setTitleError] = useState(false)
  const [detailsError, setDetailsError] = useState(false)
  const [category, setCategory] = useState('todos')

  const handleSubmit = (e) => {
    e.preventDefault()
    setTitleError(false)
    setDetailsError(false)

    if (title === '') {
      setTitleError(true)
    }
    if (details === '') {
      setDetailsError(true)
    }
    if (title && details) {
      fetch('http://localhost:8000/notes', {
        method: 'POST',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify({title, details, category})
      }).then(() => history.push('/'))
    }
  }
  
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

      <form noValidate autoComplete='off' onSubmit={handleSubmit}>
        <TextField className={classes.field}
          onChange={(e) => setTitle(e.target.value)}
          label='Note Title'
          variant='outlined'
          color='secondary'
          fullWidth
          required
          error={titleError}
        />

        <TextField className={classes.field}
          onChange={(e) => setDetails(e.target.value)}
          label='Details'
          variant='outlined'
          color='secondary'
          multiline
          rows={4}
          fullWidth
          required
          error={detailsError}
        />

        <FormControl className={classes.field}>
          <FormLabel>Note Category</FormLabel>
          <RadioGroup value={category} onChange={(e) => setCategory(e.target.value)}>
            <FormControlLabel value='money' control={<Radio />} label='Money'/>
            <FormControlLabel value='todos' control={<Radio />} label='Todos'/>
            <FormControlLabel value='reminders' control={<Radio />} label='Reminders'/>
            <FormControlLabel value='work' control={<Radio />} label='Work'/>
          </RadioGroup>
        </FormControl>

        <br/>

        <Button 
          onClick={() => console.log('you clicked me')}
          type='submit'
          color='secondary'
          variant='contained'
          endIcon={<KeyboardArrowRightIcon />}
        >
          Submit
        </Button>
      </form>
    </Container>
  )
}
