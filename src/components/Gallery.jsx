import { useState, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight, FaTimes, FaUtensils, FaMountain, FaGlassWhiskey } from 'react-icons/fa';
import { IoRestaurant } from 'react-icons/io5';
import { MdNaturePeople } from 'react-icons/md';

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);
  const [animateIn, setAnimateIn] = useState(false);

  const filters = [
    { id: 'all', name: 'All', icon: <IoRestaurant /> },
    { id: 'food', name: 'Cuisine', icon: <FaUtensils /> },
    { id: 'interior', name: 'Interior', icon: <FaGlassWhiskey /> },
    { id: 'views', name: 'Mountain Views', icon: <FaMountain /> },
    { id: 'experiences', name: 'Experiences', icon: <MdNaturePeople /> }
  ];

  const galleryImages = [
    {
      id: 1,
      src: "/image1.webp",
      alt: "Mountain view from restaurant terrace",
      category: "views",
      title: "Himalayan Panorama",
      description: "Breathtaking view of the Himalayan range from our main terrace"
    },
    {
      id: 2,
      src: "/image2.webp",
      alt: "Chef's special dish",
      category: "food",
      title: "Cedar Plank Trout",
      description: "Locally caught trout, served with mountain herbs and pine smoke"
    },
    {
      id: 3,
      src: "/image3.webp",
      alt: "Restaurant main dining hall",
      category: "interior",
      title: "Main Dining Hall",
      description: "Our elegant dining hall with panoramic windows and mountain views"
    },
    {
      id: 4,
      src: "/image4.webp",
      alt: "Traditional Garhwali thali",
      category: "food",
      title: "Garhwali Thali",
      description: "A selection of traditional mountain delicacies served in brass utensils"
    },
    
  ];

  const filteredImages = activeFilter === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeFilter);

  const openLightbox = (image) => {
    setCurrentImage(image);
    setLightboxOpen(true);
    setTimeout(() => setAnimateIn(true), 50);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setAnimateIn(false);
    setTimeout(() => {
      setLightboxOpen(false);
      document.body.style.overflow = 'auto';
    }, 300);
  };

  const navigateImage = (direction) => {
    const currentIndex = filteredImages.findIndex(img => img.id === currentImage.id);
    let newIndex;
    
    if (direction === 'next') {
      newIndex = (currentIndex + 1) % filteredImages.length;
    } else {
      newIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    }
    
    setCurrentImage(filteredImages[newIndex]);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!lightboxOpen) return;
      
      switch (e.key) {
        case 'Escape':
          closeLightbox();
          break;
        case 'ArrowLeft':
          navigateImage('prev');
          break;
        case 'ArrowRight':
          navigateImage('next');
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen, currentImage]);

  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8" id="gallery">
      <div className="max-w-7xl mx-auto">
        {/* Gallery Header */}
        <div className="text-center mb-12">
          <h2 className="text-base font-semibold text-green-600 tracking-wide uppercase">Visual Journey</h2>
          <h3 className="mt-2 text-3xl leading-8 font-serif font-bold tracking-tight text-gray-900 sm:text-4xl">
            Our Gallery
          </h3>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Explore the beauty of Grand Vista Retreat through our lens
          </p>
        </div>

        {/* Gallery Filters */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-10">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`flex items-center px-4 py-2 rounded-full transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-green-600 text-white shadow-md'
                  : 'bg-white text-gray-700 hover:bg-green-50'
              }`}
            >
              <span className="mr-2">{filter.icon}</span>
              {filter.name}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image) => (
            <div 
              key={image.id} 
              className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
              onClick={() => openLightbox(image)}
            >
              <div className="aspect-w-4 aspect-h-3 bg-gray-200">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <h4 className="text-white font-bold text-lg">{image.title}</h4>
                <p className="text-gray-200 text-sm">{image.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredImages.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">No images found in this category.</p>
          </div>
        )}

        {/* Lightbox */}
        {lightboxOpen && currentImage && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4">
            <div 
              className={`max-w-5xl w-full transition-opacity duration-300 ${
                animateIn ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div className="relative">
                {/* Close button */}
                <button 
                  onClick={closeLightbox}
                  className="absolute -top-12 right-0 text-white hover:text-green-300 transition-colors"
                  aria-label="Close lightbox"
                >
                  <FaTimes size={24} />
                </button>
                
                {/* Image */}
                <div className="bg-white p-2 rounded-lg shadow-2xl">
                  <img 
                    src={currentImage.src} 
                    alt={currentImage.alt} 
                    className="w-full h-auto max-h-[70vh] object-contain rounded"
                  />
                  
                  {/* Caption */}
                  <div className="p-4 text-center">
                    <h4 className="text-xl font-bold text-gray-900">{currentImage.title}</h4>
                    <p className="text-gray-600 mt-1">{currentImage.description}</p>
                  </div>
                </div>
                
                {/* Navigation arrows */}
                <div className="absolute inset-y-0 left-0 flex items-center">
                  <button 
                    onClick={() => navigateImage('prev')}
                    className="bg-white bg-opacity-20 hover:bg-opacity-40 rounded-full p-2 backdrop-blur-sm transition-all transform -translate-x-1/2"
                    aria-label="Previous image"
                  >
                    <FaArrowLeft className="text-white" size={20} />
                  </button>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center">
                  <button 
                    onClick={() => navigateImage('next')}
                    className="bg-white bg-opacity-20 hover:bg-opacity-40 rounded-full p-2 backdrop-blur-sm transition-all transform translate-x-1/2"
                    aria-label="Next image"
                  >
                    <FaArrowRight className="text-white" size={20} />
                  </button>
                </div>
              </div>
              
              {/* Image counter */}
              <div className="text-center mt-4 text-white">
                {filteredImages.findIndex(img => img.id === currentImage.id) + 1} / {filteredImages.length}
              </div>
            </div>
          </div>
        )}

        {/* View all prompt */}
        {/* <div className="text-center mt-12">
          <p className="text-gray-500">
            Want to see more? Follow us on Instagram 
            <a href="#" className="text-green-600 hover:text-green-700 ml-1">@grandvistaretreat</a>
          </p>
        </div> */}
      </div>
    </div>
  );
}
