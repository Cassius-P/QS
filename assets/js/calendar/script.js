
document.addEventListener('DOMContentLoaded', function() {


    var calendarEl = document.getElementById('calendar');
    var date = new Date();
    var dd = date.getDate();
    var mm = date.getMonth()+1;
    var yyyy = date.getFullYear();
    if(dd<10)
    {
        dd='0'+dd;
    }
    if(mm<10)
    {
        mm='0'+mm;
    }
    var today = yyyy+'-'+mm+'-'+dd;
    var calendar = new FullCalendar.Calendar(calendarEl, {
        plugins: [ 'interaction', 'dayGrid' ],
        defaultDate: today,
        locale:'fr',
        columnHeaderFormat:{ weekday: 'long' },
        aspectRatio: 2.1,
        header: {
            left: 'prev title next',
            center:'',
            right:''
        },
        titleFormat:{month: 'long' },
        editable: false,
        eventLimit: true, // allow "more" link when too many events
        events: [{ // this object will be "parsed" into an Event Object
            title: 'The Title', // a property!
            start: '2020-06-14', // a property!
            end: '2020-06-14', // a property! ** see important note below about 'end' **
            rendering:'background'
        }]
    });


    
    console.log(calendar['events']);
    calendar.render();
});