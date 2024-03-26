/**
 * @format
 */

import { fireEvent, render, waitFor } from '@testing-library/react-native'
import '@testing-library/jest-native/extend-expect';
import App from '../App';



describe('Initial screen test suit', () => {

  it('Should render  buttons correctly', () => {
    const {getByTestId, debug} = render(<App/>)
    const addButton = getByTestId('initial-screen-add-button-test-id')
    const removeButton = getByTestId('initial-screen-remove-button-test-id')
    expect(addButton).toBeDefined()
    expect(removeButton).toBeDefined()
    debug()
  })

  it('Should render  list itens correctly', () => {
    const {getByTestId, getAllByTestId, debug} = render(<App/>)
    const customList = getByTestId('custom-list-test-id')
    expect(customList).toBeDefined()

    const screen = getByTestId('initial-screen-test-id')
    expect(screen).toBeDefined()

    let card = getAllByTestId('custom-list-card-item-test-id')
    expect(card.length).toBe(3)

    const addButton = getByTestId('initial-screen-add-button-test-id')
    fireEvent.press(addButton)

    card = getAllByTestId('custom-list-card-item-test-id')
    expect(card.length).toBe(4)

    debug()
  })



  it('Should render  list card correctly', async () => {
    const {getAllByTestId, getByTestId, debug} = render(<App/>)
    await waitFor(() => {
      const cards = getAllByTestId('custom-list-card-item-test-id');
       const itemNames = cards.map(item => item.props.children[0].props.children);
      
       //  Example how to get text name using Text element with unique test ID 
      // const itemNames = cards.map((card, index) => getByTestId(`custom-card-item-name-test-id-${index}`).props.children);
      
      expect(itemNames).toEqual(['Julio', 'Stark', 'Samuel']);
    });

    debug()
  })



  it('Should add new item to list when add button is pressed', async () => {
    const {getAllByTestId, getByTestId, debug} = render(<App/>)
    const addButton = getByTestId('initial-screen-add-button-test-id')

    await waitFor(() => {
      let cards = getAllByTestId('custom-list-card-item-test-id')
      let itemNames = cards.map(item => item.props.children[0].props.children)
      expect(itemNames).toEqual(['Julio', 'Stark', 'Samuel'])

      fireEvent.press(addButton)
      cards = getAllByTestId('custom-list-card-item-test-id')
      itemNames = cards.map(item => item.props.children[0].props.children)
      expect(itemNames).toEqual(['Julio', 'Stark', 'Samuel', 'New person added'])
    })

    debug()
  })

  it('Should remove last item from list when remove button is pressed', async() => {
    const {getAllByTestId, getByTestId, debug} = render(<App/>)
    const removeButton = getByTestId('initial-screen-remove-button-test-id')

    await waitFor(() => {
      let cards = getAllByTestId('custom-list-card-item-test-id')
      let itemNames = cards.map(item => item.props.children[0].props.children)
      expect(itemNames).toEqual(['Julio', 'Stark', 'Samuel'])

      fireEvent.press(removeButton)
      cards = getAllByTestId('custom-list-card-item-test-id')
      itemNames = cards.map(item => item.props.children[0].props.children)
      expect(itemNames).toEqual(['Julio', 'Stark'])
    })
    debug()
  })
})