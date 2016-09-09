describe('With classlist.add', function() {
  var elem = document.createElement('div');

  it('should add class "one"', function() {
    elem.classList.add('one');
    expect(elem.getAttribute('class')).toBe('one');
  });

  it('should not add class "one" again', function() {
    elem.classList.add('one');
    expect(elem.getAttribute('class')).toBe('one');
  });

  it('should add class "two"', function() {
    elem.classList.add('two');
    expect(elem.getAttribute('class')).toBe('one two');
  });

  it('should add classes "three" and "four"', function() {
    elem.classList.add('three', 'four');
    expect(elem.getAttribute('class')).toBe('one two three four');
  });
});
