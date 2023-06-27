import { Container, makeStyles } from "@material-ui/core";
import "./Styles/EmergencyBanner.css";
const useStyles = makeStyles({
    emergBtn: {
        display: "flex",
        flexDirection: "column",
        backgroundColor: "rgb(254, 96, 96)",
        border: "2px solid darkred",
        fontSize: "large",
        textAlign: "center",
        padding: "0.5rem",
    },
    code: {
        fontWeight: "600",
    },
});
function EmergencyBanner() {
    const classes = useStyles();

    return (
        <Container className={classes.emergencyBanner}>
            <p>
                This project is currently still in progress. If there is an
                issue or have an idea to add please connect me through -
                <a href="https://alexannmill.github.io/portfolio">my site</a> in
                the contact me section. Once live this banner will act as an
                emergency broadcasting. This will alert people of heat waves,
                cold snaps, spike in overdoses and more.
            </p>
            <a
                className={classes.code}
                href="github.com/alexannmill/safeguardian"
            >
                Checkout the code here
            </a>
        </Container>
    );
}

export default EmergencyBanner;
