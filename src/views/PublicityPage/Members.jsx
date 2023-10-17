import { useState } from "react";
import MemInfo from "./MemInfo";

const Members = () => {
  return (
    <section className=" py-24 max-w-5xl mx-auto" id="members">
      <div className="py-2 text-center ">
        <h2 className="font-extrabold opacity-50">MEET THE FACES OF</h2>
        <h1 className="publicity_header text-7xl gradientWord">
          Publicity Unit
        </h1>
      </div>
      <div className="px-4 md:px-0 grid gap-8 md:grid-cols-3">
        {MemInfo.map((mem) => (
          <MemberCard
            name={mem.name}
            aka={mem.aka}
            isLeader={mem.isLeader}
            subUnit={mem.subUnit}
            skills={mem.skills}
            inspiration={mem.inspiration}
            biz={mem.biz}
            favMember={mem.favMember}
            moment={mem.moment}
            shoutOut={mem.shoutOut}
            pic={mem.pic}
          />
        ))}
      </div>
    </section>
  );
};

export default Members;

const MemberCard = ({
  name,
  aka = null,
  isLeader = null,
  inspiration,
  subUnit,
  skills,
  favMember,
  moment,
  biz,
  shoutOut,
  pic,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full h-96 rounded-lg overflow-hidden relative shadow-lg">
      <img
        src={require(`../../assets/images/publicity/${pic}`)}
        alt=""
        className="absolute top-0 left-0 w-full h-full object-cover object-top"
      />

      <div
        className={
          "absolute bottom-0 w-full bg-gradient-to-b from-transparent transition-all duration-200 to-deepRed text-white py-5 px-2 " +
          (isOpen ? "overflow-auto h-full" : "h-1/4")
        }
      >
        <h2 className="text-2xl">
          {name} <small className="font-light">({aka ? aka : ""})</small>
        </h2>
        <p className="capitalize">
          {subUnit.join(" | ")}
          {isLeader ? (
            <span className=" font-semibold opacity-80"> {isLeader}</span>
          ) : null}
        </p>
        <div className="my-4">
          <p className="mt-2">
            <span className="font-bold">
              Inspiration for joining publicity:
            </span>
            <br /> {inspiration}
          </p>
          <p className="mt-2 capitalize">
            <span className="font-bold">Skills:</span>
            <br />
            {skills.join(", ")}
          </p>
          <p className="mt-2">
            <span className="font-bold">Business & Career:</span>
            <br />
            {biz}
          </p>
          <p className="mt-2">
            <span className="font-bold">Favourite moment in WCF:</span>
            <br />
            {moment}
          </p>
          <p className="mt-2">
            <span className="font-bold">Favourite publicity unit member:</span>
            <br />
            {favMember}
          </p>
          <p className="mt-2">
            <span className="font-bold">Shout out to:</span>
            <br />
            {shoutOut}
          </p>

          <div
            className={
              "flex items-center justify-center rounded-full bg-deepRed text-white absolute left-1/2 -translate-x-1/2 w-12 h-12 transition-all " +
              (isOpen ? "rotate-0 -top-4 " : "rotate-180 -top-8 ")
            }
          >
            <button
              onClick={() => {
                isOpen ? setIsOpen(false) : setIsOpen(true);
              }}
            >
              <span className="material-icons-outlined flex items-center justify-center text-3xl">
                expand_more
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
