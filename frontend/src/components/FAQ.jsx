import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What will be the venue of the event?",
    answer:
      "The event will be hosted in offline mode within the premises of Bharati Vidyapeeth's College of Engineering.",
  },
  {
    question: "How would I know my registration has been confirmed?",
    answer:
      "You will receive the confirmation on your registered email from TEDxBVCOE's official email ID.",
  },
  {
    question:
      "What if my payment for the registration of the event(s) gets deducted from my account but did not receive any confirmation?",
    answer:
      "You can contact us through your registered email on TEDxBVCOE official email ID (bvcoetedx@gmail.com).",
  },
  {
    question: "I made a mistake buying my pass for the event(s). What do I do now?",
    answer: "Reach out to us on bvcoetedx@gmail.com.",
  },
  {
    question:
      "Can I cancel my registration for the events I enrolled for? If so, what is the process?",
    answer: "Reach out to us on bvcoetedx@gmail.com.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="faqs" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-header gradient-text mb-16 text-center">
          FREQUENTLY ASKED QUESTIONS
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="faq-item p-6 cursor-pointer bg-background/50 hover:bg-background/70 rounded-lg transition"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-lg sm:text-xl font-semibold text-foreground pr-4">
                  {faq.question}
                </h3>
                <ChevronDown
                  className={`w-5 h-5 text-primary flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </div>

              <div
                className={`overflow-hidden transition-all duration-500 ${
                  openIndex === index ? "max-h-[1000px] mt-4" : "max-h-0"
                }`}
              >
                <p
                  className={`text-muted-foreground transition-opacity duration-500 ${
                    openIndex === index ? "opacity-100" : "opacity-0"
                  }`}
                >
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
