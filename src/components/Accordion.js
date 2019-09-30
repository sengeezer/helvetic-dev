import React from 'react';
import AccordionItem from './AccordionItem';

const Accordion = ({ data }) => {
  return (
    <div {...{ className: 'wrapper' }}>
      <ul {...{ className: 'accordion-list' }}>
        {data.map((data1, key) => {
          return (
            <li {...{ className: 'accordion-list__item', key }}>
              <AccordionItem {...data1} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Accordion;
