import React from "react";
import sergej from "../images/sergej.jpg";
import oliver from "../images/oliver.jpg";

const Member = ({ name, role, description, image }) => {
  return (
    <div
      style={{
        textAlign: "center",
        width: "350px",
        marginLeft: "4em",
        marginRight: "4em",
        marginTop: "2em",
      }}
    >
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img
          style={{ borderRadius: "100%", width: "250px" }}
          src={image}
          alt="Sergej Sakac"
        />
      </div>
      <h2 className="my-2 text-center text-gray-900 font-bold">{name}</h2>
      <h3 className="my-2 text-center text-gray-900 italic">{role}</h3>
      <p className="my-2 text-center text-gray-900">{description}</p>
    </div>
  );
};

const teamStyle = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  marginTop: "5em",
};

const Team = () => {
  return (
    <div className="mt-8 bg-gray-100">
      <section id="team" data-aos="fade-up">
        <div className="my-4 py-4">
          <div className="my-4 py-4">
            <h2 className="my-2 text-center text-3xl text-gray-900 uppercase font-bold">
              Team
            </h2>
            <div className="flex justify-center">
              <div className="w-24 border-b-4 border-blue-900"></div>
            </div>
          </div>

          <div style={teamStyle} data-aos="fade-in" data-aos-delay="600">
            <Member
              name="Sergej Sakac"
              role="Core developer & Founder"
              description={`Sergej is a member of the Polkadot Fellowship. He has been an
                external core contributor on substrate and polkadot for more
                than a year now. Sergej is also a recent Engineering alumni of
                the Polkadot Blockchain Academy (PBA) held in Berkeley.`}
              image={sergej}
            />
            <Member
              name="Oliver Lim"
              role="Full-stack developer"
              description={`Oliver is a full stack blockchain developer with 2 years of Rust & Substrate development experience. 
              He was involved in 3 projects granted by Web3 Foundation - Imbue network, Fair squares and the Dotflow. 
              He worked with Sergej on the Dotflow application.`}
              image={oliver}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
