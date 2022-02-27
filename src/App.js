import { Container, Grid } from '@mui/material';
import './App.css';
import Dashboard from './components/Dashboard';
import SideBar from "./components/Sidebar"



function App() {
  return (
    <>
      <Grid container>
        <Grid item xs={2}><SideBar/></Grid>
        <Grid item xs={10}><Dashboard/></Grid>
      </Grid>
    </>
  );
}

export default App;
