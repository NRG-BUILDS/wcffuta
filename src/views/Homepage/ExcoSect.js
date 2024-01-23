const ExcoCard = ({
  roleName,
  excoName,
  dept,
  lvl,
  verse,
  moment,
  fun,
  img,
}) => {
  return (
    <div className="excoCard py-6 transiton duration-100 border-2 hover:border-brightRed hover:shadow-lg hover:shadow-red-100  px-4 bg-white -skew-y-6 w-full relative">
      <div className="overflow-hidden">
        {img && (
          <img
            src={require(`../../assets/images/excos/${img}`)}
            alt=""
            className="md:h-80 w-full skew-y-6 object-cover mx-auto scale-110"
          />
        )}
        {!img && (
          <img
            src={require(`../../assets/images/excos/default.webp`)}
            alt=""
            className=" skew-y-6 object-fill mx-auto scale-110"
          />
        )}
      </div>
      <div className="skew-y-6 pt-14 pb-8">
        <p className="leading-4 text-gray-500 font-semibold uppercase text-xl">
          {roleName}
        </p>

        <h3 className="text-3xl my-4 text-deepRed">{excoName}</h3>
        <p>
          <span className="text-gray-500">DEPT:</span> {dept}
        </p>
        <p>
          <span className="text-gray-500">LVL:</span> {lvl}
        </p>
        <p>
          <span className="text-gray-500">WATCH VERSE:</span>
          <a
            href={`https://www.google.com/search?q=${verse}`}
            className="underline text-deepRed"
          >
            {" "}
            {verse}
          </a>{" "}
        </p>
        <p className="pt-4">
          <span className="text-gray-500">
            FAV WCF MOMENT:
            <br />
          </span>
          {moment}
        </p>
        <p>
          <span className="text-gray-500">
            FUN THING ABOUT ME:
            <br />
          </span>{" "}
          {fun}{" "}
        </p>
      </div>
    </div>
  );
};

const ExcoSect = () => {
  const showFullSect = (e) => {
    let section = document.querySelector(".excoSect");
    section.classList.add("active");
    e.currentTarget.style.display = "none";
  };

  return (
    <section className="leftCorner bg-white pt-24 pb-44 z-10">
      <div className="zoomIn max-w-4xl px-4 md:px-8 pb-6 font-bold -skew-y-6">
        <p className="revealTop uppercase text-2xl leading-3">meet our</p>
        <p className="revealTop text-brightRed uppercase text-4xl">Excos</p>
      </div>
      <div className="excoSect grid md:grid-cols-3 gap-5 max-w-5xl mx-auto px-4 py-10 justify-evenly items-center md:h-full relative overflow-clip duration-100 pb-10">
        <ExcoCard
          roleName={"coordinator 001 & brother's coordinator"}
          excoName={"Joseph Femi Oloba"}
          dept={"Industrial & Production Engineering"}
          lvl={500}
          verse={"Gal. 5:25"}
          moment={"400l get together and staying in the secretariat"}
          fun={"A hard shell with soft tissues🤗"}
          img={"joseph.webp"}
        />
        <ExcoCard
          roleName={"coordinator 002 & sister's coordinator"}
          excoName={"Love Oluwabukola Adegbenro"}
          dept={"Applied Geology"}
          lvl={500}
          verse={"Isa. 49:15-16"}
          moment={"Family song and after service meet and greet"}
          fun={"I'm love❤"}
          img={"adegbenro.webp"}
        />
        <ExcoCard
          roleName={" Special Duties & Technical Unit Coordinator"}
          excoName={"Olaibi David"}
          dept={"Cyber Security"}
          lvl={500}
          verse={"Deut. 8:7-18"}
          moment={"Whenever P. Kelechi teaches"}
          fun={"I love making my friends laugh"}
          img={"olaibi.webp"}
        />
        <ExcoCard
          roleName={" Special Duties & Drama Unit Coordinator"}
          excoName={"Adejumo Matthew"}
          dept={"Physics"}
          lvl={500}
          verse={"Rev. 5:10"}
          moment={"WCF Weeks and 400l Hangout 🎉"}
          fun={"I am easy going"}
          img={"adejumo.webp"}
        />
        {/* <ExcoCard
          roleName={"general secretary"}
          excoName={"Olagoke Favour"}
          dept={"Biochemistry"}
          lvl={500}
          verse={"Psalm 34:10"}
          moment={"Moment of worship"}
          fun={"I love visiting interesting places 🚌"}
          img={"olagoke_favour.webp"}
        />
        <ExcoCard
          roleName={"assistant general secretary"}
          excoName={"Lebi Oluwatodimu"}
          dept={"Mining Engineering"}
          lvl={200}
          verse={"Exo. 23:25"}
          moment={"Relationship service during WCF Week 23"}
          fun={"I joke a lot 😂"}
          img={"lebi_oluwatodimu.webp"}
        /> */}
        <ExcoCard
          roleName={"financial secretary"}
          excoName={"Omoyemi Oreoluwa"}
          dept={"Biology"}
          lvl={300}
          verse={"1Thes. 1:18"}
          moment={"Drama night 🎬"}
          fun={"I love looking for trouble but I am very gentle"}
          img={"omoyemi.webp"}
        />
        <div className="zoomIn px-4 py-8 md:px-8 md:col-span-3 font-bold -skew-y-6">
          <p className="revealTop uppercase text-2xl leading-3">unit</p>
          <p className="revealTop text-brightRed uppercase text-4xl">
            coordinators
          </p>
        </div>
        <ExcoCard
          roleName={"Publicity Unit Coordinator"}
          excoName={"King David Olufemi"}
          dept={"Quantity Surveying"}
          lvl={500}
          verse={"Isa. 48:17"}
          moment={"Every service day when we sing the family song"}
          fun={"I am multi-talented, simple and gentle 🌟"}
          img={"david_olufemi.webp"}
        />
        <ExcoCard
          roleName={"academic unit coordinator"}
          excoName={"Adebanji Emmanuel"}
          dept={"Mechanical Engineering"}
          lvl={300}
          verse={"Psa. 34:1"}
          moment={"100 level hangout day"}
          fun={"I love learning new things"}
          img={"adebanji_emmanuel.webp"}
        />
        <ExcoCard
          roleName={"choir coordinator"}
          excoName={"Arowolo Samuel"}
          dept={"Computer Engineering"}
          lvl={500}
          verse={"Col 3:16"}
          moment={"Praise and worship session"}
          fun={""}
          img={"arowolo_samuel.webp"}
        />
        <ExcoCard
          roleName={"sancutary & decorating unit assistant coordinator"}
          excoName={"Mogboyinola Faith"}
          dept={"ood Science and Technology"}
          lvl={200}
          verse={"Heb. 12:1"}
          moment={"Drama night, WCF week"}
          fun={"I'm dramatic and emotional"}
          img={"mogboyinola.webp"}
        />

        {/* <ExcoCard
          roleName={
            "Evangelism Unit (South Gate) Cooridnator & 500l Coordinator"
          }
          excoName={"David Iyke"}
          dept={"Applied Geology"}
          lvl={500}
          verse={"Psalm 46:10"}
          moment={"Moment of worship 🙏"}
          fun={"I am just curious. It can be fun and annoying also"}
          img={"david_ikye.webp"}
        /> */}
        <ExcoCard
          roleName={"Hospitality & Ushering Unit Assistant Coordinator"}
          excoName={"Elebute Olarenwaju Joseph"}
          dept={"Crop Soil and Pest Management"}
          lvl={500}
          verse={"Eccl. 12:13"}
          moment={"Every level get together and prayer services"}
          fun={"I sleep with my mouth open"}
          img={"elebute.webp"}
        />
        {/* <ExcoCard
          roleName={"Assistant Prayer Coordinator"}
          excoName={"Olaniyi Olamide"}
          dept={"Human Anatomy"}
          lvl={300}
          verse={"Phil. 4:13"}
          moment={"Singing the family song"}
          fun={"I don't hold grudges 🕊"}
          img={"olaniyi_olamide.webp"}
        /> */}
        <ExcoCard
          roleName={"Ushering Unit Coordinator"}
          excoName={"Ajisebutu Kehinde"}
          dept={"Biochemistry"}
          lvl={500}
          verse={"Phil. 4:13"}
          moment={"12-hour prayer session under President Kele tenure."}
          fun={"I love chatting"}
          img={"ajisebutu.webp"}
        />
        <ExcoCard
          roleName={"Sanctuary & Decorating Unit Coordinator"}
          excoName={"Okotete Onome Mary"}
          dept={"Fisheries and Aquaculture Technology"}
          lvl={500}
          verse={"Psa. 91:1"}
          moment={"400l get together"}
          fun={"Gisting and making friends laugh"}
          img={"okotete.webp"}
        />

        <div className="zoomIn px-4 py-8 md:px-8 md:col-span-3 font-bold -skew-y-6">
          <p className="revealTop uppercase text-2xl leading-3">level</p>
          <p className="revealTop text-brightRed uppercase text-4xl">
            coordinators
          </p>
        </div>
        <ExcoCard
          roleName={"500l coordinator"}
          excoName={"Olowo Kamiye"}
          dept={"Meteorology"}
          lvl={500}
          verse={"Rom. 6:28"}
          moment={"400l thanksgiving"}
          fun={"I have a likable personality"}
          img={"olowo.webp"}
        />
        <ExcoCard
          roleName={"400l assistant coordinator"}
          excoName={"Olayemi Temidayo"}
          dept={"Fisheries and Aquaculture Engineering"}
          lvl={400}
          verse={"Psa. 46:1-2"}
          moment={"Every WCF Relationship Service"}
          fun={"I love love"}
          img={"olayemi.webp"}
        />
        {/* <ExcoCard
          roleName={"300l coordinator"}
          excoName={"Adenuga Joshua"}
          dept={"Meteorology & Climate Science"}
          lvl={300}
          verse={"Joshua 1:8"}
          moment={"The day I joined publicity unit📸"}
          fun={"I can do a lot a things!"}
          img={"adenuga_joshua.webp"}
        /> */}
        <ExcoCard
          roleName={"300l assistant coordinator"}
          excoName={"Odemakinde Testimony"}
          dept={"Physiology"}
          lvl={300}
          verse={"Matt 28:20"}
          moment={
            "Unit hangout, 200l hangout , family song, relationship service"
          }
          fun={"I like acting even though I don't act 👼"}
          img={"odemakinde.webp"}
        />

        <ExcoCard
          roleName={"200l assistant coordinator"}
          excoName={"Daniel Jessica"}
          dept={"Food Science and Technology"}
          lvl={200}
          verse={"Psalm 1:1-3"}
          moment={"Family song/ 100l Hangout / Choir Prayer Night"}
          fun={"I love being in the midst of God's people"}
          img={"daniel.webp"}
        />

        <ExcoCard
          roleName={"100l Coordinator"}
          excoName={"Emmanuel Boluwatife"}
          dept={"Industrial Production Engineering"}
          lvl={200}
          verse={"Mat. 15:16"}
          moment={"Praise and worship sessions 🥁"}
          fun={"I imagine a lot"}
          img={"emmanuel_boluwatife.webp"}
        />
        <ExcoCard
          roleName={"100l Assistant Coordinator"}
          excoName={"Adebule Joy O."}
          dept={"Information and Communication Engineering"}
          lvl={300}
          verse={"1Cor 10:31"}
          moment={"Worahi sessions and family song 🥁"}
          fun={
            "I love making small miniature sketches every time I get my hands on a pen"
          }
          img={"adebule.webp"}
        />

        <div
          className="md:hidden absolute left-0 bottom-0 text-center w-full py-8 bg-gradient-to-b from-transparent to-white"
          onClick={(e) => {
            showFullSect(e);
          }}
        >
          <button className="bg-brightRed text-white shadow-xl rounded-3xl px-6 py-2 animate-bounce">
            View All Excos
          </button>
        </div>
      </div>
    </section>
  );
};

export default ExcoSect;
