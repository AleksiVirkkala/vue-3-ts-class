import { defineComponent, ref } from 'vue';
import Testi from './Testi'
import TestiSub from './TestiSub'

export default defineComponent({
  name: 'App',
  setup() {
    const testi = new Testi()
    const testiSub = new TestiSub(testi)

    ;(window as any).testi = testi

    return () => (
      <div>{ testi.render() } :D</div>
    )
  }
})