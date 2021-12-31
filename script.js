function play(){
    
    document.getElementById('s-com').style.display='';    
    document.getElementById('p-com').style.display='';
    document.getElementById('r-com').style.display='';
    document.getElementById('s-me').style.display='';    
    document.getElementById('p-me').style.display='';
    document.getElementById('r-me').style.display='';
}
function gen(){
    num=Math.floor(Math.random()*3)
    if(num==1){
        document.getElementById('s-com').style.display='none';
        document.getElementById('r-com').style.display='none';
        document.getElementById('p-com').style.display='';
    }else if(num==0){
        document.getElementById('s-com').style.display='none';
        document.getElementById('p-com').style.display='none';
        document.getElementById('r-com').style.display='';
    }else if(num==2){
        
        document.getElementById('p-com').style.display='none';
        document.getElementById('r-com').style.display='none';
        document.getElementById('s-com').style.display='';
    }
}



function p(){
    document.getElementById('s-me').style.display='none';
    document.getElementById('r-me').style.display='none';
    gen()
    if(num==1){
        document.getElementById('show').textContent='Draw'
        document.getElementById('show').style.color='black'
    }else if(num==2){
        document.getElementById('show').textContent='lost'
        document.getElementById('show').style.color='red'
    }else if(num==0){
        document.getElementById('show').style.color='green'
        document.getElementById('show').textContent='You win'
    }    
}
function s(){
    document.getElementById('r-me').style.display='none';
    document.getElementById('p-me').style.display='none';
    gen()
    if(num==2){
        document.getElementById('show').textContent='Draw'
        document.getElementById('show').style.color='black'
    }else if(num==0){
        document.getElementById('show').textContent='lost'
        document.getElementById('show').style.color='red'
    }else if(num==1){
        document.getElementById('show').textContent='You win'
        document.getElementById('show').style.color='green'
    }    
}
function r(){
    document.getElementById('p-me').style.display='none';
    document.getElementById('s-me').style.display='none';
    gen()
    if(num==0){
        document.getElementById('show').textContent='Draw'
        document.getElementById('show').style.color='black'
    }else if(num==1){
        document.getElementById('show').textContent='lost'
        document.getElementById('show').style.color='red'
    }else if(num==2){
        document.getElementById('show').textContent='You win'
        document.getElementById('show').style.color='green'
    }    
}