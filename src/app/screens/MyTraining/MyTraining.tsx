import React from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Paper, Typography } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useMyTrainingStyles } from './styles';

const MyTraining = () => {
  const classes = useMyTrainingStyles();
  return (
    <Paper style={{ maxWidth: '95%' }}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Warm Up</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            A MINUTE A DAY'<br/>
            ACCUMULATE<br/>
            2 Min Deep Squat hold (toes pointing straight)<br/>
            <br/>
            ASSAULT BIKE @increasing pace<br/>
            50s ON : 10s OFF<br/>
            40s ON : 20s OFF<br/>
            30s ON : 30s OFF<br/>
            20s ON : 40s OFF<br/>
            10s ON : 50s OFF<br/>
            <br/>
            THEN 2 ROUNDS @empty barbell<br/>
            10 Calf Raises with Barbell in Back Rack<br/>
            10 Backsquats<br/>
            20s In Bottom of Backsquat<br/>
            10 Calf Raises with Barbell in OH Position<br/>
            10 Overhead Squats<br/>
            20s in Bottom of Overhead Squat<br/>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>A) POWER SNATCH.</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            5 ROUNDS<br/>
            EVERY 20s x 6 SETS<br/>
            1 Power Snatch<br/>
            Rest 2 MIn<br/>
            <br/>
            ROUND 1| @60%<br/>
            ROUND 2| @70%<br/>
            ROUND 3| @75%<br/>
            ROUND 4| @80%<br/>
            ROUND 5| @80%+<br/>
            <br/>
            NOTES:<br/>
            x The percentages are just rough guidlines<br/>
            x Do only increase the weight if you hit all the reps within the 20s without misses.<br/>
            <br/>
            FLOW:<br/>
            x Every 20s perform 1 Power Snatch until 6 reps completed - rest 2 minutes & change weights - do the same again<br/>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>B) 1 RM PULL-UP.</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            FIND A NEW<br/>
            1 RM PULL-UP<br/>
            <br/>
            NOTES:<br/>
            x Try to build to a max weighted pull-up in 5-6 Sets<br/>
            x Ideally you use a weight belt for this one<br/>
            x No Chin-ups allowed<br/>

            SCALING OPTION 1<br/>
            Max Set Strict Pull-Ups<br/>

            OPTION 2<br/>
            5 SETS x 5 REPS<br/>
            Negative Pull-Ups<br/>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>C) DOUBLE UNDER CONDITIONING.</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            10 SETS<br/>
            30 Sec ON : 30 Sec OFF<br/>
            Max Double-Unders<br/>
            <br/>
            NOTES:<br/>
            x Nothing super fancy<br/>
            x Choose a rep scheme and try to stick to it<br/>
            <br/>
            UPSACLING<br/>
            Heavy rope Double Under<br/>
            <br/>
            SCALING OPTION<br/>
            20s ON : 40s OFF<br/>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>D) METCON.</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            ALT. EMOM x 10 MIN<br/>
            MIN 1 | 15/12 Cal Row<br/>
            MIN 2 | 10-15 HSPU<br/>
            <br/>
            REST 2 MIN<br/>
            <br/>
            ALT. EMOM x 10 MIN<br/>
            MIN 1 | 15/12 Cal Ski // Bike<br/>
            MIN 2 | 10-15 Toes-to-Bar<br/>
            <br/>
            NOTES:<br/>
            x Performed at 80% intesity - move at a steady pace<br/>
            x Scale the reps up or down depending on your fitness level<br/>
            <br/>
            SCALING OPTION<br/>
            Pike HSPU<br/>
            Hanging Knee Raises<br/>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Paper>
  );
};

export default MyTraining;
