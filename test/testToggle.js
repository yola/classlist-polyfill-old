describe('With classlist.toggle', function() {
  var elem = document.createElement('div');
  elem.setAttribute('class', 'one');

  it('should toggle class "two" and add it', function() {
    var result = elem.classList.toggle('two');
    expect(elem.getAttribute('class')).toBe('one two');
    expect(result).toBe(true);
  });

  it('should toggle class "two" and remove it', function() {
    var result = elem.classList.toggle('two');
    expect(elem.getAttribute('class')).toBe('one');
    expect(result).toBe(false);
  });

  it('should toggle class "one" and force add it', function() {
    var result = elem.classList.toggle('one', true);
    expect(elem.getAttribute('class')).toBe('one');
    expect(result).toBe(true);
  });

  it('should toggle class "one" and force remove it', function() {
    var result = elem.classList.toggle('one', false);
    expect(elem.getAttribute('class')).toBe('');
    expect(result).toBe(false);
  });
});
