export default {
  state: {
    badge: 10
  },
  children: [
    {
      componentName: 'lefe-badge',
      state: 'badge',
      children: [
        {
          componentName: 'lefe-button',
          render: '消息'
        }
      ]
    },
    {
      componentName: 'lefe-badge',
      props: {
        dot: true
      },
      state: 'badge',
      children: [
        {
          componentName: 'lefe-button',
          props: {
            style: {
              marginLeft: '20px'
            }
          },
          render: '小红点'
        }
      ]
    }
  ]
}
