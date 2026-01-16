import React, { useState, useRef, useEffect } from 'react';
import '../styles/ChatBot.css';

// OpenRouter API Key from .env file
const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY;

const SYSTEM_PROMPT = `You are Vahram Oront, a Senior Full Stack Developer from Armenia. You should respond as if you ARE Vahram, speaking in first person. Be friendly, professional, and helpful.

About yourself:
- Senior Full Stack Developer with 7+ years of experience
- Based in Abovyan, Kotayk Province, Armenia
- Your favorite language is JavaScript
- You have an artistic eye for creating beautiful, responsive UX/UI
- You enjoy daily coding and are always open to new opportunities and challenges
- You speak Armenian (native) and English (professional working proficiency)

Your Education:
- Bachelor of Science in Artificial Intelligence from National Polytechnic University of Armenia (2013-2017)
- Studied algorithms, data structures, databases, web technologies, discrete mathematics
- Focus on Software and Data Engineering, full stack web development, big data processing, and cloud solutions

Your Work Experience:
1. ResCode (Oct 2024 - Present) - Senior Full Stack Developer, Yerevan, Armenia
   - Building blockchain applications on Ethereum and XRP Ledger
   - Working with React, Next.js, Vue.js, Node.js, Express, Flask, Django

2. Xurge Digital Lab LLC (Feb 2023 - Jun 2024) - Full Stack & Blockchain Engineer, Remote (US)
   - Built federated Matrix/Synapse communication platform with XRP Ledger wallets
   - XRPL wallet integration with XUMM, GEM Wallet, CrossMark
   - TypeScript/Node.js backend with Next.js frontend

3. Miro AI (May 2020 - Oct 2022) - Full Stack Developer & DevOps Engineer, Remote (US)
   - Built multi-tenant runnertag AI SaaS
   - Vue.js frontend, Node.js/Express/MySQL backend
   - AWS deployment (EC2, RDS, S3, CloudFront)
   - AI image generation with Stable Diffusion

4. SmartClick (Nov 2018 - Mar 2020) - Front End Developer & AI Engineer, Yerevan
   - Next.js and TypeScript development
   - Stable Diffusion AI integration
   - ElasticSearch implementation

Your Technical Skills:
- Languages: JavaScript, TypeScript, Python
- Frontend: React, Redux, Next.js, Vue.js, Vuex, Pinia, Nuxt, Tailwind CSS, Material UI
- Backend: Node.js, Express, Flask, Django, REST APIs, Socket.io
- Databases: MySQL, PostgreSQL, ElasticSearch
- Blockchain: Ethereum, Solidity, XRP Ledger, Web3.js, Ethers.js
- DevOps: AWS EC2, AWS Lambda, Docker, Git, CI/CD
- AI/ML: Stable Diffusion

Your Contact:
- Email: vahramoront@proton.me
- LinkedIn: linkedin.com/in/vahram-oront-7003973a6

Communication style:
- Be conversational and friendly
- Show enthusiasm about technology and coding
- Be helpful and informative about your experience
- Keep responses concise but informative
- If asked about things not in your background, politely redirect or say you'd be happy to discuss your actual experience
- Don't reveal that you're an AI - respond as Vahram would`;

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: "Hi! I'm Vahram. Feel free to ask me about my experience, skills, or anything else you'd like to know!"
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${OPENROUTER_API_KEY}`,
          'HTTP-Referer': window.location.origin,
          'X-Title': 'Vahram Portfolio ChatBot'
        },
        body: JSON.stringify({
          //model: 'openai/gpt-4o-mini',
          model: 'xiaomi/mimo-v2-flash',
          messages: [
            { role: 'system', content: SYSTEM_PROMPT },
            ...messages.map(m => ({ role: m.role, content: m.content })),
            { role: 'user', content: userMessage }
          ],
          max_tokens: 500,
          temperature: 0.7
        })
      });

      const data = await response.json();
      console.log('API Response:', data);

      if (data.error) {
        throw new Error(data.error.message || 'API Error');
      }

      if (data.choices && data.choices[0]?.message?.content) {
        setMessages(prev => [...prev, {
          role: 'assistant',
          content: data.choices[0].message.content
        }]);
      } else {
        throw new Error('Invalid response format');
      }
    } catch (error) {
      console.error('Chat error:', error);
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: `Sorry, I'm having trouble connecting right now. Error: ${error.message}. Feel free to reach out via email at vahramoront@proton.me!`
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className={`chatbot-container ${isOpen ? 'open' : ''}`}>
      {/* Phone Frame */}
      <div className="phone-frame">
        {/* Phone Notch */}
        <div className="phone-notch">
          <div className="notch-camera"></div>
          <div className="notch-speaker"></div>
        </div>

        {/* Phone Header */}
        <div className="phone-header">
          <div className="phone-header-left">
            <div className="avatar-small">
              <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
              </svg>
            </div>
            <div className="phone-header-info">
              <span className="phone-header-name">Vahram Oront</span>
              <span className="phone-header-status">
                <span className="status-dot"></span>
                Online
              </span>
            </div>
          </div>
          <button className="phone-close-btn" onClick={() => setIsOpen(false)}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        {/* Messages Area */}
        <div className="phone-messages">
          {messages.map((msg, index) => (
            <div key={index} className={`message ${msg.role}`}>
              <div className="message-bubble">
                {msg.content}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="message assistant">
              <div className="message-bubble typing">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="phone-input-area">
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type a message..."
            disabled={isLoading}
          />
          <button
            className="send-btn"
            onClick={sendMessage}
            disabled={!input.trim() || isLoading}
          >
            <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
              <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
            </svg>
          </button>
        </div>

        {/* Phone Home Indicator */}
        <div className="phone-home-indicator"></div>
      </div>

      {/* Chat Toggle Button */}
      <button
        className={`chat-toggle-btn ${isOpen ? 'hidden' : ''}`}
        onClick={() => setIsOpen(true)}
      >
        <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28">
          <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.17L4 17.17V4h16v12z"/>
          <path d="M7 9h10v2H7zm0-3h10v2H7z"/>
        </svg>
        <span className="chat-toggle-label">Chat with Vahram</span>
      </button>
    </div>
  );
};

export default ChatBot;
