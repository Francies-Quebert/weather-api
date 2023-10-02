import { getAMPM } from "./lib";


describe('test function in lib file', () => { 

    it(`should return AM/ PM according to the time`, () => {
        expect(getAMPM('13:00')).toEqual('13:00 PM');
        expect(getAMPM('12:00')).toEqual('12:00 PM');
        expect(getAMPM('11:00')).toEqual('11:00 AM');
        expect(getAMPM('00:00')).toEqual('00:00 AM');
    })
 })