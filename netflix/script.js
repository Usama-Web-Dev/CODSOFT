const button = document.querySelectorAll('.question');
const icons = document.querySelectorAll('.question i');
const ans = document.querySelectorAll('.ans');

button.forEach((btn, index)=>{
    btn.addEventListener('click', ()=>{
        ans.forEach((e,i)=>{
            if(i === index){
                e.classList.toggle('active')
              
            }else{
                e.classList.remove('active')
            }
        })
        icons.forEach((icon,i)=>{
          if(i === index){
            icon.classList.toggle('cross');
          }else{
            icon.classList.remove('cross');
          }
        })
    })
})