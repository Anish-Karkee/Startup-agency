import { Button } from "../ui/button";
import Image from "next/image";
import serviceImage from "../../../public/logo/ct-logo.png"

export default function Service() {
    return (
        <section className="w-full py-36 px-4 md:px-6">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-12">
                <div className="w-full md:w-1/2">
                    

                    <h2 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-6">
                        Our Services
                    </h2>

                    <div className="mt-4  p-6 rounded-lg bg-black/20">
                        <p className="text-gray-200 text-lg leading-relaxed">
                            We provide top-notch fitness equipment, supplements,
                            apparel and accessories to help athletes and fitness
                            enthusiasts achieve their goals. Our mission is to
                            deliver high-quality products and exceptional customer
                            service to support every step of your fitness journey.
                        </p>
                    </div>
        </div> 
           <div className= "w-full lg:w-3/5">
           <div className="grid grid-cols-2 gap-2 sm: gap-2">
            <Image
                src={serviceImage}
                alt="Service Image"
                width={400}
                height={400}
                className="rounded-3xl object-cover"
            />
           </div>

           </div>
            </div>
        </section>
    )
}