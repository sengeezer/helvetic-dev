import AccordionItem from './AccordionItem';

const Accordion = ({ data }) => {
  return (
    <div className="wrapper">
      <ul className="accordion-list">
        {data.map((data1, key) => {
          const key1 = key + Math.random() * 10;
          return (
            <li className="accordion-list__item" key={key1}>
              <AccordionItem {...data1} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Accordion;
