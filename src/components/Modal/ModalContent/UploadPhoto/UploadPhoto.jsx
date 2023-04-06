import { useContext } from 'react';

import { contentTypes } from '../../modal.constants';
import { ModalStrategyContext } from '../../ModalStrategyContext';

export function UploadPhoto() {
  const { setStrategy } = useContext(ModalStrategyContext);

  return (
    <div>
      <p>UploadPhoto</p>
      <button onClick={() => setStrategy(contentTypes.FillTheForm)}>BTN</button>
    </div>
  )
}
