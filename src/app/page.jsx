import { PinContainer } from "../components/ui/3d-pin";
import Testimonial from "../app/_component/testimonial";
import Image from 'next/image';

export default function Home() {
  return (
    <main className="bg-center">
      <div className="bg-[rgba(255,255,255,0.7)] px-1 md:px-5 lg:px-10">
        <div className="flex h-full justify-between p-5">
          <div className="flex h-full flex-col pr-2 gap-10">
            <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold">
              AM Consultant
            </h1>
            <p className="text-sm md:text-base lg:w-[600px]">
              &quot;Elevating Businesses with Strategic Consultation: Your Path to
              Success Starts Here.&quot;
            </p>
            <div className="flex bg-emerald-500 rounded-full px-2 h-[50px] max-w-[250px] items-center justify-center animate-pulse z-1">
              <img className="h-4 pr-2" src="/wa.svg" alt="WhatsApp Icon" />
              <a className="text-xs md:text-base" href="#">
                Whatsapp for consultant
              </a>
            </div>
            <p className="text-xs">Start your business with us now!</p>
          </div>
          <div className="max-w-[800px] min-w-[150px]">
            <Image
              src="https://storage.googleapis.com/ekrutassets/blogs/images/000/002/874/original/konsultan-keuangan-EKRUT.jpg"
              alt="AM Consultant Image"
              width={800}
              height={500}
              className="rounded-md"
            />
          </div>
          <span></span>
        </div>
        <div className="flex h-full flex-col p-5 mt-10 justify-center text-center gap-5">
          <p className="h-full text-3xl font-bold">
            &quot;Transforming Visions into Reality&quot;
          </p>
          <div className="flex flex-wrap justify-center">
            <div className="h-[30rem] w-[30rem] flex items-center justify-center">
              <PinContainer>
                <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem]">
                  <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                    Sri Mulyani
                  </h3>
                  <div className="text-base !m-0 !p-0 font-normal">
                    <span className="text-slate-500">
                      Pada tahun 2009, Sri Mulyani, seorang ahli ekonomi
                      terkemuka yang telah lama berkarir di dunia keuangan dan
                      pemerintahan, merasa bahwa saatnya telah tiba..{' '}
                      <a href="/aboutUs">(More..)</a>
                    </span>
                  </div>
                  <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500"></div>
                  <Image
                    src="https://asset.kompas.com/crops/DeBHHemYp-_IQL3VssioxUmIr1o=/0x0:900x600/750x500/data/photo/2022/12/10/63942b048a4b5.jpg"
                    alt="Sri Mulyani Image"
                    width={300}
                    height={200}
                  />
                </div>
              </PinContainer>
            </div>
            <div className="h-[30rem] w-[30rem] flex items-center justify-center">
              <PinContainer>
                <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem]">
                  <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                    APA YANG DAPAT DILAKUKAN KONSULTAN BISNIS?
                  </h3>
                  <div className="text-base !m-0 !p-0 font-normal">
                    <span className="text-slate-500">
                      Konsultan Bisnis adalah orang yang profesional, kompeten
                      secara ilmiah dan memiliki pengalaman di Industri Bisnis
                      yang bertujuan untuk membantu Anda..{' '}
                      <a href="/service">(More..)</a>
                    </span>
                  </div>
                  <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500"></div>
                  <Image
                    src="https://images.pexels.com/photos/3790811/pexels-photo-3790811.jpeg"
                    alt="Business Consultant Image"
                    width={300}
                    height={200}
                  />
                </div>
              </PinContainer>
            </div>
          </div>
        </div>
        <div className="flex h-full flex-col p-5 mt-10 justify-center text-center gap-5">
          <h2 className="text-3xl font-bold">
            How Does AM Consultant Indonesia Works
          </h2>
          <div className="flex flex-col lg:flex-row lg:gap-2">
            <div className="flex h-full flex-col lg:w-[450px] items-center text-center gap-5">
              <div className="max-w-[100px]">
                <Image src="/document.png" alt="Document Icon" width={100} height={100} />
              </div>
              <h3 className="text-3xl font-bold"> 1. Dokumen</h3>
              <span className="tracking-wide mb-5">
                PENGURUSAN IZIN USAHA, KELENGKAPAN DOKUMEN PERUSAHAAN,
                MENYEDIAKAN SEWA RUANGAN KANTOR
              </span>
            </div>
            <div className="flex h-full flex-col lg:w-[450px] items-center text-center gap-5">
              <div className="max-w-[100px]">
                <Image src="/computer.png" alt="Computer Icon" width={100} height={100} />
              </div>
              <h3 className="text-3xl font-bold"> 2. proses</h3>
              <span className="tracking-wide mb-5">
                MENGELOLA DIGITAL MARKETING PERUSAHAAN (MENGELOLA WEBSITE, SEO,
                SOSMED, ARTIKEL) UNTUK MEMBANTU MENINGKATKAN BRAND AWARNESS KE
                CALON PELANGGAN
              </span>
            </div>
            <div className="flex h-full flex-col lg:w-[450px] items-center text-center gap-5">
              <div className="max-w-[100px]">
                <Image src="/report.png" alt="Report Icon" width={100} height={100} />
              </div>
              <h3 className="text-3xl font-bold"> 3. Report</h3>
              <span className="tracking-wide mb-5">
                MELAKUKAN KEGIATAN OPERASIONAL BISNIS DARI PEMBUKUAN (PEMBUATAN
                LAPORAN KEUANGAN), PERSIAPAN PELAPORAN PAJAK, PERHITUNGAN GAJI
                KARYAWAN, IMPLEMENTASI SOFTWARE AKUNTANSI DAN PELATIHAN KARYAWAN
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-20 justify-center items-center w-full h-[600px]">
          <span className="text-xl font-bold text-center">
            Tingkatkan Bisnis Anda dengan Solusi Kami: Dengarlah Kata-kata
            Mereka yang Telah Bekerjasama dengan Kami
          </span>
          <Testimonial />
        </div>
      </div>
    </main>
  );
}
