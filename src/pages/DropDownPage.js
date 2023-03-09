import Dropdown from '../components/Dropdown';
import { useState } from 'react';

function DropDownPage() {
  const [selected, setSelected] = useState(null);

  const handleSelect = (option) => {
    setSelected(option)
  }

  const options = [
    { label: 'Red', value: 'red' },
    { label: 'Green', value: 'green' },
    { label: 'Gray', value: 'gray' },
    { label: 'Pink', value: 'pink' },
  ]

  return (
    <div className='flex'>
      <Dropdown
        options={options}
        value={selected}
        onChange={handleSelect} />
    </div>
  );
}

export default DropDownPage;