import jestConfig from '../jest.config'
import sum from './index'

describe('index', () => {
  it('adds 1 + 2 to equal 3', () => {
    //AAA 
    //arrange - настроить
    //act - запустить\вызвать
    //assert - проверить
    expect(sum(1, 2)).toBe(3)
  })
})


//unit tests - модульные тесты
//integration - интеграционные тесты
//end to end tests (e2e tests)