import { Disclosure, Transition } from '@headlessui/react';
import {
  MinusSmallIcon,
  PlusSmallIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from '@heroicons/react/24/outline';
import classNames from '@lib/classNames';
const faqs = [
  {
    question: 'Accordion item #1',
    answer: (
      <p>
        <span className="font-bold">
          {' '}
          This is the second item's accordion body.
        </span>{' '}
        It is hidden by default, until the collapse plugin adds the appropriate
        classes that we use to style each element. These classes control the
        overall appearance, as well as the showing and hiding via CSS
        transitions. You can modify any of this with custom CSS or overriding
        our default variables. It's also worth noting that just about any HTML
        can go within the{' '}
        <span className="text-[#d63384]">.accordion-body</span>, though the
        transition does limit overflow.
      </p>
    ),
  },
  {
    question: 'Accordion item #2',
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    question: 'Accordion item #3',
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
];

const Accordion = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-4xl divide-y divide-gray-900/10 border border-[#dee2e6] rounded">
          <dl className="  divide-y divide-gray-900/10">
            {faqs.map((faq, idx) => (
              <Disclosure as="div" key={faq.question}>
                {({ open }) => (
                  <>
                    <dt>
                      <Disclosure.Button
                        className={classNames(
                          'flex w-full items-start justify-between text-left  py-4 px-5',
                          idx == 0 ? 'rounded-t border-b border-[#dee2e6]' : '',
                          open
                            ? 'bg-[#e7f1ff] text-[#0c63e4]  focus-within:ring-4 focus-within:ring-[#86b7fe]/50'
                            : 'text-[#212529]'
                        )}
                      >
                        <span className="text-base  leading-7   ">
                          {faq.question}
                        </span>
                        <span className="ml-6 flex h-7 items-center">
                          <ChevronUpIcon
                            className={classNames(
                              'h-6 w-6 transform transition duration-300 ',
                              open ? '' : 'rotate-180'
                            )}
                            aria-hidden="true"
                          />
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Transition
                      className="transition-all duration-500 overflow-hidden"
                      enterFrom="transform max-h-0"
                      enterTo="transform max-h-[400px]"
                      leaveFrom="transform max-h-[400px]"
                      leaveTo="transform   max-h-0"
                    >
                      {' '}
                      <Disclosure.Panel as="dd" className="mt-2 pr-12">
                        <p className="text-base leading-7 text-gray-600 py-4 px-5">
                          {faq.answer}
                        </p>
                      </Disclosure.Panel>
                    </Transition>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
