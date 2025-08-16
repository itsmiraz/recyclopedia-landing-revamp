import { useState, useId, ReactNode } from "react";
import { ChevronDown } from "lucide-react";

const AccordionItem = ({
  title,
  children,
  defaultOpen = false,
}: {
  title: string;
  children: ReactNode;
  defaultOpen: boolean;
}) => {
  const [open, setOpen] = useState(defaultOpen);
  const contentId = useId();

  return (
    <div className="border-b px-4 border-gray-200">
      <button
        className="w-full flex items-center justify-between py-4 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600"
        aria-expanded={open}
        aria-controls={contentId}
        onClick={() => setOpen(!open)}
      >
        <span className="font-semibold text-gray-900">{title}</span>
        <ChevronDown
          className={`h-5 w-5 text-gray-500 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
          aria-hidden="true"
        />
      </button>

      <div
        id={contentId}
        role="region"
        className={`grid transition-all duration-300 ease-in-out ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="pb-4 text-gray-600 leading-relaxed">{children}</div>
        </div>
      </div>
    </div>
  );
};

function Accordion({
  items = [],
  defaultOpenIndex = -1,
}: {
  items: {
    content: ReactNode;
    title: string;
    children?: ReactNode;
    defaultOpen?: boolean;
  }[];
  defaultOpenIndex: number;
}) {
  return (
    <div className="divide-y divide-gray-200 rounded-2xl bg-white shadow-sm">
      {items.map((item, idx) => (
        <AccordionItem
          key={idx}
          title={item.title}
          defaultOpen={idx === defaultOpenIndex}
        >
          {item.content}
        </AccordionItem>
      ))}
    </div>
  );
}

const FAQSection = () => {
  const items: {
    content: ReactNode;
    title: string;
  }[] = [
    {
      title: "What is Recyclopedia?",
      content: (
        <p>
          Recyclopedia is a web tool that gives residents clear, local guidance
          on what to do with items—reuse, recycle, donate, compost, or safely
          dispose—based on your community’s programs and rules.
        </p>
      ),
    },
    {
      title: "How do you keep guidance accurate and up to date?",
      content: (
        <p>
          Administrators can edit content in real time. Guidance is maintained
          in partnership with municipalities, campuses, and local operators so
          residents always see current preparation steps, drop-off sites, and
          program details.
        </p>
      ),
    },
    {
      title: "Can we integrate it into our municipal or campus website?",
      content: (
        <p>
          Yes. Recyclopedia can be embedded on your site and fully branded to
          match, or hosted for you as a dedicated page with a custom link.
        </p>
      ),
    },
    {
      title: "Does it cover more than recycling?",
      content: (
        <p>
          Absolutely. It supports reuse, repair, refill, reduce, and take-back
          programs—covering your community’s full materials network, not just
          recycling.
        </p>
      ),
    },
    {
      title: "Is it accessible?",
      content: (
        <p>
          The experience is designed to meet WCAG guidelines. Accessibility is a
          core requirement so everyone in your community can find clear answers.
        </p>
      ),
    },
    {
      title: "What reporting is available?",
      content: (
        <p>
          Administrators can view search trends and content gaps to target
          education, improve diversion, and reduce confusion.
        </p>
      ),
    },
    {
      title: "How long does implementation take?",
      content: (
        <p>
          Most launches follow a simple path—kickoff, branding/integration, and
          content review—then go live. Timelines depend on branding and the
          number of local programs to include.
        </p>
      ),
    },
    {
      title: "What about pricing and support?",
      content: (
        <p>
          Pricing depends on community scope and configuration. Training and
          ongoing support are included. Contact our team for a tailored
          overview.
        </p>
      ),
    },
  ];

  return (
    <section id="faq" className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-3">
            Quick answers to how Recyclopedia works, how it’s implemented, and
            how it helps your community.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion items={items} defaultOpenIndex={0} />
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
