'use client';

import StretchyLine from '../components/ui/StretchyLine';

export default function DemoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 p-8">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            GSAP Stretchy Line Demo
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Interactive SVG path animations using GSAP. Hover over the lines to see them stretch and bounce back!
          </p>
        </div>

        {/* Demo 1: Basic */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-white">Basic Stretchy Line</h2>
          <div className="bg-black/30 rounded-lg p-8">
            <StretchyLine 
              width={800}
              height={200}
              strokeColor="white"
              strokeWidth={3}
            />
          </div>
        </div>

        {/* Demo 2: Colored */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-white">Colored Lines</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-black/30 rounded-lg p-6">
              <StretchyLine 
                width={300}
                height={150}
                strokeColor="#ff6b6b"
                strokeWidth={4}
              />
            </div>
            <div className="bg-black/30 rounded-lg p-6">
              <StretchyLine 
                width={300}
                height={150}
                strokeColor="#4ecdc4"
                strokeWidth={4}
              />
            </div>
            <div className="bg-black/30 rounded-lg p-6">
              <StretchyLine 
                width={300}
                height={150}
                strokeColor="#45b7d1"
                strokeWidth={4}
              />
            </div>
          </div>
        </div>

        {/* Demo 3: Different Sizes */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-white">Different Sizes</h2>
          <div className="space-y-8">
            <div className="bg-black/30 rounded-lg p-6">
              <StretchyLine 
                width={600}
                height={80}
                strokeColor="#f9ca24"
                strokeWidth={2}
              />
            </div>
            <div className="bg-black/30 rounded-lg p-6">
              <StretchyLine 
                width={400}
                height={120}
                strokeColor="#6c5ce7"
                strokeWidth={5}
              />
            </div>
          </div>
        </div>

        {/* Instructions */}
        <div className="bg-blue-900/30 rounded-lg p-8 border border-blue-500/30">
          <h3 className="text-xl font-semibold text-white mb-4">How it works:</h3>
          <ul className="text-gray-300 space-y-2">
            <li>• <strong>Mouse Move:</strong> The line follows your cursor with a smooth animation</li>
            <li>• <strong>Mouse Leave:</strong> The line bounces back to its original position with an elastic effect</li>
            <li>• <strong>GSAP:</strong> Uses GSAP's powerful animation engine for smooth transitions</li>
            <li>• <strong>SVG Path:</strong> Manipulates the SVG path's 'd' attribute for the stretching effect</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
