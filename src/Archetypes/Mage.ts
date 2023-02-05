import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Mage extends Archetype {
  private _energyType: EnergyType;
  static count = 0;

  constructor(name: string) {
    super(name);

    this._energyType = 'mana';
    Mage.count += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static override createdArchetypeInstances(): number {
    return this.count;
  }
}

export default Mage;