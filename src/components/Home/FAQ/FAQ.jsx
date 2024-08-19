import Collapsible from 'react-collapsible';
import "./FAQ.css";

const faqs = [
    {
        title: "1. What is Mharo Rajasthan Club?",
        content: `Ans: 
Mharo Rajasthan Club at VIT is a student organization that celebrates Rajasthani culture and traditions.`,
    }, {
        title: "2. Not able verify/booked tickets and transaction successful and mail not received.",
        content: `Ans: Please send your queries to mharorajasthanvitb@gmail.com`,
    }, {
        title: "3. What events does the club organize?",
        content: `Ans: We organize cultural festivals, traditional dance performances, and social gatherings related to Rajasthani heritage.`,
    }, {
        title: "4. Do I need to be from Rajasthan to join?",
        content: `Ans: No, the club is open to everyone interested in learning about and celebrating Rajasthani culture.`,
    }, {
        title: "5. How can I get involved in club activities?",
        content: `Ans: Attend our events, participate in our activities, or volunteer to help with organizing events.`,
    }, {
        title: "6. Where can I find updates about upcoming events?",
        content: `Ans: Check our website, social media channels, or join our mailing list for the latest updates.`,
    }, {
        title: "7. What should I do if I encounter issues accessing the club’s website?",
        content: `Ans: Clear your browser cache, check your internet connection, or contact our tech support via https://chat.whatsapp.com/LJ9Uj8EHLDk8zuynbvV0hm .`,
    },
]


const FAQ = () => {

    return (
        <div id="faq" className='text-white flex flex-col justify-center items-center m-12'>
            <div class="main text-6xl justify-center">
                <span class="socod">FAQ</span>
            </div>
            <div className=''>
            {faqs.map((data) => {
                return (<Collapsible trigger={data.title} transitionTime={400}
                 easing={'cubic-bezier(0.175, 0.885, 0.32, 2.275)'}>
                    <p>
                        {data.content}
                    </p>
                </Collapsible>)
            })}
            </div>
        </div>
    );
}

export default FAQ;