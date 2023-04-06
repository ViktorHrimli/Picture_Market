import { useContext } from 'react';
import { contentTypes } from '../../modal.constants';
import { ModalStrategyContext } from '../../ModalStrategyContext';


export function AddYourReview() {
    const { setStrategy } = useContext(ModalStrategyContext);
    
    return (
        <div>
            <p>AddYourReview</p>
            <button onClick={() => setStrategy(contentTypes.ModalContentText)}>btn</button>
        </div>
    )
}
