import { AnimatedTestimonials } from "./UI/AnimatedTestimonials";

export function Testimonials() {
  const testimonials = [
    {
      quote:
        "Judah is one of the most hardworking and consistent developers I know. He’s collaborated with me on numerous projects, truly lives up to his words, and is genuinely amazing.",
      name: "David Odianonsen",
      designation: "CTO & President at Pantheon",
      src: "https://res.cloudinary.com/dydmptpcg/image/upload/v1772033778/Odia_b15boo.jpg",
    },
    {
      quote:
        "Judah is a curious person who’s always ready to learn, and that mindset is what makes one of the best developers I know.",
      name: "Alao Abdul-Quayum",
      designation: "FullStack Developer at D'ACCUBIN",
      src: "https://res.cloudinary.com/dydmptpcg/image/upload/v1772037226/Quayum_nv3df7.png",
    },
    {
      quote:
        "I’ve had the chance to work alongside Judah, and he’s a great team player. He keeps everyone aligned, pays attention to the details, and makes collaboration easy. Working with him is a great experience.",
      name: "Chidubem Festus",
      designation: "Frontend Developer at Pantheon",
      src: "https://res.cloudinary.com/dydmptpcg/image/upload/v1772034267/Festus_dalcoz.jpg",
    },
    {
      quote:
        "Working with Judah was a highlight. His leadership keeps teams focused, motivated, and well-informed, creating a supportive environment that drives success. I’d happily work with him again.",
      name: "Treasure Onyenze",
      designation: "FullStack Developer at Pantheon",
      src: "https://res.cloudinary.com/dydmptpcg/image/upload/v1772035102/tee_v6evfh.jpg",
    },

    {
      quote:
        "Judah thinks beyond implementation — he builds with product impact in mind. The MedicX landing page he developed was visually impressive, well-structured, and intentional. Any team bringing him onboard would be making a strong decision.",
      name: "Michael Omopekun",
      designation: "Backend Engineer at MedicX",
      src: "https://res.cloudinary.com/dydmptpcg/image/upload/v1772195213/Omopekun_nc5ous.png",
    },
  ];
  return (
    <section className="min-h-screen flex items-center justify-center flex-col">
      <h1 className="text-3xl md:text-5xl font-semibold text-gray-900 font-outfit tracking-tight">
        Testimonials That Speak
      </h1>
      <AnimatedTestimonials testimonials={testimonials} />
    </section>
  );
}
