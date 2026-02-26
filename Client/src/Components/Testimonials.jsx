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
        "Judah is a curious person who’s always ready to learn, and that mindset is what makes him one of the best developers I know.",
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
        "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
      name: "Lisa Thompson",
      designation: "VP of Technology at FutureNet",
      src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
