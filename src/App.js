import logo from './logo.svg';
import './App.css';
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';

function App() {
  return (
    <div className="App">
        <div className="ipt-forms" >
          <TextField id="outlined-basic" className="ipt-form" label="Email" variant="outlined" />
        </div>
        <div className="ipt-forms" >
          <TextField id="outlined-password-basic" className="ipt-form" type="password" label="Password" variant="outlined" />
        </div>
        <Button variant="contained" className="btn-cta">Login</Button>
    </div>
  );
}

export default App;
