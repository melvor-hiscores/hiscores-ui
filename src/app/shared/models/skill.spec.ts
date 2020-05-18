import { Skill } from './skill';

describe('Skill', () => {
  it('should create an instance', () => {
    expect(new Skill('1', '2', '3')).toBeTruthy();
  });
});
