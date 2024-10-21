import React from "react";
import "./Fee.css";
import { FaRupeeSign } from "react-icons/fa"; // FontAwesome icon for Rupees

const Fee = () => {
  const preschoolFees = [
    { plan: "Termi-Wise Annual Fee", amount: "₹35,000/-" },
    { plan: "Term 1 (Advance)", amount: "₹10,000/-" },
    { plan: "Term 2", amount: "₹12,500/-" },
    { plan: "Term 3", amount: "₹12,500/-" },
    { plan: "Full Annual Fee", amount: "₹30,000/-" },
    { plan: "Half-Year (6 Months) Fee", amount: "₹21,000/-" },
    { plan: "3 Months Fee", amount: "₹12,000/-" },
    { plan: "1 Month Fee", amount: "₹5,000/-" },
  ];
  const preschoolFeesPM= [
    // Extended Day Fees
    { plan: "1 Month Fee (Extended Day)", amount: "₹7,500/-" },
    { plan: "Hourly Charge", amount: "₹80/-" },
    { plan: "Extended Day Fee (Monthly)", amount: "Annual Fee + ₹3,000/- (Every month)" },
  ];

  const daycareFeesAM = [
    { plan: "Annual Term-wise Fee", amount: "₹40,000/-" },
    { plan: "Term 1 (Advance)", amount: "₹15,000/-" },
    { plan: "Term 2", amount: "₹12,500/-" },
    { plan: "Term 3", amount: "₹12,500/-" },
    { plan: "Half-Year (6 Months) Fee", amount: "₹23,000/-" },
    { plan: "3 Months Fee", amount: "₹14,000/-" },
    { plan: "1 Month Fee", amount: "₹6,000/-" },
  ];

  const daycareFeesPM = [
    { plan: "Extended Day Fee (Monthly)", amount: "Annual Fee + ₹3,500/- (Every month)" },
    { plan: "1 Month Fee (Extended Day)", amount: "₹9,000/-" },
    { plan: "Hourly Charge", amount: "₹100/-" },
  ];

  return (
    <div className="fee-menu-container">
      <h2 className="menu-title">COCOMELON Pre School & Day Care</h2>
      <p className="menu-subtitle">"Where little minds grow, giggles flow"</p>

      <div className="fee-section">
        <h3 className="section-title">Pre-School Fees (AM)</h3>
        <p className="timing">Timings: 9:00 AM - 12:30 PM</p>
        <div className="fee-card-container">
          {preschoolFees.map((fee, index) => (
            <div key={index} className="fee-card">
              <div className="fee-title">{fee.plan}</div>
              <div className="fee-amount">
                <FaRupeeSign /> {fee.amount}
              </div>
            </div>
          ))}
        </div>

        <h3 className="section-title">Pre-School Fees (PM)</h3>
        <p className="timing">Timings: 9:00 PM - 4:30 PM</p>
        <div className="fee-card-container">
          {daycareFeesPM.map((fee, index) => (
            <div key={index} className="fee-card">
              <div className="fee-title">{fee.plan}</div>
              <div className="fee-amount">
                <FaRupeeSign /> {fee.amount}
              </div>
            </div>
          ))}
        </div>
      </div>



      <div className="fee-section daycare">
        <h3 className="section-title">Daycare Fees (AM)</h3>
        <p className="timing">Timings: 9:00 AM - 12:30 PM</p>
        <div className="fee-card-container">
          {daycareFeesAM.map((fee, index) => (
            <div key={index} className="fee-card">
              <div className="fee-title">{fee.plan}</div>
              <div className="fee-amount">
                <FaRupeeSign /> {fee.amount}
              </div>
            </div>
          ))}
        </div>

        <h3 className="section-title">Daycare Fees (PM)</h3>
        <p className="timing">Timings: 9:00 PM - 4:30 PM</p>
        <div className="fee-card-container">
          {daycareFeesPM.map((fee, index) => (
            <div key={index} className="fee-card">
              <div className="fee-title">{fee.plan}</div>
              <div className="fee-amount">
                <FaRupeeSign /> {fee.amount}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Fee;
