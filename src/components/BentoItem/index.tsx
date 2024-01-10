import clsx from "clsx";

interface BentoItemProps {
  title: string;
  description: string;
  imgCard: string;
  className?: string;
}

const BentoItem = ({ title, description, className, imgCard }: BentoItemProps) => {
  return (
    <div className={clsx("w-full p-4 rounded-xl border border-black/30 shadow-inner shadow-white/10 flex justify-end flex-col gap-y-4 relative overflow-hidden group text-white", className)}>
      <h3 className="text-3xl font-semibold">{title}</h3>
      <hr className="border-white/40" />
      <p className="text-white/80">{description}</p>

      <div
        className="absolute left-0 top-0 bottom-0 right-0 rounded-xl overflow-hidden bg-cover bg-center bg-no-repeat transition-transform duration-300 transform group-hover:scale-110 -z-20"
        style={{ backgroundImage: `url(${imgCard})` }}
      />
      
      <div className="absolute left-0 bottom-0 top-0 w-full h-full
      bg-gradient-to-b -z-10 from-transparent via-black/20 to-black/80"
      />
    
    </div>

  );
};

export default BentoItem;
