import { useContext } from 'react';

import { contentTypes } from '../../modal.constants';
import { ModalStrategyContext } from '../../ModalStrategyContext';

export function FillTheForm() {
  const { setStrategy } = useContext(ModalStrategyContext);

  return (
    <div key={2}>
      <p>FillTheForm</p>
      <button onClick={() => setStrategy(contentTypes.Discount)}>BTN</button>
    </div>
  );
}