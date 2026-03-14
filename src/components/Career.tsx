import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My Journey <span>&</span>
          <br /> Emerging Developer
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>1 Year</h4>
                <h5>Recyoc Scrap to Income Platform</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Recyoc Scrap to Income Platform
              Developed a web application that enables users to sell household
              scrap to nearby recyclers, promoting sustainable waste 
              management and environmental responsibility.
              Built using HTML, CSS, JavaScript, Node.js, Express.js, and MongoDB..
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>1 Year</h4>
                <h5>Right Choice</h5>
              </div>
              <h3>2021</h3>
            </div>
            <p>
              Built a full-stack Airbnb-inspired platform that allows users 
              to list and book properties. Integrated an AI-based recommendation 
              feature to suggest nearby tourist attractions and places to visit,
               enhancing the travel planning experience..
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>2 Year</h4>
                <h5>Payroll Management System (Backend)</h5>
              </div>
              <h3>Now Working On</h3>
            </div>
            <p>
              Developed a backend payroll system to manage employee records,
               attendance, and salary processing. Implemented RESTful APIs 
               for employee management, payroll calculation, and payslip 
               generation using Node.js, Express.js, and MongoDB.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
