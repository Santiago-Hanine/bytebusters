import Image from "next/image"


interface CardProps {
  card: { image: string; title: string; description: string };
}

const Card = ({card}: CardProps) => (
              <div className="h-auto w-full max-w-[30rem] flex flex-col items-end rounded-t-lg flex-1">
                <Image src={card.image} 
                alt={card.title}
                width={500}
                height={300}
                className="object-cover h-64 lg:h-96 w-full rounded-t-lg flex-none" 
                />
                <div className="bg-[rgba(0,0,0,0.9)] p-6 h-full gap-6 rounded-b-lg flex flex-col ">
                  <h3 className="text-white font-medium text-xl xl:text-2xl text-center">{card.title}</h3>
                  <p className="font-light text-sm md:text-sm text-white tracking-widest text-center">{card.description}</p>
                </div>
              </div>

  )

export default Card