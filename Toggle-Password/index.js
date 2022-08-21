let myInput = document.getElementById('myInput'),
  btn = document.getElementById('btn');
  btn.setAttribute('data-text','show')

  btn.onclick = function(){
    if(btn.getAttribute('data-text') == 'show'){
        this.innerHTML = 'Hide'
        this.setAttribute('data-text','hide')
        myInput.setAttribute('type','text')
    }else{
        this.innerHTML = 'Show'
        this.setAttribute('data-text','show')
        myInput.setAttribute('type','password')
    }
  }
