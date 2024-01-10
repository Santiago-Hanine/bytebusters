
import CardContainer from '@/components/CardContainer';
import Hero from '@/components/Hero';
import Text from '@/components/Text';
import { cardData } from '@/components/Card/cardData';
import Cards from '@/components/Cards';
import Bento from '@/components/Bento';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';


export default function Home() {
  return (
      <main>
        <Hero />
        <Text />
        <CardContainer>
          <Cards featuredCard={true} cards={cardData}/>
        </CardContainer>
        <Bento />
        <Testimonials 
          testimonial="ByteBusters provided exceptional computer repair service! Their team was prompt, knowledgeable, and fixed my laptop quickly. I'm grateful for their expertise and professionalism. Highly recommended!" 
          name='Sophia'
        />
      </main>
  )
}
