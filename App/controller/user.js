class User {
  constructor(user) {
    this.user = user;
    this.budget = 100;
    this.batsmen = [];
    this.bowlers = [];
    this.allRounders = [];
    this.wicketKeepers = [];
    this.players = [];
  }

  deduct(amount) {
    if (amount > this.budget) {
      throw new Error("Your budget does not allow you to bid");
    }
    this.budget -= amount;
  }

  getBudget() {
    return this.budget;
  }

  addPlayer(p, amount) {
    const player = {
      player: p,
      amount,
    };
    switch (player.type) {
      case "Batsman":
        this.batsman.push(player);
      case "Bowler":
        this.bowlers.push(player);
      case "AllRounder":
        this.allRounders.push(player);
      case "WicketKeeper":
        this.wicketKeepers.push(player);
    }
    this.players.push(player);
  }

  getPlayers() {
    return this.players;
  }

  getTotalPlayers() {
    return this.players.length;
  }

  getBatsmen() {
    return this.batsmen;
  }

  getTotalBatsmen() {
    return this.players.length;
  }

  getBowlers() {
    return this.bowlers;
  }

  getTotalBowlers() {
    return this.bowlers.length;
  }

  getAllRounders() {
    return this.allRounders;
  }

  getTotalAllRounders() {
    return this.allRounders.length;
  }

  getWicketKeepers() {
    return this.wicketKeepers;
  }

  getTotalWicketKeepers() {
    return this.wicketKeepers.length;
  }
}

module.exports = User;
