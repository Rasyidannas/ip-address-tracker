function ResultData({ className }) {
  return (
    <div className={`inline-flex py-8 ${className}`}>
      <div className="border-r border-dark-gray/60 px-8">
        <p className="uppercase text-xs font-bold text-dark-gray">
          Ip Addreess
        </p>
        <h4 className="font-medium mt-2 text-very-dark-gray">
          192.212.174.101
        </h4>
      </div>
      <div className="border-r border-dark-gray/60 px-8">
        <p className="uppercase text-xs font-bold text-dark-gray">Location</p>
        <h4 className="font-medium mt-2 text-very-dark-gray">
          Brooklyn, NY 10001
        </h4>
      </div>
      <div className="border-r border-dark-gray/60 px-8">
        <p className="uppercase text-xs font-bold text-dark-gray">Timezone</p>
        <h4 className="font-medium mt-2 text-very-dark-gray">UTC-05:00</h4>
      </div>
      <div className="px-8">
        <p className="uppercase text-xs font-bold text-dark-gray">Isp</p>
        <h4 className="font-medium mt-2 text-very-dark-gray">
          SpaceX Starlink
        </h4>
      </div>
    </div>
  );
}

export default ResultData;
