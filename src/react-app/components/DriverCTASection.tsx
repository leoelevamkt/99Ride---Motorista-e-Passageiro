import { Car } from 'lucide-react';

export default function DriverCTASection() {
  return (
    <section className="bg-gray-50 py-16 lg:py-24">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <h2 className="text-3xl lg:text-5xl font-bold text-black mb-6">
              Seja motorista parceiro 99Ride e <span className="bg-yellow-400 px-2 py-1 rounded">aumente a sua renda</span>
            </h2>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Você vai poder contar com os planos de incentivo da 99Ride para garantir seus ganhos.
            </p>
            
            <button className="border-2 border-black text-black px-8 py-4 rounded-full font-semibold text-lg inline-flex items-center gap-3 hover:bg-black hover:text-white transition-colors group">
              <Car className="w-5 h-5" />
              Quero ser motorista
            </button>
          </div>

          {/* Image */}
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative">
              <div className="w-[320px] h-[240px] lg:w-[480px] lg:h-[360px] bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                
                {/* Car illustration */}
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="bg-white bg-opacity-90 backdrop-blur-sm p-6 rounded-2xl">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
                        <Car className="w-6 h-6 text-black" />
                      </div>
                      <div>
                        <div className="text-lg font-bold text-black">João Silva</div>
                        <div className="text-sm text-gray-600">Motorista Parceiro</div>
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <div className="text-2xl font-bold text-green-600">+ R$ 3.240</div>
                      <div className="text-sm text-gray-600">Ganhos este mês</div>
                    </div>
                  </div>
                </div>
                
                {/* Background pattern */}
                <div className="absolute top-4 right-4 w-20 h-20 bg-white bg-opacity-10 rounded-full"></div>
                <div className="absolute top-16 left-4 w-12 h-12 bg-white bg-opacity-10 rounded-full"></div>
                <div className="absolute bottom-32 right-12 w-8 h-8 bg-white bg-opacity-10 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
