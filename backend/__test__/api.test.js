const request = require('supertest');
const app = require("../index");

describe('GET APIs', () => {
    test('It get all users', async () => {
        let result = await request(app).get('/users')
        expect(result.body.length).toBeGreaterThanOrEqual(0)
        expect(result.statusCode).toBe(200)
    })
})
describe('POST APIs', () => {
    test('It should create user', async () => {
        let result = await request(app).post('/create-user')
            .send({
                username: "Abid",
                password: "1234"
            })

        expect(result.body).toEqual({
            username: "Abid",
            password: "1234"
        })
        expect(result.statusCode).toBe(200);

    })
})