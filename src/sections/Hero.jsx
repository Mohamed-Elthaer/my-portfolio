import { FaArrowRight, FaFacebook } from "react-icons/fa";
import { Button } from "../component/Button";

import { AnimatedBorderButton } from "../component/AnimateButtom";

import { LiaLinkedin } from "react-icons/lia";
import { BsGithub } from "react-icons/bs";
import { BiChevronDown } from "react-icons/bi";
import { LuArrowDownToLine } from "react-icons/lu";

const skills = ["HTML", "CSS", "Javascript","C++","Python", "React", "Tailwind", "Bootstrap"];
export default function Hero() {
  return (
    <section className="relative min-h-screen flex item-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/hero-bg.jpeg"
          alt="hero image"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background" />
      </div>

      <div className="absolut inset-0 overflow-hidden pointer-events-none">
        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: "#20B2A6",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `slow-drift ${15 + Math.random() * 20}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 pt-32 pb-20 relative z-20">
        <div className="grid lg:grid-cols-2 gap-2 items-center">
          <div className="space-y-8 ">
            <div className="animate-fade-in">
              <span className="inline-flex gap-2 items-center py-2 px-4 rounded-full glass text-sm text-primary">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse " />
                Software Engineer . React Specialist
              </span>
            </div>
           
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl leading-tight animate-fade-in animation-delay-100">
                Crafting{" "}
                <span className="text-primary glow-text  ">digtial</span>
                <br />
                experience with
                <br />
                <span className="font-serif italic font-normal text-white">
                  precision
                </span>
              </h1>
              <p className="text-lg text-muted-forgeground max-w-lg animate-fade-in animate-delay-800">
                Hi, I'm Mohamed Eltaher - a software engineer specializing in
                React.js , tailwind . I build scalable performant Web
                application that users love
              </p>
            </div>

            <div className="flex gap-4 items-center animate-fade-in animate-delay-300">
              <Button
                size="lg"
                onClick={() => {
                  document.getElementById("contact")?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              >
                Contact Me <FaArrowRight size={24} />
              </Button>

              <AnimatedBorderButton>
                <LuArrowDownToLine size={24} /> Download CV
              </AnimatedBorderButton>
            </div>

            <div className="flex my-6 items-center gap-4 animate-fade-in animate-delay-400">
              <span className="text-sm text-muted-foreground">Follow me: </span>
              {[
                { icon: BsGithub, href: "https://github.com/Mohamed-Elthaer" },
                {
                  icon: LiaLinkedin,
                  href: "https://www.linkedin.com/in/mohamed-eltaher-moustafa-4b37ba3ab",
                },
                {
                  icon: FaFacebook,
                  href: "https://www.facebook.com/share/1HfEGzhwnm/",
                },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  className="p-2  rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                >
                  {<social.icon className="w-5 h-5 " />}
                </a>
              ))}
            </div>
          </div>

          <div className="relative animate-fade-in animate-delay-300">
            <div className="relative max-w-md mx-auto">
              <div
                className="absolute inset-0 
              rounded-3xl bg-gradient-to-br 
              from-primary/30 via-transparent 
              to-primary/10 blur-2xl animate-pulse"
              />
              <div className="relative glass rounded-3xl p-2 glow-border">
                <img
                  src="/profile.jpeg"
                  alt="profile"
                  className="w-full aspect-[4/5] object-cover rounded-2xl"
                />
                <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-4 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm font-medium">
                      Available For Work
                    </span>
                  </div>
                </div>

                <div className="absolute -top-4 glass rounded-xl px-4 py-4 animate-float animate-delay-500">
                  <div className="text-2xl text-primary font-bold">1+</div>
                  <div className="text-sm text-muted ">Years Exp.</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 animate-fade-in animate-delay-600">
          <p className="text-sm text-muted-forgeground mb-6 text-center">
            Technologies I Work With
          </p>
          <div className="relative overflow-hidden">
            <div className="flex animate-marquee">
              {[...skills, ...skills].map((skill, index) => (
                <div key={index} className="flex-shrink-0 px-8 py-4">
                  <span className="text-xl font-semibold text-muted-forgeground/50 hover:text-muted-forgeground cursor-pointer transition-colors">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 
      animate-fade-in animation-delay-800"
      >
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
        >
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <BiChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </div>
    </section>
  );
}
