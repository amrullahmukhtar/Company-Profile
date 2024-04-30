
import Image from 'next/image';

import { Tabs } from "../../components/ui/tabs";

export default function TabService() {
  const tabs = [
    {
      title: "Jasa Pembukuan",
      value: "Jasa Pembukuan",
      content: (
        <div className="w-full p-10 gap-5 overflow-hidden items-center relative flex  flex-col rounded-2xl font-bold text-white bg-gradient-to-br from-zinc-600 to-neutral-800">
          <span className=" text-3xl">Jasa Pembukuan</span>
          <div className="flex w-full justify-center ">
          
          <Image className="max-w-[400px] min-w-[150px] rounded-xl" src="https://images.pexels.com/photos/3791185/pexels-photo-3791185.jpeg" alt="" />
          </div>
          <p className="text-left text-base sm:text-lg md:text-xl lg:text-2xl xl:text-4xl ">
            {" "}
            Bookkeeping (Jasa pembukuan) Kami membantu mencatat transaksi
            keuangan bisnis Anda dan menyajikannya dalam bentuk Laporan
            Keuangan, baik untuk bulan berjalan maupun període tertentu yang
            Anda inginkan, tanpa perlu merekrut Staff Akuntansi.
          </p>
        </div>
      ),
    },
    {
      title: "Jasa Admin Keuangan",
      value: "Jasa Admin Keuangan",
      content: (
        <div className="w-full p-10 gap-5 overflow-hidden items-center relative flex  flex-col rounded-2xl font-bold text-white bg-gradient-to-br from-zinc-600 to-neutral-800">
          <span className=" text-3xl">Jasa Admin Keuangan</span>
          <div className="flex w-full justify-center ">
          
          <Image className="max-w-[400px] min-w-[150px] rounded-xl" src="https://images.pexels.com/photos/3783879/pexels-photo-3783879.jpeg" alt="" />
          </div>
          <p className="text-left text-base sm:text-lg md:text-xl lg:text-2xl xl:text-4xl ">
            {" "}
            Kami menyediakan software akuntansi murah dari jurnal.id yang dapat
            membantu anda dalam menjalankan operasional bisnis Anda sehingga
            menghindari kebocoran di dalam bisnis Anda.
          </p>
        </div>
      ),
    },
    {
      title: "Jasa Pajak",
      value: "Jasa Pajak",
      content: (
        <div className="w-full p-10 gap-5 overflow-hidden items-center relative flex  flex-col rounded-2xl font-bold text-white bg-gradient-to-br from-zinc-600 to-neutral-800">
          <span className=" text-3xl">Jasa Pajak</span>
          <div className="flex w-full justify-center ">
          
          <Image className="max-w-[400px] min-w-[150px] rounded-xl" src="https://images.pexels.com/photos/6863332/pexels-photo-6863332.jpeg" alt="" />
          </div>
          <p className="text-left text-base sm:text-lg md:text-xl lg:text-2xl xl:text-4xl ">
            {" "}
            Kami membantu bisnis Anda memenuhi kewajiban perpajakan secara
            tepat, baik perhitungan maupun pelaporan pajak, bulanan (SPT Masa)
            atau tahunan (SPT Tahunan), baik untuk pribadi maupun usaha Anda.
            Pelaporan Pajak yang kami tangani yaitu PPh 21 (PTKP), PPh 22, PPh
            23, PPh 25, PPh 26, PPh 4 ayat 2, PPN, SPT Tahunan Badan dan SPT
            Tahunan Pribadi.
          </p>
        </div>
      ),
    },
      {
        title: "Jasa Payroll",
        value: "Jasa Payroll",
        content: (
          <div className="w-full p-10 gap-5 overflow-hidden items-center relative flex  flex-col rounded-2xl font-bold text-white bg-gradient-to-br from-zinc-600 to-neutral-800">
            <span className=" text-3xl">Jasa Payroll</span>
            <div className="flex w-full justify-center ">
            
            <Image className="max-w-[400px] min-w-[150px] rounded-xl" src="https://images.pexels.com/photos/4475523/pexels-photo-4475523.jpeg" alt="" />
            </div>
            <p className="text-left text-base sm:text-lg md:text-xl lg:text-2xl xl:text-4xl ">
              {" "}
            Tidak ada lagi keribetan mencari karyawan, mengurus absensi
            karyawan, Mengurus Proses BPJS Kesehatan dan BPJS Ketenagakerjaan,
            menghitung berapa gaji, berapa Tunjangan serta Lembur, berapa THR
            dan bonus yang harus diberikan dan berapa potongan pajak yang
            dikenakan karena kami akan mengurus semuanya untuk anda.
            </p>
          </div>
        ),
      },
      {
        title: "Kelas Pelatihan",
        value: "Kelas Pelatihan",
        content: (
          <div className="w-full p-10 gap-5 overflow-hidden items-center relative flex  flex-col rounded-2xl font-bold text-white bg-gradient-to-br from-zinc-600 to-neutral-800">
            <span className=" text-3xl">Kelas Pelatihan</span>
            <div className="flex w-full justify-center ">
            
            <Image className="max-w-[400px] min-w-[150px] rounded-xl" src="https://images.pexels.com/photos/8761559/pexels-photo-8761559.jpeg" alt="" />
            </div>
            <p className="text-left text-base sm:text-lg md:text-xl lg:text-2xl xl:text-4xl ">
              {" "}
            Kami bisa membantu memberikan pelatihan kepada Divisi Keuangan Anda,
            mengajarkan bagaimana mempersiapkan laporan keuangan dan laporan
            pajak untuk bisnis Anda. Dapatkan Laporan Realtime.
            </p>
          </div>
        ),
      },
      {
        title: "Pengurusan Izin Badan Usaha",
        value: "Pengurusan Izin Badan Usaha",
        content: (
          <div className="w-full p-10 gap-5 overflow-hidden items-center relative flex  flex-col rounded-2xl font-bold text-white bg-gradient-to-br from-zinc-600 to-neutral-800">
            <span className=" text-3xl">Pengurusan Izin Badan Usaha</span>
            <div className="flex w-full justify-center ">
            
            <Image className="max-w-[400px] min-w-[150px] rounded-xl" src="https://images.pexels.com/photos/3790811/pexels-photo-3790811.jpeg" alt="" />
            </div>
            <p className="text-left text-base sm:text-lg md:text-xl lg:text-2xl xl:text-4xl ">
              {" "}
            AM Consultant membantu pengurusan izin badan usaha dan legalitas
            usaha menjadi lebih mudah dan terukur bagi semua orang, sehingga
            Anda tidak perlu khawatir atas adanya biaya tidak terduga pada saat
            proses pemberian layanan. Dalam proses pendirian badan usaha kami
            juga akan memberikan konsultasi terkait pengaruh terhadap pembukuan
            dan perpajakannya.
            </p>
          </div>
        ),
      },
    
  ];

  return (
    <div className="h-[60rem]  md:h-[50rem]  relative  flex flex-col max-w-5xl mx-auto w-full  items-start  my-10">
      <Tabs tabs={tabs} />
    </div>
  );
}
