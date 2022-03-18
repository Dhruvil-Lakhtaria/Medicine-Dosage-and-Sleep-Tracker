import React, { useState } from "react";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContentText from "@material-ui/core/DialogContentText";
import Dialog from "@material-ui/core/Dialog";
import Button from "@material-ui/core/Button";
// const App = () => {
//   const [open, setOpen] = React.useState(false);

//   const handleClickOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };
// };
const TipButton = () => {
  const [open, setOpen] = useState(false);
  const [tipNumber, changeNumber] = useState(0);
  const handleClickOpen = () => {
    var newTip = Math.floor((Math.random()*10000))%tips.length
    changeNumber(newTip);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const tips = [
    " Avoid Caffeine, Alcohol, Nicotine, and Other Chemicals that Interfere with Sleep",
    "Turn Your Bedroom into a Sleep-Inducing Environment,Establish a Soothing Pre-Sleep Routine.",
    "Drink enough fluid at night to keep from waking up thirsty—but not so much and so close to bedtime that you will be awakened by the need for a trip to the bathroom.",
    "Struggling to fall sleep just leads to frustration. If you’re not asleep after 20 minutes, get out of bed, go to another room, and do something relaxing, like reading or listening to music until you are tired enough to sleep.",
    "Exposure to light during the day is beneficial, but nighttime light exposure has the opposite effect.Reduce exposure to light at night",
    "While short power naps are beneficial, long or irregular napping during the day can negatively affect your sleep.",
    "Your body’s circadian rhythm functions on a set loop, aligning itself with sunrise and sunset.Being consistent with your sleep and waking times can aid long-term sleep quality",
    "Melatonin is a key sleep hormone that tells your brain when it’s time to relax and head to bed.Melatonin Supplements are very good sleep aids.",
    "Alcohol is known to cause or increase the symptoms of sleep apnea, snoring, and disrupted sleep patterns",
    "Many people believe that the bedroom environment and its setup are key factors in getting a good night’s sleepThese factors include temperature, noise, external lights, and furniture arrangement.",
    "Body and bedroom temperature can also profoundly affect sleep quality.",
    "Relaxation techniques before bed have been shown to improve sleep quality and are another common technique used to treat insomnia",
    "A relaxing bath or shower is another popular way to sleep better.",
    "Apart from the relaxing environment, bed quality can also affect sleep",
    "Exercise is one of the best science-backed ways to improve your sleep and health.",
    "Although hydration is vital for your health, it’s wise to reduce your fluid intake in the late evening.",
  ];

  return (
    <div className="footer-wrapper">

        <Button
          id="button"
          variant="outlined"
          onClick={handleClickOpen}
        >
          TIP OF THE DAY
        </Button>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Tip of the day</DialogTitle>
          <DialogContent>
            <DialogContentText>
              {tips[tipNumber]}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Close
            </Button>
            {/* <Button onClick={handleClose} color="primary" autoFocus>
              Yes
            </Button> */}
          </DialogActions>
        </Dialog>
    
    </div>
  );
};

export default TipButton;
