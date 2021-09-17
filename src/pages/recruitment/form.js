import { navigate } from "gatsby"
import React from "react"

import Layout from "../../components/layout"
import SearchEngineOps from "../../components/seo"
import "../../assets/css/form.css"

const RecruitmentForm = ({ location }) => {
  React.useEffect(() => {
    try {
      var tripetto =
        TripettoServices &&
        TripettoServices.init({
          token:
          process.env.GATSBY_RECRUITMENT_TRIPETTO,
        })
      tripetto &&
        TripettoAutoscroll &&
        TripettoAutoscroll.run({
          element: document.getElementById("tripetto"),
          definition: tripetto.definition,
          styles: tripetto.styles,
          l10n: tripetto.l10n,
          locale: tripetto.locale,
          translations: tripetto.translations,
          attachments: tripetto.attachments,
          onSubmit: tripetto.onSubmit,
          snapshot: tripetto.snapshot,
          onPause: tripetto.onPause,
          persistent: true,
        })
    } catch (e) {
      console.log("Navigating")
      navigate("/recruitment/form")
    }
  })
  return (
    <Layout showFooter={false} location={location}>
      <SearchEngineOps title="Recruitments Form"></SearchEngineOps>
      <div>
        <div className="container vh-100" id="tripetto"></div>
      </div>
    </Layout>
  )
}

export default RecruitmentForm
