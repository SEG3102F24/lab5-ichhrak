import { Employee } from './employee';

describe('Employee', () => {
  it('should create an instance', () => {
    expect(new Employee("andrew", "02-25-2003", "London", 1000)).toBeTruthy();
  });
});
