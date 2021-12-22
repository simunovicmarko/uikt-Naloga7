import { Button } from '@mui/material'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { LandingPage } from '../Components/LandingPage'
import { Layout } from '../Components/Layout'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
      <div className={styles.container}>
        <LandingPage/>
      </div>
  )
}

export default Home
