import linkedin from "../../assets/logo-body.png"
import Homes from "../../assets/icons/home.svg"
import People from "../../assets/icons/people.svg"
import Job from "../../assets/icons/jobs.svg"
import Messages from "../../assets/icons/message.svg"
import Notification from "../../assets/icons/notification.svg"

const MainNavBar = () => {
 
  const NavLinks = [
    {
      icon: Homes,
      name: "Home"
    },
    {
      icon: People,
      name: "Network"
    },
    {
      icon:Job,
      name:"Jobs"
    },
    {
      icon:Messages,
      name:"Messaging"
    },
    {
      icon:Notification,
      name:"Notifications"
    },
   

  ]
  return (
    <div className="bg-white text-textcolor shadow-md top-0 sticky">
      <div className="h-12 flex justify-between items-center px-4 md:px-32">

        <div className="flex gap-2 items-center">
          <img
            src={linkedin}
            alt="LinkedIn Logo"
            className="h-12 rounded-sm"
          />
          <span className="bg-sky-100 flex items-center gap-2 px-2 rounded-sm">
            <box-icon name="search" color="black" size="sm"></box-icon>
            <input
              type="text"
              placeholder="Search"
              className=" bg-transparent w-64 h-8 placeholder:text-textcolor outline-none"
            />
          </span>
        </div>

        <div className="flex flex-row flex-nowrap gap-4 ">
          {NavLinks.map((eachNav, index) => (
            <div key={index} className="nav-item">
              <img src={eachNav.icon} alt={eachNav.name} className="nav-icon" />
              <p className="text-sm">{eachNav.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* <div className="hidden md:flex gap-8 font-thin text-xs items-center">
          
          <div className="flex flex-col items-center  border-l px-4">
            <img src={grid} alt="Get the App" className="h-5 w-5" />
            <span className="flex gap-1 whitespace-nowrap">
              For Business <img src={Carret} className="w-3 h-3 mt-1" />
            </span>
          </div>
          <div className="flex flex-col items-center">
            <img src={premium} alt="Games" className="h-5 w-5" />
            <span className=" whitespace-nowrap">Try Premium for NGN0</span>
          </div>
        </div> */}
    {/* </div> */}
    </div >
  );
};

export default MainNavBar;
