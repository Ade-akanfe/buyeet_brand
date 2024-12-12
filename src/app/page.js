import About from "@/components/about/about";
import Footer from "@/components/footer/footer";
import Questions from "@/components/frequent/question";
import Header from "@/components/Home/header";
import HomePage from "@/components/Home/home";
import News from "@/components/news/news";
import Testimonial from "@/components/testimonial/testimonial";
import WaitList from "@/components/waitlist/waitlist";
import WhyUs from "@/components/why/why";

export default function Home() {
  return (
    // <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    <div className="w-full h-full bg-background relative">
      <div className="absolute top-0 z-10 h-full w-full bg-background opacity-60"></div>
      <HomePage />
      <div className="absolute top-12 lg:-top-44 z-10 h-1/2 w-full bg-gradient-radial-l from-neutral_variant from-5% via-background to-background to-40% "></div>
      <div className="absolute top-0 lg:-top-44 z-10 h-1/2 w-full bg-background opacity-85"></div>
      <WhyUs />
      <About />
      <News />
      <Testimonial />
      <Questions />
      <WaitList />
      <Footer />
    </div>
  );
}
