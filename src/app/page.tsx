import { Card, TCard } from "../components/Card";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";

export default function Home() {
  const image =
    "https://res.cloudinary.com/olamileke/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1788372370/meine/12095_hel8ti.jpg";
  const text =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tristique varius erat non tristique. Fusce faucibus dui non egestas rhoncus. Nulla fringilla feugiat ex ac consectetur. Quisque elementum auctor porta. Suspendisse potenti. Nullam eu viverra leo. Vestibulum tempor nulla ac quam laoreet ullamcorper. Aenean tincidunt, risus sit amet cursus iaculis, ex orci imperdiet dolor, id accumsan neque arcu eu nulla. Aliquam luctus nibh at tortor pulvinar sodales.";
  const cards: TCard[] = [
    { image, text },
    { image, text },
    { image, text },
    { image, text },
  ];

  const displayCards = () =>
    cards.map((card, index) => <Card key={index} {...card} />);

  return (
    <div className="relative">
      <div className="flex gap-6 mt-10 overflow-x-scroll !scroll-smooth cards">
        <div
          className="w-[40px] h-[40px] bg-[#F9EAE1] cursor-pointer shadow absolute flex justify-center items-center inline-flex rounded-full z-10"
          style={{
            top: "calc((100% - 40px) / 2)",
            left: "-20px",
          }}
        >
          <IoArrowBack />
        </div>
        {displayCards()}
        <div
          className="w-[40px] h-[40px] bg-[#F9EAE1] cursor-pointer shadow absolute flex justify-center items-center inline-flex rounded-full z-10"
          style={{
            top: "calc((100% - 40px) / 2)",
            right: "-20px",
          }}
        >
          <IoArrowForward />
        </div>
      </div>
    </div>
  );
}
