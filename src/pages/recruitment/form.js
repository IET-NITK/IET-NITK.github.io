
import React from "react";
import Layout from "../../layouts/main/main";
import SearchEngineOps from "../../elements/seo";
import CustomTripetto from "../../elements/tripetto/tripetto";

const RecruitmentForm = ({ location }) => {
  const currentYear= new Date().getFullYear();
  return (
    <Layout location={location} showFooter={false}>
      <SearchEngineOps 
        description={`We are open for recruitments! Fill in our ${currentYear} recruitments form now!`} 
        title={`Recruitments Form ${currentYear}`} />
        <CustomTripetto id="recruitment_tripetto" redirect={"/recruitment/form"} token={process.env.GATSBY_RECRUITMENT_TRIPETTO} />
    </Layout>
  );
};

export default RecruitmentForm;
