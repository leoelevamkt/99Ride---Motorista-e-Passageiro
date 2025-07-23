import { ArrowRight, Smartphone } from 'lucide-react';

export default function DownloadSection() {
  return (
    <section className="bg-yellow-400 py-16 lg:py-24">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <h2 className="text-3xl lg:text-5xl font-bold text-black mb-6">
              Baixe o app e viaje de maneira rápida, simples e segura.
            </h2>
            
            <button className="bg-black text-white px-8 py-4 rounded-full font-semibold text-lg inline-flex items-center gap-3 hover:bg-gray-800 transition-colors group">
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              Baixar agora
            </button>
          </div>

          {/* Image */}
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative">
              <div className="w-[280px] h-[400px] bg-gradient-to-br from-gray-800 to-gray-900 rounded-[3rem] p-6 shadow-2xl">
                <div className="w-full h-full bg-white rounded-[2rem] flex flex-col items-center justify-center relative overflow-hidden">
                  {/* Phone screen content */}
                  <div className="absolute top-0 left-0 right-0 h-20 bg-yellow-400 flex items-center justify-center">
                    <div className="text-lg font-bold text-black">99Ride</div>
                  </div>
                  
                  <div className="mt-16 text-center px-6">
                    <Smartphone className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-gray-800 mb-2">App 99Ride</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Solicite corridas com segurança e praticidade
                    </p>
                  </div>
                  
                  <div className="absolute bottom-6 left-6 right-6">
                    <button className="w-full bg-orange-500 text-white py-3 rounded-full font-semibold">
                      Começar
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Floating download badges */}
              <div className="absolute -right-4 top-1/4 bg-white p-3 rounded-2xl shadow-lg">
                <div className="text-xs text-gray-600">App Store</div>
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 bg-blue-500 rounded"></div>
                  <span className="text-sm font-semibold">4.8★</span>
                </div>
              </div>
              
              <div className="absolute -left-4 top-3/4 bg-white p-3 rounded-2xl shadow-lg">
                <div className="text-xs text-gray-600">Google Play</div>
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 bg-green-500 rounded"></div>
                  <span className="text-sm font-semibold">4.7★</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
