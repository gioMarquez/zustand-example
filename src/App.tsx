import { create } from 'zustand'

const useStore = create(set => ({
  count: 1,
  increment: () => set(
    state => ({ count: state.count + 1 })
  ),
}))

const App = () => {
  
  const { count , increment } = useStore();



  return (
   <div>
    <span>{count}</span>
    <button onClick={increment}>Incrementar</button>
   </div>
  )
}

export default App