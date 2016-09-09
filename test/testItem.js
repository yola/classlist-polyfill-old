describe('With classlist.item', function() {
  var elem = document.createElement('div');
  elem.setAttribute('class', 'one two three four');

  it('should return correct value for index 0', function() {
    // elem.classList.remove('four');
    expect(elem.classList.item(0)).toBe('one');
  });

  it('should return correct value for index 3', function() {
    // elem.classList.remove('four');
    expect(elem.classList.item(3)).toBe('four');
  });

  it('should return correct value for index 4', function() {
    // elem.classList.remove('four');
    expect(elem.classList.item(4)).toBeNull;
  });
});
