import { useState } from "react";
import BottomNavigation from "../../../components/BottomNavigation";
import SettingsIcon from "./SettingsIcon";
import Plans from "./SettingsGeneral/Plans";
import SuperSideNav from "../../../components/SideNav/SuperSideNav";
import SuperHeader from "../../../components/Headers/SuperHeader";
import GeneralInformation from "../../../components/GeneralInformation";

const SuperSettings = () => {
  const [activeIndex, setActiveIndex] = useState<any>(0);

  return (
    <div id='page-wrapper'>
      <SuperSideNav />
      <SuperHeader />
      <BottomNavigation />
      <main>
        <div className='settings_container_title'>
          <div>
            <h3>Settings</h3>
            <p>Manage your account settings</p>
          </div>

          <div className='settings_container_title_btn'>
            <button className='btn'>Save change</button>
          </div>
        </div>

        <div className='settings_container_main'>
          {/* Settings Icon */}
          <SettingsIcon
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
          />

          {/* General Information */}
          {activeIndex === 0 && <GeneralInformation />}
          {activeIndex === 1 && <Plans />}
        </div>
      </main>
    </div>
  );
};

export default SuperSettings;
