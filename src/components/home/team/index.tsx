"use client";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import { players } from "../../../data/player";
import SectionHeader from "../../ui/SectionHeader";

const Team = () => {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);

  const handleClick = (id: number) => {
    navigate(`/auth/player/${id}`);
  };

  const handleNext = () => {
    if (index < players.length - 1) {
      setIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (index > 0) {
      setIndex((prev) => prev - 1);
    }
  };

  return (
    <div className="flex flex-col gap-6">
      <SectionHeader subtitle="OUR TEAM MEMBER" title="ACTIVE TEAM MEMBERS" />

      {/* Desktop Layout - Show 4 members */}
      <div className="hidden lg:flex gap-6 w-11/12 mx-auto">
        {players.slice(0, 4).map((member) => (
          <div
            key={member.id}
            onClick={() => handleClick(member.id)}
            className="cursor-pointer w-1/4 flex flex-col bg-[#1c242f] rounded-lg hover:-translate-y-2 transition-transform duration-500 group"
          >
            <div className="relative h-[300px] overflow-hidden">
              <div className="absolute opacity-[0.5] group-hover:opacity-[1] transition-all duration-300 ease-in-out border-t pt-1 border-[#45f882] origin-top-right rotate-[30deg] left-[-40px] top-[120px]">
                <div className="bg-[#45f882] p-8 w-[200px]"></div>
              </div>

              <div className="absolute opacity-[0.5] group-hover:opacity-[1] transition-all duration-300 ease-in-out border-t pt-1 border-green-600 origin-top-left rotate-[-30deg] right-[-40px] top-[120px]">
                <div className="bg-[#45f882] p-8 w-[200px]"></div>
              </div>

              <div className="absolute w-9/12 top-[40px] left-[50px]">
                <img
                  src={member.image}
                  alt={member.name}
                  className="border-4 border-white object-center rounded-full w-[200px] h-[200px]"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2 px-10 pb-6 text-center">
              <h1 className="uppercase text-2xl text-white">{member.name}</h1>
              <p className="capitalize font-bold text-[#45f882]">
                {member.role}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile Layout - Show 1 member at a time */}
      <div className="lg:hidden flex flex-col items-center gap-4">
        <div className="w-9/12">
          <div
            key={players[index].id}
            onClick={() => handleClick(players[index].id)}
            className="cursor-pointer flex flex-col bg-[#1c242f] rounded-lg hover:-translate-y-2 transition-transform duration-500 group"
          >
            <div className="relative h-[300px] overflow-hidden">
              <div className="absolute opacity-[0.5] group-hover:opacity-[1] transition-all duration-300 ease-in-out border-t pt-1 border-[#45f882] origin-top-right rotate-[30deg] left-[-40px] top-[120px]">
                <div className="bg-[#45f882] p-8 w-[200px]"></div>
              </div>

              <div className="absolute opacity-[0.5] group-hover:opacity-[1] transition-all duration-300 ease-in-out border-t pt-1 border-green-600 origin-top-left rotate-[-30deg] right-[-40px] top-[120px]">
                <div className="bg-[#45f882] p-8 w-[200px]"></div>
              </div>

              <div className="absolute  top-[40px] left-[40px]">
                <img
                  src={players[index].image}
                  alt={players[index].name}
                  className="border-4 border-white object-center rounded-full w-[230px] h-[230px]"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2 px-10 pb-6 text-center">
              <h1 className="uppercase text-2xl text-white">
                {players[index].name}
              </h1>
              <p className="capitalize font-bold text-[#45f882]">
                {players[index].role}
              </p>
            </div>
          </div>
        </div>

        {/* Prev/Next Buttons */}
        <div className="flex gap-4 text-3xl text-white">
          <button
            onClick={handlePrev}
            disabled={index === 0}
            className="disabled:opacity-30"
          >
            <IoIosArrowDropleft />
          </button>
          <button
            onClick={handleNext}
            disabled={index === players.length - 1}
            className="disabled:opacity-30"
          >
            <IoIosArrowDropright />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Team;
