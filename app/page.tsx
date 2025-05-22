import Image from "next/image"
import Link from "next/link"
import { ShoppingCart, ChevronRight, Check } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-16 flex items-center border-b">
        <Link className="flex items-center justify-center" href="#">
          <span className="font-bold text-xl text-teal-600">MuscleRelief</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Home
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#benefits">
            Benefits
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#pricing">
            Pricing
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-teal-50">
          <div className="container px-4 md:px-6 mx-auto flex flex-col md:flex-row items-center gap-8">
            <div className="flex flex-col gap-4 md:gap-6 md:w-1/2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-teal-800">
                Advanced Relief for Muscle Pain
              </h1>
              <p className="text-gray-600 md:text-xl">
                Our premium supplement targets bone wear, muscle pain, and cramps with a scientifically formulated blend
                of natural ingredients.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-teal-600 hover:bg-teal-700">
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Buy Now - $39.99
                </Button>
                <Button variant="outline" className="border-teal-600 text-teal-600 hover:bg-teal-50">
                  Learn More
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <Image
                src="https://images.tcdn.com.br/img/img_prod/1063102/suplementos_para_desgaste_dos_ossos_dores_musculares_e_caibras_125241546_1_c740ea51c6b77e323470d96db6399e33.png"
                alt="Muscle pain relief supplement"
                width={400}
                height={400}
                className="rounded-lg shadow-lg"
                priority
              />
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-teal-800">
                  Why Choose Our Product?
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
                  Our supplement is designed to provide fast, effective relief for various types of muscle pain.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="flex flex-col items-center space-y-2 border border-teal-100 p-6 rounded-lg bg-white shadow-sm">
                <div className="p-3 rounded-full bg-teal-100">
                  <Check className="h-6 w-6 text-teal-600" />
                </div>
                <h3 className="text-xl font-bold text-teal-800">Natural Ingredients</h3>
                <p className="text-center text-gray-600">
                  Made with premium natural ingredients that target the source of pain.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border border-teal-100 p-6 rounded-lg bg-white shadow-sm">
                <div className="p-3 rounded-full bg-teal-100">
                  <Check className="h-6 w-6 text-teal-600" />
                </div>
                <h3 className="text-xl font-bold text-teal-800">Fast Acting</h3>
                <p className="text-center text-gray-600">Feel relief quickly with our fast-absorbing formula.</p>
              </div>
              <div className="flex flex-col items-center space-y-2 border border-teal-100 p-6 rounded-lg bg-white shadow-sm">
                <div className="p-3 rounded-full bg-teal-100">
                  <Check className="h-6 w-6 text-teal-600" />
                </div>
                <h3 className="text-xl font-bold text-teal-800">Long-Lasting</h3>
                <p className="text-center text-gray-600">
                  Provides extended relief throughout the day with just one dose.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="benefits" className="w-full py-12 md:py-24 lg:py-32 bg-teal-50">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-teal-800">
                  Key Benefits
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
                  Our supplement offers multiple benefits for those suffering from muscle pain.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div className="flex flex-col space-y-2">
                <h3 className="text-xl font-bold text-teal-800">Reduces Bone Wear</h3>
                <p className="text-gray-600">
                  Contains essential minerals and vitamins that help strengthen bones and reduce wear over time.
                </p>
              </div>
              <div className="flex flex-col space-y-2">
                <h3 className="text-xl font-bold text-teal-800">Relieves Muscle Pain</h3>
                <p className="text-gray-600">
                  Targets inflammation and pain receptors to provide quick and effective relief from muscle pain.
                </p>
              </div>
              <div className="flex flex-col space-y-2">
                <h3 className="text-xl font-bold text-teal-800">Prevents Cramps</h3>
                <p className="text-gray-600">
                  Balances electrolytes and improves muscle function to prevent painful cramps.
                </p>
              </div>
              <div className="flex flex-col space-y-2">
                <h3 className="text-xl font-bold text-teal-800">Improves Mobility</h3>
                <p className="text-gray-600">
                  Helps restore normal range of motion by reducing pain and stiffness in muscles and joints.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="pricing" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-teal-800">Pricing</h2>
                <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
                  Choose the package that best fits your needs.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="flex flex-col p-6 bg-white rounded-lg shadow-md border border-teal-100">
                <div className="flex flex-col items-center space-y-2 pb-6 mb-6 border-b border-teal-100">
                  <h3 className="text-2xl font-bold text-teal-800">Single Bottle</h3>
                  <p className="text-4xl font-bold text-teal-600">$39.99</p>
                  <p className="text-gray-600">One-time purchase</p>
                </div>
                <ul className="space-y-2 mb-6 flex-1">
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-teal-600" />
                    <span className="text-gray-600">30-day supply</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-teal-600" />
                    <span className="text-gray-600">Free shipping in the US</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-teal-600" />
                    <span className="text-gray-600">Money-back guarantee</span>
                  </li>
                </ul>
                <Button className="bg-teal-600 hover:bg-teal-700 mt-auto">Buy Now</Button>
              </div>
              <div className="flex flex-col p-6 bg-teal-600 rounded-lg shadow-md border border-teal-700 relative">
                <div className="absolute top-0 right-0 -mt-4 mr-4 bg-yellow-400 text-yellow-800 text-xs font-bold px-3 py-1 rounded-full">
                  BEST VALUE
                </div>
                <div className="flex flex-col items-center space-y-2 pb-6 mb-6 border-b border-teal-500">
                  <h3 className="text-2xl font-bold text-white">3-Pack Bundle</h3>
                  <p className="text-4xl font-bold text-white">$99.99</p>
                  <p className="text-teal-100">Save $19.98</p>
                </div>
                <ul className="space-y-2 mb-6 flex-1">
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-white" />
                    <span className="text-white">90-day supply</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-white" />
                    <span className="text-white">Free priority shipping</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-white" />
                    <span className="text-white">Money-back guarantee</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-white" />
                    <span className="text-white">Free digital pain relief guide</span>
                  </li>
                </ul>
                <Button className="bg-white text-teal-600 hover:bg-teal-50 mt-auto">Buy Now</Button>
              </div>
              <div className="flex flex-col p-6 bg-white rounded-lg shadow-md border border-teal-100">
                <div className="flex flex-col items-center space-y-2 pb-6 mb-6 border-b border-teal-100">
                  <h3 className="text-2xl font-bold text-teal-800">Monthly Subscription</h3>
                  <p className="text-4xl font-bold text-teal-600">$34.99</p>
                  <p className="text-gray-600">Per month</p>
                </div>
                <ul className="space-y-2 mb-6 flex-1">
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-teal-600" />
                    <span className="text-gray-600">30-day supply every month</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-teal-600" />
                    <span className="text-gray-600">Free shipping in the US</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-teal-600" />
                    <span className="text-gray-600">Cancel anytime</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-teal-600" />
                    <span className="text-gray-600">15% savings on each bottle</span>
                  </li>
                </ul>
                <Button className="bg-teal-600 hover:bg-teal-700 mt-auto">Subscribe Now</Button>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-teal-50">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-teal-800">
                  Ready to Experience Relief?
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
                  Join thousands of satisfied customers who have found relief with our product.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <Button className="bg-teal-600 hover:bg-teal-700 text-lg">
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Buy Now
                </Button>
                <Button variant="outline" className="border-teal-600 text-teal-600 hover:bg-teal-50 text-lg">
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full border-t px-4 md:px-6 bg-white">
        <p className="text-xs text-gray-500">© 2025 MuscleRelief. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4 text-gray-500" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4 text-gray-500" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}
