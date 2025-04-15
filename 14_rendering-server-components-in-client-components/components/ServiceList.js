"use client";
import ServiceItem from "./ServiceItem";

export default function ServiceList({children}) {
  const services = [
    "Web Development",
    "Mobile App Development",
    "Consulting Services",
    "Digital Marketing",
  ];
  return (
    <>
      <h3>All Services List</h3>
      <ul className="services-list">
        {children}
      </ul>
    </>
  );
}
