const { workDays, weekDays } = require('./workOrWeekDay.js');

describe('Checks if Sunday ias a weekday or a workday:', () => {
  test('Sunday is a week day', () => {
    expect(weekDays).toContain('Sunday');
  });
  
  test('Sunday is not a workday', () => {
    expect(workDays).not.toContain('Sunday');
  });
});