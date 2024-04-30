import React from 'react'


export default function TeamList() {
    const team = [
      {
        name: "Sri Mulyani Indrawati, S.E., M.Sc., Ph.D",
        img_url:"https://upload.wikimedia.org/wikipedia/commons/3/39/Finance_Ministry_Sri_Mulyani_Indrawati_2016.jpg",
        jabatan: "CEO & Founder",
      },
      {
        name: "Perry Warjiyo, S.E., M.Sc., Ph.D. ",
        img_url:"https://upload.wikimedia.org/wikipedia/commons/4/45/Perry_Warjiyo%2C_Governor_of_Bank_Indonesia.jpg",
          jabatan: "COO & CO Founder",
      },
      {
        name: "Dr. Isma Yatun, CSFA., CFrA.",
        img_url:"https://upload.wikimedia.org/wikipedia/commons/b/b2/Isma_Yatun.jpg",
        jabatan: "Comissioner & CO-Founder",
      },
      {
        name: "Rafael Alun Trisambodo, S.E., M.Si.",
        img_url:"https://asset.kompas.com/crops/8ukC52Zob-Zrbp7QQamS-fQOTMw=/0x0:0x0/750x500/data/photo/2023/04/03/642ab6a077f35.jpg",
        jabatan: "Support Manager",
      },
      {
        name: "Harvey Moei",
        img_url:"https://static.promediateknologi.id/crop/0x0:0x0/0x0/webp/photo/p2/01/2024/04/02/47_kejagung-1707438543.jpg",
        jabatan: "Business Manager",
      },

    ];
    return (
      <div className="flex flex-wrap justify-evenly w-full p-5">
        {team.map((val, key) => (
          <Team key={key} {...val} />
        ))}
      </div>
    );
  }
  
  export function Team({ name, img_url, jabatan }) {
    return (
    <div className="m-3 min-w-40 w-[250px] bg-white flex flex-col items-center rounded-xl ">
        <img
          className="max-w-[200px] my-5 aspect-square object-top object-cover rounded-xl"
          src={img_url}
          alt=""         
        />
        <hr className='border-grey-200 border-solid border-2 w-full' />
        <div className=' w-full left-0 flex flex-col px-5'>
        <span className="font-bold w-[160px] ">{name}</span>
        <span className='py-5'>{jabatan}</span>
        </div>
        
    </div>  
  
    );
  }
