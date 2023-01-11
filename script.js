screenWidth = window.screen.width;


// Adding breaks
if (screenWidth >=1024) {
    document.getElementById('inline-styled').innerHTML = 'В США такие уроки внедряются в школьную<br> программу как факультативы.';
    document.getElementById('inc-title').innerHTML = 'Как проходит<br> обучение<br> на курсах INC';
    
}

if (screenWidth >=1920) {

    // Inc section card text
    document.getElementById('inc-card-description1').innerHTML = 'Продолжительность 80 минут - в течение<br> часа дается образовательная программа<br> и +20 минут на развлечения в игре';
    document.getElementById('inc-card-description2').innerHTML = 'Максимум 12 человек в одной<br> группе - чтобы всем хватило внимания<br> преподавателя и было комфортно<br> заниматься.';
    document.getElementById('inc-card-description3').innerHTML = 'Удаленно через Zoom или Teams - <br>можно учиться из любой точки мира!<br> Поможем с настройкой связи.';
    document.getElementById('inc-card-description4').innerHTML = 'В течение 2-х семестров<br> - с сентября по декабрь и с января<br> по июль.';
    document.getElementById('inc-card-description5').innerHTML = 'С родительским чатом -  будут группы<br> в Telegram или Whatsapp, где можно<br> узнать об успеваемости ребенка, задать вопросы.';
    document.getElementById('lesson-stuff-title').innerHTML = 'Что понадобится<br> для уроков';
}