import Button from "@material-ui/core/Button";

const SleepButton = ({ handleTime, sleepState }) => {
  return (
    <div className="Sleep_Button">
      <div className="Sleep_Text">
        Click this button to add data regarding your sleep time.The text on the
        button denotes your sleep status.Toggle it accordingly to save correct
        data.
      </div>
      <center>
        <Button id="buttonSleep" variant="outlined" onClick={handleTime}>
          {sleepState ? "Sleeping" : "Awake"}
        </Button>
      </center>
    </div>
  );
};

export default SleepButton;
