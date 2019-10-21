import { Greeter } from '../components/greeter/index.tsx';
test('My Greeter', () => {
  expect(Greeter('Carl')).toBe('Hello Carl');
});
