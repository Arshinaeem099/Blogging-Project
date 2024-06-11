import React from "react";
import NavBar from "../NavBar/NavBar";

const AboutPage = () => {
  return (
    <>
    <NavBar/>
      <div className="aboutContainer-1">
        <br />
        <br />
        <br />
      </div>

      <div className="aboutContainer-2">
        <h2 className="about-h2">Welcome to MANCHAHE BLOGS!</h2>
      </div>

      <div className="aboutContainer-3">
        <p className="aboutPara-1">Our Mission</p>
        <p className="aboutPara-2">At MANCHAHE BLOGS!, we believe that sharing knowledge, experiences, and stories can inspire and connect </p>
        <p className="aboutPara-2">people from all walks of life. Our mission is to create a vibrant community where readers can find </p>
        <p className="aboutPara-2">valuable insights, practical advice, and engaging content on a variety of topics.</p>
      </div>

      <div className="aboutContainer-4">
     <p className="aboutPara-3"> What We Write About</p>
     <p className="aboutPara-4">Our blog covers a wide range of subjects, including:</p>
     <p className="aboutPara-4">* Lifestyle: Tips and inspiration for everyday living.</p>
     <p className="aboutPara-4">* Travel: Destination guides, travel tips, and adventure stories.</p>
     <p className="aboutPara-4">* Health & Wellness: Advice on physical, mental, and emotional well-being.</p>
     <p className="aboutPara-4">* Technology: Latest trends, reviews, and how-tos.</p>
     <p className="aboutPara-4">* Food & Recipes: Delicious recipes and cooking tips.</p>
     <p className="aboutPara-4">* Personal Development: Strategies for growth, motivation, and success.</p>
     <p className="aboutPara-4"> We strive to provide content that is informative, entertaining, and useful. Whether you’re looking </p>
     <p className="aboutPara-4">to learn something new, find inspiration, or simply enjoy a good read, we’ve got you covered.</p>
      </div>
      
   <div className="aboutContainer-5">
    <p className="aboutPara-5">Thank you for visiting MANCHAHE BLOGS!. We hope you enjoy our content and become a part of our growing community.</p>
   </div>
    
    </>
  );
};

export default AboutPage;
