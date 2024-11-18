import React, { useRef, useState, useEffect } from 'react';
import '../component style/Chatbox.css';

export default function Chatbox({ chatBoxMode }) {
  const [messages, setMessages] = useState([]);
  const inputChatRef = useRef(null);
  const chatAreaRef = useRef(null);

  // Set theme mode based on chatBoxMode prop
  useEffect(() => {
    document.documentElement.setAttribute('darkTheme', chatBoxMode);
  }, [chatBoxMode]);

  // Scroll to the bottom when messages change
  useEffect(() => {
    if (chatAreaRef.current) {
      chatAreaRef.current.scrollTop = chatAreaRef.current.scrollHeight;
    }
  }, [messages]);

  // Auto-focus the input field on component load and after sending a message
  useEffect(() => {
    inputChatRef.current.focus();
  }, [messages]);

  // Focus the input when "Ctrl + M" is pressed 
  useEffect(() => {
    const handleKeyPress = (e) => {
      if ((e.key === 'm' || e.key === 'M') && e.ctrlKey) {
        e.preventDefault();
        inputChatRef.current.focus();
      }
    };

    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  // Handle sending messages locally
  const sendMessage = () => {
    const message = inputChatRef.current.value.trim();
    if (message) {
      const outgoingMessage = { text: message, type: 'sent' };
      setMessages((prevMessages) => [...prevMessages, outgoingMessage]);
      inputChatRef.current.value = '';
    }
  };

  // Handle "Enter" key press to send message
  const handleEnterPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      sendMessage();
    }
  };

  // Change border style based on input focus
  const handleInputFocus = (e) => {
    inputChatRef.current.style.border = e.target.value ? '2px solid lime' : 'none';
  };

  return (
    <div className="chat-box">
      <div className="chat-area" ref={chatAreaRef}>
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.type}`}>
            {msg.text}
          </div>
        ))}
      </div>
      <div className="text-area">
        <form className="text-area-elm" onSubmit={(e) => { e.preventDefault(); sendMessage(); }}>
          <input
            type="text"
            placeholder="Type here..."
            id="input-chat"
            ref={inputChatRef}
            onChange={handleInputFocus}
            onKeyDown={handleEnterPress}
          />
          <button type="button" className="send-msg" onClick={sendMessage}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 21.5L23 12L3 2.5L3 10L17 12L3 14L3 21.5Z" strokeWidth="1.5" strokeLinejoin="round" />
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
}
