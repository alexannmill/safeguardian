import { Popup } from 'react-leaflet';
import { useContext } from 'react';
import { resourceContext } from '../../Context/Resource';
import {
	Button,
	Checkbox,
	FormControl,
	FormGroup,
	Paper,
	makeStyles,
} from '@material-ui/core';

const useStyles = makeStyles({
	filter: {
		// zIndex: '1001',
		// backgroundColor: 'black',
		width: '10rem',
		height: '2rem',
		color: 'white',
	},
});

export default function Filter() {
  const classes = useStyles();
  const { resource, resourceData } = useContext(resourceContext);
	//resources data as json
	//once key found compare value to selected property
	function filterJSON(jsonData, properties) {
		let filteredData = {};

		for (let key in jsonData) {
			if (properties.includes(key)) {
				filteredData[key] = jsonData[key];
				//handle nesting
			} else if (typeof jsonData[key] === 'object' && jsonData[key] !== null) {
				let nestedFiltered = filterJSON(jsonData[key], properties);
				if (Object.keys(nestedFiltered).length > 0) {
					filteredData[key] = nestedFiltered;
				}
			}
		}

		return filteredData;
	}

  const handleFilter = (property) => {};

	// Handle the change in resource
	// Use full object and filter down with local state
	// Handle multiple filters
	return (
		<Paper className={classes.filter}>
			{/* <FormGroup>
        <FormControl
          style={{ color: 'white', zIndex: 999 }}
          onClick={handleFilter}
          control={<Checkbox />}
        />
      </FormGroup> */}
			<Button
				variant='contained'
				color='primary'
				onClick={(e) => handleFilter('shelters')}
			>
				Filter
			</Button>
		</Paper>
	);
}
