import { expect } from 'chai';
import Calculator from '../../app/calculator';

const arrForAdd = [
	{ arg1: 2, arg2: 8, result: 10 },
	{ arg1: 0.5, arg2: 0.6, result: 1.1 },
	{ arg1: 10, arg2: 2.5, result: 12.5 },
	{ arg1: -5, arg2: -5, result: -10 },
];

const arrForMultiply = [
	{ arg1: 20, arg2: 5, result: 100 },
	{ arg1: 0.5, arg2: 0.5, result: 0.25 },
	{ arg1: 10, arg2: 2.5, result: 25 },
	{ arg1: -5, arg2: -3, result: 15 },
];

const arrForSubtract = [
	{ arg1: 10, arg2: 5, result: 5 },
	{ arg1: 0.5, arg2: 0.1, result: 0.4 },
	{ arg1: 10, arg2: 1.5, result: 8.5 },
	{ arg1: -55, arg2: -10, result: -45 },
];

const arrForDevide = [
	{ arg1: 20, arg2: 5, result: 4 },
	{ arg1: 0.65, arg2: 0.5, result: 1.3 },
	{ arg1: 10, arg2: 2.5, result: 4 },
	{ arg1: -52, arg2: -2, result: 26 },
];

const arrForPercentageFromNumber = [
	{ arg1: 20, arg2: 5, result: 1 },
	{ arg1: 876, arg2: 15, result: 131.4 },
	{ arg1: 0.85, arg2: 5, result: 0.0425 },
	{ arg1: 98, arg2: 96, result: 94.08 },
];

const arrForAddPercentageToNumber = [
	{ arg1: 33, arg2: 7, result: 35.31 },
	{ arg1: 704, arg2: 76, result: 1239.04 },
	{ arg1: -399.42, arg2: 6, result: -423.3852 },
	{ arg1: 900, arg2: 128, result: 2052 },
];

const arrForSubtractPercentageToNumber = [
	{ arg1: 200, arg2: 56, result: 88 },
	{ arg1: 703, arg2: 3, result: 681.91 },
	{ arg1: -300, arg2: 6, result: -282 },
	{ arg1: 9402, arg2: 71, result: 2726.58 },
];

describe('Calculator has metods:', function () {
	let calculator;
	before(function () {
		calculator = new Calculator();
	});

	describe('Function add for Calculator', function () {
		arrForAdd.forEach(({ arg1, arg2, result }) => {
			it(`should return ${result} when arg1 = ${arg1} and arg2 = ${arg2}`, function () {
				expect(calculator.add(arg1, arg2)).to.be.equal(result);
			});
		});
		it('should return the error message when at least one of the arguments is not of type "number"', function () {
			expect(() => calculator.add(1, '2')).to.throw('The entered parameters are not numbers');
		});
	});

	describe('Function multiply for Calculator', function () {
		let calculator;
		before(function () {
			calculator = new Calculator();
		});
		arrForMultiply.forEach(({ arg1, arg2, result }) => {
			it(`should return ${result} when arg1 = ${arg1} and arg2 = ${arg2}`, function () {
				expect(calculator.multiply(arg1, arg2)).to.be.equal(result);
			});
		});
		it('should return the error message when at least one of the arguments is not of type "number"', function () {
			expect(() => calculator.multiply(1, '2')).to.throw('The entered parameters are not numbers');
		});
	});
	describe('Function subtract for Calculator', function () {
		arrForSubtract.forEach(({ arg1, arg2, result }) => {
			it(`should return ${result} when arg1 = ${arg1} and arg2 = ${arg2}`, function () {
				expect(calculator.subtract(arg1, arg2)).to.be.equal(result);
			});
		});
		it('should return the error message when at least one of the arguments is not of type "number"', function () {
			expect(() => calculator.subtract(1, '2')).to.throw('The entered parameters are not numbers');
		});
	});

	describe('Function devide for Calculator', function () {
		arrForDevide.forEach(({ arg1, arg2, result }) => {
			it(`should return ${result} when arg1 = ${arg1} and arg2 = ${arg2}`, function () {
				expect(calculator.devide(arg1, arg2)).to.be.equal(result);
			});
		});
		it('should return the error message when at least one of the arguments is not of type "number"', function () {
			expect(() => calculator.devide(1, '2')).to.throw('The entered parameters are not numbers');
		});
	});

	describe('Function getPercentageFromNumber for Calculator', function () {
		arrForPercentageFromNumber.forEach(({ arg1, arg2, result }) => {
			it(`should return ${result} when arg1 = ${arg1} and arg2 = ${arg2}`, function () {
				expect(calculator.getPercentageFromNumber(arg1, arg2)).to.be.equal(result);
			});
		});
		it('should return the error message when at least one of the arguments is not of type "number"', function () {
			expect(() => calculator.getPercentageFromNumber(1, '2')).to.throw('The entered parameters are not numbers');
		});
	});

	describe('Function addPercentageToNumber for Calculator', function () {
		arrForAddPercentageToNumber.forEach(({ arg1, arg2, result }) => {
			it(`should return ${result} when arg1 = ${arg1} and arg2 = ${arg2}`, function () {
				expect(calculator.addPercentageToNumber(arg1, arg2)).to.be.equal(result);
			});
		});
		it('should return the error message when at least one of the arguments is not of type "number"', function () {
			expect(() => calculator.addPercentageToNumber(1, '2')).to.throw('The entered parameters are not numbers');
		});
	});

	describe('Function addPercentageToNumber for Calculator', function () {
		arrForSubtractPercentageToNumber.forEach(({ arg1, arg2, result }) => {
			it(`should return ${result} when arg1 = ${arg1} and arg2 = ${arg2}`, function () {
				expect(calculator.subtractPercentageToNumber(arg1, arg2)).to.be.equal(result);
			});
		});
		it('should return the error message when at least one of the arguments is not of type "number"', function () {
			expect(() => calculator.subtractPercentageToNumber(1, '2')).to.throw('The entered parameters are not numbers');
		});
	});
});
