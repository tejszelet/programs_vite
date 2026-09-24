import { programs } from './data/data'
import './style.css'
import { renderCateg, renderFooter, renderPrograms } from './ui/render'
import { createIcons, icons } from 'lucide';

createIcons({ icons });


renderPrograms(programs)
renderCateg(programs)
renderFooter(programs)

//globalisan hozzuk létre a window obj.-al

window.onCategClick = function onCategClick(e) {
console.log(e.target.textContent);
console.log(e.target.tagName);

if(e.target.tagName != 'BUTTON') return
//az összesen végigiterálunk és levesszük az activeBtn jelölőt
document.querySelectorAll('button').forEach(button => button.classList.remove('activeBtn'))
//amelyikre kattintottunk arra rátesszük
e.target.classList.add('activeBtn')

const selectedCateg = e.target.textContent

const filteredPrograms = programs.filter(obj => obj.category == selectedCateg)
selectedCateg == 'összes' ? renderPrograms(programs) : renderPrograms(filteredPrograms)

 }


 window.availablePrograms = function availablePrograms() {
    console.log('ok');
    document.querySelectorAll('button').forEach(button => button.classList.remove('activeBtn'))
    document.querySelector('.btn').classList.add('activeBtn')
    

    const filteredPrograms = programs.filter(obj => obj. capacity > obj.participants)
    renderPrograms(filteredPrograms)


    
 }