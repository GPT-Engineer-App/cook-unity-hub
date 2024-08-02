import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { User, Activity, Settings } from 'lucide-react';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("actions");
  const navigate = useNavigate();

  const handleSignOut = () => {
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-6">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="info" className="flex items-center justify-center">
              <User className="w-4 h-4 mr-2" />
              My Information
            </TabsTrigger>
            <TabsTrigger value="actions" className="flex items-center justify-center">
              <Activity className="w-4 h-4 mr-2" />
              My Actions
            </TabsTrigger>
            <TabsTrigger value="settings" className="flex items-center justify-center">
              <Settings className="w-4 h-4 mr-2" />
              Settings
            </TabsTrigger>
          </TabsList>
          <TabsContent value="info">
            <h2 className="text-2xl font-bold mb-4">My Information</h2>
            <p>Your account information will be displayed here.</p>
          </TabsContent>
          <TabsContent value="actions">
            <h2 className="text-2xl font-bold mb-4">My Actions</h2>
            <div className="space-y-4 flex flex-col items-center">
              <Button className="w-64 bg-yellow-400 hover:bg-yellow-500 text-black">
                Manage my orders
              </Button>
              <Button className="w-64 bg-yellow-400 hover:bg-yellow-500 text-black">
                Place a new order
              </Button>
              <Button className="w-64 bg-yellow-400 hover:bg-yellow-500 text-black" onClick={handleSignOut}>
                Sign out
              </Button>
            </div>
          </TabsContent>
          <TabsContent value="settings">
            <h2 className="text-2xl font-bold mb-4">Settings</h2>
            <p>Account settings and preferences will be displayed here.</p>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;
