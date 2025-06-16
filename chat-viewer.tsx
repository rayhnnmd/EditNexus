
import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Message {
  from: string;
  text: string;
  time: string;
}

interface Chat {
  id: string;
  client: string;
  editor: string;
  messages: Message[];
}

const AdminChatViewer = () => {
  const [chats, setChats] = useState<Chat[]>([]);
  const [selectedChat, setSelectedChat] = useState<Chat | null>(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fakeChats: Chat[] = [
      {
        id: "chat1",
        client: "@client123",
        editor: "@editor456",
        messages: [
          { from: "@client123", text: "Hello! I need a reel edit", time: "10:01 AM" },
          { from: "@editor456", text: "Sure! Send files", time: "10:02 AM" },
        ],
      },
    ];
    setChats(fakeChats);
  }, []);

  const filteredChats = chats.filter(
    (c) => c.client.toLowerCase().includes(search.toLowerCase()) || c.editor.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex h-screen">
      <div className="w-1/3 border-r p-4">
        <div className="flex items-center gap-3 mb-4">
          <img src="/logo-editnexus.png" alt="EditNexus Logo" className="h-10" />
          <h1 className="text-xl font-bold">Admin Chat Viewer</h1>
        </div>
        <Input placeholder="Search by username" value={search} onChange={(e) => setSearch(e.target.value)} />
        <ScrollArea className="h-full mt-4">
          {filteredChats.map((chat) => (
            <Card key={chat.id} className="mb-2 cursor-pointer hover:bg-gray-100" onClick={() => setSelectedChat(chat)}>
              <CardContent>
                <p className="font-semibold">{chat.client} ↔ {chat.editor}</p>
                <p className="text-sm text-gray-500">{chat.messages[chat.messages.length - 1]?.text.slice(0, 30)}...</p>
              </CardContent>
            </Card>
          ))}
        </ScrollArea>
      </div>
      <div className="w-2/3 p-4">
        {selectedChat ? (
          <div className="space-y-2">
            <h2 className="text-xl font-bold">Chat between {selectedChat.client} and {selectedChat.editor}</h2>
            <ScrollArea className="h-[85vh] border rounded-xl p-4">
              {selectedChat.messages.map((msg, index) => (
                <div key={index} className="mb-2">
                  <span className="font-semibold">{msg.from}:</span> {msg.text}
                  <span className="text-xs text-gray-400 ml-2">{msg.time}</span>
                </div>
              ))}
            </ScrollArea>
          </div>
        ) : (
          <p className="text-gray-500">Select a chat to view conversation</p>
        )}
      </div>
    </div>
  );
};

export default AdminChatViewer;
