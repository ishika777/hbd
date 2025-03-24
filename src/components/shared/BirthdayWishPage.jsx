import React, { useState, useEffect, use } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Cake, Stars } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const BirthdayWishPage = () => {
    const navigate = useNavigate();
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowButton(true);
    }, 13000); // 10 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="max-w-screen w-screen h-screen max-h-screen overflow-hidden bg-gradient-to-b from-indigo-100 to-pink-100 flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full">
        {/* Main birthday card */}
        <Card className="w-full shadow-xl border-0 overflow-hidden">
          <CardContent className="py-3 px-8 text-center">
            <div className="flex justify-center mb-3">
              <Cake className="h-16 w-16 text-pink-500" />
            </div>
            
            <h1 className="text-3xl font-bold text-pink-600 mb-4">Happy Birthday!</h1>
            
            <div className="my-6 text-gray-700 space-y-4">
              <p className="font-medium">Happiiiiiiest bday buddy, thanks for the friendship, thank you for everything and for being with me for this whole time.</p>
              <p>Always follow your ambitions, enjoy every single moment and fill them with your smile.</p>
              <p className="text-pink-600 font-medium">And remember, I am always there for you.</p>
            </div>
            
        

            {/* Hidden button that appears after 10 seconds */}
            {showButton && (
              <button onClick={() => navigate("/final")} className="px-6 py-3 bg-pink-500 text-white font-semibold rounded-md shadow-lg transition-opacity duration-1000 ease-in-out animate-fade-in">
                and at last...
              </button>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default BirthdayWishPage;
