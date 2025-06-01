import { MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type CardProps = {
  name: string;
  country: string;
  image: string;
};
const Card = ({ destination }: { destination: CardProps }) => {
  return (
    <div className="p-3 rounded-xl bg-highlight">
      <Image
        loading="lazy"
        src={destination.image}
        alt=""
        width={400}
        height={400}
        className="aspect-video bg-foreground rounded-xl"
      />
      <p className="mt-4 font-semibold">{destination.name}</p>
      <p className="subtext flex items-center gap-2 mt-1 text-sm">
        <MapPin /> {destination.country}
      </p>
      <Link
        href="/"
        className="bg-primary-200 dark:bg-primary-300 block py-2 rounded-xl text-white text-center text-lg mt-4 hover:bg-primary-100 hover:dark:bg-primary-200 transition-colors"
      >
        Discover
      </Link>
    </div>
  );
};

export default Card;
