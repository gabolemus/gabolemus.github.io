// This file contains general utility functions.

import { isEqual } from "lodash";

/**
 * Checks if 2 objects are equal. AKA checks if all the key-value pairs of the
 * objects are equal.
 * @param objA First object.
 * @param objB Second object.
 * @returns true if the objects are equal, false otherwise.
 */
export const areObjectsEqual = isEqual;

/**
 * Checks if 2 arrays of objects are equal. AKA checks if all the key-value pairs
 * of the objects in the arrays are equal.
 * @param arrA First array.
 * @param arrB Second array.
 * @returns true if the arrays are equal, false otherwise.
 */
export const areArraysEqual = <T extends Record<string, unknown>>(
  arrA: Array<T>,
  arrB: Array<T>,
): boolean => {
  if (arrA.length !== arrB.length) {
    return false;
  }

  for (const [index, value] of arrA.entries()) {
    if (!areObjectsEqual(value, arrB[index])) {
      return false;
    }
  }

  return true;
};

/** Determines whether the screen is mobile */
export const isMobileScreen = () => window.innerWidth <= 768;
