import React, { useEffect } from "react";
import "./carnival.css";
import Turban from "./../assets/turban.png";
import Activities from "./../assets/Activities-removedbg.png";
import Puppet from "./../assets/puppet.jpg";
import Booth from "./../assets/photobooth.jpg";
import Pithu from "./../assets/pithu.jpg";
import Turban_competition from "./../assets/turbantying.jpg";
import Language from "./../assets/rajasthanlanguage.jpg";

// Activity data
const activityData = [
    {
        id: 1,
        name: "Puppet Show",
        image: Puppet,
        description: "Enjoy the traditional art of puppetry with an engaging story.",
    },
    {
        id: 2,
        name: "Photo Booth",
        image: Booth,
        description: "Capture your memories with a fun and colorful photo booth.",
    },
    {
        id: 3,
        name: "Fun Games (Pithu)",
        image: Pithu,
        description: "Relive childhood memories with exciting traditional games.",
    },
    {
        id: 4,
        name: "Turban Tying Competition",
        image: Turban_competition,
        description: "Show off your skills in tying the perfect Rajasthani turban.",
    },
    {
        id: 5,
        name: "Rajasthani Language Phrase Challenge",
        image: Language,
        description: "Learn and compete in fun Rajasthani language phrases.",
    },
];

const Carnival = () => {
    const createFloatingElements = () => {
        // Randomize number of floating elements
        const numberOfElements = 15; 

        // Colors related to Rajasthan
        const colors = [
            'rajasthan-colors-1', 
            'rajasthan-colors-2', 
            'rajasthan-colors-3', 
            'rajasthan-colors-4'
        ];

        // Create random floating elements
        for (let i = 0; i < numberOfElements; i++) {
            const size = Math.floor(Math.random() * 30) + 20; // Random size between 20px and 50px
            const positionX = Math.floor(Math.random() * window.innerWidth);
            const positionY = Math.floor(Math.random() * window.innerHeight);
            const colorClass = colors[Math.floor(Math.random() * colors.length)];
            const shape = Math.random() > 0.5 ? 'circle' : 'square'; // Random shape: circle or square

            const element = document.createElement("div");
            element.classList.add("floating-element", colorClass, shape);
            element.style.width = `${size}px`;
            element.style.height = `${size}px`;
            element.style.left = `${positionX}px`;
            element.style.top = `${positionY}px`;
            document.body.appendChild(element);
        }
    };

    useEffect(() => {
        createFloatingElements();
    }, []);

    return (
        <div className="bg-[rgb(250,239,220)] min-h-screen min-w-[100vw] overflow-hidden">
            {/* Heading */}
            
            <div className="heading flex justify-center items-center pt-4 text-7xl z-10">
                <h1 className="camel z-10">🐪</h1>
                <h1 className="anton-regular text-[#f88156] animate-glow w-max z-10">
                    Thar Festival
                </h1>
                <h1 className="turban z-10">
                    <img src={Turban} className="pl-1 h-16 w-16" alt="Turban" />
                </h1>
            </div>

            {/* Activities */}
            <div className="flex mt-14 z-10">
                <div className="activities flex-1 z-10">
                    <img
                        src={Activities}
                        alt="Activities"
                        className="m-auto h-[400px] w-[700px] rounded-lg"
                    />
                </div>
                <div className="activities-card flex-1 flex flex-wrap gap-4 justify-center items-center z-10">
                    {activityData.map((activity) => (
                        <div key={activity.id} className="activity-card">
                            <div className="card-inner">
                                {/* Front Side */}
                                <div className="card-front z-10">
                                    <img
                                        src={activity.image}
                                        alt={activity.name}
                                        className="h-full w-full object-cover rounded-lg"
                                    />
                                    <div className="overlay z-10">
                                        <h2 className="text-lg font-bold text-center text-white">
                                            {activity.name}
                                        </h2>
                                    </div>
                                </div>
                                {/* Back Side */}
                                <div className="card-back flex justify-center items-center p-4 rounded-lg">
                                    <p className="text-center text-white">{activity.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Carnival;
