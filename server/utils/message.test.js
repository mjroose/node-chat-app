const expect = require('expect');

var {generateMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate the correct message object', () => {
    const user = "Test User";
    const text = "Test message";

    var res = generateMessage(user, text);

    expect(res.from).toBe(user);
    expect(res.text).toBe(text);
    expect(typeof res.createdAt).toBe('number');
  });
});