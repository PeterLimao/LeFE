const queue: Function[] = []
let isFlushing = false

export function nextTickScheduler(job: Function) {
  if (!queue.includes(job)) queue.push(job)

  if (!isFlushing) {
    isFlushing = true
    Promise.resolve().then(() => {
      let fn
      while ((fn = queue.shift())) {
        fn()
      }
      isFlushing = false
    })
  }
}
