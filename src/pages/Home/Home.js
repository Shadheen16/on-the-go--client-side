import React from 'react';
import Banner from '../../shared/Banner/Banner';
import SectionHeader from '../../shared/SectionHeader/SectionHeader';
import Services from '../Services/Services';
import FeelTheVibe from './FeelTheVibe/FeelTheVibe';
import Gallery from './Gallery/Gallery';

const Home = () => {
    return (
        <div>
            <header>
                {/* banner */}
                <Banner></Banner>
            </header>
            <Services></Services>
            <FeelTheVibe></FeelTheVibe>

            <section>
                <SectionHeader
                headerText="Our Gallery"
                addClass="text-gray-600 mb-10"
                />
               <Gallery></Gallery>
            </section>
            
           
        </div>
    );
};

export default Home;