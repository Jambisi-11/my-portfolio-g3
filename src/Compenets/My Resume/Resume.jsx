import React  from 'react'
import "./Resume.css"

const Resume = () => {


 
  return (
    <div className="flex justify-center items-center">
    <div className='w-[95%]'>
    <div className = "resume_container">
        <h3 className='font-bold underline-offset-8 text-2xl'>Resume</h3>
          <div className="headdiv"><h4 className = "head">👨‍💻 Works Experiences</h4></div>
      
      <div className ="resume_info">
          <div className='column-left'>
            <div className = "resume_info_content1" id='info1'>
                <h6 className = "heading">2008-Present</h6>
                <h3>Art Director-Facebook Inc</h3>
                <p className = "descri">I would gladly pay over 600 dollars for tavonline. Tavonline has really helped our business. I like tavonline more and more each day because it makes my life a lot easier.</p>
            </div>
        
            {/* <div className="empty1"> ............................................ Yeas that wil be good. this pat is to be hidden. so if you see it ignore. I would gladly pay ov er 600 dollars for tavonline. Tavonline has really helped our business. I like tavonline more and more each day because it makes my life a lot easier.</div> */}
            <div className = "resume_info_content2">
              <h6 className = "heading">2008-2010</h6>
              <h3>Senior Designer-Google</h3>
              <p className = "descri">I would gladly pay over 600 dollars for tavonline. Tavonline has really helped our business. I like tavonline more and more each day because it makes my life a lot easier.</p>
            </div>

        {/* <div className="empty1"> ............................................ Yeas that wil be good. this pat is to be hidden. so if you see it ignore. I would gladly pay ov er 600 dollars for tavonline. Tavonline has really helped our business. I like tavonline more and more each day because it makes my life a lot easier.</div> */}
             {/*  <div className="empty1"> ............................................ Yeas that wil be good. this pat is to be hidden. so if you see it ignore. I would gladly pay ov er 600 dollars for tavonline. Tavonline has really helped our business. I like tavonline more and more each day because it makes my life a lot easier.</div> */}
             <div className = "resume_info_content5">
              <h6 className = "heading">2000-2004</h6>
              <h3>-Facebook Inc</h3>
              <p className = "descri">I would gladly pay over 600 dollars for tavonline. Tavonline has really helped our business. I like tavonline more and more each day because it makes my life a lot easier.</p>
            </div>
          </div>
 
          <div class="vertical-line"></div>

          <div className='column-right'>
          <div className = "resume_info_content3" id='info4'>
              <h6 className = "heading">2005-2010</h6>
              <h3>Junior Designer-Creative Shake</h3>
              <p className = "descri">I wouldgladly pay ov er 600 dollars for tavonline. Tavonline has really helped our business. I like tavonline more and more each day because it makes my life a lot easier.</p>
            </div>
            {/* <div className="empty1"> ............................................ Yeas that wil be good. this pat is to be hidden. so if you see it ignore. I would gladly pay ov er 600 dollars for tavonline. Tavonline has really helped our business. I like tavonline more and more each day because it makes my life a lot easier.</div>
             */}
            <div className = "resume_info_content4">
              <h6 className = "heading">2004-2008</h6>
              <h3>Junior Designer-Grovemade</h3>
              <p className = "descri">I would gladly pay over 600 dollars for tavonline. Tavonline has really helped our business. I like tavonline more and more each day because it makes my life a lot easier.</p>
            </div>

            
        </div>
      </div>


      <div className="space1"></div>
      <div className="headdiv"><h4 className = "head">🎓 Education</h4></div>
      <div className ="resume_info">

      <div className='column-left'>
            <div className = "resume_info_content1">
                <h6 className = "heading">2004-2009</h6>
                <h3>Abc University of Los Angeles</h3>
                <p className = "descri">II would gladly pay over 600 dollars for tavonline. Tavonline has really helped our business. I like tavonline more and more each day because it makes my life a lot easier.</p>
            </div>
            {/* <div className="empty1"> ............................................ Yeas that wil be good. this pat is to be hidden. so if you see it ignore. I would gladly pay ov er 600 dollars for tavonline. Tavonline has really helped our business. I like tavonline more and more each day because it makes my life a lot easier.</div> */}
            <div className = "resume_info_content2">
              <h6 className = "heading">2004-2003</h6>
              <h3>Drawing Course</h3>
              <p className = "descri">I would gladly pay over 600 dollars for tavonline. Tavonline has really helped our business. I like tavonline more and more each day because it makes my life a lot easier.</p>
            </div>
        </div>
        {/* I added this */}
        <div className="vertical-line2"></div> 


        <div className='column-right'>
        {/* <div className="empty1"> ............................................ Yeas that wil be good. this pat is to be hidden. so if you see it ignore. I would gladly pay ov er 600 dollars for tavonline. Tavonline has really helped our business. I like tavonline more and more each day because it makes my life a lot easier.</div> */}
          <div className = "resume_info_content3">
            <h6 className = "heading">2000-2003</h6>
            <h3>Abc High School</h3>
            <p className = "descri">I would gladly pay over 600 dollars for tavonline. Tavonline has really helped our business. I like tavonline more and more each day because it makes my life a lot easier.</p>
          </div>
        {/* <div className="empty1"> ............................................ Yeas that wil be good. this pat is to be hidden. so if you see it ignore. I would gladly pay ov er 600 dollars for tavonline. Tavonline has really helped our business. I like tavonline more and more each day because it makes my life a lot easier.</div> */}
            <div className = "resume_info_content4">
              <h6 className = "heading">2010-present</h6>
              <h3>Abc college of Los Angels</h3>
              <p className = "descri">I would gladly pay over 600 dollars for tavonline. Tavonline has really helped our business. I like tavonline more and more each day because it makes my life a lot easier.</p>
            </div>    
        </div>
      </div>

      <div className="space2"></div>
      <div className="skills">
           <div><h1 className = "mySkills">My Skills</h1></div>
            <div className="skill_category">
              <h2 className="lang">Language</h2>
                      <div className="chart">
                      <div class="circular-progress1">
                        <div class="inner"></div>
                        <svg viewBox="0 0 100 100">
                          <path d="M 50, 50 m -45, 0 a 45,45 0 1,0 90,0 a 45,45 0 1,0 -90,0" stroke-width="8" stroke-miterlimit="10" stroke-dasharray="283" />
                        </svg>
                        <span class="progress-text">90%</span>
                      </div>
                <br />
                   <h5 className="skill1">English</h5>
               </div>
               <div className="chart">
                      <div class="circular-progress2">
                        <div class="inner"></div>
                        <svg viewBox="0 0 100 100">
                          <path d="M 50, 50 m -45, 0 a 45,45 0 1,0 90,0 a 45,45 0 1,0 -90,0" stroke-width="8" stroke-miterlimit="10" stroke-dasharray="283" />
                        </svg>
                        <span class="progress-text">55%</span>
                      </div>
                <br />
                   <h5 className="skill1">Spanish</h5>
               </div>
               <div className="chart">
                      <div class="circular-progress3">
                        <div class="inner"></div>
                        <svg viewBox="0 0 100 100">
                          <path d="M 50, 50 m -45, 0 a 45,45 0 1,0 90,0 a 45,45 0 1,0 -90,0" stroke-width="8" stroke-miterlimit="10" stroke-dasharray="283" />
                        </svg>
                        <span class="progress-text">80%</span>
                      </div>
                <br />
                   <h5 className="skill1">Yoruba</h5>
               </div>
               <div className="chart">
                      <div class="circular-progress4">
                        <div class="inner"></div>
                        <svg viewBox="0 0 100 100">
                          <path d="M 50, 50 m -45, 0 a 45,45 0 1,0 90,0 a 45,45 0 1,0 -90,0" stroke-width="8" stroke-miterlimit="10" stroke-dasharray="283" />
                        </svg>
                        <span class="progress-text">60%</span>
                      </div>
                <br />
                   <h5 className="skill1">French</h5>
               </div>
            </div>
      </div>
      <hr />
    <section className="design">
      <div className="skill_category">
        <h2 className="skill2">Design</h2>
          <div className="skill3">
              <div class="progress-bar-container">
                  <h4 class="progress-title">Photoshop<span class="progress-percentage">60%</span></h4>
                  <div class="progress-bar">
                    <div class="progress" style={{ width: `${80}%` }}></div>
                  </div>
             </div>
             <div class="progress-bar-container">
                  <h4 class="progress-title">Sketch<span class="progress-percentage">60%</span></h4>
                  <div class="progress-bar">
                    <div class="progress" style={{ width: `${50}%` }}></div>
                  </div>
             </div>
             <div class="progress-bar-container">
                  <h4 class="progress-title">Figma<span class="progress-percentage">60%</span></h4>
                  <div class="progress-bar">
                    <div class="progress" style={{ width: `${70}%` }}></div>
                  </div>
             </div>
        </div>
      </div>
      
      <div className="skill_category">
        <h2 className="skill2">Coding</h2>
        <div className="skill3">
          
            
        <div class="progress-bar-container">
                  <h4 class="progress-title">JavaScript<span class="progress-percentage">60%</span></h4>
                  <div class="progress-bar">
                    <div class="progress" style={{ width: `${80}%` }}></div>
                  </div>
             </div>
            
            
             <div class="progress-bar-container">
                  <h4 class="progress-title">Html<span class="progress-percentage">60%</span></h4>
                  <div class="progress-bar">
                    <div class="progress" style={{ width: `${50}%` }}></div>
                  </div>
             </div>
           
             <div class="progress-bar-container">
                  <h4 class="progress-title">CSS<span class="progress-percentage">60%</span></h4>
                  <div class="progress-bar">
                    <div class="progress" style={{ width: `${70}%` }}></div>
                  </div>
             </div>
        
        </div>
      </div>
      </section>
      </div>
      </div>
    </div>
  )
}

export default Resume