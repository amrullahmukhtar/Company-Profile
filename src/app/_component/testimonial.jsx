import Image from 'next/image';

import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../components/ui/carousel";

const Testimonial = () => {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      orientation="vertical"
      className="w-full max-w-xs"
    >
      <CarouselContent className="-mt-1 h-[300px]">
        {Testimonials.map((val, index) => (
          <CarouselItem key={index} className="pt-1 md:basis-1/2">
            <TestimonialCard {...val} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

const Testimonials = [
  {
    quote:
      "AM Consultant has been an invaluable partner for our company. Their insights and strategies have helped us navigate complex challenges and achieve our goals.",
    author: "John Doe",
    position: "CEO",
    company: "XYZ Corporation",
  },
  {
    quote:
      "We've been working with AM Consultant for years, and they continue to exceed our expectations. Their team is knowledgeable, responsive, and committed to our success.",
    author: "Jane Smith",
    position: "CFO",
    company: "ABC Industries",
  },
  {
    quote:
      "AM Consultant's expertise in business strategy and market analysis has been instrumental in driving our company's growth. We highly recommend their services to any organization seeking strategic guidance.",
    author: "Mark Johnson",
    position: "COO",
    company: "XYZ Enterprises",
  },
  {
    quote:
      "Working with AM Consultant has been a game-changer for us. Their team goes above and beyond to deliver results, and their dedication to client satisfaction is unmatched.",
    author: "Sarah Williams",
    position: "Marketing Director",
    company: "ABC Co.",
  },
  {
    quote:
      "AM Consultant truly understands our business and industry. Their strategic advice has helped us stay ahead of the curve and achieve our business objectives.",
    author: "Michael Brown",
    position: "Operations Manager",
    company: "XYZ Solutions",
  },
];

const TestimonialCard = ({ quote, author, position, company }) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-md mb-3 ">
      <p className="text-gray-700 mb-4">{quote}</p>
      <p className="text-gray-600">
        - {author}, {position}, {company}
      </p>
    </div>
  );
};

export default Testimonial;
