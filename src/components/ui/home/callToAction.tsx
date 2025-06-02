import { CircleUser, User2 } from "lucide-react";
import Button from "../button";
import Image from "next/image";

const CTA = () => {
  const metrics = [
    {
      title: "Happy Customers",
      amount: "12870+",
      icon: User2,
    },
    {
      title: "Client Satisfied",
      amount: "100%",
      icon: CircleUser,
    },
  ];
  return (
    <section className="py-10 mx-4 sm:mx-10 px-4 sm:px-10 rounded-xl bg-foreground grid grid-cols-1 sm:grid-cols-2 gap-8">
      <div className="flex flex-col gap-4">
        <p className="text-primary-100 dark:text-primary-200 font-semibold">
          Achievement
        </p>
        <h2 className="text-4xl font-semibold">
          Your Destination Awaits, Book Now
        </h2>
        <p className="text-sm subtext">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus
          excepturi quasi ad at aperiam!
        </p>

        <div className="grid grid-cols-2 gap-3">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="bg-background p-3 rounded-xl shadow-xl cta-metric"
            >
              <div className="place-self-center">
                <p className="text-xl font-semibold text-primary-100">
                  {metric.amount}
                </p>
                <p>{metric.title}</p>
              </div>
              <div className="grid place-self-center p-3 text-primary-100">
                <metric.icon size={40} />
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-3 flex-wrap">
          <p className="grow font-semibold">Conenct With Us to Learn More</p>
          <Button>Contact Us</Button>
        </div>
      </div>
      <Image
        src="/blogs/woman_travel_plan.avif"
        alt="Woman Making Travel Plans"
        width={1000}
        height={1000}
        className="bg-background rounded-xl h-auto place-self-center"
        loading="lazy"
      />
    </section>
  );
};

export default CTA;
