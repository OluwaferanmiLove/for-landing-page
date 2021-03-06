import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={"bg-main-bg px-14"}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={"relative items-center h-screen max-h-hero-max-height"}>
        <Navbar />
        <div className={'absolute -rotate-90 top-60 -left-52 overflow-hidden'}>
          <p className={'text-hero-bg-text text-hero-large font-Apparel-Display-Regular'}>2022</p>
        </div>
        <div className={'w-full flex flex-col justify-center items-center mt-8'}>
          <div className={"mx-48 relative"}>
            <p className={'text-hero-small text-for-primary font-Apparel-Display-Black absolute left-11vw top-6'}>For.</p>
            <p className={'text-hero-medium text-for-primary-lighter font-Apparel-Display-Regular absolute left-23vw'}>every</p>
            <p className={'text-hero-large text-for-secondary font-Apparel-Display-Regular'}>Woman</p>
          </div>
          <div className={'absolute w-hero-img-width h-hero-img-height bottom-0 left-25vw'}>
            <Image
              src={'/image/heroImage.png'}
              alt={"Picture"}
              layout={'fill'}
              objectFit={'contain'}
            />
          </div>
        </div>
      </header>

      {/* <main className={styles.main}>
      </main> */}

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
