import { useDispatch } from 'react-redux';
import { AnyAction } from 'redux';


type ActionFunction<P> = (value: P) => AnyAction;

export const useAction = <P>(
    actionFunction: ActionFunction<P>,
): (value: P) => void => {
    const dispatch = useDispatch();

    return (value): void => { dispatch(actionFunction(value)); };
};
