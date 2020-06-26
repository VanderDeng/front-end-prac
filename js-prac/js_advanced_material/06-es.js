const calendar = {
    currentDay : 6,
    nextDay: function(){
        setTimeout(()=> {
            this.currentDay +=1;
            console.log(this.currentDay);
            
        });
    }
};

calendar.nextDay();
