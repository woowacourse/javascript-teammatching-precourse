import { checkCrewName } from '../src/validation/index.js';

test('checkCrewName()', () => {
    expect(checkCrewName('')).toBeFalsy();
    expect(checkCrewName('abcdef')).toBeFalsy();
    expect(checkCrewName('-1')).toBeFalsy();
    expect(checkCrewName(-1)).toBeFalsy();
    expect(checkCrewName('ab cd')).toBeFalsy();
    expect(checkCrewName('abd12')).toBeFalsy();

    expect(checkCrewName('abc')).toBeTruthy();
    expect(checkCrewName('abcde')).toBeTruthy();
});
