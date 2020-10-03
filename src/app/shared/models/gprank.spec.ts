import { GpRank } from './gprank';

describe('GpRank', () => {
  it('should create an instance', () => {
    expect(new GpRank('1', '2', '3', '4', '5', '6')).toBeTruthy();
  });
});
