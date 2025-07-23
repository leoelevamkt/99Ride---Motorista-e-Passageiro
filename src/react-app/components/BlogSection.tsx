import { ArrowUpRight, Calendar, Tag } from 'lucide-react';
import LazyImage from './LazyImage';
import AnimatedSection from './AnimatedSection';

export default function BlogSection() {
  const posts = [
    {
      id: 1,
      title: "Pedágio São Paulo: veja tudo sobre o novo aumento em 2025",
      description: "Com um aumento de até R$ 3,30, as novas tarifas do pedágio São Paulo começaram a ser aplicadas desde 1 de julho. Entenda quanto e onde:",
      date: "22 Jul 2025",
      category: "Motorista",
      tag: "Multas e Legislação de Trânsito",
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=400&fit=crop&crop=center"
    },
    {
      id: 2,
      title: "Neoenergia segunda via: como emitir?",
      description: "Precisando da segunda via da sua conta de luz? Saiba como emitir um novo boleto da sua conta da Neoenergia de forma rápida e prática.",
      date: "21 Jul 2025",
      category: "99Pay",
      tag: "Minhas Finanças",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=400&fit=crop&crop=center"
    },
    {
      id: 3,
      title: "Volta às aulas: como planejar um bom orçamento familiar?",
      description: "A volta às aulas também é um assunto importante para entrar no orçamento familiar. Descubra como organizar suas finanças neste período.",
      date: "18 Jul 2025",
      category: "99Pay",
      tag: "Minhas Finanças",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=400&fit=crop&crop=center"
    },
    {
      id: 4,
      title: "Líquido de arrefecimento do motor: o que é e quando trocar",
      description: "O líquido de arrefecimento é um aditivo químico muito importante para o bom funcionamento do motor do carro. Entenda mais sobre ele e quando trocar",
      date: "16 Jul 2025",
      category: "Motorista",
      tag: "Manutenção de Veículos",
      image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&h=400&fit=crop&crop=center"
    }
  ];

  return (
    <AnimatedSection animation="fadeIn">
      <section className="bg-white py-16 lg:py-24">
      <div className="container mx-auto px-6 lg:px-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-black mb-8">
            Veja nossas últimas <span className="bg-yellow-400 px-2 py-1 rounded">postagens</span>
          </h2>
          
          <button className="bg-yellow-400 text-black px-8 py-4 rounded-full font-semibold text-lg inline-flex items-center gap-3 hover:bg-yellow-300 transition-colors group">
            <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform" />
            Acesse o blog
          </button>
        </div>

        {/* Border decoration */}
        <div className="border-t border-orange-500 mb-16"></div>

        {/* Blog posts grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {posts.map((post) => (
            <AnimatedSection
              key={post.id}
              animation="slideUp"
              delay={post.id * 100}
            >
              <article className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 group cursor-pointer">
                <div className="relative overflow-hidden">
                  <LazyImage 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-white bg-opacity-90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-sm font-semibold text-gray-800">{post.category}</span>
                  </div>
                </div>
              
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Calendar className="w-4 h-4" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-orange-500">
                      <Tag className="w-4 h-4" />
                      {post.tag}
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-bold text-black mb-3 leading-tight group-hover:text-orange-500 transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {post.description}
                  </p>
                  
                  <button className="text-orange-500 font-semibold text-sm hover:text-orange-600 transition-colors inline-flex items-center gap-1 group-hover:gap-2">
                    Ler mais 
                    <ArrowUpRight className="w-4 h-4 transition-all" />
                  </button>
                </div>
              </article>
            </AnimatedSection>
          ))}
        </div>

        {/* Bottom border decoration */}
        <div className="border-t border-orange-500 mt-16"></div>
      </div>
    </section>
    </AnimatedSection>
  );
}
