class User{
    constructor(user){
        this.user = user;
        this.budget = 100;
        this.batsmen = [];
        this.bowlers = [];
        this.allRounders = [];
        this.wicketKeepers = [];
        this.players = [];
    }

    deduct(amount){
        if(amount > this.budget){
            throw new Error("Your budget does not allow you to bid");
        }
        this.budget -= amount;
    }

    getBudget(){
        return this.budget;
    }

    add(player){
        if(this.getTotalPlayers() > 11) {
            throw new Error("You have reached the max squad limit");
        }
        switch(player.type){
            case "Batsman":
                if(this.getTotalBatsmen() > 5){
                    throw new Error("You cannot have more than 5 batsman")
                }
                this.batsman.push(player);
            case "Bowler":
                if(this.getTotalBowlers() > 5){
                    throw new Error("You cannot have more than 5 bowlers")
                }
                this.bowlers.push(player);
            case "AllRounder":
                if(this.getTotalAllRounders() > 3){
                    throw new Error("You cannot have more than 3 AllRounders")
                }
                this.allRounders.push(player);
            case "WicketKeeper":
                if(this.getTotalWicketKeepers() > 2){
                    throw new Error("You cannot have more than 2 WicketKeepers")
                }
                this.wicketKeepers.push(player);
        }
        this.players.push(player);
    }

    getPlayers(){
        return this.players;
    }

    getTotalPlayers(){
        return this.players.length;
    }

    getBatsmen(){
        return this.batsmen;
    }

    getTotalBatsmen(){
        return this.players.length;
    }

    getBowlers(){
        return this.bowlers;
    }

    getTotalBowlers(){
        return this.bowlers.length;
    }

    getAllRounders(){
        return this.allRounders;
    }

    getTotalAllRounders(){
        return this.allRounders.length;
    }

    getWicketKeepers(){
        return this.wicketKeepers;
    }

    getTotalWicketKeepers(){
        return this.wicketKeepers.length;
    }
}

module.exports = User;