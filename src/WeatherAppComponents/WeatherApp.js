import { Autocomplete, Grid } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { Country, State, City } from 'country-state-city';

export default function WeatherApp() {
    const [ states, setStates ] = useState([]);
    useEffect(() => {
        console.log(Country.getAllCountries());
        console.log(State.getAllStates());
        console.log(City.getAllCities());
    }, []);
    return (
        <div>
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    {/* <Autocomplete /> */}
                    Hello
                </Grid>
            </Grid>

        </div>
    )
}
