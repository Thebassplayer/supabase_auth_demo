import Portada from "@/assets/imagen-portada.png";
import Image from "next/image";

const HeroOne = () => {
  return (
    <section className="bg-purple-extralight relative flex h-full w-full grow flex-col px-28">
      <div className="absolute right-8 top-0 flex h-full w-full items-center justify-center">
        <Image src={Portada} alt="Portada" />
      </div>
      <div className="z-10 grid h-full grid-rows-2">
        <div className="row-start-2 w-fit pl-16 pt-4">
          <p className="font-sifonn text-primary-white text-5xl uppercase leading-none">
            Conecta con
          </p>
          <p className="font-sifonn text-primary-white text-5xl uppercase leading-none">
            tu cuerpo
          </p>
          <p className="font-bebas text-2xl uppercase tracking-wide text-black">
            conociendo y expandiendo tu fuerza y flexibilidad
          </p>

          <button
            title="Quiero saber mas"
            className="bg-primary-yellow font-roboto text-purple-dark active:bg-purple-dark active:text-primary-yellow mt-4 justify-self-center rounded-md px-4 py-2 font-semibold hover:scale-105 "
          >
            Quiero saber mas
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroOne;