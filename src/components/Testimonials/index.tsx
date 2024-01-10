import Layout from "../Layout";

interface TestimonialsProps {
    testimonial: string;
    name: string;
}

const Testimonials = ({testimonial, name}: TestimonialsProps) => {
  return (
    <Layout className="py-20 space-y-4 bg-black text-white text-center md:text-left "> 
        <p className="text-4xl leading-relaxed md:w-2/3">{testimonial}</p>
        <p className="font-light text-2xl">- {name}</p>
    </Layout>
  )
}

export default Testimonials