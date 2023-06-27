import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { resourceDataContext } from "../../Context/ResourceData";
import { PanelContext } from "../../Context/PanelList";
import { Button, Container, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    allPanels: {
        fontFamily: 'Poppins", sans-serif',
        backgroundColor: "rgb(243, 243, 243)",
    },
});

export default function AllPanels() {
    const classes = useStyles();

    const { setResourceData } = useContext(resourceDataContext);
    const { setPanel, panelResources } = useContext(PanelContext);
    const [click, setClick] = useState(null);

    // ---- Once panel is clicked axios call to API for map marker data
    useEffect(() => {
        if (!click) return;
        const noSpace = click.split(" ").join("").toLowerCase();
        console.log("noSpace:", noSpace);
        axios
            .get(`https://my.api.mockaroo.com/${noSpace}.json?key=18232cb0`)
            .then((res) => {
                const incomingData = res.data;
                setResourceData(incomingData);
            })
            .catch((err) => console.log(err));
    }, [click, setResourceData]);

    // ---- Set local and global state for selected resources
    // ---- Used panel state used for pop up config based on data
    const handleClick = (panel) => {
        setClick(panel);
        setPanel(panel);
    };

    // ---- Render each panel button
    const renderPanels = panelResources.map((panel) => {
        return (
            <Button
                key={panel}
                fullWidth
                variant="contained"
                className={classes.allPanels}
                onClick={(e) => {
                    handleClick(panel);
                }}
            >
                <h3>{panel}</h3>
            </Button>
        );
    });

    return <Container>{renderPanels}</Container>;
}
