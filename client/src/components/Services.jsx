import axios from "axios";
import React, { useState, useEffect } from "react";
// import "./Services.scss";
import { Card, Button } from "react-bootstrap";
import Mailto from "./MailLink";

const Services = () => {
  const [service, setService] = useState([]);

  useEffect(() => {
    axios.get("/api/services").then((response) => {
      setService(response.data);
    });
  }, []);

  // const categories = {};
  const allServices = service.map((item) => {
    // if (item.category in categories) {
    //   categories[item.category].push(item);
    // } else {
    //   categories[item.category] = [item];
    // }
    // return { eventCategories }
    // var d = new Date(item.date);
    // var date = d.toString().split(" ").slice(0, 4).join(" ");

    return (
      <>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="" />
          <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            <Card.Text>{item.description}</Card.Text>
            <Button variant="primary">Message</Button>
            <Mailto email={item.email} title={item.title} />
          </Card.Body>
        </Card>
      </>
    );
  });

  return (
    <>
      <div>Service</div>
      {allServices}
    </>
  );
};

export default Services;

// <div className="row row-cols-1 row-cols-md-3 g-4 cards">
//   <div className="col full-card">
//     <div className="card">
//       <img
//         src="images/government-resources.jpg"
//         className="card-img-top"
//         alt="government-resources"
//       />
//       <div className="card-body">
//         <h5 className="card-title">Government Resources</h5>
//         <p className="card-text">
//           At ServiceOntario you can get your driver’s licence, plate
//           stickers, health cards, birth certificates, register a birth and
//           more.
//         </p>
//         <a href="https://www.ontario.ca/page/serviceontario">
//           Services for ontario
//         </a>
//       </div>
//     </div>
//   </div>
//   <div className="col  full-card">
//     <div className="card">
//       <img
//         src="images/education.jpg"
//         className="card-img-top"
//         alt="education"
//       />
//       <div className="card-body">
//         <h5 className="card-title">Education</h5>
//         <p className="card-text">
//           People for Education is a unique organization in Canada:
//           independent, non-partisan, and fuelled by a belief in the power
//           and promise of public education.
//         </p>
//         <a href="https://peopleforeducation.ca/">Education Services</a>
//       </div>
//     </div>
//   </div>
//   <div className="col  full-card">
//     <div className="card">
//       <img src="images/jobs.jpg" className="card-img-top" alt="jobs" />
//       <div className="card-body">
//         <h5 className="card-title">Jobs</h5>
//         <p className="card-text">
//           Find a job or contract, explore skills and training, and find
//           out about workplace standards and labour mobility.
//         </p>
//         <a href="https://www.canada.ca/en/services/jobs.html">
//           Employment Services
//         </a>
//       </div>
//     </div>
//   </div>
//   <div className="col  full-card">
//     <div className="card">
//       <img
//         src="images/chils-care.jpg"
//         className="card-img-top"
//         alt="food"
//       />
//       <div className="card-body">
//         <h5 className="card-title">Child Care</h5>
//         <p className="card-text">
//           Children shine brightest when they play and learn – together.
//           You can see up coming program for child here.
//         </p>
//         <h5 className="card-title">Child-care</h5>
//         <a href="https://ymcagta.org/child-care">Child-care</a>
//       </div>
//     </div>
//   </div>

// return (
//   <div className="service">
//     <div className="title-page">
//       <h1>Services</h1>
//     </div>

//     <div className="row row-cols-1 row-cols-md-3 g-4 cards">
//       <div className="col full-card">
//         <div className="card">
//           <img
//             src="images/government-resources.jpg"
//             className="card-img-top"
//             alt="government-resources"
//           />
//           <div className="card-body">
//             <h5 className="card-title">Government Resources</h5>
//             <p className="card-text">
//               At ServiceOntario you can get your driver’s licence, plate
//               stickers, health cards, birth certificates, register a birth and
//               more.
//             </p>
//             <a href="https://www.ontario.ca/page/serviceontario">
//               Services for ontario
//             </a>
//           </div>
//         </div>
//       </div>
//       <div className="col  full-card">
//         <div className="card">
//           <img
//             src="images/education.jpg"
//             className="card-img-top"
//             alt="education"
//           />
//           <div className="card-body">
//             <h5 className="card-title">Education</h5>
//             <p className="card-text">
//               People for Education is a unique organization in Canada:
//               independent, non-partisan, and fuelled by a belief in the power
//               and promise of public education.
//             </p>
//             <a href="https://peopleforeducation.ca/">Education Services</a>
//           </div>
//         </div>
//       </div>
//       <div className="col  full-card">
//         <div className="card">
//           <img src="images/jobs.jpg" className="card-img-top" alt="jobs" />
//           <div className="card-body">
//             <h5 className="card-title">Jobs</h5>
//             <p className="card-text">
//               Find a job or contract, explore skills and training, and find
//               out about workplace standards and labour mobility.
//             </p>
//             <a href="https://www.canada.ca/en/services/jobs.html">
//               Employment Services
//             </a>
//           </div>
//         </div>
//       </div>
//       <div className="col  full-card">
//         <div className="card">
//           <img
//             src="images/chils-care.jpg"
//             className="card-img-top"
//             alt="food"
//           />
//           <div className="card-body">
//             <h5 className="card-title">Child Care</h5>
//             <p className="card-text">
//               Children shine brightest when they play and learn – together.
//               You can see up coming program for child here.
//             </p>
//             <h5 className="card-title"></h5>
//             <a href="https://ymcagta.org/child-care">Child-care</a>
//           </div>
//         </div>
//       </div>

//       <div className="col  full-card">
//         <div className="card">
//           <img
//             src="images/fitness.jpg"
//             className="card-img-top"
//             alt="fitness"
//           />
//           <div className="card-body">
//             <h5 className="card-title">Fitness</h5>
//             <p className="card-text">
//               Community resource centres provide community members of all ages
//               with access to a wide variety of health and social supports and
//               services.
//             </p>
//             <a href="https://www.torontocentralhealthline.ca/listServices.aspx?id=10259&region=Toronto">
//               {" "}
//               Health Community Resource
//             </a>
//           </div>
//         </div>
//       </div>

//       <div className="col  full-card">
//         <div className="card">
//           <img
//             src="images/social.jpg"
//             className="card-img-top"
//             alt="social"
//           />
//           <div className="card-body">
//             <h5 className="card-title">Social</h5>
//             <p className="card-text">
//               Community-based programs that facilitate the recovery of
//               individuals who live with mental illness living in Toronto by
//               providing opportunities for peer support, skills development and
//               leadership.{" "}
//             </p>
//             <a href="https://toronto.cmha.ca/programs-services/social-resource-centres/">
//               Social Resource Centre
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>

//     <div className="service-list">
//       <h3>Services List</h3>

//       <div className="contact-tag">
//         <h3>Community Contact </h3>
//         <i class="fa fa-phone-square button-icon-left"></i>Phone: 512-842-1111  |
//         <i class="fa fa-phone-square button-icon-left"></i>Email: info@community.com
//       </div>
//     </div>
//   );
// };

//       <div className="service">
//         <div className="service-image">
//           <img
//             src="images/government-resources.jpg"
//             className="card-img"
//             alt="government-resources"
//           />
//           <div className="service-text">
//             <h5 className="card-title">Law and safety</h5>
//             <p className="card-text">Alberta</p>
//             <div className="chat-button">
//               <Button variant="info">Chat</Button>
//               <i class="fa fa-heart" aria-hidden="true"></i>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>

//     <div className="contact-tag">
//       <h3>Community Contact </h3>
//       <i class="fa fa-phone-square button-icon-left"></i>Phone: 512-842-1111
//       <i class="fa fa-phone-square button-icon-left"></i>Email:
//       info@community.com
//     </div>
//   </div>
// );
