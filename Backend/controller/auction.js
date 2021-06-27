const User = require('./user');

class Auction{
    constructor(room){
        this.users = []
        this.currentBidder = '';
        this.currentBid = 0;
        this.timer = 500;
        this.interval = null;
        this.room = room;
    }

    bid(bidder){
        this.currentBidder = bidder; 
        this.currentBid += 1;
    }

    getCurrentBid(){
        return {
            bidder: this.currentBidder,
            bid: this.currentBid
        };
    }

    resetBid(){
        this.currentBidder = '';
        this.currentBid = 0;
    }

    resetTimer(){
        this.timer = 10;
    }

    clearTimer(){
        clearInterval(this.interval);
    }

    startInterval(){
        const currObj = this;
        this.interval = setInterval(() => {
            currObj.decrementClock();
        }, 1000);
    }

    decrementClock() {
        if(this.timer == 0){
            return;
        }
        const time = this.timer;
        const room = this.room;
        room.emit("display", {
            time
        })
        this.timer--;
        console.log(time);
    }

    addUser(user){
        if(!this.dupUser(user))
        this.users.push(new User(user));
    }
    
    dupUser(user){
        const dup = this.users.filter((u) => user == u.user)
        if(dup.length == 0){
            return false;
        }
        return true;
    }
    addPlayer(player, amount){
        const currentUser = this.users.find(({user}) => user == this.currentBidder);
        currentUser.addPlayer(player);
        currentUser.deduct(amount);
    }
}

module.exports = Auction;
