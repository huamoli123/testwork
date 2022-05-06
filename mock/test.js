const list = [
  {
    nick: 'Allen1',
    phone: 23141233421,
    name: 'hahahahahaha',
    subject: '数学',
    job: 'aaaa',
    year: 22,
    updateTime: '2022-2-1'
  },
  {
    nick: 'Allen2',
    phone: 23141233421,
    name: 'hahahahahaha',
    subject: '数学',
    job: 'aaaa',
    year: 22,
    updateTime: '2022-2-1'
  },
  {
    nick: 'Allen3',
    phone: 23141233421,
    name: 'hahahahahaha',
    subject: '数学',
    job: 'aaaa',
    year: 22,
    updateTime: '2022-2-1'
  }
]
module.exports = [
  {
    url: '/vue-element-admin/test/list',
    type: 'get',
    response: config => {
      return {
        code: 20000,
        data: {
          total: list.length,
          items: list
        }
      }
    }
  }
]
