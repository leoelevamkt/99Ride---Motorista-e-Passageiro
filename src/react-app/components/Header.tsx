import { useState } from 'react';
import { Menu, X, Search, Car, User, Building2, CreditCard, UtensilsCrossed, HelpCircle, BookOpen, ChevronDown } from 'lucide-react';
import Logo from './Logo';
import { useIntersectionObserver } from '@/react-app/hooks/useIntersectionObserver';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const { elementRef, hasIntersected } = useIntersectionObserver();

  const navItems = [
    { 
      name: 'Motorista', 
      icon: Car, 
      href: '/motorista',
      submenu: [
        'Como se tornar motorista',
        'Requisitos',
        'Categorias de veículos',
        'Calculadora de Ganhos',
        'Vantagens',
        'Não tem carro?',
        'Segurança',
        'Cidades'
      ]
    },
    { 
      name: 'Passageiro', 
      icon: User, 
      href: '/passageiro',
      submenu: ['Segurança']
    },
    { 
      name: 'Empresas', 
      icon: Building2, 
      href: '/empresas' 
    },
    { 
      name: '99Pay', 
      icon: CreditCard, 
      href: '/99pay',
      submenu: [
        'Empréstimos',
        'Benefícios',
        'Dúvidas',
        '99Pix',
        'Segurança'
      ]
    },
    { 
      name: '99Food', 
      icon: UtensilsCrossed, 
      href: '/99food',
      submenu: [
        'Faça seu pedido',
        'Entregador',
        'Restaurante',
        'Registre seu restaurante'
      ]
    },
    { 
      name: 'Ajuda', 
      icon: HelpCircle, 
      href: '/ajuda' 
    },
    { 
      name: 'Conteúdo', 
      icon: BookOpen, 
      href: '/blog',
      submenu: [
        'Blog',
        'Guias',
        'Quem somos',
        'Newsroom'
      ]
    }
  ];

  const handleSubmenuToggle = (itemName: string) => {
    setActiveSubmenu(activeSubmenu === itemName ? null : itemName);
  };

  return (
    <header 
      ref={elementRef}
      className={`fixed flex justify-between left-0 z-50 h-[72px] w-full px-6 lg:px-16 shadow-lg transition-all duration-300 ${
        hasIntersected ? 'bg-white/95 backdrop-blur-md' : 'bg-white'
      }`}
    >
      <div className="h-full w-full flex justify-between items-center">
        {/* Mobile Header */}
        <div className="flex items-center justify-between w-full lg:hidden">
          <Search className="w-6 h-6 text-gray-600" />
          <Logo />
          <Menu 
            className="w-6 h-6 text-gray-600 cursor-pointer" 
            onClick={() => setIsMenuOpen(true)}
          />
        </div>

        {/* Desktop Header */}
        <div className="hidden lg:flex items-center w-full">
          <Logo />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-2">
          {navItems.map((item) => (
            <div 
              key={item.name} 
              className="group relative"
              onMouseEnter={() => item.submenu && setActiveSubmenu(item.name)}
              onMouseLeave={() => setActiveSubmenu(null)}
            >
              <a 
                href={item.href}
                className="flex items-center gap-2 px-3 py-4 text-gray-800 hover:bg-gray-50 rounded-lg font-semibold text-base transition-all duration-200 hover:scale-105"
              >
                <item.icon className="w-5 h-5" />
                <span>{item.name}</span>
                {item.submenu && <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />}
              </a>
              
              {item.submenu && activeSubmenu === item.name && (
                <div className="absolute top-full left-0 min-w-[200px] bg-white rounded-2xl shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 transform translate-y-2 group-hover:translate-y-0">
                  <div className="py-4 px-6">
                    {item.submenu.map((subItem, index) => (
                      <a 
                        key={index}
                        href="#"
                        className="block py-2 text-sm text-gray-700 hover:text-orange-500 hover:bg-orange-50 px-2 rounded-lg transition-all duration-200"
                      >
                        {subItem}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
          
          <div className="flex items-center gap-4 ml-8">
            <button className="bg-orange-500 text-white px-6 py-3 rounded-full font-semibold hidden xl:flex items-center hover:bg-orange-600 transition-colors">
              Quero ser motorista
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <Search className="w-6 h-6 text-gray-600" />
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-50 lg:hidden">
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between p-6">
              <X 
                className="w-6 h-6 text-gray-600 cursor-pointer" 
                onClick={() => setIsMenuOpen(false)}
              />
              <Logo />
            </div>
            
            <nav className="flex-1 px-6">
              {navItems.map((item) => (
                <div key={item.name}>
                  <button
                    className="flex items-center justify-between w-full py-4 text-xl font-semibold text-gray-800 border-b border-gray-100"
                    onClick={() => item.submenu ? handleSubmenuToggle(item.name) : setIsMenuOpen(false)}
                  >
                    <div className="flex items-center gap-3">
                      <item.icon className="w-6 h-6" />
                      {item.name}
                    </div>
                    {item.submenu && (
                      <ChevronDown className={`w-5 h-5 transition-transform ${
                        activeSubmenu === item.name ? 'rotate-180' : ''
                      }`} />
                    )}
                  </button>
                  
                  {item.submenu && activeSubmenu === item.name && (
                    <div className="pl-9 pb-4 space-y-2">
                      {item.submenu.map((subItem, index) => (
                        <a
                          key={index}
                          href="#"
                          className="block py-2 text-gray-600 hover:text-orange-500 transition-colors"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {subItem}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
            
            <div className="p-6">
              <button className="w-full bg-black text-white py-4 rounded-full font-semibold text-lg mb-4">
                Quero ser motorista
              </button>
              <button className="w-full border-2 border-gray-300 text-gray-700 py-3 rounded-full font-semibold">
                Buscar
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

                  key={item.name}
                  href={item.href}
                  className="flex items-center gap-3 py-4 text-xl font-semibold text-gray-800 border-b border-gray-100"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <item.icon className="w-6 h-6" />
                  {item.name}
                </a>
              ))}
            </nav>
            
            <div className="p-6">
              <button className="w-full bg-black text-white py-4 rounded-full font-semibold text-lg">
                Quero ser motorista
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
