document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');

    var calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: 'dayGridMonth',
      initialDate: '2024-11-07',
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay'
      },
      events: [
        {
          title: 'A Guide to JavaScript',
          start: '2024-11-01',
          end: '2024-11-03'
        },
        {
            title: 'Security System',
            start: '2024-11-05',
            end: '2024-11-06'
          },
        {
          title: 'Web Development',
          start: '2024-11-07',
          end: '2024-11-10'
        },
        {
          title: 'Technology Conference',
          start: '2024-11-11',
          end: '2024-11-13'
        },
        {
            title: 'Data Structure',
            start: '2024-11-18',
            end: '2024-11-20'
          },
          {
            title: 'Photoshop',
            start: '2024-11-24',
            end: '2024-11-26'
          },
        {
            title: 'Anniversary Party',
            start: '2024-11-29T07:00:00'
          }
      ]
    });

    calendar.render();
  });