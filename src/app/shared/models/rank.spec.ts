import { Rank } from './rank';

describe('Rank', () => {
  it('should create an instance', () => {
    expect(new Rank('1', '2', '3', '4', '5')).toBeTruthy();
  });
});
