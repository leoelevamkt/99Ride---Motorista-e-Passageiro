import { ArrowUpRight, UtensilsCrossed, Bike, Store, Clock, Star, MapPin } from 'lucide-react';
import Header from '@/react-app/components/Header';
import Footer from '@/react-app/components/Footer';

export default function Food() {
  const categories = [
    { name: "Pizza", emoji: "🍕", restaurants: "245+" },
    { name: "Hamburger", emoji: "🍔", restaurants: "189+" },
    { name: "Japonesa", emoji: "🍱", restaurants: "156+" },
    { name: "Italiana", emoji: "🍝", restaurants: "134+" },
    { name: "Brasileira", emoji: "🍛", restaurants: "298+" },
    { name: "Doces", emoji: "🍰", restaurants: "87+" }
  ];

  const features = [
    {
      icon: Clock,
      title: "Entrega rápida",
      description: "Receba seu pedido em até 30 minutos"
    },
    {
      icon: Star,
      title: "Melhores restaurantes",
      description: "Curadoria especial dos melhores estabelecimentos"
    },
    {
      icon: MapPin,
      title: "Entrega em toda cidade",
      description: "Cobertura ampla para você receber onde estiver"
    },
    {
      icon: UtensilsCrossed,
      title: "Variedade de pratos",
      description: "Milhares de opções para todos os gostos"
    }
  ];

  const restaurantCards = [
    {
      name: "Burger King",
      rating: "4.8",
      time: "25-35 min",
      category: "Lanches",
      image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400&h=300&fit=crop",
      discount: "20% OFF"
    },
    {
      name: "McDonald's",
      rating: "4.6",
      time: "20-30 min", 
      category: "Lanches",
      image: "https://images.unsplash.com/photo-1553979459-d2229ba7433a?w=400&h=300&fit=crop",
      discount: "Frete Grátis"
    },
    {
      name: "Outback",
      rating: "4.9",
      time: "35-45 min",
      category: "Carnes",
      image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=300&fit=crop",
      discount: "15% OFF"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-[72px] bg-gradient-to-br from-red-500 to-orange-500 overflow-hidden">
        <div className="container mx-auto px-6 lg:px-16 py-16 lg:py-24">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="lg:w-1/2 text-center lg:text-left">
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                Peça sua <span className="bg-yellow-400 text-black px-3 py-1 rounded">comida favorita</span> aqui
              </h1>
              <p className="text-xl text-red-100 mb-8">
                Milhares de restaurantes na palma da sua mão. Entrega rápida e sem taxa de entrega.
              </p>
              <button className="bg-yellow-400 text-black px-8 py-4 rounded-full font-semibold text-lg inline-flex items-center gap-3 hover:bg-yellow-300 transition-colors group">
                <UtensilsCrossed className="w-5 h-5" />
                Fazer pedido
              </button>
            </div>

            <div className="lg:w-1/2 flex justify-center">
              <div className="relative">
                <div className="w-[280px] h-[400px] bg-gradient-to-br from-gray-800 to-gray-900 rounded-[3rem] p-6 shadow-2xl">
                  <div className="w-full h-full bg-white rounded-[2rem] overflow-hidden relative">
                    {/* 99Food app mockup */}
                    <div className="absolute top-0 left-0 right-0 h-20 bg-red-500 flex items-center justify-center">
                      <div className="text-lg font-bold text-white">99Food</div>
                    </div>
                    
                    <div className="mt-24 px-6">
                      <div className="mb-4">
                        <div className="text-sm text-gray-600 mb-2">Entregue em</div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-red-500" />
                          <span className="text-sm font-medium">Rua das Flores, 123</span>
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="bg-gray-50 p-3 rounded-xl">
                          <div className="flex items-center justify-between mb-2">
                            <span className="font-medium text-sm">Burger King</span>
                            <span className="text-yellow-500 text-xs">⭐ 4.8</span>
                          </div>
                          <div className="text-xs text-gray-600">25-35 min • Lanches</div>
                          <div className="text-xs text-red-500 font-medium">20% OFF</div>
                        </div>
                        
                        <div className="bg-gray-50 p-3 rounded-xl">
                          <div className="flex items-center justify-between mb-2">
                            <span className="font-medium text-sm">Pizza Hut</span>
                            <span className="text-yellow-500 text-xs">⭐ 4.7</span>
                          </div>
                          <div className="text-xs text-gray-600">30-40 min • Pizza</div>
                          <div className="text-xs text-green-500 font-medium">Frete Grátis</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="absolute bottom-6 left-6 right-6">
                      <button className="w-full bg-red-500 text-white py-3 rounded-full font-semibold text-sm">
                        Ver cardápio
                      </button>
                    </div>
                  </div>
                </div>
                
                {/* Floating elements */}
                <div className="absolute -top-4 -right-6 bg-white p-4 rounded-2xl shadow-lg">
                  <div className="text-sm text-gray-600">Tempo médio</div>
                  <div className="text-2xl font-bold text-red-500">28min</div>
                </div>
                
                <div className="absolute -bottom-4 -left-6 bg-white p-4 rounded-2xl shadow-lg">
                  <div className="text-sm text-gray-600">Avaliação</div>
                  <div className="text-2xl font-bold text-yellow-500">4.8★</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="bg-white py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-5xl font-bold text-black mb-6">
              Categorias <span className="bg-yellow-400 px-2 py-1 rounded">populares</span>
            </h2>
            <p className="text-xl text-gray-600">
              Encontre exatamente o que você está procurando
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((category, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-2xl hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer">
                <div className="text-4xl mb-3">{category.emoji}</div>
                <h3 className="font-bold text-black mb-1">{category.name}</h3>
                <p className="text-sm text-gray-600">{category.restaurants}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Restaurants */}
      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-5xl font-bold text-black mb-6">
              Restaurantes em <span className="bg-yellow-400 px-2 py-1 rounded">destaque</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {restaurantCards.map((restaurant, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
                <div className="relative">
                  <img 
                    src={restaurant.image}
                    alt={restaurant.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {restaurant.discount}
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-black">{restaurant.name}</h3>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="text-sm font-medium">{restaurant.rating}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                    <span>{restaurant.category}</span>
                    <span>{restaurant.time}</span>
                  </div>
                  
                  <button className="w-full bg-red-500 text-white py-3 rounded-full font-semibold hover:bg-red-600 transition-colors">
                    Ver cardápio
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-5xl font-bold text-black mb-6">
              Por que escolher o <span className="bg-yellow-400 px-2 py-1 rounded">99Food?</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-black mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner CTA */}
      <section className="bg-gradient-to-r from-orange-500 to-red-500 py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="lg:w-1/2 text-center lg:text-left">
              <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
                Seja parceiro <span className="bg-yellow-400 text-black px-3 py-1 rounded">99Food</span>
              </h2>
              <p className="text-xl text-orange-100 mb-8">
                Aumente suas vendas e alcance mais clientes cadastrando seu restaurante na nossa plataforma.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-yellow-400 text-black px-8 py-4 rounded-full font-semibold text-lg inline-flex items-center gap-3 hover:bg-yellow-300 transition-colors group">
                  <Store className="w-5 h-5" />
                  Cadastrar restaurante
                </button>
                <button className="bg-white text-red-500 px-8 py-4 rounded-full font-semibold text-lg inline-flex items-center gap-3 hover:bg-gray-100 transition-colors group">
                  <Bike className="w-5 h-5" />
                  Ser entregador
                </button>
              </div>
            </div>

            <div className="lg:w-1/2 flex justify-center">
              <div className="relative">
                <div className="w-[320px] h-[240px] bg-white bg-opacity-10 backdrop-blur-sm rounded-3xl border border-white border-opacity-20 p-8">
                  <div className="text-center h-full flex flex-col justify-center">
                    <div className="text-4xl mb-4">📊</div>
                    <div className="text-white text-2xl font-bold mb-2">+300%</div>
                    <div className="text-orange-100">Aumento médio nas vendas</div>
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
            Baixe o app e <span className="bg-yellow-400 text-black px-3 py-1 rounded">mate sua fome</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Milhares de restaurantes esperando por você. Peça agora e receba em casa!
          </p>
          <button className="bg-yellow-400 text-black px-8 py-4 rounded-full font-semibold text-lg inline-flex items-center gap-3 hover:bg-yellow-300 transition-colors group">
            <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform" />
            Baixar 99Food
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
