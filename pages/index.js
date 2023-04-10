import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className={styles.container}>
     <h1>
      Omega MC
     </h1>
     <Link href='/about'>Sobre Nosotros</Link>
    </div>
  )
}
