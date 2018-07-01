

function makeGrid() {
  let inputHeight = $('#inputHeight').val();
  let inputWidth = $('#inputWidth').val();

  $('#pixelCanvas').html('');

  for (let i = 1; i <= inputWidth; i++){
    $('#pixelCanvas').append('<tr id = row' + i + '></tr>');
    for (let j = 1; j <= inputHeight; j++) {
      $('#row' + i).append('<td id=coloumn' + j + '></td>');
    }
  }

  $('#sizePicker').on('submit', function(Event){
    Event.preventDefault()
    makeGrid();
  });

  $('td').click(highlight);

  function highlight() {
    let color = $('#colorPicker').val();
    ($(this).attr('style')) ? $(this).removeAttr('style') : $(this).attr('style', 'background-color:${color}');

  }
}
