import { defineComponent, ref } from 'vue';
import Testi from './Testi'

const Testi2 = defineComponent({
  props: {
    greeting: String
  },
  setup(props) {
    return () => (
      <div>
        { props.greeting } :D
      </div>
    )
  }
})

export default defineComponent({
  name: 'App',
  setup() {
    const name = ref("kakka")
    const age = ref(69)
    const onClick = () => { 
      console.log(age.value)
      age.value++
    }

    const words = [
      'Höö',
      'Haa',
      'Lol',
      'HEHE'
    ]

    const rows = words.map(w => Testi(w))
    console.log(rows[0])

    const ret = () => <div>
      <h1>{name.value}</h1>
      <h2>{ rows }</h2>
      -------------
      { Testi2 }
      <Testi2 greeting="heee" />
    </div>

    return ret
  }
})