import React, { useState, useEffect } from 'react';
import { shoes } from './data/shoes';
import ShoeCard from './components/ShoeCard';
import Pagination from './components/Pagination';

export default function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentShoes = shoes.slice(indexOfFirstItem, indexOfLastItem);

  // Scroll to top of collection section when page changes
  useEffect(() => {
    const collectionSection = document.getElementById('collection');
    if (collectionSection && currentPage > 1) {
        collectionSection.scrollIntoView({ behavior: 'smooth' });
    }
  }, [currentPage]);

  return (
    <div className="font-sans text-leather-900 antialiased">
      <div className="grain-overlay"></div>
      
      {/* Navigation */}
      <nav className="fixed w-full z-40 nav-blur border-b border-leather-200/50 transition-all duration-300" id="navbar">
          <div className="max-w-7xl mx-auto px-6 py-4">
              <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-leather-800 rounded-full flex items-center justify-center text-cream font-serif text-xl italic">B</div>
                      <span className="font-serif text-2xl font-semibold tracking-wide">Bàtà</span>
                  </div>
                  
                  <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wider uppercase">
                      <a href="#craft" className="hover:text-leather-600 transition-colors relative group">
                          The Craft
                          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-leather-600 transition-all group-hover:w-full"></span>
                      </a>
                      <a href="#collection" className="hover:text-leather-600 transition-colors relative group">
                          Collection
                          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-leather-600 transition-all group-hover:w-full"></span>
                      </a>
                      <a href="#process" className="hover:text-leather-600 transition-colors relative group">
                          Process
                          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-leather-600 transition-all group-hover:w-full"></span>
                      </a>
                      <a href="#contact" className="px-6 py-2 bg-leather-800 text-cream rounded-full hover:bg-leather-700 transition-all hover:scale-105">
                          Commission
                      </a>
                  </div>
              </div>
          </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
          <div className="absolute inset-0 z-0">
              <div className="absolute inset-0 bg-gradient-to-br from-leather-100/50 via-cream to-leather-200/30"></div>
              <div className="absolute top-20 right-10 w-96 h-96 bg-leather-300/20 rounded-full blur-3xl"></div>
              <div className="absolute bottom-20 left-10 w-72 h-72 bg-leather-400/20 rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-leather-100/50 rounded-full border border-leather-200 text-sm font-medium text-leather-700">
                      <span className="w-2 h-2 bg-leather-600 rounded-full animate-pulse"></span>
                      Est. 1887 in Lagos
                  </div>
                  
                  <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-tight text-leather-900">
                      <span className="block overflow-hidden"><span className="char-reveal" style={{animationDelay: '0.1s'}}>Where</span></span>
                      <span className="block overflow-hidden"><span className="char-reveal italic text-leather-600" style={{animationDelay: '0.2s'}}>Tradition</span></span>
                      <span className="block overflow-hidden"><span className="char-reveal" style={{animationDelay: '0.3s'}}>Meets</span></span>
                      <span className="block overflow-hidden"><span className="char-reveal" style={{animationDelay: '0.4s'}}>Soul</span></span>
                  </h1>

                  <p className="text-lg md:text-xl text-leather-700 max-w-md leading-relaxed scroll-reveal active">
                      Handcrafted footwear made to measure. Each pair tells a story of patience, precision, and passion passed down through three generations.
                  </p>

                  <div className="flex items-center gap-8 pt-8 border-t border-leather-200 scroll-reveal active">
                      <div>
                          <div className="font-serif text-3xl font-bold text-leather-800">137</div>
                          <div className="text-sm text-leather-600">Years of Craft</div>
                      </div>
                      <div className="w-px h-12 bg-leather-300"></div>
                      <div>
                          <div className="font-serif text-3xl font-bold text-leather-800">2,400+</div>
                          <div className="text-sm text-leather-600">Custom Pairs</div>
                      </div>
                      <div className="w-px h-12 bg-leather-300"></div>
                      <div>
                          <div className="font-serif text-3xl font-bold text-leather-800">12</div>
                          <div className="text-sm text-leather-600">Weeks Per Pair</div>
                      </div>
                  </div>
              </div>

              <div className="relative">
                  <div className="relative z-10 shoe-float">
                      <div className="relative bg-gradient-to-br from-leather-200 to-leather-400 rounded-3xl p-8 shadow-2xl shadow-leather-900/20">
                          <div className="aspect-[4/5] bg-leather-800 rounded-2xl overflow-hidden relative">
                              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1614252369475-531eba835eb1?w=800&q=80')] bg-cover bg-center opacity-90 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700"></div>
                              <div className="absolute inset-0 bg-gradient-to-t from-leather-900/60 to-transparent"></div>
                              <div className="absolute bottom-6 left-6 right-6">
                                  <div className="text-cream font-serif text-2xl italic">The Oxford Classic</div>
                                  <div className="text-leather-200 text-sm mt-1">Full Grain Calf Leather</div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      {/* Craft Section */}
      <section id="craft" className="py-24 md:py-32 relative">
          <div className="max-w-7xl mx-auto px-6">
              <div className="grid md:grid-cols-2 gap-16 items-center">
                  <div className="relative scroll-reveal active">
                      <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
                          <img src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&q=80" alt="Shoemaker at work" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
                      </div>
                      <div className="absolute -bottom-6 -right-6 bg-cream p-6 rounded-xl shadow-xl border border-leather-200 max-w-xs">
                          <div className="font-serif text-xl italic text-leather-800 mb-2">"A shoe must walk with the ancestor's grace, never against the foot."</div>
                          <div className="text-sm text-leather-600">— Adebayo Bàtà, Founder</div>
                      </div>
                  </div>

                  <div className="space-y-6 scroll-reveal active">
                      <h2 className="font-serif text-4xl md:text-5xl text-leather-900 leading-tight">
                          The Art of <span className="italic text-leather-600">Bespoke</span> Footwear
                      </h2>
                      <p className="text-lg text-leather-700 leading-relaxed">
                          In our atelier, we don't manufacture shoes—we craft them with the spirit of our ancestors. Every pair begins with a conversation, a measuring tape, and a wooden last carved specifically for your feet. We source pristine leather from the historic tanneries of Kano and use indigenous Yoruba techniques passed down through generations.
                      </p>
                      
                      <div className="grid grid-cols-2 gap-6 pt-6">
                          <div className="space-y-2">
                              <h3 className="font-serif text-xl font-semibold">Hand Lasted</h3>
                              <p className="text-sm text-leather-600">Each shoe shaped by hand over a custom wooden form</p>
                          </div>
                          <div className="space-y-2">
                              <h3 className="font-serif text-xl font-semibold">Goodyear Welt</h3>
                              <p className="text-sm text-leather-600">Recraftable construction lasting decades</p>
                          </div>
                          <div className="space-y-2">
                              <h3 className="font-serif text-xl font-semibold">Premium Leathers</h3>
                              <p className="text-sm text-leather-600">Historic Kano leather, premium calf, and local exotic skins</p>
                          </div>
                          <div className="space-y-2">
                              <h3 className="font-serif text-xl font-semibold">Perfect Fit</h3>
                              <p className="text-sm text-leather-600">Multiple fittings ensure comfort from day one</p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      {/* Collection Section */}
      <section id="collection" className="py-24 bg-leather-50 min-h-screen">
          <div className="max-w-7xl mx-auto px-6">
              <div className="text-center mb-16 scroll-reveal active">
                  <span className="text-leather-600 font-medium tracking-widest uppercase text-sm">The Collection</span>
                  <h2 className="font-serif text-4xl md:text-5xl mt-4 text-leather-900">Signature Styles</h2>
                  <p className="mt-4 text-leather-700 max-w-2xl mx-auto">Each design can be customized with your choice of leather, sole, and detailing.</p>
              </div>

              {/* Mapped Shoes with Pagination */}
              <div className="grid md:grid-cols-3 gap-8">
                  {currentShoes.map((shoe, index) => (
                      <ShoeCard key={shoe.name + index} shoe={shoe} index={index} />
                  ))}
              </div>

              <Pagination 
                  totalItems={shoes.length} 
                  itemsPerPage={itemsPerPage} 
                  currentPage={currentPage} 
                  setCurrentPage={setCurrentPage} 
              />
          </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-24 md:py-32 relative overflow-hidden bg-leather-900">
          <div className="relative z-10 max-w-7xl mx-auto px-6">
              <div className="text-center mb-20 scroll-reveal active">
                  <span className="text-leather-300 font-medium tracking-widest uppercase text-sm">Our Process</span>
                  <h2 className="font-serif text-4xl md:text-5xl mt-4 text-cream">12 Weeks to Perfection</h2>
              </div>
              <div className="grid md:grid-cols-4 gap-8 text-cream">
                  <div className="scroll-reveal active">
                      <div className="w-16 h-16 bg-leather-700 rounded-full flex items-center justify-center text-2xl font-serif border-2 border-leather-500 mb-6">01</div>
                      <h3 className="font-serif text-2xl mb-3 text-cream">Consultation</h3>
                      <p className="text-leather-300 text-sm">We meet to understand your style and measure precisely.</p>
                  </div>
                  <div className="scroll-reveal active" style={{transitionDelay: '0.1s'}}>
                      <div className="w-16 h-16 bg-leather-700 rounded-full flex items-center justify-center text-2xl font-serif border-2 border-leather-500 mb-6">02</div>
                      <h3 className="font-serif text-2xl mb-3 text-cream">Last Making</h3>
                      <p className="text-leather-300 text-sm">A custom wooden last is carved to replicate your feet.</p>
                  </div>
                  <div className="scroll-reveal active" style={{transitionDelay: '0.2s'}}>
                      <div className="w-16 h-16 bg-leather-700 rounded-full flex items-center justify-center text-2xl font-serif border-2 border-leather-500 mb-6">03</div>
                      <h3 className="font-serif text-2xl mb-3 text-cream">Pattern & Cut</h3>
                      <p className="text-leather-300 text-sm">Leather is selected and components cut by hand.</p>
                  </div>
                  <div className="scroll-reveal active" style={{transitionDelay: '0.3s'}}>
                      <div className="w-16 h-16 bg-leather-700 rounded-full flex items-center justify-center text-2xl font-serif border-2 border-leather-500 mb-6">04</div>
                      <h3 className="font-serif text-2xl mb-3 text-cream">Fitting</h3>
                      <p className="text-leather-300 text-sm">A trial shoe is made for perfect adjustments.</p>
                  </div>
              </div>
          </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 md:py-32 bg-leather-100">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">
              <div className="scroll-reveal active">
                  <span className="text-leather-600 font-medium tracking-widest uppercase text-sm">Begin Your Commission</span>
                  <h2 className="font-serif text-4xl text-leather-900 my-4">Visit Our Atelier</h2>
                  <p className="text-lg text-leather-700 mb-8">We welcome appointments for measurements and consultations. Allow 90 minutes for your first visit—we prefer to understand your lifestyle, not just your shoe size.</p>
                  
                  <div className="space-y-6 mt-8">
                    <div>
                        <h3 className="font-serif text-xl text-leather-900">Address</h3>
                        <p className="text-leather-600 mt-1">14 Broad Street, Marina<br/>Lagos Island, Nigeria</p>
                    </div>
                    <div>
                        <h3 className="font-serif text-xl text-leather-900">Contact</h3>
                        <p className="text-leather-600 mt-1">+234 818 0402 086<br/>atelier@bàtà.ng</p>
                    </div>
                  </div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-xl scroll-reveal active">
                  <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                      <input type="text" placeholder="Full Name" className="w-full px-4 py-3 rounded-lg border border-leather-200 focus:border-leather-600 focus:ring-2 focus:ring-leather-100 outline-none transition-all" />
                      <input type="email" placeholder="Email Address" className="w-full px-4 py-3 rounded-lg border border-leather-200 focus:border-leather-600 focus:ring-2 focus:ring-leather-100 outline-none transition-all" />
                      <textarea placeholder="Message or Enquiry" rows="4" className="w-full px-4 py-3 rounded-lg border border-leather-200 focus:border-leather-600 focus:ring-2 focus:ring-leather-100 outline-none transition-all"></textarea>
                      <button className="w-full py-4 bg-leather-800 text-cream rounded-lg font-medium hover:bg-leather-700 transition-all hover:shadow-lg transform hover:-translate-y-0.5">Request Appointment</button>
                  </form>
              </div>
          </div>
      </section>

      {/* Footer */}
      <footer className="bg-leather-900 text-cream py-16">
          <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-cream rounded-full flex items-center justify-center text-leather-900 font-serif text-2xl italic mb-4">B</div>
              <span className="font-serif text-3xl font-semibold mb-4">bàtà</span>
              <p className="text-leather-300 max-w-md mb-8">Handcrafted footwear in Lagos since 1887. We create shoes that carry you through life with the elegance, comfort, and rich heritage of the Yoruba people.</p>
              <div className="border-t border-leather-800 pt-8 w-full text-sm text-leather-400">
                  &copy; {new Date().getFullYear()} bàtà Fine Footwear. All rights reserved.
              </div>
          </div>
      </footer>
    </div>
  );
}
