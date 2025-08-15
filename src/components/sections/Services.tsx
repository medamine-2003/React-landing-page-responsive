import Container from "../shared/Container";
import Paragraph from "../shared/Paragraph";
import Title from "../shared/Title";
import Service from "../cards/Service";
import { services } from "../../utils/serivces-data";
const Services = () => {
  return (
    <section id="services">
      <Container className="space-y-10 md:space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <Title>Our Services</Title>
          <Paragraph>
            We offer a range of AI-driven services designed to enhance your
            business operations and drive innovation. Our solutions include:
          </Paragraph>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, key) => (
            <Service
              key={key}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Services;
