import Character from '../Character';
import Battle from './Battle';
import Fighter from '../Fighter';

class PVP extends Battle {
  private _Character1: Character | Fighter;
  private _Character2: Character | Fighter;

  constructor(
    Character1: Character | Fighter,
    Character2: Character | Fighter,
  ) {
    super(Character1);

    this._Character1 = Character1;
    this._Character2 = Character2;
  }

  fight(): number {
    while (this._Character1.lifePoints > 0 && this._Character2.lifePoints > 0) {
      this._Character1.attack(this._Character2);
      this._Character2.attack(this._Character1);
    }
    return super.fight();
  }
}

export default PVP;