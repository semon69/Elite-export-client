import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useEffect } from "react";
import SingleClass from "../Home/SingleClass.jsx/SingleClass";
import { Helmet } from "react-helmet-async";

const Classes = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const { data: classes = [] } = useQuery({
    queryKey: ["classes"],
    queryFn: async () => {
      const res = await axios(
        "https://sports-acedemy-server.vercel.app/classes"
      );
      return res.data;
    },
  });
  const approveClasses = classes.filter(
    (classe) => classe.status == "approved"
  );

  return (
    <div className="pt-24">
      <Helmet>
        <title>Elite Export || Classes</title>
      </Helmet>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {approveClasses.map((cls) => (
          <SingleClass key={cls._id} cls={cls}></SingleClass>
        ))}
      </div>
    </div>
  );
};

export default Classes;
