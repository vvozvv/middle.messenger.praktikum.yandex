import {HTTPTransport} from './HTTPService';
import {METHODS} from "./HTTP.constants";

describe('HTTPS', () => {
  const http = new HTTPTransport('');
  it('Get', async () => {
    const result = await http.publicRequest('https://jsonplaceholder.typicode.com/todos', {
      method: METHODS.GET
    }, 0);
    const { status } = result;

    expect(status).toEqual(200)
  });
})
