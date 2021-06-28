import "./App.css"
import Button from "@material-ui/core/Button"
import SaveIcon from "@material-ui/icons/Save"
import SignUpIn from "./components/SignUpIn"

function App() {
  return (
    <div className="App">
      App
      {/* <Button
        startIcon={<SaveIcon></SaveIcon>}
        endIcon={<SaveIcon></SaveIcon>}
        variant="contained"
        size="small"
        style={{ fontSize: 50 }}
        href="#"
        color="primary"
      >
        material UI
      </Button> */}
      <SignUpIn></SignUpIn>
    </div>
  )
}

export default App
