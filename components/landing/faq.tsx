import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Faqs = [
  {
    question: "How does Wallist work?",
    answer:
      "Simply add your tasks in the app and Wallist will automatically set them as part of your wallpaper. Every time you unlock your phone, your goals stay visible and impossible to ignore.",
  },
  {
    question: "Do I need internet to use Wallist?",
    answer:
      "No. Wallist works completely offline. Your tasks are stored locally on your device, so you can use it anytime without internet access.",
  },
  {
    question: "Can I customize my wallpaper?",
    answer:
      "Yes. You can either use your current wallpaper, choose one from your gallery, or let Wallist apply a clean background that keeps tasks readable.",
  },
  {
    question: "Does Wallist drain battery?",
    answer:
      "Not at all. Wallist updates your wallpaper only when you make sync your tasks, ensuring it has almost zero impact on battery life.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Absolutely. All your tasks are stored locally on your device. We don't collect or share your personal data.",
  },
  {
    question: "Can I sync my tasks across devices?",
    answer:
      "Currently, tasks are stored locally. However, a sync feature is planned for future updates so you can keep tasks consistent across devices.",
  },
  {
    question: "Is Wallist free?",
    answer:
      "Yes! Wallist is free to use with all core features. We’re planning optional premium features in the future for advanced customization.",
  },
];

const FAQ = () => {
  return (
    <section id="features" className="mx-auto max-w-5xl px-4 space-y-6">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-2xl font-semibold tracking-tight md:text-3xl text-foreground">
          Frequently Asked Questions
        </h2>
        <p className="mt-3 text-muted-foreground">
          Answers to common questions about WallList — so you can get started
          with clarity and confidence.
        </p>
      </div>

      <div>
        <Accordion type="single" collapsible className="w-full">
          {Faqs.map((f, i) => (
            <AccordionItem value={`item-${i}`} key={`faq_${i}`}>
              <AccordionTrigger className="text-lg px-4 cursor-pointer hover:bg-secondary">
                {f.question}
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance px-4 text-base w-[90%]">
                <p className="w-full text-wrap">{f.answer}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
