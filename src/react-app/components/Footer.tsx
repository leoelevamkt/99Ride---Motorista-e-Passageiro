import { ArrowUpRight, Facebook, Linkedin, Instagram, Youtube, Twitter } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  const footerSections = [
    {
      title: "Categorias",
      links: [
        "Motorista",
        "Passageiro", 
        "Empresas",
        "99Pay",
        "99Pix",
        "99Food"
      ]
    },
    {
      title: "Soluções",
      links: [
        "Segurança",
        "Ajuda",
        "Benefícios",
        "Ganhos 99Ride",
        "Soluções para veículos",
        "Aluguel de carros elétricos"
      ]
    },
    {
      title: "Sobre",
      links: [
        "Quem Somos",
        "Newsroom",
        "Blog",
        "Cidades",
        "Trabalhe com a gente",
        "Para onde vamos",
        "Portal das autoridades",
        "Termos e condições"
      ]
    }
  ];

  const socialLinks = [
    { icon: Facebook, label: "Facebook", href: "#" },
    { icon: Linkedin, label: "LinkedIn", href: "#" },
    { icon: Instagram, label: "Instagram", href: "#" },
    { icon: Youtube, label: "YouTube", href: "#" },
    { icon: Twitter, label: "Twitter", href: "#" }
  ];

  return (
    <footer className="bg-yellow-400 pt-16 md:pt-20 relative">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Logo and CTA */}
          <div className="md:col-span-1">
            <div className="mb-8">
              <Logo className="w-20 h-16" />
            </div>
            
            {/* Download section */}
            <div className="mb-8">
              <p className="font-semibold text-black mb-4">Baixe o app</p>
              <div className="flex gap-3">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors cursor-pointer">
                  <div className="w-5 h-5 bg-black rounded-sm flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                </div>
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors cursor-pointer">
                  <div className="w-5 h-5 bg-green-500 rounded-sm flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social media */}
            <div className="mb-8">
              <p className="font-semibold text-black mb-4">Siga a 99Ride nas redes sociais</p>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <a 
                    key={index}
                    href={social.href}
                    className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon className="w-4 h-4 text-black" />
                  </a>
                ))}
              </div>
            </div>

            {/* CTA Button - Desktop */}
            <div className="hidden md:block">
              <button className="bg-black text-white px-6 py-3 rounded-full font-semibold inline-flex items-center gap-3 hover:bg-gray-800 transition-colors group">
                <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
                Quero ser motorista
              </button>
            </div>
          </div>

          {/* Footer links */}
          <div className="md:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
              {footerSections.map((section, index) => (
                <div key={index}>
                  <h3 className="font-bold text-black text-lg mb-4 border-b border-black pb-2">
                    {section.title}
                  </h3>
                  <ul className="space-y-3">
                    {section.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <a 
                          href="#"
                          className="text-black hover:text-gray-700 transition-colors text-sm lg:text-base border-b border-transparent hover:border-black"
                        >
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile CTA */}
          <div className="md:hidden col-span-full text-center pt-8">
            <button className="bg-black text-white px-8 py-4 rounded-full font-semibold inline-flex items-center gap-3 hover:bg-gray-800 transition-colors group">
              <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform" />
              Quero ser motorista
            </button>
          </div>
        </div>
      </div>

      {/* Bottom section */}
      <div className="bg-black border-t-4 border-yellow-500 py-6 mt-16">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <p className="text-white text-sm">© 2025 99Ride Tecnologia Ltda</p>
              <div className="flex items-center gap-2 text-white text-sm">
                <span>Brasil</span>
                <div className="w-4 h-3 bg-green-500 rounded-sm flex items-center justify-center">
                  <div className="w-2 h-1 bg-yellow-400"></div>
                </div>
              </div>
            </div>

            <a 
              href="#" 
              className="text-orange-500 font-semibold text-sm hover:text-orange-400 transition-colors"
            >
              DiDi Global
            </a>

            <div className="flex items-center gap-6">
              <a href="#" className="text-white text-sm hover:text-gray-300 transition-colors">
                Termos de uso
              </a>
              <a href="#" className="text-white text-sm hover:text-gray-300 transition-colors">
                Privacidade
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
