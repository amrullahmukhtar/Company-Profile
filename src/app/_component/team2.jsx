import Image from 'next/image';

import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../components/ui/carousel";

export default async function TeamList2() {
  const res = await fetch("https://randomuser.me/api/?results=15");
  const data = await res.json();
  const team = data.results;
  return (
    <>
      <div className="md:flex flex-wrap justify-evenly w-full p-5 hidden">
        {team.map((val, key) => (
          <Team key={key} data={val} />
        ))}
      </div>

      <Carousel className="w-full  max-w-xs m-auto flex md:hidden ">
        <CarouselContent>
          {team.map((val, index) => (
            <CarouselItem key={index}>
              <Team data={val} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </>
  );
}

export function Team({ data }) {
  const { name, location, picture } = data;
  return (
    <>
      <div className=" min-w-40 w-[250px] md:my-5 bg-white flex flex-col items-center rounded-xl m-auto">
        <Image
          className="w-[200px]  my-5 aspect-square object-top object-cover rounded-xl"
          src={picture.large}
          alt=""
        />
        <hr className="border-grey-200 border-solid border-2 w-full" />
        <div className=" w-full left-0 flex flex-col px-5">
          <span className="font-bold w-[160px] ">
            {name.title + " " + name.first + " " + name.last}
          </span>
          <span className="py-5">{location.country}</span>
        </div>
      </div>
    </>
  );
}



