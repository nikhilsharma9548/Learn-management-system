import React from 'react'
import Header from './Header';
import Hero from './Hero';
import Companies from './Companies';
import CourseCard from './CourseCard';
import Testimonials from './Testimonials';
import Footer from './Footer';
import { useContext } from 'react';
import { AppContext } from '../Context/AppContext';

const Home = () => {
  const {openUser,} = useContext(AppContext)
  return (
    <div className={``}>
        <Header />
        <Hero />
        <Companies />
        <CourseCard />
        <Testimonials />
        <Footer />
    </div>
  )
}

export default Home