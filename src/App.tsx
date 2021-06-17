import { defineComponent, ref } from 'vue';
import { useMouse } from '@vueuse/core';
import Testi from './Testi'

export default defineComponent({
  name: 'App',
  setup() {
    const {x, y} = useMouse()
    const name = ref("kakka")
    const age = ref(69)
    const onClick = () => { 
      console.log(age.value)
      age.value++
    }

    const juttu = () => <div>
      <button onClick={() => age.value++}>inc</button>
      <div>{age.value}</div>
      { Testi(age.value.toString()) }
    </div>

    const mouseInfo = () => (
      <>
        <div>x: { x.value }</div>
        <div>y: { y.value }</div>
      </>
    )

    const ret = () => <div>
      <h1>{name.value}</h1>
      <h2>{ juttu() }</h2>
      <mouseInfo />
    </div>

    return ret
  }
})