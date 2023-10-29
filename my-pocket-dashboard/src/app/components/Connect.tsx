'use client';

import { Input, Text,FormLabel, FormControl, Center, Box } from "@chakra-ui/react";
export default function Connect()
{
    return (
        <>
        <div className="formCenter">
         <Text color="white" textAlign="center" fontSize="50px">Connexion</Text>
         <Box  border='3px' borderColor='white'>
            <FormControl>
                <FormLabel color='white' fontSize="30px">Pseudo</FormLabel>
                <Input width="500px" height="30px" />
                <FormLabel color='white' fontSize="30px">Mot de passe</FormLabel>
                <Input width="500px" height="30px" />
            </FormControl>
            <Center>
            <button className="connecting">Se connecter</button>
            </Center>           
        </Box>
        </div>
        </>
    )
}