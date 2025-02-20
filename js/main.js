$(window).on("load", function () {
    $(".loader-wrapper").fadeOut("slow");
    $("body,html").css({ "overflow": "auto" });
});

if (window.innerHeight >= 1024 && (window.innerWidth <= 1024)) {
    $("#hero img").css({ "height": "33vh" });
}

$(document).ready(function () {
    var img, oldImg, newImg;

    var imgarrop = ["http://localhost:5500/img/optimized/flowers.jpg",
        "http://localhost:5500/img/optimized/_MG_4956.jpg",
        "http://localhost:5500/img/optimized/IMG_2305-Edit.jpg",
        "http://localhost:5500/img/optimized/20171203_164858.jpg",
        "http://localhost:5500/img/optimized/IMG_3672.jpg",
        "http://localhost:5500/img/optimized/20180811_192427-17.jpg",
        "http://localhost:5500/img/optimized/20180814_063005-26.jpg",
        "http://localhost:5500/img/optimized/water.jpg",
        "http://localhost:5500/img/optimized/Untitled_Panorama1.jpg",
        "http://localhost:5500/img/optimized/_MG_5806.jpg",
        "http://localhost:5500/img/optimized/20180809_192416-14.jpg",
        "http://localhost:5500/img/optimized/_MG_2475.jpg",
        "http://localhost:5500/img/optimized/_MG_2489.jpg"
    ];
    $("#hero a img").click(function () {
        img = $(this)[0];
        let q = img.getAttribute("data-index");
        oldImg = $(".modal-content .image img")[0];
        newImg = new Image();
        newImg.setAttribute("data-index", q);
        if (oldImg !== undefined) {
            if (img.src === oldImg.src) {

            } else {
                newImg.src = img.src;
                $(".modal-content .image img").replaceWith(newImg);
            }
        } else {
            newImg.src = img.src;
            $(".modal-content .image").append(newImg);
        }
    });

    $("#next").click(function (e) {
        oldImg = $(".modal-content .image img");
        let i = oldImg.attr("data-index");
        if (i >= imgarrop.length - 1) {
            i = -1;
        }
        ++i;
        let temp = $("[data-index='" + i + "']")[0];
        console.log(temp);
        newImg.src = temp.src;
        $(".modal-content .image img").replaceWith(newImg);
        newImg.setAttribute("data-index", i);
        e.preventDefault();
        console.log(newImg.src);

    });

    $("#prev").click(function (e) {
        oldImg = $(".modal-content .image img");
        let i = oldImg.attr("data-index");
        if (i <= 0) {
            i = imgarrop.length;
        }
        --i;
        let temp = $("[data-index='" + i + "']")[0];
        console.log(temp);
        newImg.src = temp.src;
        $(".modal-content .image img").replaceWith(newImg);
        newImg.setAttribute("data-index", i);
        e.preventDefault();
        console.log(newImg.src);
    });

    $("#contact a:first").click(function (e) {
        e.preventDefault();
    });

});
