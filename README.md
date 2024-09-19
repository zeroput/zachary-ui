## How to use it

in your react frontend project

```bash
npm i zachary-ui
```

## Use the component in your project

```tsx
import './App.css'
import { Button } from 'zachary-ui'
function App() {

  const clickMe = () => {
    alert('clicked')
  }

  return (
    <>
      <Button
        title='zachary ui button'
        variant="contained" 
        onClick={clickMe}      
        ></Button>
    </>
  )
}

export default App
```


## How to develop locallly

```bash
# fork the repo 
git clone https://github.com/zeroput/zachary-ui.git
cd zachary-ui
# run in your dev env
npm install
npm run storybook
```
visit `http://localhost:6006/`

## Enjoy it

