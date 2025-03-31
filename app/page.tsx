import NavbarCC from "@/components/ui/heroui/navbar";
import PageAbout from "./about/page";
import PageHome from "./home/page";
import PageWhyus from "./whyus/page";


export default function Home() {
  return (
    <div className="">
      <NavbarCC />
      <div className=" flex flex-col gap-20 md:gap-0">
        <PageHome />
        <PageAbout />
        <PageWhyus />
      </div>
    </div>
  );
}
