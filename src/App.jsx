import React, { useState, useEffect } from 'react';
import './App.css';

// --- IMPORT LOCAL IMAGES HERE ---
// Make sure these filenames match exactly what is in your assets folder
import foodImg from './assets/food.jpg';
import food2Img from './assets/food2.jpg';
import shopInteriorImg from './assets/shopinterior.jpg';
import shopInterior2Img from './assets/shopinterrior2.jpg';
import tableImg from './assets/table.jpg';
import table2Img from './assets/table2.jpg';

const RestaurantWebsite = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [activeMenuCategory, setActiveMenuCategory] = useState('food');
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Hero image slideshow images
  const heroImages = [
    'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    'https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80'
  ];

  // Auto slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Menu items with Indian Rupees and food images
  const foodItems = [
    { id: 1, name: 'Margherita Pizza', description: 'Classic tomato sauce, mozzarella, fresh basil', price: '₹299', category: 'pizza', image: 'https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
    { id: 2, name: 'Pepperoni Supreme', description: 'Double pepperoni, mozzarella, tomato sauce', price: '₹399', category: 'pizza', image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
    { id: 3, name: 'BBQ Chicken Pizza', description: 'Grilled chicken, red onions, BBQ sauce', price: '₹449', category: 'pizza', image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
    { id: 4, name: 'Veggie Delight', description: 'Bell peppers, mushrooms, olives, onions', price: '₹349', category: 'pizza', image: 'https://images.unsplash.com/photo-1593246049226-ded77bf90326?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
    { id: 5, name: 'Butter Chicken', description: 'Tandoori chicken in rich creamy tomato gravy', price: '₹299', category: 'main course', image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
    { id: 6, name: 'Veg Biryani', description: 'Fragrant basmati rice with mixed vegetables', price: '₹249', category: 'main course', image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
  ];

  const drinksItems = [
    { id: 7, name: 'Fresh Lime Soda', description: 'Refreshing lime soda with mint', price: '₹99', category: 'beverages', image: 'https://images.unsplash.com/photo-1624517452488-04869289c4ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
    { id: 8, name: 'Mango Lassi', description: 'Sweet yogurt based mango drink', price: '₹149', category: 'beverages', image: 'https://images.unsplash.com/photo-1567721913486-6585f069b332?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
    { id: 9, name: 'Masala Chai', description: 'Spiced Indian tea with milk', price: '₹49', category: 'beverages', image: 'https://images.unsplash.com/photo-1567515004624-219c11d31f8e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
    { id: 10, name: 'Cold Coffee', description: 'Iced coffee with vanilla ice cream', price: '₹179', category: 'beverages', image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
  ];

  const dessertsItems = [
    { id: 11, name: 'Gulab Jamun', description: 'Sweet milk dumplings in sugar syrup', price: '₹129', category: 'desserts', image: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
    { id: 12, name: 'Chocolate Lava Cake', description: 'Warm chocolate cake with melting center', price: '₹199', category: 'desserts', image: 'https://images.unsplash.com/photo-1624353365286-3f8d62dadadf?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
    { id: 13, name: 'Rasmalai', description: 'Soft cheese patties in sweetened milk', price: '₹149', category: 'desserts', image: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
    { id: 14, name: 'Ice Cream Sundae', description: 'Vanilla ice cream with chocolate sauce', price: '₹179', category: 'desserts', image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
  ];

  const testimonials = [
    { id: 1, name: 'Sarah M.', comment: 'Best food in Malda! The flavors are perfectly balanced.', rating: 5 },
    { id: 2, name: 'Michael T.', comment: 'Great atmosphere and delicious food. Will definitely return!', rating: 5 },
    { id: 3, name: 'Jessica L.', comment: 'The Butter Chicken is amazing! Highly recommended.', rating: 4 },
  ];

  // Social media links
  const socialMedia = {
    instagram: 'https://instagram.com/gou_tam2711',
    whatsapp: 'https://wa.me/916294978815',
    facebook: 'https://facebook.com/Raastoree'
  };

  const phoneNumber = '6294978815';

  // Render menu items based on active category
  const renderMenuItems = () => {
    switch(activeMenuCategory) {
      case 'food':
        return foodItems;
      case 'drinks':
        return drinksItems;
      case 'desserts':
        return dessertsItems;
      default:
        return foodItems;
    }
  };

  // Get category title and color
  const getCategoryInfo = () => {
    switch(activeMenuCategory) {
      case 'food':
        return { title: 'Food Items', emoji: '🍕', bgColor: 'bg-gradient-to-br from-red-600 to-orange-500', btnColor: 'bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-700 hover:to-orange-600' };
      case 'drinks':
        return { title: 'Drinks & Beverages', emoji: '🥤', bgColor: 'bg-gradient-to-br from-blue-600 to-cyan-500', btnColor: 'bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600' };
      case 'desserts':
        return { title: 'Desserts & Sweets', emoji: '🍰', bgColor: 'bg-gradient-to-br from-yellow-600 to-pink-500', btnColor: 'bg-gradient-to-r from-yellow-600 to-pink-500 hover:from-yellow-700 hover:to-pink-600' };
      default:
        return { title: 'Food Items', emoji: '🍕', bgColor: 'bg-gradient-to-br from-red-600 to-orange-500', btnColor: 'bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-700 hover:to-orange-600' };
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50">
      {/* Header/Navigation */}
      <header className="bg-gradient-to-r from-red-700 to-red-800 text-white sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center">
                <span className="text-red-800 font-bold text-xl">🍴</span>
              </div>
              <h1 className="text-2xl font-bold text-white">Raastoree</h1>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8 items-center">
              {['home', 'menu', 'about', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    setActiveSection(item);
                    if (item === 'menu') setActiveMenuCategory('food');
                  }}
                  className={`capitalize font-medium hover:text-yellow-300 transition-colors ${
                    activeSection === item ? 'text-yellow-300 border-b-2 border-yellow-300' : 'text-white'
                  }`}
                >
                  {item}
                </button>
              ))}
              <a 
                href={`tel:${phoneNumber}`}
                className="bg-gradient-to-r from-yellow-500 to-orange-500 text-red-800 px-6 py-2 rounded-full font-bold hover:from-yellow-600 hover:to-orange-600 transition-all flex items-center space-x-2 shadow-lg"
              >
                <span>📞</span>
                <span>Order Now</span>
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-2xl text-white"
              onClick={() => setShowMobileMenu(!showMobileMenu)}
            >
              ☰
            </button>
          </div>

          {/* Mobile Navigation */}
          {showMobileMenu && (
            <div className="md:hidden mt-4 pb-4">
              <div className="flex flex-col space-y-4">
                {['home', 'menu', 'about', 'contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => {
                      setActiveSection(item);
                      setShowMobileMenu(false);
                      if (item === 'menu') setActiveMenuCategory('food');
                    }}
                    className={`capitalize font-medium hover:text-yellow-300 transition-colors text-left py-2 ${
                      activeSection === item ? 'text-yellow-300' : 'text-white'
                    }`}
                  >
                    {item}
                  </button>
                ))}
                <a 
                  href={`tel:${phoneNumber}`}
                  className="bg-gradient-to-r from-yellow-500 to-orange-500 text-red-800 px-6 py-2 rounded-full font-bold hover:from-yellow-600 hover:to-orange-600 transition-all w-full text-center flex items-center justify-center space-x-2 shadow-lg"
                >
                  <span>📞</span>
                  <span>Order Now</span>
                </a>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main>
        {/* Hero Section with Slideshow */}
        {activeSection === 'home' && (
          <>
            <section className="relative h-[600px] overflow-hidden">
              {/* Slideshow */}
              <div className="absolute inset-0">
                {heroImages.map((image, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                      index === currentSlide ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <div 
                      className="absolute inset-0 bg-cover bg-center"
                      style={{backgroundImage: `url(${image})`}}
                    ></div>
                    {/* REMOVED THE RED OVERLAY - only keeping the image */}
                  </div>
                ))}
              </div>

              {/* Slide Indicators */}
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
                {heroImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === currentSlide ? 'bg-yellow-400 w-8' : 'bg-white/70'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>

              <div className="container mx-auto px-4 h-full flex items-center relative z-10">
                <div className="text-white max-w-2xl">
                  <h2 className="text-5xl md:text-6xl font-bold mb-6">Flavors that Feel Like Home</h2>
                  <p className="text-xl mb-8">Authentic multi-cuisine restaurant serving delicious food with love in Malda</p>
                  <div className="flex flex-wrap gap-4">
                    <button 
                      onClick={() => setActiveSection('menu')}
                      className="bg-gradient-to-r from-yellow-500 to-orange-500 text-red-800 px-8 py-3 rounded-full font-bold text-lg hover:from-yellow-600 hover:to-orange-600 transition-all shadow-xl"
                    >
                      View Menu
                    </button>
                    <a 
                      href="https://maps.app.goo.gl/6PSU1JcQxqacbFtK9" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-transparent border-2 border-yellow-400 text-yellow-400 px-8 py-3 rounded-full font-bold text-lg hover:bg-yellow-400/20 transition-colors shadow-lg"
                    >
                      📍 Visit Us
                    </a>
                    <a 
                      href={`tel:${phoneNumber}`}
                      className="bg-gradient-to-r from-green-600 to-emerald-500 text-white px-8 py-3 rounded-full font-bold text-lg hover:from-green-700 hover:to-emerald-600 transition-colors flex items-center space-x-2 shadow-xl"
                    >
                      <span>📞</span>
                      <span>Call: {phoneNumber}</span>
                    </a>
                  </div>
                </div>
              </div>
            </section>

            {/* Additional Home Content Below Hero */}
            <section className="py-16 bg-gradient-to-b from-amber-100 to-orange-100">
              <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center text-red-800 mb-12">Experience Raastoree</h2>
                
                <div className="grid md:grid-cols-3 gap-8 mb-12">
                  <div className="bg-gradient-to-b from-amber-50 to-orange-100 rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow border border-amber-200">
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={shopInteriorImg} // CHANGED: Use imported variable
                        alt="Restaurant Ambience"
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-red-800 mb-3">Cozy Ambience</h3>
                      <p className="text-amber-900">Experience dining in our beautifully lit, comfortable restaurant with a warm atmosphere.</p>
                    </div>
                  </div>

                  <div className="bg-gradient-to-b from-amber-50 to-orange-100 rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow border border-amber-200">
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={foodImg} // CHANGED: Use imported variable
                        alt="Delicious Food"
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-red-800 mb-3">Fresh Ingredients</h3>
                      <p className="text-amber-900">We use only the freshest ingredients to prepare every dish with perfection.</p>
                    </div>
                  </div>

                  <div className="bg-gradient-to-b from-amber-50 to-orange-100 rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow border border-amber-200">
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={table2Img} // CHANGED: Use imported variable
                        alt="Happy Customers"
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-red-800 mb-3">Happy Customers</h3>
                      <p className="text-amber-900">Join our family of satisfied customers who keep coming back for more.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-red-600 to-orange-500 p-8 rounded-2xl shadow-2xl">
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                      <h3 className="text-3xl font-bold text-white mb-4">Why Choose Raastoree?</h3>
                      <ul className="space-y-3">
                        <li className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                            <span className="text-red-600 font-bold">✓</span>
                          </div>
                          <span className="text-white">Authentic recipes passed through generations</span>
                        </li>
                        <li className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                            <span className="text-red-600 font-bold">✓</span>
                          </div>
                          <span className="text-white">Hygienic kitchen & fresh ingredients</span>
                        </li>
                        <li className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                            <span className="text-red-600 font-bold">✓</span>
                          </div>
                          <span className="text-white">Friendly staff & excellent service</span>
                        </li>
                        <li className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                            <span className="text-red-600 font-bold">✓</span>
                          </div>
                          <span className="text-white">Perfect for family dinners & celebrations</span>
                        </li>
                      </ul>
                    </div>
                    <div className="relative">
                      <img 
                        src={food2Img} // CHANGED: Use imported variable
                        alt="Special Dish"
                        className="rounded-2xl shadow-xl"
                      />
                      <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-yellow-400 to-orange-400 text-red-800 p-4 rounded-xl shadow-2xl">
                        <div className="text-2xl font-bold">Chef's Special</div>
                        <div className="text-sm font-medium">Available Today</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </>
        )}

        {/* Menu Section */}
        {activeSection === 'menu' && (
          <section className="py-16 bg-gradient-to-b from-amber-100 to-orange-100">
            <div className="container mx-auto px-4">
              <h2 className="text-4xl font-bold text-center text-red-800 mb-12">Our Menu</h2>
              
              {/* Menu Category Navigation */}
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                <button
                  onClick={() => setActiveMenuCategory('food')}
                  className={`px-8 py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-105 shadow-lg ${
                    activeMenuCategory === 'food' 
                      ? 'bg-gradient-to-r from-red-600 to-orange-500 text-white shadow-xl' 
                      : 'bg-gradient-to-b from-amber-50 to-orange-100 text-red-800 border border-amber-300 hover:shadow-xl'
                  }`}
                >
                  🍕 Food
                </button>
                <button
                  onClick={() => setActiveMenuCategory('drinks')}
                  className={`px-8 py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-105 shadow-lg ${
                    activeMenuCategory === 'drinks' 
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-xl' 
                      : 'bg-gradient-to-b from-blue-50 to-cyan-100 text-blue-800 border border-blue-300 hover:shadow-xl'
                  }`}
                >
                  🥤 Drinks
                </button>
                <button
                  onClick={() => setActiveMenuCategory('desserts')}
                  className={`px-8 py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-105 shadow-lg ${
                    activeMenuCategory === 'desserts' 
                      ? 'bg-gradient-to-r from-yellow-600 to-pink-500 text-white shadow-xl' 
                      : 'bg-gradient-to-b from-yellow-50 to-pink-100 text-yellow-800 border border-yellow-300 hover:shadow-xl'
                  }`}
                >
                  🍰 Desserts
                </button>
              </div>

              {/* Menu Items Display */}
              <div className="mb-16">
                <div className={`${getCategoryInfo().bgColor} text-white p-6 rounded-2xl mb-8 shadow-2xl`}>
                  <div className="flex items-center space-x-4">
                    <span className="text-4xl">{getCategoryInfo().emoji}</span>
                    <div>
                      <h3 className="text-3xl font-bold">{getCategoryInfo().title}</h3>
                      <p className="opacity-90">Freshly prepared with love and care</p>
                    </div>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {renderMenuItems().map((item) => (
                    <div key={item.id} className="bg-gradient-to-b from-amber-50 to-orange-100 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow group border border-amber-300">
                      <div className="relative h-48 overflow-hidden">
                        <div 
                          className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-300"
                          style={{backgroundImage: `url(${item.image})`}}
                        ></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-400 text-red-800 px-4 py-2 rounded-full font-bold shadow-lg">
                          {item.price}
                        </div>
                        <div className="absolute bottom-4 left-4">
                          <span className="bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium">
                            {item.category}
                          </span>
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-red-800 mb-3">{item.name}</h3>
                        <p className="text-amber-900 mb-4">{item.description}</p>
                        <button className={`w-full ${getCategoryInfo().btnColor} text-white py-3 rounded-xl font-bold transition-all shadow-lg flex items-center justify-center space-x-2`}>
                          <span>Add to Order</span>
                          <span>+</span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* About Section */}
        {activeSection === 'about' && (
          <section className="py-16 bg-gradient-to-b from-amber-100 to-orange-100">
            <div className="container mx-auto px-4">
              <div className="bg-gradient-to-r from-red-600 to-orange-500 text-white p-8 rounded-3xl shadow-2xl mb-12">
                <h2 className="text-4xl font-bold text-center mb-4">Our Story in Malda</h2>
                <p className="text-center text-xl opacity-90">Serving delicious food with love since 2010</p>
              </div>

              <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                <div>
                  <p className="text-amber-900 mb-6 text-lg leading-relaxed">
                    Since 2010, <span className="font-bold text-red-700">Raastoree</span> has been serving the Malda community with authentic multi-cuisine dishes made from family recipes passed down through generations.
                  </p>
                  <p className="text-amber-900 mb-8 text-lg leading-relaxed">
                    We believe in using only the finest ingredients, from our homemade preparations to fresh vegetables sourced locally. Every dish is crafted with love, attention to detail, and a commitment to quality that keeps our customers coming back.
                  </p>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center bg-gradient-to-b from-amber-50 to-orange-100 p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow border border-amber-300">
                      <div className="text-3xl font-bold text-red-700">13+</div>
                      <div className="text-amber-900">Years of Excellence</div>
                    </div>
                    <div className="text-center bg-gradient-to-b from-amber-50 to-orange-100 p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow border border-amber-300">
                      <div className="text-3xl font-bold text-red-700">1000+</div>
                      <div className="text-amber-900">Happy Customers</div>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-amber-300">
                    <img 
                      src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                      alt="Restaurant interior"
                      className="w-full h-96 object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-yellow-400 to-orange-400 p-8 rounded-2xl shadow-2xl">
                    <div className="text-4xl font-bold text-red-800">4.8⭐</div>
                    <div className="text-red-800 font-medium">Customer Rating</div>
                  </div>
                </div>
              </div>

              {/* Testimonials */}
              <div className="mt-12">
                <h3 className="text-3xl font-bold text-center text-red-800 mb-12">What Our Customers Say</h3>
                <div className="grid md:grid-cols-3 gap-8">
                  {testimonials.map((testimonial) => (
                    <div key={testimonial.id} className="bg-gradient-to-b from-amber-50 to-orange-100 p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow border border-amber-300">
                      <div className="flex items-center mb-4">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className={`text-xl ${i < testimonial.rating ? 'text-yellow-500' : 'text-amber-300'}`}>
                            ★
                          </span>
                        ))}
                      </div>
                      <p className="text-amber-900 mb-4 italic">"{testimonial.comment}"</p>
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-red-600 to-orange-500 rounded-full flex items-center justify-center">
                          <span className="text-white font-bold">{testimonial.name.charAt(0)}</span>
                        </div>
                        <div className="font-bold text-red-800">{testimonial.name}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Contact Section */}
        {activeSection === 'contact' && (
          <section className="py-16 bg-gradient-to-b from-amber-100 to-orange-100">
            <div className="container mx-auto px-4">
              <div className="bg-gradient-to-r from-red-600 to-orange-500 text-white p-8 rounded-3xl shadow-2xl mb-12 text-center">
                <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
                <p className="text-xl opacity-90">We'd love to hear from you!</p>
              </div>

              <div className="grid lg:grid-cols-2 gap-12">
                <div className="bg-gradient-to-b from-amber-50 to-orange-100 p-8 rounded-3xl shadow-2xl border border-amber-300">
                  <h3 className="text-2xl font-bold text-red-800 mb-6">Visit Our Restaurant</h3>
                  <div className="space-y-6 mb-8">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-orange-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                        <span className="text-white text-xl">📍</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-red-800">Address</h4>
                        <p className="text-amber-900">Manaskamana Rd, Malda</p>
                        <p className="text-amber-900">West Bengal 732101</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-orange-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                        <span className="text-white text-xl">📞</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-red-800">Phone</h4>
                        <a href={`tel:${phoneNumber}`} className="text-amber-900 hover:text-red-700 text-lg font-medium">
                          {phoneNumber}
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-orange-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                        <span className="text-white text-xl">🕒</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-red-800">Hours</h4>
                        <p className="text-amber-900">Mon-Sun: 11AM - 10PM</p>
                        <p className="text-amber-900 text-sm">Open all days</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Social Media Links */}
                  <div className="mb-8">
                    <h4 className="font-bold text-red-800 mb-4">Connect with us</h4>
                    <div className="flex space-x-4">
                      <a href={socialMedia.instagram} target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-xl">
                        <span className="text-white text-xl">📷</span>
                      </a>
                      <a href={socialMedia.whatsapp} target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-400 rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-xl">
                        <span className="text-white text-xl">💬</span>
                      </a>
                      <a href={socialMedia.facebook} target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-xl">
                        <span className="text-white text-xl">f</span>
                      </a>
                    </div>
                  </div>

                  <a 
                    href="https://maps.app.goo.gl/6PSU1JcQxqacbFtK9" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 bg-gradient-to-r from-red-600 to-orange-500 text-white px-8 py-3 rounded-xl font-bold hover:from-red-700 hover:to-orange-600 transition-all shadow-xl"
                  >
                    <span>📍 View on Google Maps</span>
                    <span>→</span>
                  </a>
                </div>

                <div className="bg-gradient-to-b from-amber-50 to-orange-100 p-8 rounded-3xl shadow-2xl border border-amber-300">
                  <h3 className="text-2xl font-bold text-red-800 mb-6">Send us a Message</h3>
                  <form className="space-y-6">
                    <div>
                      <label className="block text-red-800 mb-2 font-medium">Name</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-3 bg-amber-50 border border-amber-300 text-amber-900 rounded-xl focus:ring-2 focus:ring-red-600 focus:border-transparent focus:outline-none transition-all placeholder-amber-700"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-red-800 mb-2 font-medium">Phone Number</label>
                      <input 
                        type="tel" 
                        className="w-full px-4 py-3 bg-amber-50 border border-amber-300 text-amber-900 rounded-xl focus:ring-2 focus:ring-red-600 focus:border-transparent focus:outline-none transition-all placeholder-amber-700"
                        placeholder="Your phone number"
                      />
                    </div>
                    <div>
                      <label className="block text-red-800 mb-2 font-medium">Message</label>
                      <textarea 
                        rows="4"
                        className="w-full px-4 py-3 bg-amber-50 border border-amber-300 text-amber-900 rounded-xl focus:ring-2 focus:ring-red-600 focus:border-transparent focus:outline-none transition-all placeholder-amber-700"
                        placeholder="Your message..."
                      ></textarea>
                    </div>
                    <button 
                      type="submit"
                      className="w-full bg-gradient-to-r from-red-600 to-orange-500 text-white py-4 rounded-xl font-bold hover:from-red-700 hover:to-orange-600 transition-all shadow-xl"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </section>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-red-900 to-red-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center">
                  <span className="text-red-800 font-bold text-xl">🍴</span>
                </div>
                <h3 className="text-xl font-bold text-white">Raastoree</h3>
              </div>
              <p className="text-amber-200">Serving delicious food in Malda since 2010</p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4 text-amber-300">Quick Links</h4>
              <ul className="space-y-2">
                {['home', 'menu', 'about', 'contact'].map((item) => (
                  <li key={item}>
                    <button
                      onClick={() => setActiveSection(item)}
                      className="text-amber-200 hover:text-yellow-300 transition-colors capitalize"
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4 text-amber-300">Contact Info</h4>
              <p className="text-amber-200">Manaskamana Rd, Malda</p>
              <p className="text-amber-200">West Bengal 732101</p>
              <p className="text-amber-200 mt-2">
                <a href={`tel:${phoneNumber}`} className="hover:text-yellow-300">
                  📞 {phoneNumber}
                </a>
              </p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4 text-amber-300">Follow Us</h4>
              <div className="flex space-x-4 mb-6">
                <a 
                  href={socialMedia.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-lg"
                  aria-label="Instagram"
                >
                  <span className="text-white">📷</span>
                </a>
                <a 
                  href={socialMedia.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-400 rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-lg"
                  aria-label="WhatsApp"
                >
                  <span className="text-white">💬</span>
                </a>
                <a 
                  href={socialMedia.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-400 rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-lg"
                  aria-label="Facebook"
                >
                  <span className="text-white font-bold">f</span>
                </a>
              </div>
              <div>
                <a 
                  href={`tel:${phoneNumber}`}
                  className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-600 to-emerald-500 text-white px-6 py-2 rounded-lg font-bold hover:from-green-700 hover:to-emerald-600 transition-all shadow-lg"
                >
                  <span>📞</span>
                  <span>Order Now</span>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-amber-800 mt-8 pt-8 text-center text-amber-200">
            <p>&copy; {new Date().getFullYear()} Raastoree, Malda. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default RestaurantWebsite;