const corrAns = ['B','B','B','B'];
const form = document.querySelector('.quiz-form');
form.addEventListener('submit', e =>{
    e.preventDefault();

    let score=0;
    const userAns = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];
    
    userAns.forEach((ans,index) => {
        if(ans===corrAns[index]){
            score+=25;
        }
    });

    //console.log(score);
    scrollTo(0,0);
    const hidcon = document.querySelector('div.result');
   // hidcon.querySelector('span').textContent = `${score}%`;
    hidcon.classList.remove('d-none');
    let x=0;
    const val = document.querySelector('span.percent');
    console.log(val);
    const timer = setInterval(() => {
        
        hidcon.querySelector('span').textContent = `${x}%`;
        if(x===score){
            clearInterval(timer);
        }
        else{
            x++;
        }
        
       
       if(x>=0 && x<25){
           val.classList.add('class','text-danger');
           //val.setAttribute('class','text-danger');
        }
        else if(x>=25 && x<50){
            val.classList.remove('class','text-danger');
            val.classList.add('class','text-warning');
          // val.setAttribute('class','text-warning');
        }
        else if(x>=50 && x<75){
            val.classList.remove('class','text-warning');
            val.classList.add('class','text-primary');
         // val.setAttribute('class','text-primary');
        }
        else if(x>=75 && x<100){
            val.classList.remove('class','text-primary');
            val.classList.add('class','text-info');
          // val.setAttribute('class','text-info');
        }
        else{
            val.classList.remove('class','text-info');
            val.classList.add('class','text-success');
           // val.setAttribute('class','text-success');
        }
    }, 50);
});