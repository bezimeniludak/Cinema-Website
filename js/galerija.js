$(function () {
  $('#mProzor').on('show.bs.modal', function (e) {
    var src = $(e.relatedTarget).attr('src');
    $(this).find('.modal-body > img.mSlika').attr('src', src);
    
  });
});