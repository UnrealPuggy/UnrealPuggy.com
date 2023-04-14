var datedisplay = 'none';
		document.getElementById('date').style.display = datedisplay;
        
		function getTime() {
				var today = new Date();
				var date = (today.getMonth()+1)+'/'+today.getDate()+'/'+today.getFullYear();
				var hours = today.getHours();
				if(hours > 12) {
					hours -= 12;	
				}
				var minutes = today.getMinutes();
				if (minutes < 10) {
					minutes = `0${today.getMinutes()}`;	
				}
				var seconds = today.getSeconds();
				if (seconds < 10) {
					seconds = `0${today.getSeconds()}`;	
				}
				var milli = today.getMilliseconds();
				if (milli < 10) {
					milli = `00${today.getMilliseconds()}`;	
				} else if(milli < 100) {
					milli = `0${today.getMilliseconds()}`;	
				}
				var time = hours + ":" + minutes + ":" + seconds+ ":" + milli;
				var dateTime = date+' '+time;
				
					document.getElementById('date').style.display = datedisplay;
				document.getElementById('date').innerHTML = dateTime;
				today.remove();
		}
        function getId(id) {
            return document.getElementById(id);
        }
//hover

for(let i = 0; i < document.getElementsByTagName('button').length; i++) {
    document.getElementsByTagName('button')[i].addEventListener('mouseover', hoverSound)}

for(let i = 0; i < document.getElementsByTagName('a').length; i++) {
        document.getElementsByTagName('a')[i].addEventListener('mouseover', hoverSound)}

//click

for(let i = 0; i < document.getElementsByTagName('button').length; i++) {
            document.getElementsByTagName('button')[i].addEventListener('mousedown', clickSound)}
for(let i = 0; i < document.getElementsByTagName('a').length; i++) {
            document.getElementsByTagName('a')[i].addEventListener('mousedown', clickSound)}

document.addEventListener('keydown', keySound);
function hoverSound() {
        var sound = new Audio('../sounds/hover.mp3');
        sound.play()
        sound.remove()
    }
function keySound() {
        let sound = new Audio('../sounds/keyboard1.mp3')
        sound.volume = .5;
        sound.play()
        sound.remove()
}
function clickSound() {
        let sound = new Audio('../sounds/click.mp3')
        sound.play()
        sound.remove()
}