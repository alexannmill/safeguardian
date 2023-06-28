import { Popup } from 'react-leaflet';
import { useContext } from 'react';
import { resourceContext } from '../../Context/Resource';
import { Paper, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    filter: {
        zIndex: '1001',
        backgroundColor: 'black',
        width: '10rem',
        height: '2rem',
        color: 'white',
    },
});

export default function Filter() {
    const classes = useStyles();
    const { resource } = useContext(resourceContext);

    function filterJSON(jsonData, properties) {
        let filteredData = {};

        for (let key in jsonData) {
            if (properties.includes(key)) {
                filteredData[key] = jsonData[key];
            } else if (
                typeof jsonData[key] === 'object' &&
                jsonData[key] !== null
            ) {
                let nestedFiltered = filterJSON(jsonData[key], properties);
                if (Object.keys(nestedFiltered).length > 0) {
                    filteredData[key] = nestedFiltered;
                }
            }
        }

        return filteredData;
    }

    return (
        <Paper
            className={classes.filter}
            style={{
                zIndex: '99',
                backgroundColor: 'black',
                width: '10rem',
                height: '2rem',
                color: 'white',
            }}
        >
            test
        </Paper>
    );
}
