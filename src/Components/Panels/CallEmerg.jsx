import { Button, makeStyles } from "@material-ui/core";
import { red } from '../constants';
import { Phone } from '@material-ui/icons'
const useStyles = makeStyles({
    emergBtn: {
        fontFamily: "'Poppins', sans-serif'",
        backgroundColor: red,
        width: '10rem',
        height: '10vh',
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
            key={'callEmerg'}
            className={classes.emergBtn}
            variant='contained'
            color='error'
            size='large'
            onClick={(e) => {
                e.preventDefault();
                handleClick();
            }}
        >
            <Phone /> {'Call 911'}
        </Button>
    );
}
