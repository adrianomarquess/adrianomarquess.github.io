$('.toggle-chart1-to-table').on('click', function(e) {
  const firstTable = $('#first-table').toggleClass('table-active');

  if (firstTable.hasClass('table-active')) {
    return $('#firstChart').css({
      display: 'none'
    });
  }

  return $('#firstChart').css({
    display: 'table'
  });
});

$('.toggle-chart2-to-table').on('click', function(e) {
  const secondTable = $('#second-table').toggleClass('table-active');

  if (secondTable.hasClass('table-active')) {
    return $('#secondChart').css({
      display: 'none'
    });
  }

  return $('#secondChart').css({
    display: 'table'
  });
});

$('.toggle-chart3-to-table').on('click', function(e) {
  const thirdTable = $('#third-table').toggleClass('table-active');

  if (thirdTable.hasClass('table-active')) {
    return $('#thirdChart').css({
      display: 'none'
    });
  }

  return $('#thirdChart').css({
    display: 'table'
  });
});
