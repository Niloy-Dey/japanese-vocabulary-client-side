import React from 'react';
import Navbar from '../../Component/Shared/Navbar';
import Banner from './Banner';
import Footer from '../../Component/Shared/Footer';
import WhyUsSection from './WhyUsSection';
import BlogSection from './BlogSection';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <WhyUsSection></WhyUsSection>
            <BlogSection></BlogSection>
            <Footer></Footer>
        </div>
    );
};

export default Home;