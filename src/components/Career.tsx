import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          Education <span>&</span>
          <br /> Leadership
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech CSE</h4>
                <h5>GL Bajaj Institute</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Computer Science and Engineering. CGPA: 8.68 / 10. Relevant Coursework: Data Structures & Algorithms, Operating Systems, DBMS, Machine Learning.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Team Leader & Dev</h4>
                <h5>Smart India Hackathon</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Led a development team during Smart India Hackathon internal institute selection round. Developed backend logic and coordinated system integration for the project. Selected among the Top 50 teams from the institute.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Class XII</h4>
                <h5>Sir Syed Public School</h5>
              </div>
              <h3>2022</h3>
            </div>
            <p>
              Senior Secondary Education. Percentage: 88%.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Class X</h4>
                <h5>Sir Syed Public School</h5>
              </div>
              <h3>2020</h3>
            </div>
            <p>
              Secondary Education. Percentage: 87.6%.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
