import { Button } from "@/components/ui/button"
import { FiDownload } from 'react-icons/fi'

// components
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";


const Home = () => {
  return (
    <>
      <section className="h-full">
        <div className="container mx-auto h-full">
          <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
            {/* text */}
            <div className="text-center xl:text-left order-2 xl:order-none">
              <span className="text-xl ">Ubermensch</span>
              <h1 className="h1 mb-6">
                Hello I'm <br /> <span className="text-accent">Stirling Donaldson</span>
              </h1>
              <p className="max-w-[500px] mb-9 text-white/80">
                What do I do? Web-development, SEO, UX-design. Beautifully, competently, and creatively.
              </p>
              {/* button and socials*/}
              <div className="flex flex-col xl:flex-row items-center gap-8">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="uppercase flex items-center gap-2 "
                >
                  <span>Download CV</span>
                  <FiDownload className="text-xl" />
                </Button>
                <div className="mb-8 xl:mb-0">
                  <Social containerStyles="flex gap-6" iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"/>
                </div>
              </div>
            </div>
            {/* photo */}
            <div className="order-1 xl:order-none mb-8 xl:mb-0">
              <Photo />
            </div>
          </div>
        </div>
        <Stats />
      </section>
      <section>
        <div className="container mx-auto pt-40">

          <h2 className=" h2 text-center mb-8 ">My Services</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

            <div className="bg-primary p-6 rounded-lg">
              <h3 className="h3 mb-4">Web Development</h3>
              <p className="text-white/80">I develop websites and web applications of any complexity. I use modern technologies and frameworks to create high-quality, fast, and reliable products.</p>
            </div>

            <div className="bg-primary p-6 rounded-lg">
              <h3 className="h3 mb-4">SEO Optimization</h3>
              <p className="text-white/80">I will help you to optimize your website for search engines. I will increase the visibility of your site in search results and attract more customers.</p>
            </div>

            <div className="bg-primary p-6 rounded-lg">
              <h3 className="h3 mb-4">UX/UI Design</h3>
              <p className="text-white/80">I create user-friendly and attractive interfaces. I take into account all the nuances of user behavior and create a design that will be convenient for your customers.</p>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

export default Home;
