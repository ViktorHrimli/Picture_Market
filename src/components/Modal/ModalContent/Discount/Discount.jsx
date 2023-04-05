import { useContext } from 'react';

import { contentTypes } from '../../modal.constants';
import { ModalStrategyContext } from '../../ModalStrategyContext';


export function Discount() {
    const { setStrategy } = useContext(ModalStrategyContext);
  
    return (
        <div>
            <p>Discount</p>
            <button onClick={() => setStrategy(contentTypes.AddYourReview)}>btn</button>
        </div>
    )
}
