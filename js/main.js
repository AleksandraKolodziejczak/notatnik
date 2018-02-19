
var btn = $('#button1');
btn.on('click', function () {
    var inp = $('input');
    inp.val();
    var text = inp.val();
    var parent = $('#list');
    var newLi = $('<li>');
    parent.append(newLi);
    newLi.text(text);
    newLi.addClass('list-item');
    inp.val('');
});
