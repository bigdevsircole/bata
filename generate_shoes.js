const fs = require('fs');

const shoes = [
    {"name": "The Oduduwa Brogue", "desc": "Intricate perforations inspired by royal lineage", "img": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80", "price": 950000},
    {"name": "The Sango Chukka", "desc": "Bold, thunderous presence in premium suede", "img": "https://images.unsplash.com/photo-1520639888713-7851133b1ed0?w=600&q=80", "price": 820000},
    {"name": "The Ooni Loafer", "desc": "Regal slip-on with hand-stitched detailing", "img": "https://images.unsplash.com/photo-1534260933201-acabec3fb617?w=600&q=80", "price": 780000},
    {"name": "The Balogun Monk", "desc": "Double strap elegance for the modern commander", "img": "https://images.unsplash.com/photo-1603487742131-4160ec999306?w=600&q=80", "price": 890000},
    {"name": "The Alaafin Oxford", "desc": "Supreme authority in polished black calfskin", "img": "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=600&q=80", "price": 920000},
    {"name": "The Eko Spectator", "desc": "Two-tone brilliance reflecting Lagos city life", "img": "https://images.unsplash.com/photo-1595341888016-a392ef81b7de?w=600&q=80", "price": 1050000},
    {"name": "The Ogun Boot", "desc": "Iron-willed durability meets refined aesthetics", "img": "https://images.unsplash.com/photo-1521093470119-a3acdc43374a?w=600&q=80", "price": 1150000},
    {"name": "The Oranmiyan Derby", "desc": "Open lacing with a foundation of strength", "img": "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?w=600&q=80", "price": 850000},
    {"name": "The Moremi Slipper", "desc": "Graceful and elegant velvet with gold embroidery", "img": "https://images.unsplash.com/photo-1560506840-058df36371dd?w=600&q=80", "price": 720000},
    {"name": "The Aare Wholecut", "desc": "Seamless perfection from a single piece of leather", "img": "https://images.unsplash.com/photo-1549439602-43ebca2327af?w=600&q=80", "price": 1250000},
    {"name": "The Yemoja Moccasin", "desc": "Fluid, flexible comfort inspired by the waves", "img": "https://images.unsplash.com/photo-1449505278894-297fdb3edbc1?w=600&q=80", "price": 760000},
    {"name": "The Osun Tassel", "desc": "Flowing decorative elements on rich brown leather", "img": "https://images.unsplash.com/photo-1581481615985-ba4775734a9b?w=600&q=80", "price": 810000},
    {"name": "The Oba Jodhpur", "desc": "Equestrian-inspired boot suitable for royalty", "img": "https://images.unsplash.com/photo-1582588676831-2915856b3777?w=600&q=80", "price": 1350000},
    {"name": "The Bashorun Blucher", "desc": "Sturdy profile designed for the boardroom", "img": "https://images.unsplash.com/photo-1515347619362-e9c564b1ea9f?w=600&q=80", "price": 880000},
    {"name": "The Agbekoya Driver", "desc": "Superior grip and comfort for weekend excursions", "img": "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=600&q=80", "price": 650000},
    {"name": "The Iroko Workboot", "desc": "Deep patinas mirroring the ancient forest", "img": "https://images.unsplash.com/photo-1542280756-74b2f55e73e1?w=600&q=80", "price": 1450000},
    {"name": "The Ogbomoso Sneaker", "desc": "Luxury meets casual in this hand-stitched runner", "img": "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=600&q=80", "price": 550000},
    {"name": "The Olumo Rock Oxford", "desc": "Pebble-grain leather offering unshakeable style", "img": "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=600&q=80", "price": 920000},
    {"name": "The Marina Split-Toe", "desc": "Nautical nods with meticulous hand-sewn aprons", "img": "https://images.unsplash.com/photo-1595341888016-a392ef81b7de?w=600&q=80", "price": 980000},
    {"name": "The Ibadan Wingtip", "desc": "Classic punch detailing on antiqued calf", "img": "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?w=600&q=80", "price": 870000},
    {"name": "The Oyo Balmoral", "desc": "Sleek ankle boot combining suede and calf", "img": "https://images.unsplash.com/photo-1533867617858-e7b97e060509?w=600&q=80", "price": 1100000},
    {"name": "The Ekiti Explorer", "desc": "Rugged yet refined for the mountainous terrains", "img": "https://images.unsplash.com/photo-1542280756-74b2f55e73e1?w=600&q=80", "price": 890000},
    {"name": "The Lagos Night Loafer", "desc": "Patent leather gleam for evening galas", "img": "https://images.unsplash.com/photo-1603487742131-4160ec999306?w=600&q=80", "price": 950000},
    {"name": "The Heritage Monk", "desc": "Single brass buckle reflecting historical trade", "img": "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&q=80", "price": 870000},
    {"name": "The Asiwaju Formal", "desc": "Leading the way with a sharp, elongated toe", "img": "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=600&q=80", "price": 1150000},
    {"name": "The Egba Classic", "desc": "A timeless silhouette preserved for decades", "img": "https://images.unsplash.com/photo-1515347619362-e9c564b1ea9f?w=600&q=80", "price": 790000},
    {"name": "The Ile-Ife Suede", "desc": "Softness mirroring the cradle of civilization", "img": "https://images.unsplash.com/photo-1560506840-058df36371dd?w=600&q=80", "price": 820000},
    {"name": "The Oduduwa Grand", "desc": "Exquisite ostrich leather limited edition", "img": "https://images.unsplash.com/photo-1620809310862-2ee7b2c589bd?w=600&q=80", "price": 2500000},
    {"name": "The Sango Storm", "desc": "Weather-resistant, formidable rubber-sole derby", "img": "https://images.unsplash.com/photo-1499013819532-e4ff41b00669?w=600&q=80", "price": 840000},
    {"name": "The Bàtà Signature", "desc": "The ultimate expression of our 137-year heritage", "img": "https://images.unsplash.com/photo-1582588676831-2915856b3777?w=600&q=80", "price": 3000000}
];

let html_output = '\n';
shoes.forEach((shoe, i) => {
    let delay = ((i % 3) + 1) * 0.1;
    let formatted_price = '₦' + shoe.price.toLocaleString();
    html_output += `                <!-- Shoe Card ${i+4} -->\n                <div class="shoe-card group cursor-pointer scroll-reveal" style="transition-delay: ${delay}s;">\n                    <div class="aspect-[3/4] bg-leather-200 rounded-2xl overflow-hidden relative">\n                        <img src="${shoe.img}" alt="${shoe.name}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700">\n                        <div class="shoe-card-content absolute bottom-0 left-0 right-0 p-6 text-cream z-10">\n                            <h3 class="font-serif text-2xl">${shoe.name}</h3>\n                            <p class="text-sm opacity-90 mb-3">From ${formatted_price}</p>\n                            <button class="w-full py-3 bg-cream text-leather-900 rounded-full font-medium hover:bg-leather-100 transition-colors">Configure</button>\n                        </div>\n                    </div>\n                    <div class="mt-4 px-2">\n                        <h3 class="font-serif text-xl text-leather-900">${shoe.name}</h3>\n                        <p class="text-sm text-leather-600 mt-1">${shoe.desc}</p>\n                    </div>\n                </div>\n`;
});

const content = fs.readFileSync('c:/Users/dell/Documents/CODINGS/jacob-feet/index.html', 'utf8');
const targetRegex = /            <\/div>\r?\n\r?\n            <div class="mt-16 text-center">/;
const replacement = '            </div>\n' + html_output + '\n            <div class="mt-16 text-center">';
const new_content = content.replace(targetRegex, replacement);
fs.writeFileSync('c:/Users/dell/Documents/CODINGS/jacob-feet/index.html', new_content, 'utf8');
console.log('Successfully injected 30 shoes into the catalogue!');
