import { fireEvent, render } from '@testing-library/react-native'
import '@testing-library/jest-native/extend-expect';
import { CustomList } from '../componentes/customList/CustomList';

describe('CustomList test suit', () =>{
    const listData = [
        {        
            name: 'Julio',
            age: 27
        },
        {        
            name: 'Stark',
            age: 42
        },
        {        
            name: 'Samuel',
            age: 32
        },
    ] 

    it('Should render component correctly', () =>{
        const {getByTestId, debug} = render(<CustomList data={listData}/>)
        const component = getByTestId('custom-list-test-id')
        expect(component).toBeDefined()
        debug()
    })


})