import "../stylesheets/text.css"
import "../stylesheets/design-elements.css"
import profileImage from "../resources/images/profile.png";

export default function MainPage() {
  return (
    <div class="background">
      <div className="design-circle mt-[50px]">
      </div>  
      <div className="absolute
        z-10 
        flex 
        flex-col">
        <h1 className="mt-[140px]">
          Hi I am
        </h1>
        <h2>
          Haleema!  
        </h2>
        <h1 className="mt-[150px]">
          I'm an aspiring 
        </h1>
        <h2>
          full stack developer
        </h2>
      </div>
      <div className="bg-highlight
      absolute
      w-[500px]
      h-[500px]
      rounded-full
      right-[80px]
      opacity-[70%]
      z-5
      mt-[100px]"
      >
      </div>
      <img 
        src={profileImage} 
        alt="Profile" 
        className="w-[497px] 
          h-[497px] 
          rounded-full 
          object-cover
          mt-[70px]
          absolute
          right-[50px]
          z-10" />
    </div>
  );
}
