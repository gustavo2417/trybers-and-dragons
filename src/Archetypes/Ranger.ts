import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Ranger extends Archetype {
  private _energyType: EnergyType;
  static count = 0;

  constructor(name: string) {
    super(name);

    this._energyType = 'stamina';
    Ranger.count += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static override createdArchetypeInstances(): number {
    return this.count;
  }
}

export default Ranger;