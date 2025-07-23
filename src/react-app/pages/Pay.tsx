import { ArrowUpRight, CreditCard, DollarSign, Shield, Smartphone, TrendingUp, Zap } from 'lucide-react';
import Header from '@/react-app/components/Header';
import Footer from '@/react-app/components/Footer';

export default function Pay() {
  const features = [
    {
      icon: CreditCard,
      title: "Cartão de Crédito 99Pay",
      description: "Sem anuidade e com cashback em todas as compras",
      benefits: ["Cashback de até 3%", "Sem anuidade", "Programa de pontos", "Aprovação rápida"]
    },
    {
      icon: DollarSign,
      title: "Empréstimos",
      description: "Crédito rápido e seguro direto no app",
      benefits: ["Aprovação em minutos", "Juros competitivos", "Sem burocracia", "Valores até R$ 50.000"]
    },
    {
      icon: Zap,
      title: "99Pix",
      description: "Transferências instantâneas e gratuitas",
      benefits: ["Transferências grátis", "Instantâneo 24/7", "QR Code dinâmico", "Sem limite de valor"]
    }
  ];

  const benefits = [
    {
      icon: Shield,
      title: "Segurança total",
      description: "Tecnologia bancária com criptografia de ponta a ponta"
    },
    {
      icon: Smartphone,
      title: "Tudo no app",
      description: "Gerencie suas finanças em um só lugar, de forma simples"
    },
    {
      icon: TrendingUp,
      title: "Economia garantida",
      description: "Cashback em viagens e produtos financeiros sem taxas"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-[72px] bg-gradient-to-br from-green-500 to-blue-600 overflow-hidden">
        <div className="container mx-auto px-6 lg:px-16 py-16 lg:py-24">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="lg:w-1/2 text-center lg:text-left">
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                Suas <span className="bg-yellow-400 text-black px-3 py-1 rounded">finanças</span> na palma da mão
              </h1>
              <p className="text-xl text-green-100 mb-8">
                Conta digital gratuita, cartão sem anuidade, empréstimos e muito mais. Tudo isso no app da 99Ride.
              </p>
              <button className="bg-yellow-400 text-black px-8 py-4 rounded-full font-semibold text-lg inline-flex items-center gap-3 hover:bg-yellow-300 transition-colors group">
                <CreditCard className="w-5 h-5" />
                Abrir minha conta
              </button>
            </div>

            <div className="lg:w-1/2 flex justify-center">
              <div className="relative">
                <div className="w-[280px] h-[400px] bg-gradient-to-br from-gray-800 to-gray-900 rounded-[3rem] p-6 shadow-2xl">
                  <div className="w-full h-full bg-white rounded-[2rem] overflow-hidden relative">
                    {/* 99Pay app mockup */}
                    <div className="absolute top-0 left-0 right-0 h-20 bg-green-500 flex items-center justify-center">
                      <div className="text-lg font-bold text-white">99Pay</div>
                    </div>
                    
                    <div className="mt-24 px-6">
                      <div className="text-center mb-6">
                        <div className="text-3xl font-bold text-green-600">R$ 2.847,32</div>
                        <div className="text-gray-600">Saldo disponível</div>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="bg-gray-50 p-3 rounded-xl flex items-center justify-between">
                          <span className="text-sm font-medium">Cartão de Crédito</span>
                          <span className="text-green-600 font-bold">R$ 5.000</span>
                        </div>
                        <div className="bg-gray-50 p-3 rounded-xl flex items-center justify-between">
                          <span className="text-sm font-medium">Empréstimo disponível</span>
                          <span className="text-blue-600 font-bold">R$ 15.000</span>
                        </div>
                        <div className="bg-yellow-100 p-3 rounded-xl flex items-center justify-between">
                          <span className="text-sm font-medium">Cashback</span>
                          <span className="text-yellow-600 font-bold">R$ 127,50</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="absolute bottom-6 left-6 right-6">
                      <button className="w-full bg-green-500 text-white py-3 rounded-full font-semibold text-sm">
                        Ver extrato
                      </button>
                    </div>
                  </div>
                </div>
                
                {/* Floating elements */}
                <div className="absolute -top-4 -right-6 bg-white p-4 rounded-2xl shadow-lg">
                  <div className="text-sm text-gray-600">Cashback mensal</div>
                  <div className="text-2xl font-bold text-green-600">+R$ 89</div>
                </div>
                
                <div className="absolute -bottom-4 -left-6 bg-white p-4 rounded-2xl shadow-lg">
                  <div className="text-sm text-gray-600">Economia</div>
                  <div className="text-2xl font-bold text-blue-600">R$ 245</div>
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
              Produtos <span className="bg-yellow-400 px-2 py-1 rounded">99Pay</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Uma conta completa para todas as suas necessidades financeiras
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-black mb-4">{feature.title}</h3>
                <p className="text-gray-600 mb-6">{feature.description}</p>
                
                <ul className="space-y-3 mb-6">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
                
                <button className="w-full bg-green-500 text-white py-3 rounded-full font-semibold hover:bg-green-600 transition-colors">
                  Solicitar agora
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-5xl font-bold text-black mb-6">
              Por que escolher o <span className="bg-yellow-400 px-2 py-1 rounded">99Pay?</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-yellow-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-xl font-bold text-black mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to get started */}
      <section className="bg-white py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-5xl font-bold text-black mb-6">
              Como <span className="bg-yellow-400 px-2 py-1 rounded">começar</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-bold text-black mb-3">Baixe o app</h3>
              <p className="text-gray-600">Baixe o app da 99Ride na App Store ou Google Play</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-bold text-black mb-3">Faça seu cadastro</h3>
              <p className="text-gray-600">Informe seus dados e tire uma selfie para validação</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-bold text-black mb-3">Ative sua conta</h3>
              <p className="text-gray-600">Confirme seu e-mail e ative sua conta 99Pay</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">4</span>
              </div>
              <h3 className="text-xl font-bold text-black mb-3">Comece a usar</h3>
              <p className="text-gray-600">Solicite seu cartão e aproveite todos os benefícios</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-green-500 to-blue-600 py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-16 text-center">
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
            Abra sua conta <span className="bg-yellow-400 text-black px-3 py-1 rounded">99Pay</span> agora
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Conta digital gratuita, cartão sem anuidade e muito mais. Tudo isso sem sair de casa.
          </p>
          <button className="bg-yellow-400 text-black px-8 py-4 rounded-full font-semibold text-lg inline-flex items-center gap-3 hover:bg-yellow-300 transition-colors group">
            <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform" />
            Abrir conta grátis
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
