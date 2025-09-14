import React, { useState, useEffect, useMemo } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import Dropdownbutton from './Dropdownbutton';

const Chat = () => {
  const [activeTab, setActiveTab] = useState('All');
  const [selectedPerson, setSelectedPerson] = useState(null);
  const [showChatList, setShowChatList] = useState(true);
  const [searchInput, setSearchInput] = useState(''); // Add searchInput state here
  const navigate = useNavigate();
  const location = useLocation();

  const tabs = ['All', 'Read', 'Unread'];

  const allPeople = [
    {
      avatar: 'https://prium.github.io/phoenix/v1.19.0/assets/img/team/20.webp',
      name: 'Sharuka Nijibum',
      lastMessage:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo architecto consequuntur assumenda quae optio porro perspiciatis est, obcaecati similique illum veniam molestiae accusamus voluptas ipsum atque mollitia modi ut soluta?',
      messageDate: 'Yesterday, 11 PM',
      messageStatus: 'active',
    },
    {
      avatar: 'https://prium.github.io/phoenix/v1.19.0/assets/img/team/21.webp',
      name: 'Alexandra Dailey',
      lastMessage: 'Are we still meeting tomorrow?',
      messageDate: 'Yesterday, 9 PM',
      messageStatus: 'active',
    },
    {
      avatar: 'https://prium.github.io/phoenix/v1.19.0/assets/img/team/22.webp',
      name: 'John Doe',
      lastMessage: 'The report is ready for review.',
      messageDate: 'Yesterday, 7 PM',
      messageStatus: 'unactive',
    },
    {
      avatar: 'https://prium.github.io/phoenix/v1.19.0/assets/img/team/21.webp',
      name: 'Alexandra Dailey',
      lastMessage: 'Are we still meeting tomorrow?',
      messageDate: 'Yesterday, 9 PM',
      messageStatus: 'active',
    },
    {
      avatar: 'https://prium.github.io/phoenix/v1.19.0/assets/img/team/22.webp',
      name: 'John Doe',
      lastMessage: 'The report is ready for review.',
      messageDate: 'Yesterday, 7 PM',
      messageStatus: 'unactive',
    },
    {
      avatar: 'https://prium.github.io/phoenix/v1.19.0/assets/img/team/21.webp',
      name: 'Alexandra Dailey',
      lastMessage: 'Are we still meeting tomorrow?',
      messageDate: 'Yesterday, 9 PM',
      messageStatus: 'active',
    },
    {
      avatar: 'https://prium.github.io/phoenix/v1.19.0/assets/img/team/22.webp',
      name: 'John Doe',
      lastMessage: 'The report is ready for review.',
      messageDate: 'Yesterday, 7 PM',
      messageStatus: 'unactive',
    },
    {
      avatar: 'https://prium.github.io/phoenix/v1.19.0/assets/img/team/21.webp',
      name: 'Alexandra Dailey',
      lastMessage: 'Are we still meeting tomorrow?',
      messageDate: 'Yesterday, 9 PM',
      messageStatus: 'active',
    },
    {
      avatar: 'https://prium.github.io/phoenix/v1.19.0/assets/img/team/22.webp',
      name: 'John Doe',
      lastMessage: 'The report is ready for review.',
      messageDate: 'Yesterday, 7 PM',
      messageStatus: 'unactive',
    },
    {
      avatar: 'https://prium.github.io/phoenix/v1.19.0/assets/img/team/21.webp',
      name: 'Alexandra Dailey',
      lastMessage: 'Are we still meeting tomorrow?',
      messageDate: 'Yesterday, 9 PM',
      messageStatus: 'active',
    },
    {
      avatar: 'https://prium.github.io/phoenix/v1.19.0/assets/img/team/22.webp',
      name: 'John Doe',
      lastMessage: 'The report is ready for review.',
      messageDate: 'Yesterday, 7 PM',
      messageStatus: 'unactive',
    },
    {
      avatar: 'https://prium.github.io/phoenix/v1.19.0/assets/img/team/23.webp',
      name: 'Emily Rios',
      lastMessage: 'Can you send me the files?',
      messageDate: 'Yesterday, 6 PM',
      messageStatus: 'active',
    },
    {
      avatar: 'https://prium.github.io/phoenix/v1.19.0/assets/img/team/24.webp',
      name: 'Michael Jaxon',
      lastMessage: 'Let’s review the proposal next week.',
      messageDate: 'Yesterday, 4 PM',
      messageStatus: 'unactive',
    },
  ];

  const readPeople = [
    {
      avatar: 'https://prium.github.io/phoenix/v1.19.0/assets/img/team/25.webp',
      name: 'Eva Green',
      lastMessage: 'Did you get my email?',
      messageDate: 'Yesterday, 8 PM',
      messageStatus: 'active',
    },
    {
      avatar: 'https://prium.github.io/phoenix/v1.19.0/assets/img/team/26.webp',
      name: 'Sophia Mitchell',
      lastMessage: 'Looking forward to the weekend!',
      messageDate: 'Yesterday, 5 PM',
      messageStatus: 'active',
    },
  ];

  const unreadPeople = [
    {
      avatar: 'https://prium.github.io/phoenix/v1.19.0/assets/img/team/27.webp',
      name: 'Liam Neeson',
      lastMessage: 'Let’s catch up.',
      messageDate: 'Yesterday, 5 PM',
      messageStatus: 'unactive',
    },
    {
      avatar: 'https://prium.github.io/phoenix/v1.19.0/assets/img/team/28.webp',
      name: 'Oliver Queen',
      lastMessage: 'Important update on the project.',
      messageDate: 'Yesterday, 3 PM',
      messageStatus: 'unactive',
    },
  ];

  const handleSelectPerson = (person) => {
    setSelectedPerson(person);
    setShowChatList(false);

    // Navigate with the selected person in state
    navigate('/chat', { state: { person } });
  };
  const handleBackButton = () => {
    setSelectedPerson(null);
    setShowChatList(true);
    navigate('/people-list'); // Optional: navigate back to chat list route
  };

  useEffect(() => {
    if (location.pathname === '/people-list') {
      setShowChatList(true);
      setSelectedPerson(null);
    } else if (location.pathname === '/chat' && location.state?.person) {
      setSelectedPerson(location.state.person);
      setShowChatList(false);
    }
  }, [location]);

  const filteredPeople = useMemo(() => {
    // Filter based on the selected tab and search input
    return (
      activeTab === 'All'
        ? allPeople
        : activeTab === 'Read'
        ? readPeople
        : unreadPeople
    ).filter(
      (person) =>
        person.name.toLowerCase().includes(searchInput.toLowerCase()) ||
        person.lastMessage.toLowerCase().includes(searchInput.toLowerCase()) ||
        person.messageDate
          ?.toString()
          .toLowerCase()
          .includes(searchInput.toLowerCase()) ||
        person.date?.toLowerCase().includes(searchInput.toLowerCase()) // Check for city
    );
  }, [allPeople, readPeople, unreadPeople, searchInput, activeTab]);
  return (
    <div className="container m-auto p-2 mt-5">
      <div className="flex gap-5">
        <div
          className={`${
            showChatList ? 'block' : 'hidden'
          } lg:block w-full lg:max-w-[22.5rem] h-full lg:h-[39vw] overflow-y-auto custom-scrollbar py-2 px-5 border`}
        >
          <div>
            <input
              type="text"
              placeholder="People, Groups and Messages..."
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              className="px-4 border h-10 w-full border-gray-300 rounded-md placeholder:text-sm focus:outline-none focus:border-[#4285f4]"
            />
          </div>
          <div className="flex items-center justify-between border rounded-lg relative mt-5">
            {tabs.map((tab) => (
              <button
                key={tab}
                className={`text-sm w-full py-1 relative z-10 ${
                  activeTab === tab ? 'text-blue-600' : 'text-black'
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
            <motion.div
              className="absolute top-0 h-full bg-white rounded-lg border-e border-s"
              initial={false}
              animate={{
                width: `${100 / tabs.length}%`,
                left: `${tabs.indexOf(activeTab) * (100 / tabs.length)}%`,
              }}
              transition={{
                type: 'spring',
                duration: 0.5,
              }}
            />
          </div>
          <div className="mt-5">
            {filteredPeople.map((person, index) => (
              <button
                key={index}
                className={`w-full py-2 px-3 mb-1 rounded-lg ${
                  selectedPerson?.name === person.name
                    ? 'bg-slate-200'
                    : 'hover:bg-gray-200'
                }`}
                onClick={() => handleSelectPerson(person)}
                aria-label={`Select ${person.name} for chat`}
              >
                <div className="flex gap-2 relative">
                  <div
                    className={`h-3 w-3 p-[2px] rounded-full bg-white absolute bottom-0 left-7 overflow-hidden`}
                  >
                    <div
                      className={`${
                        person.messageStatus === 'active'
                          ? 'bg-green-600'
                          : 'bg-gray-400'
                      } h-full w-full rounded-full`}
                    ></div>
                  </div>
                  <img
                    src={person.avatar}
                    alt={`${person.name}'s avatar`}
                    className="w-10 h-10 rounded-full"
                  />
                  <div className="text-start w-full overflow-hidden">
                    <h6 className="text-sm">{person.name}</h6>
                    <p className="text-xs text-gray-500 truncate">
                      {person.lastMessage}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-light">
                      {person.messageDate}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Chat Section */}
        <AnimatePresence>
          {selectedPerson ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className={`${
                showChatList ? 'hidden' : 'block'
              } flex flex-col w-full p-4 border rounded-lg bg-white`}
            >
              <div>
                <button
                  className="block lg:hidden mb-4 px-3 py-2 bg-gray-200 hover:bg-gray-300 rounded-md text-sm"
                  onClick={handleBackButton}
                >
                  ← Back
                </button>
                <div className="border-b px-5 py-2 flex items-center justify-between">
                  <div>
                    <h6 className="text-lg font-semibold">
                      {selectedPerson.name}
                    </h6>
                    <div className="flex items-center gap-2">
                      {/* Status Indicator */}
                      <div
                        className={`${
                          selectedPerson.messageStatus === 'active'
                            ? 'bg-green-600'
                            : 'bg-gray-400'
                        } h-3 w-3 rounded-full`}
                      ></div>
                      <p className="text-sm text-gray-500">
                        {selectedPerson.messageStatus}
                      </p>
                    </div>
                  </div>
                  <div>
                    <Dropdownbutton></Dropdownbutton>
                  </div>
                </div>
              </div>
              <div className="min-h-[22rem] overflow-y-auto">
                <div className="chat chat-start">
                  <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                      <img
                        alt="Tailwind CSS chat bubble component"
                        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                      />
                    </div>
                  </div>
                  <div className="text-sm">
                    Obi-Wan Kenobi
                    <time className="text-xs opacity-50">12:45</time>
                  </div>
                  <div className="chat-bubble text-sm px-3 py-[6px]">
                    You were the Chosen One!You were the Chosen One!You were the
                    Chosen One!You were the Chosen One!You were the Chosen One!
                  </div>
                  <div className="chat-footer opacity-50">Delivered</div>
                </div>
                <div className="chat chat-end">
                  <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                      <img
                        alt="Tailwind CSS chat bubble component"
                        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                      />
                    </div>
                  </div>
                  <div className="chat-header">
                    Anakin
                    <time className="text-xs opacity-50">12:46</time>
                  </div>
                  <div className="chat-bubble text-sm px-3 py-[6px]">
                    I hate you!
                  </div>
                  <div className="chat-footer opacity-50">Seen at 12:46</div>
                </div>
                <div className="chat chat-start">
                  <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                      <img
                        alt="Tailwind CSS chat bubble component"
                        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                      />
                    </div>
                  </div>
                  <div className="chat-header">
                    Obi-Wan Kenobi
                    <time className="text-xs opacity-50">12:45</time>
                  </div>
                  <div className="chat-bubble">You were the Chosen One!</div>
                  <div className="chat-footer opacity-50">Delivered</div>
                </div>
                <div className="chat chat-end">
                  <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                      <img
                        alt="Tailwind CSS chat bubble component"
                        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                      />
                    </div>
                  </div>
                  <div className="chat-header">
                    Anakin
                    <time className="text-xs opacity-50">12:46</time>
                  </div>
                  <div className="chat-bubble">I hate you!</div>
                  <div className="chat-footer opacity-50">Seen at 12:46</div>
                </div>
              </div>
              <div className="w-full py-5 px-3 border-t">
                <input
                  type="text"
                  placeholder="People, Groups and Messages..."
                  className="px-4 flex w-full border h-10 border-gray-300 rounded-md placeholder:text-sm focus:outline-none focus:border-[#4285f4]"
                />
              </div>
            </motion.div>
          ) : (
            ''
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Chat;
