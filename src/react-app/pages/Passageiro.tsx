import { ArrowUpRight, Shield, MapPin, Star, Smartphone, CreditCard } from 'lucide-react';
import Header from '@/react-app/components/Header';
import Footer from '@/react-app/components/Footer';

export default function Passageiro() {
  const features = [
    {
      icon: MapPin,
      title: "Chegada rápida",
      description: "Carros próximos a você em poucos minutos"
    },
    {
      icon: Shield,
      title: "Viagem segura",
      description: "Motoristas verificados e viagens monitoradas"
    },
    {
      icon: CreditCard,
      title: "Pagamento fácil",
      description: "Pague com cartão, PIX ou dinheiro"
    },
    {
      icon: Star,
      title: "Avaliação dos motoristas",
      description: "Sistema de avaliação para garantir qualidade"
    }
  ];

  const safetyFeatures = [
    "GPS ativo durante toda a viagem",
    "Compartilhamento de localização em tempo real",
    "Botão de emergência no app",
    "Verificação de documentos dos motoristas",
    "Suporte 24 horas por dia",
    "Seguro para passageiros"
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-[72px] bg-gradient-to-br from-yellow-400 to-orange-400 overflow-hidden">
        <div className="container mx-auto px-6 lg:px-16 py-16 lg:py-24">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="lg:w-1/2 text-center lg:text-left">
              <h1 className="text-4xl lg:text-6xl font-bold text-black mb-6">
                Chegue ao seu <span className="bg-black text-yellow-400 px-3 py-1 rounded">destino</span> com segurança
              </h1>
              <p className="text-xl text-black mb-8">
                Solicite uma corrida na 99Ride e viaje com conforto, rapidez e o melhor preço da cidade.
              </p>
              <button className="bg-black text-white px-8 py-4 rounded-full font-semibold text-lg inline-flex items-center gap-3 hover:bg-gray-800 transition-colors group">
                <Smartphone className="w-5 h-5" />
                Baixar app
              </button>
            </div>

            <div className="lg:w-1/2 flex justify-center">
              <div className="relative">
                <div className="w-[280px] h-[400px] bg-gradient-to-br from-gray-800 to-gray-900 rounded-[3rem] p-6 shadow-2xl">
                  <div className="w-full h-full bg-white rounded-[2rem] overflow-hidden relative">
                    {/* Phone screen mockup */}
                    <div className="absolute top-0 left-0 right-0 h-20 bg-yellow-400 flex items-center justify-center">
                      <div className="text-lg font-bold text-black">99Ride</div>
                    </div>
                    
                    <div className="mt-24 px-6">
                      <div className="bg-gray-50 p-4 rounded-2xl mb-4">
                        <div className="flex items-center gap-3 mb-2">
                          <MapPin className="w-5 h-5 text-green-500" />
                          <span className="text-sm font-medium">Av. Paulista, 1000</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <MapPin className="w-5 h-5 text-orange-500" />
                          <span className="text-sm font-medium">Shopping Ibirapuera</span>
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="flex justify-between items-center p-3 bg-gray-50 rounded-xl">
                          <span className="font-medium">99Pop</span>
                          <span className="font-bold text-green-600">R$ 12,50</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-yellow-100 rounded-xl border-2 border-yellow-400">
                          <span className="font-medium">99Confort</span>
                          <span className="font-bold text-green-600">R$ 18,90</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="absolute bottom-6 left-6 right-6">
                      <button className="w-full bg-orange-500 text-white py-3 rounded-full font-semibold">
                        Solicitar corrida
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-5xl font-bold text-black mb-6">
              Por que escolher a <span className="bg-yellow-400 px-2 py-1 rounded">99Ride?</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-yellow-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-xl font-bold text-black mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-5xl font-bold text-black mb-6">
              Como <span className="bg-yellow-400 px-2 py-1 rounded">funciona</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-black">1</span>
              </div>
              <h3 className="text-xl font-bold text-black mb-3">Informe seu destino</h3>
              <p className="text-gray-600">Digite para onde você quer ir e escolha a categoria do veículo</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-black">2</span>
              </div>
              <h3 className="text-xl font-bold text-black mb-3">Encontre um motorista</h3>
              <p className="text-gray-600">Um motorista próximo será encontrado em poucos segundos</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-black">3</span>
              </div>
              <h3 className="text-xl font-bold text-black mb-3">Chegue ao destino</h3>
              <p className="text-gray-600">Acompanhe a viagem pelo app e pague de forma segura</p>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Section */}
      <section className="bg-white py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl lg:text-5xl font-bold text-black mb-6">
                Sua <span className="bg-yellow-400 px-2 py-1 rounded">segurança</span> em primeiro lugar
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Na 99Ride, sua proteção é nossa prioridade. Conheça as funcionalidades que garantem viagens mais seguras.
              </p>

              <div className="space-y-4">
                {safetyFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Shield className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:w-1/2 flex justify-center">
              <div className="relative">
                <div className="w-[320px] h-[240px] lg:w-[480px] lg:h-[360px] bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl overflow-hidden shadow-2xl">
                  <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                  
                  {/* Safety icons overlay */}
                  <div className="absolute top-6 left-6 bg-white bg-opacity-90 backdrop-blur-sm p-3 rounded-xl">
                    <Shield className="w-6 h-6 text-green-500" />
                  </div>
                  
                  <div className="absolute top-6 right-6 bg-white bg-opacity-90 backdrop-blur-sm p-3 rounded-xl">
                    <MapPin className="w-6 h-6 text-blue-500" />
                  </div>
                  
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-white bg-opacity-90 backdrop-blur-sm p-4 rounded-2xl">
                      <div className="text-center">
                        <div className="text-sm text-gray-600 mb-1">Viagem monitorada</div>
                        <div className="text-lg font-bold text-green-600">100% Segura</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-black py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-16 text-center">
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
            Baixe o app e <span className="bg-yellow-400 text-black px-3 py-1 rounded">comece a viajar</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Milhões de pessoas já usam a 99Ride para se locomover pela cidade. Faça parte você também!
          </p>
          <button className="bg-yellow-400 text-black px-8 py-4 rounded-full font-semibold text-lg inline-flex items-center gap-3 hover:bg-yellow-300 transition-colors group">
            <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform" />
            Baixar agora
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
