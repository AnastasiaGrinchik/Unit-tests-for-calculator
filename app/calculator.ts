class Calculator {
	public add(numberOne: number, numberTwo: number): number {
		if (typeof numberOne !== 'number' || typeof numberTwo !== 'number') {
			throw new Error('The entered parameters are not numbers');
		} else {
			return numberOne + numberTwo;
		}
	}

	public multiply(numberOne: number, numberTwo: number): number {
		if (typeof numberOne !== 'number' || typeof numberTwo !== 'number') {
			throw new Error('The entered parameters are not numbers');
		} else {
			return numberOne * numberTwo;
		}
	}

	public subtract(numberOne: number, numberTwo: number): number {
		if (typeof numberOne !== 'number' || typeof numberTwo !== 'number') {
			throw new Error('The entered parameters are not numbers');
		} else {
			return numberOne - numberTwo;
		}
	}

	public devide(numberOne: number, numberTwo: number): number {
		if (typeof numberOne !== 'number' || typeof numberTwo !== 'number') {
			throw new Error('The entered parameters are not numbers');
		} else {
			return numberOne / numberTwo;
		}
	}

	public getPercentageFromNumber(number: number, percentage: number): number {
		if (typeof number !== 'number' || typeof percentage !== 'number') {
			throw new Error('The entered parameters are not numbers');
		} else {
			return (number * percentage) / 100;
		}
	}

	public addPercentageToNumber(number: number, percentage: number): number {
		if (typeof number !== 'number' || typeof percentage !== 'number') {
			throw new Error('The entered parameters are not numbers');
		} else {
			return number + this.getPercentageFromNumber(number, percentage);
		}
	}

	public subtractPercentageToNumber(number: number, percentage: number): number {
		if (typeof number !== 'number' || typeof percentage !== 'number') {
			throw new Error('The entered parameters are not numbers');
		} else {
			return number - this.getPercentageFromNumber(number, percentage);
		}
	}
}

export default Calculator;
