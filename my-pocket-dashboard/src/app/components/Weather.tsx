'use client';
import { Box, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react'

export default function Weather() {
    const [temperature, setTemperature] = useState(''); 

    useEffect(() => {
        fetch("https://api.open-meteo.com/v1/forecast?latitude=48.5839&longitude=7.7455&current_weather=true&timezone=Europe%2FBerlin&forecast_days=1")
        .then(response => response.json())
        .then(data => setTemperature(data.current_weather.temperature as string)) 
    },[]); 
    console.log(temperature);

 
    return (
        <>
        <Box>
        <Text fontSize='30' color='white'> {temperature} °C</Text>
        </Box>
       
        </>
    )
}
