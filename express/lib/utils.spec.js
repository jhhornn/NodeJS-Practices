const {getNewUser, mapObjectToArray} = require('./utils');

describe('mapObjectToArray()', () => {
    test('maps values to array using callbacks', () => {
        const result = mapObjectToArray({age: 30, height: 65}, (k,v) => {
            return v + 10
        })
        expect(result).toEqual([40, 75])
    })

    test('callback gets called', () => {
        const mockCb = jest.fn();
        const result = mapObjectToArray({age: 30, height: 65}, mockCb)

        expect(mockCb.mock.calls.length).toBe(2)
    })
})

describe('getNewUser', () => {
    test('it gets user', async() => {
        const user = await getNewUser(1)

        expect(user).toBeTruthy();
        expect(user.id).toBe(1)
    })

    test('no user found', async() => {
        expect.assertions(1) //One assertion must be called
        //which only happens when the try block fails or no user is found.

        try {
            const user = await getNewUser(30)
        } catch(e) {
            expect(e).toBeTruthy();
        }
    })
})