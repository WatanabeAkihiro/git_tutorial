const $id = (id) => document.getElementById(id);


$('button').click(function() {
    console.log('クリックされました！');

    const arg1 = $id('arg1').value;
    const arg2 = $id('arg2').value;
    const arg = arg1 / arg2;
    $('#output-area').html(`<p>${arg}</p>`);
})