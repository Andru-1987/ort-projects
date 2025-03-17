import { validateName, isLeapYear } from "../src/index.js";
import { describe, it } from "node:test";
import assert from "node:assert/strict";

/**
 * Correr el set de pruebas seria usando el metodo: node --test test/app.test.js
*/
describe("validateName function", () => {
    it("should return true for valid Spanish names", () => {
        assert.strictEqual(validateName("Juan Pérez"), true);
        assert.strictEqual(validateName("José García"), true);
        assert.strictEqual(validateName("María Cruz"), true);
        assert.strictEqual(validateName("Miguel Rodríguez"), true);
    });

    it("should return false for names with invalid characters", () => {
        assert.strictEqual(validateName("Carlos3 Pérez"), false);
        assert.strictEqual(validateName("María@Cruz López"), false);
        assert.strictEqual(validateName("Ana-Maria123 García"), false);
    });

    it("should return false for names that start with lowercase", () => {
        assert.strictEqual(validateName("juan Pérez"), false);
        assert.strictEqual(validateName("josé luis garcía"), false);
    });

    it("should return false for names with too few characters", () => {
        assert.strictEqual(validateName("A B"), false);
        // assert.strictEqual(validateName("Jo P"), false);
    });

});



describe("isLeapYear function", () => {
    it("should return true for years divisible by 400", () => {
        assert.strictEqual(isLeapYear(2000), true);
        assert.strictEqual(isLeapYear(1600), true);
    });

    it("should return false for years divisible by 100 but not by 400", () => {
        assert.strictEqual(isLeapYear(1900), false);
        assert.strictEqual(isLeapYear(2100), false);
    });

    it("should return true for years divisible by 4 but not by 100", () => {
        assert.strictEqual(isLeapYear(2024), true);
        assert.strictEqual(isLeapYear(2020), true);
    });

    it("should return false for years not divisible by 4", () => {
        assert.strictEqual(isLeapYear(2023), false);
        assert.strictEqual(isLeapYear(2019), false);
    });
});