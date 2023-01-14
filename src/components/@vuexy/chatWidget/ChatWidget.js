import React from "react"
import ReactDOM from "react-dom"
import PerfectScrollbar from "react-perfect-scrollbar"
import {
  Input,
  Button,
  Card,
  CardBody,
  CardHeader,
  CardTitle
} from "reactstrap"
import { Send } from "react-feather"
class ChatWidget extends React.Component {
  state = {
    msg: ""
  }

  componentDidMount() {
    this.scrollToBottom()
  }

  componentDidUpdate() {
    this.scrollToBottom()
  }

  scrollToBottom = () => {
    const chatContainer = ReactDOM.findDOMNode(this.chatArea)
    chatContainer.scrollTop = chatContainer.scrollHeight
  }

  render() {
    const { msg } = this.state
    return (
      <Card className="chat-application chat-widget">
        <CardHeader>
          <CardTitle>Chat</CardTitle>
        </CardHeader>
        <div className="chat-app-window">
          <PerfectScrollbar
            className="user-chats widget-user-chat"
            options={{
              wheelPropagation: false
            }}
            ref={el => {
              this.chatArea = el
            }}
          >
          </PerfectScrollbar>
          <div className="chat-footer">
            <CardBody className="d-flex justify-content-around">
              <Input
                className="mr-50"
                placeholder="Type your message..."
                value={msg}
                onChange={e =>
                  this.setState({
                    msg: e.target.value
                  })
                }
              />
              <Button
                className="btn-icon"
                color="primary"
                onClick={() => this.setState({ msg: "" })}
              >
                <Send size={15} />
              </Button>
            </CardBody>
          </div>
        </div>
      </Card>
    )
  }
}

export default ChatWidget
