import { ArrowUpRight, Car, DollarSign, Clock, Shield, Smartphone } from 'lucide-react';
import Header from '@/react-app/components/Header';
import Footer from '@/react-app/components/Footer';

export default function Motorista() {
  const requirements = [
    "Ter CNH categoria B ou superior dentro da validade",
    "Possuir certificado de antecedentes criminais",
    "Ter veículo próprio ou alugado de 2012 em diante",
    "Ser maior de 21 anos",
    "Realizar curso de transporte remunerado"
  ];

  const vehicleCategories = [
    {
      name: "99Pop",
      description: "Corridas econômicas com carros compactos",
      requirements: "Carros de 2012 em diante, 4 portas",
      earnings: "R$ 2.500 - R$ 3.500/mês"
    },
    {
      name: "99Confort",
      description: "Corridas confortáveis com carros intermediários",
      requirements: "Carros de 2015 em diante, ar condicionado",
      earnings: "R$ 3.000 - R$ 4.500/mês"
    },
    {
      name: "99Premium",
      description: "Corridas premium com carros de luxo",
      requirements: "Carros de 2018 em diante, categoria premium",
      earnings: "R$ 4.000 - R$ 6.000/mês"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-[72px] bg-yellow-400 overflow-hidden">
        <div className="container mx-auto px-6 lg:px-16 py-16 lg:py-24">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="lg:w-1/2 text-center lg:text-left">
              <h1 className="text-4xl lg:text-6xl font-bold text-black mb-6">
                Seja motorista <span className="bg-black text-yellow-400 px-3 py-1 rounded">parceiro 99Ride</span>
              </h1>
              <p className="text-xl text-black mb-8">
                Faça seus próprios horários, ganhe dinheiro extra e conte com os melhores benefícios do mercado.
              </p>
              <button className="bg-black text-white px-8 py-4 rounded-full font-semibold text-lg inline-flex items-center gap-3 hover:bg-gray-800 transition-colors group">
                <Car className="w-5 h-5" />
                Começar agora
              </button>
            </div>

            <div className="lg:w-1/2 flex justify-center">
              <div className="relative">
                <div className="w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center shadow-2xl">
                  <Car className="w-24 h-24 lg:w-32 lg:h-32 text-white" />
                </div>
                
                {/* Floating elements */}
                <div className="absolute top-10 -left-6 bg-white p-4 rounded-2xl shadow-lg">
                  <div className="text-sm text-gray-600">Ganhos hoje</div>
                  <div className="text-2xl font-bold text-green-500">R$ 287,50</div>
                </div>
                
                <div className="absolute bottom-10 -right-6 bg-white p-4 rounded-2xl shadow-lg">
                  <div className="text-sm text-gray-600">Corridas</div>
                  <div className="text-2xl font-bold text-blue-500">12</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="bg-white py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-5xl font-bold text-black mb-6">
              Requisitos para ser <span className="bg-yellow-400 px-2 py-1 rounded">motorista</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Confira o que você precisa para começar a dirigir com a 99Ride
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {requirements.map((requirement, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-2xl hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-yellow-400 rounded-xl flex items-center justify-center mb-4">
                  <span className="text-black font-bold text-lg">{index + 1}</span>
                </div>
                <p className="text-gray-800 font-medium">{requirement}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vehicle Categories */}
      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-5xl font-bold text-black mb-6">
              Categorias de <span className="bg-yellow-400 px-2 py-1 rounded">veículos</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {vehicleCategories.map((category, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-2xl font-bold text-black mb-4">{category.name}</h3>
                <p className="text-gray-600 mb-6">{category.description}</p>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-800">Requisitos:</h4>
                    <p className="text-gray-600 text-sm">{category.requirements}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-800">Ganhos estimados:</h4>
                    <p className="text-green-600 font-bold text-lg">{category.earnings}</p>
                  </div>
                </div>
                
                <button className="w-full mt-6 bg-orange-500 text-white py-3 rounded-full font-semibold hover:bg-orange-600 transition-colors">
                  Escolher categoria
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-white py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-5xl font-bold text-black mb-6">
              Vantagens de ser <span className="bg-yellow-400 px-2 py-1 rounded">motorista parceiro</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-bold text-black mb-2">Horários flexíveis</h3>
              <p className="text-gray-600">Trabalhe quando quiser, no seu próprio ritmo</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-bold text-black mb-2">Ganhos atrativos</h3>
              <p className="text-gray-600">Receba até R$ 4.000 por mês dirigindo</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-bold text-black mb-2">Segurança total</h3>
              <p className="text-gray-600">Suporte 24h e proteção em todas as corridas</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Smartphone className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-bold text-black mb-2">App intuitivo</h3>
              <p className="text-gray-600">Interface simples e fácil de usar</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-black py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-16 text-center">
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
            Pronto para <span className="bg-yellow-400 text-black px-3 py-1 rounded">começar?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Cadastre-se agora e comece a ganhar dinheiro hoje mesmo como motorista parceiro 99Ride
          </p>
          <button className="bg-yellow-400 text-black px-8 py-4 rounded-full font-semibold text-lg inline-flex items-center gap-3 hover:bg-yellow-300 transition-colors group">
            <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform" />
            Cadastrar agora
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
