export default function AnnouncementBar() {
  return (
    <div className="bg-uc-dark text-white text-center py-2 px-4 text-sm font-body font-semibold">
      <span className="text-uc-green">🎉 Grand Opening!</span>
      {' '}FREE shipping over $35 · Use code{' '}
      <span className="bg-uc-green text-uc-dark px-2 py-0.5 rounded font-bold">WELCOME15</span>
      {' '}for 15% off your first order
    </div>
  )
}
