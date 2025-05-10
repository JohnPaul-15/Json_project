// In your component (e.g., src/components/LocationMap.tsx)
export default function LocationMap() {
  return (
    <div className="w-full h-[400px]">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124573.15603582897!2d123.8302829740191!3d12.65383173712385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a0d168a6bcb5a3%3A0x24c94298cb5be0b6!2sBulan%2C%20Sorsogon!5e0!3m2!1sen!2sph!4v1746811434803!5m2!1sen!2sph" width="600" height="450" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div>
  );
}