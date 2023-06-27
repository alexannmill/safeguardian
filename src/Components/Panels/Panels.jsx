import { Container, makeStyles } from '@material-ui/core';
import AllPanels from './AllPanels';
import CallEmerg from './CallEmerg';

const useStyles = makeStyles({
    panelList: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '0px',
    },
});
function Panels() {
    const classes = useStyles();
    return (
        <Container className={classes.panelList}>
            <AllPanels />
            <CallEmerg />
        </Container>
    );
}

export default Panels;
