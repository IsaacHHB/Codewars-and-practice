function Stopwatch(){
    let startTime = 0
    let endTime = 0
    let running = false
    let duration = 0

    this.start = function() {
        //start the timer if not already started
        if(running === false){
            startTime = Date.now()
            running = true
        }else{
            //error message for timer already started
            console.error('ALREADY RUNNING HOE')
        }              
    }
    this.stop = function(){
        if(running === true){
            endTime = Date.now()
            duration = endTime - startTime 
            running = false
        }else{
            console.error('ALREADY STOPPED HOE')
        }
    }
    this.reset = function(){
        //reset duration to 0
        duration = 0
        startTime = 0
        endTime = 0
        running = false
    }
    Object.defineProperty(this, 'duration', {
        get: function(){
            return duration / 1000
        }
    });
}
let myStopwatch = new Stopwatch()
