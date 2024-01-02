
import CardContainer from '@/components/CardContainer';
import Hero from '@/components/Hero';
import Text from '@/components/Text';
import { cardData } from '@/components/Card/cardData';
import Cards from '@/components/Cards';


export default function Home() {
  return (
      <main>
        <Hero />
        <Text />
        <CardContainer>
          <Cards featuredCard={true} cards={cardData}/>
        </CardContainer>
      </main>
  )
}
