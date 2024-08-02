import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Cook Unity</h1>
        <p className="text-xl text-gray-600 mb-8">Your one-stop solution for business catering</p>
        <Link to="/login">
          <Button className="bg-yellow-400 hover:bg-yellow-500 text-black">
            Log In to Order
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Index;
