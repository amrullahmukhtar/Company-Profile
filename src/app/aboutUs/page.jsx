import React from "react";
import "./about.css";
import { SparklesCore } from "../../components/ui/sparkles";
import Image from "next/image";
import aboutImage1 from "../../../public/about-1.jpg";

export default function AboutUs() {
  return (
    <div className="about">
      <div className="h-[10rem] relative w-full bg-black flex gap-4 flex-col items-center justify-center overflow-hidden">
        <div className="w-full absolute inset-0 h-screen">
          <SparklesCore
            id="tsparticlesfullpage"
            background="transparent"
            minSize={0.6}
            maxSize={1.4}
            particleDensity={100}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />
        </div>
        <h1 className="md:text-6xl text-3xl lg:text-6xl font-bold text-center text-white relative z-20">
          Your Source for Information.
        </h1>
      </div>
      <div className="about-content px-[40px] bg-[rgba(255,255,255,0.7)] md:px-[80px] lg:px-[100px]">
        <div className="item-center flex flex-col">
          <h2 className="text-5xl py-5 font-bold font-serif">AM Consultant</h2>
          <div className="flex gap-5">
            <p className="text-sm md:text-lg">
              AM Consultant adalah Professional Integrated Business Consulting
              Company. Sebagai perusahaan konsultan yang berdedikasi, kami
              menghadirkan pengetahuan mendalam, pengalaman luas, dan solusi
              kreatif untuk memenuhi kebutuhan finansial Anda.
            </p>
            <div className="max-w-[800px] min-w-[150px]">
              <Image
                src={aboutImage1}
                alt="About 1 Image"
                width={800}
                height={500}
                className="rounded-xl"
              />
            </div>
          </div>
          <div className="flex gap-10 justify-center flex-wrap my-20">
            <div className="flex items-center flex-col">
              <h3>15</h3>
              <span>Years in business</span>
            </div>
            <div className="flex items-center flex-col">
              <h3>115+</h3>
              <span>The company believes in us</span>
            </div>
            <div className="flex items-center flex-col">
              <h3>90%</h3>
              <span>Happy Customers</span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-5xl text-center font-bold py-10">
              We are happy to help solve your business problems.
            </span>
            <div className="gap-10 flex flex-row flex-wrap justify-center w-full">
              <Image
                src="https://images.pexels.com/photos/5686082/pexels-photo-5686082.jpeg"
                alt=""
                width={300}
                height={200}
                className="max-w-[300px] min-w-[150px] rounded-xl"
              />
              <Image
                src="https://images.pexels.com/photos/5686102/pexels-photo-5686102.jpeg"
                alt=""
                width={300}
                height={200}
                className="max-w-[300px] min-w-[150px] rounded-xl"
              />
              <Image
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg"
                alt=""
                width={300}
                height={200}
                className="max-w-[300px] min-w-[150px] rounded-xl"
              />
              <Image
                src="https://images.pexels.com/photos/5439474/pexels-photo-5439474.jpeg"
                alt=""
                width={300}
                height={200}
                className="max-w-[300px] min-w-[150px] rounded-xl"
              />
              <Image
                src="https://images.pexels.com/photos/5439478/pexels-photo-5439478.jpeg"
                alt=""
                width={300}
                height={200}
                className="max-w-[300px] min-w-[150px] rounded-xl"
              />
              <Image
                src="https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg"
                alt=""
                width={300}
                height={200}
                className="max-w-[300px] min-w-[150px] rounded-xl"
              />
              {/* Tambahkan gambar-gambar lain di sini */}
            </div>
            <div className="my-20">
              <span className="text-2xl text-center font-bold my-10">
                We Don&rsquo;t Say We Are The Best, But You Will Get The Best
                Service.
              </span>

              <div className="gap-5 flex my-10">
                <p className="max-w-[700px] text-sm md:text-lg ">
                  AM Consultant menjadi solusi yang Tepat, karena kami tidak
                  hanya mampu menguasai teoritis namun juga terbukti
                  berpengalaman, serta kami mampu menjaga kualitas maupun
                  Profesionalisme.
                </p>
                <div className="w-[800px] min-w-[150px]">
                  <Image
                    src="https://asset.kompas.com/crops/DeBHHemYp-_IQL3VssioxUmIr1o=/0x0:900x600/750x500/data/photo/2022/12/10/63942b048a4b5.jpg"
                    alt="Sri Mulyani Image"
                    width={800}
                    height={600}
                    className="rounded-xl"
                  />
                </div>
              </div>
              <p className="mb-5 text-sm md:text-lg text-justify">
                Pada tahun 2009, Sri Mulyani, seorang ahli ekonomi terkemuka
                yang telah lama berkarir di dunia keuangan dan pemerintahan,
                merasa bahwa saatnya telah tiba baginya untuk membawa
                pengalamannya ke tingkat yang lebih tinggi. Dengan visi untuk
                memberikan konsultasi keuangan dan ekonomi yang berkualitas
                tinggi kepada perusahaan-perusahaan besar dan pemerintahan di
                seluruh Indonesia.
              </p>
              <p className="mb-5 text-sm md:text-lg text-justify">
                AM Consultant dengan cepat menjadi sorotan dalam dunia konsultan
                keuangan dan ekonomi. Berkat reputasi Sri Mulyani yang luar
                biasa, perusahaan ini mendapatkan kepercayaan dari berbagai
                klien terkemuka di berbagai belahan dunia.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
