import About from "@/components/about/about";
import Footer from "@/components/footer/footer";
import Questions from "@/components/frequent/question";
import Header from "@/components/Home/header";
import HomePage from "@/components/Home/home";
import News from "@/components/news/news";
import Testimonial from "@/components/testimonial/testimonial";
import WaitList from "@/components/waitlist/waitlist";
import WhyUs from "@/components/why/why";
import dynamic from "next/dynamic";

export default function Home() {
  return (
    // <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    <div className="w-full h-full relative gradient-background">
      <div className="w-full h-auto ">
        <HomePage />
      </div>
      <div className="w-full h-auto ">
        <WhyUs />
      </div>
      {/* <About /> */}
      <News />
      <Testimonial />
      <div id="about">
        <Questions />
      </div>
      <div id="learn">
        <WaitList />
      </div>
      <Footer />
      <div>
      </div>
    </div>
  );
}
