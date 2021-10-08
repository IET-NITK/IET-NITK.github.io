import { navigate } from "gatsby";
import React from "react";
import { run } from "tripetto-runner-autoscroll";
import Layout from "../../components/layout";
import SearchEngineOps from "../../components/seo";
import "../../assets/css/form.css";
import Services from "tripetto-services";
import { IRecruitmentForm } from "../../types/pages";

const RecruitmentForm: React.FC<IRecruitmentForm> = ({ location }) => {
  React.useEffect(() => {
    try{
      const {
        definition,
        styles,
        l10n,
        locale,
        translations,
        snapshot,
        attachments,
        onSubmit,
        onPause,
      } = Services.init({ token: process.env.GATSBY_RECRUITMENT_TRIPETTO });
      run({
        element:
          document.getElementById(
            "tripetto"
          ),
        definition,
        styles,
        l10n,
        locale,
        translations,
        attachments,
        onSubmit,
        snapshot,
        onPause,
        persistent: true,
      });
    } catch(exception) {
      navigate("/recruitment/form");
    }
  });
  const currentYear= new Date().getFullYear();
  return (
    <Layout location={location} showFooter={false}>
      <SearchEngineOps description={`We are open for recruitments! Fill in our ${currentYear} recruitments form now!`} title={`Recruitments Form ${currentYear}`} />
      <div>
        <div className="container vh-100" id="tripetto" />
      </div>
    </Layout>
  );
};

export default RecruitmentForm;
