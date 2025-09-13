import React, { useState } from 'react';
import { Send, Bot, User, TrendingUp, AlertCircle } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
  confidence?: number;
}

const ChatInterface = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi Clara! I'm your AI financial buddy. How can I help you manage your money today?",
      sender: 'ai',
      timestamp: new Date(),
      confidence: 95
    }
  ]);
  const [inputText, setInputText] = useState('');

  const quickPrompts = [
    "Can I afford to buy airtime?",
    "How much can I save this week?",
    "Show my spending breakdown",
    "Find me a bursary",
    "Check my credit score"
  ];

  const handleSendMessage = () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse = generateAIResponse(inputText);
      setMessages(prev => [...prev, aiResponse]);
    }, 1000);

    setInputText('');
  };

  const generateAIResponse = (userInput: string): Message => {
    const responses = {
      airtime: {
        text: "Based on your current balance of R2,450 and this week's budget, you can safely spend R50 on airtime. This leaves you R120 above your weekly savings goal! 🎯",
        confidence: 92
      },
      save: {
        text: "Great question! Looking at your spending patterns, you can save an additional R180 this week by: \n• Making coffee at home (save R60) \n• Using the bus instead of Uber twice (save R120) \n\nWant me to set up automatic round-ups?",
        confidence: 88
      },
      spending: {
        text: "Here's your spending breakdown for this month:\n• Food & Dining: R890 (35%)\n• Transport: R420 (17%)\n• Entertainment: R310 (12%)\n• Other: R380 (15%)\n\nYou're doing well! Food spending is slightly high - consider meal prep to save R200/month.",
        confidence: 94
      },
      bursary: {
        text: "I found 3 bursaries matching your profile:\n\n🏆 **UP Merit Bursary** - R15,000\nDeadline: March 15th (87% match)\n\n📚 **NSFAS Top-up Grant** - R8,500\nDeadline: February 28th (92% match)\n\n🎓 **Tech Skills Bursary** - R12,000\nDeadline: April 10th (78% match)\n\nShall I help you apply?",
        confidence: 89
      },
      credit: {
        text: "Your MoolaMate Credit Score is 742 - that's excellent! 🌟\n\nRecent improvements:\n• +15 points for consistent savings\n• +8 points for on-time payments\n\nTo reach 800+:\n• Keep your current saving streak\n• Consider a small credit-building loan\n• Connect with 2 more financially responsible friends",
        confidence: 96
      },
      default: {
        text: "I understand you're asking about your finances. Let me help you with that! Could you be more specific about what you'd like to know? I can help with budgeting, savings, credit building, or finding bursaries.",
        confidence: 75
      }
    };

    const lowerInput = userInput.toLowerCase();
    let response = responses.default;

    if (lowerInput.includes('airtime') || lowerInput.includes('buy')) {
      response = responses.airtime;
    } else if (lowerInput.includes('save') || lowerInput.includes('saving')) {
      response = responses.save;
    } else if (lowerInput.includes('spending') || lowerInput.includes('breakdown')) {
      response = responses.spending;
    } else if (lowerInput.includes('bursary') || lowerInput.includes('scholarship')) {
      response = responses.bursary;
    } else if (lowerInput.includes('credit') || lowerInput.includes('score')) {
      response = responses.credit;
    }

    return {
      id: Date.now().toString(),
      text: response.text,
      sender: 'ai',
      timestamp: new Date(),
      confidence: response.confidence
    };
  };

  const handleQuickPrompt = (prompt: string) => {
    setInputText(prompt);
  };

  return (
    <div className="flex flex-col h-[calc(100vh-8rem)] bg-white rounded-xl shadow-sm border border-gray-100">
      {/* Chat Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center">
            <Bot className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">MoolaMate AI</h3>
            <p className="text-sm text-green-600">● Online</p>
          </div>
        </div>
        <div className="flex items-center space-x-2 text-sm text-gray-500">
          <TrendingUp className="w-4 h-4" />
          <span>Smart Mode</span>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`flex items-start space-x-2 max-w-xs lg:max-w-md ${
              message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''
            }`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                message.sender === 'user' 
                  ? 'bg-indigo-600' 
                  : 'bg-gradient-to-r from-indigo-500 to-purple-600'
              }`}>
                {message.sender === 'user' ? (
                  <User className="w-4 h-4 text-white" />
                ) : (
                  <Bot className="w-4 h-4 text-white" />
                )}
              </div>
              <div className={`rounded-lg p-3 ${
                message.sender === 'user'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-100 text-gray-900'
              }`}>
                <p className="text-sm whitespace-pre-line">{message.text}</p>
                {message.sender === 'ai' && message.confidence && (
                  <div className="flex items-center mt-2 text-xs text-gray-500">
                    <AlertCircle className="w-3 h-3 mr-1" />
                    <span>Confidence: {message.confidence}%</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Prompts */}
      <div className="p-4 border-t border-gray-200">
        <div className="flex flex-wrap gap-2 mb-4">
          {quickPrompts.map((prompt, index) => (
            <button
              key={index}
              onClick={() => handleQuickPrompt(prompt)}
              className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-colors"
            >
              {prompt}
            </button>
          ))}
        </div>

        {/* Input */}
        <div className="flex items-center space-x-2">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            placeholder="Ask me anything about your finances..."
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          />
          <button
            onClick={handleSendMessage}
            disabled={!inputText.trim()}
            className="p-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;