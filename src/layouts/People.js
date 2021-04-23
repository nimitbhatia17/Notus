import React from "react";
import { Switch, Route, Redirect, Link, useParams } from "react-router-dom";
import axios from "axios";

// components

import TeacherClassroomNavbar from "components/Navbars/TeacherClassroomNavbar.js";
// import TeacherClassroomNavbar from "components/Navbars/TeacherClassroomNavbar.js";
import TeacherSidebar from "components/Sidebar/TeacherSidebar.js";
// import TeacherSidebar from "components/Sidebar/TeacherSidebar.js";
import FooterAdmin from "components/Footers/FooterAdmin.js";

// views

// import Dashboard from "views/admin/Dashboard.js";
import Tables from "views/admin/Tables.js";
// import Settings from "views/admin/Settings.js";
// import Tables from "views/admin/Tables.js";
// import CardStats from "components/Cards/CardStats.js";
// import CardAddAnnouncement from "components/Cards/CardAddAnnouncement.js";
// import { directive } from "@babel/types";

export default function Admin() {
  //   const [classData, setclassData] = React.useState({});
  //   const [type, setType] = React.useState(null);
  //   const { pos } = useParams();
  //   React.useEffect(() => {
  //     axios({
  //       method: "GET",
  //       withCredentials: true,
  //       url: "http://localhost:5000/classroom",
  //       params: {
  //         pos: pos,
  //       },
  //     }).then((res) => {
  //       console.log(res.data.classData);
  //       setclassData(res.data.classData);
  //       setType(res.data.type);
  //     });
  //   }, [classData.length]);
  //   console.log(classData, "classroom");

  return (
    <>
      <TeacherSidebar />
      <div className='relative md:ml-64 bg-blueGray-100'>
        <TeacherClassroomNavbar />
        <div className='relative bg-lightBlue-600 md:pt-32 pb-32 pt-12'>
          <div className='px-4 md:px-10 mx-auto w-full'>
            <div>
              <Tables />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
