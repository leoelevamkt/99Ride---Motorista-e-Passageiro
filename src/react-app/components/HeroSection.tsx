import { ArrowUpRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative pt-[72px] overflow-hidden h-screen bg-yellow-400">
      <div className="absolute inset-0 -z-10 bg-yellow-400" />
      
      <div className="container mx-auto h-full flex items-center">
        <div className="flex flex-col lg:flex-row items-center justify-between w-full px-6 lg:px-16">
          {/* Content */}
          <div className="text-black relative flex flex-col py-12 lg:py-28 gap-8 justify-center lg:w-1/2 pt-20 pb-10">
            <div className="flex flex-col gap-6 z-50">
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal leading-tight">
                <span className="font-bold">Ganhe até</span>
                <br />
                <span className="font-bold">R$4000*</span>
                <br />
                <span className="font-bold">com a 99Ride!</span>
              </h1>
              
              <p className="text-xl lg:text-2xl font-normal max-w-lg">
                Ser motorista parceiro(a) 99Ride tem inúmeros benefícios. Já pensou fazer seus próprios horários e ainda garantir uma grana extra?
              </p>
            </div>
            
            <button className="bg-black text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center gap-3 w-fit hover:bg-gray-800 transition-colors group">
              <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform" />
              Quero ser motorista
            </button>
          </div>

          {/* Hero Image */}
          <div className="lg:w-1/2 flex justify-center lg:justify-end relative">
            <div className="w-[300px] h-[300px] lg:w-[500px] lg:h-[500px] bg-gradient-to-br from-orange-400 to-yellow-500 rounded-full flex items-center justify-center shadow-2xl">
              <div className="w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] bg-white rounded-full flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl lg:text-8xl font-bold text-orange-500 mb-4">99</div>
                  <div className="text-lg lg:text-xl text-gray-600">Conectando pessoas</div>
                </div>
              </div>
            </div>
            
            {/* Floating cards */}
            <div className="absolute top-10 left-10 bg-white p-4 rounded-2xl shadow-lg hidden lg:block">
              <div className="text-sm text-gray-600">Ganhos hoje</div>
              <div className="text-2xl font-bold text-green-500">R$ 287,50</div>
            </div>
            
            <div className="absolute bottom-20 right-10 bg-white p-4 rounded-2xl shadow-lg hidden lg:block">
              <div className="text-sm text-gray-600">Corridas realizadas</div>
              <div className="text-2xl font-bold text-blue-500">12</div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
