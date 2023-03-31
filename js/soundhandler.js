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
        var sound = new Audio('./sounds/hover.mp3');
        sound.play()
        sound.remove()
    }
function keySound() {
        let sound = new Audio('./sounds/keyboard1.mp3')
        sound.volume = .5;
        sound.play()
        sound.remove()
}
function clickSound() {
        let sound = new Audio('./sounds/click.mp3')
        sound.play()
        sound.remove()
}
