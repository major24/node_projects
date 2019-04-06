import { getUsersFromAPI } from '@/services/userService'

describe('UserService.js', () => {
  it('Should retrieve correct contents from axios mock service', () => {
    expect(getUsersFromAPI).toBeTruthy()

    const expected = { 'id': 1, 'name': 'Steve Jonathan (mock)', 'username': 'sjon', 'email': 'Sincere@april.biz', 'address': { 'street': 'Kulas Light', 'suite': 'Apt. 556', 'city': 'Gwenborough', 'zipcode': '92998-3874', 'geo': { 'lat': '-37.3159', 'lng': '81.1496' } }, 'phone': '1-770-736-8031 x56442', 'website': 'hildegard.org', 'company': { 'name': 'Romaguera-Crona', 'catchPhrase': 'Multi-layered client-server neural-net', 'bs': 'harness real-time e-markets' } }

    getUsersFromAPI()
      .then((resp) => {
        expect(resp.data[0]).toEqual(expected)
      })
  })
})
