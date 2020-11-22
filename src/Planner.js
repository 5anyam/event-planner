import React , {useState} from 'react'
import './Planner.css';
import Header from './Header.js';
import Footer from './Footer.js';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Navbar from './Navbar';
import axios from './axios.js';


function Planner() {

    const [title , setTitle] = useState("");
    const [description , setDescription] = useState("");
    const [location , setLocation] = useState("");
    const [price , setPrice] = useState("");
    const [date , setDate] = useState("");
    const [time , setTime] = useState("");

    const sendEvent = async (e) =>{
      e();
      await axios.post('/event/add',{
        title :{title},
        description:{description},
        location : {location},
        price : {price},
        date : {date},
        time : {time},
      });
      setTitle("");
      setDescription("");
      setLocation("");
      setPrice("");
      setDate("");
      setTime("");
    };


  return (
     <div>
        <Header/>
        <Navbar/>
        <div className="form">
        <div className="inputs">
        <Grid container justify="center" alignItems="center" item xs={12}>
           <h1>Create An Event</h1>
           </Grid>
         <form>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                name="eventtitle"
                variant="outlined"
                required
                fullWidth
                id="event"
                label="Event title"
                autoFocus
                value={title}
                onChange={e=> setTitle(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="description"
                label="Description"
                name="description"
                value={description}
                onChange={e=> setDescription(e.target.value)}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="location"
                label="Location"
                name="location"
                value={location}
                onChange={e=> setLocation(e.target.value)}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="price"
                label="Price per person"
                name="Price"
                value={price}
                onChange={e=> setPrice(e.target.value)}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                variant="outlined"
                id="date"
                label="Event Date"
                type="date"
                defaultValue="2017-05-24"
                className="date"
                InputLabelProps={{
                  shrink: true,
                }}
                value={date}
                onChange={e=> setDate(e.target.value)}
              />
              </Grid>
              <Grid item xs={6}>
              <TextField
                variant="outlined"
                id="time"
                label="Event Time"
                type="time"
                defaultValue="07:30"
                className="time"
                InputLabelProps={{
                  shrink: true,
                }}
                value={time}
                inputProps={{
                  step: 300, // 5 min
                }}
                onChange={e=> setTime(e.target.value)}
              />
            </Grid>
            <Grid item xs={6}>
            <TextField type="file" className="img" variant="outlined" InputLabelProps={{
                  shrink: true,
                }} label="Cover Image" name="img"/>
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive list of peoples interested via email."
                className="formlab"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className="submitbtn"
            onClick= {sendEvent}
          >
            Publish Event
          </Button>
          </form>
       </div>    
        </div>
         <Footer/> 
        </div>
  )
}

export default Planner

