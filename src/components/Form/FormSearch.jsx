import Input from "../UI/Input";
import Button from "../UI/Button";
import IconArrow from "../Icons/IconArrow";

import { useRef, useState } from "react";
import useHttp from "../../hooks/use-http";

function FormSearch({ className }) {
  const domainInput = useRef();
  const { isLoading, error, request: fetchInput } = useHttp();
  const [data, setData] = useState();
  const [errMessage, setErrMessage] = useState();

  const dataTransform = (dataObj) => {
    setData({
      ip: dataObj.ip,
      location: `${dataObj.location.city}, ${dataObj.location.region}, ${dataObj.location.country}`,
      timezone: dataObj.location.timezone,
      isp: dataObj.isp,
      lat: dataObj.location.lat,
      lng: dataObj.location.lng,
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const inputValue = domainInput.current.value;

    //regex
    const ipPattern =
      /^(25[0-5]|2[0-4][0-9]|[0-1]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[0-1]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[0-1]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[0-1]?[0-9][0-9]?)$/;

    const domainPattern =
      /^([a-zA-Z0-9]([a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}$/;

    //check intput data domain or ipAddress
    if (inputValue.match(ipPattern)) {
      fetchInput(
        {
          url: `https://geo.ipify.org/api/v2/country,city?apiKey=at_G8CVSCyiXh633m39e5DOfJMgwlz3o&ipAddress=${inputValue}`,
        },
        dataTransform,
      );
      setErrMessage(null);
    } else if (inputValue.match(domainPattern)) {
      console.log("domain");
      fetchInput(
        {
          url: `https://geo.ipify.org/api/v2/country,city?apiKey=at_G8CVSCyiXh633m39e5DOfJMgwlz3o&domain=${inputValue}`,
        },
        dataTransform,
      );
      setErrMessage(null);
    } else {
      setErrMessage("No domain or IP found. Please check the entered value.");
    }
  };

  return (
    <form className={`${className} flex`} onSubmit={submitHandler}>
      <div className="w-full relative">
        <Input
          ref={domainInput}
          input={{
            className: "last:rounded-l-lg last:py-2 last:px-4 w-full",
            id: "search",
            type: "text",
            placeholder: "Search for any IP address or domain",
          }}
        />
        <span className="absolute text-xs text-[#450a0a] mt-2 text-center left-1/2 -translate-x-1/2 w-full">
          {errMessage}
        </span>
      </div>
      <Button className="bg-very-dark-gray px-4 rounded-r-lg">
        <IconArrow />
      </Button>
    </form>
  );
}

export default FormSearch;
