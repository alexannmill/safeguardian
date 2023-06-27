import { makeStyles } from '@material-ui/core';
import { Alert } from '@mui/material';

const useStyles = makeStyles({
    emergencyBanner: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'rgb(254, 96, 96)',
        border: '2px solid darkred',
        fontSize: 'large',
        textAlign: 'center',
        padding: '0.5rem',
    },
});
function EmergencyBanner() {
    const classes = useStyles();

    return (
        <Alert className={classes.emergencyBanner}>
            <p>
                This project is currently still in progress. If there is an
                issue or have an idea to add please connect me through -
                <a href='https://alexannmill.github.io/portfolio'>my site</a> in
                the contact me section. Once live this banner will act as an
                emergency broadcasting. This will alert people of heat waves,
                cold snaps, spike in overdoses and more.
            </p>
            <a href='github.com/alexannmill/safeguardian'>
                Checkout the code here
            </a>
        </Alert>
    );
}

export default EmergencyBanner;
