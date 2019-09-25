import React, {useEffect, useState} from 'react'
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Footer from '../layout/Footer'
import Navbar from '../layout/Navbar'

function Faq() {

       
  const [data, setData] = useState([]);
  
  useEffect(() => {
    axios.get('https://localhost:5000/faq')
    .then(json => setData(json.data))
    .catch((error) => {
      console.log(error);
    })
    
  }, [])

    const useStyles = makeStyles(theme => ({
        root: {
          width: '100%',
        },
        heading: {
          fontSize: theme.typography.pxToRem(15),
          fontWeight: theme.typography.fontWeightRegular,
        },
      }));
      const classes = useStyles();

    return (
        <div className="container">
          <div className={classes.root}>
           {data.map((data => 
            <ExpansionPanel>
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className={classes.heading}><h4>{data.question}</h4></Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography>
                  <h5>{data.answer}</h5>
                </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
           ))}
          </div> 
        </div>
    )
}

export default Faq
