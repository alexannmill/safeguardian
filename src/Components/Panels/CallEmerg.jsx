import { Button, makeStyles } from "@material-ui/core";
import "../Styles/Panels.css";
const useStyles = makeStyles({
    emergBtn: {
        lineHeight: "0%",
        display: "block",
        fontFamily: 'Poppins", sans-serif',
        backgroundColor: "rgb(254, 96, 96)",
        width: "20vw",
        height: "10vh",
        fontSize: "1rem",
        padding: "0.4rem",
    },
});
export default function CallEmerg() {
    const classes = useStyles();

    const handleClick = () => {
        //TODO:
        //will need to take location of kiosk
        //call emerg - find package
    };
    return (
        <Button
            key={"call-emerg"}
            className={classes.emergBtn}
            onClick={(e) => {
                e.preventDefault();
                handleClick();
            }}
        >
            <h3>Call 911</h3>
        </Button>
    );
}
