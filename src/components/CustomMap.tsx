// src/components/CustomMap.tsx
'use client';

import { GoogleMap, Marker, LoadScript } from '@react-google-maps/api';
import { useUsers } from '@/hooks/useUsers';
import { User } from '@/types';

// Default coordinates (Bulanc)
const DEFAULT_CENTER = { 
  lat: 12.6649939, 
  lng: 123.8877345 
};

// Generate mock coordinates for users (for demo purposes)
const generateUserCoordinates = (user: User, index: number) => ({
  lat: DEFAULT_CENTER.lat + (index * 0.01),
  lng: DEFAULT_CENTER.lng + (index * 0.01),
  title: user.name
});

export default function CustomMap() {
  const { data: users, loading, error } = useUsers();

  // Set map center based on whether we have users
  const mapCenter = users?.length ? 
    generateUserCoordinates(users[0], 0) : 
    DEFAULT_CENTER;

  if (loading) return (
    <div className="h-[400px] flex items-center justify-center bg-gray-100 rounded-lg">
      <p>Loading map data...</p>
    </div>
  );

  if (error) return (
    <div className="h-[400px] flex items-center justify-center bg-red-50 text-red-600 rounded-lg">
      <p>Error loading user locations: {error}</p>
    </div>
  );

  return (
    <div className="rounded-lg overflow-hidden shadow">
      <LoadScript 
        googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ''}
        loadingElement={<div className="h-[400px] bg-gray-100" />}
      >
        <GoogleMap
          mapContainerStyle={{ width: '100%', height: '400px' }}
          center={mapCenter}
          zoom={users?.length ? 12 : 10}
          options={{
            streetViewControl: false,
            mapTypeControl: false,
            fullscreenControl: false
          }}
        >
          {/* Default marker for Bulanc */}
          <Marker 
            position={DEFAULT_CENTER} 
            icon={{
              url: 'https://maps.google.com/mapfiles/ms/icons/blue-dot.png'
            }}
          />

          {/* User markers */}
          {users?.map((user, index) => (
            <Marker
              key={user.id}
              position={generateUserCoordinates(user, index)}
              title={user.name}
              icon={{
                url: 'https://maps.google.com/mapfiles/ms/icons/red-dot.png'
              }}
            />
          ))}
        </GoogleMap>
      </LoadScript>
      
      <div className="p-3 bg-white border-t">
        <p className="text-sm text-gray-600">
          {users?.length ? `Showing ${users.length} users near Bulanc` : 'No user data available'}
        </p>
      </div>
    </div>
  );
}