import Head from 'next/head';
import AboutArea from '../../../components/Home/AboutArea';
import HomeBlog from '../../../components/Home/HomeBlog';
import Campus from '../../../components/Home/Campus';
import CounterArea from '../../../components/Home/CounterArea';
import Features from '../../../components/Home/Features';
import Header from '../../../components/Home/Header';
import HeroArea from '../../../components/Home/HeroArea';
import HomeCourses from '../../../components/Home/HomeCourses';
import ResearchArea from '../../../components/Home/ResearchArea';
import Cta from '../../../components/Home/Cta';
import Footer from '../../../components/common/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>MediRedi</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header/>
      <HeroArea/>
      <Features/>
      
      <AboutArea/>
      <CounterArea/>
      <HomeCourses/>
      <Campus/>
      <ResearchArea/>
      <Cta/>
      <Footer/>
    </>
  )
}
