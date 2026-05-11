import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { faqs } from '../data/faq';

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq">
      <div className="section-shell">
        <div className="mx-auto max-w-3xl text-center">
          <p className="section-kicker">FAQ</p>
          <h2 className="section-title mx-auto">Najczęstsze pytania o CarSwap.</h2>
        </div>

        <div className="mx-auto mt-10 grid max-w-4xl gap-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <article key={faq.question} className="soft-card overflow-hidden">
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <h3 className="text-base font-black text-white">{faq.question}</h3>
                  <ChevronDown
                    className={`shrink-0 text-lime transition ${isOpen ? 'rotate-180' : ''}`}
                    size={20}
                    aria-hidden="true"
                  />
                </button>
                {isOpen && <p className="border-t border-white/10 px-5 pb-5 pt-4 text-sm leading-7 text-slate-300">{faq.answer}</p>}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
