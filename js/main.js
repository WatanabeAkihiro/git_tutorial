const $id = (id) => document.getElementById(id);


$('button').click(function() {
    console.log('クリックされました！');

    const arg1 = $id('arg1').value;
    const arg2 = $id('arg2').value;
    const arg = (arg2 !== 0) ? arg1 / arg2 : "ゼロでは割れません";
    $('#output-area').html(`<p>${arg}</p>`)
})