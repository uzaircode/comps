import Accordion from '../components/Accordion';

function AccordionPage() {
  const items = [
    {
      id: 1,
      label: 'Can we use React on a project?',
      content: 'You can use React on any project you want.',
    },
    {
      id: 2,
      label: 'Can we use Django on a project?',
      content: 'You can use Django on any project you want.',
    },
    {
      id: 3,
      label: 'Can we use SCSS on a project?',
      content: 'You can use SCSS on any project you want.',
    },
  ];
  return <Accordion items={items} />;
}

export default AccordionPage;
