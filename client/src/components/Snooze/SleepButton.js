import Button from "@material-ui/core/Button";

const SleepButton = ({handleTime,sleepState}) => {
    return (
        <div className='Sleep_Button'>
            <div className="Sleep_Text">
                
               Click this button to add data regarding your sleep time.
            </div>
            <center>
                <Button id="buttonSleep" variant="outlined" onClick={handleTime}>
                    {sleepState ? "Sleeping" : "Awake"}
                </Button>
            </center>
        </div>
    )
}

export default SleepButton