import { Shield, DollarSign, Clock, TrendingUp } from 'lucide-react';

export default function IncentivesSection() {
  const incentives = [
    {
      icon: DollarSign,
      title: "Mais certeza nos ganhos",
      description: "O valor que você vê na tela ao receber uma corrida agora é exatamente o que você vai receber ao final, sem variações."
    },
    {
      icon: Shield,
      title: "Proteção anticalote",
      description: "Para evitar prejuízos na sua rotina, a 99Ride paga a você o valor da corrida caso o passageiro não faça o pagamento. Reembolso sujeito a análise. Limitado a R$50,00."
    },
    {
      icon: Clock,
      title: "Taxa de cancelamento",
      description: "Receba 100% da taxa com o valor integral no saldo da sua carteira. A taxa de cancelamento é proporcional ao tempo e distância que você percorre."
    },
    {
      icon: TrendingUp,
      title: "Tarifa base dinâmica",
      description: "O valor da tarifa base poderá mudar de acordo com a distância entre o motorista e o ponto de embarque do passageiro. Ou seja, quanto maior a distância até o embarque, maior a tarifa base."
    }
  ];

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-black mb-6">
            Incentivos para <span className="bg-yellow-400 px-2 py-1 rounded">motoristas parceiros</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {incentives.map((incentive, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-yellow-400 rounded-xl flex items-center justify-center mb-6">
                <incentive.icon className="w-6 h-6 text-black" />
              </div>
              
              <h3 className="text-xl font-bold text-black mb-4">
                {incentive.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {incentive.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
