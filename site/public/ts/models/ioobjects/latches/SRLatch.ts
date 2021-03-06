import {Latch} from "./Latch";

export class SRLatch extends Latch {

	public constructor() {
		super(3);
		this.getInputPort(0).setName("R");
		this.getInputPort(1).setName(">");
		this.getInputPort(2).setName("S");
	}

	// @Override
	public activate() {
		this.clock = this.inputs[1].getIsOn();
		const set = this.inputs[2].getIsOn();
		const reset = this.inputs[0].getIsOn();
		if (this.clock) {
			if (set && reset) {
				// undefined behavior
			} else if (set)
				this.state = true;
			else if (reset)
				this.state = false;
		}

		super.activate(this.state, 1);
		super.activate(!this.state, 0);
	}

	public getDisplayName(): string {
		return "SR Latch";
	}

	public getXMLName(): string {
		return "srl";
	}
}
