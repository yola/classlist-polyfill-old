describe('With classlist.contains', function() {
  var elem = document.createElement('div');
  elem.setAttribute('class', 'one three');

  it('should return true for existing class "one"', function() {
    expect(elem.classList.contains('one')).toBe(true);
  });

  it('should return false for none existing class "two"', function() {
    expect(elem.classList.contains('two')).toBe(false);
  });
});
