import { FC } from "react";
import Container from "../../containers/container";
import { ServicesBox } from "../../ui";
import "./_style.scss";

const ServicesComponent: FC = () => {
  return (
    <div className="services">
      <Container>
        {/* ------------------------ wrapper ------------------------ */}
        <div className="wrapper"> 
          {/* ------------------------ box ------------------------ */}
          <ServicesBox order="01" jobTitle="Web Developer" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptate."/>
          <ServicesBox order="02" jobTitle="Web Designer" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptate."/>
          <ServicesBox order="03" jobTitle="UI/UX Designer" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptate."/>
          <ServicesBox order="04" jobTitle="Graphic Designer" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptate."/>
          <ServicesBox order="05" jobTitle="Frontend Developer" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptate."/>
          <ServicesBox order="06" jobTitle="Backend Developer" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptate."/>
       
        </div>
      </Container>
    </div>
  );
};

export default ServicesComponent;
