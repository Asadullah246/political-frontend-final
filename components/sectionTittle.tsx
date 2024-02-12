interface SectionTittleProps {
  title: string;
  description: string;
  span: string;
}

const SectionTittle = ({ title, description, span }: SectionTittleProps) => {
  return (
    <div className=" lg:w-[50%] mx-auto text-center pb-[49px]">
      <h5 className=" text-[#FFC400] font-bold tracking-wide">{title}</h5>
      <h2 className="text-center lg:mt-4 lg:text-[40px] text-[30px] font-[700] leading-[50px]">
        {description}
        <br />
        {span}
      </h2>
    </div>
  );
};

export default SectionTittle;
