import CheckBox from './Checkbox';
import { updateFilters } from '@/services/actions';

import './style.scss';

const availableSizes = ['XS', 'S', 'M', 'ML', 'L', 'XL', 'XXL'];

export default function Filter() {
  const selectedCheckboxes = new Set();

  const toggleCheckbox = (label) => {
    if (selectedCheckboxes.has(label)) {
      selectedCheckboxes.delete(label);
    } else {
      selectedCheckboxes.add(label);
    }
    // update store
    updateFilters([...selectedCheckboxes]);
  };

  return (
    <div className="filter">
      {/* <h4>尺码</h4> */}
      {availableSizes.map((l) => (
        <CheckBox key={l} label={l} onChange={toggleCheckbox} />
      ))}
    </div>
  );
}
