import React from 'react';

export default function ShoeCard({ shoe, index }) {
  const delay = ((index % 3) + 1) * 0.1;
  const formattedPrice = `₦${shoe.price.toLocaleString()}`;

  return (
    <div className="shoe-card group cursor-pointer scroll-reveal active" style={{ transitionDelay: `${delay}s` }}>
        <div className="aspect-[3/4] bg-leather-200 rounded-2xl overflow-hidden relative">
            <img src={shoe.img} alt={shoe.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
            <div className="shoe-card-content absolute bottom-0 left-0 right-0 p-6 text-cream z-10">
                <h3 className="font-serif text-2xl">{shoe.name}</h3>
                <p className="text-sm opacity-90 mb-3">From {formattedPrice}</p>
                <button className="w-full py-3 bg-cream text-leather-900 rounded-full font-medium hover:bg-leather-100 transition-colors">Craft This for Me</button>
            </div>
        </div>
        <div className="mt-4 px-2">
            <h3 className="font-serif text-xl text-leather-900">{shoe.name}</h3>
            <p className="text-sm text-leather-600 mt-1">{shoe.desc}</p>
        </div>
    </div>
  );
}
