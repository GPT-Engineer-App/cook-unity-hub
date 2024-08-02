import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">Welcome to Cook Unity</h1>
        <p className="text-xl text-gray-600 mb-8">Your one-stop solution for business catering</p>
        <Link to="/login">
          <Button className="bg-yellow-400 hover:bg-yellow-500 text-black w-40">
            Log In to Order
          </Button>
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl">
        <img src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1" alt="Delicious Food 1" className="mx-auto object-cover w-full h-48 rounded-lg shadow-md" />
        <img src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c" alt="Delicious Food 2" className="mx-auto object-cover w-full h-48 rounded-lg shadow-md" />
        <img src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445" alt="Delicious Food 3" className="mx-auto object-cover w-full h-48 rounded-lg shadow-md" />
      </div>
    </div>
  );
};

export default Index;
