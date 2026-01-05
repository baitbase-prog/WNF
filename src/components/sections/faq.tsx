import offer from '@/content/offer';
import { SectionShell } from './section-shell';
import { Accordion, AccordionItem } from '@/components/ui/accordion';

export function FaqSection() {
  const section = offer.sections.faq;
  return (
    <SectionShell
      id={section.id}
      eyebrow={section.eyebrow}
      title={section.title}
      description={section.description}
    >
      <Accordion>
        {offer.faq.map((item, idx) => (
          <AccordionItem key={item.question} value={`faq-${idx}`} trigger={item.question}>
            {item.answer}
          </AccordionItem>
        ))}
      </Accordion>
    </SectionShell>
  );
}
