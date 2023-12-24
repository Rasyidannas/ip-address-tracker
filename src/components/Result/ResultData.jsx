import { useContext } from "react";
import DataContext from "../../store/data-context";

function ResultData({ className }) {
  const dataCtx = useContext(DataContext);

  return (
    <div
      className={`inline-flex flex-col md:flex-row gap-4 md:gap-0 py-8 text-center md:text-left w-4/5 md:w-auto max-w-4/5 ${className}`}
    >
      <div className="border-r border-dark-gray/60 px-8">
        <p className="uppercase text-xs font-bold text-dark-gray">
          Ip Addreess
        </p>
        <h4 className="font-medium mt-2 text-very-dark-gray">
          {dataCtx.datas.ip || "No Data"}
        </h4>
      </div>
      <div className="border-r border-dark-gray/60 px-8">
        <p className="uppercase text-xs font-bold text-dark-gray">Location</p>
        <h4 className="font-medium mt-2 text-very-dark-gray">
          {dataCtx.datas.location || "No Data"}
        </h4>
      </div>
      <div className="border-r border-dark-gray/60 px-8">
        <p className="uppercase text-xs font-bold text-dark-gray">Timezone</p>
        <h4 className="font-medium mt-2 text-very-dark-gray">
          {dataCtx.datas.timezone ? `UTC${dataCtx.datas.timezone}` : "No Data"}
        </h4>
      </div>
      <div className="px-8">
        <p className="uppercase text-xs font-bold text-dark-gray">Isp</p>
        <h4 className="font-medium mt-2 text-very-dark-gray">
          {dataCtx.datas.isp || "No Data"}
        </h4>
      </div>
    </div>
  );
}

export default ResultData;
