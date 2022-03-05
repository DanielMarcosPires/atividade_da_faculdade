//ids: valor,nome,info
//class: btn

btn =()=>{
    const valor = document.querySelector('#valor')
    const namebox = document.querySelector('#nome')
    namebox.innerHTML=`<strong>${valor.value}</strong>`
    if(valor.value == 'Juliano' ||valor.value == 'juliano' ){
        const info = document.querySelector('#info')
        info.innerHTML=` 
            <strong class='rotina' id='e'>Acordar 6:00</strong> <br> 
            <strong class='rotina' id='e1'>Tomar café</strong> <br>
            <strong class='rotina' id='e2'>Arrumar o quarto</strong> <br>
            <strong class='rotina' id='e3'>Arrumar a mochila</strong> <br>
            <strong class='rotina' id='e4'>ir para a escola ás 12:30</strong> <br>
        `
       const btn = document.querySelector('#e')
       const btn1 = document.querySelector('#e1')
       const btn2 = document.querySelector('#e2')
       const btn3 = document.querySelector('#e3')
       const btn4 = document.querySelector('#e4')
       
       btn.addEventListener('click',()=>{
          const rotina = document.querySelector('#e')
          const rotina1 = document.querySelector('#e1')
          const rotina2 = document.querySelector('#e2')
          const rotina3 = document.querySelector('#e3')
          const rotina4 = document.querySelector('#e4')

          rotina.style.background = `green`
          rotina1.style.background = null
          rotina2.style.background = null
          rotina3.style.background = null
          rotina4.style.background = null
       })
       btn1.addEventListener('click',()=>{
        const rotina = document.querySelector('#e')
        const rotina2 = document.querySelector('#e2')
        const rotina3 = document.querySelector('#e3')
        const rotina4 = document.querySelector('#e4')
        const rotina1 = document.querySelector('#e1')
        rotina1.style.background = `green`
        rotina.style.background = null
        rotina2.style.background = null
          rotina3.style.background = null
          rotina4.style.background = null
       })
       btn2.addEventListener('click',()=>{
        const rotina = document.querySelector('#e')
        const rotina2 = document.querySelector('#e2')
        const rotina3 = document.querySelector('#e3')
        const rotina4 = document.querySelector('#e4')
        const rotina1 = document.querySelector('#e1')
        rotina2.style.background = `green`
        rotina.style.background = null
        rotina1.style.background = null
        rotina3.style.background = null
        rotina4.style.background = null
       })
       btn3.addEventListener('click',()=>{
        const rotina = document.querySelector('#e')
        const rotina2 = document.querySelector('#e2')
        const rotina4 = document.querySelector('#e4')
        const rotina1 = document.querySelector('#e1')
        const rotina3 = document.querySelector('#e3')
        rotina.style.background = null
        rotina1.style.background =null
        rotina2.style.background =null
        rotina3.style.background = `green`
        rotina4.style.background =null
    })
       btn4.addEventListener('click',()=>{
        const rotina = document.querySelector('#e')
        const rotina2 = document.querySelector('#e2')
        const rotina3 = document.querySelector('#e3')
        const rotina1 = document.querySelector('#e1')
        const rotina4 = document.querySelector('#e4')
        rotina.style.background = null
        rotina1.style.background = null
        rotina2.style.background = null
        rotina3.style.background = null
        rotina4.style.background = `green`
       })
    }else if(valor.value == 'Daniel'||valor.value == 'daniel'){
        const info = document.querySelector('#info')
        info.innerHTML=` 
            <strong class='rotina' id='a1'>Acordar 6:00</strong> <br> 
            <strong class='rotina' id='a2'>Tomar café</strong> <br>
            <strong class='rotina' id='a3'>Arrumar o quarto</strong> <br>
            <strong class='rotina' id='a4'>Fazer cursos da Unifatecie</strong> <br>
        `
        const btn = document.querySelector('#a1')
        const btn2 = document.querySelector('#a2')
        const btn3 = document.querySelector('#a3')
        const btn4 = document.querySelector('#a4')

       btn.addEventListener('click',()=>{
        // (1) 2 3 4
        const b1 = document.querySelector('#a1')
        const b2 = document.querySelector('#a2')
        const b3 = document.querySelector('#a3')
        const b4 = document.querySelector('#a4')

        b1.style.background = 'green'
        b2.style.background = null
        b3.style.background = null
        b4.style.background = null
       })
       btn2.addEventListener('click',()=>{
        //1 (2) 3 4
        const b1 = document.querySelector('#a1')
        const b2 = document.querySelector('#a2')
        const b3 = document.querySelector('#a3')
        const b4 = document.querySelector('#a4')

        b1.style.background = null
        b2.style.background = 'green'
        b3.style.background = null
        b4.style.background = null
       })
       btn3.addEventListener('click',()=>{
        //1 2 (3) 4
        const b1 = document.querySelector('#a1')
        const b2 = document.querySelector('#a2')
        const b3 = document.querySelector('#a3')
        const b4 = document.querySelector('#a4')

        b1.style.background = null
        b2.style.background = null
        b3.style.background = 'green'
        b4.style.background = null
       })
       btn4.addEventListener('click',()=>{
        //1 2 3 (4)
        const b1 = document.querySelector('#a1')
        const b2 = document.querySelector('#a2')
        const b3 = document.querySelector('#a3')
        const b4 = document.querySelector('#a4')

        b1.style.background = null
        b2.style.background = null
        b3.style.background = null
        b4.style.background = 'green'
       })     
    }else if(valor.value == ''){
        const info = document.querySelector('#info')
        info.innerHTML=` 
            <strong>Nenhum nome inserido</strong>
        `
     }
}