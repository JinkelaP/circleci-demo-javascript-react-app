// import add from './helper1';
const add = require('./helper1');
const minus = require('./helper1');

test('adds 1 + 2 to equal 3', () => {
    expect(add(1, 3)).toBe(4);
  });

test('minus 2 - 1 to equal 1', ()=> {
    expect(minus(2, 1)).toBe(1);
})