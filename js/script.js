"use strict";

$(document).ready(function () {

    // ----------SECTION SERVICE----------

    let saveTabWork;
    function activeEl(classTab, classContentTab) {
        $(`${classTab}:first-child`).addClass('active');
        let dataNameTabActive = $(`${classTab}.active`).data('name');
        showTab(dataNameTabActive, classContentTab);

        $(`${classTab}`).click(function (e) {
            $(`${classTab}.active`).removeClass('active');
            let tabActive = $(e.target).addClass('active');
            showTab(tabActive.data('name'), classContentTab);

            if (classTab === '.tabs-work-title') {
                saveTabWork = tabActive.data('name');
            }
        })
    }

    function showTab(dataNameTab, classContent) {
        if (dataNameTab && dataNameTab === 'all') {
            saveTabWork = 'all';
            $(`${classContent}`).show();
        } else if (dataNameTab && dataNameTab !== 'all') {
            $(`${classContent}`).hide().filter(`[data-name=${dataNameTab}]`).show();
        }
    }
    activeEl('.tabs-service-title', '.item-service-content');

    // ----------SECTION WORK----------

    activeEl('.tabs-work-title', '.item-work');

    $('#btn-load-work').click(function (e) {
        e.preventDefault();
    });

    let countPressBtnWork = 0;
    let arrSrcImgWork1 = [
        `./img/work-graphic-design4.jpg`,
        `./img/work-graphic-design5.jpg`,
        `./img/work-graphic-design6.jpg`,
        `./img/work-graphic-design7.jpg`,
        `./img/work-wordpress4.jpg`,
        `./img/work-wordpress5.jpg`,
        `./img/work-wordpress6.jpg`,
        `./img/work-web-design5.jpg`,
        `./img/work-web-design6.jpg`,
        `./img/work-web-design7.jpg`,
        `./img/work-landing-page4.jpg`,
        `./img/work-landing-page5.jpg`,
    ];
    let arrSrcImgWork2 = [
        `./img/work-graphic-design8.jpg`,
        `./img/work-graphic-design9.jpg`,
        `./img/work-graphic-design10.jpg`,
        `./img/work-graphic-design11.jpg`,
        `./img/work-graphic-design12.jpg`,
        `./img/work-graphic-design13.jpg`,
        `./img/work-wordpress7.jpg`,
        `./img/work-wordpress8.jpg`,
        `./img/work-wordpress9.jpg`,
        `./img/work-web-design8.jpg`,
        `./img/work-landing-page6.jpg`,
        `./img/work-landing-page7.jpg`,
    ];
    $('#btn-load-work').click(function handlerWork(e) {
        $('#btn-load-work').unbind('click', handlerWork);
        $('.loads-work-box').css('display', 'flex');

        countPressBtnWork++;
        let count = 0;

        setTimeout(() => {
            createWorkEl();
            $('#btn-load-work').click(handlerWork);
            showTab(saveTabWork, '.item-work');
            if (countPressBtnWork >= 2) {
                $('#btn-load-work').hide();
            }
        }, 2000);

        function createWorkEl() {
            if ($('.loads-work-box').css('display') !== 'none') {
                $('.loads-work-box').hide();
            }
            if (count < 12) {
                let li = $('<li class="item-work"></li>').appendTo($('ul.list-work'));
                let div = $('<div class="item-work-description"></div>').appendTo(li);
                let icon = $('<img class="item-work-icon" src="./img/work-icon.svg" alt="icon work" width="88" height="43">').prependTo(div);
                let title = $('<h4 class="item-work-title"></h4>').insertAfter(icon);
                let subtitle = $('<p class="item-work-subtitle"></p>').insertAfter(title);
                let img = $(`<img alt="" class="item-work-image" height="206" width="284">`).appendTo(li);
                if (countPressBtnWork === 1) {
                    img.attr('src', `${arrSrcImgWork1[count]}`);
                    if (count < 4) {
                        li.attr('data-name', 'graphic-design');
                        title.text('Make it perfect');
                        subtitle.text('Graphic design');
                    } else if (count < 7) {
                        li.attr('data-name', 'wordpress');
                        title.text('Create a website in minutes');
                        subtitle.text('WordPress');
                    } else if (count < 10) {
                        li.attr('data-name', 'web-design');
                        title.text('creative design');
                        subtitle.text('Web Design');
                    } else {
                        li.attr('data-name', 'landing-pages');
                        title.text('What is a Landing Page');
                        subtitle.text('Landing Page');
                    }
                }

                if (countPressBtnWork === 2) {
                    img.attr('src', `${arrSrcImgWork2[count]}`);
                    if (count < 6) {
                        li.attr('data-name', 'graphic-design');
                        title.text('Make it perfect');
                        subtitle.text('Graphic design');
                    } else if (count < 9) {
                        li.attr('data-name', 'wordpress');
                        title.text('Create a website in minutes');
                        subtitle.text('WordPress');
                    } else if (count < 10) {
                        li.attr('data-name', 'web-design');
                        title.text('creative design');
                        subtitle.text('Web Design');
                    } else {
                        li.attr('data-name', 'landing-pages');
                        title.text('What is a Landing Page');
                        subtitle.text('Landing Page');
                    }
                }
                count++;
                createWorkEl();
            } else return;
        }
    })
})

// ----------SECTION FEEDBACK----------

$('.slider').slick({
    infinite: false,
    arrows: false,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.slider-nav',
    draggable: false,
    speed: 1000,
    waitForAnimate: false,
});

$('.slider-nav').slick({
    infinite: false,
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    speed: 1000,
    prevArrow: `<button type="button" class="slick-prev">&#10094;</button>`,
    nextArrow: `<button type="button" class="slick-next">&#10095;</button>`,
    asNavFor: '.slider',
    waitForAnimate: false,
    focusOnSelect: true,
});

// ----------SECTION GALLERY----------


var $grid = $('.grid-gallery').imagesLoaded(function () {
    $grid.masonry({
        itemSelector: '.grid-item',
        columnWidth: '.grid-item',
        fitWidth: true,
        gutter: 15,
    });
});

hoverGallery();
function hoverGallery() {
    $('.grid-item-image').parent().hover(
        function (e) {
            $(e.target).siblings('.view-image').css('display', 'flex');
        },
        function () {
            $('.view-image').css('display', 'none');
        }
    )
}

let btnLoadGallery = document.querySelector('#btn-load-gallery');
let containerGallery = document.querySelector('.grid-gallery');
let countPressBtnGallery = 0;
let loads = document.querySelector('.loads-gallery-box');

btnLoadGallery.addEventListener('click', function (e) {
    e.preventDefault();
});

btnLoadGallery.addEventListener('click', function handlerGallery(e) {
    btnLoadGallery.removeEventListener('click', handlerGallery);
    loads.style.display = 'flex';
    countPressBtnGallery++;
    let gridsAdd = [];
    let count = 0;
    let arrSrcImgGallery = [];

    if (countPressBtnGallery === 1) {
        createArrSrc(9, 7);
    } else createArrSrc(16, 7);

    function createArrSrc(start, n) {
        for (let i = 0; i < n; i++) {
            arrSrcImgGallery.push(`./img/gallery-${start + i}.jpg`);
        }
    }
    setTimeout(() => {
        createGalleryEl();
        addImageToGallery();
        btnLoadGallery.addEventListener('click', handlerGallery);
    }, 2000);

    function createGalleryEl() {
        if (loads.style.display !== 'none') {
            loads.style.display = 'none';
        }
        if (count < arrSrcImgGallery.length) {
            let gridItem = document.createElement('div');
            gridItem.className = "grid-item";
            gridItem.classList.add("new-item");

            let viewImage = document.createElement('div');
            viewImage.className = "view-image";

            let btnZoom = document.createElement('button');
            btnZoom.className = "btn-view-image";

            let btnFullscreen = document.createElement('button');
            btnFullscreen.className = "btn-view-image";

            let imgZoom = document.createElement('img');
            imgZoom.setAttribute('src', './img/gallery-zoom-icon.svg');

            let imgFullscreen = document.createElement('img');
            imgFullscreen.setAttribute('src', './img/gallery-fullscreen-icon.svg');

            let imgItem = document.createElement('img');
            imgItem.className = 'grid-item-image';
            imgItem.setAttribute('src', arrSrcImgGallery[count]);
            imgItem.setAttribute('width', 378);

            containerGallery.insertAdjacentElement('beforeend', gridItem);
            gridItem.insertAdjacentElement('beforeend', viewImage);
            viewImage.insertAdjacentElement('beforeend', btnZoom);
            viewImage.insertAdjacentElement('beforeend', btnFullscreen);
            btnZoom.insertAdjacentElement('afterbegin', imgZoom);
            btnFullscreen.insertAdjacentElement('afterbegin', imgFullscreen);
            gridItem.insertAdjacentElement('beforeend', imgItem);
            gridsAdd.push(gridItem);

            count++;
            createGalleryEl();
        } else return
    }

    function addImageToGallery() {
        let $gridsAdd = $(gridsAdd);
        $grid.append($gridsAdd).masonry('appended', $gridsAdd);
        $grid.imagesLoaded().progress(function () {
            $grid.masonry('layout');
        });
        hoverGallery();
        if (countPressBtnGallery >= 2) {
            btnLoadGallery.style.display = 'none';
        }
    }
})

