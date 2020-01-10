$(function() {    
    // Call date picker calendar method
    datePickerCalendar(); 

    // Get default dates
    const date =  new Date();
    const end = $.datepicker.formatDate('yy-mm-dd', date);
    const start = $.datepicker.formatDate('yy-mm-dd', new Date(date.getTime() - (10 * 86400000)));
    
    // Set default dates
    $("#from").val(start);
    $("#to").val(end);    

    // Render graph on page load
    let data = {start: start, end: end};    
    sendRequest(data, true);

    // Render graph on form button
    $( "#graphForm" ).submit(function( event ) {        
      event.preventDefault();            
      data.start = $("#from").val();
      data.end = $("#to").val();
      sendRequest(data, false);
    });    
}); 

function datePickerCalendar() {    
    let from = $("#from").datepicker({
        defaultDate: "+1w",
        changeMonth: true,
        changeYear: true,
        numberOfMonths: 1,
        dateFormat: 'yy-mm-dd',
        defaultDate: new Date()
    }).on("change", function() {
        to.datepicker("option", "minDate", this.value);
    });

    let to = $("#to").datepicker({
        defaultDate: "+1w",
        changeMonth: true,
        changeYear: true,
        numberOfMonths: 1,
        dateFormat: 'yy-mm-dd'
    }).on("change", function() {
        from.datepicker("option", "maxDate", this.value);
    });
}

function sendRequest(data, type) {
    $.ajax({
        type: 'GET',
        url: url,
        data: data,
        dataType: 'json',
        success: function(res) {
            let dates = [];
            let price = [];            
            $.each(res.bpi, function(index, element) {
                dates.push(index);
                price.push(element);
            });

            // Show and update graph
            if(type) {
              showGraph(dates, price);
            } else {
              updateGraph(dates, price);
            }
        },
        error: function(jqXhr, textStatus, errorThrown) {
            console.log(errorThrown);
        }
    });
}
    
let lineChart = '';
function showGraph(dates, price) {
    let config = {
        type: 'line',
        data: {
            labels: dates,
            datasets: [{
                label: 'Price',
                backgroundColor: window.chartColors.blue,
                borderColor: window.chartColors.blue,
                data: price,
                fill: false,
            }]
        },
        options: {
            responsive: true,            
            legend: {
                display: false
            }
        }
    };
    
    const canvas = document.getElementById('BitCoinGraph');
    lineChart = Chart.Line(canvas, config);    
}

function updateGraph(dates, price) {
  lineChart.data.labels = dates;
  lineChart.data.datasets[0].data = price;  
  lineChart.update();
}