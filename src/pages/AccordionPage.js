import Accordion from "../components/Accordion";

function AccordionPage() {

 const items = [
  {
    id: '0dggsgs',
    label: 'Can I use React on a proj?',
    content: 'You can use React'
  },
  {
    id: 'dsrgrg',
    label: 'Can I use JS on a proj?',
    content: 'You can use JS'
  },
  {
    id: 'dsgsf',
    label: 'Can I use CSS on a project?',
    content: 'You can use CSS'
  },
]

 return (
    <Accordion items={items}/>
 );
}

export default AccordionPage;
