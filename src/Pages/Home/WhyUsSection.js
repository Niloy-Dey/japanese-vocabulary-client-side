import React from "react";

const WhyUsSection = () => {
    return (
        <div className="max-w-7xl mx-auto"> 
        <section className="flex flex-col md:flex-row items-center p-8 bg-background">
            <div className="md:w-1/2">
                <img src="https://templatekits.themewarrior.com/inlingo-new/wp-content/uploads/sites/102/2023/08/XVYMZ38.jpg" alt="Classroom Interaction" className="rounded-lg shadow-lg" />
            </div>
            <div className="md:w-1/2 p-6 md:pl-8">
                <h2 className="text-xl lg:mb-10 font-bold text-primary"> <span className="text-green-500">▶ </span>  WHY US</h2>
                <h3 className="text-5xl font-semibold text-primary">Why japanese English Courses?</h3>
                <p className="mt-4 text-muted-foreground">
                    Lorem ipsum dolor sit amet consectetur. Montes quisque urna molestie tincidunt aliquet quam. Imperdiet at pellentesque vitae aliquet tempor eget rutrum tellus. Leo a luctus vitae urna nibh
                    faucibus. A sagittis quisque ligula vitae dignissim vel nunc urna urna. Morbi luctus purus vitae neque vitae pellentesque ultricies.
                </p>
            </div>
        </section>
        </div>
    );
};

export default WhyUsSection;
