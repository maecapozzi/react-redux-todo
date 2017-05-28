import React from 'react'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const Search = () => (
  <div>
    <MuiThemeProvider>
      <div>
        <TextField
          hintText="Hint Text"
        /><br />
        <TextField
          hintText="Hint Text"
        /><br />
        <RaisedButton label="Search" secondary={true} />
      </div>
    </MuiThemeProvider>
  </div>
)

export default Search
