$(document).ready(function(){

  $('.from-text-box').on('input', function(){
    var fromSelected = $('.from-currency option:selected').val();
    var toSelected = $('.to-currency option:selected').val();
    urlString = "https://api.exchangeratesapi.io/latest?base=";
    urlString = urlString + fromSelected;
    urlString = urlString + "&symbols=";
    urlString = urlString + fromSelected;
    urlString = urlString + ",";
    urlString = urlString + toSelected;
    $.ajax({url: urlString, success: function(result){
      var convertedCurrency = parseFloat(result["rates"][""+toSelected]);
      var toCurrncy = parseFloat($('.from-text-box').val());
        $('.to-text-box').val(convertedCurrency * toCurrncy);
    }});
  });

});
