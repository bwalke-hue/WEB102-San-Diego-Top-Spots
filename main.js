$(document).ready(function () {
  $.getJSON('spots_1.json', function (data) {
    // data is expected to be an array of top-spot objects, e.g.:
    // { name, description, latitude, longitude }
    const spots = Array.isArray(data) ? data : data.topSpots || data.spots;

    spots.forEach(function (spot) {
      const mapsUrl = `https://www.google.com/maps?q=${spot.latitude},${spot.longitude}`;

      const row = $('<tr></tr>');
      row.append($('<td></td>').text(spot.name));
      row.append($('<td></td>').text(spot.description));
      row.append(
        $('<td></td>').append(
          $('<a></a>')
            .attr('href', mapsUrl)
            .attr('target', '_blank')
            .text('View on Map')
        )
      );

      $('#top-spots-table tbody').append(row);
    });
  }).fail(function () {
    console.error('Could not load spots_1.json — make sure you are running this via a local web server (npm start), not opening index.html directly.');
  });
});
