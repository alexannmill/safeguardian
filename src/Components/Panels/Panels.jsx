import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { resourceDataContext } from '../../Context/ResourceData';
import { PanelContext } from '../../Context/PanelList';
import {
    Button,
    Container,
    List,
    ListItem,
    makeStyles,
} from '@material-ui/core';
import CallEmerg from './CallEmerg';
import { resourceContext } from '../../Context/Resource';

const useStyles = makeStyles({
    panelList: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '0px',
    },
    panels: {
        padding: '0px',
        border: '1px black solid',
        // borderRadius: '0px',
    },
    selectedPanel: {
        padding: '0px',
        border: '1px black solid',
        // borderRadius: '0px',
        backgroundColor: 'black',
        color: 'white',
    },
});
function Panels() {
    const classes = useStyles();

    const { setResourceData } = useContext(resourceDataContext);
    const { setPanel, panelResources, panel } = useContext(PanelContext);
    const { setResource } = useContext(resourceContext);
    // ---- Once panel is clicked axios call to API for map marker data
    useEffect(() => {
        if (!panel) return;
        const noSpace = panel.split(' ').join('').toLowerCase();
        axios
            .get(`https://my.api.mockaroo.com/${noSpace}.json?key=18232cb0`)
            .then((res) => {
                const incomingData = res.data;
                console.log('incomingData:', incomingData);
                setResourceData(incomingData);
            })
            .catch((err) => console.log(err));
    }, [panel, setResourceData]);

    // ---- Set local and global state for selected resources
    // ---- Used panel state used for pop up config based on data
    console.log('panel:', panel);
    // ---- Render each panel button

    const handleClick = (p) => {
        setResource(null);
        setPanel(p);
    };
    const renderPanels = panelResources.map((p) => {
        return (
            <ListItem>
                <Button
                    key={p}
                    fullWidth
                    variant='contained'
                    className={
                        p === panel ? classes.selectedPanel : classes.panels
                    }
                    onClick={(e) => {
                        handleClick(p);
                    }}
                >
                    {p}
                </Button>
            </ListItem>
        );
    });
    return (
        <List className={classes.panelList}>
            {renderPanels}
            <ListItem>
                <CallEmerg />
            </ListItem>
        </List>
    );
}

export default Panels;
