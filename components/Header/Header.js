import Nav from "./Nav";
import HeaderImage from "./HeaderImage";
import HeaderContentItem from "./HeaderContentItem";

function Header() {
  return (
    <div className="flex space-y-20 p-4 my-0 mx-auto">
      <Nav />

      <div className="grid grid-cols-3 gap-6">
        {/* First Grid Item(column) */}
        <div className=" space-x-10">
          <HeaderImage imageName="woman" />
        </div>

        {/* Second Grid Item(column) */}
        <div className=" grid max-h-0 gap-20">
          <HeaderContentItem
            developer_name="Dane"
            developer_title="JavaScript Developer"
            small_content="Stage is the coolest social media app"
          />
          <HeaderContentItem
            developer_name="Elia"
            developer_title="Reactjs Developer"
            small_content="Stage is the coolest social media app"
            bgColor="red-100"
          />
        </div>
        {/* Third Grid Item(column)  */}
        <div className="flex justify-end items-end space-x-10">
          <HeaderImage imageName="woman2" />
        </div>
      </div>
    </div>
  );
}

export default Header;
