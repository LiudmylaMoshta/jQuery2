// добавление класса по клику
    $('#class_done').click(function () {
        $(this).addClass('class_done');
    });

// удаление класса по клику
$('#class_delete').click(function () {
    $(this).removeClass('class_delete');
});

// переключение класса по клику (если есть класс - его убрать, если нет - добавить)
$( "#btn" ).click(function() {
    $( this ).toggleClass('class_delete');
});

// получение какого-то атрибута кнопки по клику и вывод его в консоль
$('#my-btn').click(function () {
    console.log( $(this).attr('class'));
});

// присвоение какого-то атрибута кнопке по клику
$('#add_class').click(function () {
    $(this).attr('class','smile');
});

// вызов всплывающего окна по клику (сообщения, не модалки)
$('#my_confirm').click(function () {
    alert('hello!!!');
});

// При клике на Ок в всплывающем окне - вывести любое сообщение в консоль
$('#confirm2').click(function () {
    if(confirm('Вам больше  18 лет?') === true) {
        console.log('ОК!!!');
    }
});

// по клику склонировать кнопку, дописать текст "(cloned)" и вставить её сразу после этой кнопки
$('#done-text').click(function () {
    var clone = $(this).clone();

    clone.text(clone.text() + " (cloned)");
    $(this).after(clone);
});

// по клику циклом пройтись по всем кнопкам и собрать массив текста этих кнопок. То есть, в итоге, вывести в консоль массив текста кнопок.



// расположить текст рядом с кнопкой, по клику на кнопку скрыть этот текст через fadeOut.
$('#button-fadeout').click(function(){
    $('.button-fadeout').fadeOut();
});


// расположить текст рядом с кнопкой, по клику на кнопку скрыть этот текст через hide.
$('#button-hide').click(function(){
    $('.hide-btn').hide();
});

// расположить скрытый текст рядом с кнопкой, по клику на кнопку показать этот текст через show.
$('#button-show').click(function(){
    $('.show-btn').show();
});

// - при изменении размера окна браузера покрасить кнопки в синий цвет
$(window).resize(function(){
    $('button').css('background','blue');
});

// при скроле вниз покрасить кнопки в желтый цвет
$(window).scroll(function(){
    $('button').css('background','yellow');
});

// при клике на кнопку в нижестоящем блоке дописать ссылку на любую страницу с текстом ТЕСТ
    $('.href').click(function () {
        $('.done').append('<a href="#">test</a>');
    });

/*по клику циклом пройтись по всем кнопкам и собрать массив текста этих кнопок.
    То есть, в итоге, вывести в консоль массив текста кнопок*/
$('#btn-texts').click(function () {
    var textArray=[];
    $('button').each(function () {
        textArray.push(this.innerText);
    });
    console.log(textArray);
});

//по клику найти эту кнопку в теге body и вывести в консоль результат поиска
$('#find-btn').click(function () {
    console.log($('body').find('button#find-btn'));
});

// по клику вывести следующие данные через запятые в консоль: высота кнопки, ширина кнопки,
// абсолютную позиция по обеим осям, значение всех атрибутов, родительский элемент,
// соседние кнопки сверху и снизу, текст кнопки.
$('#btn-attr').click(function () {
    var el = $(this);
    console.log(
        'высота кнопки: ' + el.height(),
        'ширина кнопки: ' + el.width(),
        'абсолютную позиция по обеим осям: X = ' + el.position().left + "; Y = " + el.position().top,
        'родительский элемент:' + el.parent().prop('tagName'),
        'соседние кнопки сверху:'+el.next().prop('tagName'),
        'соседние кнопки снизу:'+el.prev().prop('tagName'),
        'текст кнопки:'+el.text()
    );
});

// по клику Сделать исчезание (медленное) кнопки во все 4 стороны
$('#btn-fadeout').click(function(){
    $('#btn-fadeout').slideUp();
});/*вниз*/
