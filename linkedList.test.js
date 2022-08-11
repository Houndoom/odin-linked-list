import LinkedList from './linkedList.js';

let list;

describe('Empty tests', () => {
  beforeEach(() => {
    list = LinkedList();
  })
  
  test('Empty size', () => {
    expect(list.size()).toBe(0);
  })

  test('Output empty', () => {
    expect(list.toString()).toBe('null');
  })
})


describe('Non-empty tests', () => {
  beforeEach(() => {
    list = LinkedList();
    list.prepend(5);
    list.prepend(6);
    list.prepend(7);
  })

  test('Non-empty size', () => {
    expect(list.size()).toBe(3);
  })
  
  test('at', () => {
    expect(list.at(0)).toBe(7);
    expect(list.at(1)).toBe(6);
  })
  
  test('Head', () => {
    expect(list.head()).toBe(7);
  })

  test('Tail', () => {
    expect(list.tail()).toBe(5);
  })
  
  test('Append', () => {
    list.append(8);
    expect(list.head()).toBe(7);
    expect(list.tail()).toBe(8);
  })

  test('Pop', () => {
    list.pop();
    expect(list.tail()).toBe(6);
  })

  test('Contains', () => {
    expect(list.contains(6)).toBe(true);
    expect(list.contains(9)).toBe(false);
  })

  test('Find', () => {
    expect(list.find(6)).toBe(1);
    expect(list.find(9)).toBe(null);
  })

  test('ToString', () => {
    expect(list.toString()).toBe('( 7 ) -> ( 6 ) -> ( 5 ) -> null');
  })

  test('insertAt start', () => {
    list.insertAt(9, 0);
    expect(list.toString()).toBe('( 9 ) -> ( 7 ) -> ( 6 ) -> ( 5 ) -> null');
  })

  test('insertAt end', () => {
    list.insertAt(9, 3);
    expect(list.toString()).toBe('( 7 ) -> ( 6 ) -> ( 5 ) -> ( 9 ) -> null');
  })

  test('insertAt middle', () => {
    list.insertAt(9, 1);
    expect(list.toString()).toBe('( 7 ) -> ( 9 ) -> ( 6 ) -> ( 5 ) -> null');
  })

  test('removeAt start', () => {
    list.removeAt(0);
    expect(list.toString()).toBe('( 6 ) -> ( 5 ) -> null');
  })

  test('removeAt end', () => {
    list.removeAt(2);
    expect(list.toString()).toBe('( 7 ) -> ( 6 ) -> null');
  })

  test('removeAt middle', () => {
    list.removeAt(1);
    expect(list.toString()).toBe('( 7 ) -> ( 5 ) -> null');
  })

  test('insertAt out of range should not do anything', () => {
    list.insertAt(9, 5);
    expect(list.toString()).toBe('( 7 ) -> ( 6 ) -> ( 5 ) -> null');
  })

  test('removeAt out of range should not do anything', () => {
    list.removeAt(5);
    expect(list.toString()).toBe('( 7 ) -> ( 6 ) -> ( 5 ) -> null');
  })
})

