import React from 'react'
import './Service.css'

const Service = () => {

  return (
    <div className='service-cart'>
        <div className='title-page'>
        <h1>Services</h1>
        </div>
            

      <div className="row row-cols-1 row-cols-md-3 g-4">
          <div className="col">
            <div className="card">
            <img src="images/government-resources.jpg" className="card-img-top" alt="government-resources"/>
            <div className="card-body">
              <h5 className="card-title">Government Resources</h5>
              <p className="card-text">At ServiceOntario you can get your driver’s licence, plate stickers, health cards, birth certificates, register a birth and more.</p>
              <a href="https://www.ontario.ca/page/serviceontario">Services for ontario</a>
            </div>
          </div>
          </div>
        <div className="col">
          <div className="card">
            <img src="images/education.jpg" className="card-img-top" alt="education"/>
            <div className="card-body">
              <h5 className="card-title">Education</h5>
              <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <a href="https://peopleforeducation.ca/">Education Services</a>
            </div>
          </div>
          </div>
        <div className="col">
          <div className="card">
            <img src="images/jobs.jpg" className="card-img-top" alt="jobs" / >
            <div className="card-body">
              <h5 className="card-title">Jobs</h5>
              <p className="card-text">Find a job or contract, explore skills and training, and find out about workplace standards and labour mobility.</p>
              <a href="https://www.canada.ca/en/services/jobs.html">Employment Services</a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src="images/chils-care.jpg" className="card-img-top" alt="food" />
            <div className="card-body">
              <h5 className="card-title">Child Care</h5>
              <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <h5 className="card-title"></h5>
              <a href="https://ymcagta.org/child-care">Child-care</a>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card">
            <img src="images/fitness.jpg" className="card-img-top" alt="fitness" />
            <div className="card-body">
              <h5 className="card-title">Fitness</h5>
              <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <a href="https://www.torontocentralhealthline.ca/listServices.aspx?id=10259&region=Toronto"> Health Community Resource</a>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card">
            <img src="images/social.jpg" className="card-img-top" alt="social" />
            <div className="card-body">
              <h5 className="card-title">Social</h5>
              <p className="card-text">Community-based programs that facilitate the recovery of individuals who live with mental illness living in Toronto by providing opportunities for peer support, skills development and leadership. </p>
              <a href="https://toronto.cmha.ca/programs-services/social-resource-centres/">Social Resource Centre</a>
            </div>
          </div>
        </div>


      </div>
    </div> 
  )
}


export default Service;