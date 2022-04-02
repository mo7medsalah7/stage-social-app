function HeaderContentItem({
  developer_name,
  developer_title,
  small_content,
  bgColor,
}) {
  return (
    <>
      <div
        className="p-4 rounded shadow-md sm:text-sm md:text-lg flex flex-col bg-gradient-to-br from-fuchsia-500 to-purple-600
      "
      >
        <div className="">
          <h2 className={`font-bold `}>I'm {developer_name}</h2>
          <span className=" px-1 ml-2">{developer_title}</span>
        </div>
        <p>{small_content}</p>
      </div>
    </>
  );
}

export default HeaderContentItem;
