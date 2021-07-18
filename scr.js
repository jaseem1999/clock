function clock(){
            let hour = document.getElementById('hour');
            let minute = document.getElementById('minute');
            let second = document.getElementById('second');
            let ampm = document.getElementById('ampm');
            let day = document.getElementById('day');
            let mon = document.getElementById('mon');
            let year = document.getElementById('year');

            let h = new Date().getHours()
            let m = new Date().getMinutes()
            let s = new Date().getSeconds()
            let d = new Date().getDay()
            let mo = new Date().getMonth()
            let y = new Date().getFullYear()
            var am = 'AM' ;
            //AM & PM
              if (h >= 12) {
                  h = h - 12;
                  var am = 'PM';
              }
              //Month
            if ( mo == 0){
                mo = 'Jan'
            }
            if (mo == 1) {
                mo = 'Feb'
            }
            if (mo == 2) {
                mo = 'Mar'
            }
            if (mo == 3) {
                mo = 'Apr'
            }
            if (mo == 4) {
                mo = 'May'
            }
            if (mo == 5) {
                mo = 'Jun'
            }
            if (mo == 6) {
                mo = 'Jul'
            }
            if (mo == 7) {
                mo = 'Ogu'
            } 
            if (mo == 8) {
                mo = 'Sep'
            } 
            if (mo == 9) {
                mo = 'Oct'
            } 
            if (mo == 10) {
                mo = 'Nev'
            } 
            if (mo == 11) {
                mo = 'Dec'
            }

           //Days
            if (d == 0) {
                d = 'Sunday';
            }
            if (d == 1 ) {
                d = 'Monday';
            } 
            if (d == 2) {
                d = 'Tuesday';
            }
            if (d == 3) {
                d = 'Wednesday';
            }
            if (d == 4) {
                d = 'Thursday';
            }
            if (d == 5) {
                d = 'Friday';
            }
            if (d == 6) {
                d = 'Saturday';
            }
           

            hour.innerHTML = h;
            minute.innerHTML = m;
            second.innerHTML = s;
            ampm.innerHTML = am;
            day.innerHTML = d;
            mon.innerHTML = mo;
            year.innerHTML = y;

        }
var interval = setInterval(clock, 1000);
