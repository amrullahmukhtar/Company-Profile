import React from "react";
import { HoverBorderGradient } from "../../components/ui/hover-border-gradient";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="bg-zinc-800 px-5 md:px-10 pt-10 absolute">
      <div className="flex flex-col gap-3 text-start text-sm text-stone-300 md:text-base lg:text-lg">
        <div className="flex items-center">
          <Image
            src="/logo-AM.png"
            alt="AM Consultant Logo"
            width={200}
            height={200}
          />
        </div>
        <p>
          AM Consultant yang berlokasi di Gedung Nindya, Jl. Letjen M.T. Haryono
          No.Kav. 22 Lt. 10, RT.4/RW.1, Cawang, Kec. Kramat Jati, Kota Jakarta
          Timur, Daerah Khusus Ibukota Jakarta 13630. Dengan AM Consultant, Siap
          memberikan solusi bisnis untuk seluruh perusahaan Indonesia.
        </p>
        <hr className="border-x-zinc-600 border-solid border-2 w-full" />
        <div className="flex flex-row ">
          <a className="items-center flex" href="https://www.instagram.com/">
            <Image
              src="instagram.svg"
              alt="Instagram Icon"
              width={50}
              height={50}
            />
            <span>Instagram</span>
          </a>
          <a className="items-center flex" href="https://www.twitter.com/">
            <Image
              src="twitter.svg"
              alt="Twitter Icon"
              width={50}
              height={50}
            />
            <span>Twitter</span>
          </a>
          <a className="items-center flex" href="https://www.youtube.com/">
            <Image
              src="youtube.svg"
              alt="Youtube Icon"
              width={50}
              height={50}
            />
            <span>Youtube</span>
          </a>
        </div>
        <div className="flex text-center my-10 rounded-full">
          <HoverBorderGradient
            containerClassName="rounded-full"
            as="button"
            className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
          >
            <Image src="wa.svg" alt="WhatsApp Icon" width={50} height={50} />
            <span>Contact us</span>
          </HoverBorderGradient>
        </div>
        <p className="text-center text-base py-5">
          ©Copyrights 2024 Amrullah Mukhtar
        </p>
      </div>
    </div>
  );
}
