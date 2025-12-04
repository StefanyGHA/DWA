import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "¿Cómo puedo realizar un pedido?",
      answer:
        "Para realizar un pedido debes registrarte, agregar productos al carrito y completar el proceso de pago."
    },
    {
      question: "¿Cuánto tarda la entrega?",
      answer:
        "La entrega tarda entre 24 y 48 horas dependiendo de tu ubicación."
    },
    {
      question: "¿Puedo cancelar un pedido?",
      answer:
        "Sí, puedes cancelar tu pedido antes de que sea despachado."
    },
    {
      question: "¿Qué métodos de pago aceptan?",
      answer:
        "Aceptamos tarjetas de crédito, débito y transferencias bancarias."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-3xl p-6 mx-auto mt-10">
      <h2 className="mb-6 text-3xl font-bold text-center">
        Preguntas Frecuentes
      </h2>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="overflow-hidden border border-gray-300 rounded-lg"
          >
            {/* PREGUNTA */}
            <button
              onClick={() => toggleFAQ(index)}
              className="flex items-center justify-between w-full p-4 transition-all duration-300 bg-gray-100 hover:bg-gray-200"
            >
              <span className="font-semibold text-left">
                {faq.question}
              </span>

              <span className="ml-3">
                {openIndex === index ? <FaMinus /> : <FaPlus />}
              </span>
            </button>

            {/* RESPUESTA */}
            <div
              className={`transition-all duration-300 overflow-hidden ${
                openIndex === index ? "max-h-40 p-4" : "max-h-0 px-4"
              }`}
            >
              <p className="text-gray-700">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
