$("#id_file").on('change', function () {
    $(this).next('.form-control-file').addClass("selected");

    //Get count of selected files
    var countFiles = $(this)[0].files.length;

    var imgPath = $(this)[0].value;
    var extn = imgPath.substring(imgPath.lastIndexOf('.') + 1).toLowerCase();
    var image_holder = $("#image_holder");
    var image_list = $("#image_list");
    image_holder.empty();
    image_list.empty();

    $('input[type="file"]').each(function () {
        if ($('input[type="file"]').val() != "") {
            $('#upload_images').attr({
                disabled: false,
            });
        } else {
            $('#upload_images').attr({
                disabled: true,
            });
        }
    });

    // TODO: добавить разрешения
    if (extn == "gif" || extn == "png" || extn == "jpg" || extn == "jpeg") {

        //loop for each file selected for uploaded.
        for (var i = 0; i < countFiles; i++) {
            (function (count, self) {
                var reader = new FileReader()
                reader.onload = function (e) {
                    if (count == 0) {
                        $("<a />", {
                            "class": "list-group-item list-group-item-action active",
                            "href": "#image-" + count,
                            text: self.files[count].name,
                        }).appendTo(image_list);
                    } else {
                        $("<a />", {
                            "class": "list-group-item list-group-item-action ",
                            "href": "#image-" + count,
                            text: self.files[count].name,
                        }).appendTo(image_list);
                    }
                    $("<h4 />", {
                        "id": "image-" + count,
                        text: self.files[count].name,
                    }).appendTo(image_holder);
                    $("<img />", {
                        "src": e.target.result,
                        "class": "scroll-img"
                    }).appendTo(image_holder);
                }
                reader.readAsDataURL(self.files[count])
            })(i, this);
        }
        $('#preview_block').removeClass("d-none");
    } else {
        $(this).next('.form-control-file').removeClass("selected");
        $('#preview_block').addClass("d-none");
    }
});

$('#clear_list').on('click', function () {
    $("#id_file").val('');
    $("#image_holder").empty();
    $("#image_list").empty();
    $('.form-control-file').removeClass("selected");
    $('#preview_block').addClass("d-none");
});

$('#upload_images').on('click', function () {
    $('input[type="file"]').each(function () {
        if ($('input[type="file"]').val() != "") {
            $('#upload_images').attr({
                'class': 'btn btn-info',
                disabled: true,
            });
            $('#clear_list').attr({
                disabled: true,
            });
            $('#upload_images').html('<span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span> Загрузка...');
            $('form').submit();
        }
    });

});
