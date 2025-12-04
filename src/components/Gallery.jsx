function Gallery() {
  const images = [
    {
      id: 1,
      category: "Trabajo en Equipo",
      description: "Colaboración efectiva en entornos modernos",
      imageUrl: "https://plus.unsplash.com/premium_photo-1661963828727-823941143490?w=600&h=750&fit=crop&auto=format",
    },
    {
      id: 2,
      category: "Reuniones",
      description: "Sesiones de trabajo colaborativas",
      imageUrl: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&h=800&fit=crop&auto=format",
    },
    {
      id: 3,
      category: "Liderazgo",
      description: "Dirigiendo equipos hacia el éxito",
      imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=700&fit=crop&auto=format",
    },
    {
      id: 4,
      category: "Planificación",
      description: "Estrategias y planeación detallada",
      imageUrl: "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=600&h=750&fit=crop&auto=format",
    },
    {
      id: 5,
      category: "Soporte",
      description: "Atención al cliente especializada",
      imageUrl: "https://images.unsplash.com/photo-1542751110-97427bbecf20?w=600&h=800&fit=crop&auto=format",
    },
    {
      id: 6,
      category: "Innovación",
      description: "Explorando nuevas tecnologías",
      imageUrl: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&h=700&fit=crop&auto=format",
    }
  ];

  return (
    <section className="py-4 bg-white md:py-10">
      <div className="container px-4 mx-auto max-w-7xl">

        {/* Header -*/}
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-2xl font-bold text-gray-900 md:text-3xl">
            Nuestro Trabajo en Acción
          </h2>
          <p className="max-w-2xl mx-auto text-base text-gray-600">
            Descubre cómo transformamos negocios con soluciones innovadoras
          </p>
        </div>

        {/* Masonry Grid  */}
        <div className="gap-5 space-y-5 columns-1 md:columns-2 lg:columns-3">
          {images.map((image) => (
            <div
              key={image.id}
              className="mb-5 break-inside-avoid"
            >
              <div className="relative overflow-hidden transition-all duration-500 shadow-md cursor-pointer rounded-xl group hover:shadow-xl">

                {/* Imagen */}
                <div className="overflow-hidden aspect-3/4 rounded-xl group">
                  <img
                    src={image.imageUrl}
                    alt={`${image.category} - ${image.description}`}
                    className="object-cover w-full h-full transition-transform duration-700 ease-out group-hover:scale-110"
                    loading="lazy"
                    decoding="async"
                  />
                </div>

                {/* Overlay - Más sutil */}
                <div className="absolute inset-0 flex items-end justify-start p-5 transition-all duration-500 opacity-0 bg-linear--to-t from-black/80 via-black/20 to-transparent group-hover:opacity-100">
                  <div className="transition-transform duration-500 delay-100 transform translate-y-8 group-hover:translate-y-0">
                    <h3 className="mb-1 text-lg font-bold text-white">
                      {image.category}
                    </h3>
                    <p className="mb-3 text-xs text-gray-200">
                      {image.description}
                    </p>
                    <button className="bg-white text-gray-900 hover:bg-gray-100 px-4 py-1.5 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg text-xs">
                      Ver Caso
                    </button>
                  </div>
                </div>

                {/* Badge - Más pequeño */}
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full">
                  <span className="text-xs font-semibold text-gray-800">
                    {image.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action - Más compacto */}
        <div className="mt-12 text-center">
          <div className="px-5 py-5 bg-linear-to-r from-blue-50 to-purple-50 rounded-xl">
            <div className="max-w-2xl mx-auto">
              <h3 className="mb-3 text-xl font-bold text-gray-900">
                ¿Listo para transformar tu negocio?
              </h3>
              <p className="mb-5 text-sm text-gray-600">
                Agenda una demostración personalizada y descubre cómo podemos ayudarte
              </p>
              <button className="bg-linear-to-r from-blue-600 to-purple-600 text-white px-6 py-2.5 rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg text-sm">
                Solicitar demo gratuita
              </button>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default Gallery;