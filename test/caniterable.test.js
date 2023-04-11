import Character from '../src/js/character';
import Team from '../src/js/team';
import canIterate from '../src/js/caniterable';

const bowman = new Character('Ivan', 'Bowman');
const swordsman = new Character('Yana', 'Swordsman');
const magician = new Character('Alexander', 'Magician');

const team = new Team(bowman, swordsman, magician);

test('test of function canIterate(true)', () => {
  const result = canIterate(team);
  expect(result).toBe(true);
});

test('test of function canIterate(false)', () => {
  const result = canIterate(10);
  expect(result).toBe(false);
});
