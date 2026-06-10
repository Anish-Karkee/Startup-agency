import Image from "next/image";
import { Button } from "../ui/button";
import landimage from "../../../public/web images/crossthenicsfitness-20260608-0001.jpg";

export default function Hero() {
  return (
    <section className="w-full py-36 px-2 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-12">
        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="relative w-[450px] h-[450px]">
            <Image
              src={landimage}
              alt="Fitness equipment"
              fill
              className="rounded-3xl object-cover"
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="w-full md:w-1/2">
          <span className="text-white uppercase tracking-wide">
            Welcome to Crossthenics Fitness
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-6">
            Your Ultimate Fitness Destination
          </h2>

          <p className="text-gray-200 text-lg leading-relaxed">
            We provide top-notch fitness equipment, supplements,
            apparel and accessories to help athletes and fitness
            enthusiasts achieve their goals. Our mission is to
            deliver high-quality products and exceptional customer
            service to support every step of your fitness journey.
          </p>

          <Button className="mt-8 px-6 py-3 bg-black text-white hover:bg-white hover:text-black rounded-xl transition duration-300">
            View Products
          </Button>
        </div>

      </div>
    </section>
  );
}