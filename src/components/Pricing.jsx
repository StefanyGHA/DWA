function Pricing() {
  const plans = [
    {
      name: "Básico",
      price: "$29",
      period: "/mes",
      features: [
        "5 Usuarios",
        "50 GB Almacenamiento",
        "Soporte por Email",
        "Actualizaciones Mensuales"
      ],
      popular: false
    },
    {
      name: "Profesional",
      price: "$79",
      period: "/mes",
      features: [
        "20 Usuarios",
        "500 GB Almacenamiento",
        "Soporte 24/7",
        "Actualizaciones Semanales",
        "Analytics Avanzado",
        "API Access"
      ],
      popular: true
    },
    {
      name: "Empresarial",
      price: "$199",
      period: "/mes",
      features: [
        "Usuarios Ilimitados",
        "2 TB Almacenamiento",
        "Soporte Premium",
        "Actualizaciones Diarias",
        "Analytics + IA",
        "API Prioritario",
        "Manager Dedicado"
      ],
      popular: false
    },
    // INICIO: CUARTO PLAN AGREGADO 
    {
      name: "Startup",
      price: "$15",
      period: "/mes",
      features: [
        "3 Usuarios",
        "20 GB Almacenamiento",
        "Soporte por Email"
      ],
      popular: false,
    } // FIN: CUARTO PLAN AGREGADO
  ];

  return (
    <section className="py-16 text-white bg-gray-900 md:py-16">
      <div className="container px-4 mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-2xl font-bold md:text-3xl">
            Planes para cada necesidad
          </h2>
          <p className="max-w-2xl mx-auto text-sm text-gray-400">
            Elige el plan perfecto para tu equipo
          </p>
        </div>

        {/* Cards de Pricing */}
        <div className="grid max-w-5xl grid-cols-1 gap-6 mx-auto md:grid-cols-2 lg:grid-cols-4">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-6 flex flex-col transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                plan.popular
                  ? 'bg-linear-to-br from-primary-600 to-secondary-600 ring-2 ring-white/20 shadow-2xl'
                  : 'bg-gray-800 hover:bg-gray-700'
              }`}
            >
              {/* Badge Popular */}
              {plan.popular && (
                <div className="absolute transform -translate-x-1/2 -top-3 left-1/2">
                  <span className="px-3 py-1 text-xs font-bold text-gray-900 bg-yellow-400 rounded-full">
                    Más Popular
                  </span>
                </div>
              )}

              {/* Nombre del Plan */}
              <h3 className="mb-2 text-xl font-bold">
                {plan.name}
              </h3>

              {/* Precio */}
              <div className="mb-5">
                <span className="text-4xl font-bold">
                  {plan.price}
                </span>
                <span className="text-sm text-gray-400">
                  {plan.period}
                </span>
              </div>

              {/* Características - flex-grow empuja el botón abajo */}
              <ul className="mb-5 grow">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-1">
                    <span className="text-green-400 text-base shrink-0 mt-0.5">
                      ✓
                    </span>
                    <span className={`text-sm ${plan.popular ? 'text-white' : 'text-gray-300'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Botón - siempre al final */}
              <button className={`
                w-full py-3 rounded-lg font-semibold text-sm transition-all
                ${plan.popular
                  ? 'bg-white text-purple-600 hover:bg-gray-100'
                  : 'bg-blue-600 text-white hover:bg-blue-700'
                }
              `}>
                Elegir Plan
              </button>
            </div>
          ))}
        </div>

        {/* Nota de pie - CENTRADA */}
          <div className="py-4 mt-10 text-center md:py-4">
          <p className="max-w-xl mx-auto text-xs text-gray-400">
            Todos los planes incluyen 14 días de prueba gratis. Sin tarjeta de crédito requerida.
          </p>
        </div>

      </div>
    </section>
  );
}

export default Pricing;