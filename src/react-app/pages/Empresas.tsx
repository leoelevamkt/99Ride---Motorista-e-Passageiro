import { ArrowUpRight, Building2, Users, BarChart3, Shield, Clock, Calculator } from 'lucide-react';
import Header from '@/react-app/components/Header';
import Footer from '@/react-app/components/Footer';

export default function Empresas() {
  const solutions = [
    {
      icon: Users,
      title: "99Business",
      description: "Gestão completa de viagens corporativas com relatórios detalhados e controle de gastos",
      features: ["Central de aprovação", "Relatórios em tempo real", "Controle de orçamento", "Política personalizada"]
    },
    {
      icon: BarChart3,
      title: "99Analytics",
      description: "Dashboards e análises avançadas para otimizar os deslocamentos da sua empresa",
      features: ["Análise de dados", "Dashboards personalizados", "Relatórios automáticos", "Insights de economia"]
    },
    {
      icon: Shield,
      title: "99Corporate",
      description: "Soluções enterprise com segurança aprimorada e suporte dedicado",
      features: ["Segurança corporativa", "Suporte 24/7", "API dedicada", "Gerente de conta"]
    }
  ];

  const benefits = [
    {
      icon: Calculator,
      title: "Economia de até 30%",
      description: "Reduza custos com transporte corporativo usando nossa plataforma inteligente"
    },
    {
      icon: Clock,
      title: "Gestão de tempo",
      description: "Seus colaboradores focam no que importa enquanto cuidamos da mobilidade"
    },
    {
      icon: BarChart3,
      title: "Relatórios detalhados",
      description: "Controle total sobre gastos com transporte através de relatórios em tempo real"
    },
    {
      icon: Shield,
      title: "Segurança garantida",
      description: "Viagens monitoradas e motoristas verificados para total tranquilidade"
    }
  ];

  const companies = [
    { name: "Banco Santander", logo: "🏦" },
    { name: "Natura", logo: "🌿" },
    { name: "Magazine Luiza", logo: "🛒" },
    { name: "iFood", logo: "🍕" },
    { name: "Ambev", logo: "🍺" },
    { name: "JBS", logo: "🥩" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-[72px] bg-gradient-to-br from-blue-600 to-purple-700 overflow-hidden">
        <div className="container mx-auto px-6 lg:px-16 py-16 lg:py-24">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="lg:w-1/2 text-center lg:text-left">
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                Soluções de <span className="bg-yellow-400 text-black px-3 py-1 rounded">mobilidade</span> para empresas
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                Otimize os deslocamentos da sua empresa com tecnologia avançada, economia de custos e controle total.
              </p>
              <button className="bg-yellow-400 text-black px-8 py-4 rounded-full font-semibold text-lg inline-flex items-center gap-3 hover:bg-yellow-300 transition-colors group">
                <Building2 className="w-5 h-5" />
                Falar com especialista
              </button>
            </div>

            <div className="lg:w-1/2 flex justify-center">
              <div className="relative">
                <div className="w-[320px] h-[240px] lg:w-[480px] lg:h-[360px] bg-white bg-opacity-10 backdrop-blur-sm rounded-3xl border border-white border-opacity-20 p-8">
                  {/* Corporate dashboard mockup */}
                  <div className="h-full flex flex-col">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-white font-bold text-lg">Dashboard Corporativo</h3>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-white bg-opacity-20 p-4 rounded-xl">
                        <div className="text-yellow-400 text-2xl font-bold">R$ 45.2k</div>
                        <div className="text-blue-100 text-sm">Gastos este mês</div>
                      </div>
                      <div className="bg-white bg-opacity-20 p-4 rounded-xl">
                        <div className="text-green-400 text-2xl font-bold">1.2k</div>
                        <div className="text-blue-100 text-sm">Viagens realizadas</div>
                      </div>
                    </div>
                    
                    <div className="flex-1 bg-white bg-opacity-20 rounded-xl p-4">
                      <div className="text-blue-100 text-sm mb-2">Economia vs Táxi tradicional</div>
                      <div className="text-green-400 text-3xl font-bold">-28%</div>
                    </div>
                  </div>
                </div>
                
                {/* Floating cards */}
                <div className="absolute -top-4 -right-6 bg-white p-4 rounded-2xl shadow-lg">
                  <div className="text-sm text-gray-600">Colaboradores ativos</div>
                  <div className="text-2xl font-bold text-blue-600">247</div>
                </div>
                
                <div className="absolute -bottom-4 -left-6 bg-white p-4 rounded-2xl shadow-lg">
                  <div className="text-sm text-gray-600">Economia mensal</div>
                  <div className="text-2xl font-bold text-green-600">R$ 18.5k</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="bg-white py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-5xl font-bold text-black mb-6">
              Nossas <span className="bg-yellow-400 px-2 py-1 rounded">soluções</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Conheça as ferramentas que vão transformar a mobilidade da sua empresa
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-yellow-400 rounded-2xl flex items-center justify-center mb-6">
                  <solution.icon className="w-8 h-8 text-black" />
                </div>
                
                <h3 className="text-2xl font-bold text-black mb-4">{solution.title}</h3>
                <p className="text-gray-600 mb-6">{solution.description}</p>
                
                <ul className="space-y-3">
                  {solution.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className="w-full mt-6 border-2 border-yellow-400 text-black py-3 rounded-full font-semibold hover:bg-yellow-400 transition-colors">
                  Saiba mais
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
              Benefícios para sua <span className="bg-yellow-400 px-2 py-1 rounded">empresa</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-black mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Companies Section */}
      <section className="bg-white py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-5xl font-bold text-black mb-6">
              Empresas que <span className="bg-yellow-400 px-2 py-1 rounded">confiam</span> na 99Ride
            </h2>
            <p className="text-xl text-gray-600">
              Mais de 5.000 empresas já economizam com nossas soluções de mobilidade
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {companies.map((company, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-2xl hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-3">{company.logo}</div>
                <div className="text-sm font-medium text-gray-700">{company.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-yellow-400 to-orange-400 py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-16 text-center">
          <h2 className="text-3xl lg:text-5xl font-bold text-black mb-6">
            Pronto para <span className="bg-black text-yellow-400 px-3 py-1 rounded">transformar</span> sua empresa?
          </h2>
          <p className="text-xl text-black mb-8 max-w-2xl mx-auto">
            Fale com nossos especialistas e descubra como a 99Ride pode otimizar a mobilidade da sua empresa
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-black text-white px-8 py-4 rounded-full font-semibold text-lg inline-flex items-center gap-3 hover:bg-gray-800 transition-colors group">
              <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform" />
              Solicitar demonstração
            </button>
            <button className="border-2 border-black text-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-black hover:text-white transition-colors">
              Baixar material
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
