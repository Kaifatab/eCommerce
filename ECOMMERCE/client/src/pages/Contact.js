import React from "react";
import Layout from "./../components/Layout/Layout";
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";
const Contact = () => {
  return (
    <Layout title={"Contact us"}>
      <div className="row container mx-auto mt-5p">
        <div className="col-md-6 mt-5">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-6 p-5  my-auto">
          <h3 className="bg-dark p-2 fs-4 text-white text-center">CONTACT US</h3>
      <div className="px-4 pt-2 ">
      <p className="text-justif text-secondary my-3">
            If you have any query and info about prodduct, feel free to call
            anytime. We are 24X7 vaialible
          </p>
          <p className="mt-4">
            <BiMailSend className="fs-2" /> : www.support@infinity.com
          </p>
          <p className="mt-3">
            <BiPhoneCall className="fs-2" /> : 012-3456789
          </p>
          <p className="mt-3">
            <BiSupport className="fs-2" /> : 1800-0000-0000 (toll free)
          </p>
      </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
