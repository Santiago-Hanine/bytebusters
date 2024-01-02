import Card from '../Card';

interface CardsProps {
    cards: { image: string; title: string; description: string }[];
    featuredCard: boolean;
  }

const Cards = ({ featuredCard, cards }:CardsProps) => (
    <>
      {!!featuredCard && 
        cards.map((card, index) => <Card key={index} card={card} />)
      }
    </>
)

export default Cards