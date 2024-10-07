import React from "react";


export default function App() {
  return (
    <div>
    <div className="bg-neutral-darkBlueCard xxs:max-w-[348px] rounded-xl xxs:max-h-fit xxs:flex flex-col p-5 pb-7 relative group xxs:mx-auto">
      <div className=" invisible group-hover:visible absolute z-10 w-[308px] h-[300px] rounded-md flex flex-col items-center justify-center bg-primary-cyan/50 transition">
      <img src="./images/icon-view.svg" alt="view icon"/>
      </div>
      <main>
      <img className="w-[308px] h-[300px] rounded-md mb-7" src="./images/image-equilibrium.jpg" alt="equilibrium image"/>
      </main>
      <heading>
      <h1 className="text-white mb-6 text-2xl active:text-primary-cyan transition cursor-pointer">Equilibrium #3429</h1>
      </heading>
      <section>
        <p className="text-lg text-primary-softBlue mb-7">Our Equilibrium collection promotes balance and calm.</p>
        <div className="flex flex-row justify-between mb-6">
          <div className="flex flex-row items-center">
            <img className="mr-1.5 w-3 h-5" src="./images/icon-ethereum.svg" alt="ethereum icon"/>
            <p className="text-primary-cyan text-base tracking-wide"> 0.041 ETH</p>
          </div>
          <div className="flex flex-row items-center">
            <img className="mr-1.5 w-4 h-4" src="./images/icon-clock.svg" alt="clock icon"/>
            <p className="text-primary-softBlue text-base">3 days left</p>
          </div>
        </div>
        <hr className="border-neutral-darkBlueLine mb-4"/>
        <div className="flex flex-row items-center">
          <img className="rounded-full border-2 border-primary-softBlue w-8 h-8 mr-4" src="./images/image-avatar.png" alt="avatar"/>
          <p className="text-base tracking-wide text-primary-softBlue">Creation of <span className="text-white active:text-primary-cyan cursor-pointer transition">Jules Wyvern </span></p>
        </div>
      </section>
    </div>
    </div>
  );
  }
