import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import { func } from 'prop-types';
import { withCookies, useCookies } from "react-cookie";
import Button from '@mui/material/Button';
import { Card, CardContent } from '@material-ui/core';
import { makeStyles, withStyles, createStyles } from '@material-ui/core/styles';
import { Alert } from '@mui/material';
import { TextField } from '@material-ui/core';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';

const useStyles = (theme) => createStyles({
    checkbox: {
        marginBotton: 'auto'
    },
    FormControlLabel: {
        fontFamily: "Open Sans",
        fontSize: "smaller"
    }
});

const Pledges = () => {
    const [pledges, setPledges] = React.useState(false);
  const [pledgeOne, setPledgeOne] = React.useState(false);
  const [pledgeTwo, setPledgeTwo] = React.useState(false);
  const [pledgeThree, setPledgeThree] = React.useState(false);
  const [pledgeFour, setPledgeFour] = React.useState(false);
  const [pledgeFive, setPledgeFive] = React.useState(false);
  const [pledgeSix, setPledgeSix] = React.useState(false);
  const [alert, setAlert] = React.useState(false);
  // todo: remember selected pledges in cookie and pass form data to submit button in parent
  const classes = useStyles();

  function handleChange(p) {
    // setChecked(event.target.checked);
    switch(p) {
        case 1:
            setPledgeOne(!pledgeOne)
            break;
        case 2:
            setPledgeTwo(!pledgeTwo)
            break;
        case 3:
            setPledgeThree(!pledgeThree)
            break;
        case 4:
            setPledgeFour(!pledgeFour)
            break;
        case 5:
            setPledgeFive(!pledgeFive)
            break;
        case 6:
            setPledgeSix(!pledgeSix)
            break;
        default:
            break;
    }
  };

    const handleSubmitPledge = () => {
    setPledges(!pledges);
    setTimeout(() => {
        setAlert(false);
    }, 3000);
    setAlert(true);  
    }
    

  return (
        <Card style={{display: "flex", flexDirection: "column", width: '42%'}}>
        <CardContent>
        <div>
            <h1 style={{fontFamily: 'Montserrat', margin: 0}}>
                <ContentPasteIcon />
                Take a Pledge
            </h1>
            <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
                    <FormGroup>
                    <FormControlLabel
                        control={
                            <Checkbox 
                                checked={pledgeOne} 
                                onChange={() => handleChange(1)} 
                                // style={{marginBotton: 'auto'}}
                                />
                        }
                        label="I pledge to read one climate change news a day."
                        style={{fontSize: "smaller"}}
                    />
                    <FormControlLabel
                        control={
                            <Checkbox 
                                checked={pledgeTwo} 
                                onChange={() => handleChange(2)} 
                                />
                        }
                        label="I pledge to not waste food for every meal. "
                    />
                    <FormControlLabel
                        control={
                            <Checkbox 
                                checked={pledgeThree} 
                                onChange={() => handleChange(3)} 
                                />
                        }
                        label="I pledge to reduce my shower time by 5 minutes."
                    />
                    <FormControlLabel
                        control={
                            <Checkbox 
                                checked={pledgeFour} 
                                onChange={() => handleChange(4)} 
                                />
                        }
                        label="I pledge to track my monthly spendings."
                    />
                    <FormControlLabel
                        control={
                            <Checkbox 
                                checked={pledgeFive} 
                                onChange={() => handleChange(5)} 
                                />
                        }
                        label={`I pledge to take more public transport.`}
                    />
                    <FormControlLabel
                        control={
                            <Checkbox 
                                checked={pledgeSix} 
                                onChange={() => handleChange(6)} 
                                />
                        }
                        label={`I pledge to recycle all used papers.`}
                    />
                    </FormGroup>
            </FormControl>
            <TextField
            id="outlined-multiline-static"
            label="Write your own pledge:"
            multiline
            fullWidth
            rows={3}
            defaultValue="I pledge to..."
            />
            <br/><br/>
            <Button variant="outlined" onClick={handleSubmitPledge} style={{color: "grey"}}>Submit</Button>
            <br/><br/>
            {alert && <Alert severity="success">Check your email! (coming soon)</Alert>}
        </div>
        </CardContent>
        </Card>
  );
}

export default (Pledges);
