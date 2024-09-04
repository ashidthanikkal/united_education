import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";

export default function Home() {
  return (
    <main>
      {/* banner img */}
      <div className="flex flex-col items-center justify-between w-100 static">
        <Image
          src={"/Rectangle 2.png"}
          alt="BannerImg"
          height={500}
          width={1440}
        />
        <span className="absolute font-bold  lg:top-[200px] top-[90px] lg:text-4xl text-xl md:top-[160px]   text-white">
          About Us
        </span>
      </div>

      {/* company_overview */}
      <div className="company_overview  p-10 flex flex-col md:flex-row">
        <div className="overview1 w-full md:flex-col flex-row">
          <div className="flex  md:flex-row-reverse items-center md:justify-end gap-4">
            <div className="w-10 border-t-2 border-[#DC272F] flex justify-center text-[8px] leading-[8px] md:leading-[12px] md:text-[12px] lg:leading-[28.8px] lg:text-[18px] mt-2 text-[#DC272F]"></div>
            <div>
              <p className="font-normal text-[8px] leading-[8px] md:leading-[12px] md:text-[12px] lg:leading-[28.8px] lg:text-[18px] mt-2 text-[#DC272F]">
                COMPANY OVERVIEW
              </p>
            </div>
          </div>

          <div className="flex md:flex-col flex-row justify-between">
            <h2 className="text-[#04374B] mt-3 font-bold md:font-semibold  leading-[16.8px] text-[14px] md:leading-[16.8px] md:text-[14px] lg:leading-[52px] lg:text-[40px] ">
              Our Real Commitment Reaches Beyond Gas & Oil Company.
            </h2>
            <button
              type="button"
              className="text-white bg-[#14516A] hover:bg-[#14516A] w-48 mt-7 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 hidden md:block"
            >
              View Our Courses
            </button>
            <div>
              {" "}
              <IoIosArrowForward className="text-red-600 nd:w-10 md:hidden" />
            </div>
          </div>
        </div>

        <div className="overview2 w-full ">
          <p className="font-normal text-[8px] leading-[12.8px] md:leading-[22.4px] md:text-[14px] lg:leading-[28.8px] lg:text-[17px] text-[#DC272F] mt-2 text-left">
            UE is a private educational and training services provider,
            following huge educational and skill needs among our people that
            make it difficult for the country and nation to develop and cope
            with the rest of the world.
          </p>

          <p className="font-normal text-[8px] leading-[12.8px] md:leading-[22.4px] md:text-[14px] lg:leading-[28.8px] lg:text-[17px] mt-2 text-left">
            UE is specialized in educational and training services, ranging from
            language education, business skills development, and special
            technical and vocational training services.
            <span className="hidden md:inline">
              We have a blend of products and services for all public, private,
              non-governmental, educational and individual customers who are
              looking for excellent educational solutions.
            </span>
          </p>

          <p className="font-normal text-[8px] leading-[12.8px] md:leading-[22.4px] md:text-[14px] lg:leading-[28.8px] lg:text-[17px] mt-2 hidden md:block">
            United Education has partnership with the world’s best educational
            services providers, accreditation and certification bodies and
            provide the best of services to our customers throughout Iraq and
            Kurdistan Region, combining world’s most advanced learning material
            with up to date technologies and excellent services and support to
            every customer.
          </p>
        </div>
      </div>
      {/* box */}

      <div className="box_parent grid lg:grid-cols-3 grid-cols-1  lg:gap-0.5  gap-[10px] my-10 px-10">
        <div className="box1 flex lg:flex-col flex-row items-center lg:items-start   font-medium text-white  h-[90px] md:h-[163px] lg:h-[300px] rounded-lg rounded-s-lg  lg:rounded-none lg:rounded-s-lg bg-[#14516A]">
            <div className="icon1 w-[20px] relative h-[20px] m-5  p-5">
              <Image src={"/icon1.png"} alt="icon1" fill />
            </div>
          <div className="sub_heading1 mx-5">
          <span className="font-medium text-[12px] md:text-[22px] lg:text-[28px]">Quality Driven</span>
          <p className="font-normal text-[8px] md:text-[16px]">We always deliver the best quality and performance for both our products and services.</p>
          </div>
        </div>

        <div className="box2 flex lg:flex-col flex-row items-center lg:items-start   font-medium text-white  h-[90px] md:h-[163px] lg:h-[300px] rounded-lg lg:rounded-none bg-[#14516A]">
            <div className="icon2 w-[20px] h-[20px] relative m-5 p-5">
              <Image src={"/icon2.png"} alt="icon2" fill />
            </div>
          <div className="sub_heading2 mx-5">
            <span className="font-medium text-[12px] md:text-[22px] lg:text-[28px]">Corporate Training</span>
            <p className="font-normal text-[8px] md:text-[16px]">We always deliver the best quality and performance for both our products and services.</p>
          </div>
        </div>

        <div className="box3 flex lg:flex-col flex-row items-center lg:items-start   font-medium text-white  h-[90px] md:h-[163px] lg:h-[300px] rounded-e-lg rounded-lg  lg:rounded-none  lg:rounded-e-lg bg-[#14516A]">
            <div className="icon3 w-[20px] h-[20px] relative m-5 p-5">
              <Image src={"/Icon 3.png"} alt="Icon 3" fill />
            </div>
          <div className="sub_heading3 mx-5">
            <span className="font-medium text-[12px] md:text-[22px] lg:text-[28px]">Global Sourcing</span>
            <p className="font-normal text-[8px] md:text-[16px]">We can tailor our courses to your needs and create unique programmes that may include various workshops and simulations.</p>
          </div>
        </div>
      </div>
    </main>
  );
}
