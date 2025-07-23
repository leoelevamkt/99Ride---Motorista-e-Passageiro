import { ArrowUpRight, Shield, MapPin, Phone } from 'lucide-react';

export default function SafetySection() {
  return (
    <section className="bg-gradient-to-br from-gray-900 to-black py-16 lg:py-24 text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-orange-500 to-transparent opacity-20 rounded-full -translate-y-48 translate-x-48"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-yellow-400 to-transparent opacity-20 rounded-full translate-y-32 -translate-x-32"></div>
      
      <div className="container mx-auto px-6 lg:px-16 relative">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Image */}
          <div className="lg:w-1/2 flex justify-center order-2 lg:order-1">
            <div className="relative">
              <div className="w-[320px] h-[240px] lg:w-[480px] lg:h-[360px] bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl overflow-hidden shadow-2xl border border-gray-700">
                {/* City skyline illustration */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-yellow-400 to-transparent opacity-30"></div>
                
                {/* Safety features overlay */}
                <div className="absolute top-6 left-6 bg-white bg-opacity-10 backdrop-blur-sm p-4 rounded-xl border border-white border-opacity-20">
                  <div className="flex items-center gap-3">
                    <Shield className="w-5 h-5 text-green-400" />
                    <span className="text-sm font-semibold">Viagem Segura</span>
                  </div>
                </div>
                
                <div className="absolute top-6 right-6 bg-white bg-opacity-10 backdrop-blur-sm p-4 rounded-xl border border-white border-opacity-20">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-blue-400" />
                    <span className="text-sm font-semibold">GPS Ativo</span>
                  </div>
                </div>
                
                <div className="absolute bottom-6 left-6 bg-white bg-opacity-10 backdrop-blur-sm p-4 rounded-xl border border-white border-opacity-20">
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-orange-400" />
                    <span className="text-sm font-semibold">Suporte 24h</span>
                  </div>
                </div>
                
                {/* City buildings silhouette */}
                <div className="absolute bottom-0 left-0 right-0">
                  <svg viewBox="0 0 400 100" className="w-full h-24 text-white opacity-20">
                    <rect x="10" y="60" width="30" height="40" fill="currentColor" />
                    <rect x="50" y="40" width="25" height="60" fill="currentColor" />
                    <rect x="85" y="55" width="35" height="45" fill="currentColor" />
                    <rect x="130" y="30" width="28" height="70" fill="currentColor" />
                    <rect x="168" y="50" width="32" height="50" fill="currentColor" />
                    <rect x="210" y="35" width="30" height="65" fill="currentColor" />
                    <rect x="250" y="45" width="25" height="55" fill="currentColor" />
                    <rect x="285" y="25" width="35" height="75" fill="currentColor" />
                    <rect x="330" y="40" width="28" height="60" fill="currentColor" />
                    <rect x="368" y="55" width="32" height="45" fill="currentColor" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="lg:w-1/2 text-center lg:text-left order-1 lg:order-2">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              Conta com a 99Ride para <span className="bg-yellow-400 text-black px-2 py-1 rounded">chegar ao seu destino</span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              A 99Ride chega junto para você ter cada vez mais segurança e economia nas suas corridas
            </p>
            
            <button className="bg-yellow-400 text-black px-8 py-4 rounded-full font-semibold text-lg inline-flex items-center gap-3 hover:bg-yellow-300 transition-colors group">
              <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform" />
              Quero saber mais
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
