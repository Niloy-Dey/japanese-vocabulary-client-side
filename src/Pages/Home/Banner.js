import React from 'react';
import Navbar from '../../Component/Shared/Navbar';

const Banner = () => {
    return (
        <div>
           
            <div
                className="relative bg-cover bg-center h-[90vh] flex items-center"
                style={{
                    backgroundImage: "url('https://templatekits.themewarrior.com/inlingo-new/wp-content/uploads/sites/102/2023/08/KAAMSGG.jpg')",
                }}
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-60 z-10"></div>

                {/* Content */}
                <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 text-white">
                    <div className="text-left">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight ">
                        Take Your English  <br />  To The Next Level.
                        </h1>
                        <p className="mt-4 text-lg md:text-xl">
                            Your English progress is what matters the most to us. If you're not satisfied
                            after 12 weeks of learning, you get your money back.
                        </p>
                        <button
                            className="mt-6 px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-md shadow-lg"
                            onClick={() => alert('Start Now')}
                        >
                            Start Now
                        </button>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Banner;
