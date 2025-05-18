
import React, { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gov-neutrals-gray50 px-4">
      <div className="text-center max-w-md">
        <div className="flex justify-center mb-6">
          <div className="h-20 w-20 bg-gov-green rounded-lg flex items-center justify-center text-white text-4xl font-bold">
            404
          </div>
        </div>
        <h1 className="text-3xl font-bold text-gov-neutrals-gray900 mb-4">Page Not Found</h1>
        <p className="text-gov-neutrals-gray600 mb-8">
          We couldn't find the page you're looking for. It might have been moved or doesn't exist.
        </p>
        <div className="space-y-4">
          <Link to="/">
            <Button className="w-full bg-gov-green hover:bg-gov-green-700 text-white">
              Return to Homepage
            </Button>
          </Link>
          <Link to="/help">
            <Button variant="outline" className="w-full border-gov-green text-gov-green hover:bg-gov-green-50">
              Contact Support
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
