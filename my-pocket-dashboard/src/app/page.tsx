'use client';
import './globals.css'
import { Button, FormLabel, Text } from '@chakra-ui/react';
import Link from 'next/link';


export default function Home() {

  return (
    <>
    <div className="center">
        <Text color="white" textAlign="center" fontSize="50px">Mon tableau de bord</Text>
        <div className="boutons">
          <button className="bouton"> <Link href="connect">Se connecter</Link></button>
          <button className="bouton"><Link href="register">S'inscrire</Link></button>
        </div>
    </div>
   
    </>
  )
}
