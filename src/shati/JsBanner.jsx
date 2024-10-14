import CountUp from 'react-countup';

const JsBanner = () => {
  return (
    <div
      className="relative bg-red-400 bg-cover bg-center md:h-[500px] h-auto md:my-10 my-8 "
      style={{
        backgroundImage:
          "url('https://i.postimg.cc/sX1BnfnS/doctors-doing.jpg')",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      <div className="w-[80%] pt-16 mx-auto h-full flex flex-col relative z-10">
        <div className="grid md:grid-cols-3 gap-5 grid-cols-1">
          {/* card number 1 */}
          <div className="max-w-xs border p-4 space-y-5 border-gray-200/40 bg-slate-100 bg-opacity-30 backdrop-blur-0 rounded-lg shadow-lg transform transition-transform hover:scale-105 duration-300 ease-in-out">
            <div className="flex justify-center">
              <img
                className="h-28 w-28 object-cover rounded-full border-2 border-gray-300"
                src="https://i.postimg.cc/28x9rfRq/portrait-cheerful.jpg"
                alt="Professor"
              />
            </div>
            <div className="text-center space-y-1">
              <h1 className="text-2xl text-[#69dde5] font-semibold">
                Professor Dr. John Doe
              </h1>
              <p className="text-sm text-white/90">
                Over 25 years of experience in medical research and advanced
                surgical procedures globally.
              </p>
            </div>
          </div>

          {/* card number 2 */}
          <div className="max-w-xs border p-4 space-y-5 border-gray-200/40 bg-slate-100 bg-opacity-30 backdrop-blur-0 rounded-lg shadow-lg transform transition-transform hover:scale-105 duration-300 ease-in-out">
            <div className="flex justify-center">
              <img
                className="h-28 w-28 object-cover rounded-full border-2 border-gray-300"
                src="https://i.postimg.cc/DyfdQJHZ/man-with.jpg"
                alt="Professor"
              />
            </div>
            <div className="text-center space-y-1">
              <h1 className="text-2xl text-[#69dde5] font-semibold">
                Professor Dr. Sarah Lee
              </h1>
              <p className="text-sm text-white/90">
                18 years of clinical practice in cardiology, specializing in
                heart disease prevention and treatment.
              </p>
            </div>
          </div>

          {/* card number 3 */}
          <div className="max-w-xs mb-4 md:mb-0 border p-4 space-y-5 border-gray-200/40 bg-slate-100 bg-opacity-30 backdrop-blur-0 rounded-lg shadow-lg transform transition-transform hover:scale-105 duration-300 ease-in-out">
            <div className="flex justify-center">
              <img
                className="h-28 w-28 object-cover rounded-full border-2 border-gray-300"
                src="https://i.postimg.cc/Fz4GXTTg/medium-shot.jpg"
                alt="Professor"
              />
            </div>
            <div className="text-center space-y-1">
              <h1 className="text-2xl text-[#69dde5] font-semibold">
                Professor Dr. Michael
              </h1>
              <p className="text-sm text-white/90">
                22 years of expertise in neurosurgery, focusing on complex brain
                and spinal cord surgeries.
              </p>
            </div>
          </div>
        </div>
      </div>

{/* text */}
      <div className="w-full h-36 hidden md:block bg-[#1DBFCC] absolute bottom-0 left-0">
        <div className="w-full h-36 flex justify-evenly items-center text-white/90">
          <div className="text-center">
            <h1 className="text-3xl font-semibold">
              <CountUp start={0} enableScrollSpy={true} end={100} duration={3.17} scrollSpyOnce={true}></CountUp>%
            </h1>
            <p className="text-sm">Quality</p>
          </div>
          <div className="text-center">
            <h1 className="text-3xl font-semibold"><CountUp start={0} enableScrollSpy={true} scrollSpyOnce={true} end={3480} duration={3.17} scrollSpyDelay={1000}></CountUp></h1>
            <p className="text-sm">Patients a year</p>
          </div>
          <div className="text-center">
            <h1 className="text-3xl font-semibold">
            <CountUp start={0} enableScrollSpy={true}  end={35} duration={3.17} scrollSpyDelay={1500} scrollSpyOnce={true}></CountUp></h1>
            <p className="text-sm">People working</p>
          </div>
          <div className="text-center">
            <h1 className="text-3xl font-semibold">
            <CountUp start={0} enableScrollSpy={true}  end={40} duration={3.17} scrollSpyOnce={true} scrollSpyDelay={2000}></CountUp></h1>
            <p className="text-sm">Years of experience</p>
          </div>
          <div className="text-center">
            <h1 className="text-3xl font-semibold">
            <CountUp start={0} enableScrollSpy={true} end={8856} duration={3.17} scrollSpyOnce={true} scrollSpyDelay={2500}></CountUp></h1>
            <p className="text-sm">Happy Smiles</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JsBanner;