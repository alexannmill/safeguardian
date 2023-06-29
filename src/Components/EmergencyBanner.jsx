import { Link, Typography, makeStyles } from '@material-ui/core';
import { Alert } from '@mui/material';
import { useState } from 'react';

const useStyles = makeStyles((theme) => ({
    emergencyBanner: {
        display: 'flex',
        flexDirection: 'column',
        border: '2px solid red',
        textAlign: 'center',
        width: '99vw',
        margin: '.25rem',
    },
    alertFont: {
        fontSize: 'x-large',
    },
}));

//TODO: change to overflow scroll

function EmergencyBanner() {
    const [message, setMessage] = useState('');
    const [severity, setSeverity] = useState('error');
    const classes = useStyles();
    return (
        <Alert
            icon={false}
            severity={severity}
            className={classes.emergencyBanner}
        >
            <Typography className={classes.alertFont}>
                This project is currently still in progress. If there is an
                issue or have an idea to add please connect me through{' '}
                <Link
                    underline='always'
                    href='https://alexannmill.github.io/portfolio'
                >
                    my site
                </Link>{' '}
                in the contact me section. Once live this banner will act as an
                emergency broadcasting. This will alert people of heat waves,
                cold snaps, spike in overdoses and more.{' '}
                <Link
                    underline='always'
                    href='github.com/alexannmill/safeguardian'
                >
                    Checkout the code here
                </Link>
            </Typography>
        </Alert>
    );
}

export default EmergencyBanner;
