describe('With classlist.remove', function() {
  var elem = document.createElement('div');
  elem.setAttribute('class', 'one two three four');

  it('should remove class "four"', function() {
    elem.classList.remove('four');
    expect(elem.getAttribute('class')).toBe('one two three');
  });

  it('should not remove class "four" again', function() {
    elem.classList.remove('four');
    expect(elem.getAttribute('class')).toBe('one two three');
  });

  it('should remove class "three"', function() {
    elem.classList.remove('three');
    expect(elem.getAttribute('class')).toBe('one two');
  });

  it('should remove classes "one" and "two"', function() {
    elem.classList.remove('one', 'two');
    expect(elem.getAttribute('class')).toBe('');
  });
});
