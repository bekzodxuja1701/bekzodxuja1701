import Button from "../Components/Button";
import image from "../images/BrownSugarOatmea.png";

export default function SeeDetails() {
  return (
    <section className="bg-[#F8EDF0]   ">
      <div className="w-[80%] mx-[auto] flex justify-between items-center">
        <div>
          <h2 className="font-Hind text-[44px] font-bold leading-[110.5%]">
            Brown Sugar <br /> Oatmea
          </h2>
          <p className="font-Rob text-[16px] leading-[24px] text-[#705F60] mt-[16px] mb-[35px] ">
            Together with McDonald’s, Burger King has grown to become synonymous
            with burgers in the US.Together with McDonald’s, Burger King has
            grown to become synonymous.
          </p>
          <Button>See Details</Button>
        </div>
        <img src={image} alt="image" />
      </div>
    </section>
  );
}
