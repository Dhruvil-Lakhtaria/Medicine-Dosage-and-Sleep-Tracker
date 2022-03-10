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
const Footer = () => {
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
  ];

  return (
    <div className="footer-wrapper">
      <div className="totd">
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
    </div>
  );
};

export default Footer;
