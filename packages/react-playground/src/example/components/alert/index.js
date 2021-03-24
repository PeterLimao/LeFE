export default {
  state: {},
  methods: {
    close() {
      console.log('..1')

      window.alert('close')
    }
  },
  children: [
    {
      componentName: 'lefe-alert',
      props: {
        message: '123',
        description: '122222'
      }
    },
    {
      componentName: 'lefe-alert',
      children: [
        {
          componentName: 'lefe-html',
          render: 'lksfjlskdf'
        }
      ],
      events: {
        close: 'close'
      }
    }
  ]
}
