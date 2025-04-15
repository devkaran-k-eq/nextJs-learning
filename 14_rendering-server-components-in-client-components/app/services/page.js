import Header from "@/components/Header";
import ServiceList from "@/components/ServiceList";
import ServiceItem from "@/components/ServiceItem";

const Services = () => {

  const services = [
    "Web Development",
    "Mobile App Development",
    "Consulting Services",
    "Digital Marketing",
  ];

  return (
    <>
      <Header />
      <div>
        <h1>Our Services</h1>


        <ServiceList children={services.map((service) => (
          <ServiceItem key={service} serviceName={service} />
        ))}
        />

        {/* OR */}
        {/* This way we can use for better Understanding */}


        {/* <ServiceList>
          {services.map((service) => (
            <ServiceItem key={service} serviceName={service} />
          ))}
        </ServiceList> */}
      </div>
    </>
  );
};

export default Services;
