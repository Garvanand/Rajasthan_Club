import React, { useEffect } from "react";
import "./carnival.css";
import Turban from "./../assets/turban.png";
import Activities from "./../assets/Activities-removedbg.png";
import Puppet from "./../assets/puppet.jpg";
import Booth from "./../assets/photobooth.jpg";
import Pithu from "./../assets/pithu.jpg";
import Turban_competition from "./../assets/turbantying.jpg";
import Language from "./../assets/rajasthanlanguage.jpg";
import { useNavigate } from 'react-router-dom';
import flags from "./../assets/festive-flags-vector-9647057-removebg-preview.png"
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
    const navigate = useNavigate();
    const createFloatingElements = () => {
        // Randomize number of floating elements
        const numberOfElements = 12;

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
        <div className=" min-h-screen min-w-[100vw] overflow-hidden"
        style={{
            background: "linear-gradient(135deg, #f8c471, #f39c12, #d35400)",
            }}>
            {/* Heading */}
            <div className="relative flex justify-center items-center pt-4 text-7xl z-10 gap-5">
                {/* Flags in Corners */}
                <div className=" absolute top-0 left-0 -translate-x-1/3 -translate-y-1/3 rotate-30">
                    <img src={flags} alt="Flags" className="w-50 flag-animation flag-hover" />
                </div>
                <div className=" absolute top-0 right-0 translate-x-1/3 -translate-y-1/3 rotate-30">
                    <img src={flags} alt="Flags" className="w-50 flag-animation flag-hover" />
                </div>

                <div className="bg-[rgba(0,0,0,0.4)] flex justify-center items-center py-3 px-2 rounded-lg">                
                {/* Main Heading */}
                <h1 className="camel z-10">🐪</h1>
                <h1 className="anton-regular text-[rgba(255,21,21,1)] animate-glow w-max z-10">
                    Thar Festival
                </h1>
                <h1 className="turban z-10">
                    <img src={Turban} className="pl-1 h-16 w-16" alt="Turban" />
                </h1>
                </div>
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
            
            {/* Book tickets btn */}
            <div className="flex justify-center mt-6 z-10">
                    <button
                        onClick={() => navigate("/buytickets")}
                        className="book-tickets-btn px-8 py-3 text-lg font-bold text-white bg-[rgba(255,21,21,1)] rounded-lg shadow-lg transition-all hover:bg-[rgba(207,8,8,1)] hover:shadow-[0_0_10px_#f88156] focus:outline-none focus:ring-2 focus:ring-[#f88156] focus:ring-offset-2 z-10 mt-10">
                        Book Tickets
                    </button>
            </div>
            

            <div className="instructions flex my-24">
                <div className="steps note-box z-10 flex-1 mx-auto bg-white relative">
                <h3 className="z-10 text-[rgba(255,21,21,1)]">Steps to Book the ticket</h3>
                    <p className="z-10">
                        Please follow these steps to book the ticket.
                    </p>
                    <div>
                        <ul className="flex flex-col gap-6">
                            <li><span className="font-bold">Step 1:</span> Click on the "Book tickets" button above</li>
                            <li><span className="font-bold">Step 2:</span> On the next page, click the "Request to Join" button. This will open up a registration form for you to fill in your details.</li>
                            <li><span className="font-bold">Step 3:</span> Carefully fill in all the required details in the form. These details will be used to confirm your registration and issue your event ticket. Ensure that the information entered is accurate to avoid issues later.</li>
                            <li><span className="font-bold">Step 4:</span> On the same page on right hand side, you'll find a QR code. Scan the QR code using any payment application and pay the required amount. After completing the payment, you will receive a UTR (Unique Transaction Reference) number.</li>
                            <li><span className="font-bold">⚠ Important: The UTR is your transaction ID. Make sure to enter it correctly in the form to confirm your payment. Double-check this information before proceeding</span></li>
                            <li><span className="font-bold">Step 5:</span> After completing the payment and entering the UTR and other details, click the "Request to Join" button again to submit your registration.</li>
                            <li><span className="font-bold">Step 6:</span>Hooray! You are now registered for the event. A confirmation email will be sent to your registered email address. You will receive your ticket, including a QR code, one day prior to the event. Ensure you keep this ticket safe as it will be required for entry.</li>
                        </ul>
                    </div>
                </div>
                <div className="note-box flex-1 z-10 mx-auto bg-white relative">
                    <h3 className="z-10 text-[rgba(255,21,21,1)]">Important Note</h3>
                    <div>
                        <ul>
                            <li>1. <span className="font-bold">Institution ID Cards:</span> All student participants are required to carry their Institution ID cards at all times. Entry will be denied without a valid ID.</li>
                            <li>2. <span className="font-bold">Ticket Distribution:</span> Tickets must be booked only through the Luma portal. Tickets sent via email will be considered valid for entry. Ensure that you have booked and received your ticket via email</li>
                            <li>3. <span className="font-bold">Ticket Requirement:</span> Carrying your ticket is mandatory for entry to each event. No entry will be allowed without the proper ticket, irrespective of the circumstances</li>
                            <li>4. <span className="font-bold">Prohibited Substances:</span> The use, possession, or carrying of illegal substances is strictly prohibited. Any participant found in violation will face immediate expulsion from the event, along with further legal consequences.</li>
                            <li>5. <span className="font-bold">Personal Belongings:</span> The management will not be held responsible for any loss, theft, or damage to personal belongings. Participants are advised to keep their valuables secure at all times.</li>
                            <li>6. <span className="font-bold">Respect and Conduct:</span> All participants are expected to behave in a respectful and dignified manner. Any form of misbehavior, harassment, or disrespect towards others will result in immediate removal from the event and strict action will be taken by DSW.</li>
                            <li>7. <span className="font-bold">Emergency Protocol:</span> In case of emergencies, please follow the instructions of event coordinators and the security staff. Failure to comply with safety protocols will result in expulsion from the event.</li>
                            <li>8. <span className="font-bold">Photography/Recording:</span> Photography and video recording are allowed only in designated areas. Participants violating this rule may be asked to surrender their devices or leave the venue.</li>
                            <li>9. <span className="font-bold">Event Timings:</span> Participants must arrive on time for all events. Latecomers will not be permitted to join the event once it has started.</li>
                            <li>10. Kindly cooperate with discipline committee members and the club members for a seamless experience.</li>
                        </ul>
                        <div className="mt-5">
                            <ul>
                                <li className="font-bold">
                              For technical queries,contact Garv Anand - +91 80541 82892
                                </li>
                                <li className="font-bold">For any other issues,contact Jitendra - +91 95882 65520, Dheeraj - +91 6367 510 083 </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            
        </div>
    );
};

export default Carnival;
