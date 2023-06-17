import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - Ecommer app"}>
      <div className="row  w-100 container mx-auto mt-5p">
        <div className="w-50 mt-5">
          <img
            src="/images/abt.jpg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="w-50 my-auto p-5 mt-5">
          <h5 className="fw-bold">Let's know about </h5>
          <h4 className="text-danger mb-4 fw-bold">INFINITY Mega Mall</h4>
          <p className="text-justify mt-2 text-16 text-secondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            officiis obcaecati esse tempore unde ratione, eveniet mollitia,
            perferendis eius temporibus dicta blanditiis doloremque explicabo
            quasi sunt vero optio cum aperiam vel consectetur! Laborum enim
            accusantium atque, excepturi sapiente amet! Tenetur ducimus aut
            commodi illum quidem neque tempora nam.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
