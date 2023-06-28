import { Link, makeStyles } from '@material-ui/core';
import { Alert } from '@mui/material';
import { red } from './constants';
import { useState } from 'react';

const useStyles = makeStyles({
    emergencyBanner: {
        display: 'flex',
        flexDirection: 'column',
        border: '2px solid darkred',
        textAlign: 'center',
        backgroundColor: red,
        width: '100vw',
    },
});
function EmergencyBanner() {
    const [message, setMessage] = useState('');
    const [severity, setSeverity] = useState('error');
    const classes = useStyles();

    return (
        <Alert severity={severity} className={classes.emergencyBanner}>
            This project is currently still in progress. If there is an issue or
            have an idea to add please connect me through{' '}
            <Link href='https://alexannmill.github.io/portfolio'>my site</Link>{' '}
            in the contact me section. Once live this banner will act as an
            emergency broadcasting. This will alert people of heat waves, cold
            snaps, spike in overdoses and more.
            <Link href='github.com/alexannmill/safeguardian'>
                Checkout the code here
            </Link>
        </Alert>
    );
}

export default EmergencyBanner;
