import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <h1>
        This is going to show accross all about pages like a navigation bar
      </h1>
      {children}
    </div>
  );
};

export default Layout;
