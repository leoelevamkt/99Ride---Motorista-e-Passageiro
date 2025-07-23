import { ArrowUpRight, Calendar, Tag, Search, TrendingUp, Users, BookOpen } from 'lucide-react';
import Header from '@/react-app/components/Header';
import Footer from '@/react-app/components/Footer';

export default function Conteudo() {
  const featuredPosts = [
    {
      id: 1,
      title: "Pedágio São Paulo: veja tudo sobre o novo aumento em 2025",
      description: "Com um aumento de até R$ 3,30, as novas tarifas do pedágio São Paulo começaram a ser aplicadas desde 1 de julho. Entenda quanto e onde",
      date: "22 Jul 2025",
      category: "Motorista",
      tag: "Multas e Legislação de Trânsito",
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=400&fit=crop&crop=center",
      featured: true
    },
    {
      id: 2,
      title: "Como economizar combustível: 10 dicas práticas para motoristas",
      description: "Descubra estratégias eficazes para reduzir o consumo de combustível e aumentar seus ganhos como motorista parceiro.",
      date: "21 Jul 2025",
      category: "Motorista",
      tag: "Economia",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=400&fit=crop&crop=center"
    },
    {
      id: 3,
      title: "99Pay: como o cartão sem anuidade pode aumentar sua renda",
      description: "Conheça todos os benefícios do cartão 99Pay e como o cashback pode gerar uma renda extra no final do mês.",
      date: "20 Jul 2025",
      category: "99Pay",
      tag: "Minhas Finanças",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=400&fit=crop&crop=center"
    }
  ];

  const recentPosts = [
    {
      id: 4,
      title: "Volta às aulas: como planejar um bom orçamento familiar?",
      description: "A volta às aulas também é um assunto importante para entrar no orçamento familiar. Descubra como organizar suas finanças neste período.",
      date: "18 Jul 2025",
      category: "99Pay",
      tag: "Minhas Finanças",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=400&fit=crop&crop=center"
    },
    {
      id: 5,
      title: "Líquido de arrefecimento do motor: o que é e quando trocar",
      description: "O líquido de arrefecimento é um aditivo químico muito importante para o bom funcionamento do motor do carro.",
      date: "16 Jul 2025",
      category: "Motorista",
      tag: "Manutenção de Veículos",
      image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&h=400&fit=crop&crop=center"
    },
    {
      id: 6,
      title: "Segurança no trânsito: equipamentos obrigatórios em 2025",
      description: "Confira a lista atualizada de equipamentos obrigatórios que todo veículo deve ter para circular em segurança.",
      date: "15 Jul 2025",
      category: "Motorista",
      tag: "Segurança",
      image: "https://images.unsplash.com/photo-1558618666-fbd92c0c2c84?w=800&h=400&fit=crop&crop=center"
    },
    {
      id: 7,
      title: "99Food: como aumentar as vendas do seu restaurante",
      description: "Estratégias comprovadas para restaurantes parceiros aumentarem suas vendas na plataforma 99Food.",
      date: "14 Jul 2025",
      category: "99Food",
      tag: "Negócios",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=400&fit=crop&crop=center"
    },
    {
      id: 8,
      title: "Documentação para motorista: o que você precisa saber",
      description: "Guia completo sobre toda a documentação necessária para se tornar um motorista parceiro 99Ride.",
      date: "13 Jul 2025",
      category: "Motorista",
      tag: "Documentação",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=400&fit=crop&crop=center"
    },
    {
      id: 9,
      title: "Tendências de mobilidade urbana para 2025",
      description: "Descubra as principais tendências que vão moldar o futuro da mobilidade urbana no Brasil e no mundo.",
      date: "12 Jul 2025",
      category: "Conteúdo",
      tag: "Futuro",
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=400&fit=crop&crop=center"
    }
  ];

  const categories = [
    { name: "Motorista", count: 42, color: "bg-yellow-400" },
    { name: "Passageiro", count: 18, color: "bg-blue-500" },
    { name: "99Pay", count: 25, color: "bg-green-500" },
    { name: "99Food", count: 15, color: "bg-red-500" },
    { name: "Empresas", count: 12, color: "bg-purple-500" },
    { name: "Segurança", count: 8, color: "bg-gray-700" }
  ];

  const stats = [
    { label: "Artigos publicados", value: "120+", icon: BookOpen },
    { label: "Leitores mensais", value: "50k+", icon: Users },
    { label: "Compartilhamentos", value: "2.5k+", icon: TrendingUp }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-[72px] bg-gradient-to-br from-purple-600 to-blue-700 overflow-hidden">
        <div className="container mx-auto px-6 lg:px-16 py-16 lg:py-24">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              Blog <span className="bg-yellow-400 text-black px-3 py-1 rounded">99Ride</span>
            </h1>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Conteúdos exclusivos sobre mobilidade, finanças, tecnologia e muito mais para motoristas e passageiros
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input 
                  type="text"
                  placeholder="Buscar artigos..."
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

      {/* Stats Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-yellow-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-black" />
                </div>
                <div className="text-3xl font-bold text-black mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-black mb-6">
              Artigo em <span className="bg-yellow-400 px-2 py-1 rounded">destaque</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src={featuredPosts[0].image}
                alt={featuredPosts[0].title}
                className="w-full h-[400px] object-cover rounded-2xl shadow-lg"
              />
            </div>
            
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Calendar className="w-4 h-4" />
                  {featuredPosts[0].date}
                </div>
                <div className="flex items-center gap-2 text-sm text-orange-500">
                  <Tag className="w-4 h-4" />
                  {featuredPosts[0].tag}
                </div>
              </div>
              
              <div className="bg-yellow-400 inline-block px-3 py-1 rounded-full text-sm font-semibold text-black mb-4">
                {featuredPosts[0].category}
              </div>
              
              <h3 className="text-2xl lg:text-3xl font-bold text-black mb-4 leading-tight">
                {featuredPosts[0].title}
              </h3>
              
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                {featuredPosts[0].description}
              </p>
              
              <button className="bg-black text-white px-8 py-4 rounded-full font-semibold text-lg inline-flex items-center gap-3 hover:bg-gray-800 transition-colors group">
                <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform" />
                Ler artigo completo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-black mb-6">
              Categorias <span className="bg-yellow-400 px-2 py-1 rounded">populares</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((category, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-2xl hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer">
                <div className={`w-12 h-12 ${category.color} rounded-xl mx-auto mb-3`}></div>
                <h3 className="font-bold text-black mb-1">{category.name}</h3>
                <p className="text-sm text-gray-600">{category.count} artigos</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Articles */}
      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-black mb-6">
              Artigos <span className="bg-yellow-400 px-2 py-1 rounded">recentes</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentPosts.map((post) => (
              <article 
                key={post.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
              >
                <div className="relative">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover"
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
                  
                  <h3 className="text-lg font-bold text-black mb-3 leading-tight">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {post.description}
                  </p>
                  
                  <button className="text-orange-500 font-semibold text-sm hover:text-orange-600 transition-colors">
                    Ler mais →
                  </button>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="border-2 border-black text-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-black hover:text-white transition-colors">
              Ver todos os artigos
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-gradient-to-r from-yellow-400 to-orange-400 py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-16 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-black mb-6">
            Assine nossa <span className="bg-black text-yellow-400 px-3 py-1 rounded">newsletter</span>
          </h2>
          <p className="text-xl text-black mb-8 max-w-2xl mx-auto">
            Receba os melhores conteúdos sobre mobilidade, finanças e tecnologia diretamente no seu e-mail
          </p>
          
          <div className="max-w-md mx-auto">
            <div className="flex gap-2">
              <input 
                type="email"
                placeholder="Seu melhor e-mail"
                className="flex-1 px-4 py-3 rounded-full border-none outline-none text-gray-700"
              />
              <button className="bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors">
                Assinar
              </button>
            </div>
            <p className="text-sm text-black mt-3 opacity-75">
              Sem spam. Cancele a qualquer momento.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
