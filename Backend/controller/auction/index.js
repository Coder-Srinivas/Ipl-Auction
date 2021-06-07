const User = require('./user');

class Auction{
    constructor(){
        this.users = []
        this.currentBidder = '';
        this.currentBid = 0;
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

    addUser(user){
        this.users.push(new User(user));
    }
    
    addPlayer(player, amount){
        const currentUser = this.users.find(({user}) => user == this.currentBidder);
        currentUser.addPlayer(player);
        currentUser.deduct(amount);
    }
}

module.exports = Auction;