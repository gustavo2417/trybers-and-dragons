import Battle from './Battle';
import Fighter, { SimpleFighter } from '../Fighter';
import Character from '../Character';

class PVE extends Battle {
  private _Player: Character | Fighter;
  private _Monsters: (Fighter | SimpleFighter)[];

  constructor(
    player: Fighter,
    Monsters: SimpleFighter[],
  ) {
    super(player);

    this._Player = player;
    this._Monsters = Monsters;
  }

  fight(): number {
    this._Monsters.forEach((M) => {
      while (this._Player.lifePoints > 0 && M.lifePoints > 0) {
        this._Player.attack(M);
        M.attack(this._Player);
      }
    });
    return super.fight();
  }
}

export default PVE;
