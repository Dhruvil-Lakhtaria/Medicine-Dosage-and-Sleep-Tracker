import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContentText from '@material-ui/core/DialogContentText';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import {
  faInstagram,
  faGithub,
  faFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faHome, faPhone,faHeart } from "@fortawesome/free-solid-svg-icons";
import {faCopyright} from "@fortawesome/free-regular-svg-icons"

const App = () => {
    const [open, setOpen] = React.useState(false);
    
    const handleClickOpen = () => {
      setOpen(true);
    };
    
    const handleClose = () => {
      setOpen(false);
    };
}
const Footer = () => {
    const [open, setOpen] = React.useState(false);
  
  const handleClickOpen = () => {
    setOpen(true);
  };
  
  const handleClose = () => {
    setOpen(false);
  };
  return (
    
    <div className="footer-wrapper">
        <div className="totd">
            <Button id="button" variant="outlined" 
                color="primary" onClick={handleClickOpen}>
            TIP OF THE DAY
            </Button>
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>
            Tip of the day
            </DialogTitle>
            <DialogContent>
            <DialogContentText>
                Always sleep in slots of 1.5 hours. Our sleep is divided into 4 slots.<br></br>Do you like this tip?
            </DialogContentText>
            </DialogContent>
            <DialogActions>
            <Button onClick={handleClose} color="primary">
            Close
            </Button>
            <Button onClick={handleClose} color="primary" autoFocus>
            Yes
            </Button>
            </DialogActions>
        </Dialog>
    </div>
      <div className="social-section">
        <p>Get connected with us on social network</p>
        <div className="icons">
          <FontAwesomeIcon icon={faTwitter} className="tw icon" />
          <FontAwesomeIcon icon={faInstagram} className="ig icon" />
          <FontAwesomeIcon icon={faGithub} className="gh icon" />
          <FontAwesomeIcon icon={faFacebook} className="fb icon" />
        </div>
      </div>
      <div className="main-section">
        <div className="footer-info">
          <h3>MEDISAFE</h3>
          <p>
            We are highly motivated towards your service. It's more than just
            drugs. Together we achieve more.
          </p>
        </div>
        <div className="footer-links">
          <h3>QUICK LINKS</h3>
          <ul className="link-list">
            <li>Top</li>
            <li>Appointments</li>
            <li>MyMeds</li>
            <li>Snooze</li>
          </ul>
        </div>
        <div className="contact-info">
          <h3>CONTACT US</h3>
          <ul className="contacts">
            <li className="contact">
              <FontAwesomeIcon icon={faHome} className="add" />
              NITK,Surathkal 575025,India{" "}
            </li>
            <li className="contact">
              <FontAwesomeIcon icon={faEnvelope} className="email" />
              medisafe@gmail.com
            </li>
            <li className="contact">
              <FontAwesomeIcon icon={faPhone} className="phone" />
              +91 0123456789
            </li>
          </ul>
        </div>
      </div>
      <div className="bottom-section">
        <p><FontAwesomeIcon icon={faCopyright}/>2022 copyright: medisafe.com</p>
        <p >Made with <FontAwesomeIcon className="heart" icon={faHeart}/> by MediSafe</p>
      </div>
    </div>
  );
};

export default Footer;