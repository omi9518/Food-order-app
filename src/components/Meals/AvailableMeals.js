import React from 'react';
import classes from './AvailableMeals.module.css';
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { DUMMY_MEALS, DUMMY_MEALS2, DUMMY_MEALS3 } from '../Helpers/HelperData';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const AvailableMeals = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event,newValue) => {
    setValue(newValue);
  };

  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  const mealsList2 = DUMMY_MEALS2.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  const mealsList3 = DUMMY_MEALS3.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <section className={classes.meals}>
      
     <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Italian Food" {...a11yProps(0)} />
          <Tab label="Chinees Food" {...a11yProps(1)} />
          <Tab label="Indian Food" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <Card>
        <ul>{mealsList2}</ul>
      </Card>
      </TabPanel>
      <TabPanel value={value} index={2}>
      <Card>
        <ul>{mealsList3}</ul>
      </Card>
      </TabPanel>
    </Box>
     
    </section>
  );
};
export default AvailableMeals;