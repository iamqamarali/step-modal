(function(){
  
  var StepModal = function(opts){
    this.opts = opts
    this.modal = document.querySelector(opts.id)
    this.steps = Array.from(this.modal.querySelectorAll('.step'))
    this.closeBtn = this.modal.querySelector('.close-btn')
    this.overlay = this.modal.querySelector('.step-modal-overlay')
    this.index = 0;

    this.overlay.addEventListener('click', this.close.bind(this))
    this.closeBtn.addEventListener('click', this.close.bind(this))
    
    if(typeof this.opts.onInit  == 'function'){
      this.opts.onInit.call(this)
    }
  }
  
  
  StepModal.prototype.next = function(){
     if(this.index + 1 < this.steps.length){
       this.steps[this.index].classList.remove('active')
       this.steps[this.index].classList.add('previous')
       this.index++
       this.steps[this.index].classList.add('active')
     }
      else{
        if(typeof this.opts.onFinish  == 'function'){
          this.opts.onFinish.call(this)
        }
      }
  }  
  
  
  StepModal.prototype.close =  function(){
    this.modal.classList.remove('open')
    var stepModal = this
    setTimeout(function(){
      stepModal.index = 0
      stepModal.steps.forEach(function(step){
        step.classList.remove('previous')
        step.classList.remove('active')
      })
      stepModal.steps[0].classList.add('active')

    }, 500);
  }
  
  StepModal.prototype.open = function(){
    this.modal.classList.add('open')
  }
  
   window.StepModal = StepModal;
  
})()


