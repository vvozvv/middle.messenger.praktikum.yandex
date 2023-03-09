import { HTTPTransport } from './HTTPService';
// @ts-ignore
describe('HTTPS', () => {
  const http = new HTTPTransport('');
  it('Get', async () => {
    const result = await http.get('https://jsonplaceholder.typicode.com/todos');
    console.log(result)
    // const { status } = result as any;

    expect(result).toEqual(200)
  });
})
