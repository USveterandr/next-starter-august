import Link from "next/link";

export default function Home() {
  return (
    import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-x-hidden">
      {/* Mobile-First Navigation */}
      <nav className="glass-morphism fixed top-0 w-full z-50 border-b border-gray-200/20 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 lg:h-20">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-gold via-gold-medium to-gold-dark rounded-xl flex items-center justify-center shadow-luxury transform transition-transform hover:scale-105">
                <span className="text-white font-bold text-lg lg:text-xl">M</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl lg:text-3xl font-bold text-primary font-['Playfair_Display']">
                  Meridian
                </span>
                <span className="text-xs text-gray-500 hidden sm:block">Dominican Republic</span>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden lg:flex space-x-8">
              <Link href="/" className="text-gray-700 hover:text-gold transition-all duration-300 font-medium relative group">
                Inicio
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link href="/properties" className="text-gray-700 hover:text-gold transition-all duration-300 font-medium relative group">
                Propiedades
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link href="/search" className="text-gray-700 hover:text-gold transition-all duration-300 font-medium relative group">
                Buscar
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-gold transition-all duration-300 font-medium relative group">
                Acerca
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-gold transition-all duration-300 font-medium relative group">
                Contacto
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex items-center space-x-3">
              <Link href="/login" className="hidden sm:block text-gray-700 hover:text-gold transition-colors duration-300 font-medium">
                Iniciar Sesión
              </Link>
              <Link href="/signup" className="bg-gradient-to-r from-gold to-gold-medium text-white px-4 py-2 lg:px-6 lg:py-3 rounded-xl hover:shadow-luxury transition-all duration-300 transform hover:scale-105 font-medium text-sm lg:text-base">
                Registrarse
              </Link>
              
              {/* Mobile Menu Button */}
              <button className="lg:hidden p-2 text-gray-700 hover:text-gold transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Enhanced Mobile Design */}
      <section className="pt-20 lg:pt-32 pb-12 lg:pb-20 relative">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-gold/5 pointer-events-none"></div>
        <div className="absolute top-20 right-10 w-72 h-72 bg-gold/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl xl:text-8xl font-bold text-primary mb-6 lg:mb-8 font-['Playfair_Display'] animate-fade-in leading-tight">
              Descubre el Paraíso
              <span className="block text-gold bg-gradient-to-r from-gold to-gold-dark bg-clip-text text-transparent">
                en República Dominicana
              </span>
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 mb-8 lg:mb-12 max-w-4xl mx-auto leading-relaxed px-4">
              La plataforma de bienes raíces más exclusiva del Caribe. Encuentra tu hogar perfecto en las playas más hermosas del mundo.
            </p>
            
            {/* Advanced Search - Mobile Optimized */}
            <div className="glass-morphism max-w-6xl mx-auto p-4 sm:p-6 lg:p-8 rounded-2xl lg:rounded-3xl shadow-luxury mb-12 lg:mb-16">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
                <div className="space-y-2">
                  <label htmlFor="location" className="text-sm font-medium text-gray-700 block">Ubicación</label>
                  <select 
                    id="location"
                    className="w-full p-3 lg:p-4 rounded-xl border border-gray-200 bg-white/90 backdrop-blur-sm focus:ring-2 focus:ring-gold focus:border-transparent transition-all duration-300 shadow-sm hover:shadow-md text-gray-700"
                  >
                    <option>Santo Domingo</option>
                    <option>Punta Cana</option>
                    <option>Puerto Plata</option>
                    <option>Santiago</option>
                    <option>La Romana</option>
                    <option>Samaná</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label htmlFor="type" className="text-sm font-medium text-gray-700 block">Tipo</label>
                  <select 
                    id="type"
                    className="w-full p-3 lg:p-4 rounded-xl border border-gray-200 bg-white/90 backdrop-blur-sm focus:ring-2 focus:ring-gold focus:border-transparent transition-all duration-300 shadow-sm hover:shadow-md text-gray-700"
                  >
                    <option>Casa</option>
                    <option>Apartamento</option>
                    <option>Villa</option>
                    <option>Penthouse</option>
                    <option>Condominio</option>
                    <option>Terreno</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label htmlFor="price" className="text-sm font-medium text-gray-700 block">Precio</label>
                  <select 
                    id="price"
                    className="w-full p-3 lg:p-4 rounded-xl border border-gray-200 bg-white/90 backdrop-blur-sm focus:ring-2 focus:ring-gold focus:border-transparent transition-all duration-300 shadow-sm hover:shadow-md text-gray-700"
                  >
                    <option>$100K - $300K</option>
                    <option>$300K - $500K</option>
                    <option>$500K - $1M</option>
                    <option>$1M - $2M</option>
                    <option>$2M+</option>
                  </select>
                </div>
                <div className="flex items-end sm:col-span-2 lg:col-span-1">
                  <button className="w-full bg-gradient-to-r from-gold to-gold-medium text-white p-3 lg:p-4 rounded-xl hover:shadow-luxury transition-all duration-300 transform hover:scale-105 font-medium text-lg hover:from-gold-medium hover:to-gold-dark">
                    Buscar Propiedades
                  </button>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-4xl mx-auto">
              {[
                { number: "500+", label: "Propiedades" },
                { number: "98%", label: "Satisfacción" },
                { number: "15", label: "Ciudades" },
                { number: "24/7", label: "Soporte" }
              ].map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="text-2xl lg:text-4xl font-bold text-gold mb-2 group-hover:scale-110 transition-transform duration-300">
                    {stat.number}
                  </div>
                  <div className="text-sm lg:text-base text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties - Enhanced Mobile Grid */}
      <section className="py-12 lg:py-20 bg-gradient-to-b from-white to-gray-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-primary mb-4 lg:mb-6 font-['Playfair_Display']">
              Propiedades Destacadas
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Descubre nuestras propiedades más exclusivas en ubicaciones privilegiadas del Caribe
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              { id: 1, title: "Villa Paradiso", location: "Punta Cana", price: "$750K", rooms: 4, baths: 3, area: "350 m²", image: "luxury-villa" },
              { id: 2, title: "Penthouse Marina", location: "Santo Domingo", price: "$1.2M", rooms: 3, baths: 2, area: "280 m²", image: "penthouse" },
              { id: 3, title: "Casa Colonial", location: "Puerto Plata", price: "$450K", rooms: 5, baths: 4, area: "420 m²", image: "colonial" },
              { id: 4, title: "Apartamento Elite", location: "Santiago", price: "$320K", rooms: 2, baths: 2, area: "150 m²", image: "apartment" },
              { id: 5, title: "Villa Oceánica", location: "Samaná", price: "$890K", rooms: 4, baths: 3, area: "380 m²", image: "oceanview" },
              { id: 6, title: "Residencia Luxury", location: "La Romana", price: "$1.5M", rooms: 6, baths: 5, area: "550 m²", image: "luxury-home" }
            ].map((property) => (
              <div key={property.id} className="glass-morphism rounded-2xl lg:rounded-3xl overflow-hidden hover:shadow-luxury transition-all duration-500 transform hover:scale-105 animate-fade-in-up group">
                <div className="h-48 sm:h-56 lg:h-64 bg-gradient-to-br from-gold-light via-gold-medium to-gold relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-primary flex items-center space-x-1">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                    <span>Disponible</span>
                  </div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="text-sm font-medium opacity-90">{property.location}</div>
                  </div>
                </div>
                <div className="p-4 lg:p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg lg:text-xl font-bold text-primary group-hover:text-gold transition-colors">
                      {property.title}
                    </h3>
                    <span className="text-xl lg:text-2xl font-bold text-gold">{property.price}</span>
                  </div>
                  <p className="text-gray-600 mb-4 text-sm lg:text-base">{property.location}, República Dominicana</p>
                  <div className="flex items-center justify-between text-sm lg:text-base text-gray-500 mb-4">
                    <span className="flex items-center space-x-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                      </svg>
                      <span>{property.rooms} hab</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 4a1 1 0 011-1h12a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1V8z" clipRule="evenodd"></path>
                      </svg>
                      <span>{property.baths} baños</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-6a1 1 0 00-1-1H9a1 1 0 00-1 1v6a1 1 0 01-1 1H4a1 1 0 110-2V4z" clipRule="evenodd"></path>
                      </svg>
                      <span>{property.area}</span>
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <Link href={`/properties/${property.id}`} className="inline-flex items-center text-gold hover:text-gold-dark transition-colors duration-300 font-medium group">
                      Ver detalles 
                      <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                    <button className="p-2 text-gray-400 hover:text-red-500 transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12 lg:mt-16">
            <Link href="/properties" className="inline-flex items-center bg-gradient-to-r from-primary to-luxury-blue text-white px-8 py-4 rounded-xl hover:shadow-luxury transition-all duration-300 transform hover:scale-105 font-medium text-lg">
              Ver Todas las Propiedades
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section - Mobile Enhanced */}
      <section className="py-12 lg:py-20 bg-gradient-to-br from-luxury-navy via-luxury-blue to-primary relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.03"%3E%3Ccircle cx="30" cy="30" r="4"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-12 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-4 lg:mb-6 font-['Playfair_Display']">
              Servicios Premium
            </h2>
            <p className="text-lg lg:text-xl text-gold-light max-w-3xl mx-auto leading-relaxed">
              Ofrecemos servicios exclusivos para garantizar la mejor experiencia en bienes raíces del Caribe
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                icon: "👑",
                title: "Asesoría Personalizada",
                description: "Consultoría especializada con expertos locales para encontrar la propiedad perfecta según tu estilo de vida y presupuesto"
              },
              {
                icon: "📈",
                title: "Inversión Inteligente",
                description: "Análisis de mercado profundo y garantías para maximizar tu retorno de inversión en el mercado dominicano"
              },
              {
                icon: "🏡",
                title: "Gestión Integral",
                description: "Servicios completos de administración, mantenimiento y alquiler de propiedades con tecnología avanzada"
              },
              {
                icon: "🌴",
                title: "Experiencia Local",
                description: "Conocimiento profundo del mercado caribeño y conexiones exclusivas con desarrolladores premium"
              },
              {
                icon: "💎",
                title: "Propiedades Exclusivas",
                description: "Acceso a listados privados y propiedades de lujo no disponibles en otras plataformas"
              },
              {
                icon: "🔒",
                title: "Transacciones Seguras",
                description: "Proceso legal completo y seguro con abogados especializados en bienes raíces internacionales"
              }
            ].map((service, index) => (
              <div key={index} className="glass-morphism p-6 lg:p-8 rounded-2xl lg:rounded-3xl text-center hover:shadow-luxury transition-all duration-500 transform hover:scale-105 group">
                <div className="text-4xl lg:text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl lg:text-2xl font-bold text-white mb-4 lg:mb-6 font-['Playfair_Display'] group-hover:text-gold transition-colors">
                  {service.title}
                </h3>
                <p className="text-gold-light leading-relaxed text-sm lg:text-base">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer - Enhanced Mobile */}
      <footer className="bg-primary text-white py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            <div className="space-y-6 sm:col-span-2 lg:col-span-1">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-gold via-gold-medium to-gold-dark rounded-xl flex items-center justify-center shadow-luxury">
                  <span className="text-white font-bold text-xl">M</span>
                </div>
                <div>
                  <span className="text-2xl lg:text-3xl font-bold font-['Playfair_Display']">Meridian</span>
                  <div className="text-gold text-sm">Dominican Republic</div>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed">
                La plataforma de bienes raíces más confiable y exclusiva de República Dominicana. Tu puerta al paraíso caribeño.
              </p>
              <div className="flex space-x-4">
                <button className="w-10 h-10 bg-gray-700 hover:bg-gold rounded-lg flex items-center justify-center transition-colors">
                  <span className="text-sm font-bold">f</span>
                </button>
                <button className="w-10 h-10 bg-gray-700 hover:bg-gold rounded-lg flex items-center justify-center transition-colors">
                  <span className="text-sm font-bold">ig</span>
                </button>
                <button className="w-10 h-10 bg-gray-700 hover:bg-gold rounded-lg flex items-center justify-center transition-colors">
                  <span className="text-sm font-bold">tw</span>
                </button>
              </div>
            </div>
            
            <div className="space-y-6">
              <h4 className="text-lg lg:text-xl font-bold text-gold font-['Playfair_Display']">Enlaces Rápidos</h4>
              <div className="space-y-3">
                {["Propiedades", "Buscar", "Agentes", "Blog", "Ayuda"].map((link) => (
                  <Link key={link} href="#" className="block text-gray-300 hover:text-gold transition-colors duration-300 hover:translate-x-1 transform">
                    {link}
                  </Link>
                ))}
              </div>
            </div>
            
            <div className="space-y-6">
              <h4 className="text-lg lg:text-xl font-bold text-gold font-['Playfair_Display']">Contacto</h4>
              <div className="space-y-3 text-gray-300">
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Santo Domingo, RD</span>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                  </svg>
                  <span>+1 (809) 555-0123</span>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                  </svg>
                  <span>info@meridian-rd.com</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <h4 className="text-lg lg:text-xl font-bold text-gold font-['Playfair_Display']">Newsletter</h4>
              <p className="text-gray-300 text-sm">Recibe las mejores ofertas y novedades del mercado inmobiliario.</p>
              <div className="space-y-3">
                <input 
                  type="email" 
                  placeholder="Tu email"
                  className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:ring-2 focus:ring-gold focus:border-transparent transition-all"
                />
                <button className="w-full bg-gradient-to-r from-gold to-gold-medium text-white p-3 rounded-lg hover:shadow-luxury transition-all duration-300 transform hover:scale-105 font-medium">
                  Suscribirse
                </button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-12 lg:mt-16 pt-8 flex flex-col sm:flex-row items-center justify-between">
            <p className="text-gray-400 text-sm mb-4 sm:mb-0">
              © 2024 Meridian. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link href="#" className="text-gray-400 hover:text-gold transition-colors">Privacidad</Link>
              <Link href="#" className="text-gray-400 hover:text-gold transition-colors">Términos</Link>
              <Link href="#" className="text-gray-400 hover:text-gold transition-colors">Cookies</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
}
