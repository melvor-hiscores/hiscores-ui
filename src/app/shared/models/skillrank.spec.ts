import { SkillRank } from './skillrank';

describe('SkillRank', () => {
  it('should create an instance', () => {
    expect(new SkillRank('1', '2', '3', '4', '5')).toBeTruthy();
  });
});
