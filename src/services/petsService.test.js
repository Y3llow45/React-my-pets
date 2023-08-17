import * as petsService from './petsService';
import {setupServer} from 'msw/node';
import {rest} from 'msw';

const server = setupServer(
    rest.get('http://localhost:5000/pets', (req, res, ctx) => {
        return res(ctx.json([{likes: '10'}]));
    })
)

beforeAll(() => {
    server.listen();
})

afterEach(() => server.resetHandlers());

afterAll(() => server.close());

describe('pet service', () => {
    describe('Get all', () => {
        it('Should convert likes to numbers when received', (done) => {
            petsService.getAll()
            .then(result => {
                expect(typeof(result[0].likes)).toBe('number');
                expect(true).toBe(false);
                done();
            })
        })
    })
})