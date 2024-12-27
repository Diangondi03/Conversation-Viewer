
import './App.css'
import axios from 'axios'
import "./App.css"
import { useEffect, useState } from 'react'
import Message from './Message'

function App() {
  const [messages, setMessages] = useState([])
  const [previousDate, setPreviousDate] = useState(null)

  useEffect(()=>{
    const fetchMessages = async () => {
      const res = (await axios.get("https://www.backup-backend.readychatai.com/messages_json")).data
      setMessages(res)
    }
    fetchMessages()
  },[])

  // Function to find the original message by its ID
  function findOriginalMessage(messageId) {
      return messageId ? messages.find(message => message.id === messageId) : null;
  }
  const setDateSeparator = (index) => {
    const date = new Date(messages[index]?.message_date);
    const messageDateString = `${date.getMonth()}/${date.getDate()}/${date.getFullYear()}`;

    const previousDate = index > 0 ? new Date(messages[index-1]?.message_date) : null;
    const previousMessageDateString = previousDate ? `${previousDate.getMonth()}/${previousDate.getDate()}/${previousDate.getFullYear()}` : null;

    if (messageDateString !== previousMessageDateString) {
      return <div className="date-separator">{messageDateString}</div>
    }
  }

  return (
    <>  
      <h1>Conversation Viewer</h1>
      <div className="container">
        <div id="message-list">

          {messages.map((message, index) => {
            return(
            <>
              {setDateSeparator(index)}
              <Message 
              message={message}
              key={index} 
              originalMessage={findOriginalMessage(message?.reply_to_id)}
              />
            </>
            )
          }
          )}


        </div>
      </div>
    </> 
  )
}

export default App
