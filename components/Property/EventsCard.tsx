import Image from "next/image";
import React from "react";
interface EventsCardInterface {
  title: string;
  date: string;
  time: string;
  location: string;
  image: string;
}

const EventsCard: React.FC<EventsCardInterface> = ({
  title,
  date,
  time,
  location,
  image,
}) => {
  return (
    <div className="w-[300px] p-3 h-max border-2 border-solid rounded-lg flex justify-start items-center gap-1 flex-col">
      <Image
        alt={title}
        src={image}
        width={500}
        height={250}
        className="object-cover object-center w-full h-max rounded-lg mb-2"
      />
      <div className="w-full h-max flex justify-start gap-2 font-secondary items-center text-text2 text-[16px]">
        Event Title:
        <strong className="font-normal text-black font-secondary text-[16px]">
          {title}
        </strong>
      </div>
      <div className="w-full h-max flex justify-start gap-2 font-secondary items-center text-text2 text-[16px]">
        Date:
        <strong className="font-normal text-black font-secondary text-[16px]">
          {date}
        </strong>
      </div>

      <div className="w-full h-max flex justify-start gap-2 font-secondary items-center text-text2 text-[16px]">
        Time:
        <strong className="font-normal text-black font-secondary text-[16px]">
          {time}
        </strong>
      </div>

      <div className="w-full h-max flex justify-start gap-2 font-secondary items-center text-text2 text-[16px]">
        Event Location:
        <strong className="font-normal text-black font-secondary text-[16px]">
          {location}
        </strong>
      </div>
    </div>
  );
};

export default EventsCard;
