import React from "react";

const HtmlRenderer = ({ htmlString }) => {
  return <div dangerouslySetInnerHTML={{ __html: htmlString }} />;
};

export default HtmlRenderer;
