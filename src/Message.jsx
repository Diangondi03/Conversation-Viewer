import React, { useEffect } from 'react'
import { getTime } from './getTime'

const Message = ({message,originalMessage}) => {
    const handleClick = () => {
        window.location.href = `#${originalMessage.id}`
        const originalMessageNode = document.querySelector(`#${originalMessage.id}`)
        originalMessageNode.focus()
    }

  return (
    <>
    <div id={message.id} className={`message ${message.bot_sender===1 ? 'bot' : 'sender'}`}>
        {message.reply_to_id!==null && originalMessage &&
         <div 
         onClick={handleClick}
         className="reply">
            {originalMessage?.message_text}
         </div>
         }
        
        <div>{message.message_text}</div>
        <p className='message-date'>{getTime(message.message_date)}</p>
    </div>
    </>
  )
}

export default Message