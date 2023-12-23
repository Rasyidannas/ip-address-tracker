import FormSearch from "../Form/FormSearch";

function Header() {
  return (
    <div className="relative h-56">
      <img src="/assets/images/pattern-bg-desktop.png" />
      <h1 className="absolute top-12 left-1/2 -translate-x-1/2 text-3xl font-medium text-white">
        IP Address Tracker
      </h1>
      <FormSearch className="absolute top-24 left-1/2 -translate-x-1/2 w-2/5" />
    </div>
  );
}

export default Header;
