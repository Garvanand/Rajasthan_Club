import { useEffect, useState } from "react";
import './css/style.css'; // Make sure to import your styles
import Loading from './Loading'; // Adjust the path if needed

const BuyTickets = () => {
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const timer = setTimeout(() => {
      setShowForm(true);
    }, 1000); // Simulated loading delay (can adjust as needed)

    return () => clearTimeout(timer);
  }, []);

  return (
    <div id="buytickets" className="buy-tickets-container">
      <div className="text-7xl main text-center mb-8">
        <span className="socod">BOOK YOUR TICKETS!!</span>
      </div>

      {/* Flex container for iframe and QR code + Notes */}
      <div className="flex-container">
        {/* Iframe on the left side */}
        <div className="iframe-container">
          {showForm ? (
            <iframe
              src="https://lu.ma/embed/event/evt-DAgYABywtfG4NOO/simple"
              width="650"
              height="850"
              frameBorder="0"
              style={{ border: "3px solid #bfcbda88", borderRadius: "2px" }}
              allowFullScreen
              aria-hidden="false"
              tabIndex="0"
              title="Buy Tickets Form"
            />
          ) : (
            <Loading /> // Use the Loading component while the form is loading
          )}
        </div>

        {/* QR Code and Notes on the right side */}
        <div className="right-container">
          <div className="qr-code-container">
            <p className="text-xl font-semibold mb-4 text-white">Scan this QR Code to Make Your Payment</p>
            <img
              src="qr.webp" // Replace with your actual QR code image path
              alt="Payment QR Code"
              className="mx-auto w-56 h-56 rounded-lg shadow-lg border-4 border-white"
            />
          </div>

          {/* Note Section */}
          <div className="note-section text-white">
            <div className="text-6xl mt-3 mb-3 main text-center">
              <span className="socod">NOTE</span>
            </div>
            <p className="note-text">
              1. Institution ID cards are mandatory for all the student participants.<br />
              2. Tickets will be sent and approved a day before the event.<br />
              3. It is mandatory to carry the ticket to every event.<br />
              4. Use or carrying of illegal substances is strictly prohibited. If found, strict action will be taken.<br />
              5. The Management is not responsible for any loss of personal belongings.<br />
              6. Participants must possess valid passes for events on the designated day.<br />
            </p><br />
           <b> <p>
              STUDENT COORDINATORS:
              <br />
              Dheeraj Saraswat (6367510083)
              <br />
              Jitendra Bhaskar (8588265520)
            </p></b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyTickets;
