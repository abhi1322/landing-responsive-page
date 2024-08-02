const Footer = () => {
  return (
    <div className="flex items-center justify-between">
      <ul className="flex gap-4">
        {["Facebook", "Twitter", "Instagram"].map((item, i) => (
          <li
            key={i}
            className="text-neutral-600 hover:text-orange-400 cursor-pointer"
          >
            {item}
          </li>
        ))}
      </ul>
      <div className="flex gap-4 cursor-pointer">
        <img src="/public/assets/Help-Avatar.svg" alt="help-avatar" />
        <div className="flex flex-col ">
          <h6 className="font-['Playfair_Display'] font-[700]">
            Have any question?
          </h6>
          <p className="font-bold">Talk to a specialist</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
