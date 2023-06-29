import { Input } from "./components/Input"
import "./style.css"


export const App = () => {
  return (
    <div className="container">
      <h1>Reusable Component</h1>
        <Input  title="<Input />"/>
        <Input  title="<Input error />" variant="error"/>
        <Input  title="<Input disabled />" disabled/>
        <Input  title="<Input  helperText />" helperText="Some interesting text"/>
        <Input  title="<Input Helpertext Error/>" variant="error" helperText="Some interesting text"/>
        <Input  title="<Input startIcon/>" startIcon="call"/>
        <Input  title="<Input endIcon/>" endIcon="lock"/>
        <Input  title="<Input placeholder=`text` />" value="Text"/>
        <Input  title="<Input size=sm/>" size="sm"/>
        <Input  title="<Input size=md/>" size="md"/>
        <Input  title="<Input fullWidth/>" fullWidth="fullWidth"/>
        
    </div>
  )
}


