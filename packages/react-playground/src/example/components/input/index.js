export default {
  state: {
    value: 1
  },
  methods: {
    onBlur() {
      console.log('....blur')
    },
    onFocus() {
      console.log('....focus')
    }
  },
  children: [
    {
      componentName: 'lefe-html',
      render: ({ value }) => value
    },
    {
      componentName: 'lefe-input',
      state: 'value',
      events: {
        blur: 'onBlur',
        focus: 'onFocus'
      }
    }
  ]
}
