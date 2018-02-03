const expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate the correct message object', () => {
    const from = "Test User";
    const text = "Test message";

    var res = generateMessage(from, text);

    expect(res.from).toBe(from);
    expect(res.text).toBe(text);
    expect(typeof res.createdAt).toBe('number');
  });
});

describe('generateLocationMessage', () => {
  it('should generate the correct location message object', () => {
    const from = "Test User";
    const latitude = 75;
    const longitude = 40;
    const url = `https://www.google.com/maps?q=${latitude},${longitude}`;

    var res = generateLocationMessage(from, latitude, longitude);

    expect(res.from).toBe(from);
    expect(res.url).toBe(url);
    expect(typeof res.createdAt).toBe('number');
  });
});