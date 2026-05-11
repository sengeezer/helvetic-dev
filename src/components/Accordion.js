import PropTypes from 'prop-types';

import WorkAccordionItem from './AccordionItem';
import { Accordion as UiAccordion } from './ui/accordion';

const Accordion = ({ data }) => (
  <UiAccordion type="single" collapsible className="w-full overflow-hidden rounded-sm border border-border bg-card">
    {data.map((item) => (
      <WorkAccordionItem key={item.company} {...item} />
    ))}
  </UiAccordion>
);

Accordion.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Accordion;
