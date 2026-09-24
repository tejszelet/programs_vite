export function renderPrograms(arr) {
    const cardStr = arr.map(obj => `
        <div class="card">
      <h3>${obj.title}</h3>
      <h4>Kategória: ${obj.category}</h4>
      <p>Ár: ${obj.price}</p>
      <p>Résztvevők: ${obj.participants}</p>
      <p>Helyek: ${obj.capacity}</p>
      <p>${obj.indoor ? "beltéri":"kültéri"}</p>
    
      </div>
        `).join('')
        document.querySelector('.programs').innerHTML = cardStr

}


export function renderCateg(arr) {
    let categories = arr.map(obj => obj.category)
    console.log(categories);
    categories = [...new Set(categories)]
    console.log(categories);
    //categories = [...categories, 'összes']

    const btnStr = categories.map(ctg => `
        <button>${ctg}</button>
        `).join('')
    document.querySelector('header').innerHTML =`<button class = "activeBtn">összes</button>` + btnStr  
    
    
}

export function renderFooter(arr) {

    const totalResztvevo = arr.reduce((acc, obj) => obj.participants + acc, 0)
    
    const asd = arr.reduce((acc, obj) => obj.price + acc, 0)
    const atlag = asd / arr.length

    const bevetel = arr.reduce((acc, obj) => acc + obj.price * obj.participants, 0)

    const totalindoor= arr.reduce((acc,obj)=>obj.indoor ? acc+1 : acc,0)
    const totaloutdoor= arr.reduce((acc,obj)=>obj.indoor ? acc :acc+1,0)







    document.querySelector('footer').innerHTML += `Összes résztvevők: ${totalResztvevo}   `
    document.querySelector('footer').innerHTML += `Átlagos részvételi díj: ${atlag}   `
    document.querySelector('footer').innerHTML += `jelenlegi bevétel: ${bevetel}   `
    document.querySelector('footer').innerHTML += `Beltéri programok: ${totalindoor}   `
    document.querySelector('footer').innerHTML += `Kültéri programok: ${totaloutdoor}`

}