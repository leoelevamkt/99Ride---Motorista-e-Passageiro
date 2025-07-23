import { ArrowUpRight, HelpCircle, MessageCircle, Phone, Mail, Search, ChevronRight } from 'lucide-react';
import Header from '@/react-app/components/Header';
import Footer from '@/react-app/components/Footer';

export default function Ajuda() {
  const faqCategories = [
    {
      title: "Para Passageiros",
      questions: [
        "Como solicitar uma corrida?",
        "Como alterar meu destino durante a viagem?",
        "Posso cancelar uma corrida?",
        "Como avaliar o motorista?",
        "Esqueci algo no carro, o que fazer?",
        "Como funciona o pagamento?"
      ]
    },
    {
      title: "Para Motoristas",
      questions: [
        "Como me cadastrar como motorista?",
        "Quais documentos preciso?",
        "Como recebo os pagamentos?",
        "Posso recusar corridas?",
        "Como funciona a avaliação?",
        "Como contatar o suporte?"
      ]
    },
    {
      title: "99Pay",
      questions: [
        "Como abrir minha conta 99Pay?",
        "Como solicitar o cartão de crédito?",
        "Como funciona o cashback?",
        "Como fazer um empréstimo?",
        "Como usar o 99Pix?",
        "Meu cartão foi bloqueado, o que fazer?"
      ]
    },
    {
      title: "99Food",
      questions: [
        "Como fazer um pedido?",
        "Quanto tempo demora a entrega?",
        "Como acompanhar meu pedido?",
        "Posso cancelar um pedido?",
        "Como usar cupons de desconto?",
        "Problema com meu pedido"
      ]
    }
  ];

  const contactOptions = [
    {
      icon: MessageCircle,
      title: "Chat no app",
      description: "Fale conosco pelo chat direto no aplicativo",
      action: "Abrir chat",
      availability: "24/7"
    },
    {
      icon: Phone,
      title: "Central de atendimento",
      description: "Ligue para nossa central de atendimento",
      action: "0800 99 99 99",
      availability: "24 horas"
    },
    {
      icon: Mail,
      title: "E-mail",
      description: "Envie sua dúvida por e-mail",
      action: "ajuda@99ride.com.br",
      availability: "Resposta em até 24h"
    }
  ];

  const popularTopics = [
    "Como solicitar corrida",
    "Problemas com pagamento", 
    "Cadastro de motorista",
    "Conta 99Pay",
    "Segurança nas viagens",
    "Problemas técnicos"
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-[72px] bg-gradient-to-br from-blue-600 to-purple-700 overflow-hidden">
        <div className="container mx-auto px-6 lg:px-16 py-16 lg:py-24">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              Como podemos <span className="bg-yellow-400 text-black px-3 py-1 rounded">ajudar</span> você?
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Encontre respostas para suas dúvidas ou entre em contato com nosso suporte
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input 
                  type="text"
                  placeholder="Digite sua dúvida aqui..."
                  className="w-full pl-12 pr-4 py-4 rounded-full text-lg border-none outline-none shadow-lg"
                />
                <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-yellow-400 text-black px-6 py-2 rounded-full font-semibold hover:bg-yellow-300 transition-colors">
                  Buscar
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Topics */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-black mb-4">
              Tópicos <span className="bg-yellow-400 px-2 py-1 rounded">populares</span>
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {popularTopics.map((topic, index) => (
              <button 
                key={index}
                className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full hover:bg-yellow-400 hover:text-black transition-colors text-sm"
              >
                {topic}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-black mb-6">
              Formas de <span className="bg-yellow-400 px-2 py-1 rounded">contato</span>
            </h2>
            <p className="text-xl text-gray-600">
              Escolha a melhor forma de entrar em contato conosco
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactOptions.map((option, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <option.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-black mb-4">{option.title}</h3>
                <p className="text-gray-600 mb-6">{option.description}</p>
                
                <div className="mb-4">
                  <div className="text-lg font-semibold text-blue-600">{option.action}</div>
                  <div className="text-sm text-gray-500">{option.availability}</div>
                </div>
                
                <button className="w-full bg-blue-600 text-white py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors">
                  Entrar em contato
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-black mb-6">
              Perguntas <span className="bg-yellow-400 px-2 py-1 rounded">frequentes</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {faqCategories.map((category, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-black mb-6">{category.title}</h3>
                
                <div className="space-y-4">
                  {category.questions.map((question, questionIndex) => (
                    <div 
                      key={questionIndex}
                      className="flex items-center justify-between p-4 bg-white rounded-xl cursor-pointer hover:shadow-md transition-shadow"
                    >
                      <span className="text-gray-700">{question}</span>
                      <ChevronRight className="w-5 h-5 text-gray-400" />
                    </div>
                  ))}
                </div>
                
                <button className="w-full mt-6 border-2 border-blue-600 text-blue-600 py-3 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition-colors">
                  Ver todas as perguntas
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Information */}
      <section className="bg-gradient-to-r from-gray-800 to-gray-900 py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Informações de <span className="bg-yellow-400 text-black px-3 py-1 rounded">segurança</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Sua segurança é nossa prioridade. Conheça nossas medidas de proteção.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <HelpCircle className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Central de Segurança</h3>
              <p className="text-gray-300 mb-4">Acesse informações sobre segurança e denúncias</p>
              <button className="text-yellow-400 font-semibold hover:text-yellow-300 transition-colors">
                Acessar central →
              </button>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Linha de Emergência</h3>
              <p className="text-gray-300 mb-4">Atendimento 24h para situações de emergência</p>
              <button className="text-yellow-400 font-semibold hover:text-yellow-300 transition-colors">
                0800 99 HELP →
              </button>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Denúncias</h3>
              <p className="text-gray-300 mb-4">Relate comportamentos inadequados de forma segura</p>
              <button className="text-yellow-400 font-semibold hover:text-yellow-300 transition-colors">
                Fazer denúncia →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-yellow-400 py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-16 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-black mb-6">
            Não encontrou o que <span className="bg-black text-yellow-400 px-3 py-1 rounded">procurava?</span>
          </h2>
          <p className="text-xl text-black mb-8 max-w-2xl mx-auto">
            Nossa equipe de suporte está sempre pronta para ajudar você
          </p>
          <button className="bg-black text-white px-8 py-4 rounded-full font-semibold text-lg inline-flex items-center gap-3 hover:bg-gray-800 transition-colors group">
            <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform" />
            Falar com suporte
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
