import Mock from 'mockjs'
export default {
  getorderData: () => {
    return {
      code: 20000,
      data: {
        orderData: [
          {
            icon: 'success',
            num: Mock.Random.float(1000, 10000, 0, 2),
            txt: '今日支付订单',
            color: '#2ec7c9'
          },
          {
            icon: 'success',
            num: Mock.Random.float(1000, 10000, 0, 2),
            txt: '今日支付订单',
            color: '#2ec7c9'
          },
          {
            icon: 'success',
            num: Mock.Random.float(1000, 10000, 0, 2),
            txt: '今日支付订单',
            color: '#2ec7c9'
          },
          {
            icon: 'success',
            num: Mock.Random.float(1000, 10000, 0, 2),
            txt: '今日支付订单',
            color: '#2ec7c9'
          },
          {
            icon: 'success',
            num: Mock.Random.float(1000, 10000, 0, 2),
            txt: '今日支付订单',
            color: '#2ec7c9'
          },
          {
            icon: 'success',
            num: Mock.Random.float(1000, 10000, 0, 2),
            txt: '今日支付订单',
            color: '#2ec7c9'
          }
        ]
      }
    }
  }
}
